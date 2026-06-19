import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fix low FPS from loading skins",
  description:
    "A simple Flarial guide for fixing low FPS when Minecraft skin slots are stuck loading.",
  alternates: { canonical: "/fixfps" },
  openGraph: {
    title: "Fix low FPS from loading skins · Flarial",
    description:
      "Delete stuck loading skin slots, add normal skins back, and restart Minecraft.",
    url: "/fixfps",
    images: [
      {
        url: "/fixfps/loading-skin-slots.png",
        width: 1200,
        height: 507,
        alt: "Minecraft character screen with skin slots stuck loading",
      },
    ],
  },
};

const steps = [
  {
    title: "Open the skin picker",
    body: "Go to your Minecraft character skins. Look at each skin slot.",
  },
  {
    title: "Find loading slots",
    body: "If a slot has a spinning loading icon and never loads, that slot may be hurting your FPS.",
  },
  {
    title: "Delete the broken slots",
    body: "Remove every skin slot that is stuck loading. Do not leave any broken loading slots there.",
  },
  {
    title: "Add normal skins back",
    body: "Fill the empty slots with a normal Minecraft skin. A simple default skin is fine.",
  },
  {
    title: "Restart Minecraft",
    body: "Close the game fully, then open it again. Your FPS should be better if this was the problem.",
  },
];

export default function FixFpsPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,35,58,0.26), rgba(255,35,58,0))",
        }}
      />

      <section className="relative mx-auto max-w-6xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
            Quick FPS fix
          </div>
          <h1 className="font-display text-[42px] font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-[72px]">
            Fix low fps (stuck at 30 fps, 70 fps)
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-[var(--color-text-mute)] sm:text-[18px]">
            Sometimes Minecraft keeps broken skin slots loading forever. When that
            happens, your game can feel slow. Delete those loading slots, add
            normal skins back, then restart the game.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-black/25 shadow-[var(--shadow-hover)] sm:rounded-[var(--radius-5xl)]">
          <img
            src="/fixfps/loading-skin-slots.png"
            alt="Minecraft character screen showing two skin slots stuck with loading icons"
            className="w-full object-cover"
          />
        </div>
        <p className="mt-3 text-center text-[13px] text-[var(--color-text-mute)]">
          If you see loading icons like this on your skin slots, follow the steps below.
        </p>
      </section>

      <section className="relative mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:gap-8 lg:pb-24">
        <div
          className="rounded-[28px] p-5 sm:rounded-[var(--radius-5xl)] sm:p-8"
          style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
        >
          <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
            What to do
          </div>
          <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-white sm:text-[42px]">
            Easy steps
          </h2>

          <ol className="mt-7 space-y-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[44px_1fr] gap-4 rounded-[22px] bg-black/18 p-4 ring-1 ring-white/[0.06]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent)] font-display text-[18px] font-bold text-white shadow-[var(--shadow-glow)]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-display text-[18px] font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-[var(--color-text-mute)] sm:text-[15px]">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-6">
          <div
            className="overflow-hidden rounded-[28px] sm:rounded-[var(--radius-5xl)]"
            style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
          >
            <img
              src="/fixfps/fps-fix-chat.png"
              alt="Discord messages explaining the stuck skin slot FPS fix"
              className="w-full object-cover"
            />
          </div>

          <div
            className="rounded-[28px] p-5 sm:rounded-[var(--radius-5xl)] sm:p-6"
            style={{ background: "var(--color-bg-card)", boxShadow: "var(--shadow-rest)" }}
          >
            <h2 className="font-display text-[24px] font-semibold tracking-tight text-white">
              Short version
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-mute)]">
              No skin slot should be stuck loading. If one is stuck, delete it,
              put a normal skin there, and restart Minecraft.
            </p>
            <div className="mt-5 rounded-[20px] border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 p-4 text-[14px] leading-relaxed text-white/90">
              This helps when the FPS problem is caused by broken Minecraft skin
              loading. If your FPS is still low after this, check your normal
              video settings too.
            </div>
          </div>
        </aside>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="rounded-[28px] bg-black/20 p-6 text-center ring-1 ring-white/10 sm:rounded-[var(--radius-5xl)] sm:p-10">
          <h2 className="font-display text-[28px] font-semibold tracking-tight text-white sm:text-[38px]">
            Done? Open Flarial again.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--color-text-mute)]">
            After restarting Minecraft, launch Flarial like normal and test your FPS.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/download"
              className="rounded-full bg-[var(--color-accent)] px-6 py-3 font-display text-[15px] font-semibold text-white shadow-[var(--shadow-glow)] transition hover:scale-[1.02]"
            >
              Download Flarial
            </Link>
            <Link
              href="/docs"
              className="rounded-full bg-white/8 px-6 py-3 font-display text-[15px] font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/12"
            >
              Read help docs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
