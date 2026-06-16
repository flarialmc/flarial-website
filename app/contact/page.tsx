import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { DiscordIcon, TikTokIcon, YoutubeIcon } from "../components/site/BrandIcons";

const TIKTOK_URL = "https://www.tiktok.com/@flarialclient?_r=1&_t=ZS-97G7ZEzSUsK";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Flarial team — email support@flarial.xyz, join the Discord, or reach out about partnerships.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-10">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
          Contact
        </div>
        <h1 className="font-display text-[40px] sm:text-[56px] leading-[0.98] font-semibold tracking-[-0.02em] text-white">
          Get in touch.
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-text-mute)]">
          Questions about the client, a bug to report, a privacy request, or a
          partnership idea — here&apos;s how to reach us.
        </p>
      </header>

      <div className="space-y-3">
        <ContactCard
          href="mailto:support@flarial.xyz"
          icon={<Mail size={18} className="text-[var(--color-accent)]" />}
          title="Email"
          body="support@flarial.xyz — for support, bug reports, privacy requests, and general enquiries. We aim to reply within a few days."
        />
        <ContactCard
          href="https://discord.gg/flarial"
          external
          icon={<DiscordIcon width={18} height={18} className="text-[#5865F2]" />}
          title="Discord"
          body="The fastest way to get help and talk to the team and community directly. Join for live support and release news."
        />
        <ContactCard
          href="https://www.youtube.com/@flarialclient"
          external
          icon={<YoutubeIcon width={18} height={18} className="text-[#FF0000]" />}
          title="YouTube"
          body="Showcases, tutorials, and update walkthroughs."
        />
        <ContactCard
          href={TIKTOK_URL}
          external
          icon={<TikTokIcon width={18} height={18} className="text-white" />}
          title="TikTok"
          body="Short clips, previews, and quick Flarial updates."
        />
      </div>

      <section className="mt-10 rounded-[var(--radius-xl)] p-6" style={{ background: "var(--color-bg-nav)" }}>
        <h2 className="font-display text-[18px] font-semibold text-white tracking-tight mb-2">
          Partnerships
        </h2>
        <p className="text-[14px] leading-relaxed text-[var(--color-text-mute)]">
          Creator, streamer, server owner, or company? We work with partners
          across YouTube, Twitch, TikTok, and Bedrock servers. See the{" "}
          <Link
            href="/partnerships"
            className="text-[var(--color-accent)] underline-offset-4 hover:underline"
          >
            partnerships page
          </Link>{" "}
          for details, or email{" "}
          <a
            href="mailto:support@flarial.xyz"
            className="text-[var(--color-accent)] underline-offset-4 hover:underline"
          >
            support@flarial.xyz
          </a>
          .
        </p>
      </section>

      <p className="mt-10 text-[12.5px] leading-relaxed text-[var(--color-text-dim)]">
        Looking for written guides first? Most common questions are answered in
        the{" "}
        <Link href="/faq" className="text-[var(--color-accent)] underline-offset-4 hover:underline">
          FAQ
        </Link>{" "}
        and{" "}
        <Link href="/docs" className="text-[var(--color-accent)] underline-offset-4 hover:underline">
          documentation
        </Link>
        .
      </p>
    </div>
  );
}

function ContactCard({
  href,
  external,
  icon,
  title,
  body,
}: {
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-4 rounded-[var(--radius-xl)] p-5 transition-colors hover:brightness-110"
      style={{ background: "var(--color-bg-nav)" }}
    >
      <span
        className="grid place-items-center w-10 h-10 rounded-[var(--radius-md)] shrink-0"
        style={{ background: "var(--color-bg-card)" }}
      >
        {icon}
      </span>
      <span className="flex-1">
        <span className="flex items-center gap-2 font-display text-[15px] font-semibold text-white">
          {title}
          <ArrowRight
            size={14}
            className="text-[var(--color-text-mute)] transition-transform group-hover:translate-x-0.5"
          />
        </span>
        <span className="mt-1 block text-[13px] leading-relaxed text-[var(--color-text-mute)]">
          {body}
        </span>
      </span>
    </a>
  );
}
