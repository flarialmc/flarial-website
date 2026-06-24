import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Showcase } from "./components/site/Showcase";
import { HeroBackground } from "./components/site/HeroBackground";
import { DownloadButton } from "./components/site/DownloadButton";
import { DiscordCommunity } from "./components/site/DiscordCommunity";
import { FeaturePreviewGrid } from "./components/site/FeaturePreviewGrid";

export const metadata: Metadata = {
  title: {
    absolute: "Flarial — The Minecraft Bedrock Client (Free, 140+ Modules)",
  },
  description:
    "Flarial is the free Minecraft Bedrock client (MCPE client) for Windows 10/11 and Android — 140+ modules, a real-time ClickGUI, FPS boost, and HUD modules. Free, forever.",
  alternates: { canonical: "/" },
};

/* Short, real-sentence feature points — terms used naturally, not stuffed. */
const FEATURES: { title: string; body: string }[] = [
  {
    title: "ClickGUI",
    body: "Toggle every module from a clean, in-game ClickGUI — open it with one keypress and tune settings live.",
  },
  {
    title: "FPS boost",
    body: "A bedrock utility client built for performance: an FPS boost and render tweaks that keep frames high on low-end PCs.",
  },
  {
    title: "Windows 10/11 + Android",
    body: "Run the same MCPE client on Minecraft Bedrock for Windows 10/11 and Android.",
  },
  {
    title: "140+ modules",
    body: "HUD modules, keystrokes, CPS counters, and quality-of-life tweaks — all TOS-compliant and free.",
  },
];

function ProofStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[var(--radius-xl)] bg-black/20 p-4">
      <div className="font-display text-[26px] font-semibold text-white">{value}</div>
      <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-[var(--color-text-mute)]">{label}</div>
    </div>
  );
}

function HomeLink({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <Link href={href} className="group flex items-center justify-between gap-4 rounded-[var(--radius-xl)] p-5" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
      <span>
        <span className="block font-display text-[17px] font-semibold text-white">{title}</span>
        <span className="mt-1 block text-[12.5px] leading-relaxed text-[var(--color-text-mute)]">{body}</span>
      </span>
      <ArrowRight size={17} className="shrink-0 text-[var(--color-text-mute)] transition-colors group-hover:text-[var(--color-accent)]" />
    </Link>
  );
}

export default function Home() {
  return (
    <div className="relative">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[82svh] w-full items-center justify-center overflow-hidden sm:min-h-screen">
        <HeroBackground />
        <div className="relative mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-24">
          <h1
            className="font-display font-semibold tracking-[-0.045em] text-white mx-auto"
            style={{ fontSize: "clamp(2.75rem, 9vw, 8rem)", lineHeight: 0.95 }}
          >
            <span className="italic text-[var(--color-accent)]">The</span> Minecraft
            <br />
            Bedrock Client<span className="text-[var(--color-accent)]">.</span>
          </h1>
          <div className="mt-10 flex justify-center sm:mt-14">
            <DownloadButton />
          </div>
        </div>
      </section>

      <DiscordCommunity />

      {/* ── Showcase ──────────────────────────────────────────────── */}
      <Showcase />
      <FeaturePreviewGrid />

      {/* ── Social proof / quick links ────────────────────────────── */}
      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] p-6 sm:p-8" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
              Trusted by Bedrock players
            </div>
            <h2 className="font-display text-[30px] font-semibold tracking-tight text-white sm:text-[42px]">
              Free, active, and easy to verify.
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--color-text-mute)]">
              Flarial already has the hard parts: a huge Discord community, Android + Windows support, YouTube coverage, and open documentation. The site now makes those signals easier to find before someone downloads.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <ProofStat value="100k+" label="Discord members" />
              <ProofStat value="140+" label="Modules" />
              <ProofStat value="24/7" label="Community" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <HomeLink href="/modules" title="Browse modules" body="Search HUDs, FPS tools, visuals, movement, and utilities." />
            <HomeLink href="/blog" title="Read guides" body="SEO-friendly setup guides, troubleshooting, and comparison posts." />
          </div>
        </div>
      </section>

      {/* ── SEO / topical content ─────────────────────────────────── */}
      <section className="relative mx-auto max-w-5xl px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="max-w-2xl">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
            The basics
          </div>
          <h2 className="font-display text-[28px] font-semibold tracking-tight text-white sm:text-[40px]">
            What is a Minecraft Bedrock client?
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-text-mute)] sm:text-[16px]">
            A Minecraft Bedrock client is a utility layer for Minecraft Bedrock
            Edition that adds quality-of-life features the base game leaves out —
            an FPS boost, on-screen HUD modules, and a ClickGUI for toggling
            everything mid-game. Flarial is a free, TOS-compliant bedrock utility
            client for Minecraft Bedrock Edition on Windows 10/11 and Android
            (MCPE). It is not a cheat client — the default modules
            are quality-of-life only.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <li
              key={f.title}
              className="rounded-[var(--radius-xl)] p-5"
              style={{
                background: "var(--color-bg-nav)",
                boxShadow: "var(--shadow-rest)",
              }}
            >
              <div className="font-display text-[15px] font-semibold text-white">
                {f.title}
              </div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-text-mute)]">
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-5xl px-4 pb-20 sm:px-6 sm:pb-32">
        <div
          className="relative overflow-hidden rounded-[28px] p-6 text-center sm:rounded-[var(--radius-5xl)] sm:p-14"
          style={{ background: "var(--color-bg-nav)" }}
        >
          <div
            aria-hidden
            className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[140%] h-[180%] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,35,58,0.18), rgba(255,35,58,0) 70%)",
              filter: "blur(30px)",
            }}
          />
          <h2 className="relative font-display text-[32px] font-semibold leading-tight tracking-tight text-white sm:text-[48px]">
            Ready when you are.
          </h2>
          <p className="relative mt-3 text-[14px] sm:text-[15px] text-[var(--color-text-mute)] max-w-md mx-auto">
            Install the launcher, hit inject, you&apos;re in.
          </p>
          <div className="relative mt-8 inline-block">
            <DownloadButton size="md" />
          </div>
        </div>
      </section>
    </div>
  );
}
