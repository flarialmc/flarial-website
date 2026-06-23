"use client";

import { useEffect } from "react";

const ANALYTICS_ENDPOINT =
  process.env.NEXT_PUBLIC_WEBSITE_ANALYTICS_ENDPOINT ??
  "https://api.flarial.xyz/website/events/pageview";

function trackingDisabled() {
  if (typeof navigator === "undefined") return true;
  const win = window as Window & { doNotTrack?: string };
  return navigator.doNotTrack === "1" || win.doNotTrack === "1";
}

export function WebsiteAnalytics() {
  useEffect(() => {
    if (trackingDisabled()) return;

    const payload = JSON.stringify({
      path: `${window.location.pathname}${window.location.search}`,
      referrer: document.referrer || "",
      title: document.title || "",
    });

    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "text/plain;charset=UTF-8" });
      if (navigator.sendBeacon(ANALYTICS_ENDPOINT, blob)) {
        return;
      }
    }

    void fetch(ANALYTICS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: payload,
      keepalive: true,
      credentials: "omit",
    }).catch(() => undefined);
  }, []);

  return null;
}
