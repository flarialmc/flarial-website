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
          <GooglePlayGlyph size={iconSize} />
          <span className="relative text-left leading-tight">
            <span className={`block font-display font-semibold tracking-tight ${text}`}>
              Get on Google Play
            </span>
            <span className={`block font-mono uppercase tracking-[0.18em] text-white/70 ${meta}`}>
              Android · Released · Free
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

function GooglePlayGlyph({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      aria-hidden
      className="relative shrink-0 text-white"
    >
      <path
        fill="currentColor"
        d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"
      />
    </svg>
  );
}
