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
  const downloadPadX = "px-3 sm:px-4";
  const secondaryPadX = size === "lg" ? "px-5 sm:px-6" : "px-4";
  const text = size === "lg" ? "text-[15.5px]" : "text-[13.5px]";
  const meta = size === "lg" ? "text-[10px]" : "text-[9.5px]";
  const iconSize = size === "lg" ? 20 : 18;

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex w-full max-w-[360px] flex-col items-stretch justify-center gap-2.5 sm:max-w-none sm:flex-row">
        <PrimaryLink href={WINDOWS_URL} h={h} padX={downloadPadX} className="order-2 sm:order-1">
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

        <PrimaryLink href={ANDROID_URL} h={h} padX={downloadPadX} className="order-1 sm:order-2">
          <AndroidGlyph size={Math.round(iconSize * 1.45)} />
          <span className="relative text-left leading-tight">
            <span className={`block font-display font-semibold tracking-tight ${text}`}>
              Get it on Google Play
            </span>
            <span className={`block font-mono uppercase tracking-[0.18em] text-white/70 ${meta}`}>
              Android - Play Store - Free
            </span>
          </span>
        </PrimaryLink>
      </div>

      <SecondaryLink href={DISCORD_URL} h={h} padX={secondaryPadX}>
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
      className={`w-full sm:w-auto ${className}`}
    >
      <Link
        href={href}
        className={`group relative inline-flex w-full items-center gap-3 overflow-hidden rounded-[14px] text-white sm:w-auto ${padX} ${h}`}
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
      className={`group relative inline-flex w-full items-center gap-3 overflow-hidden rounded-[14px] text-white sm:w-auto ${padX} ${h} cursor-pointer`}
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
      className="w-full max-w-[360px] sm:w-auto sm:max-w-none"
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

function AndroidGlyph({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden
      className="relative shrink-0 text-white"
    >
      <path
        fill="currentColor"
        d="M7.7,16.2A2.7,2.7,0,0,0,5,18.9V30.3a2.8,2.8,0,0,0,1.2,2.3,2.6,2.6,0,0,0,1.5.4,2.7,2.7,0,0,0,2.2-1.1l.2-.3.3-.7v-12A2.7,2.7,0,0,0,7.7,16.2Z"
      />
      <path
        fill="currentColor"
        d="M29.6,6l1.9-3.4c0-.1.1-.1.1-.2a.8.8,0,0,0-.2-.4h-.5l-2,3.5a4.9,4.9,0,0,0-1.7-.6,13.6,13.6,0,0,0-3.6-.5H21.8a12.9,12.9,0,0,0-3.5,1L16.4,2.2A.5.5,0,0,0,16,2h-.2a.4.4,0,0,0-.1.3v.2L17.6,6h0a11.8,11.8,0,0,0-4.4,3.9l-.5.8-.6,1.4a8.9,8.9,0,0,0-.7,3.6H35.8A11.1,11.1,0,0,0,29.6,6ZM18.1,11.4A1.1,1.1,0,0,1,17,10.3a1.1,1.1,0,0,1,1.1-1,1.1,1.1,0,0,1,1,1A1.1,1.1,0,0,1,18.1,11.4Zm11.1,0a1,1,0,0,1-1-1.1,1,1,0,0,1,2,0A1,1,0,0,1,29.2,11.4Z"
      />
      <path
        fill="currentColor"
        d="M11.5,16.8V34.4a2.9,2.9,0,0,0,2.9,2.9h2v6A2.6,2.6,0,0,0,18,45.8h1.1l1-.2a2.7,2.7,0,0,0,1.7-2.5v-6h3.7v6a2.7,2.7,0,1,0,5.4,0v-6h2a3.5,3.5,0,0,0,1.7-.6,2.9,2.9,0,0,0,1.2-2.3V16.8Z"
      />
      <path
        fill="currentColor"
        d="M42.2,18.9a2.6,2.6,0,0,0-2.1-2.6h-.6a2.7,2.7,0,0,0-2.7,2.7V30.3a2.7,2.7,0,1,0,5.4,0Z"
      />
    </svg>
  );
}
