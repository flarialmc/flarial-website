import type { Metadata } from "next";
import { FAQ } from "./FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about Flarial — install, safety, modules, and contributions.",
};

const ENTRIES = [
  {
    q: "Is Flarial free?",
    a: "Yes. No paid tier, no cosmetics paywall, no ads. Forever.",
  },
  {
    q: "Is it safe? Will I get banned?",
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
    a: "Android is in closed beta — join the Discord and we'll add you to the next release wave. iOS is not supported and is not planned (Apple sandbox blocks injection).",
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

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
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
