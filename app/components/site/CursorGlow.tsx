"use client";

import { useEffect, useRef } from "react";

/*
  Soft #FF233A halo that follows the cursor.
  Scales 1.0 → 1.5 over interactive elements.
  GPU-only — translate + opacity on a fixed div.
*/
export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let scale = 1;
    let targetScale = 1;

    const tick = () => {
      cx += (tx - cx) * 0.22;
      cy += (ty - cy) * 0.22;
      scale += (targetScale - scale) * 0.18;
      el.style.transform = `translate3d(${cx - 160}px, ${cy - 160}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const onOver = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      targetScale = t.closest("button, a, [role='switch'], [role='tab']") ? 1.5 : 1;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[2] hidden md:block"
      style={{
        width: 320,
        height: 320,
        borderRadius: "50%",
        background:
          "radial-gradient(closest-side, rgba(255,35,58,0.22), rgba(255,35,58,0) 70%)",
        mixBlendMode: "screen",
        filter: "blur(2px)",
        willChange: "transform",
      }}
    />
  );
}
