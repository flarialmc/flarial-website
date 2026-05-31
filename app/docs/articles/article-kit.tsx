import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  BookOpen,
  Box,
  CheckCircle2,
  Compass,
  Download,
  ExternalLink,
  FileCode2,
  Layers3,
  ListChecks,
  MonitorCog,
  MonitorUp,
  ShieldCheck,
  Sparkles,
  Smartphone,
} from "lucide-react";
import { CopyablePath } from "../CopyablePath";
import { DocsHeading } from "../DocsHeading";
import { SupportedVersions } from "../SupportedVersions";

export {
  BookOpen,
  Box,
  CheckCircle2,
  Compass,
  CopyablePath,
  DocsHeading,
  Download,
  ExternalLink,
  FileCode2,
  Image,
  Layers3,
  Link,
  ListChecks,
  MonitorCog,
  MonitorUp,
  ShieldCheck,
  Sparkles,
  Smartphone,
  SupportedVersions,
};

export const sectionFrameClass =
  "scroll-mt-28 space-y-3 rounded-[var(--radius-2xl)] p-5 sm:p-7";

export function CodeBlock({ children }: { children: string }) {
  const tokenPattern = /"(?:\\.|[^"\\])*"|true|false|null|-?\d+(?:\.\d+)?|[{}[\]:,]/g;
  const parts: ReactNode[] = [];
  let cursor = 0;

  for (const match of children.matchAll(tokenPattern)) {
    const token = match[0];
    const index = match.index ?? 0;

    if (index > cursor) {
      parts.push(children.slice(cursor, index));
    }

    const nextNonSpace = children.slice(index + token.length).match(/\S/)?.[0];
    const isKey = token.startsWith("\"") && nextNonSpace === ":";
    const isString = token.startsWith("\"");
    const isBoolean = token === "true" || token === "false" || token === "null";
    const isNumber = /^-?\d/.test(token);
    const className = isKey
      ? "text-[var(--color-accent-hi)]"
      : isString
        ? "text-[#ffd9dd]"
        : isBoolean
          ? "text-[var(--color-accent)]"
          : isNumber
            ? "text-[#d0a0a8]"
            : "text-[var(--color-text-mute)]";

    parts.push(
      <span key={`${index}-${token}`} className={className}>
        {token}
      </span>,
    );
    cursor = index + token.length;
  }

  if (cursor < children.length) {
    parts.push(children.slice(cursor));
  }

  return (
    <pre
      className="overflow-x-scroll rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/35 p-4 font-mono text-[12px] leading-relaxed text-[var(--color-text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
    >
      <code className="whitespace-pre">{parts}</code>
    </pre>
  );
}

export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-[var(--radius-xs)] bg-black/30 px-1.5 py-0.5 font-mono text-[0.9em] text-white">
      {children}
    </code>
  );
}

export function InfoCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0 rounded-[var(--radius-xl)] bg-black/25 p-4">
      <div className="mb-2 flex items-center gap-2 font-display text-[16px] font-semibold text-white">
        {icon}
        {title}
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

