import { Showcase } from "./components/site/Showcase";
import { HeroBackground } from "./components/site/HeroBackground";
import { DownloadButton } from "./components/site/DownloadButton";

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
