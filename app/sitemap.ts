import type { MetadataRoute } from "next";
import { getAllChangelogs } from "./lib/changelog";
import { docsArticles } from "./docs/articles";

const BASE = "https://flarial.xyz";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries = await getAllChangelogs();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/download`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/changelog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/docs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/mcpe-client`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/best-minecraft-bedrock-client`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/bedrock-launcher`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/privacy/launcher`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const docsRoutes: MetadataRoute.Sitemap = docsArticles.map((article) => ({
    url: `${BASE}/docs/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const changelogRoutes: MetadataRoute.Sitemap = entries.map((e) => ({
    url: `${BASE}/changelog#${e.slug}`,
    lastModified: new Date(e.date),
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...docsRoutes, ...changelogRoutes];
}
