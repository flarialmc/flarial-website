"use client";

import { useEffect, useRef } from "react";

/*
  AdSense slot — only renders on the /download subpage so ad load is
  concentrated where conversion happens.

  Wire your AdSense client + slot via NEXT_PUBLIC_ADSENSE_CLIENT and
  NEXT_PUBLIC_ADSENSE_SLOT env vars. Without them the slot is a no-op
  placeholder (visible in dev for layout).
*/
declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSlot() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT;
  const ref = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    if (!client || !slot) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [client, slot]);

  if (!client || !slot) return null;

  return (
    <>
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
        crossOrigin="anonymous"
      />
      <ins
        ref={ref}
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  );
}
