import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Flarial collects, uses, and protects your information when you visit flarial.xyz, run the Flarial desktop launcher, or use the Flarial client for Minecraft: Bedrock Edition.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "May 17, 2026";

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
          Covers flarial.xyz, the Flarial desktop launcher, and the Flarial client
          for Minecraft: Bedrock Edition. For the Android launcher, see the{" "}
          <Link href="/privacy/launcher" className="text-[var(--color-accent)] underline-offset-4 hover:underline">
            Android launcher privacy policy
          </Link>.
        </p>
      </header>

      <div className="space-y-10 text-[14.5px] leading-relaxed text-[var(--color-text)]">
        <Section title="Who we are">
          <p>
            Flarial (&quot;Flarial,&quot; &quot;we,&quot; &quot;us&quot;) operates flarial.xyz (the &quot;Site&quot;),
            the Flarial desktop launcher, and the Flarial client for Minecraft: Bedrock Edition.
            You can reach us via our{" "}
            <ExtLink href="https://discord.gg/flarial">Discord server</ExtLink>.
          </p>
        </Section>

        <Section title="What the website collects">
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
              <strong>Discord invite counts</strong>: the homepage reads Discord&apos;s
              public invite counts for the &quot;online now&quot; count. No personal data is
              exchanged.
            </li>
          </ul>
        </Section>

        <Section title="What the desktop launcher collects">
          <p>
            The Flarial desktop launcher (Windows, downloaded from{" "}
            <Link href="/download" className="text-[var(--color-accent)] underline-offset-4 hover:underline">flarial.xyz/download</Link>)
            sends the following to our servers:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 marker:text-[var(--color-accent)]">
            <li>
              <strong>Launch events</strong>: a per-install identifier (derived
              from your Windows machine GUID), launcher version, and timestamp.
              Posted to <code className="font-mono text-[13px] text-[var(--color-accent)]">api.flarial.xyz/launcher/events/launch</code> on
              each launch. Used to count daily active installs.
            </li>
            <li>
              <strong>Update checks</strong>: the launcher fetches the latest
              version string from <code className="font-mono text-[13px] text-[var(--color-accent)]">cdn.flarial.xyz/launcher/launcherVersion.txt</code>.
              The request carries only standard web headers (IP, user-agent).
            </li>
            <li>
              <strong>Local settings</strong>: your launcher preferences are
              stored on your device. They are not synced to our servers.
            </li>
          </ul>
        </Section>

        <Section title="What the Minecraft client collects">
          <p>
            The Flarial client (the DLL injected into Minecraft: Bedrock Edition)
            sends the following to our servers:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 marker:text-[var(--color-accent)]">
            <li>
              <strong>Module events</strong>: when you enable or disable a
              module (e.g. Keystrokes, FOV Changer), we record the module name
              and action against a hashed user identifier. Posted to{" "}
              <code className="font-mono text-[13px] text-[var(--color-accent)]">api.flarial.xyz/telemetry/module-events</code>.
              Used to see which features are actually used.
            </li>
            <li>
              <strong>Startup ping</strong>: on client launch we send your
              hashed user identifier and client version to{" "}
              <code className="font-mono text-[13px] text-[var(--color-accent)]">api.flarial.xyz/telemetry/version-startup</code>.
            </li>
            <li>
              <strong>Crash reports</strong>: if the client crashes, we send a
              diagnostic report to <code className="font-mono text-[13px] text-[var(--color-accent)]">api.flarial.xyz/api/v1/crash-logs</code>.
              The report includes stack trace, hashed in-game username, client
              version, hardware summary (CPU/GPU model, RAM, disk, OS version,
              DirectX version), which modules were enabled, the last ~50 KB of
              the client log, and a short history of recent in-game actions
              from the current session. Crash reports are retained for 30 days
              and may be relayed to a private Discord channel for staff triage.
            </li>
            <li>
              <strong>VIP / online users stream</strong>: the client opens a
              WebSocket to <code className="font-mono text-[13px] text-[var(--color-accent)]">wss://api.flarial.xyz/ws/vips</code> and
              periodically fetches <code className="font-mono text-[13px] text-[var(--color-accent)]">/vips</code> and{" "}
              <code className="font-mono text-[13px] text-[var(--color-accent)]">/allOnlineUsers</code> so VIP and creator badges show
              up in-game. This carries public Minecraft usernames.
            </li>
            <li>
              <strong>Hashed user identifier</strong>: derived from your
              computer name, Windows machine GUID, CPU model, and core count,
              hashed with SHA-256 before transmission. It is stable across
              sessions on the same device but we do not store the raw inputs.
            </li>
          </ul>
          <p className="mt-3">
            <strong>What the client does not collect</strong>: your Microsoft
            password, Mojang/Xbox tokens, IP address (beyond what any web
            request includes), MAC address, location, camera, microphone,
            keystrokes outside of in-game keybinds, game world data, or
            payment information.
          </p>
        </Section>

        <Section title="What the backend stores about Minecraft players">
          <p>
            To power leaderboards, the public &quot;online players&quot; widget, and
            community features, our backend keeps a record per Minecraft
            username it has seen: total playtime, first-seen timestamp, last
            heartbeat, and ranking position. Inactive players are pruned 30
            days after their last heartbeat. Aggregate session data (country
            and region derived from IP, user-agent, session length) is used
            for analytics — we don&apos;t publish individual session rows.
          </p>
        </Section>

        <Section title="What our Discord bot stores">
          <p>
            If you interact with the Flarial Discord server, our bot may store
            your Discord user ID and username, XP/reputation, warnings issued
            by moderators, claimed Minecraft IGN (if you link one), ticket
            history, booster status, and starboard / reaction-role records.
            This data is kept for as long as you remain a member; you can
            request deletion via Discord.
          </p>
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
              Where Google requires it (e.g. for visitors in regions covered
              by its consent framework), AdSense itself shows a consent prompt
              before setting personalized-ad cookies.
            </li>
          </ul>
          <p className="mt-3">
            More info:{" "}
            <ExtLink href="https://policies.google.com/technologies/ads">
              Google&apos;s advertising policies
            </ExtLink>
            . The desktop launcher and Minecraft client do not show ads.
          </p>
        </Section>

        <Section title="How we use it">
          <ul className="list-disc pl-6 space-y-2 marker:text-[var(--color-accent)]">
            <li>Operate, secure, and improve the Site, launcher, and client.</li>
            <li>Diagnose crashes and measure which features are actually used.</li>
            <li>Power leaderboards and community features (VIP badges, online counts).</li>
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
            Flarial is intended for users 13 and older. We don&apos;t knowingly
            collect data from younger users. If you believe a child has
            provided us with personal information, contact us via Discord and
            we&apos;ll remove it.
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
