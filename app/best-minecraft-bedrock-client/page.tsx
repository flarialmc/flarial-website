import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X, Trophy, Gauge, ShieldCheck, Layers3, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Minecraft Bedrock Clients in 2026 — Honest Comparison",
  description:
    "A fair 2026 comparison of the best Minecraft Bedrock clients: Flarial, Latite, Onix, and how Lunar/Badlion fit. Compare price, platforms, open source, and scripting.",
  keywords: [
    "best bedrock client",
    "best client for minecraft bedrock",
    "best client for mcpe",
    "minecraft bedrock clients",
    "best mcpe client",
  ],
  alternates: { canonical: "/best-minecraft-bedrock-client" },
  openGraph: {
    title: "Best Minecraft Bedrock Clients in 2026",
    description:
      "An honest guide to the best Minecraft Bedrock clients — what makes a good one, and how the main options compare.",
    type: "article",
    url: "https://flarial.xyz/best-minecraft-bedrock-client",
  },
};

const clients = [
  {
    name: "Flarial",
    tag: "Our client",
    blurb:
      "Flarial is a free, TOS-compliant Bedrock utility client with 140+ modules, a real-time ClickGUI, FPS tools, HUDs, and quality-of-life features. Full disclosure: this is Flarial's own site, so treat this entry as the maker's pitch — the comparison table below keeps the criteria identical for everyone.",
    points: [
      "Free forever — no paid tier, no cosmetics paywall.",
      "Windows plus an official Android (MCPE) Google Play release.",
      "140+ modules across HUDs, FPS tools, visuals, movement helpers, and utilities.",
      "Quality-of-life by default; not a combat-hack client.",
    ],
    accent: "#ff233a",
  },
  {
    name: "Latite Client",
    tag: "Open source",
    blurb:
      "Latite is a free, open-source DLL client for Minecraft Windows 10/11. It is known for a clean UI, a set of customizable mods, and a plugin system based on JavaScript/TypeScript, with its source on GitHub.",
    points: [
      "Free and open source (source on GitHub).",
      "Windows 10/11 (64-bit) only.",
      "JavaScript/TypeScript plugin system.",
    ],
    accent: "#32d7ff",
  },
  {
    name: "Onix Client",
    tag: "Windows",
    blurb:
      "Onix is a long-running Windows-only Bedrock client known for a large module count (built-in plus community modules), a theme editor, and FPS-focused rendering options. It is a paid-only client with no free version.",
    points: [
      "Large module library plus community modules.",
      "Windows-only.",
      "Theme editor and FPS/rendering options.",
    ],
    accent: "#b55cff",
  },
  {
    name: "Lunar Client",
    tag: "No native Bedrock",
    blurb:
      "Lunar is a Java Edition client. There is no Lunar client for Minecraft Bedrock — if you play Bedrock or MCPE, Lunar isn't an option, so it's listed here only because people compare the names.",
    points: [
      "Java Edition only — no Bedrock client.",
      "Known for cosmetics and a polished UI.",
      "Not usable on Bedrock or MCPE.",
    ],
    accent: "#59e77b",
  },
  {
    name: "Badlion Client",
    tag: "No native Bedrock",
    blurb:
      "Badlion is a Java Edition client. There is no official Badlion client for Bedrock — \"Badlion\" offerings on Bedrock are unofficial texture packs rather than a real injected client.",
    points: [
      "Java Edition only (officially).",
      "No official Bedrock client.",
      "Bedrock \"Badlion\" results are usually texture packs.",
    ],
    accent: "#ffffff",
  },
];

type Cell = boolean | string;
const tableRows: { feature: string; cells: Cell[] }[] = [
  // columns: Flarial, Latite, Onix, Lunar, Badlion
  { feature: "Free", cells: [true, true, "Paid (reported)", true, true] },
  { feature: "Windows", cells: [true, true, true, true, true] },
  { feature: "Android / mobile", cells: [true, false, false, false, false] },
  { feature: "Open source", cells: [false, true, false, false, false] },
  { feature: "Scripting / plugins", cells: ["Lua scripting", "JS/TS", "Community modules", "—", "—"] },
  { feature: "Native Bedrock client", cells: [true, true, true, false, false] },
];
const columns = ["Flarial", "Latite", "Onix", "Lunar", "Badlion"];

function Mark({ value }: { value: Cell }) {
  if (value === true) return <Check size={16} className="mx-auto text-[#59e77b]" aria-label="Yes" />;
  if (value === false) return <X size={16} className="mx-auto text-[var(--color-text-dim)]" aria-label="No" />;
  return <span className="text-[12px] text-[var(--color-text-mute)]">{value}</span>;
}

