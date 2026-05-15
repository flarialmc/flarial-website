import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flarial Launcher · Privacy Policy",
  description:
    "Privacy policy for the Flarial Launcher Android app (com.flarialmc.flarial_launcher) — what data is collected, permissions used, and how we handle Microsoft sign-in.",
  alternates: { canonical: "/privacy/launcher" },
};

const UPDATED = "May 15, 2026";

export default function LauncherPrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-10">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
          Last updated · {UPDATED}
        </div>
        <h1 className="font-display text-[40px] sm:text-[56px] leading-[0.98] font-semibold tracking-[-0.02em] text-white">
          Flarial Launcher Privacy.
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-text-mute)]">
          Privacy policy for the Flarial Launcher Android app
          (<code className="font-mono text-[13px] text-[var(--color-accent)]">com.flarialmc.flarial_launcher</code>).
          For our website and desktop client, see the{" "}
          <Link href="/privacy" className="text-[var(--color-accent)] underline-offset-4 hover:underline">
            main privacy policy
          </Link>.
        </p>
      </header>

      <div className="space-y-10 text-[14.5px] leading-relaxed text-[var(--color-text)]">
        <Section title="Who we are">
          <p>
            Flarial (&quot;Flarial,&quot; &quot;we,&quot; &quot;us&quot;) publishes the
            Flarial Launcher, an Android application that injects the Flarial
            client into Minecraft: Bedrock Edition on your device. You can reach us
            via our <ExtLink href="https://discord.gg/flarial">Discord server</ExtLink>.
          </p>
        </Section>

        <Section title="What the app does">
          <p>
            The Flarial Launcher loads the Flarial client (a cosmetic and
            utility modification) into your locally-installed copy of Minecraft:
            Bedrock Edition. All injection and modification happens on your
            device. The launcher itself is not a game and does not provide
            multiplayer services.
          </p>
        </Section>

        <Section title="Data we collect">
          <p>
            The launcher is designed to collect as little as possible. Specifically:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 marker:text-[var(--color-accent)]">
            <li>
              <strong>No analytics.</strong> The app does not include any
              third-party analytics SDKs and does not track usage, sessions,
              screen views, or device identifiers.
            </li>
            <li>
              <strong>No advertising.</strong> The app contains no ads and no
              advertising identifiers are read or transmitted.
            </li>
            <li>
              <strong>No account on our servers.</strong> Flarial does not
              operate a user-account system for the launcher. We don&apos;t store
              your email, username, or password.
            </li>
            <li>
              <strong>Crash logs.</strong> If the launcher crashes, a diagnostic
              log may be generated locally and, with your action (e.g.
              attaching it to a Discord bug report), shared with us so we can
              fix the issue. Crash logs are not uploaded automatically.
            </li>
            <li>
              <strong>Client assets.</strong> The launcher downloads the latest
              Flarial client binary and cosmetic assets from our servers over
              HTTPS. These requests carry only the standard data any web
              request includes (IP address, user-agent) and are used solely to
              serve the file.
            </li>
          </ul>
        </Section>

        <Section title="Microsoft / Xbox Live sign-in">
          <p>
            To launch Minecraft: Bedrock Edition you must be signed in to your
            Microsoft / Xbox Live account, the same as the official game.
            Sign-in is handled by Microsoft&apos;s own authentication library
            (XAL / MSAL) in a system WebView.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 marker:text-[var(--color-accent)]">
            <li>
              We never see and never store your Microsoft password.
            </li>
            <li>
              The authentication token Microsoft returns is held on-device and
              passed directly to Minecraft. It is not transmitted to Flarial
              servers.
            </li>
            <li>
              Microsoft&apos;s handling of your account data is governed by the{" "}
              <ExtLink href="https://privacy.microsoft.com/privacystatement">
                Microsoft Privacy Statement
              </ExtLink>.
            </li>
          </ul>
        </Section>

        <Section title="Android permissions we declare">
          <p>
            The following permissions are declared in the app&apos;s
            <code className="font-mono text-[13px] text-[var(--color-accent)] mx-1">AndroidManifest.xml</code>
            and why each one is needed:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 marker:text-[var(--color-accent)]">
            <li>
              <strong>INTERNET</strong>, <strong>ACCESS_NETWORK_STATE</strong>,
              <strong> ACCESS_WIFI_STATE</strong>, <strong>CHANGE_WIFI_MULTICAST_STATE</strong> —
              download the Flarial client and assets, check for updates, and
              allow Minecraft&apos;s LAN multiplayer discovery to keep working.
            </li>
            <li>
              <strong>READ_EXTERNAL_STORAGE</strong>,
              <strong> WRITE_EXTERNAL_STORAGE</strong>,
              <strong> MANAGE_EXTERNAL_STORAGE</strong> — read your local
              Minecraft installation, write client files, and import/export
              your Flarial config. Files stay on your device.
            </li>
            <li>
              <strong>SYSTEM_ALERT_WINDOW</strong> /
              <strong> OVERLAY_WINDOW</strong> — draw the Flarial in-game
              overlay (HUD, menu) on top of Minecraft.
            </li>
            <li>
              <strong>FOREGROUND_SERVICE</strong>, <strong>WAKE_LOCK</strong> —
              keep the launcher service alive while Minecraft is running so
              the client doesn&apos;t get killed mid-session.
            </li>
            <li>
              <strong>POST_NOTIFICATIONS</strong> — show status notifications
              (download progress, ready-to-play, errors).
            </li>
            <li>
              <strong>VIBRATE</strong> — short haptic feedback inside the
              launcher UI.
            </li>
            <li>
              <strong>REQUEST_INSTALL_PACKAGES</strong> — install launcher
              self-updates from <Link href="/download" className="text-[var(--color-accent)] underline-offset-4 hover:underline">flarial.xyz/download</Link> when
              a new version is released.
            </li>
            <li>
              <strong>QUERY_ALL_PACKAGES</strong> (plus an explicit
              <code className="font-mono text-[13px] text-[var(--color-accent)] mx-1">&lt;queries&gt;</code> for
              <code className="font-mono text-[13px] text-[var(--color-accent)] mx-1">com.mojang.minecraftpe</code>) — detect that
              Minecraft: Bedrock Edition is installed so we know where to
              inject the client.
            </li>
          </ul>
          <p className="mt-3">
            None of these permissions are used to read your contacts, location,
            camera, microphone, or messages — the launcher does not request
            those permissions at all.
          </p>
        </Section>

        <Section title="Data sharing">
          <p>
            We do not sell or share personal information. The only third party
            involved in normal launcher operation is Microsoft, for the
            Xbox Live sign-in flow described above. Our content-delivery
            requests are served from standard CDN infrastructure and are
            limited to file delivery.
          </p>
        </Section>

        <Section title="Children">
          <p>
            The Flarial Launcher is not directed at children under 13, and we
            do not knowingly collect data from users under 13. If you believe a
            child has provided us with personal information, contact us via
            Discord and we&apos;ll remove it.
          </p>
        </Section>

        <Section title="Your choices">
          <ul className="list-disc pl-6 space-y-2 marker:text-[var(--color-accent)]">
            <li>
              You can revoke any individual Android permission at any time from
              Settings → Apps → Flarial Launcher → Permissions. The launcher
              will still install but features tied to that permission will be
              disabled.
            </li>
            <li>
              You can sign out of your Microsoft account from inside the
              launcher or by removing the account in Android Settings.
            </li>
            <li>
              Uninstalling the app removes all locally-stored launcher data.
            </li>
          </ul>
        </Section>

        <Section title="Contact">
          <p>
            Questions, requests, or concerns about this policy?
            Reach us in the <ExtLink href="https://discord.gg/flarial">Flarial Discord</ExtLink>{" "}
            (#support).
          </p>
        </Section>

        <Section title="Changes">
          <p>
            We may update this policy. Material changes will be announced on
            the Site or in Discord. The &quot;last updated&quot; date above
            always reflects the current version.
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
