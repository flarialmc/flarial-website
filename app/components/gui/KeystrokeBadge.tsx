"use client";

import { motion } from "framer-motion";
import { cn } from "../util/cn";
import type { ReactNode } from "react";

interface KeystrokeBadgeProps {
  children: ReactNode;
  pressed?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

/*
  Port of the in-game Keystrokes HUD square.
  Maroon-bg pressed (primary1 family), nav-bg idle.
*/
export function KeystrokeBadge({
  children,
  pressed = false,
  className,
  size = "md",
}: KeystrokeBadgeProps) {
  const px = { sm: "h-8 w-8 text-xs", md: "h-10 w-10 text-sm", lg: "h-14 w-14 text-base" }[size];
  return (
    <motion.span
      initial={false}
      animate={pressed ? { y: 1, scale: 0.97 } : { y: 0, scale: 1 }}
      transition={{ duration: 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--radius-md)] font-mono font-semibold uppercase tracking-wider",
        "border border-white/5",
        px,
        className,
      )}
      style={{
        background: pressed ? "var(--color-accent)" : "var(--color-bg-nav)",
        color: pressed ? "#fff" : "var(--color-text-mute)",
        boxShadow: pressed
          ? "inset 0 -2px 0 rgba(0,0,0,0.35), var(--shadow-glow)"
          : "inset 0 -2px 0 rgba(0,0,0,0.45), var(--shadow-rest)",
      }}
    >
      {children}
    </motion.span>
  );
}
