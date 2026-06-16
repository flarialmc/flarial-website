"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { DllCssModuleCategory, DllCssModuleDetail } from "../dll-css-module-details";
import { DocsHeading } from "../DocsHeading";
import { sectionFrameClass } from "./article-kit";

type AndroidModuleDetail = Pick<
  DllCssModuleDetail,
  "name" | "description" | "icon" | "settingsCount" | "category" | "source"
>;

type ModuleGroup<TModule extends AndroidModuleDetail = AndroidModuleDetail> = {
  category: DllCssModuleCategory;
  modules: TModule[];
};

type PlatformKey = "windows" | "android";

type PlatformCatalog = {
  key: PlatformKey;
  label: "Windows" | "Android";
  description: string;
  groups: ModuleGroup[];
};

function platformClasses(platform: PlatformKey) {
  if (platform === "android") {
    return "border-emerald-300/25 bg-emerald-400/10 text-emerald-100";
  }

  return "border-sky-300/25 bg-sky-400/10 text-sky-100";
}

function countModules(groups: ModuleGroup[]) {
  return groups.reduce((total, group) => total + group.modules.length, 0);
}

export function ModulesListCatalog({
  windowsGroups,
  androidGroups,
}: {
  windowsGroups: ModuleGroup<DllCssModuleDetail>[];
  androidGroups: ModuleGroup[];
}) {
  const catalogs = useMemo<PlatformCatalog[]>(
    () => [
      {
        key: "windows",
        label: "Windows",
        description: "Desktop modules from dll-css.",
        groups: windowsGroups,
      },
      {
        key: "android",
        label: "Android",
        description: "Mobile modules from the Android client.",
        groups: androidGroups,
      },
    ],
    [androidGroups, windowsGroups],
  );
  const [activePlatform, setActivePlatform] = useState<PlatformKey>("windows");
  const activeCatalog = catalogs.find((catalog) => catalog.key === activePlatform) ?? catalogs[0];
  const totalModules = countModules(activeCatalog.groups);

  return (
    <div className="grid gap-4">
      <div
        className="flex flex-col gap-3 rounded-[var(--radius-xl)] p-4 text-white lg:flex-row lg:items-center lg:justify-between"
        style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
      >
        <div>
          <span className="font-display font-semibold">{totalModules} modules</span>
          <p className="mt-1 max-w-xl text-[12px] leading-relaxed text-[var(--color-text-mute)]">
            Note that some modules may be disabled for specific versions due to bugs and glitches.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {catalogs.map((catalog) => {
            const active = catalog.key === activePlatform;

            return (
              <button
                key={catalog.key}
                type="button"
                aria-pressed={active}
                onClick={() => setActivePlatform(catalog.key)}
                className={[
                  "rounded-[var(--radius-lg)] border px-4 py-3 text-left transition-colors",
                  active
                    ? "border-[var(--color-accent)] bg-[var(--color-bg-subtle)] text-white"
                    : "border-white/[0.06] bg-black/20 text-[var(--color-text-mute)] hover:border-white/15 hover:text-white",
                ].join(" ")}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-display text-[14px] font-semibold">{catalog.label}</span>
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] ${platformClasses(catalog.key)}`}>
                    {catalog.label}
                  </span>
                </span>
                <span className="mt-1 block text-[12px] leading-relaxed">{catalog.description}</span>
                <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.18em]">
                  {countModules(catalog.groups)} modules
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {activeCatalog.groups.map((group) => (
        <section
          key={`${activeCatalog.key}-${group.category}`}
          className={sectionFrameClass}
          style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
        >
          <div className="flex items-center justify-between gap-3">
            <DocsHeading id={`modules-${activeCatalog.key}-${group.category.toLowerCase()}`}>{group.category}</DocsHeading>
            <span className="rounded-full bg-black/25 px-3 py-1 text-[12px] text-[var(--color-text-mute)]">
              {group.modules.length} modules
            </span>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {group.modules.map((module) => (
              <div key={`${activeCatalog.key}-${module.name}`} className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/20 p-4">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[var(--radius-md)] bg-[var(--color-bg-modicon)]">
                    <Image src={module.icon} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display text-[16px] font-semibold text-white">{module.name}</h4>
                    <p className="mt-1 text-[13px] leading-relaxed text-[var(--color-text-mute)]">{module.description}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] ${platformClasses(activeCatalog.key)}`}>
                    {activeCatalog.label}
                  </span>
                  <span className="rounded-full bg-[var(--color-bg-subtle)] px-2.5 py-1 text-[11px] text-white">
                    {module.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
