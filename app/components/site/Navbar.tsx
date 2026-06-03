"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent, type TouchEvent } from "react";
import { cn } from "../util/cn";
import { FlarialLogo } from "./FlarialLogo";

const NAV = [
  { href: "/changelog", label: "Changelog" },
  { href: "/docs", label: "Docs" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/faq", label: "FAQ" },
];

const docsStorageKey = "flarial:last-docs-article";
const docsSlugs = new Set([
  "what-is-flarial",
  "usage",
  "compatibility",
  "configs",
  "modules-list",
  "flarial-nametag-icon",
  "module-blocking",
  "scripting-api",
]);

function getRememberedDocsHref() {
  if (typeof window === "undefined") {
    return "/docs";
  }

  const slug = window.localStorage.getItem(docsStorageKey);
  return slug && docsSlugs.has(slug) ? `/docs/${slug}/` : "/docs";
}

export function Navbar({ onOpenPalette: _ = () => {} }: { onOpenPalette?: () => void } = {}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navRef = useRef<HTMLElement | null>(null);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const lastTouchToggleAtRef = useRef(0);

  /* Two thresholds: a small one for the bg-blur tint, a bigger one (home only)
     for the slide-in reveal once the visitor leaves the hero. */
  const [scrolled, setScrolled] = useState(false);
  const [revealed, setRevealed] = useState(!isHome);
  const [mobile, setMobile] = useState(false);
  const [docsHref, setDocsHref] = useState("/docs");
  const [indicator, setIndicator] = useState({ x: 0, width: 0, opacity: 0 });
  const activeIndex = NAV.findIndex(
    (item) => pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href)),
  );

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
    setDocsHref(getRememberedDocsHref());
  }, [pathname]);

  useEffect(() => {
    setDocsHref(getRememberedDocsHref());
  }, []);

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const activeItem = activeIndex >= 0 ? navItemRefs.current[activeIndex] : null;
      if (!activeItem) {
        setIndicator((current) => ({ ...current, opacity: 0 }));
        return;
      }

      setIndicator({
        x: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
        opacity: 1,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex]);

  const toggleMobileMenu = () => {
    setMobile((v) => !v);
  };

  const handleMobileTouchStart = (event: TouchEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    lastTouchToggleAtRef.current = Date.now();
    toggleMobileMenu();
  };

  const handleMobileClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (Date.now() - lastTouchToggleAtRef.current < 700) {
      return;
    }

    toggleMobileMenu();
  };

  return (
    <motion.header
      initial={false}
      animate={{ y: revealed ? 0 : "-110%" }}
      transition={{ type: "spring", stiffness: 200, damping: 30, mass: 0.9 }}
      className={cn(
        "pointer-events-auto fixed top-0 inset-x-0 z-50 backdrop-blur-md",
        scrolled ? "bg-[var(--color-bg-base)]/82" : "bg-[var(--color-bg-base)]/60",
      )}
      style={{
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "1px solid transparent",
        transition: "background-color 200ms, border-color 200ms",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <FlarialLogo className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="font-display font-bold text-[17px] sm:text-[19px] tracking-[-0.015em] text-white">
            Flarial
          </span>
        </Link>
        <nav ref={navRef} className="relative hidden md:flex items-center gap-1">
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 rounded-[var(--radius-md)]"
            animate={indicator}
            initial={false}
            transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.8 }}
            style={{ background: "var(--color-bg-nav)" }}
          />
          {NAV.map((item, index) => {
            const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            const href = item.href === "/docs" ? docsHref : item.href;
            return (
              <Link
                key={item.href}
                ref={(node) => {
                  navItemRefs.current[index] = node;
                }}
                href={href}
                className={cn(
                  "relative rounded-[var(--radius-md)] px-3 py-2 font-display text-[14px] font-semibold tracking-[-0.01em] transition-colors lg:px-4 lg:text-[15px]",
                  active ? "text-white" : "text-[var(--color-text-mute)] hover:text-white",
                )}
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/download"
            className={cn(
              "inline-flex h-10 items-center rounded-[var(--radius-md)] px-2.5 sm:h-11 sm:px-4 lg:px-5",
              "font-display text-[12px] font-bold tracking-tight text-white sm:text-[14px]",
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
            onTouchStart={handleMobileTouchStart}
            onClick={handleMobileClick}
            className="pointer-events-auto relative z-10 grid h-11 w-11 touch-manipulation select-none place-items-center rounded-[var(--radius-md)] text-white md:hidden"
            style={{
              background: "var(--color-bg-nav)",
              WebkitAppearance: "none",
              WebkitTapHighlightColor: "transparent",
            }}
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
                  href={item.href === "/docs" ? docsHref : item.href}
                  className="px-3 py-2.5 rounded-[var(--radius-md)] font-mono text-[12px] uppercase tracking-widest text-white hover:bg-black/30"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
