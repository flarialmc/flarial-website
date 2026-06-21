"use client";

import { useMemo, useState, type SyntheticEvent } from "react";

export type TeamRole = "Developer" | "Designer" | "Marketing" | "Administrator" | "Executive" | "Volunteer Support";

export type TeamRoleBadge = {
  id: string;
  label: TeamRole | string;
  color: string;
  iconSrc?: string;
};

export type TeamMember = {
  name: string;
  role?: TeamRole;
  commits?: number;
  repos?: { name: string; commits: number }[];
  avatarUrl?: string;
  description?: string;
  roleIconSrc?: string;
  discordUserId?: string;
  discordUsername?: string;
  badges?: TeamRoleBadge[];
};

const ROLE_DETAILS: Record<TeamRole, {
  label: string;
  icon: string;
  background: string;
  color: string;
  iconSrc: string;
  avatarFallback: string;
}> = {
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
  Executive: {
    label: "Executive",
    icon: "👑",
    background: "var(--color-bg-panel)",
    color: "#992828",
    iconSrc: "/team-icons/executive.png",
    avatarFallback: "/team-icons/developer.png",
  },
  Administrator: {
    label: "Administrator",
    icon: "🛡️",
    background: "var(--color-bg-panel)",
    color: "#369876",
    iconSrc: "/team-icons/developer.png",
    avatarFallback: "/team-icons/developer.png",
  },
  "Volunteer Support": {
    label: "Volunteer Support",
    icon: "💬",
    background: "var(--color-bg-panel)",
    color: "#88d8ee",
    iconSrc: "/team-icons/marketing.png",
    avatarFallback: "/team-icons/marketing.png",
  },
};

const TEAM_ROLE_ORDER = ["Executive", "Administrator", "Developer", "Marketing", "Designer", "Volunteer Support"];

type TeamGridProps = {
  members: TeamMember[];
  snapshotUpdatedAt?: string;
  roleBadges?: TeamRoleBadge[];
};

function replaceBrokenImage(event: SyntheticEvent<HTMLImageElement>, fallbackSrc: string) {
  const image = event.currentTarget;
  if (image.src.endsWith(fallbackSrc)) return;
  image.src = fallbackSrc;
}

function replaceBrokenRoleIcon(event: SyntheticEvent<HTMLImageElement>) {
  const image = event.currentTarget;
  if (image.src.endsWith("/team-icons/developer.png")) return;
  image.src = "/team-icons/developer.png";
}

function getRoleKey(member?: TeamMember): TeamRole {
  return (member?.role ?? (typeof member?.commits === "number" ? "Developer" : "Developer")) as TeamRole;
}

function getRole(member?: TeamMember) {
  return ROLE_DETAILS[getRoleKey(member)] ?? ROLE_DETAILS.Developer;
}

function getRoleIcon(member: TeamMember, role = getRole(member)) {
  return member.roleIconSrc ?? member.badges?.[0]?.iconSrc ?? role.iconSrc;
}

function getAvatar(member: TeamMember, size = 112) {
  if (member.avatarUrl) return member.avatarUrl;
  const roleKey = getRoleKey(member);
  const role = getRole(member);
  return roleKey === "Developer" ? `https://github.com/${member.name}.png?size=${size}` : role.avatarFallback;
}

function getBadges(member: TeamMember): TeamRoleBadge[] {
  if (member.badges?.length) return member.badges;
  const role = getRole(member);
  return [{ id: role.label, label: role.label, color: role.color, iconSrc: member.roleIconSrc ?? role.iconSrc }];
}

function formatSnapshotDate(value?: string) {
  if (!value) return "Static team snapshot";
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value));
}

