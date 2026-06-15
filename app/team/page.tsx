import type { Metadata } from "next";
import { TeamGrid, type TeamMember } from "./TeamGrid";

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

const MEMBERS: TeamMember[] = [
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
  { name: "oHatless", role: "Developer", commits: 212, repos: [{ name: "dll-gpl", commits: 94 }, { name: "dll-oss", commits: 94 }, { name: "scripting-wiki", commits: 19 }, { name: "scripts", commits: 5 }] },
  { name: "EpiclyRaspberry", role: "Developer", commits: 202, repos: [{ name: "bot", commits: 100 }, { name: "android", commits: 28 }, { name: "dll-oss", commits: 23 }, { name: "scripting-wiki", commits: 17 }, { name: "api", commits: 17 }, { name: "dll-gpl", commits: 7 }, { name: "bot-golang", commits: 3 }, { name: "web-services", commits: 3 }] },
  { name: "marioCST", role: "Developer", commits: 179, repos: [{ name: "Flarial-V2", commits: 89 }, { name: "dll-gpl", commits: 45 }, { name: "dll-oss", commits: 45 }] },
  { name: "St0neHunter", role: "Developer", commits: 153, repos: [{ name: "dll-oss", commits: 78 }, { name: "dll-gpl", commits: 70 }, { name: "dll-css", commits: 3 }, { name: "scripts", commits: 1 }, { name: "newcdn", commits: 1 }] },
  { name: "Indig0r", role: "Developer", commits: 126, repos: [{ name: "dll-gpl", commits: 63 }, { name: "dll-oss", commits: 63 }] },
  { name: "notchyves", role: "Developer", commits: 45, repos: [{ name: "dll-oss", commits: 19 }, { name: "dll-gpl", commits: 15 }, { name: "scripting-wiki", commits: 7 }, { name: "scripting-vscode-extension", commits: 3 }, { name: "Flarial-RP", commits: 1 }] },
  { name: "AnhNguyenlost13", role: "Developer", commits: 44, repos: [{ name: "dll-oss", commits: 44 }] },
  { name: "Trixie0", role: "Developer", commits: 30, repos: [{ name: "dll-gpl", commits: 15 }, { name: "dll-oss", commits: 15 }] },
  { name: "Roqsh-dev", role: "Developer", commits: 18, repos: [{ name: "dll-oss", commits: 18 }] },
  { name: "Strebus", role: "Developer", commits: 13, repos: [{ name: "scripts", commits: 11 }, { name: "dll-gpl", commits: 1 }, { name: "dll-oss", commits: 1 }] },
  { name: "MarialenaHax", role: "Developer", commits: 13, repos: [{ name: "dll-oss", commits: 13 }], avatarUrl: "https://cdn.discordapp.com/embed/avatars/0.png" },
  { name: "Zgoly", role: "Developer", commits: 9, repos: [{ name: "scripts", commits: 4 }, { name: "dll-gpl", commits: 2 }, { name: "dll-oss", commits: 2 }, { name: "scripting-marketplace", commits: 1 }] },
  { name: "BoredSathvik", role: "Developer", commits: 8, repos: [{ name: "dll-gpl", commits: 4 }, { name: "dll-oss", commits: 4 }] },
  { name: "ambiennt", role: "Developer", commits: 6, repos: [{ name: "dll-oss", commits: 6 }] },
  { name: "kmaba", role: "Developer", commits: 4, repos: [{ name: "dll-gpl", commits: 2 }, { name: "dll-oss", commits: 2 }] },
  { name: "xBeastMode", role: "Developer", commits: 4, repos: [{ name: "dll-gpl", commits: 2 }, { name: "dll-oss", commits: 2 }] },
  { name: "ItzCandra23", role: "Developer", commits: 2, repos: [{ name: "dll-oss", commits: 2 }] },
  { name: "AkmalFairuz", role: "Developer", commits: 1, repos: [{ name: "dll-oss", commits: 1 }] },
  { name: "ApelBarakDev", role: "Developer", commits: 1, repos: [{ name: "dll-oss", commits: 1 }] },
  { name: "ISBP", role: "Developer", commits: 1, repos: [{ name: "dll-oss", commits: 1 }] },
  { name: "zGqat", role: "Marketing", avatarUrl: "https://cdn.discordapp.com/attachments/779960572451487764/1516063682533130360/IMG_2014.PNG?ex=6a3147d5&is=6a2ff655&hm=e3c4cc998ed921a5600e59c922fb9eaf8a0012d5d7745e75b399ecc3c08b7b26" },
  { name: "tedyy", role: "Marketing", avatarUrl: "https://cdn.discordapp.com/attachments/779960572451487764/1516072026031259729/6d3084519adcaed03805f3c5f0426748.webp?ex=6a314f9a&is=6a2ffe1a&hm=1ee6e13d04453c2f12437ab5512637afbef3f891ef4648bdbb9b8e6e130a7657" },
  { name: "zzAdii", role: "Marketing", avatarUrl: "https://cdn.discordapp.com/attachments/1400876732633841756/1516073574111383693/cea0a440eb6b48f16505052de1f46a9b.webp?ex=6a31510b&is=6a2fff8b&hm=93c9067220c5cb45a7d237480f725236bb3bda9e676c96fe4a66543f4078c046" },
];

export default function TeamPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
      <header className="max-w-2xl">
        <div className="mb-5 font-mono text-[10px] uppercase text-[var(--color-accent)]" style={{ letterSpacing: "0.32em" }}>
          The people behind Flarial
        </div>
        <h1 className="font-display text-[52px] font-semibold leading-none text-white sm:text-[64px]">
          Team.
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-text-mute)] sm:text-[16px]">
          A small group of developers, designers, and marketing members shipping Flarial weekly.
        </p>
      </header>

      <TeamGrid members={MEMBERS} />
    </main>
  );
}
