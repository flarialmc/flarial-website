import { Bug } from "lucide-react";
import type { DocsArticle } from "../docs-types";
import {
  DocsHeading,
  InfoCard,
  InlineCode,
  ShieldCheck,
  sectionFrameClass,
} from "./article-kit";

const sectionStyle = {
  background: "var(--color-bg-nav)",
  boxShadow: "var(--shadow-rest)",
} as const;

export const troubleshootingCrashesArticle: DocsArticle = {
  slug: "troubleshooting-crashes",
  title: "Troubleshooting: Crashes",
  summary:
    "Fixes for common Flarial crashes and freezes — fonts, keybinds, skins, worlds, and conflicting DLLs.",
  icon: Bug,
  toc: [
    { title: "Custom font crash", href: "#crash-after-custom-font" },
    { title: "World-entry crash (Walia)", href: "#crash-entering-world-walia" },
    { title: "Insta Hurt Animation crash", href: "#insta-hurt-animation-crash" },
    { title: "Keybind crash", href: "#keybind-crash-clear-config" },
    { title: "Skin Stealer crash", href: "#skin-stealer-crash-new-update" },
    { title: "Custom DLL conflicts", href: "#custom-dll-conflicts" },
    { title: "Better Frames freeze (AMD)", href: "#better-frames-freeze-amd" },
  ],
  render: () => (
    <>
      <section className={sectionFrameClass} style={sectionStyle}>
        <DocsHeading id="crash-after-custom-font">
          Crash after selecting a custom font
        </DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Minecraft runs fine without Flarial injected.</li>
          <li>
            After changing a module font, joining a world or server with Flarial
            injected crashes the game.
          </li>
          <li>
            Reinjecting, launching normally first, or switching launchers does
            not help.
          </li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>
          The selected custom font is likely broken or incompatible with
          Flarial's font rendering.
        </p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            Launch Flarial in private mode so the problematic font setting is not
            applied.
          </li>
          <li>Open the module/font settings you changed.</li>
          <li>Switch the module font back to a known working font.</li>
          <li>Restart Minecraft and inject Flarial again.</li>
        </ol>
        <InfoCard
          icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />}
          title="Still crashing?"
        >
          <p>
            Collect the <InlineCode>crash_*.txt</InlineCode> file from your
            Flarial logs folder (not <InlineCode>latest_*.log</InlineCode>) and
            share it in the Flarial Discord so support can inspect it.
          </p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={sectionStyle}>
        <DocsHeading id="crash-entering-world-walia">
          Crash when entering a world with Walia enabled
        </DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Minecraft crashes when you enter a world.</li>
          <li>The crash happens after Flarial has already launched.</li>
          <li>You have Walia enabled or saved in your Flarial config.</li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>
          The Walia module/config can trigger a world-entry crash on affected
          builds.
        </p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Close Minecraft and the Flarial launcher.</li>
          <li>Open the Flarial config folder.</li>
          <li>Disable the Walia module in the config file.</li>
          <li>
            If you don't need to keep your settings, delete the whole Flarial
            config and relaunch instead.
          </li>
          <li>Launch Minecraft/Flarial again and test entering the world.</li>
        </ol>
        <InfoCard
          icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />}
          title="Note"
        >
          <p>
            Deleting the whole config resets all of your Flarial settings. If the
            crash continues after disabling Walia or resetting the config, share
            your <InlineCode>crash_*.txt</InlineCode> report in the Flarial
            Discord.
          </p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={sectionStyle}>
        <DocsHeading id="insta-hurt-animation-crash">
          Crash with Insta Hurt Animation during combat
        </DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Minecraft/Flarial crashes during combat on Minecraft 26.13.</li>
          <li>The crash happens when you hit another player or get hit.</li>
          <li>You have Hurt Color or Insta Hurt Animation enabled.</li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>The Insta Hurt Animation module was bugged on the affected build.</p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Open Flarial settings if the client can still launch.</li>
          <li>
            Disable <span className="font-semibold text-white">Insta Hurt Animation</span>.
          </li>
          <li>
            If the crash continues, also disable{" "}
            <span className="font-semibold text-white">Hurt Color</span> and test
            combat again.
          </li>
          <li>
            Update and relaunch Flarial once a newer client build is available —
            the broken module was disabled in a follow-up build.
          </li>
        </ol>
        <InfoCard
          icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />}
          title="Note"
        >
          <p>
            If you can't reach settings, reset your Flarial config before testing
            again.
          </p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={sectionStyle}>
        <DocsHeading id="keybind-crash-clear-config">
          Crash when pressing a Flarial keybind
        </DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Minecraft/Flarial crashes only when you press a specific key.</li>
          <li>
            The culprit is often a bind such as{" "}
            <span className="font-semibold text-white">K</span>.
          </li>
          <li>A command prompt or console window may flash up just before the crash.</li>
          <li>Logs don't clearly match the exact key press.</li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>
          A broken or stale keybind/module config can make pressing that bind
          trigger a crash.
        </p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Close Minecraft and Flarial.</li>
          <li>
            Open the Flarial config folder:{" "}
            <InlineCode>%localappdata%\Flarial\Client\Config</InlineCode>.
          </li>
          <li>
            Delete the files in that folder to reset your module/keybind settings.
          </li>
          <li>
            Relaunch Minecraft/Flarial and test the key again before restoring old
            settings.
          </li>
        </ol>
        <InfoCard
          icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />}
          title="Note"
        >
          <p>
            Deleting these files resets your Flarial settings and keybinds. If it
            still crashes after the reset, zip all of your Flarial logs and crash
            files and send the zip in the Flarial Discord.
          </p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={sectionStyle}>
        <DocsHeading id="skin-stealer-crash-new-update">
          Skin Stealer crashes on newer builds
        </DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Minecraft crashes when you use the Skin Stealer module.</li>
          <li>The crash started after a recent Minecraft/Flarial update.</li>
          <li>Other modules may also be broken on the same new build.</li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>
          A recent update broke Skin Stealer and some other modules. There is no
          user-side repair for the module itself.
        </p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Disable Skin Stealer for now.</li>
          <li>Update Flarial when a newer build is available.</li>
          <li>
            If you need a stable setup immediately, use the last stable
            Minecraft/Flarial version recommended by staff.
          </li>
          <li>
            If Minecraft keeps crashing with Skin Stealer disabled, that's likely
            a separate issue — grab your crash logs.
          </li>
        </ol>
        <InfoCard
          icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />}
          title="Note"
        >
          <p>
            Repeatedly reinstalling is not a known fix for Skin Stealer. If
            crashes persist with it disabled, share your crash logs in the Flarial
            Discord.
          </p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={sectionStyle}>
        <DocsHeading id="custom-dll-conflicts">
          Flarial won't open alongside a custom DLL
        </DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Minecraft launches, but the Flarial UI won't open when you press the
            keybind.
          </li>
          <li>You see another injected DLL/mod menu instead of Flarial.</li>
          <li>
            You're trying to run BetterRenderDragon or another custom DLL at the
            same time as Flarial.
          </li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>
          Flarial cannot reliably run alongside another custom injected DLL at the
          same time.
        </p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Disable the custom DLL/injector before launching Flarial.</li>
          <li>
            Launch Minecraft with only Flarial injected and confirm the Flarial UI
            opens.
          </li>
          <li>
            For BetterRenderDragon-style visual changes, try Flarial's Shader
            Loader module instead of injecting a second DLL.
          </li>
          <li>
            If Shader Loader isn't present, it may not be available on your
            Minecraft/Flarial version yet.
          </li>
        </ol>
        <InfoCard
          icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />}
          title="Note"
        >
          <p>
            Running two injected clients at once is not a supported setup. Always
            reproduce issues with only Flarial injected first.
          </p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={sectionStyle}>
        <DocsHeading id="better-frames-freeze-amd">
          Better Frames or VSync Disabler freezes/crashes Minecraft
        </DocsHeading>
        <p className="font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Minecraft freezes on the loading screen or menu after enabling Better
            Frames.
          </li>
          <li>
            Minecraft crashes after launching Flarial, especially right after
            updating.
          </li>
          <li>You have Better Frames or VSync Disabler saved in your config.</li>
          <li>
            Some logs mention a DirectX/DX12 error; AMD/RX-series systems report
            this more often.
          </li>
        </ul>
        <p className="font-semibold text-white">Cause</p>
        <p>
          Better Frames and VSync Disabler are unstable on some current setups,
          especially AMD/DirectX configurations.
        </p>
        <p className="font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Leave Better Frames and VSync Disabler disabled for now.</li>
          <li>
            If Minecraft won't stay open long enough to change settings, run{" "}
            <InlineCode>.clearconfig</InlineCode> if that command is available.
          </li>
          <li>
            Otherwise open <InlineCode>%localappdata%\Flarial\Config</InlineCode>{" "}
            and delete the saved config files, then relaunch Minecraft/Flarial.
          </li>
          <li>
            For GDK builds, clear{" "}
            <InlineCode>%localappdata%\Flarial\Client\Config</InlineCode> instead.
          </li>
          <li>
            To avoid a full config reset, open the{" "}
            <InlineCode>PRIVATE</InlineCode> config file in{" "}
            <InlineCode>%localappdata%\Flarial\Config</InlineCode>, set{" "}
            <InlineCode>killdx</InlineCode> to <InlineCode>false</InlineCode>,
            save, and relaunch.
          </li>
          <li>
            If clearing the config or setting <InlineCode>killdx=false</InlineCode>{" "}
            isn't enough, reinstall Flarial.
          </li>
          <li>
            Do not re-enable Better Frames or VSync Disabler unless a newer Flarial
            build explicitly fixes the issue.
          </li>
        </ol>
        <InfoCard
          icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />}
          title="Note"
        >
          <ul className="list-disc space-y-1 pl-5">
            <li>Clearing the config resets your Flarial settings.</li>
            <li>
              You may lose motion blur or FPS gains while Better Frames is
              disabled.
            </li>
            <li>
              On newer builds, VSync Disabler may not bypass the FPS cap without
              Better Frames. If you need that FPS behavior, stay on stable 26.13
              until the newer build is fixed.
            </li>
            <li>
              If the game still freezes or crashes with both modules disabled,
              share your launcher/client logs in the Flarial Discord.
            </li>
          </ul>
        </InfoCard>
      </section>
    </>
  ),
};
