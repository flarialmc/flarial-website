"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQEntry {
  q: string;
  short: string;
  a: string;
}

export interface FAQCategory {
  title: string;
  description: string;
  entries: FAQEntry[];
}

export function FAQ({ categories }: { categories: FAQCategory[] }) {
  const [open, setOpen] = useState<string | null>(`${categories[0]?.title}:0`);

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <section key={category.title} className="scroll-mt-28">
          <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-[22px] font-semibold tracking-[-0.02em] text-white sm:text-[26px]">
                {category.title}
              </h2>
              <p className="mt-1 text-[13px] leading-relaxed text-[var(--color-text-mute)]">
                {category.description}
              </p>
            </div>
            <span className="w-fit rounded-full bg-black/25 px-3 py-1 text-[11px] text-[var(--color-text-mute)]">
              {category.entries.length} questions
            </span>
          </div>

          <ul className="space-y-3">
            {category.entries.map((e, i) => {
              const key = `${category.title}:${i}`;
              const isOpen = open === key;
              return (
                <li
                  key={e.q}
                  className="overflow-hidden rounded-[var(--radius-xl)]"
                  style={{ background: "var(--color-bg-nav)" }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : key)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="min-w-0">
                      <span className="block font-display text-[15px] font-medium text-white sm:text-[16px]">
                        {e.q}
                      </span>
                      <span className="mt-1 block text-[12.5px] leading-relaxed text-[var(--color-text-mute)]">
                        TL;DR: {e.short}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-[var(--radius-md)] text-[var(--color-text-mute)]"
                      style={{
                        background: isOpen ? "var(--color-accent)" : "var(--color-bg-inset)",
                        color: isOpen ? "white" : undefined,
                      }}
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
                        <div className="px-5 pb-5 text-[14px] leading-relaxed text-[var(--color-text-mute)] sm:px-6">
                          {e.a}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
