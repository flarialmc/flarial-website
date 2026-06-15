"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageTransitions } from "./PageTransitions";
import { HeroBackground } from "./HeroBackground";

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    let lenis: { destroy?: () => void; raf?: (t: number) => void } | null = null;
    let raf = 0;
    let cancelled = false;
    if (pathname.startsWith("/docs")) {
      return;
    }
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      import("lenis")
        .then(({ default: Lenis }) => {
          if (cancelled) return;
          lenis = new Lenis({
            duration: 0.9,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          }) as unknown as typeof lenis;
          const tick = (time: number) => {
            (lenis as unknown as { raf: (t: number) => void } | null)?.raf?.(time);
            raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        })
        .catch(() => {});
    }
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      (lenis as unknown as { destroy?: () => void } | null)?.destroy?.();
    };
  }, [pathname]);

  return (
    <>
      <Navbar />
      {/* Non-home pages need a spacer because the navbar is fixed.
          Home page navbar starts hidden so no spacer needed. */}
      {!isHome ? <div className="h-16 sm:h-20 shrink-0" aria-hidden /> : null}
      <main className="relative z-[2] flex-1 flex flex-col overflow-hidden">
        {!isHome ? (
          <>
            <div className="absolute inset-x-0 top-0 h-[620px] pointer-events-none opacity-55">
              <HeroBackground />
            </div>
            <div className="absolute inset-x-0 top-0 h-[720px] pointer-events-none bg-gradient-to-b from-transparent via-[rgba(18,14,15,0.42)] to-[var(--color-bg-base)]" />
          </>
        ) : null}
        <div className="relative z-10 flex flex-1 flex-col">
          <PageTransitions>{children}</PageTransitions>
        </div>
      </main>
      <Footer />
      <Toaster
        theme="dark"
        position="bottom-center"
        toastOptions={{
          style: {
            background: "var(--color-bg-panel)",
            border: "1px solid rgba(255,255,255,0.05)",
            color: "var(--color-text)",
          },
        }}
      />
    </>
  );
}
