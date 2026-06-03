import { HelpCircle } from "lucide-react";
import type { DocsArticle } from "../docs-types";
import {
  DocsHeading,
  InfoCard,
  InlineCode,
  Link,
  ShieldCheck,
  sectionFrameClass,
} from "./article-kit";

export const generalQuestionsArticle: DocsArticle = {
  slug: "general-questions",
  title: "General Questions",
  summary: "Is Flarial a cheat client? Name colors, Discord roles, and other common questions.",
  icon: HelpCircle,
  toc: [
    { title: "Is Flarial a cheat client?", href: "#flarial-is-not-a-cheat-client" },
    { title: "Getting a name color", href: "#flarial-name-color-claimrole" },
  ],
  render: () => (
    <>
      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="flarial-is-not-a-cheat-client">Is Flarial a cheat client?</DocsHeading>
        <p>
          No. Flarial is a quality-of-life client, not a hacked or cheat client. It is built for
          customization, visuals, HUD control, and performance tweaks, not for cheating or bypassing
          server rules. It is not illegal or inherently bannable.
        </p>
        <p>
          Flarial does not include cheat modules. There is no Storage ESP, X-ray, or other feature that
          highlights chests or containers through walls, and no aimbot or kill-aura style modules. If a
          screenshot or video shows that kind of functionality, it is coming from a different modification
          or hacked client, not from Flarial.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Flarial focuses on quality-of-life, visual, HUD, and performance modules.</li>
          <li>It does not provide Storage ESP, X-ray, or any cheat-like features.</li>
          <li>
            Features that could give an unfair advantage, such as freelook, are disabled by default on
            servers.
          </li>
          <li>Flarial support only covers Flarial. Issues from other modifications are out of scope.</li>
          <li>
            You are still responsible for following the rules of any server you play on. Server rules can
            change, and no module is guaranteed to be approved on every server forever.
          </li>
        </ul>
        <InfoCard icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />} title="Why servers allow Flarial">
          <p>
            Because Flarial ships quality-of-life and cosmetic features rather than cheats, and gates
            advantage-granting options behind server-aware defaults, it stays within the rules of most
            servers. Always check the rules of the specific server you join.
          </p>
        </InfoCard>
      </section>
      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="flarial-name-color-claimrole">Getting a name color</DocsHeading>
        <p>
          Want a pink, green, or other colored Flarial name tag in game? Colored name tags come from
          Discord roles, but the color only shows up in Minecraft once your Minecraft account is linked.
          Boosting the Discord server or holding a role on its own is not enough; the account still has to
          be linked.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Run <InlineCode>/claimrole</InlineCode> in the bot commands channel of our{" "}
            <Link
              href="https://discord.gg/flarial"
              className="font-semibold text-white underline decoration-[var(--color-accent)] decoration-2 underline-offset-4"
            >
              Discord server
            </Link>{" "}
            to link your Minecraft account.
          </li>
          <li>
            Enter your Minecraft username exactly as it appears in game. It is case-sensitive, so the
            capitalization must match.
          </li>
          <li>
            Check the pinned explanation in the name-color / support channel for which roles map to which
            colors.
          </li>
          <li>
            If the color still does not appear, double-check the exact capitalization of your Minecraft
            username and run the claim flow again.
          </li>
        </ul>
      </section>
    </>
  ),
};
