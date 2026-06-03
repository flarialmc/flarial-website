import { AlertTriangle } from "lucide-react";
import type { DocsArticle } from "../docs-types";
import {
  DocsHeading,
  Download,
  InfoCard,
  InlineCode,
  sectionFrameClass,
} from "./article-kit";

export const troubleshootingInstallArticle: DocsArticle = {
  slug: "troubleshooting-install",
  title: "Troubleshooting: Install & Launcher",
  summary: "Fix installation, injection, version detection, and launcher problems.",
  icon: Download,
  toc: [
    { title: "Bedrock Edition required", href: "#bedrock-edition-required" },
    { title: "Launcher cannot reach the CDN", href: "#cdn-flarial-blocked" },
    { title: "Clean reinstall", href: "#clean-reinstall-flarial" },
    { title: "Do not open the DLL directly", href: "#do-not-open-dll-directly" },
    { title: "Launch Minecraft before injecting", href: "#launch-minecraft-before-injecting" },
    { title: "Minecraft version not supported", href: "#minecraft-version-not-supported" },
    { title: "Windows SmartScreen / Defender warning", href: "#windows-smartscreen-unsigned-installer" },
    { title: "Minecraft opens on the wrong monitor", href: "#minecraft-launches-wrong-monitor" },
  ],
  render: () => (
    <>
      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="bedrock-edition-required">Minecraft Bedrock Edition is required</DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>The launcher says Bedrock Edition is not installed.</li>
          <li>
            The launcher cannot find the Minecraft executable, cannot verify <InlineCode>Minecraft.Windows.exe</InlineCode>,
            or reports that the system cannot find the file specified.
          </li>
          <li>You own Minecraft on mobile or Java, but not Minecraft for Windows (Bedrock) on this PC.</li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>
          Flarial is a client for the legitimate Microsoft/Mojang Minecraft Bedrock install. It does not provide the game
          or bypass ownership checks. In some cases a legitimate Microsoft Store install is simply not registered correctly,
          so the launcher cannot verify the executable.
        </p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Install Minecraft Bedrock through the Microsoft Store, Xbox app, or another legitimate Microsoft/Mojang purchase path.</li>
          <li>Sign in with the account that owns Minecraft for Windows (Bedrock) on that PC.</li>
          <li>
            If the launcher cannot verify <InlineCode>Minecraft.Windows.exe</InlineCode>, open Minecraft normally from the
            Microsoft Store or Xbox app first so Windows registers the GDK package, then reopen Flarial.
          </li>
          <li>If normal launch still does not fix detection, repair/reset or reinstall Minecraft from the Microsoft Store or Xbox app, then open Flarial again.</li>
        </ol>
        <InfoCard
          icon={<AlertTriangle size={16} className="text-[var(--color-accent)]" />}
          title="Policy"
        >
          <p>
            Flarial requires a legitimate Minecraft Bedrock purchase. Cracked, repackaged, or rehosted installs (for example
            online-fix DLLs or third-party builds) are not supported. Owning Minecraft on mobile or Java alone does not grant
            the Windows Bedrock entitlement that Flarial needs.
          </p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="cdn-flarial-blocked">Launcher cannot reach cdn.flarial.xyz</DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>The launcher cannot download or open required files from <InlineCode>cdn.flarial.xyz</InlineCode>.</li>
          <li>The error suggests a website/CDN connection is blocked.</li>
          <li>You cannot reach the injector or download flow even though the site itself loads.</li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>
          Your network, DNS resolver, ISP, school/work filter, antivirus, or firewall is blocking Flarial's CDN path.
        </p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Try a different network first, such as a mobile hotspot.</li>
          <li>Temporarily try a reputable VPN to confirm whether the current network path is the issue.</li>
          <li>
            If you would rather not use a VPN, change your DNS to Cloudflare (<InlineCode>1.1.1.1</InlineCode>) or another
            trusted public DNS resolver, then retry.
          </li>
          <li>Check your antivirus/firewall filtering and allow the official Flarial launcher and CDN if they are being blocked.</li>
          <li>If it still fails across multiple networks and DNS providers, capture the exact launcher error and launcher logs.</li>
        </ol>
        <p>
          Note: a VPN is a diagnostic and workaround, not proof that the launcher itself is broken. Stay on official Flarial
          sources rather than third-party download mirrors.
        </p>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="clean-reinstall-flarial">Clean reinstall of Flarial</DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Flarial or Minecraft crashes when launching with the client.</li>
          <li>Reopening the launcher does not fix it.</li>
          <li>You may have stale Flarial settings or client files from an older install.</li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>
          Old Flarial config or client data can keep applying a broken setting or stale install state even after a normal reinstall.
        </p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Close Minecraft and the Flarial launcher.</li>
          <li>Open File Explorer.</li>
          <li>Open <InlineCode>%localappdata%</InlineCode> and delete the <InlineCode>Flarial</InlineCode> folder there.</li>
          <li>Open <InlineCode>%appdata%</InlineCode> and delete the <InlineCode>Flarial</InlineCode> folder there too.</li>
          <li>Download and install Flarial again from the official source.</li>
          <li>Launch Minecraft/Flarial and test before restoring any old settings.</li>
        </ol>
        <InfoCard
          icon={<AlertTriangle size={16} className="text-[var(--color-accent)]" />}
          title="Note"
        >
          <p>
            Deleting these folders resets your Flarial settings. If the crash continues after a clean reinstall, keep the
            <InlineCode>crash_*.txt</InlineCode> crash report so support can review it.
          </p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="do-not-open-dll-directly">Do not open the Flarial DLL directly</DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>You double-click or open a <InlineCode>.dll</InlineCode> file and Windows shows an error.</li>
          <li>You are unsure how to open the client after downloading a DLL.</li>
          <li>The DLL does not behave like an app or installer.</li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>
          A DLL is a library that must be loaded by the Flarial launcher/injector. It is not meant to be opened directly like an executable.
        </p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Do not open the <InlineCode>.dll</InlineCode> file directly.</li>
          <li>Download and use the official Flarial launcher/injector instead.</li>
          <li>If you only have a DLL, return to the official Flarial website or download source to get the launcher.</li>
          <li>If needed, launch Minecraft Bedrock normally first, then use the Flarial launcher to inject the client.</li>
          <li>If injection fails from the launcher, troubleshoot the launcher/injection error rather than the DLL-open error.</li>
        </ol>
        <p>
          Note: do not register the DLL with Windows or run arbitrary commands against it.
        </p>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="launch-minecraft-before-injecting">Launch Minecraft before injecting</DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Flarial opens Minecraft but the game never finishes loading.</li>
          <li>Minecraft shows a white or black screen, freezes, or crashes around launch.</li>
          <li>Injection fails when you press launch immediately from the Flarial launcher.</li>
          <li>An injector reports that it cannot find the Minecraft process.</li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>
          The exact cause is unknown, but across many cases, waiting for Minecraft to fully load before injecting avoids the launch failure.
        </p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Open Minecraft normally first. If needed, open the Windows Start menu and search for <span className="font-semibold text-white">Minecraft for Windows</span>.</li>
          <li>Wait until Minecraft reaches the home screen / main menu.</li>
          <li>Then open Flarial, or press play/inject in the Flarial launcher.</li>
          <li>If the launcher still does not inject, press the launcher Play button once more after Minecraft is already open.</li>
          <li>If the client still crashes, keep your crash logs so support can review them instead of guessing.</li>
        </ol>
        <p>
          Note: this is a workaround, not a guaranteed fix for every startup crash. If you are on a newly released, unsupported
          Minecraft version, see the version section below instead.
        </p>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="minecraft-version-not-supported">Minecraft version is not supported yet</DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Flarial opens Minecraft but cannot inject after Minecraft updates.</li>
          <li>The client worked on an older Minecraft version, then stopped after updating.</li>
          <li>The launcher may not show a just-announced supported version until it is restarted.</li>
          <li>Minecraft 26.20/26.21 beta may launch or inject but crash, white-screen, or be less stable than 26.13.</li>
          <li>Minecraft keeps returning to a newer build after you downgrade or disable auto-update.</li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>
          Flarial must be updated for each supported Minecraft version. A newly released or beta build may not be supported or
          stable immediately, and launcher version metadata can lag until the launcher is restarted.
        </p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Check the currently supported Minecraft version in the launcher, Discord announcements, or support channels.</li>
          <li>Restart the Flarial launcher if a new version was just announced but is not visible yet.</li>
          <li>If your installed Minecraft version is newer than the supported one, use the Flarial version switcher to downgrade to the supported build.</li>
          <li>In the launcher, open <span className="font-semibold text-white">Versions</span>, select the supported version, then click <span className="font-semibold text-white">Install</span>. This can be required even if you already have a newer Minecraft build installed.</li>
          <li>If a build is beta, unsupported, legacy UWP, or being skipped, stay on the last stable supported GDK build or play without Flarial until a later build is supported.</li>
          <li>If 26.20/26.21 beta crashes or shows a persistent white screen, reinstall that version once; if it still fails, switch back to stable 26.13 until the beta is fixed.</li>
          <li>If Minecraft keeps auto-updating after a downgrade, open Windows <span className="font-semibold text-white">Services</span> and disable <span className="font-semibold text-white">Microsoft Store Install Service</span> before installing the supported build again.</li>
          <li>When keeping a downgraded, Flarial-compatible install, avoid launching Bedrock through the official Minecraft Launcher; use the Start menu or Xbox app for Bedrock instead.</li>
          <li>If the version switcher download/install fails or is slow, retry on a better connection. Many failures are network/CDN path issues.</li>
          <li>If you need Realms or another feature that requires the newest Minecraft version, wait until Flarial supports that version or temporarily play without Flarial.</li>
        </ol>
        <p>
          Note: UWP is no longer supported. Prefer supported GDK versions if you are on old 1.21.13x builds.
        </p>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="windows-smartscreen-unsigned-installer">Windows SmartScreen or Defender warns about the installer</DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Windows shows a blue SmartScreen warning when you open the Flarial installer.</li>
          <li>You only see a warning page and cannot find the normal Run button.</li>
          <li>The warning implies the app is unrecognized or potentially unsafe.</li>
          <li>Windows Defender quarantines <InlineCode>Flarial.Launcher.exe</InlineCode>, sometimes as <InlineCode>Trojan:Win32/Wacatac.H!ml</InlineCode>.</li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>
          Flarial's installer is not signed with a Windows code-signing certificate, so SmartScreen may warn before first launch.
          Defender detections can also happen in waves as false positives, especially after definition updates.
        </p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Only download Flarial from the official Flarial download link.</li>
          <li>On the SmartScreen warning, click <span className="font-semibold text-white">More info</span>.</li>
          <li>Click <span className="font-semibold text-white">Run anyway</span> to start the installer.</li>
          <li>If Windows Defender or another antivirus quarantined the file, only restore/allow it if it came from Flarial's official download or CDN.</li>
          <li>If Defender keeps flagging it, update Defender definitions and re-download the latest launcher from the official source.</li>
        </ol>
        <p>
          Note: Flarial is open source, but Windows can still warn because the executable is unsigned or newly updated. Do not
          bypass warnings for files from mirrors or random reposts.
        </p>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="minecraft-launches-wrong-monitor">Minecraft opens on the wrong monitor</DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Flarial opens on the expected/main monitor, but Minecraft opens on a secondary monitor.</li>
          <li>Minecraft opens on the correct monitor when started without Flarial.</li>
          <li>Moving the window manually works only until the next launch.</li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>
          Minecraft can save stale monitor/window placement under its Bedrock registry settings.
        </p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Close Minecraft and Flarial.</li>
          <li>Open the Windows Registry Editor (<InlineCode>regedit</InlineCode>).</li>
          <li>Go to <InlineCode>HKEY_CURRENT_USER\SOFTWARE\Microsoft\Minecraft Bedrock</InlineCode>.</li>
          <li>Delete the saved monitor/window placement value that points Minecraft to the wrong display.</li>
          <li>Launch Minecraft again and place it on the preferred monitor.</li>
        </ol>
        <InfoCard
          icon={<AlertTriangle size={16} className="text-[var(--color-accent)]" />}
          title="Note"
        >
          <p>
            Edit the registry carefully: delete only the Minecraft Bedrock placement value, not unrelated Windows keys. If you
            are not comfortable editing the registry, get live help in our{" "}
            <a
              href="https://discord.gg/flarial"
              className="font-semibold text-white underline decoration-[var(--color-accent)] decoration-2 underline-offset-4"
            >
              Discord
            </a>{" "}
            before making changes.
          </p>
        </InfoCard>
      </section>
    </>
  ),
};
