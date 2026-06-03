import type { DocsArticle } from "../docs-types";
import {
  CopyablePath,
  DocsHeading,
  InfoCard,
  InlineCode,
  MonitorCog,
  ShieldCheck,
  Sparkles,
  sectionFrameClass,
} from "./article-kit";

export const troubleshootingHudModulesArticle: DocsArticle = {
  slug: "troubleshooting-hud-modules",
  title: "Troubleshooting: HUD & Modules",
  summary: "Fix missing overlays, module glitches, keybinds, themes, and HUD issues.",
  icon: MonitorCog,
  toc: [
    { title: "Overlays / ClickGUI not showing", href: "#flarial-overlays-not-showing" },
    { title: "Minecraft HUD hidden after injecting", href: "#minecraft-hud-hidden-after-injecting" },
    { title: "Red border around the screen", href: "#red-border-low-health-indicator" },
    { title: "Armor HUD wrong durability (26.20+)", href: "#armor-hud-wrong-durability-26-20" },
    { title: "Stutter from raw mouse throttling", href: "#raw-mouse-throttling-stutter" },
    { title: "Java Hotkeys break with texture packs", href: "#java-hotkeys-texture-pack-conflict" },
    { title: "Corrupted textures on The Hive", href: "#hive-corrupted-texture-cache" },
    { title: "Customize ClickGUI theme colors", href: "#clickgui-theme-colors" },
    { title: "Set module keybinds", href: "#add-module-keybinds-outside-world" },
    { title: "Import downloaded config files", href: "#import-flarial-config-files" },
  ],
  render: () => (
    <>
      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="flarial-overlays-not-showing">Flarial overlays or ClickGUI not showing</DocsHeading>
        <p className="font-display font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Flarial injects, but enabled HUD modules such as CPS or combo counters do not appear in-game.</li>
          <li>The ClickGUI/settings menu does not open when you press <InlineCode>K</InlineCode>.</li>
          <li>The modules menu stops working after joining a world or server.</li>
          <li>The issue comes and goes without an obvious settings change.</li>
        </ul>
        <p className="font-display font-semibold text-white">Cause</p>
        <p>This is usually a transient state after injection. A clean relaunch and rebinding the ClickGUI key resolves most cases.</p>
        <p className="font-display font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Close Minecraft completely and relaunch it with Flarial.</li>
          <li>Join a world or server, then press <InlineCode>K</InlineCode> to open the ClickGUI/settings.</li>
          <li>If <InlineCode>K</InlineCode> still does nothing, run <InlineCode>.bind clickgui K</InlineCode> in chat, then press <InlineCode>K</InlineCode> again.</li>
          <li>Make sure the affected HUD modules are enabled and positioned on screen.</li>
          <li>If overlays still do not show, reset or delete your Flarial config, then relaunch Minecraft and re-enable the modules.</li>
        </ol>
        <InfoCard icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />} title="Note">
          <p>Deleting the config resets all of your Flarial settings. This issue is separate from the vanilla Minecraft HUD disappearing after injection.</p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="minecraft-hud-hidden-after-injecting">Minecraft HUD hidden after injecting</DocsHeading>
        <p className="font-display font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>The Minecraft in-game HUD or GUI does not show after Flarial injects.</li>
          <li>The issue only appears while using Flarial.</li>
          <li>You might describe it as the game GUI disappearing or the menu not showing.</li>
        </ul>
        <p className="font-display font-semibold text-white">Cause</p>
        <p>The root cause is still under investigation. Toggling the pause menu reliably restores the HUD as a workaround.</p>
        <p className="font-display font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Press <InlineCode>Esc</InlineCode> once after loading into the world or server.</li>
          <li>If the HUD returns, continue playing normally.</li>
          <li>If pressing <InlineCode>Esc</InlineCode> does not restore the HUD, ask in the Flarial Discord with a screenshot and your logs so staff can investigate.</li>
        </ol>
        <InfoCard icon={<MonitorCog size={16} className="text-[var(--color-accent)]" />} title="Note">
          <p>This is not the same as the Flarial ClickGUI failing to open from its keybind. If your ClickGUI will not open, see the overlays section above.</p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="red-border-low-health-indicator">Red border around the screen</DocsHeading>
        <p className="font-display font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>A red border or red vignette appears around the Minecraft screen after launching with Flarial.</li>
          <li>You might describe it as a red screen or red outline while playing.</li>
        </ul>
        <p className="font-display font-semibold text-white">Cause</p>
        <p>Flarial's Low Health Indicator module is enabled or triggering visually.</p>
        <p className="font-display font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Open Flarial's ClickGUI/settings.</li>
          <li>Find the Low Health Indicator module.</li>
          <li>Disable Low Health Indicator.</li>
          <li>Rejoin the world or restart Minecraft if the red border does not disappear immediately.</li>
        </ol>
        <InfoCard icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />} title="Note">
          <p>This is a visual module setting, not a Minecraft corruption or launcher issue.</p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="armor-hud-wrong-durability-26-20">Armor HUD shows wrong durability on 26.20+</DocsHeading>
        <p className="font-display font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>The Armor HUD shows armor or elytra durability differently from the inventory.</li>
          <li>The HUD may show an item at 0 durability even though it still works in game.</li>
          <li>You are playing on Minecraft 26.20 or another 26.2x build.</li>
        </ul>
        <p className="font-display font-semibold text-white">Cause</p>
        <p>Several HUD and inventory-related modules are buggy on 26.20 / 26.2x builds.</p>
        <p className="font-display font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Check which Minecraft version you are on.</li>
          <li>If you are on 26.20 / 26.2x, know that Armor HUD durability can be wrong on that build.</li>
          <li>Disable Armor HUD, or avoid relying on its durability numbers for now.</li>
          <li>If you need reliable durability immediately, downgrade to the last stable supported version when available.</li>
          <li>If the bug still happens on a newer stable build, ask in the Flarial Discord with screenshots comparing the Flarial HUD and inventory values.</li>
        </ol>
        <InfoCard icon={<MonitorCog size={16} className="text-[var(--color-accent)]" />} title="Note">
          <p>The inventory value is the safer source of truth when Armor HUD disagrees. This is a display bug, not proof that the item is actually broken.</p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="raw-mouse-throttling-stutter">Stutter from raw mouse throttling</DocsHeading>
        <p className="font-display font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Minecraft/Flarial reports high FPS, but camera movement feels choppy or laggy.</li>
          <li>Mouse movement randomly feels delayed or throttled while keyboard movement stays smooth.</li>
          <li>The issue appears on newer Minecraft/Flarial versions and does not happen in regular Minecraft for some users.</li>
        </ul>
        <p className="font-display font-semibold text-white">Cause</p>
        <p>Windows can throttle raw mouse input down to a low polling rate for some background-process cases, making camera movement feel stuttery even when FPS is high.</p>
        <p className="font-display font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Open <span className="font-semibold text-white">Command Prompt as Administrator</span>.</li>
          <li>
            Run this command exactly:
            <div className="mt-2">
              <CopyablePath value={'reg add "HKCU\\Control Panel\\Mouse" /v "RawMouseThrottleEnabled" /t REG_DWORD /d "0" /f'} />
            </div>
          </li>
          <li>Restart the PC.</li>
          <li>Reopen Minecraft/Flarial and test mouse movement again.</li>
          <li>If you are on a known unstable build such as 26.21 and the issue continues, also try switching back to the last stable supported version.</li>
        </ol>
        <InfoCard icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />} title="Note">
          <p>This changes a Windows per-user mouse registry value, so copy the command exactly. If you are mainly hitting crashes instead of stuttery mouse input, follow the relevant crash/version guidance instead.</p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="java-hotkeys-texture-pack-conflict">Java Hotkeys break with some texture packs</DocsHeading>
        <p className="font-display font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>The Java Hotkeys module stops working after enabling a specific texture/resource pack.</li>
          <li>Hotkeys fail with some packs but work again after changing packs or settings.</li>
          <li>You are on a newer Minecraft version where Java-style hotkeys exist natively.</li>
        </ul>
        <p className="font-display font-semibold text-white">Cause</p>
        <p>Some texture/resource packs interfere with Minecraft's Java-style hotkeys. This is a Minecraft/pack issue rather than a Flarial client bug.</p>
        <p className="font-display font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Temporarily disable the texture/resource pack and test Java Hotkeys again.</li>
          <li>If hotkeys work without the pack, that pack is incompatible with the hotkey behavior.</li>
          <li>Use a different pack, or wait for the pack/Minecraft behavior to be fixed.</li>
          <li>Confirm you are on a Minecraft version that actually has the native Java-style hotkeys feature; it was introduced around <InlineCode>1.21.120</InlineCode>.</li>
        </ol>
        <InfoCard icon={<MonitorCog size={16} className="text-[var(--color-accent)]" />} title="Note">
          <p>Flarial cannot resolve every pack-specific hotkey conflict, since the conflict originates in the pack and Minecraft itself.</p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="hive-corrupted-texture-cache">Corrupted textures on The Hive</DocsHeading>
        <p className="font-display font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Textures look wrong or corrupted while playing on The Hive.</li>
          <li>The issue looks server/resource-pack related rather than a Flarial injection crash.</li>
        </ul>
        <p className="font-display font-semibold text-white">Cause</p>
        <p>The Hive or Minecraft texture/resource-pack cache may be corrupted.</p>
        <p className="font-display font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>This is likely a Hive/Minecraft resource-pack issue, not a Flarial client issue.</li>
          <li>Clear or delete Minecraft's texture pack / resource-pack cache.</li>
          <li>Rejoin The Hive and let Minecraft download the server resources again.</li>
          <li>
            If the issue continues only on The Hive, contact{" "}
            <a
              href="https://support.playhive.com/ui"
              className="font-semibold text-white underline decoration-[var(--color-accent)] decoration-2 underline-offset-4"
            >
              Hive support
            </a>
            .
          </li>
        </ol>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="clickgui-theme-colors">Customize ClickGUI theme colors</DocsHeading>
        <p className="font-display font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>You want to change the colors or look of the in-game Flarial GUI.</li>
          <li>You found font settings but not the rest of the ClickGUI/theme controls.</li>
          <li>You may call it the Flarial GUI, menu, theme, or ClickGUI.</li>
        </ul>
        <p className="font-display font-semibold text-white">Cause</p>
        <p>Flarial exposes GUI color and appearance settings through the ClickGUI module settings, but the labels and descriptions can be vague.</p>
        <p className="font-display font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Open Flarial settings/ClickGUI in game.</li>
          <li>Open the <span className="font-semibold text-white">ClickGUI</span> module settings.</li>
          <li>Adjust the available color/theme settings there.</li>
          <li>If you cannot find a specific option, ask in the Flarial Discord with a screenshot of your ClickGUI settings and a note on what you want to change.</li>
        </ol>
        <InfoCard icon={<Sparkles size={16} className="text-[var(--color-accent)]" />} title="Note">
          <p>This changes Flarial's in-game menu appearance, not Minecraft resource packs or Discord name colors.</p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="add-module-keybinds-outside-world">Set module keybinds</DocsHeading>
        <p className="font-display font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>You want to set or change a Flarial module keybind.</li>
          <li>Pressing a key while editing the bind appears to add another key instead of replacing the old one.</li>
          <li>Editing keybinds feels confusing while you are already in a world.</li>
        </ul>
        <p className="font-display font-semibold text-white">Cause</p>
        <p>The keybind editor can append the key you just pressed. Setting binds from Flarial settings outside a world is clearer.</p>
        <p className="font-display font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Leave the current world/server and open Flarial settings from outside a world.</li>
          <li>Open the module's keybind setting.</li>
          <li>Press the key you want to add.</li>
          <li>Note: the pressed key may be added to the existing bind instead of replacing it.</li>
          <li>If you need a full reset, clear or reconfigure the module bind from the same settings screen.</li>
        </ol>
        <InfoCard icon={<MonitorCog size={16} className="text-[var(--color-accent)]" />} title="Note">
          <p>This is for Flarial module keybind configuration, not Minecraft's vanilla controls menu.</p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="import-flarial-config-files">Import downloaded config files</DocsHeading>
        <p className="font-display font-semibold text-white">Symptoms</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>You downloaded a <InlineCode>.flarial</InlineCode> config file and do not know where to put it.</li>
          <li>A downloaded config does not appear in the Flarial config menu.</li>
          <li>You want to add or install community Flarial configs.</li>
        </ul>
        <p className="font-display font-semibold text-white">Cause</p>
        <p>Flarial only lists config files from its local config folder.</p>
        <p className="font-display font-semibold text-white">Fix</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Press <InlineCode>Win + R</InlineCode>.</li>
          <li>
            Paste this path and press <InlineCode>Enter</InlineCode>:
            <div className="mt-2">
              <CopyablePath value={"%localappdata%\\Flarial\\Client\\Config"} />
            </div>
          </li>
          <li>Copy the downloaded <InlineCode>.flarial</InlineCode> file into that folder.</li>
          <li>Relaunch Minecraft/Flarial or reopen the config menu if it does not appear immediately.</li>
          <li>If the file still does not show, confirm it is a real <InlineCode>.flarial</InlineCode> config file and not a zipped or download-wrapper file.</li>
        </ol>
        <InfoCard icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />} title="Note">
          <p>This is for importing configs, not resetting broken config files.</p>
        </InfoCard>
      </section>
    </>
  ),
};
