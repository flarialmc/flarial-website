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

export const whatIsFlarialArticle: DocsArticle = {
    slug: "what-is-flarial",
    title: "What is Flarial",
    summary: "A quick overview of what Flarial is.",
    icon: BookOpen,
    toc: [
      { title: "Overview", href: "#overview" },
      { title: "Features", href: "#features" },
    ],
    render: () => (
      <>
        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="overview">Overview</DocsHeading>
          <p>
            Flarial is a Minecraft Bedrock Utility Client focused on customization, quality-of-life features,
            HUD control, rendering options, and server-aware behavior. With over 100+ modules, you can configure
            Flarial however you want.
          </p>
        </section>
        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="features">Features</DocsHeading>
          <p>Everything you need to enhance your gameplay experience.</p>
          <div className="grid gap-4 md:grid-cols-3">
            <InfoCard icon={<Layers3 size={16} className="text-[var(--color-accent)]" />} title="Countless Mods">
              <p>Access a wide variety of utility modules designed to enhance your gameplay experience or make your own.</p>
            </InfoCard>
            <InfoCard icon={<MonitorCog size={16} className="text-[var(--color-accent)]" />} title="Sleek UI">
              <p>Modern, intuitive interface designed for seamless navigation and control.</p>
            </InfoCard>
            <InfoCard icon={<CheckCircle2 size={16} className="text-[var(--color-accent)]" />} title="User-Friendly">
              <p>Plug-and-play, with no additional configuration required (but still possible).</p>
            </InfoCard>
          </div>
        </section>
      </>
    ),
  };
