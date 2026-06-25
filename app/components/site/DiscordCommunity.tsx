"use client";

import { useEffect, useState } from "react";
import { DiscordIcon } from "./BrandIcons";

const DISCORD_INVITE_URL = "https://discord.com/api/v10/invites/flarial?with_counts=true";

export function DiscordCommunity() {
  const [onlineCount, setOnlineCount] = useState<number | null>(null);
  const [memberCount, setMemberCount] = useState<number | null>(null);
  const [requestFailed, setRequestFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const loadStatus = () => {
      fetch(DISCORD_INVITE_URL, { cache: "no-store" })
        .then((response) => (response.ok ? response.json() : null))
        .then((data) => {
          if (cancelled) return;

          const nextOnlineCount =
            data && typeof data.approximate_presence_count === "number"
              ? data.approximate_presence_count
              : null;
          const nextMemberCount =
            data && typeof data.approximate_member_count === "number"
              ? data.approximate_member_count
              : null;

          setOnlineCount(nextOnlineCount);
          setMemberCount(nextMemberCount);
          setRequestFailed(nextOnlineCount === null);
        })
        .catch(() => {
          if (!cancelled) setRequestFailed(true);
        });
    };

    loadStatus();
    const interval = window.setInterval(loadStatus, 60_000);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative mx-auto max-w-5xl px-4 pb-20 sm:px-6 sm:pb-24">
      <div
        className="overflow-hidden rounded-[28px] border border-white/10 p-5 sm:rounded-[var(--radius-5xl)] sm:p-10"
        style={{
          background: "var(--color-bg-nav)",
          boxShadow: "var(--shadow-rest)",
        }}
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] bg-[#5865F2] text-white sm:h-14 sm:w-14 sm:rounded-[20px]">
              <DiscordIcon width={24} height={24} className="sm:h-7 sm:w-7" />
            </span>
            <div className="min-w-0">
              <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[var(--color-accent)] sm:text-[10px] sm:tracking-[0.24em]">
                Discord community
              </div>
              <h2 className="mt-2 font-display text-[25px] font-semibold leading-[1.05] tracking-tight text-white sm:mt-3 sm:text-[34px]">
                Active support, updates, and player chat.
              </h2>
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[var(--color-text-mute)] sm:text-[15px]">
                Join Flarial&apos;s Discord server for live help, announcements, and an active Minecraft Bedrock community.
              </p>
            </div>
          </div>

          <a
            href="https://discord.gg/flarial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-[16px] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4d82ff] sm:w-auto"
          >
            Join Discord
          </a>
        </div>

        <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="min-w-0 rounded-[var(--radius-lg)] border border-white/8 p-4 sm:p-5" style={{ background: "rgba(48, 39, 40, 0.82)" }}>
            <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/70 sm:text-[10px] sm:tracking-[0.24em]">
              Online now
            </div>
            <div className="mt-2 break-words font-display text-[28px] font-semibold text-white tabular-nums sm:text-[32px]">
              {onlineCount === null ? (requestFailed ? "unavailable" : "—") : onlineCount.toLocaleString()}
            </div>
            <div className="mt-1 text-[12px] text-[var(--color-text-mute)]">
              active right now
            </div>
          </div>

          <div className="min-w-0 rounded-[var(--radius-lg)] border border-white/8 p-4 sm:p-5" style={{ background: "rgba(48, 39, 40, 0.82)" }}>
            <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/70 sm:text-[10px] sm:tracking-[0.24em]">
              Server size
            </div>
            <div className="mt-2 break-words font-display text-[28px] font-semibold text-white sm:text-[32px]">
              {memberCount === null ? "100k+" : memberCount.toLocaleString()}
            </div>
            <div className="mt-1 text-[12px] text-[var(--color-text-mute)]">
              total members
            </div>
          </div>

          <div className="min-w-0 rounded-[var(--radius-lg)] border border-white/8 p-4 sm:p-5" style={{ background: "rgba(48, 39, 40, 0.82)" }}>
            <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/70 sm:text-[10px] sm:tracking-[0.24em]">
              Community activity
            </div>
            <div className="mt-2 font-display text-[28px] font-semibold text-white sm:text-[32px]">
              24/7
            </div>
            <div className="mt-1 text-[12px] text-[var(--color-text-mute)]">
              support and announcements
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
