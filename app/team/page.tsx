import type { Metadata } from "next";
import { DISCORD_ROLE_MEMBERS, TEAM_ROLE_BADGES } from "./discord-role-snapshot";
import { TeamGrid, type TeamMember, type TeamRoleBadge } from "./TeamGrid";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the developers, designers, and marketing members behind Flarial.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Flarial Team",
    description: "A small group of developers, designers, and marketing members shipping Flarial weekly.",
    type: "website",
    url: "https://flarial.xyz/team",
  },
};

const LEGACY_MEMBERS: TeamMember[] = [
  { name: "TheBarii", role: "Developer", commits: 3685, repos: [{ name: "dll-oss", commits: 1493 }, { name: "dll-gpl", commits: 1192 }, { name: "launcher", commits: 317 }, { name: "cdn", commits: 301 }, { name: "newcdn", commits: 174 }, { name: "akairo", commits: 69 }, { name: "api", commits: 44 }, { name: "Flarial-V2", commits: 27 }], description: "Executive", roleIconSrc: "https://cdn.discordapp.com/attachments/779960572451487764/1516070913857028106/download_2.png?ex=6a314e91&is=6a2ffd11&hm=29f083a4ac24f2bc50338dcbf312c807b270ef731155f5c03b976dc0cc063cdb" },
  { name: "Melvin1663", role: "Developer", commits: 1346, repos: [{ name: "dll-oss", commits: 587 }, { name: "dll-gpl", commits: 257 }, { name: "bot", commits: 251 }, { name: "dll-css", commits: 101 }, { name: "cdn", commits: 59 }, { name: "api", commits: 44 }, { name: "newcdn", commits: 23 }, { name: "flarial-website", commits: 8 }] },
  { name: "aShanki", role: "Developer", commits: 1291, repos: [{ name: "web-services", commits: 383 }, { name: "api-golang", commits: 244 }, { name: "dll-css", commits: 146 }, { name: "bot-golang", commits: 146 }, { name: "scripting-marketplace", commits: 121 }, { name: "flarial-website", commits: 72 }, { name: "android", commits: 49 }, { name: "cdn", commits: 39 }], description: "Executive", roleIconSrc: "https://cdn.discordapp.com/attachments/779960572451487764/1516070913857028106/download_2.png?ex=6a314e91&is=6a2ffd11&hm=29f083a4ac24f2bc50338dcbf312c807b270ef731155f5c03b976dc0cc063cdb" },
  { name: "Aetopia", role: "Developer", commits: 1109, repos: [{ name: "launcher", commits: 813 }, { name: "Flarial.Launcher.SDK", commits: 160 }, { name: "bootstrapper", commits: 70 }, { name: "newcdn", commits: 34 }, { name: "game-launch-helper", commits: 9 }, { name: "dll-gpl", commits: 8 }, { name: "dll-oss", commits: 8 }, { name: "dll-css", commits: 4 }] },
  { name: "FreezeEngine", role: "Developer", commits: 911, repos: [{ name: "dll-oss", commits: 360 }, { name: "dll-gpl", commits: 360 }, { name: "cdn", commits: 84 }, { name: "newcdn", commits: 80 }, { name: "dll-css", commits: 17 }, { name: "Flarial-V2", commits: 10 }] },
  { name: "oAnshull", role: "Developer", commits: 796, repos: [{ name: "dll-oss", commits: 294 }, { name: "dll-gpl", commits: 220 }, { name: "dll-css", commits: 144 }, { name: "android", commits: 34 }, { name: "newcdn", commits: 32 }, { name: "Flarial-V2", commits: 31 }, { name: "cdn", commits: 19 }, { name: "akairo", commits: 11 }], description: "Executive", roleIconSrc: "https://cdn.discordapp.com/attachments/779960572451487764/1516070913857028106/download_2.png?ex=6a314e91&is=6a2ffd11&hm=29f083a4ac24f2bc50338dcbf312c807b270ef731155f5c03b976dc0cc063cdb" },
  { name: "Withors", role: "Developer", commits: 381, repos: [{ name: "dll-oss", commits: 156 }, { name: "dll-gpl", commits: 156 }, { name: "scripting-wiki", commits: 35 }, { name: "scripting-vscode-extension", commits: 29 }, { name: "Microsoft-Flarial-Defender", commits: 4 }, { name: "Flarial-RP", commits: 1 }] },
  { name: "TTF-fog", role: "Developer", commits: 379, repos: [{ name: "dll-oss", commits: 132 }, { name: "dll-gpl", commits: 131 }, { name: "launcher", commits: 47 }, { name: "api", commits: 44 }, { name: "newcdn", commits: 13 }, { name: "flarial-website", commits: 8 }, { name: "scripting-wiki", commits: 4 }] },
  { name: "prathfr", role: "Developer", commits: 353, repos: [{ name: "dll-oss", commits: 204 }, { name: "dll-gpl", commits: 64 }, { name: "dll-css", commits: 48 }, { name: "scripts", commits: 12 }, { name: "scripting-wiki", commits: 9 }, { name: "newcdn", commits: 6 }, { name: "scripting-marketplace", commits: 5 }, { name: "bot-golang", commits: 4 }] },
  { name: "treegfx", role: "Developer", commits: 289, repos: [{ name: "dll-oss", commits: 154 }, { name: "dll-gpl", commits: 134 }, { name: "scripting-wiki", commits: 1 }] },
  { name: "MBG1337", role: "Developer", commits: 284, repos: [{ name: "scripting-marketplace", commits: 163 }, { name: "scripts", commits: 28 }, { name: "website", commits: 25 }, { name: "dll-oss", commits: 16 }, { name: "dll-gpl", commits: 16 }, { name: "AbilityDuels", commits: 11 }, { name: "bot", commits: 7 }, { name: "newcdn", commits: 5 }] },
  { name: "wh8te", role: "Developer", commits: 238, repos: [{ name: "android", commits: 79 }, { name: "dll-css", commits: 64 }, { name: "dll-oss", commits: 49 }, { name: "dll-gpl", commits: 41 }, { name: "newcdn", commits: 4 }, { name: "akairo", commits: 1 }], description: "Executive", roleIconSrc: "https://cdn.discordapp.com/attachments/779960572451487764/1516070913857028106/download_2.png?ex=6a314e91&is=6a2ffd11&hm=29f083a4ac24f2bc50338dcbf312c807b270ef731155f5c03b976dc0cc063cdb" },
  { name: "EpiclyRaspberry", role: "Developer", commits: 202, repos: [{ name: "bot", commits: 100 }, { name: "android", commits: 28 }, { name: "dll-oss", commits: 23 }, { name: "scripting-wiki", commits: 17 }, { name: "api", commits: 17 }, { name: "dll-gpl", commits: 7 }, { name: "bot-golang", commits: 3 }, { name: "web-services", commits: 3 }] },
  { name: "Indig0r", role: "Developer", commits: 126, repos: [{ name: "dll-gpl", commits: 63 }, { name: "dll-oss", commits: 63 }] },
  { name: "AnhNguyenlost13", role: "Developer", commits: 44, repos: [{ name: "dll-oss", commits: 44 }] },
];

