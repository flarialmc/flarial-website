import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DiscordIcon } from "../components/site/BrandIcons";
import { GigaDownload } from "./GigaDownload";
import { AdSlot } from "./AdSlot";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Flarial — free Minecraft Bedrock client for Windows 10/11 and Android (MCPE). Run the launcher, inject, and open the ClickGUI.",
  alternates: { canonical: "/download" },
  openGraph: {
    title: "Download Flarial — Minecraft Bedrock Client",
    description:
      "Download Flarial — free Minecraft Bedrock client for Windows 10/11 and Android (MCPE).",
    type: "website",
  },
};

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20">
      <section className="text-center mb-10">
        <h1 className="font-display text-[52px] sm:text-[88px] leading-[0.95] font-semibold tracking-[-0.025em] text-white">
          Get Flarial.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--color-text-mute)]">
          Download the free Flarial client and launcher for Minecraft Bedrock
          Edition on Windows 10/11, with an Android (MCPE) build in beta. The
          launcher handles updates and injection for you — install it once and
          it keeps Flarial current every time you play.
        </p>
      </section>

      {/* The real thing — massive primary download CTA */}
      <GigaDownload />

      {/* Ad slot — AdSense placeholder; site-wide download buttons funnel here */}
      <div className="mt-10">
        <AdSlot />
      </div>

      <section className="mt-14 grid sm:grid-cols-3 gap-3 text-[13px]">
        <StepCard n={1} title="Run the launcher" body="Open Flarial Launcher — it handles updates and injection automatically." />
        <StepCard n={2} title="Launch Minecraft" body="Click Inject. The launcher waits for Minecraft to fully load." />
        <StepCard n={3} title="Open ClickGUI" body="Press K in-game. That's the same window you see in the showcase." />
      </section>

      <section className="mt-16 max-w-2xl">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
          Before you download
        </div>
        <h2 className="font-display text-[24px] sm:text-[32px] font-semibold tracking-tight text-white">
          What you&apos;re installing
        </h2>
        <div className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-[var(--color-text-mute)]">
          <p>
            Flarial is a free, TOS-compliant quality-of-life client for
            Minecraft Bedrock Edition — closer to OptiFine or Lunar Client than
            to a cheat client. It adds an in-game ClickGUI, on-screen HUD modules
            like keystrokes and a CPS counter, an FPS boost for low-end PCs, and
            over 140 small tweaks you can toggle live. The default modules are
            quality-of-life only.
          </p>
          <p>
            You install the launcher rather than the client directly. The
            launcher keeps Flarial updated, then injects it into Minecraft when
            you click <strong className="text-white/90">Inject</strong> — so you
            never have to re-download after an update. Windows 10 and 11 are
            fully supported; the Android (MCPE) build is in beta.
          </p>
          <p>
            Remember that individual servers set their own rules about client
            mods and may detect or forbid them. Please read and respect each
            server&apos;s rules. For setup help and troubleshooting, see the{" "}
            <Link
              href="/docs"
              className="text-[var(--color-accent)] underline-offset-4 hover:underline"
            >
              documentation
            </Link>{" "}
            and{" "}
            <Link
              href="/faq"
              className="text-[var(--color-accent)] underline-offset-4 hover:underline"
            >
              FAQ
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mt-12">
        <Link
          href="https://discord.gg/flarial"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 px-5 h-14 rounded-[var(--radius-xl)] text-white transition-colors hover:brightness-110"
          style={{ background: "var(--color-bg-nav)" }}
        >
          <span className="flex items-center gap-3 text-[14px]">
            <DiscordIcon width={20} height={20} className="text-[#5865F2]" />
            <span>Need help? Hop in the Discord.</span>
          </span>
          <ArrowRight size={16} className="text-[var(--color-text-mute)]" />
        </Link>
      </section>

    </div>
  );
}

function StepCard({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="rounded-[var(--radius-xl)] p-5" style={{ background: "var(--color-bg-nav)" }}>
      <div
        className="inline-flex items-center justify-center w-7 h-7 rounded-[var(--radius-md)] mb-3 font-mono text-[12px] font-semibold text-white"
        style={{ background: "var(--color-accent)" }}
      >
        {n}
      </div>
      <div className="font-display text-[15px] font-semibold text-white">{title}</div>
      <div className="mt-1 text-[12.5px] text-[var(--color-text-mute)] leading-relaxed">{body}</div>
    </div>
  );
}
