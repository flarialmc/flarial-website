import type { Metadata } from "next";
import Link from "next/link";
import { androidModulesByCategory, dllCssModulesByCategory } from "../docs/articles/article-data";
import { ModulesListCatalog } from "../docs/articles/ModulesListCatalog";

export const metadata: Metadata = {
  title: "Modules",
  description:
    "Browse Flarial's safe Minecraft Bedrock quality-of-life modules for Windows and Android: HUDs, FPS tools, visuals, movement helpers, and utilities.",
  alternates: { canonical: "/modules" },
};

const blockedTerms = [
  "combat",
  "reach",
  "hitbox",
  "crystal",
  "hurt",
  "sword",
  "opponent",
  "combo",
  "arrow counter",
  "pot counter",
  "bow",
  "glint",
  "skin stealer",
  "nick",
];

function isPublicSafeModule(module: {
  name: string;
  description: string;
  category: string;
  source?: string;
  icon?: string;
  iconResource?: string;
}) {
  if (module.category.toLowerCase() === "combat") return false;

  const haystack = [module.name, module.description, module.source, module.icon, module.iconResource]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return !blockedTerms.some((term) => haystack.includes(term));
}

function publicSafeGroups<C extends string, T extends { name: string; description: string; category: string }>(
  groups: Array<{ category: C; modules: T[] }>,
): Array<{ category: C; modules: T[] }> {
  return groups
    .filter((group) => group.category.toLowerCase() !== "combat")
    .map((group) => ({
      ...group,
      modules: group.modules.filter(isPublicSafeModule),
    }))
    .filter((group) => group.modules.length > 0);
}

const windowsGroups = publicSafeGroups(dllCssModulesByCategory);
const androidGroups = publicSafeGroups(androidModulesByCategory);
const windowsCount = windowsGroups.reduce((total, group) => total + group.modules.length, 0);
const androidCount = androidGroups.reduce((total, group) => total + group.modules.length, 0);

export default function ModulesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Module catalog
          </div>
          <h1 className="font-display text-[50px] font-semibold leading-[0.95] tracking-[-0.035em] text-white sm:text-[86px]">
            Flarial modules, split by platform.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--color-text-mute)] sm:text-[16px]">
            Browse the same platform-style catalog from the docs, polished for the website.
            This public page focuses on Flarial&apos;s quality-of-life modules: HUDs,
            FPS tools, visuals, movement helpers, and utilities for Windows and Android.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <StatCard label="Windows modules" value={windowsCount.toString()} />
          <StatCard label="Android modules" value={androidCount.toString()} />
        </div>
      </section>

      <section className="mt-10 rounded-[28px] border border-[rgba(255,35,58,0.18)] bg-[rgba(255,35,58,0.06)] p-5 text-[13.5px] leading-relaxed text-[var(--color-text-mute)] sm:p-6">
        <strong className="mr-1 text-white">Quality-of-life only.</strong>
        <span>Flarial&apos;s public module catalog is intentionally focused on legitimate Bedrock utility features. Individual servers can still set their own client/mod rules, so always respect the server you play on.</span>
      </section>

      <section className="mt-6">
        <ModulesListCatalog windowsGroups={windowsGroups} androidGroups={androidGroups} />
      </section>

      <section className="mt-10 grid gap-3 sm:grid-cols-2">
        <LinkCard href="/download" title="Download Flarial" body="Choose the Windows launcher or Android Play Store install." />
        <LinkCard href="/docs" title="Read the docs" body="Setup, compatibility, troubleshooting, configs, and module usage." />
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[var(--radius-xl)] p-5" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
      <div className="font-display text-[34px] font-semibold text-white">{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-mute)]">{label}</div>
    </div>
  );
}

function LinkCard({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <Link href={href} className="rounded-[var(--radius-xl)] p-5 transition-transform hover:-translate-y-0.5" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
      <span className="block font-display text-[18px] font-semibold text-white">{title}</span>
      <span className="mt-1 block text-[13px] leading-relaxed text-[var(--color-text-mute)]">{body}</span>
    </Link>
  );
}
