import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface ChangelogEntry {
  slug: string;
  title: string;
  date: string;
  tag: string;
  body: string;       /* HTML */
  excerpt: string;    /* plain text */
}

const DIR = path.join(process.cwd(), "content", "changelogs");

function readDir() {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter((f) => f.endsWith(".md"));
}

async function fileToEntry(filename: string): Promise<ChangelogEntry> {
  const raw = fs.readFileSync(path.join(DIR, filename), "utf-8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  const body = processed.toString();
  const slug = filename.replace(/\.md$/, "");
  const plain = content.replace(/[#*_`>\-\[\]\(\)!]/g, " ").replace(/\s+/g, " ").trim();
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? slug.slice(0, 10)),
    tag: String(data.tag ?? "Update"),
    body,
    excerpt: plain.slice(0, 220) + (plain.length > 220 ? "…" : ""),
  };
}

export async function getAllChangelogs(): Promise<ChangelogEntry[]> {
  const files = readDir();
  const entries = await Promise.all(files.map(fileToEntry));
  return entries.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getChangelogTags(): Promise<string[]> {
  const all = await getAllChangelogs();
  return Array.from(new Set(all.map((e) => e.tag))).sort();
}

export async function getLatestChangelog(): Promise<ChangelogEntry | null> {
  const all = await getAllChangelogs();
  return all[0] ?? null;
}
