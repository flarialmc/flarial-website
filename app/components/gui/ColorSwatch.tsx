"use client";

import { useId } from "react";

interface ColorSwatchProps {
  label?: string;
  value: string;
  onChange?: (next: string) => void;
}

/*
  Web-only standin for ColorPicker.cpp (the full HSV picker is large).
  Renders the swatch + hex + native input for now — same surface, same shape.
*/
export function ColorSwatch({ label, value, onChange }: ColorSwatchProps) {
  const id = useId();
  return (
    <div className="w-full">
      {label ? (
        <div className="text-[12px] font-medium text-white mb-2">{label}</div>
      ) : null}
      <label
        htmlFor={id}
        className="flex items-center gap-3 cursor-pointer px-2 h-9 rounded-[var(--radius-md)] transition-colors"
        style={{ background: "var(--color-accent-dk)" }}
      >
        <span
          className="block rounded-[var(--radius-sm)] shrink-0 border border-black/30"
          style={{
            width: 22,
            height: 22,
            background: value,
            boxShadow: "var(--shadow-inset)",
          }}
        />
        <span className="font-mono text-[11.5px] text-white tracking-tight uppercase tabular-nums">
          {value}
        </span>
        <input
          id={id}
          type="color"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="sr-only"
          aria-label={label ?? "Color"}
        />
      </label>
    </div>
  );
}
