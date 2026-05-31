"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const storageKey = "flarial:last-docs-article";
const validSlugs = new Set([
  "what-is-flarial",
  "usage",
  "compatibility",
  "module-blocking",
  "modules-list",
  "extra-features",
]);

export function RememberDocsArticle({ slug }: { slug: string }) {
  useEffect(() => {
    window.localStorage.setItem(storageKey, slug);
  }, [slug]);

  return null;
}

export function OpenLastDocsArticle() {
  const router = useRouter();

  useEffect(() => {
    const lastSlug = window.localStorage.getItem(storageKey);

    if (lastSlug && validSlugs.has(lastSlug)) {
      router.replace(`/docs/${lastSlug}/`);
    }
  }, [router]);

  return null;
}
