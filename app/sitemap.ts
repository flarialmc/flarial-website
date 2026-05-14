import type { MetadataRoute } from "next";
import { getAllChangelogs } from "./lib/changelog";

const BASE = "https://flarial.xyz";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries = await getAllChangelogs();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/download`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/changelog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const changelogRoutes: MetadataRoute.Sitemap = entries.map((e) => ({
    url: `${BASE}/changelog#${e.slug}`,
    lastModified: new Date(e.date),
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...changelogRoutes];
}
