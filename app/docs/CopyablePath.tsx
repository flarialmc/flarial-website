"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyablePath({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copyPath() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      const input = document.createElement("input");
      input.value = value;
      document.body.append(input);
      input.select();
      document.execCommand("copy");
      input.remove();
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    }
  }

  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={copyPath}
      className="group flex w-full min-w-0 cursor-pointer items-center justify-between gap-2 rounded-[var(--radius-md)] bg-black/25 px-2.5 py-2 text-left transition-colors hover:bg-[var(--color-bg-subtle)] sm:gap-3 sm:px-3"
      aria-label={`Copy ${value}`}
    >
      <code className="min-w-0 break-all font-mono text-[11px] leading-relaxed text-[var(--color-accent-hi)] sm:text-[12px]">{value}</code>
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-[var(--radius-sm)] text-[var(--color-text-mute)] opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
        <Icon size={14} />
      </span>
    </button>
  );
}
