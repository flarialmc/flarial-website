"use client";

import { useEffect, useState } from "react";
import { DiscordIcon } from "./BrandIcons";

export function DiscordCommunity() {
  const [onlineCount, setOnlineCount] = useState<number | null>(null);
  const [memberCount, setMemberCount] = useState<number | null>(null);
  const [requestFailed, setRequestFailed] = useState(false);

  useEffect(() => {
    fetch("/api/discord-status")
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data && typeof data.onlineCount === "number") {
          setOnlineCount(data.onlineCount);
        }
        if (data && typeof data.memberCount === "number") {
          setMemberCount(data.memberCount);
        }
      })
      .catch(() => {
        setRequestFailed(true);
      });
  }, []);

  return (
    <section className="relative px-4 sm:px-6 mx-auto max-w-5xl pb-24">
      <div
        className="rounded-[var(--radius-5xl)] border border-white/10 p-7 sm:p-10"
        style={{
          background: "var(--color-bg-nav)",
          boxShadow: "var(--shadow-rest)",
        }}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-[20px] bg-[#5865F2] text-white">
              <DiscordIcon width={28} height={28} />
            </span>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Discord community
              </div>
              <h2 className="mt-3 font-display text-[28px] sm:text-[34px] font-semibold tracking-tight text-white">
                Active support, updates, and player chat.
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--color-text-mute)]">
                Join Flarial&apos;s Discord server for live help, announcements, and an active Minecraft Bedrock community.
              </p>
            </div>
          </div>

          <a
            href="https://discord.gg/flarial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-[16px] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#4d82ff]"
          >
            Join Discord
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[var(--radius-lg)] p-5" style={{ background: "var(--color-bg-panel)" }}>
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--color-text-dim)]">
              Online now
            </div>
            <div className="mt-2 font-display text-[32px] font-semibold text-white tabular-nums">
              {onlineCount === null ? (requestFailed ? "unavailable" : "—") : onlineCount.toLocaleString()}
            </div>
            <div className="mt-1 text-[12px] text-[var(--color-text-mute)]">
              active right now
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] p-5" style={{ background: "var(--color-bg-panel)" }}>
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--color-text-dim)]">
              Server size
            </div>
            <div className="mt-2 font-display text-[32px] font-semibold text-white">
              {memberCount === null ? "100k+" : memberCount.toLocaleString()}
            </div>
            <div className="mt-1 text-[12px] text-[var(--color-text-mute)]">
              total members
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] p-5" style={{ background: "var(--color-bg-panel)" }}>
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--color-text-dim)]">
              Community activity
            </div>
            <div className="mt-2 font-display text-[32px] font-semibold text-white">
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
