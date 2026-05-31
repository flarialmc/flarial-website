import type { DocsArticle } from "../docs-types";
import {
  BookOpen,
  Box,
  CheckCircle2,
  CodeBlock,
  Compass,
  CopyablePath,
  DocsHeading,
  Download,
  ExternalLink,
  FileCode2,
  Image,
  InfoCard,
  InlineCode,
  Layers3,
  Link,
  ListChecks,
  MonitorCog,
  MonitorUp,
  ShieldCheck,
  Sparkles,
  Smartphone,
  SupportedVersions,
  sectionFrameClass,
} from "./article-kit";
import {
  blockableAliases,
  blockableModules,
  clearPayload,
  configExample,
  dllCssModulesByCategory,
  flow,
  nametagIcons,
  privateConfigExample,
  restrictOnePayload,
  restrictThreePayload,
  scriptingExample,
  serverImplementationNotes,
} from "./article-data";

export const flarialNametagIconArticle: DocsArticle = {
    slug: "flarial-nametag-icon",
    title: "Flarial Nametag Icon",
    summary: "In-game nametag logos for Flarial users and community roles.",
    icon: Sparkles,
    toc: [],
    render: () => (
      <div className="grid gap-4">
        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="overview">Overview</DocsHeading>
          <div className="grid gap-5 md:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)] md:items-center">
            <div className="space-y-3">
              <p>
                Flarial can show a small Flarial logo next to a player&apos;s nametag when that player is also using
                Flarial. On servers, this makes it easy to spot other Flarial users without opening a menu or asking
                in chat.
              </p>
              <p>
                The icon is not only a client marker. Flarial has multiple in-game logo colors that represent default
                users, boosters, supporters, media creators, staff, developers, and special community members.
              </p>
            </div>
            <div className="overflow-hidden rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/25">
              <Image
                src="/misc-imgs/ingame_logo.png"
                alt="A Flarial logo shown beside a player's Minecraft nametag."
                width={480}
                height={436}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="how-it-appears">How it appears</DocsHeading>
          <div className="grid gap-3 md:grid-cols-3">
            <InfoCard icon={<CheckCircle2 size={16} className="text-[var(--color-accent)]" />} title="Beside the name">
              <p>The logo appears next to the player&apos;s in-game nametag so it reads as part of the player identity line.</p>
            </InfoCard>
            <InfoCard icon={<MonitorCog size={16} className="text-[var(--color-accent)]" />} title="Server friendly">
              <p>It is useful on multiplayer servers where multiple Flarial users may be near each other.</p>
            </InfoCard>
            <InfoCard icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />} title="Role aware">
              <p>The logo color can represent a Flarial role, not just whether the player is using the client.</p>
            </InfoCard>
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="opting-out">Opting out</DocsHeading>
          <p>
            You can choose not to advertise yourself through Flarial&apos;s API signal. In the client source, the ClickGUI
            exposes a privacy toggle named <InlineCode>Anonymous on API</InlineCode>, plus separate display toggles for
            hiding logos locally.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <InfoCard icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />} title="Hide your API identity">
              <p>
                Open ClickGUI, go to the settings area, and enable <InlineCode>Anonymous on API</InlineCode>. This is the
                privacy option intended for staying anonymous on Flarial&apos;s API, which is the signal other clients use to
                identify regular Flarial users.
              </p>
            </InfoCard>
            <InfoCard icon={<MonitorCog size={16} className="text-[var(--color-accent)]" />} title="Hide icons on your screen">
              <p>
                Enable <InlineCode>No Flarial Logo</InlineCode> if you do not want your own client to draw Flarial logos
                beside nametags. This only changes what you see locally; it is different from opting out of API visibility.
              </p>
            </InfoCard>
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="logo-types">Logo types</DocsHeading>
          <p>
            There are seven visible logo states in-game: six special role logos plus the red default logo that every
            Flarial user gets automatically.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {nametagIcons.map((logo) => (
              <div
                key={logo.role}
                className="min-w-0 rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/20 p-4"
                style={{ boxShadow: `inset 3px 0 0 ${logo.accent}` }}
              >
                <div className="flex items-start gap-3">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[var(--radius-lg)] bg-black/30">
                    <img src={logo.image} alt="" className="h-10 w-10 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-[18px] font-semibold text-white">{logo.name}</h3>
                      <span className="rounded-full bg-[var(--color-bg-subtle)] px-2.5 py-1 text-[11px] text-white">
                        {logo.role}
                      </span>
                      <span className="rounded-full bg-black/25 px-2.5 py-1 text-[11px] text-[var(--color-text-mute)]">
                        {logo.color}
                      </span>
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-mute)]">{logo.details}</p>
                    {logo.href ? (
                      <Link
                        href={logo.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-accent-hi)] hover:text-white"
                      >
                        Donate on Ko-fi
                        <ExternalLink size={13} />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <DocsHeading id="claiming-notes">Claiming notes</DocsHeading>
          <div className="grid gap-3">
            <div className="rounded-[var(--radius-xl)] bg-black/25 p-4">
              <div className="font-display text-[16px] font-semibold text-white">Supporter</div>
              <p className="mt-2">
                Donate through <Link href="https://ko-fi.com/flarialmc" target="_blank" rel="noreferrer" className="text-[var(--color-accent-hi)] hover:text-white">Ko-fi</Link>,
                link your Discord to Ko-fi, then run <InlineCode>/claimrole</InlineCode> in <InlineCode>cmds</InlineCode>.
              </p>
            </div>
            <div className="rounded-[var(--radius-xl)] bg-black/25 p-4">
              <div className="font-display text-[16px] font-semibold text-white">Booster</div>
              <p className="mt-2">
                Boost the Flarial Discord server, then run <InlineCode>/claimrole</InlineCode> in <InlineCode>cmds</InlineCode>.
                The logo only lasts while your boost is active.
              </p>
            </div>
            <div className="rounded-[var(--radius-xl)] bg-black/25 p-4">
              <div className="font-display text-[16px] font-semibold text-white">Command sensitivity</div>
              <p className="mt-2">
                <InlineCode>/claimrole</InlineCode> is case sensitive. Capital letters, spaces, and exact spelling matter.
              </p>
            </div>
          </div>
        </section>
      </div>
    ),
  };
