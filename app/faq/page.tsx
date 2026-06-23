import type { Metadata } from "next";
import { FAQ, type FAQCategory } from "./FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about Flarial — install, safety, modules, troubleshooting, and support.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Flarial FAQ",
    description:
      "Common questions about the Minecraft Bedrock client — install, safety, supported versions, modules, troubleshooting, and support.",
    type: "website",
  },
};

const CATEGORIES: FAQCategory[] = [
  {
    title: "Basics & Safety",
    description: "What Flarial is, what it costs, and what kind of client it is.",
    entries: [
      {
        q: "Is Flarial safe?",
        short: "Yes, when downloaded from official sources; it is a QoL utility client, not a hacked client.",
        a: "Yes. Flarial is a TOS-compliant utility client — the default module set is quality-of-life only, such as HUD, FPS, keystrokes, and visual utilities. It is not a cheat client, the launcher and client are open source on GitHub, and there is no kill-aura or reach-cheat in the defaults. As with any Bedrock client, use optional modules on ranked or anti-cheat servers at your own discretion.",
      },
      {
        q: "Is Flarial free?",
        short: "Yes. The client and launcher are free, with no paid tier or cosmetics paywall.",
        a: "Yes. The client and launcher have no paid tier, no cosmetics paywall, and zero in-product ads — forever. This website may run ads to help cover hosting and CDN costs; the software you install does not have a paid feature gate.",
      },
      {
        q: "Will I get banned?",
        short: "Flarial is QoL-focused, but servers can enforce their own rules.",
        a: "Flarial does not include hacks like reach-cheats or kill-aura on official Realms or featured servers. The default module set is quality-of-life focused. Still, every server can enforce its own rules, and anti-cheat behavior can vary, so use optional combat/visual modules on ranked or competitive servers at your own discretion.",
      },
      {
        q: "Does Flarial have Storage ESP, X-ray, or cheat modules?",
        short: "No. Flarial does not provide hacked-client features like Storage ESP or X-ray.",
        a: "No. Flarial is not a hack client and does not provide Storage ESP, X-ray, or unfair-play cheat features. Flarial support only covers Flarial’s official QoL, HUD, visual, scripting, and utility modules.",
      },
      {
        q: "Do I need real Minecraft Bedrock installed?",
        short: "Yes. Flarial does not replace owning or installing Minecraft Bedrock.",
        a: "Yes. Flarial is a client for Minecraft Bedrock and expects a legitimate Bedrock installation from Microsoft, Xbox, or Google Play depending on platform. It is not a free Minecraft download, cracked launcher, mobile app patcher, or replacement for owning the game.",
      },
      {
        q: "Will Flarial keep getting updates?",
        short: "Yes. Updates follow Minecraft Bedrock changes and team availability.",
        a: "Yes — the changelog has been rolling weekly since 2023. The development team is volunteer-run, so update speed tracks Minecraft Bedrock releases, compatibility changes, and developer availability.",
      },
    ],
  },
  {
    title: "Install, Launch & Versions",
    description: "Installing Flarial, supported Minecraft versions, and launcher behavior.",
    entries: [
      {
        q: "Which Minecraft version do I need?",
        short: "Use the version shown as supported by the launcher or announcements.",
        a: "Bedrock 1.20 and newer is the broad target, but Flarial support is version-specific. The launcher tracks supported versions and warns you if you are on something untested. For the most reliable answer, check the launcher, Discord announcements, or support channels for the current supported build.",
      },
      {
        q: "Why does my Minecraft version say unsupported or why does 26.21 not work?",
        short: "New Minecraft builds can be unsupported or unstable until Flarial updates.",
        a: "Flarial has to be updated for specific Minecraft Bedrock builds. New or beta builds can be unsupported or unstable even if they launch. Check the launcher, Discord announcements, or support channels for the current supported version. If you are on a newer broken build, use the Flarial version switcher to install the supported version, restart the launcher, and avoid auto-updating until support is announced.",
      },
      {
        q: "How do I stop Minecraft from auto-updating away from the supported version?",
        short: "Use the version switcher and disable Microsoft Store auto-update behavior if needed.",
        a: "Use the Flarial version switcher for the supported build. If Minecraft keeps auto-updating, disable Microsoft Store auto-updates or Microsoft Store Install Service as recommended by support, then reinstall or select the supported build again. Avoid launching Bedrock through paths that force it back to latest release when you need a downgraded Flarial-compatible build.",
      },
      {
        q: "Why does the launcher need admin?",
        short: "DLL injection needs elevated rights to attach to Minecraft.",
        a: "DLL injection requires elevated rights to attach to the Minecraft process. This is standard for Bedrock clients that inject into the game process. Only run the official Flarial launcher from the official website/CDN.",
      },
      {
        q: "Should I launch Minecraft before injecting Flarial?",
        short: "Usually yes if injection fails or nothing appears.",
        a: "Usually yes. If injection fails or nothing appears, open Minecraft Bedrock first, wait for it to reach the menu or a world, then use the Flarial launcher. If Minecraft or Flarial was already stuck, close both completely and retry from a clean launch.",
      },
      {
        q: "Why can’t I open the Flarial DLL directly?",
        short: "The DLL is not an app; use the launcher/injector.",
        a: "The DLL is not an app or installer. It is a library that must be loaded by the Flarial launcher/injector. Do not double-click the DLL or try to register it with Windows. Download the official launcher from the Flarial website, launch Minecraft Bedrock if needed, then use the launcher to inject Flarial.",
      },
      {
        q: "Why does the launcher say launch failed, connection failure, or get stuck downloading?",
        short: "Most cases are network, DNS, firewall, antivirus, or CDN path issues.",
        a: "Most of these are network, DNS, antivirus, firewall, or CDN path issues. Restart the launcher once, then try another network such as a mobile hotspot. If that works, your normal network is blocking the path. You can also try Cloudflare DNS (1.1.1.1), Cloudflare WARP, or a reputable VPN, and make sure your antivirus/firewall allows the official Flarial launcher and cdn.flarial.xyz.",
      },
      {
        q: "Why does Windows say Flarial is unsafe or delete the launcher?",
        short: "Unsigned/new builds can trigger SmartScreen or false positives.",
        a: "Flarial can trigger SmartScreen or antivirus false positives because the launcher is unsigned or newly updated. Only download it from the official Flarial website/CDN. If SmartScreen appears, click More info, then Run anyway. If Defender or another antivirus quarantines it, only restore or allow it if the file came from the official source.",
      },
      {
        q: "How do I update or redownload the launcher if auto-update fails?",
        short: "Restart the launcher first; if it still fails, download a fresh copy from the official site.",
        a: "Close Minecraft and the launcher completely, then reopen the official launcher so it can check for updates. If the launcher still cannot update, download a fresh copy from the official Flarial website or official CDN link. Do not use reposted launcher files. If downloads fail too, troubleshoot network/CDN blocking first.",
      },
      {
        q: "How do I fully reinstall Flarial?",
        short: "Delete local Flarial folders, then reinstall from the official website.",
        a: "Close Minecraft and the Flarial launcher first. Delete the Flarial folders in %localappdata% and %appdata%, then download the latest launcher again from the official website. This resets configs, cached files, and broken local state, so only do it when normal config resets or launcher restarts do not help.",
      },
      {
        q: "How do I install Flarial on Android, and does iOS work?",
        short: "Use official Flarial links only; Android support depends on the current build, and iOS is not supported.",
        a: "Install Flarial for Android from the official Google Play listing or official Flarial links only; do not install random patched apps or reposts. Android support may depend on the currently supported Minecraft version, so update or switch versions if staff announces that a build is required. iOS is not supported because Apple’s sandbox blocks the same client/modding approach, and we do not recommend jailbreak or sideload workarounds.",
      },
      {
        q: "Why does Android say there was a problem parsing the package?",
        short: "Your device must be on Android 9.0 or newer, and the APK must come from an official source.",
        a: "Flarial's Android build requires Android 9.0 or newer. Android 8 and older can fail with 'There was a problem parsing the package' even if Play Protect is disabled. Check your Android version, update the device OS if possible, and re-download Flarial from the official source. If the device cannot update past Android 8, that mobile build will not install on that device.",
      },
      {
        q: "Why does Android Zoom leave my FOV stuck low?",
        short: "Try the quick perspective button after unzooming, then update/relaunch and report it if it persists.",
        a: "On Android, Zoom can sometimes return to a lower FOV instead of the original value after unzooming. The reported workaround is to tap the quick perspective button after unzooming; if that snaps the view back, use it until a newer build fixes the state. If it still happens after updating and relaunching, report your Android version, Flarial version, and a short clip.",
      },
      {
        q: "Why do Android OTG keybinds not fire?",
        short: "Some mobile binds need both options enabled in the keybind editor before OTG input works.",
        a: "If a module keybind works from touch input but not from an attached keyboard or mouse, open that module's keybind settings and enable both options shown for the bind, then test again with the keyboard/mouse attached through OTG. If it still does not trigger, send support a screenshot of the keybind configuration.",
      },
      {
        q: "How do I downgrade Minecraft on Android?",
        short: "Follow the official support tutorial when Android needs an older supported Minecraft build.",
        a: "If the current Android client requires an older supported Minecraft build, follow the support tutorial here: https://youtu.be/Lbu2rQDIPzU. Only use trusted sources and avoid random patched Minecraft APKs or reposted Flarial APKs.",
      },
      {
        q: "How do I become a Flarial mobile tester?",
        short: "Use official tester forms/pins only, and wait if applications are closed.",
        a: "If tester applications are open, use the official tester form or pinned tester instructions. If applications are closed, wait for a public release or the next tester opening. Do not use unofficial Android app links or third-party mirrors. If the form asks whether you have a PC, answer honestly.",
      },
    ],
  },
  {
    title: "Modules, HUD & Settings",
    description: "Using modules, moving HUD elements, configs, themes, and common module behavior.",
    entries: [
      {
        q: "Can I script my own modules?",
        short: "Yes. Flarial supports Lua scripting through the Scripts area.",
        a: "Yes. The Scripts tab in the ClickGUI hosts Lua-based community modules through the Script Marketplace. Use the official docs and launcher/client repositories for the current API surface.",
      },
      {
        q: "Flarial launched, but nothing shows or K does not open the menu. What do I do?",
        short: "Restart, join a world, press K, then rebind or reset config if needed.",
        a: "Close Minecraft completely, reopen it through the Flarial launcher, join a world or server, then press K. If K still does not open ClickGUI, run .bind clickgui K in chat and try again. Make sure your HUD modules are enabled and on-screen. If the UI is still invisible, reset or delete your Flarial config and relaunch; this resets your settings.",
      },
      {
        q: "How do I move FPS, CPS, Keystrokes, or other HUD modules?",
        short: "Open K, enter HUD edit mode with L or the pen icon, then drag modules.",
        a: "Join a world or server with Flarial injected, open the menu with K, then press L while the menu is open or click the pen/edit icon to enter HUD edit mode. Drag the HUD modules where you want them, then close edit mode. If K does not open the menu, fix ClickGUI first.",
      },
      {
        q: "How do I import Flarial config files?",
        short: "Put .flarial files in %localappdata%\\Flarial\\Client\\Config.",
        a: "Press Win + R, paste %localappdata%\\Flarial\\Client\\Config, and press Enter. Put the downloaded .flarial config file in that folder, then relaunch Minecraft/Flarial or reopen the config menu. If it still does not show, make sure the file is actually a .flarial config and not a zip or wrapper file.",
      },
      {
        q: "Why do my Flarial settings reset every time I open Minecraft?",
        short: "Check config saving, close cleanly, and reset config if the saved state is corrupted.",
        a: "First, change one small setting, close Minecraft and the launcher normally, then reopen and check whether it saved. If nothing saves, make sure antivirus or controlled-folder access is not blocking Flarial's config folder. If only some settings are broken or the client crashes before saving, export any configs you care about, then reset or delete the Flarial config folder and set things up again.",
      },
      {
        q: "Can I add or change module keybinds outside a world?",
        short: "Best practice is to edit keybinds after joining a world/server.",
        a: "Some keybind editing is safest after joining a world/server with Flarial injected because the ClickGUI and module state are fully loaded there. Join a world, press K, open the module, then set the keybind. If keybind editing crashes, clear config and report the module/key.",
      },
      {
        q: "How do I change the Flarial menu / ClickGUI colors?",
        short: "Open the ClickGUI module settings and adjust theme/color options.",
        a: "Open Flarial with K, open the ClickGUI module settings, then adjust the available color/theme settings there. This changes Flarial’s in-game menu, not Minecraft resource packs or Discord name colors.",
      },
      {
        q: "Why are some modules missing in beta builds?",
        short: "New Minecraft builds can temporarily disable modules until hooks are updated.",
        a: "Beta/new Minecraft builds can temporarily miss modules while hooks, signatures, or UI pieces are being updated. That is normal during update windows. Use the last stable supported build if you need the missing module right now, or wait for the next Flarial update.",
      },
      {
        q: "Armor HUD shows wrong durability. Is my armor broken?",
        short: "Usually no; on some builds Armor HUD durability can be a display bug.",
        a: "No. On some 26.20/26.2x builds, Armor HUD durability can display wrong values. The inventory durability is the safer source of truth. Disable Armor HUD or use the last stable supported version if you need accurate HUD durability.",
      },
      {
        q: "Why does Hive Utils or Hive Statistics not show stats?",
        short: "Hive stats can depend on API access, setup, or an external service being up.",
        a: "Some Hive features depend on Hive API access and may need a valid API key or a working external stats service. If only rejoin works but stats do nothing, check whether the feature currently requires setup or if the API is down. If it still fails, report it with your module settings and what Hive mode you tested.",
      },
      {
        q: "Can I disable promos or ads inside the client?",
        short: "Disable client promos in settings if the option is available.",
        a: "If a promotion/client message option is available in settings, disable it there. The website may still show ads to help pay hosting/CDN costs, but the client and launcher do not have a paid tier or cosmetics paywall.",
      },
      {
        q: "Why is there a red border around my screen?",
        short: "That is usually Low Health Indicator.",
        a: "That is usually the Low Health Indicator module. Disable Low Health Indicator or adjust its settings if you do not want the warning border. It is a visual warning, not a crash or Minecraft damage bug.",
      },
      {
        q: "What is Shader Loader for?",
        short: "It loads supported custom RenderDragon shader files and is optional.",
        a: "Shader Loader is for loading supported custom RenderDragon shader files. It is optional and more advanced than normal Flarial settings. If you do not know what shader file you are loading, leave it alone.",
      },
      {
        q: "Zoom toggle resets when I open inventory or a GUI. What should I do?",
        short: "Update/restart first; report it if it still happens on the latest build.",
        a: "Restart Minecraft and the Flarial launcher to pull the latest client update, then test again. If it still happens on the newest build with a fresh config, report your Minecraft version, Flarial version, and whether Zoom is set to toggle or hold.",
      },
    ],
  },
  {
    title: "Troubleshooting & Crashes",
    description: "Crashes, freezes, graphics problems, input issues, and module-specific fixes.",
    entries: [
      {
        q: "What should I do if Minecraft freezes or crashes after leaving a server or enabling Better Frames?",
        short: "Restart/update first; disable Better Frames/VSync Disabler if they caused it.",
        a: "Close Minecraft and the Flarial launcher completely, reopen the launcher so it can pull the latest client update, then retest. If the issue started after enabling Better Frames or VSync Disabler, leave those disabled for now. If Minecraft cannot stay open, run .clearconfig if available or delete the Flarial config folder, then relaunch. If it still happens, use the last staff-recommended stable Minecraft version and send logs in support.",
      },
      {
        q: "My Minecraft HUD disappeared after injecting. Is Flarial broken?",
        short: "Check F1/Minecraft HUD settings first, then troubleshoot Flarial overlays.",
        a: "First check whether the vanilla Minecraft HUD is hidden. Press F1 or check Minecraft video/HUD settings. If only Flarial overlays are missing, use the ClickGUI/HUD troubleshooting steps instead. If both Minecraft and Flarial UI are gone after injection, restart Minecraft and send logs if it keeps happening.",
      },
      {
        q: "Can custom DLLs or third-party mods break Flarial?",
        short: "Yes. Test with only official Flarial first.",
        a: "Yes. Custom DLLs, other injectors, overlays, or third-party native mods can conflict with Flarial and stop it from opening or make Minecraft crash. Test with only the official Flarial launcher/client first. If that works, add custom DLLs back one at a time so you can identify the conflict.",
      },
      {
        q: "Minecraft crashes after I select a custom font. How do I fix it?",
        short: "Remove the custom font setting or reset config.",
        a: "Reset your Flarial config or remove the custom font setting from the config, then relaunch. Some fonts can crash or fail to render correctly. After recovering, use a normal/common font and avoid re-selecting the font that caused the crash.",
      },
      {
        q: "Minecraft crashes when I press a Flarial keybind. What should I do?",
        short: "Clear config, then recreate keybinds carefully.",
        a: "Clear or reset your Flarial config, then set your keybinds again. Broken or old keybind entries can crash newer builds. If the crash happens after binding one specific module, report the module name, the key, your Minecraft version, and logs.",
      },
      {
        q: "Minecraft crashes when I hit someone or get hit. What module should I check?",
        short: "Disable Insta Hurt Animation first, then Hurt Color if needed.",
        a: "Disable Insta Hurt Animation first. If it still crashes, also disable Hurt Color and retest combat. If you cannot open settings, reset your Flarial config, then report your Minecraft version and enabled combat/visual modules.",
      },
      {
        q: "Why is my FPS stuck at 60?",
        short: "Check VSync, display refresh rate, GPU caps, and FPS-related modules.",
        a: "Check Minecraft VSync, Windows display refresh rate, GPU control panel limits, and any Flarial FPS/VSync-related modules. NVIDIA users should also check the NVIDIA Control Panel for max frame rate or VSync overrides. Some current builds may not bypass the FPS cap reliably without unstable modules, so use the stable recommended build if needed.",
      },
      {
        q: "My game says high FPS but mouse/camera movement feels stuttery.",
        short: "Close the launcher after injection and test lower mouse polling rates.",
        a: "This can be raw mouse throttling or very high polling-rate mouse issues. After Flarial injects, close the launcher and leave Minecraft open. If your mouse supports 4K/8K polling, test at 1K or lower. Advanced registry fixes should only be used if staff/support recommends them.",
      },
      {
        q: "Flarial partially works, but HUD/ClickGUI does not show and logs mention D3D11On12 or DX12.",
        short: "That is likely a graphics/UI hook problem; update drivers and send logs.",
        a: "Update GPU drivers, reboot, disable Better Frames/VSync Disabler and third-party overlays, then test again. If logs still mention D3D11On12/DX12 device failures, send the full Flarial logs to support because it is likely a graphics/UI hook issue.",
      },
      {
        q: "Minecraft opens on the wrong monitor. How can I fix it?",
        short: "Move it to the desired monitor and set that monitor as primary.",
        a: "Move Minecraft to the monitor you want, set that display as your main monitor in Windows, then relaunch Minecraft and Flarial. If Minecraft keeps choosing the wrong screen, check Windows display settings and any GPU control-panel display overrides.",
      },
      {
        q: "Hive textures look corrupted or broken. What should I try?",
        short: "Clear Hive/resource-pack cache and rejoin so packs redownload.",
        a: "Clear the affected Hive/resource-pack cache, restart Minecraft, and rejoin Hive so the pack can redownload. If it only happens with Flarial injected, test without other packs or custom DLLs and report your Minecraft version plus screenshots.",
      },
      {
        q: "Why do Java Hotkeys not work with my texture pack?",
        short: "Some texture/UI packs conflict; test with the pack disabled.",
        a: "Some texture packs or UI packs replace controls in ways that can conflict with Java Hotkeys. Test with the pack disabled first. If the hotkeys work without the pack, the pack is the conflict; use a different pack or report the pack name and exact hotkey that fails.",
      },
      {
        q: "What should I do if Waila crashes when entering a world?",
        short: "Disable Waila and report details if that fixes it.",
        a: "Disable Waila, relaunch, and test the same world again. If the crash stops, keep Waila disabled until a fix ships and report the Minecraft version, world/server, and what you were looking at when it crashed.",
      },
      {
        q: "What should I do if Compact Chat crashes?",
        short: "Disable Compact Chat or clear config if you cannot open the game.",
        a: "Disable Compact Chat and relaunch. If Minecraft cannot stay open long enough to disable it, clear your Flarial config. Include your Minecraft version and any chat messages/server where the crash happens when reporting it.",
      },
      {
        q: "What should I do if Skin Stealer crashes?",
        short: "Disable Skin Stealer and update before retrying.",
        a: "Disable Skin Stealer and update to the latest Flarial build. If it still crashes, report the player/skin type if relevant, your Minecraft version, and logs. Do not keep retrying the same crash loop with the module enabled.",
      },
      {
        q: "Why does Flarial work on one server/world but not another?",
        short: "Server packs, UI packs, and specific worlds can affect modules.",
        a: "Some bugs only happen on specific servers, resource packs, UI packs, or Minecraft versions. Test in a normal world with default packs first. If it only breaks on one server, report the server, pack, module, and steps.",
      },
    ],
  },
  {
    title: "Support, Reports & Community",
    description: "How to ask for help, report bugs, and use community-related features.",
    entries: [
      {
        q: "What should I include when reporting a crash or bug?",
        short: "Send versions, steps, screenshots/video, related modules, and logs.",
        a: "Include your Minecraft Bedrock version, Flarial launcher/client version, whether you are on Windows or Android, what you clicked right before it broke, enabled modules that might be related, screenshots or screen recordings, and any crash logs or launcher logs. For crashes, explain whether it happens on launch, injection, joining a world/server, leaving a server, or pressing a keybind.",
      },
      {
        q: "How do I report a bug?",
        short: "Use GitHub issues or Discord support with clear reproduction steps.",
        a: "GitHub issues at flarialmc/dll for client bugs and flarialmc/launcher for launcher bugs are preferred for detailed reports. Include your Bedrock version, launcher/client version, platform, screenshots/logs, and clear steps to reproduce. For quick help, Discord support is usually faster.",
      },
      {
        q: "What should I do before asking support?",
        short: "Restart, verify version support, remove conflicts, and collect evidence.",
        a: "Try restarting Minecraft and the launcher, confirm your Minecraft version is supported, test with default packs and no custom DLLs, disable the module that seems related, and collect screenshots or logs. Then ask with exact steps instead of just saying help.",
      },
      {
        q: "How do I get a Flarial name color or icon?",
        short: "Name colors/icons come from roles like booster, supporter, media, staff, or developer.",
        a: "Name colors/icons are tied to Flarial roles such as default user, booster, supporter, media, staff, or developer. For supporter perks, link the required account/payment source if instructed and run the claim command exactly as shown in Discord. Role names, capitalization, and spaces matter.",
      },
    ],
  },
];

const entries = CATEGORIES.flatMap((category) => category.entries);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: entries.map((e) => ({
    "@type": "Question",
    name: e.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: `${e.short} ${e.a}`,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <header className="mb-10 max-w-2xl">
        <h1 className="font-display text-[40px] font-semibold leading-[0.98] tracking-[-0.02em] text-white sm:text-[56px]">
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
      <FAQ categories={CATEGORIES} />
    </div>
  );
}
