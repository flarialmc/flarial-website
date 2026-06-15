import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the people behind Flarial.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Flarial Team",
    description: "A small group of developers and designers shipping Flarial weekly.",
    type: "website",
    url: "https://flarial.xyz/team",
  },
};

const MEMBERS = [
  { name: "TheBarii", commits: 1493 },
  { name: "Melvin1663", commits: 587 },
  { name: "FreezeEngine", commits: 360 },
  { name: "oAnshull", commits: 177 },
  { name: "Withors", commits: 156 },
  { name: "treegfx", commits: 154 },
  { name: "prathfr", commits: 149 },
  { name: "TTF-fog", commits: 131 },
  { name: "oHatless", commits: 94 },
  { name: "St0neHunter", commits: 78 },
  { name: "Indig0r", commits: 63 },
  { name: "marioCST", commits: 45 },
  { name: "AnhNguyenlost13", commits: 44 },
  { name: "wh8te", commits: 37 },
  { name: "aShanki", commits: 24 },
  { name: "EpiclyRaspberry", commits: 23 },
  { name: "notchyves", commits: 19 },
  { name: "Roqsh-dev", commits: 18 },
  { name: "MBG1337", commits: 16 },
  { name: "Trixie0", commits: 15 },
  { name: "MarialenaHax", commits: 13 },
  { name: "hiimghostine", commits: 11 },
  { name: "Aetopia", commits: 8 },
  { name: "ambiennt", commits: 6 },
  { name: "BoredSathvik", commits: 4 },
  { name: "kmaba", commits: 2 },
  { name: "xBeastMode", commits: 2 },
  { name: "Zgoly", commits: 2 },
  { name: "ItzCandra23", commits: 2 },
  { name: "AkmalFairuz", commits: 1 },
  { name: "ApelBarakDev", commits: 1 },
  { name: "ttffog", commits: 1 },
  { name: "Strebus", commits: 1 },
  { name: "ISBP", commits: 1 },
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
          A small group of developers and designers shipping Flarial weekly.
        </p>
      </header>

      <section className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {MEMBERS.map((member) => (
          <article
            key={member.name}
            className="group flex min-h-[80px] items-center gap-3 rounded-[20px] px-4 py-4 transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--color-bg-nav)",
              boxShadow: "var(--shadow-rest)",
            }}
          >
            <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-[14px] bg-white/5">
              <img
                src={`https://github.com/${member.name}.png?size=96`}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-[14px] font-semibold text-white">
                {member.name}
              </span>
              <span className="mt-1 block font-mono text-[9.5px] uppercase text-[var(--color-text-mute)]" style={{ letterSpacing: "0.22em" }}>
                {member.commits.toLocaleString()} commits
              </span>
            </span>
          </article>
        ))}
      </section>
    </main>
  );
}
