"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function PageTransitions({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  /* Docs navigation must feel instant — sliding the whole sidebar/TOC layout
     on every article click reads as lag, not polish. Render children directly
     with no enter/exit animation. */
  if (pathname.startsWith("/docs")) {
    return <div className="flex-1">{children}</div>;
  }

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -18 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
