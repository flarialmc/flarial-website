"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MODULES } from "../../lib/modules";

interface Stat {
  label: string;
  value: string;
  hint?: string;
}

export function LiveStats() {
  const [members, setMembers] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://discord.com/api/guilds/1109996020471427152/widget.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (j && typeof j.presence_count === "number") setMembers(j.presence_count);
      })
      .catch(() => {});
  }, []);

  const stats: Stat[] = [
    {
      label: "Modules",
      value: MODULES.length.toString(),
      hint: "and counting",
    },
    {
      label: "Online now",
      value: members === null ? "—" : members.toLocaleString(),
      hint: "in Discord",
    },
    {
      label: "Platform",
      value: "Bedrock",
      hint: "1.20+",
    },
    {
      label: "Price",
      value: "Free",
      hint: "forever",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
          className="rounded-[var(--radius-lg)] px-4 py-3 text-left"
          style={{ background: "var(--color-bg-nav)" }}
        >
          <div className="font-mono text-[9.5px] uppercase tracking-widest text-[var(--color-text-dim)]">
            {s.label}
          </div>
          <div className="mt-0.5 font-display text-[20px] sm:text-[22px] font-semibold text-white tabular-nums leading-none">
            {s.value}
          </div>
          {s.hint ? (
            <div className="text-[10.5px] text-[var(--color-text-mute)] mt-1">
              {s.hint}
            </div>
          ) : null}
        </motion.div>
      ))}
    </div>
  );
}
