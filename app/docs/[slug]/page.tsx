import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsArticlePage, docsArticles, getDocsArticle } from "../docs-data";

export function generateStaticParams() {
  return docsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getDocsArticle(slug);

  if (!article) {
    return {
      title: "Docs",
    };
  }

  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/docs/${article.slug}` },
    openGraph: {
      title: `${article.title} · Flarial Docs`,
      description: article.summary,
      type: "article",
    },
  };
}

const SITE_URL = "https://flarial.xyz";

export default async function DocsArticleRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getDocsArticle(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Docs", item: `${SITE_URL}/docs/` },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE_URL}/docs/${article.slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DocsArticlePage article={article} />
    </>
  );
}
