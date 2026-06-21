import type { Metadata } from "next";
import { CONTRIBUTOR_MEMBERS, CONTRIBUTOR_ROLE_BADGES } from "../contributor-members";
import { TeamGrid } from "../TeamGrid";

export const metadata: Metadata = {
  title: "Contributors",
  description: "Community contributors who helped build and improve Flarial.",
  alternates: { canonical: "/team/contributors" },
  openGraph: {
    title: "Flarial Contributors",
    description: "Community contributors who helped build and improve Flarial.",
    type: "website",
    url: "https://flarial.xyz/team/contributors",
  },
};

export default function ContributorsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
      <header className="max-w-2xl">
        <a href="/team" className="font-mono text-[10px] uppercase text-[var(--color-accent)]" style={{ letterSpacing: "0.24em" }}>
          ← Back to team
        </a>
        <h1 className="mt-5 font-display text-[52px] font-semibold leading-none text-white sm:text-[64px]">
          Flarial Contributors
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-text-mute)] sm:text-[16px]">
          People who contributed generally to Flarial through code, scripts, docs, resources, and community work.
        </p>
      </header>

      <TeamGrid members={CONTRIBUTOR_MEMBERS} roleBadges={CONTRIBUTOR_ROLE_BADGES} />
    </main>
  );
}
