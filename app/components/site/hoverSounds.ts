"use client";

import { useEffect, useState } from "react";

const KEY = "flarial.hoverSounds";

let cachedAudio: HTMLAudioElement | null = null;
let listenerInstalled = false;
let listenerEnabled = false;

function getAudio() {
  if (typeof window === "undefined") return null;
  if (!cachedAudio) {
    /* lazy click — uses a tiny base64 wav to avoid bundling .ogg until needed */
    cachedAudio = new Audio(
      "data:audio/wav;base64,UklGRjQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YRAAAAB/f39/f39/f39/f39/f39/",
    );
    cachedAudio.volume = 0.35;
  }
  return cachedAudio;
}

function attachListener() {
  if (listenerInstalled) return;
  listenerInstalled = true;
  const onOver = (e: Event) => {
    if (!listenerEnabled) return;
    const t = e.target as HTMLElement | null;
    if (!t) return;
    if (t.closest("button, a, [role='switch'], [role='tab'], [role='option']")) {
      const audio = getAudio();
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    }
  };
  document.addEventListener("pointerover", onOver, { passive: true });
}

export function useHoverSounds() {
  const [enabled, setEnabledState] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      const next = raw === "1";
      setEnabledState(next);
      listenerEnabled = next;
    } catch {}
    attachListener();
  }, []);

  const setEnabled = (v: boolean) => {
    setEnabledState(v);
    listenerEnabled = v;
    try {
      localStorage.setItem(KEY, v ? "1" : "0");
    } catch {}
  };

  return { enabled, setEnabled };
}
