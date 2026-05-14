"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../util/cn";

interface DropdownProps {
  label?: string;
  value: string;
  options: string[];
  onChange?: (next: string) => void;
}

/*
  Port of Dropdown.cpp:10-220.
  Closed shows selected; opens with 0.25 lerp expansion.
  Chevron rotates 0→180 (C++ does 90→270, same visual).
*/
export function Dropdown({ label, value, options, onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div className="w-full" ref={ref}>
      {label ? (
        <div className="text-[12px] font-medium text-white mb-2">{label}</div>
      ) : null}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "w-full flex items-center justify-between gap-3 px-3.5 h-9",
            "rounded-[var(--radius-md)] font-mono text-[12px] text-white",
            "transition-colors",
          )}
          style={{
            background: open ? "var(--color-accent)" : "var(--color-accent-lo)",
          }}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className="truncate">{value}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="text-white"
          >
            <ChevronDown size={14} strokeWidth={2.4} />
          </motion.span>
        </button>
        <AnimatePresence>
          {open ? (
            <motion.ul
              role="listbox"
              initial={{ opacity: 0, y: -4, scaleY: 0.96 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -4, scaleY: 0.96 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "var(--color-bg-panel)",
                boxShadow: "var(--shadow-hover)",
                transformOrigin: "top",
              }}
              className="absolute z-30 mt-1.5 w-full overflow-hidden rounded-[var(--radius-md)] py-1.5"
            >
              {options.map((opt) => {
                const active = opt === value;
                return (
                  <li key={opt} role="option" aria-selected={active}>
                    <button
                      type="button"
                      onClick={() => {
                        onChange?.(opt);
                        setOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-3.5 py-1.5 font-mono text-[12px]",
                        "transition-colors",
                        active
                          ? "text-white"
                          : "text-[var(--color-text-mute)] hover:text-white",
                      )}
                      style={{
                        background: active
                          ? "var(--color-accent)"
                          : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        if (!active) e.currentTarget.style.background = "var(--color-accent-dk)";
                      }}
                      onMouseLeave={(e) => {
                        if (!active) e.currentTarget.style.background = "transparent";
                      }}
                    >
                      {opt}
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
