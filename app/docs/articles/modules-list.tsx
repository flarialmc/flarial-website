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
  dllCssModuleDetails,
  dllCssModulesByCategory,
  flow,
  nametagIcons,
  privateConfigExample,
  restrictOnePayload,
  restrictThreePayload,
  scriptingExample,
  serverImplementationNotes,
} from "./article-data";

export const modulesListArticle: DocsArticle = {
    slug: "modules-list",
    title: "Modules List",
    summary: "Browse the current module catalog by category.",
    icon: Layers3,
    toc: [],
    render: () => (
      <div className="grid gap-4">
        <div className="flex flex-col gap-2 rounded-[var(--radius-xl)] p-4 text-white sm:flex-row sm:items-center sm:justify-between sm:gap-3" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <span className="font-display font-semibold">{dllCssModuleDetails.length} modules</span>
          <span className="max-w-xl text-[12px] leading-relaxed text-[var(--color-text-mute)] sm:text-right">Note that some modules may be disabled for specific versions due to bugs and glitches</span>
        </div>

        {dllCssModulesByCategory.map((group) => (
          <section key={group.category} className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
            <div className="flex items-center justify-between gap-3">
              <DocsHeading id={`modules-${group.category.toLowerCase()}`}>{group.category}</DocsHeading>
              <span className="rounded-full bg-black/25 px-3 py-1 text-[12px] text-[var(--color-text-mute)]">
                {group.modules.length} modules
              </span>
            </div>
              <div className="grid gap-3 md:grid-cols-2">
                {group.modules.map((module) => (
                  <div key={module.name} className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/20 p-4">
                    <div className="flex items-start gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[var(--radius-md)] bg-[var(--color-bg-modicon)]">
                        <Image src={module.icon} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display text-[16px] font-semibold text-white">{module.name}</h4>
                        <p className="mt-1 text-[13px] leading-relaxed text-[var(--color-text-mute)]">{module.description}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[var(--color-bg-subtle)] px-2.5 py-1 text-[11px] text-white">
                        {module.category}
                      </span>
                      <span className="rounded-full bg-black/25 px-2.5 py-1 text-[11px] text-[var(--color-text-mute)]">
                        {module.settingsCount} settings
                      </span>
                    </div>
                  </div>
                ))}
              </div>
          </section>
        ))}
      </div>
    ),
  };
