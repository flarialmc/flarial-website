"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GooglePlayIcon } from "../components/site/BrandIcons";
import { AndroidBetaModal } from "../components/site/AndroidBetaModal";

type OS = "windows" | "android" | "macos" | "linux" | "unknown";

const WINDOWS_URL = "https://github.com/flarialmc/launcher/releases/latest";

function detectOS(): OS {
  if (typeof navigator === "undefined") return "windows";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("android")) return "android";
  if (ua.includes("win")) return "windows";
  if (ua.includes("mac")) return "macos";
  if (ua.includes("linux")) return "linux";
  return "unknown";
}

function paramOS(): OS | null {
  if (typeof window === "undefined") return null;
  const p = new URLSearchParams(window.location.search).get("p");
  if (p === "windows" || p === "android" || p === "macos" || p === "linux") return p;
  return null;
}

/*
  The real download — massive primary CTA. Windows goes straight to the GitHub
  release. Android opens the closed-beta Discord modal.
*/
export function GigaDownload() {
  const [os, setOs] = useState<OS>("windows");
  const [androidOpen, setAndroidOpen] = useState(false);

  useEffect(() => {
    setOs(paramOS() ?? detectOS());
  }, []);

  // Auto-open the beta modal if user came in with ?p=android
  useEffect(() => {
    if (os === "android") setAndroidOpen(true);
  }, [os]);

  const isAndroid = os === "android";

  return (
    <div className="space-y-4">
      <motion.div
        whileHover={{ y: -3 }}
        whileTap={{ y: 1, scale: 0.992 }}
        transition={{ type: "spring", stiffness: 180, damping: 26, mass: 0.9 }}
      >
        {isAndroid ? (
          <button
            type="button"
            onClick={() => setAndroidOpen(true)}
            className="group relative flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7 w-full px-5 sm:px-12 py-9 sm:py-12 rounded-[28px] text-white overflow-hidden cursor-pointer flarial-aura"
            style={ctaStyle}
          >
            <span aria-hidden className="flarial-glint" />
            <IconTile>
              <GooglePlayIcon width={48} height={48} className="block" />
            </IconTile>
            <span className="relative text-center sm:text-left leading-tight">
              <span className="block font-display font-bold text-white tracking-[-0.02em] text-[28px] sm:text-[48px]">
                Get on Google Play
              </span>
              <span className="block mt-2 font-mono uppercase tracking-[0.22em] text-white/80 text-[10.5px] sm:text-[12.5px]">
                Android · Closed beta · Tap to join
              </span>
            </span>
          </button>
        ) : (
          <Link
            href={WINDOWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7 w-full px-5 sm:px-12 py-9 sm:py-12 rounded-[28px] text-white overflow-hidden flarial-aura"
            style={ctaStyle}
          >
            <span aria-hidden className="flarial-glint" />
            <IconTile>
              <DownloadGlyph />
            </IconTile>
            <span className="relative text-center sm:text-left leading-tight">
              <span className="block font-display font-bold text-white tracking-[-0.02em] text-[30px] sm:text-[48px]">
                Download for Windows
              </span>
              <span className="block mt-2 font-mono uppercase tracking-[0.22em] text-white/80 text-[10.5px] sm:text-[12.5px]">
                Windows 10 / 11 · 64-bit · Free
              </span>
            </span>
          </Link>
        )}
      </motion.div>

      <div className="flex justify-center">
        {isAndroid ? (
          <PlatformSwitch href="?p=windows" label="Or download for Windows" />
        ) : (
          <PlatformSwitch href="?p=android" label="Or get on Google Play (Android beta)" />
        )}
      </div>

      <AndroidBetaModal open={androidOpen} onClose={() => setAndroidOpen(false)} />
    </div>
  );
}

const ctaStyle: React.CSSProperties = {
  background: "var(--color-accent)",
  boxShadow: [
    "0 0 0 1px rgba(255,255,255,0.08)",
    "inset 0 1px 0 rgba(255,255,255,0.18)",
    "0 32px 80px -20px rgba(255,35,58,0.7)",
    "0 8px 24px rgba(0,0,0,0.5)",
  ].join(", "),
};

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="relative grid place-items-center shrink-0 rounded-2xl"
      style={{
        width: 84,
        height: 84,
        background: "linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.35))",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.3)",
      }}
    >
      {children}
    </span>
  );
}

function PlatformSwitch({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-5 h-10 rounded-[var(--radius-md)] font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-mute)] hover:text-white transition-colors"
      style={{ background: "var(--color-bg-nav)" }}
    >
      {label}
    </Link>
  );
}

function DownloadGlyph() {
  return (
    <svg
      width={44}
      height={44}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="text-white"
    >
      <path d="M12 3v13" />
      <path d="m7 12 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}
