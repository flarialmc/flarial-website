import type { Metadata } from "next";
import { getAllChangelogs, getChangelogTags } from "../lib/changelog";
import { ChangelogTimeline } from "./ChangelogTimeline";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Every Flarial update, week by week. Bedrock-version bumps, new modules, launcher fixes, and more.",
  alternates: { canonical: "/changelog" },
  openGraph: {
    title: "Flarial Changelog",
    description:
      "Every Flarial update — Bedrock version bumps, new modules, fixes.",
    type: "article",
  },
};

export default async function ChangelogPage() {
  const [entries, tags] = await Promise.all([getAllChangelogs(), getChangelogTags()]);
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-10">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
          {entries.length} updates · {tags.length} tags
        </div>
        <h1 className="font-display text-[44px] sm:text-[64px] leading-[0.98] font-semibold tracking-[-0.025em] text-white">
          Changelog.
        </h1>
        <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-[var(--color-text-mute)] max-w-xl">
          Every shipped Flarial update. Filter by tag, deep-link to any entry.
        </p>
      </header>
      <ChangelogTimeline entries={entries} tags={tags} />
    </div>
  );
}
