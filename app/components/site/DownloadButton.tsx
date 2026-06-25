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
  const downloadPadX = "px-4";
  const secondaryPadX = "px-4";
  const text = size === "lg" ? "text-[15.5px]" : "text-[13.5px]";
  const meta = size === "lg" ? "text-[9.5px]" : "text-[9px]";
  const iconSize = size === "lg" ? 20 : 18;
  const iconBoxSize = Math.round(iconSize * 1.45);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex w-full flex-col items-center justify-center gap-2.5 sm:flex-row">
        <PrimaryLink href={WINDOWS_URL} h={h} padX={downloadPadX} className="order-2 sm:order-1">
          <ButtonContent
            icon={<WindowsGlyph size={iconSize} />}
            title="Download for Windows"
            meta="Free · 10 / 11 · 64-bit"
            textClassName={text}
            metaClassName={meta}
            iconBoxSize={iconBoxSize}
          />
        </PrimaryLink>

        <PrimaryLink href={ANDROID_URL} h={h} padX={downloadPadX} className="order-1 sm:order-2">
          <ButtonContent
            icon={<AndroidGlyph size={iconBoxSize} />}
            title="Get it on Google Play"
            meta="Android - Play Store - Free"
            textClassName={text}
            metaClassName={meta}
            iconBoxSize={iconBoxSize}
          />
        </PrimaryLink>
      </div>

      <SecondaryLink href={DISCORD_URL} h={h} padX={secondaryPadX}>
        <ButtonContent
          icon={
            <DiscordIcon
              width={iconSize * 1.18}
              height={iconSize * 1.18}
              className="block text-[#5865F2]"
            />
          }
          title="Join Discord"
          meta="discord.gg/flarial"
          textClassName={text}
          metaClassName={meta}
          iconBoxSize={iconBoxSize}
          mutedMeta
        />
      </SecondaryLink>
    </div>
  );
}

function ButtonContent({
  icon,
  title,
  meta,
  textClassName,
  metaClassName,
  iconBoxSize,
  mutedMeta = false,
}: {
  icon: React.ReactNode;
  title: string;
  meta: string;
  textClassName: string;
  metaClassName: string;
  iconBoxSize: number;
  mutedMeta?: boolean;
}) {
  return (
    <span className="relative grid w-[236px] max-w-full grid-cols-[32px_minmax(0,1fr)] items-center gap-3 text-left">
      <span
        className="grid shrink-0 place-items-center justify-self-center"
        style={{ width: iconBoxSize, height: iconBoxSize }}
      >
        {icon}
      </span>
      <span className="min-w-0 leading-tight">
        <span className={`block whitespace-nowrap font-display font-semibold tracking-tight ${textClassName}`}>
          {title}
        </span>
        <span className={`block whitespace-nowrap font-mono uppercase tracking-[0.08em] ${mutedMeta ? "text-white/55" : "text-white/70"} ${metaClassName}`}>
          {meta}
        </span>
      </span>
    </span>
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
      className={`w-full max-w-[360px] sm:w-[284px] ${className}`}
    >
      <Link
        href={href}
        className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-[14px] text-white ${padX} ${h}`}
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
      className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-[14px] text-white ${padX} ${h} cursor-pointer`}
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
      className="w-full max-w-[360px] sm:w-[284px]"
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
    <img
      src="https://img.icons8.com/ios_filled/512/FFFFFF/google-play.png"
      width={size}
      height={size}
      alt=""
      aria-hidden
      className="relative shrink-0 object-contain"
    />
  );
}
