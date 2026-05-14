"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "../util/cn";
import { useCallback, useEffect, useState } from "react";

interface ModCardProps {
  name: string;
  icon?: string;
  enabled?: boolean;
  onToggle?: (next: boolean) => void;
  favorite?: boolean;
  onFavorite?: (next: boolean) => void;
  onSettings?: () => void;
  className?: string;
  size?: "sm" | "md";
}

/*
  Faithful port of ModCard.cpp:17-304.
  Card layout: outer rect (modcard1 / --color-bg-nav, --radius-5xl).
    1. Square icon tile, modcard3 (--color-bg-panel), --radius-md, top-center.
    2. Name text, modNameText (--color-text-mute), center-aligned below icon.
    3. Bottom row: settings gear pill + Enabled/Disabled labeled pill.
*/
export function ModCard({
  name,
  icon,
  enabled = false,
  onToggle,
  favorite = false,
  onFavorite,
  onSettings,
  className,
  size = "sm",
}: ModCardProps) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const dims = size === "sm"
    ? {
        p: "p-3.5 pt-4",
        iconBox: 52,
        iconImg: 36,
        name: "text-[12px]",
        row: 30,
        gear: 38,
        gearIcon: 14,
        pill: "text-[11px]",
      }
    : {
        p: "p-5 pt-6",
        iconBox: 68,
        iconImg: 46,
        name: "text-[13px]",
        row: 36,
        gear: 46,
        gearIcon: 16,
        pill: "text-[12.5px]",
      };

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={false}
      animate={
        reduce ? {} : hovered ? { y: -2, scale: 1.012 } : { y: 0, scale: 1 }
      }
      transition={{ type: "spring", stiffness: 280, damping: 30 }}
      className={cn("relative rounded-[var(--radius-5xl)]", className)}
      style={{
        background: "var(--color-bg-nav)",
        boxShadow: hovered ? "var(--shadow-hover)" : "var(--shadow-rest)",
      }}
    >
      {onFavorite ? (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onFavorite(!favorite);
          }}
          aria-pressed={favorite}
          aria-label={favorite ? "Unfavorite module" : "Favorite module"}
          className="absolute top-2.5 right-3 z-10 p-1 text-[var(--color-text-mute)] hover:text-[var(--color-accent)] transition-colors"
        >
          <Star
            size={13}
            strokeWidth={2}
            fill={favorite ? "currentColor" : "transparent"}
            className={favorite ? "text-[var(--color-accent)]" : ""}
          />
        </button>
      ) : null}

      <div className={cn("flex flex-col items-center", dims.p)}>
        <div
          className="grid place-items-center rounded-[var(--radius-md)] shrink-0"
          style={{
            background: "var(--color-bg-panel)",
            width: dims.iconBox,
            height: dims.iconBox,
          }}
        >
          {icon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={icon}
              alt=""
              width={dims.iconImg}
              height={dims.iconImg}
              style={{
                width: dims.iconImg,
                height: dims.iconImg,
                filter: "brightness(0.92) contrast(1.08)",
                imageRendering: "auto",
              }}
              draggable={false}
            />
          ) : null}
        </div>
        <div
          className={cn(
            "mt-2.5 font-medium text-[var(--color-text-mute)] tracking-tight text-center w-full truncate",
            dims.name,
          )}
        >
          {name}
        </div>

        <div
          className="mt-3 flex items-center gap-2 w-full"
          style={{ height: dims.row }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSettings?.();
            }}
            aria-label={`${name} settings`}
            className="grid place-items-center shrink-0 rounded-[var(--radius-xl)] transition-colors"
            style={{
              background: "var(--color-bg-panel)",
              width: dims.gear,
              height: dims.row,
            }}
          >
            <RotatingGear hovered={hovered} size={dims.gearIcon} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggle?.(!enabled);
            }}
            aria-pressed={enabled}
            aria-label={`${enabled ? "Disable" : "Enable"} ${name}`}
            className={cn(
              "flex-1 rounded-[var(--radius-2xl)] font-medium text-white tracking-tight transition-colors",
              dims.pill,
            )}
            style={{
              height: dims.row,
              background: enabled
                ? "var(--color-enabled)"
                : "var(--color-disabled)",
            }}
          >
            {enabled ? "Enabled" : "Disabled"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function RotatingGear({ hovered, size }: { hovered: boolean; size: number }) {
  return (
    <motion.svg
      animate={{ rotate: hovered ? 90 : 0 }}
      transition={{ type: "spring", stiffness: 140, damping: 20 }}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
      aria-hidden
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </motion.svg>
  );
}

export function useFavorites(storageKey = "flarial.favorites") {
  const [set, setSet] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setSet(new Set(JSON.parse(raw)));
    } catch {}
  }, [storageKey]);

  const toggle = useCallback(
    (slug: string, next: boolean) => {
      setSet((prev) => {
        const copy = new Set(prev);
        if (next) copy.add(slug);
        else copy.delete(slug);
        try {
          localStorage.setItem(storageKey, JSON.stringify([...copy]));
        } catch {}
        return copy;
      });
    },
    [storageKey],
  );

  return { favorites: set, toggle };
}
