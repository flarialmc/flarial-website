"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type FixedAdSlotProps = {
  width: number;
  height: number;
};

export function FixedAdSlot({ width, height }: FixedAdSlotProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT;

  useEffect(() => {
    if (!client || !slot) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [client, slot]);

  if (!client || !slot) return null;

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "inline-block", width, height }}
      data-ad-client={client}
      data-ad-slot={slot}
    />
  );
}
