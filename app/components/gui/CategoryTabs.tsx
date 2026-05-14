"use client";

import { motion } from "framer-motion";
import { cn } from "../util/cn";

interface CategoryTabsProps<T extends string> {
  value: T;
  options: readonly T[];
  onChange: (next: T) => void;
  className?: string;
  size?: "sm" | "md";
}

export function CategoryTabs<T extends string>({
  value,
  options,
  onChange,
  className,
  size = "md",
}: CategoryTabsProps<T>) {
  const px = size === "sm" ? "px-3.5 py-1.5 text-[11px]" : "px-4 py-2 text-[12px]";
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-[var(--radius-lg)] p-1",
        className,
      )}
      style={{ background: "var(--color-bg-nav)" }}
      role="tablist"
    >
      {options.map((opt) => {
        const active = opt === value;
        return (
          <button
            key={opt}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt)}
            className={cn(
              "relative font-mono uppercase tracking-widest transition-colors",
              px,
              active ? "text-white" : "text-[var(--color-text-mute)] hover:text-white",
            )}
          >
            {active ? (
              <motion.span
                layoutId={`tabs-pill-${options.join(",")}`}
                className="absolute inset-0 rounded-[var(--radius-md)]"
                style={{ background: "var(--color-accent)" }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            ) : null}
            <span className="relative z-10">{opt}</span>
          </button>
        );
      })}
    </div>
  );
}
