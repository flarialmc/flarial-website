"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { Slider } from "./Slider";
import { Dropdown } from "./Dropdown";
import { TogglePill } from "./TogglePill";
import { ColorSwatch } from "./ColorSwatch";
import type { Module, ModuleSetting } from "../../lib/modules";

interface SettingsPanelProps {
  module: Module | null;
  open: boolean;
  enabled?: boolean;
  onEnabledChange?: (next: boolean) => void;
  settingsState?: Record<string, ModuleSetting["value"]>;
  onSettingChange?: (key: string, next: ModuleSetting["value"]) => void;
  onClose: () => void;
}

/*
  Slide-from-right drawer at desktop; full-screen sheet on <768px.
  Background: secondary1 (--color-bg-panel).
  Animation duration matches the GUI's 220ms category-tab transition.
*/
export function SettingsPanel({
  module,
  open,
  enabled,
  onEnabledChange,
  settingsState,
  onSettingChange,
  onClose,
}: SettingsPanelProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && module ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px]"
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={`${module.name} settings`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 38 }}
            className="fixed inset-y-0 right-0 z-50 w-full sm:w-[440px] md:w-[480px] overflow-y-auto"
            style={{
              background: "var(--color-bg-panel)",
              boxShadow:
                "-24px 0 64px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.04)",
            }}
          >
            <header className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 border-b border-black/40"
              style={{ background: "var(--color-bg-panel)" }}
            >
              <div className="flex items-center gap-3 min-w-0">
                {module.icon ? (
                  <div
                    className="grid place-items-center shrink-0 rounded-[var(--radius-md)]"
                    style={{ background: "var(--color-bg-card)", width: 38, height: 38 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={module.icon} alt="" width={24} height={24} draggable={false} />
                  </div>
                ) : null}
                <div className="min-w-0">
                  <h2 className="font-mono text-[14px] font-semibold text-white truncate">
                    {module.name}
                  </h2>
                  <p className="text-[11.5px] text-[var(--color-text-mute)] truncate">
                    {module.category}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TogglePill
                  on={!!enabled}
                  onChange={onEnabledChange}
                  size="sm"
                  label={`${enabled ? "Disable" : "Enable"} ${module.name}`}
                />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close settings"
                  className="grid place-items-center w-8 h-8 rounded-[var(--radius-md)] text-[var(--color-text-mute)] hover:text-white hover:bg-black/30 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </header>

            <div className="px-6 py-5">
              <p className="text-[13px] text-[var(--color-text-mute)] leading-relaxed mb-6">
                {module.description}
              </p>
              {module.settings.length === 0 ? (
                <div
                  className="rounded-[var(--radius-md)] px-4 py-6 text-center text-[12px] text-[var(--color-text-dim)] font-mono"
                  style={{ background: "var(--color-bg-inset)" }}
                >
                  No configurable settings.
                </div>
              ) : (
                <ul className="space-y-5">
                  {module.settings.map((s) => (
                    <li key={s.key}>
                      <SettingControl
                        setting={s}
                        override={settingsState?.[s.key]}
                        onChange={(v) => onSettingChange?.(s.key, v)}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

function SettingControl({
  setting,
  override,
  onChange,
}: {
  setting: ModuleSetting;
  override: ModuleSetting["value"] | undefined;
  onChange: (next: ModuleSetting["value"]) => void;
}) {
  switch (setting.type) {
    case "toggle":
      return (
        <div className="flex items-center justify-between gap-4">
          <span className="text-[13px] text-white">{setting.label}</span>
          <TogglePill
            on={typeof override === "boolean" ? override : setting.value}
            onChange={(v) => onChange(v)}
            size="sm"
            label={setting.label}
          />
        </div>
      );
    case "slider":
      return (
        <Slider
          label={setting.label}
          min={setting.min}
          max={setting.max}
          step={setting.step ?? 1}
          unit={setting.unit}
          value={typeof override === "number" ? override : setting.value}
          onChange={(v) => onChange(v)}
        />
      );
    case "dropdown":
      return (
        <Dropdown
          label={setting.label}
          value={typeof override === "string" ? override : setting.value}
          options={setting.options}
          onChange={(v) => onChange(v)}
        />
      );
    case "color":
      return (
        <ColorSwatch
          label={setting.label}
          value={typeof override === "string" ? override : setting.value}
          onChange={(v) => onChange(v)}
        />
      );
  }
}
