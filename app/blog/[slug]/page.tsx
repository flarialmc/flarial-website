import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { BLOG_POSTS, type BlogPost, getBlogPost } from "../blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog post not found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} · Flarial Blog`,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.heroImage,
          alt: post.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="relative">
      <ArticleJsonLd post={post} />

      <header className="relative min-h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.heroImage}')` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[rgba(18,14,15,0.74)]" aria-hidden />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(18,14,15,0.28) 0%, rgba(18,14,15,0.72) 58%, var(--color-bg-base) 100%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[560px] max-w-6xl flex-col justify-end px-4 py-10 sm:px-6 sm:py-14">
          <Link
            href="/blog"
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-[var(--radius-md)] bg-black/35 px-3 py-2 font-mono text-[11px] uppercase text-white transition-colors hover:bg-black/55"
          >
            <ArrowLeft size={14} />
            All posts
          </Link>

          <div className="max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-3 py-1.5 font-mono text-[11px] uppercase text-white">
                <Sparkles size={13} />
                {post.eyebrow}
              </span>
              <span className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-black/35 px-3 py-1.5 font-mono text-[11px] uppercase text-[var(--color-text-mute)]">
                <CalendarDays size={13} />
                {post.date}
              </span>
            </div>

            <h1 className="font-display text-[42px] font-semibold leading-none text-white sm:text-[66px]">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[var(--color-text)] sm:text-[17px]">
              {post.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-[var(--radius-md)] bg-black/35 px-3 py-1.5 font-mono text-[11px] uppercase text-[var(--color-text-mute)]">
                {post.readTime}
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[var(--radius-md)] bg-black/35 px-3 py-1.5 font-mono text-[11px] uppercase text-[var(--color-text-mute)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {post.disclosure ? (
          <section className="mb-8 rounded-[var(--radius-xl)] border border-[rgba(255,35,58,0.24)] bg-[rgba(255,35,58,0.075)] p-5 sm:p-6">
            <div className="mb-2 font-mono text-[11px] uppercase text-[var(--color-accent)]">
              Partner disclosure
            </div>
            <p className="text-[14px] leading-relaxed text-[var(--color-text)] sm:text-[15px]">
              {post.disclosure}
            </p>
          </section>
        ) : null}

        <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <article
            className="rounded-[var(--radius-2xl)] p-6 sm:p-8"
            style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-black/25 px-3 py-1.5 font-mono text-[11px] uppercase text-[var(--color-accent)]">
              <ShieldCheck size={14} />
              {post.verdict.label}
            </div>
            <h2 className="font-display text-[30px] font-semibold leading-tight text-white sm:text-[42px]">
              {post.verdict.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-mute)]">
              {post.verdict.body}
            </p>
            <a
              href={post.cta.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-4 py-3 font-display text-[14px] font-semibold text-white"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              {post.cta.label}
              <ArrowRight size={16} />
            </a>
          </article>

          <div className="grid gap-4">
            {post.highlights.map((highlight) => (
              <article
                key={highlight.label}
                className="rounded-[var(--radius-xl)] border border-white/[0.06] p-5"
                style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
              >
                <div className="font-mono text-[11px] uppercase text-[var(--color-text-mute)]">
                  {highlight.label}
                </div>
                <div className="mt-2 font-display text-[26px] font-semibold text-white">
                  {highlight.value}
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-mute)]">
                  {highlight.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="max-w-3xl">
            <div className="mb-3 font-mono text-[11px] uppercase text-[var(--color-accent)]">
              Comparison
            </div>
            <h2 className="font-display text-[34px] font-semibold leading-tight text-white sm:text-[46px]">
              LiteByte against the usual Minecraft hosting shortlist.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-mute)]">
              These are not identical products. Some hosts optimize for the lowest bill, some for onboarding,
              and some for global support coverage. The point is to make the tradeoff clear before you buy.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {post.comparisons.map((host, index) => (
              <HostComparisonCard key={host.name} host={host} index={index} />
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)]">
          <div className="space-y-10">
            {post.sections.map((section) => (
              <article key={section.heading}>
                <h2 className="font-display text-[30px] font-semibold leading-tight text-white sm:text-[38px]">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[15px] leading-relaxed text-[var(--color-text-mute)] sm:text-[16px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-5 grid gap-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-[var(--color-text)]">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--color-accent)]" size={17} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <article
              className="rounded-[var(--radius-xl)] p-5"
              style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
            >
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase text-[var(--color-accent)]">
                <Zap size={14} />
                Quick pick
              </div>
              <h3 className="font-display text-[22px] font-semibold leading-tight text-white">
                Start with LiteByte Premium.
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-text-mute)]">
                It is the cleanest balance of $1.50/GB/mo Ryzen 9 7950X hardware, DDR5/NVMe storage,
                4 CPU threads, 100GB storage, backups, DDoS protection, and included databases for most
                Minecraft communities.
              </p>
            </article>

            <article
              className="rounded-[var(--radius-xl)] border border-white/[0.06] p-5"
              style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
            >
              <div className="mb-3 font-mono text-[11px] uppercase text-[var(--color-accent)]">
                Sources checked
              </div>
              <p className="mb-4 text-[12px] leading-relaxed text-[var(--color-text-mute)]">
                Public host pages checked on {post.date}. Pricing and plan names can change, so confirm at checkout.
              </p>
              <div className="grid gap-2">
                {post.sources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between gap-3 rounded-[var(--radius-md)] bg-black/20 px-3 py-2 text-[12px] text-[var(--color-text)] transition-colors hover:bg-black/35 hover:text-[var(--color-accent)]"
                  >
                    <span>{source.label}</span>
                    <ExternalLink size={13} />
                  </a>
                ))}
              </div>
            </article>
          </aside>
        </section>

        <section
          className="mt-14 rounded-[var(--radius-2xl)] border border-[rgba(255,35,58,0.22)] p-6 sm:p-8"
          style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase text-[var(--color-accent)]">
                Partner recommendation
              </div>
              <h2 className="font-display text-[28px] font-semibold leading-tight text-white">
                {post.cta.title}
              </h2>
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[var(--color-text-mute)]">
                {post.cta.body}
              </p>
            </div>
            <a
              href={post.cta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-4 py-3 font-display text-[14px] font-semibold text-white"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              {post.cta.label}
              <ExternalLink size={15} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function HostComparisonCard({
  host,
  index,
}: {
  host: BlogPost["comparisons"][number];
  index: number;
}) {
  return (
    <article
      className="rounded-[var(--radius-2xl)] border border-white/[0.06] p-5 sm:p-6"
      style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="font-mono text-[11px] uppercase text-[var(--color-accent)]">
            #{index + 1} · {host.badge}
          </div>
          <h3 className="mt-2 font-display text-[26px] font-semibold leading-tight text-white">
            {host.name}
          </h3>
        </div>
        <a
          href={host.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-[var(--radius-md)] bg-black/25 px-3 py-2 text-[12px] text-[var(--color-text-mute)] transition-colors hover:text-[var(--color-accent)]"
        >
          Visit
          <ExternalLink size={13} />
        </a>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <InfoPill label="Best for" value={host.bestFor} />
        <InfoPill label="Starting point" value={host.startingPrice} />
      </div>

      <p className="mt-5 text-[14px] leading-relaxed text-[var(--color-text-mute)]">
        {host.summary}
      </p>

      <ul className="mt-5 grid gap-2">
        {host.strengths.map((strength) => (
          <li key={strength} className="flex gap-2 text-[13px] leading-relaxed text-[var(--color-text)]">
            <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--color-accent)]" size={15} />
            <span>{strength}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-white/[0.06] pt-4">
        <div className="mb-1 font-mono text-[10px] uppercase text-[var(--color-text-mute)]">
          Watch for
        </div>
        <p className="text-[12.5px] leading-relaxed text-[var(--color-text-mute)]">
          {host.watchFor}
        </p>
      </div>
    </article>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-white/[0.12] pl-3">
      <div className="mb-1 font-mono text-[10px] uppercase text-[var(--color-text-mute)]">
        {label}
      </div>
      <div className="text-[13px] leading-relaxed text-white">{value}</div>
    </div>
  );
}

function ArticleJsonLd({ post }: { post: BlogPost }) {
  const url = `https://flarial.xyz/blog/${post.slug}/`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: `https://flarial.xyz${post.heroImage}`,
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: "Flarial",
      url: "https://flarial.xyz",
    },
    publisher: {
      "@type": "Organization",
      name: "Flarial",
      logo: {
        "@type": "ImageObject",
        url: "https://flarial.xyz/icon.svg",
      },
    },
    about: post.comparisons.map((host) => host.name),
    mentions: post.comparisons.map((host) => ({
      "@type": "Organization",
      name: host.name,
      url: host.href,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