function normalizeMemberKey(member: TeamMember) {
  return member.name.toLowerCase();
}

const DEVELOPER_BADGE: TeamRoleBadge = {
  id: "Developer",
  label: "Developer",
  color: "#4cadd0",
  iconSrc: "/team-icons/developer.png",
};

function mergeBadges(current: TeamRoleBadge[] = [], incoming: TeamRoleBadge[] = []) {
  const seen = new Set<string>();
  return [...current, ...incoming].filter((badge) => {
    const key = badge.id || badge.label;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function withDeveloperBadge(member: TeamMember): TeamMember {
  if (typeof member.commits !== "number") return member;
  return { ...member, badges: mergeBadges(member.badges, [DEVELOPER_BADGE]) };
}

function mergeTeamMembers(...groups: TeamMember[][]): TeamMember[] {
  const members = new Map<string, TeamMember>();

  for (const group of groups) {
    for (const member of group) {
      const key = normalizeMemberKey(member);
      const current = members.get(key);

      if (!current) {
        members.set(key, withDeveloperBadge({ ...member, badges: mergeBadges([], member.badges) }));
        continue;
      }

      members.set(key, withDeveloperBadge({
        ...current,
        ...member,
        commits: current.commits ?? member.commits,
        repos: current.repos ?? member.repos,
        avatarUrl: member.avatarUrl ?? current.avatarUrl,
        description: member.description ?? current.description,
        role: member.role ?? current.role,
        badges: mergeBadges(current.badges, member.badges),
      }));
    }
  }

  return Array.from(members.values());
}

const MEMBERS = mergeTeamMembers(LEGACY_MEMBERS, DISCORD_ROLE_MEMBERS);

export default function TeamPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
      <header className="max-w-2xl">
        <div className="mb-5 font-mono text-[10px] uppercase text-[var(--color-accent)]" style={{ letterSpacing: "0.32em" }}>
          The people behind Flarial
        </div>
        <h1 className="font-display text-[52px] font-semibold leading-none text-white sm:text-[64px]">
          Flarial’s Team
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-text-mute)] sm:text-[16px]">
          A small group of developers, designers, and marketing members shipping Flarial weekly.
        </p>
      </header>

      <TeamGrid members={MEMBERS} roleBadges={TEAM_ROLE_BADGES} />

      <div className="mt-14 flex justify-center">
        <a
          href="/team/contributors"
          className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-display text-[13px] text-white transition-colors hover:border-white/20 hover:bg-white/[0.08]"
        >
          View general contributors
        </a>
      </div>
    </main>
  );
}
