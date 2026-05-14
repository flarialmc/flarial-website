/*
  Post-build: strip <script noModule> tags. We've set browserslist to
  modern browsers (ES2020+), so legacy bundles are dead weight — every
  client we support ignores them anyway, and Lighthouse still counts
  the bytes against page weight.
*/
import fs from "node:fs/promises";
import path from "node:path";

const OUT = path.join(process.cwd(), "out");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(p)));
    else if (e.name.endsWith(".html")) files.push(p);
  }
  return files;
}

const reTag = /<script[^>]*\bnoModule\b[^>]*>\s*<\/script>/g;
const reSelfClose = /<script[^>]*\bnoModule\b[^>]*\/>/g;

let total = 0;
for (const file of await walk(OUT)) {
  let html = await fs.readFile(file, "utf8");
  const before = html.length;
  html = html.replace(reTag, "").replace(reSelfClose, "");
  if (html.length !== before) {
    total += 1;
    await fs.writeFile(file, html);
  }
}
console.log(`Stripped noModule scripts from ${total} HTML file(s)`);
