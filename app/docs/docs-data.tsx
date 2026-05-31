import Link from "next/link";
import { RememberDocsArticle } from "./DocsMemory";
import { DocsToc } from "./DocsToc";
import { docsArticles } from "./articles";
import type { DocsArticle } from "./docs-types";

export { docsArticles };

export function getDocsArticle(slug: string) {
  return docsArticles.find((article) => article.slug === slug);
}

export function DocsArticlePage({
  article,
  rememberArticle = true,
}: {
  article: DocsArticle;
  rememberArticle?: boolean;
}) {
  const Icon = article.icon;
  const guideNumber = docsArticles.findIndex((item) => item.slug === article.slug) + 1;

  return (
    <div className="mx-auto w-full max-w-[1400px] min-w-0 px-4 py-10 sm:px-6 sm:py-14">
      <div className="grid min-w-0 gap-6 lg:grid-cols-[260px_minmax(0,820px)] xl:grid-cols-[260px_minmax(0,820px)_240px] xl:justify-center">
        {rememberArticle ? <RememberDocsArticle slug={article.slug} /> : null}
        <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-[var(--radius-2xl)] p-3 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:overscroll-contain" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <div className="px-2 pb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-mute)]">
            Articles
          </div>
          <nav className="grid gap-1">
            {docsArticles.map((item) => {
              const ItemIcon = item.icon;
              const active = item.slug === article.slug;
              return (
                <Link
                  key={item.slug}
                  href={`/docs/${item.slug}/`}
                  className={[
                    "group rounded-[var(--radius-md)] px-3 py-3 transition-colors",
                    active ? "bg-[var(--color-bg-subtle)] text-white" : "hover:bg-[var(--color-bg-subtle)]",
                  ].join(" ")}
                >
                  <span className="flex min-w-0 items-center gap-2 font-display text-[14px] font-semibold leading-snug text-white">
                    <ItemIcon size={15} className="shrink-0 text-[var(--color-accent)]" />
                    <span className="min-w-0 break-words">{item.title}</span>
                  </span>
                  <span className="mt-1 block text-[12px] leading-snug text-[var(--color-text-mute)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                    {item.summary}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

        <main className="min-w-0">
          <article id="docs-article-content">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
              <Icon size={14} />
              Guide {String(guideNumber).padStart(2, "0")}
            </div>
            <h1 className="mt-2 font-display text-[34px] font-semibold leading-[1] tracking-[-0.03em] text-white sm:text-[52px]">
              {article.title}
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-text-mute)]">
              {article.summary}
            </p>
            <div className="mt-7 min-w-0 space-y-7 text-[14px] leading-relaxed text-[var(--color-text-mute)] sm:text-[15px]">
              {article.render()}
            </div>
          </article>
        </main>

        <aside className="hidden xl:block xl:sticky xl:top-24 xl:self-start">
          <DocsToc />
        </aside>
      </div>
    </div>
  );
}
