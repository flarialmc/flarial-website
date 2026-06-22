"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WINDOWS_URL = "https://cdn.flarial.xyz/launcher/Flarial.Launcher.exe";
const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.flarialmc.flarial_launcher";

/*
  Equal-priority platform downloads. Windows goes straight to the launcher
  download, and Android opens a quick Google Play install prompt before leaving.
*/
export function GigaDownload() {
  const [showAndroidHelp, setShowAndroidHelp] = useState(false);

  useEffect(() => {
    const platform = new URLSearchParams(window.location.search).get("p");
    if (platform === "android") {
      setShowAndroidHelp(true);
    }
  }, []);

  const openAndroidPlayStore = () => {
    window.location.href = ANDROID_URL;
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <DownloadCard
          href={WINDOWS_URL}
          title="Download for Windows"
          meta="Windows 10 / 11 - 64-bit - Free"
          className="order-2 md:order-1"
          download
        >
          <WindowsGlyph />
        </DownloadCard>

        <DownloadCard
          title="Get it on Google Play"
          meta="Android - Play Store - Free"
          className="order-1 md:order-2"
          onClick={() => setShowAndroidHelp(true)}
        >
          <AndroidGlyph />
        </DownloadCard>
      </div>

      {showAndroidHelp ? (
        <AndroidInstallModal
          onClose={() => setShowAndroidHelp(false)}
          onDownload={openAndroidPlayStore}
        />
      ) : null}
    </>
  );
}

function DownloadCard({
  href,
  title,
  meta,
  className = "",
  download,
  onClick,
  children,
}: {
  href?: string;
  title: string;
  meta: string;
  className?: string;
  download?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const classNames =
    "group relative flex h-full min-h-[240px] w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-[28px] px-5 py-9 text-center text-white flarial-aura sm:px-8 sm:py-11";
  const content = (
    <>
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
    </>
  );

  return (
    <motion.div
      whileHover={{ y: -3 }}
      whileTap={{ y: 1, scale: 0.992 }}
      transition={{ type: "spring", stiffness: 180, damping: 26, mass: 0.9 }}
      className={`min-w-0 ${className}`}
    >
      {href ? (
        <a
          href={href}
          download={download ? true : undefined}
          className={classNames}
          style={ctaStyle}
        >
          {content}
        </a>
      ) : (
        <button type="button" onClick={onClick} className={classNames} style={ctaStyle}>
          {content}
        </button>
      )}
    </motion.div>
  );
}

function AndroidInstallModal({
  onClose,
  onDownload,
}: {
  onClose: () => void;
  onDownload: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 py-6 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="android-play-title"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-[24px] border border-white/[0.08] p-5 text-left text-white sm:p-6"
        style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Android on Google Play
            </div>
            <h2 id="android-play-title" className="mt-2 font-display text-[26px] font-semibold leading-tight">
              Install Flarial from Google Play
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-[var(--radius-md)] bg-black/25 text-[20px] leading-none text-white/70 hover:text-white"
            aria-label="Close Android Google Play prompt"
          >
            x
          </button>
        </div>

        <ol className="mt-5 grid gap-3">
          {[
            "Tap Open Google Play below to view the official Flarial Launcher listing.",
            "Install Flarial Launcher from Google Play like any other Android app.",
            "Open Flarial Launcher after install and finish any required setup.",
            "Launch Minecraft through Flarial when the launcher is ready.",
          ].map((step, index) => (
            <li
              key={step}
              className="grid grid-cols-[28px_minmax(0,1fr)] gap-3 text-[14px] leading-relaxed text-[var(--color-text)]"
            >
              <span className="grid h-7 w-7 place-items-center rounded-[var(--radius-md)] bg-[var(--color-accent)] font-mono text-[12px] font-bold text-white">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-5 rounded-[var(--radius-xl)] border border-[rgba(255,35,58,0.28)] bg-black/25 p-4 text-[13px] leading-relaxed text-[var(--color-text-mute)]">
          Only install Flarial from the official <span className="text-white">Google Play</span> listing or official Flarial links.
          Random APK mirrors can be fake, outdated, or unsafe.
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
          <button
            type="button"
            onClick={onDownload}
            className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 font-display text-[14px] font-semibold text-white shadow-[var(--shadow-glow)]"
          >
            Open Google Play
          </button>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-md)] bg-black/25 px-5 font-display text-[14px] font-semibold text-white/80 hover:text-white"
          >
            Got it
          </button>
        </div>
      </div>
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

function AndroidGlyph() {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      aria-hidden
      className="block text-white"
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
