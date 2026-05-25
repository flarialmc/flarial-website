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
};
