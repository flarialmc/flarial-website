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

  return <DocsArticlePage article={article} />;
}
