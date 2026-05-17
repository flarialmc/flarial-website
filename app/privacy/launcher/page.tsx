import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flarial Launcher · Privacy Policy",
  description:
    "Privacy policy for the Flarial Launcher Android app (com.flarialmc.flarial_launcher) — what data is collected, ads, permissions, and how Microsoft sign-in works.",
  alternates: { canonical: "/privacy/launcher" },
};

const UPDATED = "May 17, 2026";

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
          For our website, desktop launcher, and Minecraft client, see the{" "}
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

        <Section title="Beta-access program">
          <p>
            The launcher gates access behind a Discord-authenticated beta
            program. When you tap &quot;Request access&quot;:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 marker:text-[var(--color-accent)]">
            <li>
              You complete a Discord OAuth flow. Discord returns an OAuth
              authorization code to the app.
            </li>
            <li>
              The app sends the OAuth code, your Android{" "}
              <code className="font-mono text-[13px] text-[var(--color-accent)]">ANDROID_ID</code>{" "}
              (a 64-bit identifier scoped to your device + signing key + user),
              and your phone&apos;s manufacturer and model string (e.g.
              &quot;Google Pixel 8&quot;) to <code className="font-mono text-[13px] text-[var(--color-accent)]">api.flarial.xyz/beta/request</code>.
            </li>
            <li>
              The server uses the OAuth code to read your Discord user ID and
              roles, then issues a device token. The app stores that token
              locally and sends it as <code className="font-mono text-[13px] text-[var(--color-accent)]">X-Device-Token</code> when
              polling <code className="font-mono text-[13px] text-[var(--color-accent)]">api.flarial.xyz/beta/status</code> for
              approval (roughly once every five seconds while a request is
              pending).
            </li>
            <li>
              We retain your Discord user ID, ANDROID_ID, phone model, and
              issued device token while your beta request is active so we can
              authorize subsequent launches without re-prompting. You can
              request deletion via Discord.
            </li>
          </ul>
        </Section>

        <Section title="Ads">
          <p>
            The launcher displays a short interstitial advertisement on each
            launch, served by the third-party provider{" "}
            <ExtLink href="https://lootapp.ai">lootapp.ai</ExtLink>. The flow
            is:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 marker:text-[var(--color-accent)]">
            <li>
              The app fetches an ad URL from{" "}
              <code className="font-mono text-[13px] text-[var(--color-accent)]">lootapp.ai/inapp?tid=1256848</code>{" "}
              and renders it in an in-app WebView before Minecraft loads.
            </li>
            <li>
              JavaScript and third-party cookies are enabled in that WebView so
              the ad can render and measure correctly. lootapp.ai and its
              partners may set cookies, read standard request data (your IP
              address, user-agent), and use that data to serve and measure
              ads.
            </li>
            <li>
              A close button appears after the mandatory display window.
            </li>
            <li>
              Data handling by lootapp.ai is governed by their own privacy
              policy. We do not control which sub-networks or trackers they
              choose to embed.
            </li>
          </ul>
        </Section>

        <Section title="What we do not collect">
          <ul className="list-disc pl-6 space-y-2 marker:text-[var(--color-accent)]">
            <li>
              <strong>No third-party analytics SDK.</strong> The app does not
              embed Firebase Analytics, Crashlytics, Google Analytics,
              AppsFlyer, Adjust, Sentry, or similar.
            </li>
            <li>
              <strong>No automatic crash upload.</strong> If the launcher
              crashes, a diagnostic log may be generated locally. It is not
              uploaded automatically — you can attach it to a Discord bug
              report if you choose.
            </li>
            <li>
              <strong>No advertising ID.</strong> The app does not read the
              Google Advertising ID. (lootapp.ai may set its own cookies inside
              its WebView; that is separate from device-level advertising IDs.)
            </li>
            <li>
              <strong>No contacts, location, camera, microphone, or messages.</strong>{" "}
              The launcher does not request those permissions.
            </li>
          </ul>
        </Section>

        <Section title="Microsoft / Xbox Live sign-in">
          <p>
            To play Minecraft: Bedrock Edition you must be signed in to your
            Microsoft / Xbox Live account. That sign-in is handled by
            Minecraft itself once it has loaded — the Flarial Launcher does
            not collect your Microsoft credentials and does not see the
            authentication tokens Minecraft uses. Microsoft&apos;s handling of
            your account data is governed by the{" "}
            <ExtLink href="https://privacy.microsoft.com/privacystatement">
              Microsoft Privacy Statement
            </ExtLink>.
          </p>
        </Section>

        <Section title="What the client sends after the launcher hands off">
          <p>
            Once the launcher loads Flarial into Minecraft, the Flarial client
            itself sends limited telemetry (module enable/disable events,
            startup version pings, crash reports, and a VIP/online-users
            stream) to <code className="font-mono text-[13px] text-[var(--color-accent)]">api.flarial.xyz</code>.
            That is documented in the{" "}
            <Link href="/privacy" className="text-[var(--color-accent)] underline-offset-4 hover:underline">
              main privacy policy
            </Link>.
          </p>
        </Section>

        <Section title="Android permissions we declare">
          <p>
            The following permissions are declared in the app&apos;s
            <code className="font-mono text-[13px] text-[var(--color-accent)] mx-1">AndroidManifest.xml</code>
            and why each one is needed:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 marker:text-[var(--color-accent)]">
            <li>
              <strong>INTERNET</strong>, <strong>ACCESS_NETWORK_STATE</strong> —
              fetch the ad payload, talk to <code className="font-mono text-[13px] text-[var(--color-accent)]">api.flarial.xyz</code> for
              beta access, and download the Flarial client and assets.
            </li>
            <li>
              <strong>WRITE_EXTERNAL_STORAGE</strong> — write the Flarial client
              files into your local Minecraft installation. Files stay on your
              device.
            </li>
            <li>
              <strong>SYSTEM_ALERT_WINDOW</strong> /
              <strong> OVERLAY_WINDOW</strong> — render the launch-time ad
              WebView as an overlay, and draw the Flarial in-game HUD on top
              of Minecraft.
            </li>
            <li>
              <strong>POST_NOTIFICATIONS</strong> — show status notifications
              (download progress, ready-to-play, errors).
            </li>
          </ul>
          <p className="mt-3">
            We do not declare permissions for contacts, location, camera,
            microphone, SMS, or call logs.
          </p>
        </Section>

        <Section title="Data sharing">
          <p>
            We share data with two third parties in normal launcher operation:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 marker:text-[var(--color-accent)]">
            <li>
              <strong>Discord</strong> — for the beta-access OAuth flow.
            </li>
            <li>
              <strong>lootapp.ai</strong> — for the launch-time ad.
            </li>
          </ul>
          <p className="mt-3">
            We do not sell personal information.
          </p>
        </Section>

        <Section title="Children">
          <p>
            The Flarial Launcher is not directed at children under 13, and we
            do not knowingly collect data from users under 13. The launcher
            also shows third-party advertisements. If you believe a child has
            provided us with personal information, contact us via Discord and
            we&apos;ll remove it.
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
              You can revoke Flarial&apos;s Discord OAuth access at any time at{" "}
              <ExtLink href="https://discord.com/settings/authorized-apps">
                discord.com/settings/authorized-apps
              </ExtLink>.
            </li>
            <li>
              You can reset your Android device-scoped identifiers (including
              ANDROID_ID, on devices where the OS supports it) via system
              settings.
            </li>
            <li>
              Uninstalling the app removes all locally-stored launcher data,
              including the cached beta device token.
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
