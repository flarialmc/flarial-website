import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Flarial collects, uses, and protects your information when you visit flarial.xyz or use the Flarial client.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "May 14, 2026";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-10">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
          Last updated · {UPDATED}
        </div>
        <h1 className="font-display text-[40px] sm:text-[56px] leading-[0.98] font-semibold tracking-[-0.02em] text-white">
          Privacy Policy.
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-text-mute)]">
          Plain-English summary of what we collect, why, and what your choices are.
        </p>
      </header>

      <div className="space-y-10 text-[14.5px] leading-relaxed text-[var(--color-text)]">
        <Section title="Who we are">
          <p>
            Flarial (&quot;Flarial,&quot; &quot;we,&quot; &quot;us&quot;) operates flarial.xyz (the &quot;Site&quot;) and the Flarial client for Minecraft Bedrock Edition. You can reach us via our{" "}
            <ExtLink href="https://discord.gg/flarial">Discord server</ExtLink>.
          </p>
        </Section>

        <Section title="What we collect">
          <ul className="list-disc pl-6 space-y-2 marker:text-[var(--color-accent)]">
            <li>
              <strong>Usage data</strong>: pages viewed, referring URL, approximate
              region, browser and device type. Collected via standard analytics
              and server logs.
            </li>
            <li>
              <strong>Local storage</strong>: cosmetic preferences (favorite
              modules). Stored in your browser only — never sent to us.
            </li>
            <li>
              <strong>Discord widget</strong>: the homepage reads the public
              Discord widget for the &quot;online now&quot; count. No personal data is
              exchanged.
            </li>
          </ul>
        </Section>

        <Section title="Ads (Google AdSense)">
          <p>
            The <Link href="/download" className="text-[var(--color-accent)] underline-offset-4 hover:underline">/download</Link> page may serve ads via Google AdSense.
            AdSense is a third-party provider that uses cookies and similar
            technologies to serve ads based on your prior visits.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 marker:text-[var(--color-accent)]">
            <li>
              Google may use the DoubleClick cookie to serve ads based on your visit
              to this site and other sites on the internet.
            </li>
            <li>
              You can opt out of personalized advertising at{" "}
              <ExtLink href="https://www.google.com/settings/ads">
                google.com/settings/ads
              </ExtLink>{" "}
              or via the{" "}
              <ExtLink href="https://optout.aboutads.info/">
                Digital Advertising Alliance opt-out
              </ExtLink>
              .
            </li>
            <li>
              Visitors in the EU/UK are presented with a Google-certified consent
              prompt before any personalized ad cookies are set.
            </li>
          </ul>
          <p className="mt-3">
            More info:{" "}
            <ExtLink href="https://policies.google.com/technologies/ads">
              Google&apos;s advertising policies
            </ExtLink>
            .
          </p>
        </Section>

        <Section title="How we use it">
          <ul className="list-disc pl-6 space-y-2 marker:text-[var(--color-accent)]">
            <li>Operate, secure, and improve the Site and client.</li>
            <li>Diagnose issues and measure feature usage at an aggregate level.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <p className="mt-3">
            We don&apos;t sell personal information.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            We use a small number of cookies for analytics and, on /download, for
            ads via Google AdSense. You can clear or disable cookies in your
            browser settings — Site functionality will continue to work.
          </p>
        </Section>

        <Section title="Children">
          <p>
            Flarial is intended for users 13+ (16+ in the EU/UK). We don&apos;t
            knowingly collect data from younger users. If you believe a child has
            provided us with personal information, contact us via Discord and
            we&apos;ll remove it.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            Depending on your jurisdiction, you may have the right to access,
            correct, delete, or port your personal data, and to object to
            certain processing. Contact us via Discord to exercise these rights.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            We may update this policy. Material changes will be announced on the
            Site or in Discord. The &quot;last updated&quot; date above always reflects the
            current version.
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

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-accent)] underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}
