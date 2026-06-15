"use client";

import { motion } from "framer-motion";

const WINDOWS_URL = "https://cdn.flarial.xyz/launcher/Flarial.Launcher.exe";
const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.flarialmc.flarial_launcher";

/*
  Equal-priority platform downloads. Windows goes straight to the launcher
  download, and Android goes straight to the released Google Play listing.
*/
export function GigaDownload() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <DownloadCard
        href={WINDOWS_URL}
        title="Download for Windows"
        meta="Windows 10 / 11 · 64-bit · Free"
        className="order-2 md:order-1"
        download
      >
        <WindowsGlyph />
      </DownloadCard>

      <DownloadCard
        href={ANDROID_URL}
        title="Get on Google Play"
        meta="Android · Released · Free"
        className="order-1 md:order-2"
        external
      >
        <GooglePlayGlyph />
      </DownloadCard>
    </div>
  );
}

function DownloadCard({
  href,
  title,
  meta,
  className = "",
  download,
  external,
  children,
}: {
  href: string;
  title: string;
  meta: string;
  className?: string;
  download?: boolean;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      whileTap={{ y: 1, scale: 0.992 }}
      transition={{ type: "spring", stiffness: 180, damping: 26, mass: 0.9 }}
      className={`min-w-0 ${className}`}
    >
      <a
        href={href}
        download={download ? true : undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group relative flex h-full min-h-[240px] flex-col items-center justify-center gap-5 overflow-hidden rounded-[28px] px-5 py-9 text-center text-white flarial-aura sm:px-8 sm:py-11"
        style={ctaStyle}
      >
        <span aria-hidden className="flarial-glint" />
        <IconTile>{children}</IconTile>
        <span className="relative min-w-0 leading-tight">
          <span className="block font-display text-[29px] font-bold tracking-[-0.02em] text-white sm:text-[38px]">
            {title}
          </span>
          <span className="mt-2 block font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/80 sm:text-[12px]">
            {meta}
          </span>
        </span>
      </a>
    </motion.div>
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
      className="relative grid shrink-0 place-items-center rounded-2xl"
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

function WindowsGlyph() {
  return (
    <svg
      width={44}
      height={44}
      viewBox="0 0 4875 4875"
      aria-hidden
      className="block text-white"
    >
      <rect width="2311" height="2310" x="0" y="0" rx="190" fill="currentColor" />
      <rect width="2311" height="2310" x="2564" y="0" rx="190" fill="currentColor" />
      <rect width="2311" height="2311" x="0" y="2564" rx="190" fill="currentColor" />
      <rect width="2311" height="2311" x="2564" y="2564" rx="190" fill="currentColor" />
    </svg>
  );
}

function GooglePlayGlyph() {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 50 50"
      aria-hidden
      className="block text-white"
    >
      <path
        fill="currentColor"
        d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"
      />
    </svg>
  );
}
