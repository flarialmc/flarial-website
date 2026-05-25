"use client";

import { useEffect, useState } from "react";

const supportedVersionsUrl =
  "https://raw.githubusercontent.com/flarialmc/newcdn/refs/heads/main/launcher/Supported.json";

export function SupportedVersions() {
  const [versions, setVersions] = useState<string[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    fetch(supportedVersionsUrl, { cache: "no-store" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load supported versions");
        }
        return response.json() as Promise<Record<string, boolean>>;
      })
      .then((data) => {
        if (cancelled) return;
        setVersions(
          Object.entries(data)
            .filter(([, supported]) => supported)
            .map(([version]) => version),
        );
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") {
    return <p className="text-[var(--color-text-mute)]">Loading supported versions...</p>;
  }

  if (status === "error") {
    return (
      <p className="text-[var(--color-text-mute)]">
        Supported versions could not be loaded right now. Check the launcher data source again in a moment.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {versions.map((version) => (
        <span key={version} className="rounded-full bg-black/25 px-3 py-1.5 font-mono text-[12px] text-white">
          {version}
        </span>
      ))}
    </div>
  );
}
