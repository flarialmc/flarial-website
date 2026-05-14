"use client";

import { useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../util/cn";

interface SliderProps {
  label?: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange?: (next: number) => void;
}

/*
  Port of Slider.cpp:7-200.
  Track radius 4px (--radius-xs), fill primary1, unfilled primary3.
  Handle is two stacked circles; web version: single white circle with
  hovered-scale (35% expansion mirrors Slider.cpp:191-192).
*/
export function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  unit,
  onChange,
}: SliderProps) {
  const id = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const pct = ((value - min) / (max - min)) * 100;

  const updateFromClient = (clientX: number) => {
    if (!trackRef.current || !onChange) return;
    const rect = trackRef.current.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const raw = min + ratio * (max - min);
    const snapped = Math.round(raw / step) * step;
    const clamped = Math.min(max, Math.max(min, snapped));
    onChange(Number(clamped.toFixed(4)));
  };

  return (
    <div className="w-full">
      {label ? (
        <div className="flex items-baseline justify-between mb-2">
          <label
            htmlFor={id}
            className="text-[12px] font-medium text-white tracking-tight"
          >
            {label}
          </label>
          <span className="font-mono text-[11px] text-[var(--color-text-mute)] tabular-nums">
            {format(value, step)}
            {unit ? <span className="ml-0.5 text-[var(--color-text-dim)]">{unit}</span> : null}
          </span>
        </div>
      ) : null}
      <div
        ref={trackRef}
        role="presentation"
        className="relative h-7 flex items-center cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onPointerDown={(e) => {
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          updateFromClient(e.clientX);
          const move = (ev: PointerEvent) => updateFromClient(ev.clientX);
          const up = () => {
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", up);
          };
          window.addEventListener("pointermove", move);
          window.addEventListener("pointerup", up);
        }}
      >
        {/* Track */}
        <div
          className="absolute inset-x-0 h-[6px] rounded-[var(--radius-xs)] overflow-hidden"
          style={{ background: "var(--color-accent-lo)" }}
        >
          <motion.div
            className="h-full"
            style={{ background: "var(--color-accent)" }}
            animate={{ width: `${pct}%` }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
          />
        </div>
        {/* Handle */}
        <motion.div
          className="absolute -translate-x-1/2 rounded-full bg-white grid place-items-center"
          style={{
            left: `${pct}%`,
            boxShadow: "0 2px 6px rgba(0,0,0,0.45)",
          }}
          animate={{
            width: hover ? 22 : 16,
            height: hover ? 22 : 16,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        >
          <span
            className="block rounded-full"
            style={{
              width: 6,
              height: 6,
              background: "var(--color-accent)",
            }}
          />
        </motion.div>
        {/* a11y input — invisible, focusable, keyboard support */}
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          aria-label={label}
          onChange={(e) => onChange?.(Number(e.target.value))}
          className={cn(
            "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
            "focus-visible:opacity-0",
          )}
        />
      </div>
    </div>
  );
}

function format(value: number, step: number) {
  if (Number.isInteger(step)) return String(Math.round(value));
  const decimals = (step.toString().split(".")[1] ?? "").length;
  return value.toFixed(decimals);
}
