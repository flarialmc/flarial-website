"use client";

import { useMemo, useState } from "react";

export type TeamMember = {
  name: string;
  commits: number;
  repos: { name: string; commits: number }[];
};

type TeamGridProps = {
  members: TeamMember[];
};

export function TeamGrid({ members }: TeamGridProps) {
  const [selectedName, setSelectedName] = useState(members[0]?.name ?? "");

  const selectedMember = useMemo(
    () => members.find((member) => member.name === selectedName) ?? members[0],
    [members, selectedName],
  );

  return (
    <>
      {selectedMember ? (
        <section
          className="mt-10 rounded-[24px] border border-white/8 p-5 sm:p-6"
          style={{
            background: "rgba(24, 20, 22, 0.76)",
            boxShadow: "var(--shadow-rest)",
          }}
          aria-live="polite"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-[16px] bg-white/5">
                <img
                  src={`https://github.com/${selectedMember.name}.png?size=112`}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-[24px] font-semibold leading-tight text-white">
                  {selectedMember.name}
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase text-[var(--color-text-mute)]" style={{ letterSpacing: "0.22em" }}>
                  {selectedMember.commits.toLocaleString()} commits
                </span>
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase text-[var(--color-text-mute)]" style={{ letterSpacing: "0.22em" }}>
              Top repositories
            </span>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            {selectedMember.repos.length > 0 ? (
              selectedMember.repos.slice(0, 8).map((repo) => {
                const percent = selectedMember.commits > 0 ? Math.max((repo.commits / selectedMember.commits) * 100, 3) : 0;

                return (
                  <div key={repo.name} className="min-w-0">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="truncate font-display text-[14px] font-semibold text-white">{repo.name}</span>
                      <span className="shrink-0 font-mono text-[10px] uppercase text-[var(--color-text-mute)]" style={{ letterSpacing: "0.16em" }}>
                        {repo.commits.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/8">
                      <div className="h-full rounded-full bg-[var(--color-accent)]" style={{ width: `${percent}%` }} />
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-[14px] text-[var(--color-text-mute)]">
                No matched repository commits in the counted default branches.
              </p>
            )}
          </div>
        </section>
      ) : null}

      <section className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {members.map((member) => {
          const isSelected = member.name === selectedMember?.name;

          return (
            <button
              key={member.name}
              type="button"
              onClick={() => setSelectedName(member.name)}
              className="group flex min-h-[80px] items-center gap-3 rounded-[20px] px-4 py-4 text-left transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              style={{
                background: isSelected ? "rgba(255, 48, 72, 0.16)" : "var(--color-bg-nav)",
                boxShadow: isSelected ? "0 0 0 1px rgba(255, 48, 72, 0.42), var(--shadow-rest)" : "var(--shadow-rest)",
              }}
              aria-pressed={isSelected}
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
            </button>
          );
        })}
      </section>
    </>
  );
}
