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

export const moduleBlockingArticle: DocsArticle = {
    slug: "module-blocking",
    title: "Packet-based module blocking",
    summary: "Server-driven feature restrictions for Flarial modules.",
    icon: ShieldCheck,
    toc: [
      { title: "Packet format", href: "#packet-format" },
      { title: "Examples", href: "#examples" },
      { title: "Every blockable module", href: "#every-blockable-module" },
      { title: "Client behavior", href: "#client-behavior" },
      { title: "Server implementation notes", href: "#server-implementation-notes" },
    ],
    render: () => (
      <>
        <p>
          Flarial listens for an inbound Bedrock <InlineCode>ScriptMessagePacket</InlineCode>. If the packet
          has the expected Flarial header, the client parses the JSON payload and applies temporary server
          restrictions to matching modules.
        </p>
        <ol className="grid gap-2">
          {flow.map((item, index) => (
            <li key={item} className="flex gap-3">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-accent)] text-[11px] font-bold text-white">
                {index + 1}
              </span>
              <span className="min-w-0 flex-1">{item}</span>
            </li>
          ))}
        </ol>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="packet-format">Packet format</DocsHeading>
          <p>Send a <InlineCode>ScriptMessagePacket</InlineCode> with this exact message id:</p>
          <CodeBlock>{"flarial_client_event:restrict_features"}</CodeBlock>
          <p>The message body is a JSON object. Each entry under <InlineCode>flarial_client_modules</InlineCode> describes one blocked module.</p>
          <CodeBlock>{restrictThreePayload}</CodeBlock>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="examples">Examples</DocsHeading>
          <div className="grid gap-4">
            <div className="min-w-0 space-y-3">
              <h3 className="font-display text-[17px] font-semibold text-white">Block one module</h3>
              <CodeBlock>{restrictOnePayload}</CodeBlock>
            </div>
            <div className="min-w-0 space-y-3">
              <h3 className="font-display text-[17px] font-semibold text-white">Clear packet restrictions</h3>
              <CodeBlock>{clearPayload}</CodeBlock>
            </div>
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="every-blockable-module">Every blockable module</DocsHeading>
          <p>
            This list is synced from the dll-css module registry on origin/main. Any registered module can be
            blocked because the listener resolves against <InlineCode>ModuleManager::moduleMap</InlineCode>.
          </p>
          <div className="flex items-center gap-2 rounded-[var(--radius-xl)] bg-black/25 p-4 text-white">
            <ListChecks size={17} className="text-[var(--color-accent)]" />
            <span className="font-display font-semibold">{blockableModules.length} blockable module keys</span>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-white/[0.06]">
            <div className="hidden grid-cols-[minmax(120px,0.8fr)_minmax(170px,1fr)_minmax(170px,1fr)] gap-3 bg-black/35 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-mute)] sm:grid">
              <span>Module</span>
              <span>Recommended key</span>
              <span>Accepted aliases</span>
            </div>
            <div className="divide-y divide-white/[0.05]">
              {blockableModules.map(([name, token]) => (
                <div key={token} className="grid gap-2 px-4 py-3 text-[13px] sm:grid-cols-[minmax(120px,0.8fr)_minmax(170px,1fr)_minmax(170px,1fr)] sm:gap-3">
                  <span className="font-display font-semibold text-white">{name}</span>
                  <code className="break-all text-[var(--color-accent-hi)]">{token}</code>
                  <span className="break-words text-[var(--color-text-mute)]">{blockableAliases(token, name).join(", ")}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="client-behavior">Client behavior</DocsHeading>
          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />} title="When blocked">
              <p>The module is marked server-restricted, disabled if currently active, and cannot be toggled back on while the restriction is active.</p>
            </InfoCard>
            <InfoCard icon={<FileCode2 size={16} className="text-[var(--color-accent)]" />} title="When cleared">
              <p>Restrictions clear on disconnect, transfer, start-game, or when a replacement payload omits or clears a module.</p>
            </InfoCard>
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="server-implementation-notes">Server implementation notes</DocsHeading>
          <ul className="grid gap-2">
            {serverImplementationNotes.map((note) => (
              <li key={note} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span className="min-w-0 flex-1">{note}</span>
              </li>
            ))}
          </ul>
        </section>
      </>
    ),
  };
