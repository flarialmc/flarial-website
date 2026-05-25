"use client";

import { useEffect, useState } from "react";
import { ListChecks } from "lucide-react";

type HeadingItem = {
  href: string;
  title: string;
};

function readHeadings() {
  const article = document.getElementById("docs-article-content");
  if (!article) return [];

  return Array.from(article.querySelectorAll<HTMLElement>("[data-docs-heading][id]"))
    .map((heading) => ({
      href: `#${heading.id}`,
      title: heading.dataset.docsHeadingTitle ?? heading.textContent?.replace(/#$/, "").trim() ?? "",
    }))
    .filter((item) => item.title.length > 0);
}

export function DocsToc() {
  const [items, setItems] = useState<HeadingItem[]>([]);

  useEffect(() => {
    const syncHeadings = () => setItems(readHeadings());
    syncHeadings();

    const article = document.getElementById("docs-article-content");
    if (!article) return;

    const observer = new MutationObserver(syncHeadings);
    observer.observe(article, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["id", "data-docs-heading", "data-docs-heading-title"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="rounded-[var(--radius-2xl)] p-4" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
      <div className="flex items-center gap-2 font-display font-semibold text-white">
        <ListChecks size={16} className="text-[var(--color-accent)]" />
        On this page
      </div>
      <nav className="mt-4 grid gap-2 text-[13px] text-[var(--color-text-mute)]">
        {items.map((item) => (
          <a key={item.href} href={item.href} className="rounded-[var(--radius-sm)] px-2 py-1.5 hover:bg-[var(--color-bg-subtle)] hover:text-white">
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
