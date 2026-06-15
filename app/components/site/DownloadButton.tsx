"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DiscordIcon } from "./BrandIcons";

/*
  Site-wide CTAs route to the /download subpage so visitors see the full
  platform choice and the download page ad slot before leaving the site.
*/
const WINDOWS_URL = "/download?p=windows";
const ANDROID_URL = "/download?p=android";
const DISCORD_URL = "https://discord.gg/flarial";

export function DownloadButton({ size = "lg" }: { size?: "md" | "lg" }) {
  const h = size === "lg" ? "h-[60px]" : "h-[52px]";
  const padX = size === "lg" ? "px-6 sm:px-7" : "px-5";
  const text = size === "lg" ? "text-[15.5px]" : "text-[13.5px]";
  const meta = size === "lg" ? "text-[10px]" : "text-[9.5px]";
  const iconSize = size === "lg" ? 20 : 18;

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
        <PrimaryLink href={WINDOWS_URL} h={h} padX={padX} className="order-2 sm:order-1">
          <WindowsGlyph size={iconSize} />
          <span className="relative text-left leading-tight">
            <span className={`block font-display font-semibold tracking-tight ${text}`}>
              Download for Windows
            </span>
            <span className={`block font-mono uppercase tracking-[0.18em] text-white/70 ${meta}`}>
              Free · 10 / 11 · 64-bit
            </span>
          </span>
        </PrimaryLink>

        <PrimaryLink href={ANDROID_URL} h={h} padX={padX} className="order-1 sm:order-2">
          <AndroidGlyph height={Math.round(iconSize * 1.25)} />
          <span className="relative text-left leading-tight">
            <span className={`block font-display font-semibold tracking-tight ${text}`}>
              Download Android APK
            </span>
            <span className={`block font-mono uppercase tracking-[0.18em] text-white/70 ${meta}`}>
              Android - APK - Free
            </span>
          </span>
        </PrimaryLink>
      </div>

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
  );
}

function PrimaryLink({
  href,
  h,
  padX,
  className = "",
  children,
}: {
  href: string;
  h: string;
  padX: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ y: 1, scale: 0.985 }}
      transition={{ type: "spring", stiffness: 200, damping: 26, mass: 0.85 }}
      className={className}
    >
      <Link
        href={href}
        className={`group relative inline-flex items-center gap-3 ${padX} ${h} rounded-[14px] text-white overflow-hidden w-full sm:w-auto`}
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
        {children}
      </Link>
    </motion.div>
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
      viewBox="0 0 4875 4875"
      aria-hidden
      className="relative shrink-0 text-white"
    >
      <rect width="2311" height="2310" x="0" y="0" rx="190" fill="currentColor" />
      <rect width="2311" height="2310" x="2564" y="0" rx="190" fill="currentColor" />
      <rect width="2311" height="2311" x="0" y="2564" rx="190" fill="currentColor" />
      <rect width="2311" height="2311" x="2564" y="2564" rx="190" fill="currentColor" />
    </svg>
  );
}

function AndroidGlyph({ height }: { height: number }) {
  return (
    <svg
      width={Math.round(height * 1.87)}
      height={height}
      viewBox="0 0 467.046 250.164"
      aria-hidden
      className="relative shrink-0 text-white"
    >
      <path
        fill="currentColor"
        d="M293.91 212.775c-6.025 0-10.926-4.905-10.926-10.93s4.901-10.926 10.926-10.926c6.026 0 10.927 4.9 10.927 10.926s-4.901 10.93-10.927 10.93m-120.774 0c-6.025 0-10.926-4.905-10.926-10.93s4.9-10.926 10.926-10.926c6.025 0 10.926 4.9 10.926 10.926s-4.9 10.93-10.926 10.93m124.693-65.82 21.838-37.822a4.548 4.548 0 0 0-1.663-6.206 4.549 4.549 0 0 0-6.206 1.663l-22.111 38.3c-16.91-7.716-35.9-12.015-56.164-12.015-20.264 0-39.254 4.299-56.163 12.015l-22.112-38.3a4.549 4.549 0 0 0-6.206-1.663 4.545 4.545 0 0 0-1.663 6.206l21.838 37.822c-37.499 20.395-63.146 58.358-66.898 103.209h262.408c-3.755-44.85-29.402-82.814-66.898-103.21"
      />
    </svg>
  );
}
