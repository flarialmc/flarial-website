#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import os from "node:os";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const WINDOWS_CATEGORIES = ["Combat", "HUD", "Misc", "Movement", "Render", "Utility"];
const SOURCE_ALIASES = new Map([
  ["CPSCounter", "CPS"],
  ["DVD", "DVD Screen"],
  ["Module202020", "202020"],
  ["MEM", "Memory"],
  ["NickModule", "Nick"],
  ["FreeLook", "Freelook"],
  ["JavaDebugMenu", "DebugMenu"],
  ["DiscordRPC", "Misc/DiscordRPC"],
  ["DoomModule", "Doom"],
  ["MaterialBinLoader", "MaterialBinLoader"],
]);

const CATEGORY_BY_NAME = new Map([
  ...["Block Hit", "Bow Sensitivity", "CPS Limiter", "Crystal Optimizer", "Durability Warning", "Hit Ping", "Hitbox", "Hurt Color", "No Hurt Cam", "Opponent Reach", "Reach Counter"].map((n) => [n, "Combat"]),
  ...["Auto Sprint", "FreeLook", "FOV Changer", "Java Dynamic FOV", "Java View Bobbing", "Minimal View Bobbing", "Null Movement", "Raw Input Buffer", "Sens Multiplier", "SnapLook", "Toggle Sneak", "Zoom"].map((n) => [n, "Movement"]),
  ...["Animations", "Block Outline", "Chunk Border", "Crosshair", "Custom Crosshair", "Deepfry", "Depth Of Field", "Dynamic Lighting", "Fire Height", "Fog Color", "Fullbright", "Glint Color", "Motion Blur", "Nametag", "Panorama Shader", "Particle Multiplier", "Render Option", "Saturation", "Shader Loader", "Subtitles", "Upside Down", "View Model"].map((n) => [n, "Render"]),
  ...["Auto GG", "Command Hotkey", "Hive Utils", "Inventory HUD", "IP Display", "Item Counter", "Item Tracker", "Locator Bar", "Message Logger", "Mousestrokes", "Movable Bossbar", "Movable Chat", "Movable Coordinates", "Movable Day Counter", "Movable Hotbar", "Movable HUD", "Movable Paperdoll", "Movable Scoreboard", "Movable Title", "Player Notifier", "Pot Counter", "Speed Display", "Stopwatch", "Tab List", "Text Hotkey", "TNT Timer", "Waypoints", "Zeqa Utils", "NetherGames Utils"].map((n) => [n, "Utility"]),
]);

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function writeIfChanged(file, content) {
  const old = fs.existsSync(file) ? read(file) : "";
  if (old !== content) fs.writeFileSync(file, content);
}

function parseGeneratedArray(file, exportName) {
  const text = read(file);
  const match = text.match(new RegExp(`export const ${exportName} = ([\\s\\S]*?) as const`));
  if (!match) throw new Error(`Could not parse ${exportName} from ${file}`);
  return JSON.parse(match[1]);
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { "User-Agent": "flarial-website-module-sync" } }, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, dest).then(resolve, reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`GET ${url} failed: ${res.statusCode}`));
        return;
      }
      const out = fs.createWriteStream(dest);
      res.pipe(out);
      out.on("finish", () => out.close(resolve));
    });
    req.on("error", reject);
  });
}

async function githubTarball(repo, branch) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), `flarial-${repo.replace("/", "-")}-`));
  const tgz = path.join(tmp, "source.tgz");
  await download(`https://codeload.github.com/${repo}/tar.gz/refs/heads/${branch}`, tgz);
  const result = spawnSync("tar", ["-xzf", tgz, "-C", tmp], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(result.stderr || result.stdout || `tar failed for ${repo}`);
  const root = fs.readdirSync(tmp).map((name) => path.join(tmp, name)).find((p) => fs.statSync(p).isDirectory());
  if (!root) throw new Error(`No source root in ${repo} tarball`);
  return root;
}

async function resolveSource(localRelative, repo, branch = "main") {
  const mode = process.env.SYNC_MODULES_SOURCE || "local";
  const local = path.resolve(repoRoot, localRelative);
  if (mode !== "github" && fs.existsSync(local)) return local;
  try {
    return await githubTarball(repo, branch);
  } catch (error) {
    if (fs.existsSync(local)) {
      console.warn(`[sync-module-list] GitHub fetch failed for ${repo}; falling back to ${local}: ${error.message}`);
      return local;
    }
    throw error;
  }
}

