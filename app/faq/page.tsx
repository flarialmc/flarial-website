import type { Metadata } from "next";
import { FAQ } from "./FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about Flarial — install, safety, modules, and contributions.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Flarial FAQ",
    description:
      "Is Flarial safe? Is it free? Common questions about the Minecraft Bedrock client — install, safety, modules, and contributions.",
    type: "website",
  },
};

const ENTRIES = [
  {
    q: "Is Flarial safe?",
    a: "Yes. Flarial is a TOS-compliant utility client — the default module set is quality-of-life only (HUD, FPS boost, keystrokes), with no account risk on normal play. It is not a cheat client, the launcher and client are open source on GitHub, and there is no kill-aura or reach-cheat in the defaults. As with any Bedrock client, use the optional Combat tab at your own discretion: on ranked and anti-cheat servers, aggressive modules may be flagged.",
  },
  {
    q: "Is Flarial free?",
    a: "Yes. The client and launcher have no paid tier, no cosmetics paywall, and zero in-product ads — forever. This website runs a small ad to help cover hosting and CDN costs; the software you install does not.",
  },
  {
    q: "Will I get banned?",
    a: "Flarial does not include hacks like reach-cheats or kill-aura on official Realms / featured servers. The default module set is QoL-only. Use the Combat tab at your own discretion — on Hive, Hypixel-equivalent, and ranked servers, anti-cheat may flag aggressive modules.",
  },
  {
    q: "Which Minecraft version do I need?",
    a: "Bedrock 1.20 and newer. The launcher tracks supported versions and warns you if you're on something untested.",
  },
  {
    q: "Why does the launcher need admin?",
    a: "DLL injection requires elevated rights to attach to the Minecraft process. Standard for any Bedrock client of this kind.",
  },
  {
    q: "Can I script my own modules?",
    a: "Yes. The Scripts tab in the ClickGUI hosts Lua-based community modules via the Script Marketplace. Browse the launcher repo for the API surface.",
  },
  {
    q: "Does Flarial work on Android / iOS?",
    a: "Yes, Flarial is released on Android through the official APK download. iOS is not supported and is not planned (Apple sandbox blocks injection).",
  },

  {
    q: "Flarial launched, but nothing shows or K does not open the menu. What do I do?",
    a: "Close Minecraft completely, reopen it through the Flarial launcher, join a world or server, then press K. If K still does not open ClickGUI, run .bind clickgui K in chat and try again. Make sure your HUD modules are enabled and on-screen. If the UI is still invisible, reset or delete your Flarial config and relaunch; this resets your settings.",
  },
  {
    q: "Why does my Minecraft version say unsupported or why does 26.21 not work?",
    a: "Flarial has to be updated for specific Minecraft Bedrock builds. New or beta builds can be unsupported or unstable even if they launch. Check the launcher, Discord announcements, or support channels for the current supported version. If you are on a newer broken build, use the Flarial version switcher to install the supported version, restart the launcher, and avoid auto-updating until support is announced.",
  },
  {
    q: "Why can’t I open the Flarial DLL directly?",
    a: "The DLL is not an app or installer. It is a library that must be loaded by the Flarial launcher/injector. Do not double-click the DLL or try to register it with Windows. Download the official launcher from the Flarial website, launch Minecraft Bedrock if needed, then use the launcher to inject Flarial.",
  },
  {
    q: "Why does the launcher say launch failed, connection failure, or get stuck downloading?",
    a: "Most of these are network, DNS, antivirus, firewall, or CDN path issues. Restart the launcher once, then try another network such as a mobile hotspot. If that works, your normal network is blocking the path. You can also try Cloudflare DNS (1.1.1.1), Cloudflare WARP, or a reputable VPN, and make sure your antivirus/firewall allows the official Flarial launcher and cdn.flarial.xyz.",
  },
  {
    q: "Why does Windows say Flarial is unsafe or delete the launcher?",
    a: "Flarial can trigger SmartScreen or antivirus false positives because the launcher is unsigned or newly updated. Only download it from the official Flarial website/CDN. If SmartScreen appears, click More info, then Run anyway. If Defender or another antivirus quarantines it, only restore or allow it if the file came from the official source.",
  },
  {
    q: "How do I install Flarial on Android, and does iOS work?",
    a: "Use the official Android APK/download path from Flarial only; do not install random patched APKs or reposts. Android support may depend on the currently supported Minecraft version, so update or switch versions if staff announces that a build is required. iOS is not supported because Apple’s sandbox blocks the same client/modding approach, and we do not recommend jailbreak or sideload workarounds.",
  },
  {
    q: "How do I import Flarial config files?",
    a: "Press Win + R, paste %localappdata%\\Flarial\\Client\\Config, and press Enter. Put the downloaded .flarial config file in that folder, then relaunch Minecraft/Flarial or reopen the config menu. If it still does not show, make sure the file is actually a .flarial config and not a zip or wrapper file.",
  },
  {
    q: "How do I move FPS, CPS, Keystrokes, or other HUD modules?",
    a: "Join a world or server with Flarial injected, open the menu with K, then press L while the menu is open or click the pen/edit icon to enter HUD edit mode. Drag the HUD modules where you want them, then close edit mode. If K does not open the menu, fix ClickGUI first.",
  },
  {
    q: "What should I do if Minecraft freezes or crashes after leaving a server or enabling Better Frames?",
    a: "Close Minecraft and the Flarial launcher completely, reopen the launcher so it can pull the latest client update, then retest. If the issue started after enabling Better Frames or VSync Disabler, leave those disabled for now. If Minecraft cannot stay open, run .clearconfig if available or delete the Flarial config folder, then relaunch. If it still happens, use the last staff-recommended stable Minecraft version and send logs in support.",
  },
  {
    q: "What should I include when reporting a crash or bug?",
    a: "Include your Minecraft Bedrock version, Flarial launcher/client version, whether you are on Windows or Android, what you clicked right before it broke, enabled modules that might be related, screenshots or screen recordings, and any crash logs or launcher logs. For crashes, explain whether it happens on launch, injection, joining a world/server, leaving a server, or pressing a keybind.",
  },

  {
    q: "How do I fully reinstall Flarial?",
    a: "Close Minecraft and the Flarial launcher first. Delete the Flarial folders in %localappdata% and %appdata%, then download the latest launcher again from the official website. This resets configs, cached files, and broken local state, so only do it when normal config resets or launcher restarts do not help.",
  },
  {
    q: "Do I need real Minecraft Bedrock installed?",
    a: "Yes. Flarial is a client for Minecraft Bedrock and expects a legitimate Bedrock installation from Microsoft/Xbox/Google Play depending on platform. It is not a free Minecraft download, cracked launcher, APK patcher, or replacement for owning the game.",
  },
  {
    q: "Should I launch Minecraft before injecting Flarial?",
    a: "Usually yes. If injection fails or nothing appears, open Minecraft Bedrock first, wait for it to reach the menu or a world, then use the Flarial launcher. If Minecraft or Flarial was already stuck, close both completely and retry from a clean launch.",
  },
  {
    q: "My Minecraft HUD disappeared after injecting. Is Flarial broken?",
    a: "First check whether the vanilla Minecraft HUD is hidden. Press F1 or check Minecraft video/HUD settings. If only Flarial overlays are missing, use the ClickGUI/HUD troubleshooting steps instead. If both Minecraft and Flarial UI are gone after injection, restart Minecraft and send logs if it keeps happening.",
  },
  {
    q: "Can custom DLLs or third-party mods break Flarial?",
    a: "Yes. Custom DLLs, other injectors, overlays, or third-party native mods can conflict with Flarial and stop it from opening or make Minecraft crash. Test with only the official Flarial launcher/client first. If that works, add custom DLLs back one at a time so you can identify the conflict.",
  },
  {
    q: "Minecraft crashes after I select a custom font. How do I fix it?",
    a: "Reset your Flarial config or remove the custom font setting from the config, then relaunch. Some fonts can crash or fail to render correctly. After recovering, use a normal/common font and avoid re-selecting the font that caused the crash.",
  },
  {
    q: "Minecraft crashes when I press a Flarial keybind. What should I do?",
    a: "Clear or reset your Flarial config, then set your keybinds again. Broken or old keybind entries can crash newer builds. If the crash happens after binding one specific module, report the module name, the key, your Minecraft version, and logs.",
  },
  {
    q: "Why are some modules missing in beta builds?",
    a: "Beta/new Minecraft builds can temporarily miss modules while hooks, signatures, or UI pieces are being updated. That is normal during update windows. Use the last stable supported build if you need the missing module right now, or wait for the next Flarial update.",
  },
  {
    q: "Why does Hive Utils or Hive Statistics not show stats?",
    a: "Some Hive features depend on Hive API access and may need a valid API key or a working external stats service. If only rejoin works but stats do nothing, check whether the feature currently requires setup or if the API is down. If it still fails, report it with your module settings and what Hive mode you tested.",
  },
  {
    q: "How do I get a Flarial name color or icon?",
    a: "Name colors/icons are tied to Flarial roles such as default user, booster, supporter, media, staff, or developer. For supporter perks, link the required account/payment source if instructed and run the claim command exactly as shown in Discord. Role names, capitalization, and spaces matter.",
  },
  {
    q: "Can I disable promos or ads inside the client?",
    a: "If a promotion/client message option is available in settings, disable it there. The website may still show ads to help pay hosting/CDN costs, but the client and launcher do not have a paid tier or cosmetics paywall.",
  },
  {
    q: "Why is there a red border around my screen?",
    a: "That is usually the Low Health Indicator module. Disable Low Health Indicator or adjust its settings if you do not want the warning border. It is a visual warning, not a crash or Minecraft damage bug.",
  },
  {
    q: "Why is my FPS stuck at 60?",
    a: "Check Minecraft VSync, Windows display refresh rate, GPU control panel limits, and any Flarial FPS/VSync-related modules. NVIDIA users should also check the NVIDIA Control Panel for max frame rate or VSync overrides. Some current builds may not bypass the FPS cap reliably without unstable modules, so use the stable recommended build if needed.",
  },
  {
    q: "Minecraft opens on the wrong monitor. How can I fix it?",
    a: "Move Minecraft to the monitor you want, set that display as your main monitor in Windows, then relaunch Minecraft and Flarial. If Minecraft keeps choosing the wrong screen, check Windows display settings and any GPU control-panel display overrides.",
  },
  {
    q: "Hive textures look corrupted or broken. What should I try?",
    a: "Clear the affected Hive/resource-pack cache, restart Minecraft, and rejoin Hive so the pack can redownload. If it only happens with Flarial injected, test without other packs or custom DLLs and report your Minecraft version plus screenshots.",
  },
  {
    q: "Why do Java Hotkeys not work with my texture pack?",
    a: "Some texture packs or UI packs replace controls in ways that can conflict with Java Hotkeys. Test with the pack disabled first. If the hotkeys work without the pack, the pack is the conflict; use a different pack or report the pack name and exact hotkey that fails.",
  },
  {
    q: "What should I do if Waila crashes when entering a world?",
    a: "Disable Waila, relaunch, and test the same world again. If the crash stops, keep Waila disabled until a fix ships and report the Minecraft version, world/server, and what you were looking at when it crashed.",
  },
  {
    q: "What should I do if Compact Chat crashes?",
    a: "Disable Compact Chat and relaunch. If Minecraft cannot stay open long enough to disable it, clear your Flarial config. Include your Minecraft version and any chat messages/server where the crash happens when reporting it.",
  },
  {
    q: "What should I do if Skin Stealer crashes?",
    a: "Disable Skin Stealer and update to the latest Flarial build. If it still crashes, report the player/skin type if relevant, your Minecraft version, and logs. Do not keep retrying the same crash loop with the module enabled.",
  },
  {
    q: "Can I add or change module keybinds outside a world?",
    a: "Some keybind editing is safest after joining a world/server with Flarial injected because the ClickGUI and module state are fully loaded there. Join a world, press K, open the module, then set the keybind. If keybind editing crashes, clear config and report the module/key.",
  },
  {
    q: "Will Flarial keep getting updates?",
    a: "Yes — the changelog has been rolling weekly since 2023. The development team is volunteer-run; pace tracks Minecraft Bedrock releases.",
  },
  {
    q: "How do I report a bug?",
    a: "GitHub issues at flarialmc/dll for client bugs, flarialmc/launcher for launcher bugs. Include your Bedrock version, launcher version, and a steps-to-reproduce.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ENTRIES.map((e) => ({
    "@type": "Question",
    name: e.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: e.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <header className="mb-10 max-w-2xl">
        <h1 className="font-display text-[40px] sm:text-[56px] leading-[0.98] font-semibold tracking-[-0.02em] text-white">
          FAQ.
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-text-mute)]">
          Common questions answered. For everything else, hop in the{" "}
          <a href="https://discord.gg/flarial" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:text-[var(--color-accent-hi)]">
            Discord
          </a>
          .
        </p>
      </header>
      <FAQ entries={ENTRIES} />
    </div>
  );
}
