import type { DocsArticle } from "../docs-types";
import {
  BookOpen,
  Box,
  CheckCircle2,
  CodeBlock,
  Compass,
  CopyablePath,
  DocsHeading,
  Download,
  ExternalLink,
  FileCode2,
  Image,
  InfoCard,
  InlineCode,
  Layers3,
  Link,
  ListChecks,
  MonitorCog,
  MonitorUp,
  ShieldCheck,
  Sparkles,
  Smartphone,
  SupportedVersions,
  sectionFrameClass,
} from "./article-kit";
import {
  blockableAliases,
  blockableModules,
  clearPayload,
  configExample,
  dllCssModulesByCategory,
  flow,
  nametagIcons,
  privateConfigExample,
  restrictOnePayload,
  restrictThreePayload,
  scriptingExample,
  serverImplementationNotes,
} from "./article-data";

export const configsArticle: DocsArticle = {
    slug: "configs",
    title: "Configs",
    summary: "Configuration system for Flarial Client.",
    icon: Box,
    toc: [],
    render: () => (
      <div className="grid gap-4">
        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="overview">Overview</DocsHeading>
          <p>
            Flarial&apos;s config system keeps the client feeling personal between sessions. It tracks which modules
            are enabled, keybinds, favorites, HUD positions, visual styling, text formats, client-wide options,
            active config selection, and script settings.
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            <InfoCard icon={<CheckCircle2 size={16} className="text-[var(--color-accent)]" />} title="Per-profile">
              <p>Each config is a JSON profile, usually starting at <InlineCode>default.json</InlineCode>.</p>
            </InfoCard>
            <InfoCard icon={<MonitorCog size={16} className="text-[var(--color-accent)]" />} title="Module-aware">
              <p>Every registered module owns a settings object keyed by its display name.</p>
            </InfoCard>
            <InfoCard icon={<FileCode2 size={16} className="text-[var(--color-accent)]" />} title="Script-ready">
              <p>Scripting modules store their own JSON files under the scripting config folder.</p>
            </InfoCard>
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="storage-layout">Storage layout</DocsHeading>
          <p>
            The client builds its folders from <InlineCode>PlatformUtils::getRoamingPath()</InlineCode>. Modern
            installs normally use the GDK-style folder first. UWP paths are still supported for older installs and
            migration, but most users should look at the GDK paths.
          </p>
          <div className="grid gap-5">
            <div className="space-y-3">
              <h3 className="font-display text-[18px] font-semibold text-white">GDK</h3>
              <div className="grid gap-3">
                {[
                  ["Client root", "%localappdata%\\Flarial\\Client", "Main folder for modern GDK/non-UWP installs."],
                  ["Config directory", "%localappdata%\\Flarial\\Client\\Config", "Stores config profiles, PRIVATE, and Legacy imports."],
                  ["Active profile", "%localappdata%\\Flarial\\Client\\Config\\default.json", "The default module-profile JSON file."],
                  ["Private state", "%localappdata%\\Flarial\\Client\\Config\\PRIVATE", "Global client settings and the active config pointer."],
                  ["Script configs", "%localappdata%\\Flarial\\Client\\Scripts\\Configs", "Separate settings files for scripting modules."],
                ].map(([title, path, detail]) => (
                  <div key={title} className="grid gap-2 rounded-[var(--radius-xl)] bg-black/25 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-display text-[15px] font-semibold text-white">{title}</span>
                      <span className="rounded-full bg-[var(--color-bg-subtle)] px-2.5 py-1 text-[11px] text-[var(--color-text-mute)]">Run-ready</span>
                    </div>
                    <CopyablePath value={path} />
                    <p className="text-[13px] text-[var(--color-text-mute)]">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-[18px] font-semibold text-white">UWP</h3>
              <div className="grid gap-3">
                {[
                  ["Client root", "%localappdata%\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\RoamingState\\Flarial", "Older UWP-style client folder."],
                  ["Config directory", "%localappdata%\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\RoamingState\\Flarial\\Config", "Older UWP config profile location."],
                  ["Active profile", "%localappdata%\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\RoamingState\\Flarial\\Config\\default.json", "Older UWP default module-profile JSON file."],
                  ["Private state", "%localappdata%\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\RoamingState\\Flarial\\Config\\PRIVATE", "Older UWP global client settings file."],
                ].map(([title, path, detail]) => (
                  <div key={title} className="grid gap-2 rounded-[var(--radius-xl)] bg-black/25 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-display text-[15px] font-semibold text-white">{title}</span>
                      <span className="rounded-full bg-black/25 px-2.5 py-1 text-[11px] text-[var(--color-text-mute)]">Legacy</span>
                    </div>
                    <CopyablePath value={path} />
                    <p className="text-[13px] text-[var(--color-text-mute)]">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="file-model">File model</DocsHeading>
          <p>
            Flarial separates global client state from module profile state. The active profile is stored in
            <InlineCode>PRIVATE</InlineCode>, while module settings are saved into the selected <InlineCode>.json</InlineCode>
            config file.
          </p>
          <div className="grid gap-4">
            <div className="space-y-3">
              <h3 className="font-display text-[17px] font-semibold text-white">PRIVATE</h3>
              <p>
                Stores client-wide settings such as fonts, blur intensity, VSync/Better Frames toggles, watermark
                options, command prefix, animation preferences, RGB settings, and <InlineCode>currentConfig</InlineCode>.
              </p>
              <CodeBlock>{privateConfigExample}</CodeBlock>
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-[17px] font-semibold text-white">Config profile JSON</h3>
              <p>
                Stores a top-level object where each key is a module name. Each module value is that module&apos;s
                settings object, generated through <InlineCode>Settings::ToJson()</InlineCode>.
              </p>
              <CodeBlock>{configExample}</CodeBlock>
            </div>
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="stored-data">Stored data</DocsHeading>
          <div className="grid gap-3 md:grid-cols-2">
            <InfoCard icon={<Layers3 size={16} className="text-[var(--color-accent)]" />} title="Module state">
              <p>Saved values include <InlineCode>enabled</InlineCode>, <InlineCode>favorite</InlineCode>, primary and extra keybinds, and each module&apos;s custom options.</p>
            </InfoCard>
            <InfoCard icon={<Compass size={16} className="text-[var(--color-accent)]" />} title="HUD placement">
              <p>HUD modules persist <InlineCode>percentageX</InlineCode> and <InlineCode>percentageY</InlineCode>, so dragged overlays return to the same screen position.</p>
            </InfoCard>
            <InfoCard icon={<MonitorCog size={16} className="text-[var(--color-accent)]" />} title="Visual style">
              <p>Scale, background, border, glow, shadow, opacity, color hex strings, RGB flags, text alignment, padding, rotation, and rectangle sizing can all be saved.</p>
            </InfoCard>
            <InfoCard icon={<FileCode2 size={16} className="text-[var(--color-accent)]" />} title="Value types">
              <p>The settings container serializes primitive JSON values: booleans, integers, floats, and strings.</p>
            </InfoCard>
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="load-save-flow">Load/save flow</DocsHeading>
          <ol className="grid gap-3">
            {[
              "During client startup, Flarial creates the client, Config, Scripts, assets, logs, Crosshairs, and MessageLogger directories if needed.",
              "Legacy config data is detected first. Older main.flarial and per-module .flarial files can be moved under Config\\Legacy and appended into the new settings format.",
              "PRIVATE is loaded to discover the selected currentConfig, then that config JSON is parsed into Client::globalSettings.",
              "Each module calls loadSettings(), reads its object from Client::globalSettings[moduleName], applies defaults for missing keys, then enables itself if its saved enabled value is true.",
              "When saving, Flarial writes every module's Settings JSON into a temporary .tmp file, renames it over the active config, then saves script settings too.",
            ].map((item, index) => (
              <li key={item} className="grid grid-cols-[34px_minmax(0,1fr)] gap-3 rounded-[var(--radius-xl)] bg-black/25 p-4">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-accent)] font-display text-[13px] font-semibold text-white">
                  {index + 1}
                </span>
                <span className="self-center text-[14px] leading-relaxed text-[var(--color-text)]">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="config-actions">Config actions</DocsHeading>
          <div className="grid gap-3 md:grid-cols-3">
            <InfoCard icon={<FileCode2 size={16} className="text-[var(--color-accent)]" />} title="Create">
              <p><InlineCode>createConfig</InlineCode> creates a file in the Config folder and immediately switches to it.</p>
            </InfoCard>
            <InfoCard icon={<CheckCircle2 size={16} className="text-[var(--color-accent)]" />} title="Switch">
              <p><InlineCode>switchConfig</InlineCode> updates <InlineCode>currentConfig</InlineCode>, saves the old state, saves PRIVATE, then reloads PRIVATE.</p>
            </InfoCard>
            <InfoCard icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />} title="Delete">
              <p>Deleting a config switches back to <InlineCode>default.json</InlineCode> first, then removes the selected file or folder.</p>
            </InfoCard>
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="sharing-configs">Sharing configs</DocsHeading>
          <p>
            Configs are meant to be portable. A normal shared config is just the selected <InlineCode>.json</InlineCode>
            profile from the Config folder. The <InlineCode>PRIVATE</InlineCode> file should usually stay yours because
            it controls client-wide preferences and which config is active.
          </p>
          <Link
            href="https://marketplace.flarial.xyz/"
            target="_blank"
            rel="noreferrer"
            className="flex min-w-0 items-center justify-between gap-3 rounded-[var(--radius-xl)] border border-[rgba(255,35,58,0.22)] bg-black/25 p-4 text-white transition-colors hover:bg-[var(--color-bg-subtle)]"
          >
            <span className="flex min-w-0 items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[var(--radius-md)] bg-[var(--color-accent)]/15">
                <Sparkles size={18} className="text-[var(--color-accent)]" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[16px] font-semibold">Configs Marketplace</span>
                <span className="mt-1 block text-[13px] leading-relaxed text-[var(--color-text-mute)]">
                  Browse and share community configs through the Flarial Marketplace.
                </span>
              </span>
            </span>
            <ExternalLink size={17} className="shrink-0 text-[var(--color-accent)]" />
          </Link>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/25">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/uUb3syJwjzc"
                title="How to import configs in Flarial Client"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <InfoCard icon={<FileCode2 size={16} className="text-[var(--color-accent)]" />} title="Share a single config">
              <p>Open the configs folder and send the chosen <InlineCode>.json</InlineCode> file from the Config directory.</p>
            </InfoCard>
            <InfoCard icon={<Download size={16} className="text-[var(--color-accent)]" />} title="Import JSON">
              <p>The receiver can then place it in their configs folder. Flarial&apos;s importer accepts <InlineCode>.json</InlineCode> files. After importing, the new config will be available for use after you reload the configs through the chat command <InlineCode>.configs reload</InlineCode>.</p>
            </InfoCard>
            <InfoCard icon={<Box size={16} className="text-[var(--color-accent)]" />} title="Legacy ZIPs">
              <p>Legacy config ZIPs are extracted under <InlineCode>Config\Legacy</InlineCode>, then the client reloads config metadata so the imported entries can appear.</p>
            </InfoCard>
            <InfoCard icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />} title="What not to share">
              <p>Avoid sharing <InlineCode>PRIVATE</InlineCode>, logs, caches, or unrelated folders. For most users, the profile JSON is the config.</p>
            </InfoCard>
          </div>
          <div className="rounded-[var(--radius-xl)] bg-black/25 p-4">
            <div className="mb-2 font-display text-[15px] font-semibold text-white">Fast path</div>
            <CopyablePath value="%localappdata%\\Flarial\\Client\\Config" />
          </div>
        </section>
      </div>
    ),
  };
