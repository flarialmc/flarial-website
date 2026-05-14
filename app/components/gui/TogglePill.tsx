"use client";

import { motion } from "framer-motion";
import { cn } from "../util/cn";

interface TogglePillProps {
  on: boolean;
  onChange?: (next: boolean) => void;
  label?: string;
  size?: "sm" | "md";
  disabled?: boolean;
}

/*
  Ported from Toggle.cpp:8-119.
  Outer radius 30px (--radius-4xl), knob radius 23px (--radius-3xl).
  Color crossfade lerp 0.10 (~320ms). Knob slide lerp 0.25 (~150ms).
  The C++ uses primary1 / primary3 — here we read --color-accent / --color-accent-lo.
*/
export function TogglePill({
  on,
  onChange,
  label,
  size = "md",
  disabled = false,
}: TogglePillProps) {
  const dims = size === "sm" ? { w: 44, h: 22, k: 16 } : { w: 56, h: 30, k: 22 };
  const padding = (dims.h - dims.k) / 2;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label ?? (on ? "Enabled" : "Disabled")}
      disabled={disabled}
      onClick={() => !disabled && onChange?.(!on)}
      className={cn(
        "relative shrink-0 select-none transition-colors",
        "rounded-[var(--radius-4xl)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
        disabled && "opacity-50 cursor-not-allowed",
      )}
      style={{
        width: dims.w,
        height: dims.h,
        background: on ? "var(--color-accent)" : "var(--color-accent-lo)",
        transitionDuration: "var(--duration-slow)",
        transitionTimingFunction: "var(--ease-in-out)",
        boxShadow: on ? "var(--shadow-glow)" : "var(--shadow-inset)",
      }}
    >
      <motion.span
        layout
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 bg-white"
        style={{
          width: dims.k,
          height: dims.k,
          borderRadius: "var(--radius-3xl)",
          left: on ? dims.w - dims.k - padding : padding,
          boxShadow: "0 2px 6px rgba(0,0,0,0.35)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
    </button>
  );
}