function stripCommentsAndDebugBlocks(source) {
  return source
    .replace(/#ifdef __DEBUG__[\s\S]*?#endif/g, "")
    .replace(/#ifdef DEV[\s\S]*?#endif/g, "")
    .replace(/#ifdef COMPILE_DOOM[\s\S]*?#endif/g, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "");
}

function activeWindowsClasses(windowsRoot) {
  const managerPath = path.join(windowsRoot, "src/Client/Module/Manager.cpp");
  const manager = stripCommentsAndDebugBlocks(read(managerPath));
  return Array.from(new Set([...manager.matchAll(/addModule<\s*([A-Za-z0-9_]+)\s*>/g)].map((m) => m[1])));
}

function activeAndroidClasses(androidRoot) {
  const managerPath = path.join(androidRoot, "app/src/main/cpp/src/modules/ModuleManager.cpp");
  const text = stripCommentsAndDebugBlocks(read(managerPath));
  const classes = [];
  for (const block of text.matchAll(/push<([\s\S]*?)>\s*\(/g)) {
    classes.push(...block[1].split(/[,\s]+/).map((x) => x.trim()).filter(Boolean));
  }
  return Array.from(new Set(classes));
}

function walk(dir, files = []) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) walk(full, files);
    else if (/\.(hpp|cpp)$/.test(item.name) && !item.name.endsWith(".bak")) files.push(full);
  }
  return files;
}

function constructorDetails(root, className, modulesDir) {
  const files = walk(path.join(root, modulesDir));
  const classRe = new RegExp(`${className.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\([^)]*\\)\\s*(?::|\\{)[\\s\\S]{0,400}?Module\\(([^;{}]*)`, "m");
  for (const file of files) {
    const text = read(file);
    const m = text.match(classRe);
    if (!m) continue;
    const args = m[1];
    const strings = [...args.matchAll(/"((?:\\.|[^"\\])*)"/g)].map((x) => x[1].replace(/\\n/g, " ").replace(/\\'/g, "'"));
    const icon = args.match(/\b(IDR_[A-Z0-9_]+_PNG)\b/)?.[1];
    return { name: strings[0], description: strings[1] || strings[0] || className, iconResource: icon };
  }
  return null;
}

function resourceMap(windowsRoot) {
  const rc = path.join(windowsRoot, "src/Assets/Assets.rc");
  if (!fs.existsSync(rc)) return new Map();
  const map = new Map();
  for (const m of read(rc).matchAll(/(IDR_[A-Z0-9_]+_PNG)\s+PNG\s+"Data\\\\([^"]+)"/g)) {
    map.set(m[1], `/mod-icons/${m[2].replace(/\\/g, "/")}`);
  }
  return map;
}

function makeWindowsDetails(base, windowsRoot) {
  const bySource = new Map(base.map((entry) => [entry.source, entry]));
  const byName = new Map(base.map((entry) => [entry.name.toLowerCase(), entry]));
  const res = resourceMap(windowsRoot);
  const output = [];
  const missing = [];

  for (const className of activeWindowsClasses(windowsRoot)) {
    const sourceKey = SOURCE_ALIASES.get(className) || className;
    const existing = bySource.get(sourceKey) || bySource.get(className);
    if (existing) {
      output.push(existing);
      continue;
    }

    const parsed = constructorDetails(windowsRoot, className, "src/Client/Module/Modules");
    if (!parsed?.name) {
      missing.push(className);
      continue;
    }
    const duplicate = byName.get(parsed.name.toLowerCase());
    if (duplicate) {
      output.push({ ...duplicate, source: sourceKey });
      continue;
    }
    const iconResource = parsed.iconResource || "IDR_SKULL_PNG";
    output.push({
      name: parsed.name,
      description: parsed.description || parsed.name,
      iconResource,
      icon: res.get(iconResource) || "/mod-icons/skull.png",
      settingsCount: 0,
      category: CATEGORY_BY_NAME.get(parsed.name) || "Misc",
      source: sourceKey,
    });
  }

  // Keep curated/catalog-only modules that are intentionally present but not in the current production registration list.
  for (const entry of base) {
    if (!output.some((item) => item.name === entry.name)) output.push(entry);
  }

  if (missing.length) console.warn(`[sync-module-list] Windows modules without parsed constructors: ${missing.join(", ")}`);
  return output.sort((a, b) => WINDOWS_CATEGORIES.indexOf(a.category) - WINDOWS_CATEGORIES.indexOf(b.category) || a.name.localeCompare(b.name));
}

