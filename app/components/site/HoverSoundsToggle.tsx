"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { useHoverSounds } from "./hoverSounds";

export function HoverSoundsToggle() {
  const { enabled, setEnabled } = useHoverSounds();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <span className="opacity-0">·</span>;
  return (
    <button
      type="button"
      onClick={() => setEnabled(!enabled)}
      aria-pressed={enabled}
      className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[var(--radius-md)] hover:bg-white/5 transition-colors text-[var(--color-text-mute)] hover:text-white"
    >
      {enabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
      <span>Hover sounds: {enabled ? "on" : "off"}</span>
    </button>
  );
}
