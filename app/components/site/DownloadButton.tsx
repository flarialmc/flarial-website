"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { DiscordIcon, GooglePlayIcon } from "./BrandIcons";
import { AndroidBetaModal } from "./AndroidBetaModal";

/*
  Site-wide CTAs route to the /download subpage rather than directly to the
  external GitHub link — that's where ads load. Android is gated behind a
  beta-waitlist modal until the Play Store listing is public.
*/
const WINDOWS_URL = "/download?p=windows";
const DISCORD_URL = "https://discord.gg/flarial";

export function DownloadButton({ size = "lg" }: { size?: "md" | "lg" }) {
  const [androidOpen, setAndroidOpen] = useState(false);
  const h = size === "lg" ? "h-[60px]" : "h-[52px]";
  const padX = size === "lg" ? "px-6 sm:px-7" : "px-5";
  const text = size === "lg" ? "text-[15.5px]" : "text-[13.5px]";
  const meta = size === "lg" ? "text-[10px]" : "text-[9.5px]";
  const iconSize = size === "lg" ? 20 : 18;

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Primary — Windows, centered, on its own row */}
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ y: 1, scale: 0.985 }}
        transition={{ type: "spring", stiffness: 200, damping: 26, mass: 0.85 }}
      >
        <Link
          href={WINDOWS_URL}
          className={`group relative inline-flex items-center gap-3 ${padX} ${h} rounded-[14px] text-white overflow-hidden`}
          style={{
            background: "var(--color-accent)",
            boxShadow: [
              "0 0 0 1px rgba(255,255,255,0.07)",
              "0 1px 0 rgba(255,255,255,0.15) inset",
              "0 18px 40px -10px rgba(255,35,58,0.55)",
              "0 4px 12px rgba(0,0,0,0.4)",
            ].join(", "),
          }}
        >
          <span aria-hidden className="flarial-glint" />
          <WindowsGlyph size={iconSize} />
          <span className="relative text-left leading-tight">
            <span className={`block font-display font-semibold tracking-tight ${text}`}>
              Download for Windows
            </span>
            <span className={`block font-mono uppercase tracking-[0.18em] text-white/70 ${meta}`}>
              Free · 10 / 11 · 64-bit
            </span>
          </span>
        </Link>
      </motion.div>

      {/* Secondary row — Android (modal) + Discord, spaced apart */}
      <div className="flex flex-col sm:flex-row items-stretch gap-8 sm:gap-14">
        <SecondaryButton onClick={() => setAndroidOpen(true)} h={h} padX={padX}>
          <GooglePlayIcon width={iconSize} height={iconSize} className="relative shrink-0 block" />
          <span className="relative text-left leading-tight">
            <span className={`block font-display font-semibold tracking-tight ${text}`}>
              Get on Google Play
            </span>
            <span className={`block font-mono uppercase tracking-[0.18em] text-white/55 ${meta}`}>
              Android · Closed beta
            </span>
          </span>
        </SecondaryButton>

        <SecondaryLink href={DISCORD_URL} h={h} padX={padX}>
          <span
            className="relative shrink-0 grid place-items-center"
            style={{ width: iconSize, height: iconSize }}
          >
            <DiscordIcon
              width={iconSize * 1.18}
              height={iconSize * 1.18}
              className="block text-[#5865F2]"
            />
          </span>
          <span className="relative text-left leading-tight">
            <span className={`block font-display font-semibold tracking-tight ${text}`}>
              Join Discord
            </span>
            <span className={`block font-mono uppercase tracking-[0.18em] text-white/55 ${meta}`}>
              discord.gg/flarial
            </span>
          </span>
        </SecondaryLink>
      </div>

      <AndroidBetaModal open={androidOpen} onClose={() => setAndroidOpen(false)} />
    </div>
  );
}

function SecondaryShell({
  h,
  padX,
  children,
  ...rest
}: {
  h: string;
  padX: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <span
      {...rest}
      className={`group relative inline-flex items-center gap-3 ${padX} ${h} rounded-[14px] text-white overflow-hidden w-full sm:w-auto cursor-pointer`}
      style={{
        background: "var(--color-bg-nav)",
        boxShadow: [
          "0 0 0 1px rgba(255,255,255,0.06)",
          "0 1px 0 rgba(255,255,255,0.06) inset",
          "0 8px 24px rgba(0,0,0,0.55)",
        ].join(", "),
      }}
    >
      <span aria-hidden className="flarial-glint" />
      {children}
    </span>
  );
}

function SecondaryButton({
  onClick,
  h,
  padX,
  children,
}: {
  onClick: () => void;
  h: string;
  padX: string;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ y: 1, scale: 0.985 }}
      transition={{ type: "spring", stiffness: 200, damping: 26, mass: 0.85 }}
      className="inline-flex"
    >
      <SecondaryShell h={h} padX={padX}>
        {children}
      </SecondaryShell>
    </motion.button>
  );
}

function SecondaryLink({
  href,
  h,
  padX,
  children,
}: {
  href: string;
  h: string;
  padX: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ y: 1, scale: 0.985 }}
      transition={{ type: "spring", stiffness: 200, damping: 26, mass: 0.85 }}
    >
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block"
      >
        <SecondaryShell h={h} padX={padX}>
          {children}
        </SecondaryShell>
      </Link>
    </motion.div>
  );
}

function WindowsGlyph({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="relative shrink-0"
    >
      <path d="M3 5.5 11 4v8H3V5.5ZM12 3.85l9-1.35V11h-9V3.85ZM3 13h8v7.5L3 19V13Zm9 0h9v8l-9-1.35V13Z" />
    </svg>
  );
}
