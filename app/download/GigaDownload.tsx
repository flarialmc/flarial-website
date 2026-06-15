"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WINDOWS_URL = "https://cdn.flarial.xyz/launcher/Flarial.Launcher.exe";
const ANDROID_URL = "https://cdn.flarial.xyz/android/Flarial.apk";
const ANDROID_FILE_NAME = "Flarial.apk";

/*
  Equal-priority platform downloads. Windows goes straight to the launcher
  download, and Android opens a quick APK install guide before downloading.
*/
export function GigaDownload() {
  const [showAndroidHelp, setShowAndroidHelp] = useState(false);

  useEffect(() => {
    const platform = new URLSearchParams(window.location.search).get("p");
    if (platform === "android") {
      setShowAndroidHelp(true);
    }
  }, []);

  const downloadAndroidApk = () => {
    const link = document.createElement("a");
    link.href = ANDROID_URL;
    link.download = ANDROID_FILE_NAME;
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
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
          title="Download Android APK"
          meta="Android - APK - Free"
          className="order-1 md:order-2"
          onClick={() => setShowAndroidHelp(true)}
        >
          <AndroidGlyph />
        </DownloadCard>
      </div>

      {showAndroidHelp ? (
        <AndroidInstallModal
          onClose={() => setShowAndroidHelp(false)}
          onDownload={downloadAndroidApk}
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
      aria-labelledby="android-apk-title"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-[24px] border border-white/[0.08] p-5 text-left text-white sm:p-6"
        style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Android APK
            </div>
            <h2 id="android-apk-title" className="mt-2 font-display text-[26px] font-semibold leading-tight">
              How to install Flarial on Android
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-[var(--radius-md)] bg-black/25 text-[20px] leading-none text-white/70 hover:text-white"
            aria-label="Close Android install instructions"
          >
            x
          </button>
        </div>

        <ol className="mt-5 grid gap-3">
          {[
            "Tap Download APK below. If your browser asks, keep the file.",
            "Open Flarial.apk from your downloads or notification bar.",
            "If Android blocks it, tap Settings and allow installs from this browser/files app.",
            "Tap Install, then Open Flarial and launch Minecraft through Flarial.",
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
          Only download Flarial from <span className="text-white">cdn.flarial.xyz</span> or official Flarial links.
          Random APK mirrors can be fake or unsafe.
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
          <button
            type="button"
            onClick={onDownload}
            className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 font-display text-[14px] font-semibold text-white shadow-[var(--shadow-glow)]"
          >
            Download APK
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
      width={66}
      height={36}
      viewBox="0 0 467.046 250.164"
      aria-hidden
      className="block text-white"
    >
      <path
        fill="currentColor"
        d="M293.91 212.775c-6.025 0-10.926-4.905-10.926-10.93s4.901-10.926 10.926-10.926c6.026 0 10.927 4.9 10.927 10.926s-4.901 10.93-10.927 10.93m-120.774 0c-6.025 0-10.926-4.905-10.926-10.93s4.9-10.926 10.926-10.926c6.025 0 10.926 4.9 10.926 10.926s-4.9 10.93-10.926 10.93m124.693-65.82 21.838-37.822a4.548 4.548 0 0 0-1.663-6.206 4.549 4.549 0 0 0-6.206 1.663l-22.111 38.3c-16.91-7.716-35.9-12.015-56.164-12.015-20.264 0-39.254 4.299-56.163 12.015l-22.112-38.3a4.549 4.549 0 0 0-6.206-1.663 4.545 4.545 0 0 0-1.663 6.206l21.838 37.822c-37.499 20.395-63.146 58.358-66.898 103.209h262.408c-3.755-44.85-29.402-82.814-66.898-103.21"
      />
    </svg>
  );
}
