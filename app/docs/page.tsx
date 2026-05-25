import type { Metadata } from "next";
import { DocsArticlePage, docsArticles } from "./docs-data";
import { OpenLastDocsArticle } from "./DocsMemory";

export const metadata: Metadata = {
  title: "Docs",
  description: "Flarial documentation, setup guides, compatibility notes, modules, and server integration docs.",
  alternates: { canonical: "/docs" },
  openGraph: {
    title: "Flarial Docs",
    description: "Documentation for Flarial setup, modules, features, and server integrations.",
    type: "article",
  },
};

export default function DocsPage() {
  return (
    <>
      <OpenLastDocsArticle />
      <DocsArticlePage article={docsArticles[0]} rememberArticle={false} />
    </>
  );
}
