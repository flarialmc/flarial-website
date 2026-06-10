import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "What Flarial is, who builds it, and why it exists — a free, TOS-compliant quality-of-life client for Minecraft Bedrock Edition.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-10">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
          About Flarial
        </div>
        <h1 className="font-display text-[40px] sm:text-[56px] leading-[0.98] font-semibold tracking-[-0.02em] text-white">
          Why we built it.
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-text-mute)]">
          Flarial is a free, quality-of-life client for Minecraft Bedrock
          Edition — built by players who wanted the game to feel better, not to
          break it.
        </p>
      </header>

      <div className="space-y-10 text-[14.5px] leading-relaxed text-[var(--color-text)]">
        <Section title="What Flarial is">
          <p>
            Flarial is a utility client for Minecraft Bedrock Edition on Windows
            10/11, with an Android (MCPE) build in beta. It sits alongside the
            game and adds the quality-of-life features the base game leaves out:
            an in-game ClickGUI, on-screen HUD modules like keystrokes and CPS
            counters, an FPS boost, and over 140 small tweaks you can toggle
            live. Think of it the way Java players think of OptiFine or a Lunar
            Client — a layer that makes the same game smoother and more
            comfortable to play.
          </p>
          <p>
            It is not a cheat client. The modules we ship by default are
            quality-of-life only, and the client is designed to respect the
            rules of the servers you play on. Server operators may forbid or
            detect client mods of any kind, so we ask players to read and follow
            each server&apos;s rules.
          </p>
        </Section>

        <Section title="Who builds it">
          <p>
            Flarial is built and maintained by a small, independent team of
            developers and a community of contributors who write scripts and
            modules in the open. We are not a company spun up to chase ad
            revenue — the project started as a passion build for Bedrock players
            and has grown through its{" "}
            <a
              href="https://discord.gg/flarial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] underline-offset-4 hover:underline"
            >
              Discord community
            </a>
            . Development happens publicly, and updates ship most weeks — you can
            follow every release on the{" "}
            <Link
              href="/changelog"
              className="text-[var(--color-accent)] underline-offset-4 hover:underline"
            >
              changelog
            </Link>
            .
          </p>
        </Section>

        <Section title="How it stays free">
          <p>
            The client and launcher are free, with no paywalled features. We
            keep the lights on through a small amount of advertising on this
            website and optional partnerships with creators and servers. We do
            not sell user data. See our{" "}
            <Link
              href="/privacy"
              className="text-[var(--color-accent)] underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            for exactly what the site and client collect, and why.
          </p>
        </Section>

        <Section title="Our principles">
          <ul className="list-disc pl-5 space-y-2 marker:text-[var(--color-accent)]">
            <li>
              Quality-of-life first — features that improve the experience
              without giving an unfair advantage.
            </li>
            <li>
              Respect the game and its servers — follow server rules, and never
              pretend Flarial is endorsed by Mojang or Microsoft.
            </li>
            <li>
              Free and transparent — no paywalls, open development, and a public
              changelog.
            </li>
          </ul>
        </Section>

        <Section title="Get in touch">
          <p>
            Questions, bug reports, or partnership ideas? Visit our{" "}
            <Link
              href="/contact"
              className="text-[var(--color-accent)] underline-offset-4 hover:underline"
            >
              contact page
            </Link>{" "}
            or email{" "}
            <a
              href="mailto:support@flarial.xyz"
              className="text-[var(--color-accent)] underline-offset-4 hover:underline"
            >
              support@flarial.xyz
            </a>
            .
          </p>
          <p className="text-[12.5px] text-[var(--color-text-dim)]">
            Flarial is not affiliated with, endorsed by, or sponsored by Mojang
            Studios or Microsoft. &quot;Minecraft&quot; is a trademark of Mojang
            Studios.
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-[20px] sm:text-[22px] font-semibold text-white tracking-tight mb-3">
        {title}
      </h2>
      <div className="text-[var(--color-text-mute)] space-y-3">{children}</div>
    </section>
  );
}
