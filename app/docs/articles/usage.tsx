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

export const usageArticle: DocsArticle = {
    slug: "usage",
    title: "Usage",
    summary: "Install, inject, and start configuring Flarial.",
    icon: Download,
    toc: [
      { title: "Download", href: "#download" },
      { title: "Inject", href: "#inject" },
      { title: "Use", href: "#use" },
    ],
    render: () => (
      <>
        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="download">Download</DocsHeading>
          <p>
            Start with the Flarial Launcher whenever possible. It handles supported versions, launch state,
            and automatic injection for the normal setup path.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/download/"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-4 py-2.5 font-display text-[14px] font-semibold text-white shadow-[var(--shadow-glow)]"
            >
              <Download size={16} />
              Open download tab
            </Link>
            <a
              href="https://github.com/flarialmc/newcdn/raw/refs/heads/main/dll/latest.dll"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-black/25 px-4 py-2.5 font-display text-[14px] font-semibold text-white hover:bg-[var(--color-bg-subtle)]"
            >
              <ExternalLink size={16} className="text-[var(--color-accent)]" />
              Download latest DLL
            </a>
          </div>
          <div className="rounded-[var(--radius-xl)] border border-[rgba(255,35,58,0.22)] bg-black/20 p-4">
            <div className="font-display text-[16px] font-semibold text-white">Direct DLL note</div>
            <p className="mt-2">
              The direct DLL is useful if the launcher path is giving you trouble, but it will not inject itself.
              You will need a DLL injector to inject the DLL into Minecraft.
            </p>
          </div>
        </section>
        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="inject">Inject</DocsHeading>
          <p>There are 2 methods to inject Flarial:</p>
          <div className="grid gap-4">
            <div className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/20 p-4">
              <div className="flex items-center gap-2 font-display text-[18px] font-semibold text-white">
                <Box size={18} className="text-[var(--color-accent)]" />
                Flarial Launcher method
                <span className="rounded-full bg-[var(--color-accent)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
                  Recommended
                </span>
              </div>
              <ol className="mt-3 grid gap-3">
                {[
                  "Open the Flarial Launcher.",
                  "Optional: go to settings, then the versions tab, to download and launch a specific Minecraft version supported by Flarial.",
                  "Press Play or Launch on the homepage.",
                  "Wait a few seconds for Minecraft to launch.",
                  "Flarial should automatically inject once you reach the title screen.",
                  <>
                    If it does not inject, join our{" "}
                    <a
                      href="https://flarial.xyz/discord"
                      className="font-semibold text-white underline decoration-[var(--color-accent)] decoration-2 underline-offset-4"
                    >
                      Discord server
                    </a>{" "}
                    to get support.
                  </>,
                ].map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-accent)] text-[11px] font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="min-w-0 flex-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/20 p-4">
              <div className="flex items-center gap-2 font-display text-[18px] font-semibold text-white">
                <FileCode2 size={18} className="text-[var(--color-accent)]" />
                Generic DLL Injector method
              </div>
              <ol className="mt-3 grid gap-3">
                {[
                  <>
                    Make sure you have a DLL injector. If you do not have one, try{" "}
                    <a
                      href="https://github.com/ambiennt/MCBE-DLL-Injector"
                      className="font-semibold text-white underline decoration-[var(--color-accent)] decoration-2 underline-offset-4"
                    >
                      MCBE-DLL-Injector
                    </a>
                    .
                  </>,
                  "Open the DLL injector app.",
                  "Select the Flarial DLL file.",
                  "Launch Minecraft before clicking inject.",
                  "Inject while you are on the title screen or inside a world. Injecting before the game is initialized might cause it to crash.",
                ].map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-accent)] text-[11px] font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="min-w-0 flex-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="use">Use</DocsHeading>
          <p>
            Once Flarial is injected and the welcome notification appears, you should be able to open the
            ClickGUI by pressing <span className="font-semibold text-white">K</span> on your keyboard.
            If your ClickGUI key is set to something else, use the key shown in the notification text:
            <span className="font-semibold text-white"> Click {"{}"} to open the menu in-game</span>.
          </p>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/20">
            <div className="relative min-h-[150px] bg-[linear-gradient(135deg,#477239,#5d8d47_35%,#7853a5_36%,#a96bd3_42%,#588544_43%,#426b35)] p-5">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.18) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,.12) 25%, transparent 25%)", backgroundSize: "32px 32px" }} />
              <div className="relative mx-auto flex max-w-[560px] flex-col items-center gap-3 pt-2">
                <div className="rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 py-2 font-display text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.28)]">
                  Join our discord! https://flarial.xyz/discord
                </div>
                <div className="rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 py-2 font-display text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.28)]">
                  Click K to open the menu in-game.
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[var(--radius-xl)] border border-[rgba(255,35,58,0.28)] bg-black/25 p-4">
            <div className="font-display text-[16px] font-semibold text-white">Important</div>
            <p className="mt-1">
              The ClickGUI can only be opened while you are in a world.
            </p>
          </div>
        </section>
      </>
    ),
  };
