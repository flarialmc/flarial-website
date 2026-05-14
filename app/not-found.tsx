import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-24 sm:py-32 text-center">
      <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-disabled)] mb-3">
        404 · Module not found
      </div>
      <h1 className="font-display text-[56px] sm:text-[80px] leading-[0.95] font-semibold tracking-[-0.02em] text-white">
        Disabled.
      </h1>
      <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-text-mute)] max-w-md mx-auto">
        That page either never shipped or got pulled in a hotfix. Head back to the module list and pick another one.
      </p>
      <div
        className="mt-12 inline-block rounded-[var(--radius-5xl)] p-5"
        style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
      >
        <div
          className="grid place-items-center rounded-[var(--radius-md)] mx-auto"
          style={{ width: 56, height: 56, background: "var(--color-bg-panel)" }}
        >
          <span className="font-mono text-[18px] font-semibold text-[var(--color-text-mute)]">
            404
          </span>
        </div>
        <div className="mt-3 font-medium text-[var(--color-text-mute)] text-[12px] tracking-tight text-center">
          ModuleNotFound
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div
            className="grid place-items-center rounded-[var(--radius-xl)]"
            style={{ background: "var(--color-bg-panel)", width: 38, height: 30 }}
          >
            <span className="text-white text-[14px]">⚙</span>
          </div>
          <div
            className="flex-1 rounded-[var(--radius-2xl)] text-center text-white text-[11px] font-medium grid place-items-center px-4"
            style={{ background: "var(--color-disabled)", height: 30, minWidth: 120 }}
          >
            Disabled
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 h-11 px-5 rounded-[var(--radius-md)] font-mono text-[12px] uppercase tracking-widest text-white"
          style={{ background: "var(--color-accent)", boxShadow: "var(--shadow-glow)" }}
        >
          Back home <ArrowRight size={14} />
        </Link>
        <Link
          href="/download"
          className="inline-flex items-center h-11 px-5 rounded-[var(--radius-md)] font-mono text-[12px] uppercase tracking-widest text-white"
          style={{ background: "var(--color-bg-nav)" }}
        >
          Download
        </Link>
      </div>
    </div>
  );
}
