"use client";

import { useMemo, useState } from "react";

export type TeamMember = {
  name: string;
  role?: "Developer" | "Designer" | "Marketing";
  commits?: number;
  repos?: { name: string; commits: number }[];
  avatarUrl?: string;
  description?: string;
  roleIconSrc?: string;
};

const ROLE_DETAILS = {
  Developer: {
    label: "Developer",
    icon: "💻",
    background: "var(--color-bg-panel)",
    color: "#4cadd0",
    iconSrc: "/team-icons/developer.png",
    avatarFallback: "/team-icons/developer.png",
  },
  Designer: {
    label: "Designer",
    icon: "🎨",
    background: "var(--color-bg-panel)",
    color: "#3CFF7A",
    iconSrc: "/team-icons/designer.png",
    avatarFallback: "/team-icons/designer.png",
  },
  Marketing: {
    label: "Marketing",
    icon: "📣",
    background: "var(--color-bg-panel)",
    color: "#0A6DFF",
    iconSrc: "/team-icons/marketing.png",
    avatarFallback: "/team-icons/marketing.png",
  },
} as const;

type TeamGridProps = {
  members: TeamMember[];
};

export function TeamGrid({ members }: TeamGridProps) {
  const [selectedName, setSelectedName] = useState(members[0]?.name ?? "");

  const selectedMember = useMemo(
    () => members.find((member) => member.name === selectedName) ?? members[0],
    [members, selectedName],
  );

  const selectedRoleKey = (selectedMember.role ?? (typeof selectedMember.commits === "number" ? "Developer" : "Developer")) as keyof typeof ROLE_DETAILS;
  const selectedRole = ROLE_DETAILS[selectedRoleKey];
  const selectedRoleIcon = selectedMember.roleIconSrc ?? selectedRole.iconSrc;
  const selectedAvatar = selectedMember.avatarUrl
    ? selectedMember.avatarUrl
    : selectedRoleKey === "Developer"
      ? `https://github.com/${selectedMember.name}.png?size=112`
      : selectedRole.avatarFallback;
  const selectedDescription = selectedMember.description;
  const hasCommitData = typeof selectedMember.commits === "number";
  const hasRepoData = selectedMember.repos?.length ? true : false;

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
                  src={selectedAvatar}
                  alt="Role avatar"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="min-w-0">
                <span className="inline-flex min-w-0 items-center gap-2">
                  <img src={selectedRoleIcon} alt={`${selectedRole.label} icon`} className="h-6 w-6" />
                  <span className="truncate font-display text-[24px] font-semibold leading-tight text-white">
                    {selectedMember.name}
                  </span>
                </span>
                {selectedDescription ? (
                  <div className="mt-0.5">
                    <span className="font-mono text-[10px] uppercase text-[var(--color-text-mute)]" style={{ letterSpacing: "0.22em" }}>
                      {selectedDescription}
                    </span>
                  </div>
                ) : null}
                {hasCommitData ? (
                  <div className="mt-1">
                    <span className="font-mono text-[10px] uppercase text-[var(--color-text-mute)]" style={{ letterSpacing: "0.22em" }}>
                      {selectedMember.commits!.toLocaleString()} commits
                    </span>
                  </div>
                ) : null}
              </span>
            </div>
            {hasRepoData ? (
              <span className="font-mono text-[10px] uppercase text-[var(--color-text-mute)]" style={{ letterSpacing: "0.22em" }}>
                Top repositories
              </span>
            ) : null}
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            {hasRepoData ? (
              selectedMember.repos!.slice(0, 8).map((repo) => {
                const percent = hasCommitData ? Math.max((repo.commits / selectedMember.commits!) * 100, 3) : 0;

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
                {selectedMember.role === "Developer"
                  ? "No matched repository commits in the counted default branches."
                  : "This member is a role-only team member and is not represented by GitHub commit metrics."}
              </p>
            )}
          </div>
        </section>
      ) : null}

      <section className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {members.map((member) => {
          const isSelected = member.name === selectedMember?.name;
          const roleKey = (member.role ?? (typeof member.commits === "number" ? "Developer" : "Developer")) as keyof typeof ROLE_DETAILS;
          const role = ROLE_DETAILS[roleKey];
          const avatarSrc = member.avatarUrl
            ? member.avatarUrl
            : roleKey === "Developer"
              ? `https://github.com/${member.name}.png?size=96`
              : role.avatarFallback;

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
                  src={avatarSrc}
                  alt="Role avatar"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="min-w-0 mt-1">
                <span className="inline-flex min-w-0 items-end gap-2">
                  <img src={member.roleIconSrc ?? role.iconSrc} alt={`${role.label} icon`} className="h-5 w-5" />
                  <span className="truncate font-display text-[16px] font-semibold text-white mt-0.5">
                    {member.name}
                  </span>
                </span>
                <div className="mt-0">
                  <span className="font-mono text-[9.5px] uppercase text-[var(--color-text-mute)]" style={{ letterSpacing: "0.22em" }}>
                    {typeof member.commits === "number"
                      ? `${member.commits.toLocaleString()} commits`
                      : role.label}
                  </span>
                </div>
              </span>
            </button>
          );
        })}
      </section>
    </>
  );
}
