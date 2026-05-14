"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageTransitions } from "./PageTransitions";

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    let lenis: { destroy?: () => void; raf?: (t: number) => void } | null = null;
    let raf = 0;
    let cancelled = false;
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
  }, []);

  return (
    <>
      <Navbar />
      {/* Non-home pages need a spacer because the navbar is fixed.
          Home page navbar starts hidden so no spacer needed. */}
      {!isHome ? <div className="h-16 sm:h-20 shrink-0" aria-hidden /> : null}
      <main className="relative z-[2] flex-1 flex flex-col">
        <PageTransitions>{children}</PageTransitions>
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
