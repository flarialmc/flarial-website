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

export const scriptingApiArticle: DocsArticle = {
    slug: "scripting-api",
    title: "Scripting API",
    summary: "Build Lua modules, commands, settings, and event-driven client extensions.",
    icon: FileCode2,
    toc: [
      { title: "Overview", href: "#scripting-overview" },
      { title: "What scripts can do", href: "#what-scripts-can-do" },
      { title: "Project layout", href: "#project-layout" },
      { title: "First module pattern", href: "#first-module-pattern" },
      { title: "Workflow", href: "#workflow" },
      { title: "Full API reference", href: "#full-api-reference" },
    ],
    render: () => (
      <div className="grid gap-4">
        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <div className="grid min-w-0 gap-5 md:grid-cols-[minmax(0,1.25fr)_minmax(240px,0.75fr)] md:items-center">
            <div className="min-w-0 space-y-4">
              <DocsHeading id="scripting-overview">Overview</DocsHeading>
              <p>
                Flarial Scripting lets you extend the client with Lua scripts that behave like lightweight modules
                or commands. It is built for fast iteration: write a script, reload it in-game, then tune settings
                and event handlers without rebuilding the client.
              </p>
              <p>
                The scripting runtime is based on <InlineCode>Lua 5.4.7</InlineCode>. Use this article as the
                website-level map, then use the dedicated scripting docs for exact API calls, signatures, and examples.
              </p>
              <Link
                href="https://scripting.flarial.xyz/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex max-w-full items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-4 py-2 font-display text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <span className="min-w-0 truncate">Open Scripting Docs</span>
                <ExternalLink size={15} />
              </Link>
            </div>
            <div className="grid min-w-0 gap-2 rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/25 p-3 sm:gap-3 sm:p-4">
              {[
                ["Runtime", "Lua 5.4.7"],
                ["Script types", "Modules and commands"],
                ["Reload loop", ".lua reload"],
                ["Editor helper", ".lua autocomplete"],
              ].map(([label, value]) => (
                <div key={label} className="grid min-w-0 gap-1 rounded-[var(--radius-md)] bg-black/25 px-3 py-2 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] sm:items-center sm:gap-3">
                  <span className="min-w-0 text-[12px] text-[var(--color-text-mute)]">{label}</span>
                  <span className="min-w-0 break-words font-display text-[13px] font-semibold text-white sm:text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="what-scripts-can-do">What scripts can do</DocsHeading>
          <div className="grid gap-3 md:grid-cols-2">
            <InfoCard icon={<Layers3 size={16} className="text-[var(--color-accent)]" />} title="Create modules">
              <p>Scripts can define custom ClickGUI-visible modules with names, descriptions, toggles, and settings.</p>
            </InfoCard>
            <InfoCard icon={<FileCode2 size={16} className="text-[var(--color-accent)]" />} title="Add commands">
              <p>Command scripts live beside module scripts and are useful for small tools, chat helpers, or workflow shortcuts.</p>
            </InfoCard>
            <InfoCard icon={<MonitorCog size={16} className="text-[var(--color-accent)]" />} title="Listen to events">
              <p>Use event hooks to react to game, chat, player, GUI, network, and client-side changes exposed by the API.</p>
            </InfoCard>
            <InfoCard icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />} title="Use reviewed scripts">
              <p>Community scripts can be distributed through the Flarial Marketplace after review by the Flarial team.</p>
            </InfoCard>
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="project-layout">Project layout</DocsHeading>
          <p>
            Flarial keeps scripts under Minecraft&apos;s local app data so they travel with the client state.
            Keep the whole <InlineCode>Scripts</InlineCode> folder open in your editor when using autocomplete.
          </p>
          <div className="grid min-w-0 gap-3">
            <div className="min-w-0 rounded-[var(--radius-xl)] bg-black/25 p-3 sm:p-4">
              <div className="mb-2 font-display text-[15px] font-semibold text-white">Modules</div>
              <CopyablePath value="%localappdata%\Flarial\Client\Scripts\Modules" />
            </div>
            <div className="min-w-0 rounded-[var(--radius-xl)] bg-black/25 p-3 sm:p-4">
              <div className="mb-2 font-display text-[15px] font-semibold text-white">Commands</div>
              <CopyablePath value="%localappdata%\Flarial\Client\Scripts\Commands" />
            </div>
            <div className="min-w-0 rounded-[var(--radius-xl)] bg-black/25 p-3 sm:p-4">
              <div className="mb-2 font-display text-[15px] font-semibold text-white">Autocomplete</div>
              <CopyablePath value="%localappdata%\Flarial\Client\Scripts\AutoComplete" />
            </div>
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="first-module-pattern">First module pattern</DocsHeading>
          <p>
            A module script starts with global metadata, declares settings in the global scope, then reacts to lifecycle
            functions or events. Save the file as <InlineCode>.lua</InlineCode> inside the Modules folder.
          </p>
          <CodeBlock>{scriptingExample}</CodeBlock>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="workflow">Workflow</DocsHeading>
          <ol className="grid gap-3">
            {[
              "Install Visual Studio Code and a Lua extension, then open the full Scripts folder.",
              "Inject Flarial, run .lua autocomplete in chat, and add the AutoComplete folder to the Lua extension third-party library setting.",
              "Create a Lua file in Modules or Commands with a name and description.",
              "Run .lua reload in chat after edits, then enable the module from ClickGUI or run the command in-game.",
              "Move from the quick pattern here to the API docs when you need client, game, GUI, ImGui, filesystem, or utility APIs.",
            ].map((item, index) => (
              <li key={item} className="grid grid-cols-[28px_minmax(0,1fr)] gap-2 rounded-[var(--radius-xl)] bg-black/25 p-3 sm:grid-cols-[34px_minmax(0,1fr)] sm:gap-3 sm:p-4">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--color-accent)] font-display text-[12px] font-semibold text-white sm:h-8 sm:w-8 sm:text-[13px]">
                  {index + 1}
                </span>
                <span className="min-w-0 self-center text-[13px] leading-relaxed text-[var(--color-text)] sm:text-[14px]">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="full-api-reference">Full API reference</DocsHeading>
          <p>
            The full documentation covers the script object, client APIs, audio, network, events, player, server,
            GUI constraints, settings, ImGui draw lists, filesystem helpers, globals, objects, and utilities.
          </p>
          <div className="grid min-w-0 gap-3 sm:grid-cols-2">
            <Link
              href="https://scripting.flarial.xyz/"
              target="_blank"
              rel="noreferrer"
              className="flex min-w-0 items-center justify-between gap-3 rounded-[var(--radius-xl)] bg-black/25 p-3 text-white transition-colors hover:bg-[var(--color-bg-subtle)] sm:p-4"
            >
              <span className="min-w-0">
                <span className="block font-display text-[16px] font-semibold">API documentation</span>
                <span className="mt-1 block text-[12px] text-[var(--color-text-mute)]">Reference pages and exact signatures</span>
              </span>
              <ExternalLink size={17} className="shrink-0 text-[var(--color-accent)]" />
            </Link>
            <Link
              href="https://marketplace.flarial.xyz/"
              target="_blank"
              rel="noreferrer"
              className="flex min-w-0 items-center justify-between gap-3 rounded-[var(--radius-xl)] bg-black/25 p-3 text-white transition-colors hover:bg-[var(--color-bg-subtle)] sm:p-4"
            >
              <span className="min-w-0">
                <span className="block font-display text-[16px] font-semibold">Flarial Marketplace</span>
                <span className="mt-1 block text-[12px] text-[var(--color-text-mute)]">Find reviewed community scripts</span>
              </span>
              <ExternalLink size={17} className="shrink-0 text-[var(--color-accent)]" />
            </Link>
          </div>
        </section>
      </div>
    ),
  };
