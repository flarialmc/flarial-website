import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { FixedAdSlot } from "./FixedAdSlot";

export const metadata: Metadata = {
  title: "Support Flarial",
  description:
    "Support Flarial by learning how the free Minecraft Bedrock client is maintained, improved, and kept available for Windows and Android.",
  alternates: { canonical: "/support-flarial" },
  openGraph: {
    title: "Support Flarial",
    description:
      "Learn how Flarial stays free and how community support helps keep development moving.",
    type: "website",
  },
};

const SUPPORT_POINTS = [
  {
    icon: Sparkles,
    title: "Free client, active updates",
    body: "Flarial stays free while the team keeps polishing the launcher, modules, ClickGUI, and setup experience.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-of-life first",
    body: "The default experience focuses on FPS, HUD, and usability features rather than cheat-style gameplay advantages.",
  },
  {
    icon: HeartHandshake,
    title: "Community-powered",
    body: "Using the site, reporting bugs, and sharing feedback all help the project keep improving for Bedrock players.",
  },
];

export default function SupportFlarialPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
      <section className="grid items-center gap-8 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Support the project
          </div>
          <h1 className="font-display text-[46px] font-semibold leading-[0.96] tracking-[-0.035em] text-white sm:text-[76px]">
            Help keep Flarial moving.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--color-text-mute)] sm:text-[16px]">
            Flarial is a free Minecraft Bedrock client for Windows and Android.
            A small amount of site support helps cover the boring-but-important
            parts: hosting, downloads, testing, documentation, and the time spent
            making updates safer for everyone.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/download"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 text-[14px] font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Download Flarial <ArrowRight size={16} />
            </Link>
            <Link
              href="/docs"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-6 text-[14px] font-semibold text-white/85 transition-colors hover:bg-white/5 hover:text-white"
            >
              Read the docs
            </Link>
          </div>
        </div>

        <aside
          className="mx-auto w-full max-w-[340px] rounded-[var(--radius-2xl)] p-5 text-center"
          style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
          aria-label="Advertisement"
        >
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
            Advertisement
          </div>
          <div className="flex min-h-[250px] items-center justify-center">
            <FixedAdSlot width={300} height={250} />
          </div>
        </aside>
      </section>

      <section className="mt-14 grid gap-3 md:grid-cols-3">
        {SUPPORT_POINTS.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="rounded-[var(--radius-xl)] p-5"
            style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
          >
            <Icon className="mb-4 text-[var(--color-accent)]" size={22} />
            <h2 className="font-display text-[16px] font-semibold text-white">{title}</h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--color-text-mute)]">
              {body}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
