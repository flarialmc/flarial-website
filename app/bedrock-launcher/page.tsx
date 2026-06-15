import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, Box, FileCode2, MonitorCog, Smartphone, BookOpen } from "lucide-react";
import { SupportedVersions } from "../docs/SupportedVersions";

export const metadata: Metadata = {
  title: "Flarial Launcher — Minecraft Bedrock Launcher for Windows & Android",
  description:
    "The Flarial Launcher is a Minecraft Bedrock launcher that downloads supported versions, launches the game, and injects the client automatically. Free download for Windows and Android.",
  keywords: [
    "bedrock launcher",
    "minecraft bedrock launcher",
    "bedrock launcher download",
    "minecraft bedrock launcher android",
    "flarial launcher",
  ],
  alternates: { canonical: "/bedrock-launcher" },
  openGraph: {
    title: "Flarial Launcher — Minecraft Bedrock Launcher for Windows & Android",
    description:
      "Download the Flarial Launcher: version management, automatic injection, and a one-click path into the Bedrock client.",
    type: "website",
    url: "https://flarial.xyz/bedrock-launcher",
  },
};

export default function BedrockLauncherPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Flarial Launcher",
    operatingSystem: "Windows, Android",
    applicationCategory: "GameApplication",
    description:
      "A Minecraft Bedrock launcher that manages supported versions, launches Minecraft, and injects the Flarial client automatically.",
    downloadUrl: "https://flarial.xyz/download",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-nav)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
          <Box size={13} />
          Launcher
        </div>
        <h1 className="font-display text-[38px] font-semibold leading-[1.0] tracking-[-0.025em] text-white sm:text-[58px]">
          Flarial Launcher — Minecraft Bedrock Launcher for Windows &amp; Android.
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-text-mute)] sm:text-[16px]">
          The Flarial Launcher is the recommended way to run the Bedrock client. It manages
          supported Minecraft versions, launches the game, and{" "}
          <span className="text-white">injects Flarial automatically</span> — no separate DLL
          injector required. It is free for Windows and Android.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/download/"
            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 py-3 font-display text-[14px] font-semibold text-white shadow-[var(--shadow-glow)]"
          >
            <Download size={16} />
            Download the launcher
          </Link>
          <Link
            href="/docs/usage/"
            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-bg-nav)] px-5 py-3 font-display text-[14px] font-semibold text-white hover:brightness-110"
          >
            <BookOpen size={16} className="text-[var(--color-accent)]" />
            Setup guide
          </Link>
        </div>
      </header>

      <section className="mt-12 space-y-4">
        <h2 className="font-display text-[26px] font-semibold leading-tight text-white">
          What the Flarial Launcher does
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard icon={Download} title="Version management">
            Downloads and launches supported Bedrock versions from the versions tab, so you don&apos;t
            have to track builds by hand.
          </FeatureCard>
          <FeatureCard icon={MonitorCog} title="Automatic injection">
            Waits for Minecraft to fully load, then injects the client when you reach the title
            screen — no manual injector step.
          </FeatureCard>
          <FeatureCard icon={Box} title="One-click play">
            Press Play and the launcher handles the rest: launch state, the right version, and the
            client itself.
          </FeatureCard>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-[26px] font-semibold leading-tight text-white">
          Launcher vs. the raw client DLL
        </h2>
        <div className="rounded-[var(--radius-2xl)] p-5 sm:p-7" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <p className="text-[14px] leading-relaxed text-[var(--color-text-mute)]">
            Flarial ships as a client DLL that loads into Minecraft Bedrock. You can grab that DLL
            directly, but it <span className="text-white">will not inject itself</span> — you would
            need a separate DLL injector and you have to handle versions yourself. The launcher wraps
            all of that into one app.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/20 p-4">
              <div className="flex items-center gap-2 font-display text-[15px] font-semibold text-white">
                <Box size={16} className="text-[var(--color-accent)]" />
                Flarial Launcher
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-mute)]">
                Recommended. Picks the version, launches Minecraft, and injects automatically. Best
                for almost everyone.
              </p>
            </div>
            <div className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/20 p-4">
              <div className="flex items-center gap-2 font-display text-[15px] font-semibold text-white">
                <FileCode2 size={16} className="text-[var(--color-accent)]" />
                Direct DLL + injector
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-mute)]">
                For when the launcher path gives you trouble. You provide the injector and inject on
                the title screen yourself. See the{" "}
                <Link href="/docs/usage/" className="font-semibold text-white underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
                  usage guide
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-[26px] font-semibold leading-tight text-white">
          Supported Minecraft versions
        </h2>
        <div className="rounded-[var(--radius-2xl)] p-5 sm:p-7" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <p className="mb-4 text-[14px] leading-relaxed text-[var(--color-text-mute)]">
            The launcher tracks which Bedrock versions are supported and warns you if you are on an
            untested build. These are the versions Flarial currently supports:
          </p>
          <SupportedVersions />
          <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-text-mute)]">
            Bedrock builds after 1.21.120 use the GDK runtime. The launcher handles the difference;
            just keep it updated.
          </p>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <div className="flex items-center gap-2">
          <Smartphone size={18} className="text-[var(--color-text-mute)]" />
          <h2 className="font-display text-[26px] font-semibold leading-tight text-white">
            Bedrock launcher on Android
          </h2>
        </div>
        <div className="rounded-[var(--radius-2xl)] p-5 sm:p-7" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <p className="text-[14px] leading-relaxed text-[var(--color-text-mute)]">
            The Android build is released and distributed through Google Play, not as a
            loose APK. If you searched for a “Minecraft Bedrock launcher for Android,” read the{" "}
            <Link href="/mcpe-client/" className="font-semibold text-white underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
              Flarial for MCPE
            </Link>{" "}
            page for the mobile install path and APK safety notes.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <Link
          href="/download/"
          className="flex items-center justify-between gap-3 rounded-[var(--radius-xl)] px-5 py-4 text-white transition-colors hover:brightness-110"
          style={{ background: "var(--color-bg-nav)" }}
        >
          <span className="text-[14px]">Download the Flarial Launcher for Windows or Android — free, forever.</span>
          <ArrowRight size={16} className="shrink-0 text-[var(--color-text-mute)]" />
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Box;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[var(--radius-xl)] p-5" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
      <div className="mb-3 grid h-10 w-10 place-items-center rounded-[var(--radius-md)] bg-[var(--color-accent)]/15">
        <Icon size={18} className="text-[var(--color-accent)]" />
      </div>
      <div className="font-display text-[15px] font-semibold text-white">{title}</div>
      <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-text-mute)]">{children}</p>
    </div>
  );
}
