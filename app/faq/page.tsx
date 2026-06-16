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