function makeAndroidDetails(base, androidRoot) {
  const bySource = new Map(base.map((entry) => [entry.source, entry]));
  const output = [];
  const missing = [];
  for (const className of activeAndroidClasses(androidRoot)) {
    const existing = bySource.get(className);
    if (existing) {
      output.push(existing);
      continue;
    }
    const parsed = constructorDetails(androidRoot, className, "app/src/main/cpp/src/modules/impl");
    if (!parsed?.name) {
      missing.push(className);
      continue;
    }
    output.push({
      name: parsed.name === "Reach" ? "Reach Counter" : parsed.name,
      description: parsed.name === "Reach" ? "Displays your last hit distance only. This is not a reach cheat or reach extender." : parsed.description || parsed.name,
      icon: "/mod-icons/skull.png",
      settingsCount: 0,
      category: CATEGORY_BY_NAME.get(parsed.name) || CATEGORY_BY_NAME.get(parsed.name === "Reach" ? "Reach Counter" : parsed.name) || "HUD",
      source: className,
    });
  }
  if (missing.length) console.warn(`[sync-module-list] Android modules without parsed constructors: ${missing.join(", ")}`);
  return output.sort((a, b) => WINDOWS_CATEGORIES.indexOf(a.category) - WINDOWS_CATEGORIES.indexOf(b.category) || a.name.localeCompare(b.name));
}

function formatWindows(details) {
  return `export type DllCssModuleCategory = "Combat" | "HUD" | "Misc" | "Movement" | "Render" | "Utility";\n\nexport type DllCssModuleDetail = {\n  name: string;\n  description: string;\n  iconResource: string;\n  icon: string;\n  settingsCount: number;\n  category: DllCssModuleCategory;\n  source: string;\n};\n\nexport const dllCssModuleDetails = ${JSON.stringify(details, null, 2)} as const satisfies readonly DllCssModuleDetail[];\n`;
}

function formatAndroid(details) {
  return `import type { DllCssModuleCategory } from "./dll-css-module-details";\n\nexport type AndroidModuleDetail = {\n  name: string;\n  description: string;\n  icon: string;\n  settingsCount: number;\n  category: DllCssModuleCategory;\n  source: string;\n};\n\nexport const androidModuleDetails = ${JSON.stringify(details, null, 2)} as const satisfies readonly AndroidModuleDetail[];\n`;
}

const windowsFile = path.join(repoRoot, "app/docs/dll-css-module-details.ts");
const androidFile = path.join(repoRoot, "app/docs/android-module-details.ts");
const baseWindows = parseGeneratedArray(windowsFile, "dllCssModuleDetails");
const baseAndroid = fs.existsSync(androidFile)
  ? parseGeneratedArray(androidFile, "androidModuleDetails")
  : (() => {
      const article = read(path.join(repoRoot, "app/docs/articles/article-data.ts"));
      const m = article.match(/export const androidModuleDetails = ([\s\S]*?\]) satisfies/);
      if (!m) return [];
      return Function(`return (${m[1]})`)();
    })();

const windowsRoot = await resolveSource("../dll-css", "flarialmc/dll-css");
const androidRoot = await resolveSource("../android", "flarialmc/android");
const windowsDetails = makeWindowsDetails(baseWindows, windowsRoot);
const androidDetails = makeAndroidDetails(baseAndroid, androidRoot);

writeIfChanged(windowsFile, formatWindows(windowsDetails));
writeIfChanged(androidFile, formatAndroid(androidDetails));

console.log(`[sync-module-list] Windows modules: ${windowsDetails.length}`);
console.log(`[sync-module-list] Android modules: ${androidDetails.length}`);
