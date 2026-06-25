"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

interface ShowcaseItem {
  id: string;       /* YouTube video ID */
  title: string;
  tag: string;      /* short context label */
}

/*
  Real Flarial-dedicated showcase videos. Mix of recent reviews, install
  walkthroughs, and PvP highlights from different creators.
*/
const ITEMS: ShowcaseItem[] = [
  { id: "evLUpE7PhJs", title: "Flarial on YouTube", tag: "Featured · 2026" },
  { id: "diiROE9w2q4", title: "I tested the BEST Bedrock client (Flarial)", tag: "Review · 2025" },
  { id: "IjtrvkiJ9y4", title: "BEST legit Bedrock client · 1.21.132", tag: "Latest · 2026" },
  { id: "TQgZ0okKKUE", title: "The BEST legit PvP client for Bedrock", tag: "PvP · 2025" },
  { id: "nKBEbr3Xzfc", title: "Flarial · FPS, CPS, Keystrokes", tag: "Showcase · 2025" },
  { id: "JsfrLIiMi08", title: "How to install Flarial · 360° + mod menu", tag: "Tutorial · 2025" },
  { id: "WH4ogltNDAI", title: "The BEST Bedrock client just updated", tag: "Highlights · 2025" },
];

const TIKTOK_URL = "https://www.tiktok.com/@flarialclient?_r=1&_t=ZS-97G7ZEzSUsK";

export function Showcase() {
  const [active, setActive] = useState<ShowcaseItem>(ITEMS[0]);
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="showcase"
      className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24"
    >
      <div className="mb-8 text-center sm:mb-10">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] sm:text-[10.5px] sm:tracking-[0.22em]">
          Seen on YouTube
        </div>
        <h2 className="font-display text-[28px] font-semibold tracking-tight text-white sm:text-[40px]">
          See it in the wild.
        </h2>
      </div>

      <div className="grid items-stretch gap-4 lg:grid-cols-[1.6fr_1fr]">
        {/* Featured player */}
        <div
          className="relative aspect-video rounded-[var(--radius-xl)] overflow-hidden"
          style={{
            background: "var(--color-bg-nav)",
            boxShadow: "var(--shadow-hover)",
          }}
        >
          {playing ? (
            <iframe
              key={active.id}
              src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0&modestbranding=1`}
              title={active.title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${active.title}`}
              className="absolute inset-0 group cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(255,35,58,0.12), rgba(0,0,0,0.35)), url('https://i.ytimg.com/vi/${active.id}/maxresdefault.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 grid place-items-center">
                <div
                  className="grid h-16 w-16 place-items-center rounded-full transition-transform group-hover:scale-110 sm:h-24 sm:w-24"
                  style={{
                    background: "var(--color-accent)",
                    boxShadow:
                      "var(--shadow-glow), 0 16px 48px rgba(0,0,0,0.6)",
                  }}
                >
                  <Play
                    size={30}
                    fill="white"
                    strokeWidth={0}
                    className="ml-1"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-left sm:p-6">
                <div className="mb-1 font-mono text-[9.5px] uppercase tracking-widest text-white/75 sm:text-[10.5px]">
                  YouTube · {active.tag}
                </div>
                <div className="font-display text-[16px] font-semibold leading-tight text-white sm:text-[22px]">
                  {active.title}
                </div>
              </div>
            </button>
          )}
        </div>

        {/* Tile list */}
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:h-full lg:grid-cols-1 lg:grid-rows-4">
          {ITEMS.slice(0, 4).map((it) => {
            const isActive = it.id === active.id;
            return (
              <li key={it.id} className="min-h-0">
                <motion.button
                  type="button"
                  onClick={() => {
                    setActive(it);
                    setPlaying(false);
                  }}
                  whileHover={{ y: -2 }}
                  className="flex h-full w-full items-center gap-3 overflow-hidden rounded-[var(--radius-xl)] text-left transition-shadow"
                  style={{
                    background: isActive
                      ? "var(--color-bg-panel)"
                      : "var(--color-bg-nav)",
                    boxShadow: isActive
                      ? "var(--shadow-hover)"
                      : "var(--shadow-rest)",
                  }}
                >
                  <div
                    className="relative h-[68px] w-24 shrink-0 sm:h-[78px] sm:w-32 lg:h-full"
                    style={{
                      backgroundImage: `url('https://i.ytimg.com/vi/${it.id}/mqdefault.jpg')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <span
                      className="absolute inset-0 grid place-items-center text-white opacity-0 hover:opacity-100 transition-opacity"
                      style={{ background: "rgba(0,0,0,0.45)" }}
                    >
                      <Play size={16} fill="currentColor" strokeWidth={0} />
                    </span>
                    {isActive ? (
                      <span
                        aria-hidden
                        className="absolute inset-0 grid place-items-center text-white"
                        style={{ background: "rgba(255,35,58,0.32)" }}
                      >
                        <Play size={18} fill="currentColor" strokeWidth={0} />
                      </span>
                    ) : null}
                  </div>
                  <div className="min-w-0 flex-1 py-2 pr-3">
                    <div className="truncate font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-dim)] sm:text-[9.5px]">
                      YouTube · {it.tag}
                    </div>
                    <div className="mt-0.5 line-clamp-2 text-[12px] font-medium leading-tight text-white sm:text-[12.5px]">
                      {it.title}
                    </div>
                  </div>
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <a
          href="https://www.youtube.com/results?search_query=flarial+client"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[var(--radius-md)] font-mono text-[10.5px] uppercase tracking-widest text-[var(--color-text-mute)] hover:text-white transition-colors"
          style={{ background: "var(--color-bg-nav)" }}
        >
          <ExternalLink size={11} />
          More on YouTube
        </a>
        <a
          href={TIKTOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[var(--radius-md)] font-mono text-[10.5px] uppercase tracking-widest text-[var(--color-text-mute)] hover:text-white transition-colors"
          style={{ background: "var(--color-bg-nav)" }}
        >
          <ExternalLink size={11} />
          TikTok
        </a>
      </div>
    </section>
  );
}
