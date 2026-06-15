import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { getAllChangelogs, getChangelogBySlug } from "../../lib/changelog";
import { CopyChangelogLink } from "../CopyChangelogLink";
import { HeroBackground } from "../../components/site/HeroBackground";
import "../prose.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const entries = await getAllChangelogs();
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getChangelogBySlug(slug);
  if (!entry) return { title: "Changelog not found" };

  return {
    title: `${entry.title} · Changelog`,
    description: entry.excerpt,
    alternates: { canonical: `/changelog/${entry.slug}` },
    openGraph: {
      title: `${entry.title} · Flarial Changelog`,
      description: entry.excerpt,
      type: "article",
      publishedTime: entry.date,
    },
  };
}

export default async function ChangelogEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = await getChangelogBySlug(slug);
  if (!entry) notFound();

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 h-[620px] pointer-events-none opacity-55">
        <HeroBackground />
      </div>
      <div className="absolute inset-x-0 top-0 h-[720px] pointer-events-none bg-gradient-to-b from-transparent via-[rgba(18,14,15,0.42)] to-[var(--color-bg-base)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/changelog/"
          className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-accent)] transition-colors hover:text-white"
        >
          ← All changelogs
        </Link>
        <CopyChangelogLink
          slug={entry.slug}
          title={entry.title}
          className="rounded-[var(--radius-md)] bg-[var(--color-bg-nav)] px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-[var(--color-accent)] transition-colors hover:text-white"
        />
      </div>

      <article
        id={entry.slug}
        className="overflow-hidden rounded-[var(--radius-2xl)] scroll-mt-24"
        style={{
          background: "var(--color-bg-nav)",
          boxShadow: "var(--shadow-rest)",
        }}
      >
        <div className="px-6 py-7 sm:px-8 sm:py-8">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center rounded-[var(--radius-md)] px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-widest text-white"
              style={{ background: "var(--color-accent)" }}
            >
              {entry.tag}
            </span>
            <span className="font-mono text-[11px] tabular-nums text-[var(--color-text-dim)]">
              {formatDate(entry.date)}
            </span>
          </div>

          <h1 className="mb-5 font-display text-[32px] font-semibold leading-[1] tracking-[-0.025em] text-white sm:text-[48px]">
            {entry.title}
          </h1>

          <div
            className="prose-flarial text-[14.5px] leading-relaxed text-[var(--color-text)]"
            dangerouslySetInnerHTML={{ __html: entry.body }}
          />
        </div>
      </article>
      </div>
    </div>
  );
}

function formatDate(iso: string) {
  try {
    return format(parseISO(iso), "MMMM d, yyyy");
  } catch {
    return iso;
  }
}
