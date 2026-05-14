"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Folder, Settings as SettingsIcon, Code2, PenLine } from "lucide-react";
import { ModCard, useFavorites } from "../gui/ModCard";
import { SettingsPanel } from "../gui/SettingsPanel";
import { FlarialLogo } from "./FlarialLogo";
import { MODULES, type Module, type ModuleSetting } from "../../lib/modules";
import { cn } from "../util/cn";

type Tab = "modules" | "settings" | "scripts" | "edit";

/*
  Port of ClickGUI.cpp:537-1043. Layout:
    - Outer rect, secondary3 (--color-bg-base), --radius-6xl (45px ≈ 43)
    - Top nav rect, secondary2 (--color-bg-nav), --radius-lg
      - Flarial logo (left)
      - Active "Modules" pill (red, wide) + 3 icon-only pills
      - Search icon button (right, red)
    - Grid: 3 cols of ModCard
*/
export function ClickGUIWindow({ compact = false }: { compact?: boolean }) {
  const [tab, setTab] = useState<Tab>("modules");
  const [search, setSearch] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [enabled, setEnabled] = useState<Set<string>>(() => {
    const init = new Set<string>();
    MODULES.forEach((m) => m.defaultEnabled && init.add(m.slug));
    return init;
  });
  const [active, setActive] = useState<Module | null>(null);
  const [overrides, setOverrides] = useState<Record<string, Record<string, ModuleSetting["value"]>>>({});
  const { favorites, toggle: toggleFav } = useFavorites();

  const sorted = useMemo(() => {
    return [...MODULES].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filtered = useMemo(() => {
    if (!search) return sorted;
    const q = search.toLowerCase();
    return sorted.filter((m) => m.name.toLowerCase().includes(q));
  }, [sorted, search]);

  const shown = compact ? filtered.slice(0, 9) : filtered;

  const setMod = (slug: string, next: boolean) => {
    setEnabled((prev) => {
      const copy = new Set(prev);
      next ? copy.add(slug) : copy.delete(slug);
      return copy;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-[var(--radius-6xl)] overflow-hidden"
      style={{
        background: "var(--color-bg-base)",
        boxShadow:
          "0 40px 120px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      <div className="px-3 pt-3 pb-3 sm:px-5 sm:pt-5 sm:pb-5">
        {/* Top nav bar */}
        <div
          className="flex items-center gap-2.5 px-3 sm:px-4 py-2.5 rounded-[var(--radius-lg)]"
          style={{ background: "var(--color-bg-nav)" }}
        >
          <FlarialLogo className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" />
          <NavTab
            active={tab === "modules"}
            onClick={() => setTab("modules")}
            icon={Folder}
            label="Modules"
          />
          <NavTab
            active={tab === "settings"}
            onClick={() => setTab("settings")}
            icon={SettingsIcon}
          />
          <NavTab
            active={tab === "scripts"}
            onClick={() => setTab("scripts")}
            icon={Code2}
          />
          <NavTab
            active={tab === "edit"}
            onClick={() => setTab("edit")}
            icon={PenLine}
          />
          <div className="flex-1 flex items-center justify-end gap-2">
            <motion.div
              animate={{ width: searchActive ? 220 : 36 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="h-9 flex items-center overflow-hidden rounded-[var(--radius-lg)]"
              style={{ background: "var(--color-accent)" }}
            >
              <button
                type="button"
                onClick={() => setSearchActive((v) => !v)}
                aria-label="Toggle search"
                className="grid place-items-center w-9 h-9 shrink-0 text-white"
              >
                <Search size={15} strokeWidth={2.4} />
              </button>
              {searchActive ? (
                <input
                  autoFocus
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onBlur={() => !search && setSearchActive(false)}
                  placeholder="Search…"
                  className="bg-transparent outline-none text-[12.5px] text-white placeholder-white/60 pr-3 w-full font-sans"
                />
              ) : null}
            </motion.div>
          </div>
        </div>

        {/* Content area */}
        <div className="mt-3 sm:mt-4">
          {tab === "modules" ? (
            <ModuleGrid
              modules={shown}
              enabled={enabled}
              favorites={favorites}
              onToggle={setMod}
              onSettings={(m) => setActive(m)}
              onFavorite={(slug, v) => toggleFav(slug, v)}
              compact={compact}
            />
          ) : (
            <PlaceholderTab tab={tab} />
          )}
        </div>
      </div>

      <SettingsPanel
        module={active}
        open={!!active}
        enabled={active ? enabled.has(active.slug) : false}
        onEnabledChange={(v) => active && setMod(active.slug, v)}
        settingsState={active ? overrides[active.slug] : undefined}
        onSettingChange={(k, val) => active && setOverrides((p) => ({
          ...p,
          [active.slug]: { ...(p[active.slug] ?? {}), [k]: val },
        }))}
        onClose={() => setActive(null)}
      />
    </motion.div>
  );
}

function NavTab({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Folder;
  label?: string;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      animate={{
        width: active ? (label ? 124 : 40) : 40,
      }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "h-9 inline-flex items-center justify-center gap-2 shrink-0 rounded-[var(--radius-lg)] font-medium text-[12px] transition-colors",
        active ? "text-white" : "text-[var(--color-text-mute)] hover:text-white",
      )}
      style={{
        background: active ? "var(--color-accent)" : "var(--color-bg-subtle)",
      }}
    >
      <Icon size={14} strokeWidth={2.2} />
      {active && label ? <span>{label}</span> : null}
    </motion.button>
  );
}

function ModuleGrid({
  modules,
  enabled,
  favorites,
  onToggle,
  onSettings,
  onFavorite,
  compact,
}: {
  modules: Module[];
  enabled: Set<string>;
  favorites: Set<string>;
  onToggle: (slug: string, next: boolean) => void;
  onSettings: (m: Module) => void;
  onFavorite: (slug: string, v: boolean) => void;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid gap-3 sm:gap-4 max-h-[480px] overflow-y-auto pr-1",
        "grid-cols-2 sm:grid-cols-3",
        compact && "sm:grid-cols-3",
      )}
    >
      {modules.map((m) => (
        <ModCard
          key={m.slug}
          name={m.name}
          icon={m.icon}
          enabled={enabled.has(m.slug)}
          onToggle={(v) => onToggle(m.slug, v)}
          onSettings={() => onSettings(m)}
          favorite={favorites.has(m.slug)}
          onFavorite={(v) => onFavorite(m.slug, v)}
          size="sm"
        />
      ))}
      {modules.length === 0 ? (
        <div className="col-span-full text-center py-8 text-[12px] text-[var(--color-text-dim)] font-mono uppercase tracking-widest">
          No modules match.
        </div>
      ) : null}
    </div>
  );
}

function PlaceholderTab({ tab }: { tab: Tab }) {
  const label = tab.charAt(0).toUpperCase() + tab.slice(1);
  return (
    <div
      className="grid place-items-center min-h-[300px] rounded-[var(--radius-xl)] text-center"
      style={{ background: "var(--color-bg-nav)" }}
    >
      <div>
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
          {label} tab
        </div>
        <div className="mt-2 text-[14px] text-[var(--color-text-mute)]">
          Available in the desktop client. Download to see it live.
        </div>
      </div>
    </div>
  );
}
