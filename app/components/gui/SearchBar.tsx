"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { cn } from "../util/cn";

interface SearchBarProps {
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
  className?: string;
}

/*
  Port of SearchBar.cpp:11-141.
  Idle: 42% width; focus: 270% expansion. Bg secondary4 (--color-bg-inset),
  cutout primary1 (--color-accent). 0.12 lerp (~140ms).
*/
export function SearchBar({ value, onChange, placeholder = "Search modules", className }: SearchBarProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={cn(
        "relative flex items-center w-full transition-all duration-200 ease-out",
        "rounded-[var(--radius-lg)] overflow-hidden",
        className,
      )}
      style={{
        background: focused ? "var(--color-bg-inset)" : "var(--color-bg-nav)",
        boxShadow: focused
          ? "inset 0 0 0 1px var(--color-accent), var(--shadow-glow)"
          : "var(--shadow-inset)",
      }}
    >
      <span
        className="absolute left-3 grid place-items-center text-[var(--color-text-mute)] pointer-events-none transition-colors"
        style={{ color: focused ? "var(--color-accent)" : undefined }}
      >
        <Search size={16} strokeWidth={2.2} />
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className={cn(
          "w-full bg-transparent pl-10 pr-3 py-2.5 text-[13.5px]",
          "text-white placeholder:text-[var(--color-text-dim)]",
          "outline-none font-sans",
        )}
      />
    </div>
  );
}
