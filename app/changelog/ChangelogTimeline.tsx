"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format, parseISO } from "date-fns";
import type { ChangelogEntry } from "../lib/changelog";
import { cn } from "../components/util/cn";
import "./prose.css";

interface Props {
  entries: ChangelogEntry[];
  tags: string[];
}

const PAGE = 12;

/*
  Lunar-style changelog — blog-card list. Big title, tag chip, date,
  prose body. No left rail. Tag filter chips above. Load-more pagination.
*/
export function ChangelogTimeline({ entries, tags }: Props) {
  const [active, setActive] = useState<Set<string>>(new Set());
  const [visible, setVisible] = useState(PAGE);

  const filtered = useMemo(() => {
    if (active.size === 0) return entries;
    return entries.filter((e) => active.has(e.tag));
  }, [active, entries]);

  const shown = filtered.slice(0, visible);

  const toggle = (t: string) =>
    setActive((prev) => {
      const copy = new Set(prev);
      copy.has(t) ? copy.delete(t) : copy.add(t);
      setVisible(PAGE);
      return copy;
    });

  return (
    <div>
      {/* Tag filter rail */}
      <div className="flex flex-wrap gap-2 mb-12">
        <TagPill on={active.size === 0} onClick={() => { setActive(new Set()); setVisible(PAGE); }}>
          All updates
        </TagPill>
        {tags.map((t) => (
          <TagPill key={t} on={active.has(t)} onClick={() => toggle(t)}>
            {t}
          </TagPill>
        ))}
      </div>

      {/* Card list */}
      <div className="space-y-5">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((entry, i) => (
            <motion.article
              key={entry.slug}
              id={entry.slug}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.32,
                delay: Math.min(i * 0.03, 0.3),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-[var(--radius-2xl)] overflow-hidden scroll-mt-24"
              style={{
                background: "var(--color-bg-nav)",
                boxShadow: "var(--shadow-rest)",
              }}
            >
              <div className="px-6 sm:px-8 py-6 sm:py-7">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-[var(--radius-md)] font-mono text-[10.5px] uppercase tracking-widest text-white"
                    style={{ background: "var(--color-accent)" }}
                  >
                    {entry.tag}
                  </span>
                  <span className="font-mono text-[11px] text-[var(--color-text-dim)] tabular-nums">
                    {formatDate(entry.date)}
                  </span>
                </div>
                <h2 className="font-display text-[22px] sm:text-[28px] leading-[1.1] font-semibold tracking-[-0.015em] text-white mb-4">
                  {entry.title}
                </h2>
                <div
                  className="prose-flarial text-[14.5px] leading-relaxed text-[var(--color-text)]"
                  dangerouslySetInnerHTML={{ __html: entry.body }}
                />
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Load more */}
      {visible < filtered.length ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE)}
            className="px-6 h-11 rounded-[var(--radius-md)] font-mono text-[11.5px] uppercase tracking-widest text-white transition-colors hover:brightness-110"
            style={{ background: "var(--color-bg-panel)" }}
          >
            Load older updates · {filtered.length - visible} left
          </button>
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <div
          className="rounded-[var(--radius-xl)] p-10 text-center text-[14px] text-[var(--color-text-mute)]"
          style={{ background: "var(--color-bg-nav)" }}
        >
          No entries with that tag.
        </div>
      ) : null}
    </div>
  );
}

function TagPill({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={cn(
        "px-3.5 py-1.5 rounded-[var(--radius-4xl)] font-mono text-[11px] uppercase tracking-widest transition-colors",
        on ? "text-white" : "text-[var(--color-text-mute)] hover:text-white",
      )}
      style={{
        background: on ? "var(--color-accent)" : "var(--color-bg-nav)",
        boxShadow: on ? "var(--shadow-glow)" : undefined,
      }}
    >
      {children}
    </button>
  );
}

function formatDate(iso: string) {
  try {
    return format(parseISO(iso), "MMMM d, yyyy");
  } catch {
    return iso;
  }
}
