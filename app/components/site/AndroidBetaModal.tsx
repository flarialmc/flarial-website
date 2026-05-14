"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { DiscordIcon, GooglePlayIcon } from "./BrandIcons";

interface AndroidBetaModalProps {
  open: boolean;
  onClose: () => void;
}

/*
  Gate for the Android Play Store CTA. Until the Android beta is open, every
  Android download click lands here — prompting users to join Discord for the
  next release wave.
*/
export function AndroidBetaModal({ open, onClose }: AndroidBetaModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] bg-black/65 backdrop-blur-[3px]"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-[61] grid place-items-center px-4 pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="android-beta-title"
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md rounded-[var(--radius-5xl)] overflow-hidden pointer-events-auto"
              style={{
                background: "var(--color-bg-nav)",
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 grid place-items-center w-9 h-9 rounded-[var(--radius-md)] text-[var(--color-text-mute)] hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <X size={16} />
              </button>

              <div className="px-7 pt-8 pb-7">
                <div
                  className="grid place-items-center rounded-[var(--radius-md)] mb-5"
                  style={{
                    width: 56,
                    height: 56,
                    background: "var(--color-bg-panel)",
                  }}
                >
                  <GooglePlayIcon width={32} height={32} className="block" />
                </div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-2">
                  Closed beta
                </div>
                <h2
                  id="android-beta-title"
                  className="font-display text-[24px] sm:text-[28px] font-semibold tracking-[-0.015em] text-white leading-tight"
                >
                  Android isn&apos;t public yet.
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-text-mute)]">
                  We&apos;re rolling Flarial Android out in waves. Join the
                  Discord, and you&apos;ll get pinged the moment the next wave opens.
                </p>

                <a
                  href="https://discord.gg/flarial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-3 w-full h-12 rounded-[var(--radius-md)] font-display font-semibold text-white text-[14.5px] transition-shadow"
                  style={{
                    background: "#5865F2",
                    boxShadow: "0 12px 28px rgba(88,101,242,0.35)",
                  }}
                >
                  <DiscordIcon width={18} height={18} className="text-white" />
                  Join Discord to get notified
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="mt-3 w-full text-[12px] font-mono uppercase tracking-widest text-[var(--color-text-mute)] hover:text-white transition-colors py-2"
                >
                  Maybe later
                </button>
              </div>
            </motion.div>
          </div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
