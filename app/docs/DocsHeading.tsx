"use client";

import type { MouseEvent, ReactNode } from "react";

export function DocsHeading({ id, children }: { id: string; children: ReactNode }) {
  async function copySectionLink(event?: MouseEvent<HTMLElement>) {
    event?.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#${id}`;

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.append(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }

    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <h2
      id={id}
      data-docs-heading="true"
      data-docs-heading-title={typeof children === "string" ? children : undefined}
      onClick={copySectionLink}
      className="group flex w-fit max-w-full min-w-0 scroll-mt-36 cursor-pointer items-center gap-2 border-b-[3px] border-[var(--color-accent)] pb-0 pr-0 font-display text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[28px]"
    >
      <span className="min-w-0">{children}</span>
      <button
        type="button"
        onClick={copySectionLink}
        aria-label={`Copy link to ${children}`}
        className="shrink-0 cursor-pointer rounded-[var(--radius-xs)] px-1 font-mono text-[18px] text-[var(--color-accent)] opacity-0 transition-opacity hover:bg-[var(--color-bg-subtle)] group-hover:opacity-100 focus:opacity-100"
      >
        #
      </button>
    </h2>
  );
}
