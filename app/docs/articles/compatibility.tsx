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

export const compatibilityArticle: DocsArticle = {
    slug: "compatibility",
    title: "Compatibility",
    summary: "Supported platforms, minecraft version, and limitations.",
    icon: CheckCircle2,
    toc: [
      { title: "Supported versions", href: "#supported-versions" },
      { title: "Supported platforms", href: "#supported-targets" },
      { title: "Compatibility limits", href: "#compatibility-limits" },
    ],
    render: () => (
      <>
        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="supported-versions">Supported versions</DocsHeading>
          <p>
            These Minecraft Bedrock versions are currently marked supported by Flarial&apos;s launcher data.
          </p>
          <SupportedVersions />
        </section>
        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="supported-targets">Supported platforms</DocsHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/20 p-4">
              <div className="flex items-center gap-2 font-display text-[18px] font-semibold text-white">
                <MonitorUp size={18} className="text-[var(--color-accent)]" />
                Microsoft Windows
              </div>
              <ul className="mt-3 grid gap-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  Windows 11
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  Windows 10
                </li>
              </ul>
            </div>
            <div className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/20 p-4">
              <div className="flex items-center gap-2 font-display text-[18px] font-semibold text-white">
                <Smartphone size={18} className="text-[var(--color-accent)]" />
                Android
              </div>
              <ul className="mt-3 grid gap-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  Android 9 to 16
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="compatibility-limits">Compatibility limits</DocsHeading>
          <ul className="grid gap-2">
            <li>New Minecraft updates may require a matching Flarial update before injection works.</li>
            <li>Some modules are intentionally disabled or restricted on specific servers.</li>
          </ul>
        </section>
      </>
    ),
  };