export function TeamGrid({ members, snapshotUpdatedAt, roleBadges = [] }: TeamGridProps) {
  const [selectedName, setSelectedName] = useState(members[0]?.name ?? "");
  const [activeRole, setActiveRole] = useState("All");

  const selectedMember = useMemo(
    () => members.find((member) => member.name === selectedName) ?? members[0],
    [members, selectedName],
  );

  const availableRoles = useMemo(() => {
    const labels = new Set<string>();
    members.forEach((member) => getBadges(member).forEach((badge) => labels.add(String(badge.label))));
    const ordered = TEAM_ROLE_ORDER.filter((role) => labels.has(role));
    const extra = Array.from(labels).filter((role) => !TEAM_ROLE_ORDER.includes(role)).sort((a, b) => a.localeCompare(b));
    return ["All", ...ordered, ...extra];
  }, [members]);

  const filteredMembers = useMemo(() => {
    if (activeRole === "All") return members;
    return members.filter((member) => getBadges(member).some((badge) => badge.label === activeRole));
  }, [activeRole, members]);

  const selectedRole = getRole(selectedMember);
  const selectedRoleIcon = selectedMember ? getRoleIcon(selectedMember, selectedRole) : selectedRole.iconSrc;
  const selectedAvatar = selectedMember ? getAvatar(selectedMember, 160) : selectedRole.avatarFallback;
  const selectedDescription = selectedMember?.description;
  const hasCommitData = typeof selectedMember?.commits === "number";
  const hasRepoData = selectedMember?.repos?.length ? true : false;
  const roleTrackedCount = members.filter((member) => member.badges?.length).length;

  return (
    <>
      <section
        className="mt-10 overflow-hidden rounded-[28px] border border-white/8 p-4 sm:p-5"
        style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
      >
        <div className="relative overflow-hidden rounded-[22px] border border-white/[0.06] bg-black/20 p-4 sm:p-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,68,67,0.18),transparent_32rem)]" />
          <div className="relative grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase text-[var(--color-accent)]" style={{ letterSpacing: "0.24em" }}>
                Discord synced roster
              </p>
              <h2 className="mt-2 font-display text-[26px] font-semibold leading-tight text-white sm:text-[32px]">
                {roleTrackedCount} members from live Flarial roles.
              </h2>
              <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-[var(--color-text-mute)]">
                Stored as a static website snapshot so the page stays fast and does not scan the whole Discord server on every load.
                Last refreshed {formatSnapshotDate(snapshotUpdatedAt)}.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
              {roleBadges.map((badge) => {
                const count = members.filter((member) => getBadges(member).some((memberBadge) => memberBadge.id === badge.id)).length;
                return (
                  <button
                    key={badge.id}
                    type="button"
                    onClick={() => setActiveRole(String(badge.label))}
                    className="rounded-[18px] border border-white/[0.06] bg-black/25 p-3 text-left transition-colors hover:border-white/15 hover:bg-black/30"
                  >
                    <span className="flex items-center gap-2">
                      {badge.iconSrc ? <img src={badge.iconSrc} alt="" className="h-5 w-5 rounded-sm object-contain" onError={replaceBrokenRoleIcon} /> : null}
                      <span className="truncate font-display text-[12px] font-semibold text-white">{badge.label}</span>
                    </span>
                    <span className="mt-1 block font-mono text-[10px] uppercase text-[var(--color-text-mute)]" style={{ letterSpacing: "0.14em" }}>
                      {count} member{count === 1 ? "" : "s"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {availableRoles.map((role) => {
            const active = role === activeRole;
            return (
              <button
                key={role}
                type="button"
                onClick={() => setActiveRole(role)}
                className="rounded-full border px-3 py-1.5 font-display text-[12px] transition"
                style={{
                  borderColor: active ? "var(--color-accent)" : "rgba(255,255,255,0.08)",
                  background: active ? "rgba(254,68,67,0.14)" : "rgba(0,0,0,0.2)",
                  color: active ? "#fff" : "var(--color-text-mute)",
                }}
              >
                {role}
              </button>
            );
          })}
        </div>
      </section>

      {selectedMember ? (
        <section
          className="mt-5 overflow-hidden rounded-[28px] border border-white/8 p-5 sm:p-6"
          style={{ background: "rgba(24, 20, 22, 0.82)", boxShadow: "var(--shadow-rest)" }}
          aria-live="polite"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-4">
              <span className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-[20px] bg-white/5 ring-1 ring-white/10">
                <img
                  src={selectedAvatar}
                  alt="Team member avatar"
                  loading="lazy"
                  className="h-full w-full object-cover"
                  onError={(event) => replaceBrokenImage(event, selectedRole.avatarFallback)}
                />
              </span>
              <span className="min-w-0">
                <span className="inline-flex min-w-0 items-center gap-3">
                  <img src={selectedRoleIcon} alt={`${selectedRole.label} icon`} className="h-6 w-6 rounded-sm object-contain" onError={replaceBrokenRoleIcon} />
                  <span className="truncate font-display text-[26px] font-semibold leading-tight text-white">
                    {selectedMember.name}
                  </span>
                </span>
                <span className="mt-1 block space-y-1">
                  {selectedMember.discordUsername ? (
                    <span className="block font-mono text-[10px] uppercase leading-none text-[var(--color-text-mute)]" style={{ letterSpacing: "0.2em" }}>
                      @{selectedMember.discordUsername}
                    </span>
                  ) : null}
                  {selectedDescription ? (
                    <span className="block text-[12px] leading-relaxed text-[var(--color-text-mute)]">
                      {selectedDescription}
                    </span>
                  ) : null}
                </span>
              </span>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {getBadges(selectedMember).map((badge) => (
                <span
                  key={badge.id}
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] text-white"
                  style={{ borderColor: `${badge.color}66`, background: `${badge.color}1f` }}
                >
                  {badge.iconSrc ? <img src={badge.iconSrc} alt="" className="h-4 w-4 rounded-sm object-contain" onError={replaceBrokenRoleIcon} /> : null}
                  {badge.label}
                </span>
              ))}
              {hasCommitData ? (
                <span className="rounded-full bg-black/25 px-3 py-1.5 font-mono text-[10px] uppercase text-[var(--color-text-mute)]" style={{ letterSpacing: "0.16em" }}>
                  {selectedMember.commits!.toLocaleString()} commits
                </span>
              ) : null}
            </div>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            {hasRepoData ? (
              selectedMember.repos!.slice(0, 8).map((repo) => {
                const percent = hasCommitData ? Math.max((repo.commits / selectedMember.commits!) * 100, 3) : 0;

                return (
                  <div key={repo.name} className="min-w-0 rounded-[16px] bg-black/20 p-3">
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
              <p className="rounded-[18px] bg-black/20 p-4 text-[14px] text-[var(--color-text-mute)]">
                This member comes from the Discord role snapshot. Commit metrics are only shown when we have matched GitHub history.
              </p>
            )}
          </div>
        </section>
      ) : null}

      <section className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {filteredMembers.map((member) => {
          const isSelected = member.name === selectedMember?.name;
          const role = getRole(member);
          const avatarSrc = getAvatar(member, 96);
          const badges = getBadges(member);

          return (
            <button
              key={member.discordUserId ?? member.name}
              type="button"
              onClick={() => setSelectedName(member.name)}
              className="group flex min-h-[92px] items-center gap-3 rounded-[22px] border px-4 py-3 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              style={{
                borderColor: isSelected ? "rgba(255, 48, 72, 0.42)" : "rgba(255,255,255,0.06)",
                background: isSelected ? "rgba(255, 48, 72, 0.16)" : "var(--color-bg-nav)",
                boxShadow: "var(--shadow-rest)",
              }}
              aria-pressed={isSelected}
            >
              <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-[16px] bg-white/5">
                <img
                  src={avatarSrc}
                  alt="Team member avatar"
                  loading="lazy"
                  className="h-full w-full object-cover"
                  onError={(event) => replaceBrokenImage(event, role.avatarFallback)}
                />
              </span>
              <span className="flex min-w-0 flex-col gap-1">
                <span className="truncate font-display text-[14px] font-semibold leading-none text-white">
                  {member.name}
                </span>
                <span className="flex min-w-0 flex-wrap gap-1">
                  {badges.map((badge) => (
                    <span
                      key={badge.id}
                      className="inline-flex max-w-full items-center gap-1 rounded-full px-2 py-0.5 text-[9.5px] leading-none text-white"
                      style={{ background: `${badge.color}33` }}
                    >
                      {badge.iconSrc ? <img src={badge.iconSrc} alt="" className="h-3 w-3 rounded-sm object-contain" onError={replaceBrokenRoleIcon} /> : null}
                      <span className="truncate">{badge.label}</span>
                    </span>
                  ))}
                </span>
                <span className="font-mono text-[9.5px] uppercase leading-none text-[var(--color-text-mute)]" style={{ letterSpacing: "0.16em" }}>
                  {typeof member.commits === "number" ? `${member.commits.toLocaleString()} commits` : member.discordUsername ? `@${member.discordUsername}` : role.label}
                </span>
              </span>
            </button>
          );
        })}
      </section>
    </>
  );
}
