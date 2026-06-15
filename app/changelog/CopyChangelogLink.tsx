"use client";

import { useMemo, useState } from "react";

interface Props {
  slug: string;
  title: string;
  className?: string;
}

export function CopyChangelogLink({ slug, title, className }: Props) {
  const [copied, setCopied] = useState(false);
  const href = `/changelog/${slug}/`;
  const label = copied ? "Copied" : "Copy link";

  const absoluteUrl = useMemo(() => {
    if (typeof window === "undefined") return href;
    return new URL(href, window.location.origin).toString();
  }, [href]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.prompt(`Copy link to ${title}`, absoluteUrl);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={className}
      aria-label={`Copy link to ${title}`}
    >
      {label}
    </button>
  );
}
