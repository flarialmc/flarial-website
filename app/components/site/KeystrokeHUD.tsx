"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KeystrokeBadge } from "../gui/KeystrokeBadge";

/*
  Floating HUD widget. Tracks the visitor's last 4 keypresses.
  Mimics in-game Keystrokes HUD layout: W on top, A/S/D below.
  Falls back to the user's last 4 alphanumeric keys when not WASD.
*/
export function KeystrokeHUD() {
  const [pressed, setPressed] = useState<Record<string, number>>({});
  const [stack, setStack] = useState<string[]>([]);

  useEffect(() => {
    const press = (k: string) => {
      setPressed((p) => ({ ...p, [k]: Date.now() }));
      window.setTimeout(() => {
        setPressed((p) => {
          const copy = { ...p };
          delete copy[k];
          return copy;
        });
      }, 220);
    };

    const onDown = (e: KeyboardEvent) => {
      const k = e.key.length === 1 ? e.key.toUpperCase() : e.key;
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement | null)?.tagName ?? "")) return;
      press(k);
      if (/^[A-Z0-9]$/.test(k)) {
        setStack((s) => [k, ...s].slice(0, 4));
      }
    };

    document.addEventListener("keydown", onDown);
    return () => document.removeEventListener("keydown", onDown);
  }, []);

  const isWASD = (k: string) => pressed[k];

  return (
    <div
      aria-hidden
      className="hidden lg:block fixed bottom-6 right-6 z-20 select-none"
    >
      <div className="flex flex-col items-center gap-1.5 p-2.5 rounded-[var(--radius-lg)]"
        style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
      >
        <div className="flex">
          <KeystrokeBadge size="sm" pressed={!!isWASD("W")}>W</KeystrokeBadge>
        </div>
        <div className="flex gap-1.5">
          <KeystrokeBadge size="sm" pressed={!!isWASD("A")}>A</KeystrokeBadge>
          <KeystrokeBadge size="sm" pressed={!!isWASD("S")}>S</KeystrokeBadge>
          <KeystrokeBadge size="sm" pressed={!!isWASD("D")}>D</KeystrokeBadge>
        </div>
        <div className="mt-1 h-px w-full bg-white/[0.04]" />
        <div className="font-mono text-[9px] tracking-widest text-[var(--color-text-dim)] uppercase">
          Last keys
        </div>
        <div className="flex gap-1 min-h-[16px]">
          <AnimatePresence initial={false}>
            {stack.map((k, i) => (
              <motion.span
                key={`${k}-${i}-${stack.length}`}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1 - i * 0.2, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="font-mono text-[10px] text-white tabular-nums"
              >
                {k}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