export default function BestBedrockClientPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Minecraft Bedrock Clients in 2026",
    description:
      "Comparison of the main Minecraft Bedrock clients, including Flarial, Latite, Onix, Lunar, and Badlion.",
    itemListElement: clients.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
    })),
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-nav)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
          <Trophy size={13} />
          Guide · 2026
        </div>
        <h1 className="font-display text-[38px] font-semibold leading-[1.0] tracking-[-0.025em] text-white sm:text-[56px]">
          Best Minecraft Bedrock Clients in 2026.
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-text-mute)] sm:text-[16px]">
          There are only a handful of real Minecraft Bedrock clients, and they differ a lot on price,
          platforms, and how open they are. This is an honest rundown — including where each one
          falls short. For transparency: this is{" "}
          <span className="text-white">Flarial&apos;s own website</span>, so we list Flarial first
          and tell you exactly where the bias is.
        </p>
      </header>

      <section className="mt-12 space-y-4">
        <h2 className="font-display text-[26px] font-semibold leading-tight text-white">
          What makes a good Bedrock client
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Criterion icon={Gauge} title="Performance">
            FPS gains and rendering control matter on Bedrock, where the base game can stutter on
            big builds and busy servers.
          </Criterion>
          <Criterion icon={Layers3} title="Modules">
            A useful client gives you HUDs, zoom, keystrokes, and quality-of-life tweaks — ideally
            extendable with your own.
          </Criterion>
          <Criterion icon={ShieldCheck} title="TOS-compliance">
            The safest clients keep their default modules quality-of-life rather than combat cheats,
            which keeps you off anti-cheat radar on official servers.
          </Criterion>
          <Criterion icon={Download} title="Platform support">
            Most Bedrock clients are Windows-only. Mobile (Android) support is rare and worth
            checking before you commit.
          </Criterion>
        </div>
      </section>

      <section className="mt-12 space-y-5">
        <h2 className="font-display text-[26px] font-semibold leading-tight text-white">
          The clients, compared
        </h2>
        {clients.map((client) => (
          <article
            key={client.name}
            className="rounded-[var(--radius-2xl)] p-5 sm:p-7"
            style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
          >
            <div className="flex items-center gap-3">
              <span className="h-7 w-1.5 rounded-full" style={{ background: client.accent }} aria-hidden />
              <h3 className="font-display text-[22px] font-semibold leading-tight text-white">{client.name}</h3>
              <span className="rounded-full bg-black/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-mute)]">
                {client.tag}
              </span>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-text-mute)]">{client.blurb}</p>
            <ul className="mt-4 grid gap-2 text-[13.5px] text-[var(--color-text)]">
              {client.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: client.accent }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {client.name === "Flarial" ? (
              <Link
                href="/download/"
                className="mt-5 inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-4 py-2.5 font-display text-[13px] font-semibold text-white shadow-[var(--shadow-glow)]"
              >
                <Download size={15} />
                Download Flarial
              </Link>
            ) : null}
          </article>
        ))}
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-display text-[26px] font-semibold leading-tight text-white">
          Comparison table
        </h2>
        <div className="overflow-x-auto rounded-[var(--radius-2xl)]" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <table className="w-full min-w-[640px] border-collapse text-center text-[13px]">
            <thead>
              <tr className="border-b border-white/[0.08]">
                <th className="p-4 text-left font-display text-[13px] font-semibold text-white">Feature</th>
                {columns.map((col) => (
                  <th key={col} className="p-4 font-display text-[13px] font-semibold text-white">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.feature} className="border-b border-white/[0.04] last:border-0">
                  <td className="p-4 text-left text-[13px] text-[var(--color-text)]">{row.feature}</td>
                  {row.cells.map((cell, i) => (
                    <td key={columns[i]} className="p-4">
                      <Mark value={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[12px] leading-relaxed text-[var(--color-text-dim)]">
          Competitor details reflect publicly available information and can change — check each
          client&apos;s own site for the latest. We avoid quoting exact prices or version numbers we
          can&apos;t verify.
        </p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-display text-[26px] font-semibold leading-tight text-white">
          Conclusion
        </h2>
        <div className="rounded-[var(--radius-2xl)] p-5 sm:p-7" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <p className="text-[14px] leading-relaxed text-[var(--color-text-mute)]">
            If you want an open-source Windows client, Latite is a strong pick. If you&apos;re happy to
            pay for a deep Windows feature set, Onix is worth a look. Lunar and Badlion are really
            Java-first projects, so don&apos;t expect a full native Bedrock client from them. Flarial&apos;s
            case is that it&apos;s free forever, runs on Windows and Android, ships 140+ modules focused on
            HUDs, FPS tools, visuals, movement helpers, and utilities, and stays TOS-compliant by default. Read the{" "}
            <Link href="/docs/" className="font-semibold text-white underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
              docs
            </Link>{" "}
            or just{" "}
            <Link href="/download/" className="font-semibold text-white underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
              download it
            </Link>{" "}
            and decide for yourself.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <Link
          href="/download/"
          className="flex items-center justify-between gap-3 rounded-[var(--radius-xl)] px-5 py-4 text-white transition-colors hover:brightness-110"
          style={{ background: "var(--color-bg-nav)" }}
        >
          <span className="text-[14px]">Try the free Bedrock client — download Flarial for Windows or Android.</span>
          <ArrowRight size={16} className="shrink-0 text-[var(--color-text-mute)]" />
        </Link>
      </section>
    </div>
  );
}

function Criterion({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Gauge;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[var(--radius-xl)] p-5" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
      <div className="flex items-center gap-2 font-display text-[15px] font-semibold text-white">
        <Icon size={17} className="text-[var(--color-accent)]" />
        {title}
      </div>
      <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-mute)]">{children}</p>
    </div>
  );
}
