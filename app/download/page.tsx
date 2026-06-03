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

      <section className="mt-10">
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
