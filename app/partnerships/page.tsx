import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Clapperboard, RadioTower, Server, Sparkles, Ticket, UsersRound, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Flarial's official partnership program for influential creators, server owners, companies, and Bedrock community names.",
  alternates: { canonical: "/partnerships" },
  openGraph: {
    title: "Flarial Partnerships",
    description:
      "Apply for Flarial's official partnership program and collaborate through creator cosmetics, featured servers, and audience-focused perks.",
    type: "website",
  },
};

const applicantTypes = [
  {
    title: "YouTubers",
    detail: "Long-form and Shorts creators are both welcome.",
    icon: Clapperboard,
    accent: "#ff233a",
  },
  {
    title: "Twitch streamers",
    detail: "Live reach, recognizable names, and creator-led events.",
    icon: RadioTower,
    accent: "#b55cff",
  },
  {
    title: "TikTok creators",
    detail: "Short-form influence, trends, and fast-moving Bedrock clips.",
    icon: Video,
    accent: "#ff9cc9",
  },
  {
    title: "Server owners",
    detail: "Featured servers for Flarial players to discover.",
    icon: Server,
    accent: "#59e77b",
  },
  {
    title: "Company owners",
    detail: "Brand, store, and community collaborations.",
    icon: Building2,
    accent: "#ffffff",
  },
];

export default function PartnershipsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-nav)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
          <Sparkles size={13} />
          Official program
        </div>
        <h1 className="font-display text-[42px] font-semibold leading-[0.98] tracking-[-0.025em] text-white sm:text-[68px]">
          Flarial Partnerships.
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--color-text-mute)] sm:text-[16px]">
          Join Flarial's official partnership program if you are a recognizable name with real influence in the
          Minecraft Bedrock scene through content, servers, products, etc.
        </p>
      </header>

      <section className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-5">
        {applicantTypes.map((type) => {
          const Icon = type.icon;

          return (
          <div
            key={type.title}
            className="group relative min-h-[96px] overflow-hidden rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-bg-nav)] p-3 transition-transform hover:-translate-y-0.5 sm:min-h-[164px] sm:p-4"
            style={{ boxShadow: "var(--shadow-rest)" }}
          >
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{ background: type.accent }}
              aria-hidden
            />
            <div
              className="mb-3 grid h-9 w-9 place-items-center rounded-[var(--radius-md)] bg-black/25 sm:mb-5 sm:h-11 sm:w-11"
              style={{ color: type.accent }}
            >
              <Icon size={18} className="sm:h-5 sm:w-5" />
            </div>
            <div className="font-display text-[15px] font-semibold leading-tight text-white sm:text-[16px]">{type.title}</div>
            <p className="mt-1 text-[11px] leading-snug text-[var(--color-text-mute)] sm:mt-2 sm:text-[12px] sm:leading-relaxed">{type.detail}</p>
            <div
              className="pointer-events-none absolute -bottom-8 -right-8 h-16 w-16 rounded-full opacity-15 blur-2xl transition-opacity group-hover:opacity-25 sm:h-20 sm:w-20"
              style={{ background: type.accent }}
              aria-hidden
            />
          </div>
          );
        })}
      </section>

      <div className="mt-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/[0.06]" />
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-mute)]">
          What we offer
        </div>
        <div className="h-px flex-1 bg-white/[0.06]" />
      </div>

      <section className="mt-6 grid gap-5 lg:grid-cols-2">
        <article
          className="rounded-[var(--radius-2xl)] p-5 sm:p-7"
          style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-accent)]/15">
            <Video size={22} className="text-[var(--color-accent)]" />
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-white">For creators</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-text-mute)]">
            Creators can get perks built around their audience and reach. We are planning to give every accepted
            creator the ability to have their own bundle or cosmetics, giving big Bedrock names something their
            viewers can actually discover, buy, and use in-game.
          </p>
          <ul className="mt-5 grid gap-3 text-[14px] text-[var(--color-text)]">
            {[
              "Creator bundles or cosmetics based on the collaboration.",
              "Early access to major updates so videos can be prepared early.",
              "Extra support based on the creator's audience, format, and reach.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article
          className="rounded-[var(--radius-2xl)] p-5 sm:p-7"
          style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-accent)]/15">
            <Building2 size={22} className="text-[var(--color-accent)]" />
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-white">For server owners</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-text-mute)]">
            Server owners can be featured inside Flarial's server experience, giving Flarial users a direct way to
            discover and join professional Bedrock servers.
          </p>
          <ul className="mt-5 grid gap-3 text-[14px] text-[var(--color-text)]">
            {[
              "Placement in the Flarial Featured Servers List.",
              "More visibility from Flarial users browsing servers.",
              "Server bundles or cosmetics on the store, similar to creator collaborations.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <article
          className="rounded-[var(--radius-2xl)] p-5 sm:p-7"
          style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-black/25">
            <UsersRound size={22} className="text-[var(--color-accent)]" />
          </div>
          <h2 className="font-display text-[24px] font-semibold leading-tight text-white">Requirements</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-text-mute)]">
            There are no strict number requirements, but applicants should have enough influence to matter in the
            Bedrock space. Creators should be recognizable enough to drive interest in cosmetics, bundles, or Flarial
            updates. Servers should be clean, polished, and professional enough for Flarial users to join with
            confidence.
          </p>
        </article>

        <article
          className="rounded-[var(--radius-2xl)] border border-[rgba(255,35,58,0.28)] p-5 sm:p-7"
          style={{ background: "linear-gradient(135deg, rgba(255,35,58,0.18), var(--color-bg-nav) 42%)", boxShadow: "var(--shadow-rest)" }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent-hi)]">
                <Ticket size={13} />
                Apply
              </div>
              <h2 className="font-display text-[26px] font-semibold leading-tight text-white">Open a ticket to apply.</h2>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-[var(--color-text-mute)]">
                Tell us who you are, what you create or operate, how much reach you have, and what kind of
                collaboration would make sense for your audience.
              </p>
            </div>
            <Link
              href="https://flarial.xyz/discord"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-4 py-3 font-display text-[14px] font-semibold text-white"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Join Discord
              <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
