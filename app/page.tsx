import type { Metadata } from "next";
import { Showcase } from "./components/site/Showcase";
import { HeroBackground } from "./components/site/HeroBackground";
import { DownloadButton } from "./components/site/DownloadButton";

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

export default function Home() {
  return (
    <div className="relative">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="relative px-4 sm:px-6 mx-auto max-w-5xl text-center py-16 sm:py-24">
          <h1
            className="font-display font-semibold tracking-[-0.045em] text-white mx-auto"
            style={{ fontSize: "clamp(2.75rem, 9vw, 8rem)", lineHeight: 0.95 }}
          >
            <span className="italic text-[var(--color-accent)]">The</span> Minecraft
            <br />
            Bedrock Client<span className="text-[var(--color-accent)]">.</span>
          </h1>
          <div className="mt-14 flex justify-center">
            <DownloadButton />
          </div>
        </div>
      </section>

      {/* ── Showcase ──────────────────────────────────────────────── */}
      <Showcase />

      {/* ── SEO / topical content ─────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 mx-auto max-w-5xl pb-24">
        <div className="max-w-2xl">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
            The basics
          </div>
          <h2 className="font-display text-[28px] sm:text-[40px] font-semibold tracking-tight text-white">
            What is a Minecraft Bedrock client?
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-[var(--color-text-mute)]">
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
      <section className="relative px-4 sm:px-6 mx-auto max-w-5xl pb-24 sm:pb-32">
        <div
          className="rounded-[var(--radius-5xl)] p-10 sm:p-14 text-center relative overflow-hidden"
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
          <h2 className="relative font-display text-[34px] sm:text-[48px] font-semibold tracking-tight text-white leading-tight">
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
