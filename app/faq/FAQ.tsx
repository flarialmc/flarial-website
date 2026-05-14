"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Entry {
  q: string;
  a: string;
}

export function FAQ({ entries }: { entries: Entry[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="space-y-3">
      {entries.map((e, i) => {
        const isOpen = open === i;
        return (
          <li
            key={e.q}
            className="rounded-[var(--radius-xl)] overflow-hidden"
            style={{ background: "var(--color-bg-nav)" }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
            >
              <span className="font-display text-[15px] sm:text-[16px] font-medium text-white">
                {e.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className="shrink-0 grid place-items-center w-7 h-7 rounded-[var(--radius-md)] text-[var(--color-text-mute)]"
                style={{ background: isOpen ? "var(--color-accent)" : "var(--color-bg-inset)", color: isOpen ? "white" : undefined }}
              >
                <ChevronDown size={14} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 text-[14px] leading-relaxed text-[var(--color-text-mute)]">
                    {e.a}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
