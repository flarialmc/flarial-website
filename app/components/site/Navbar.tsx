"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../util/cn";
import { FlarialLogo } from "./FlarialLogo";

const NAV = [
  { href: "/changelog", label: "Changelog" },
  { href: "/download", label: "Download" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar({ onOpenPalette: _ = () => {} }: { onOpenPalette?: () => void } = {}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  /* Two thresholds: a small one for the bg-blur tint, a bigger one (home only)
     for the slide-in reveal once the visitor leaves the hero. */
  const [scrolled, setScrolled] = useState(false);
  const [revealed, setRevealed] = useState(!isHome);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (isHome) {
        /* reveal once we're roughly out of the full-vh hero */
        setRevealed(y > window.innerHeight * 0.55);
      } else {
        setRevealed(true);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setMobile(false);
  }, [pathname]);

  return (
    <motion.header
      initial={false}
      animate={{ y: revealed ? 0 : "-110%" }}
      transition={{ type: "spring", stiffness: 200, damping: 30, mass: 0.9 }}
      className={cn(
        "fixed top-0 inset-x-0 z-30 backdrop-blur-md",
        scrolled ? "bg-[var(--color-bg-base)]/82" : "bg-[var(--color-bg-base)]/60",
      )}
      style={{
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "1px solid transparent",
        transition: "background-color 200ms, border-color 200ms",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <FlarialLogo className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="font-display font-bold text-[17px] sm:text-[19px] tracking-[-0.015em] text-white">
            Flarial
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-[var(--radius-md)] font-display font-semibold text-[15px] tracking-[-0.01em] transition-colors",
                  active ? "text-white" : "text-[var(--color-text-mute)] hover:text-white",
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-[var(--radius-md)]"
                    style={{ background: "var(--color-bg-nav)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/download"
            className={cn(
              "hidden sm:inline-flex items-center h-11 px-5 rounded-[var(--radius-md)]",
              "font-display font-bold text-[14px] tracking-tight text-white",
              "transition-shadow",
            )}
            style={{
              background: "var(--color-accent)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            Download
          </Link>
          <button
            type="button"
            onClick={() => setMobile((v) => !v)}
            className="md:hidden grid place-items-center w-9 h-9 rounded-[var(--radius-md)] text-white"
            style={{ background: "var(--color-bg-nav)" }}
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
          >
            {mobile ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
            style={{ background: "var(--color-bg-nav)" }}
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2.5 rounded-[var(--radius-md)] font-mono text-[12px] uppercase tracking-widest text-white hover:bg-black/30"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/download"
                className="mt-1 inline-flex items-center justify-center px-4 py-2.5 rounded-[var(--radius-md)] font-mono text-[12px] uppercase tracking-widest text-white"
                style={{ background: "var(--color-accent)" }}
              >
                Download
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
