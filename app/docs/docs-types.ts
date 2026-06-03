import type { ReactNode } from "react";
import type { BookOpen } from "lucide-react";

export type TocItem = {
  title: string;
  href: string;
};

export type DocsArticle = {
  slug: string;
  title: string;
  summary: string;
  icon: typeof BookOpen;
  toc: TocItem[];
  render: () => ReactNode;
  /* Optional sidebar group label — a divider is rendered above the first
     article of each group (e.g. "Troubleshooting"). */
  group?: string;
};
