"use client";

import Link from "next/link";
import * as React from "react";
import { FlarialLogo } from "./FlarialLogo";
import { YoutubeIcon, DiscordIcon, TikTokIcon } from "./BrandIcons";
import type { SVGProps } from "react";

const TIKTOK_URL = "https://www.tiktok.com/@flarialclient?_r=1&_t=ZS-97G7ZEzSUsK";

const COLS = [
  {
    label: "Product",
    links: [
      { href: "/download", label: "Download" },
      { href: "/modules", label: "Modules" },
      { href: "/blog", label: "Blog" },
      { href: "/changelog", label: "Changelog" },
      { href: "/faq", label: "FAQ" },
      { href: "/docs", label: "Docs" },
    ],
  },
  {
    label: "Resources",
    links: [
      { href: "/mcpe-client", label: "MCPE Client (Android)" },
      { href: "/bedrock-launcher", label: "Bedrock Launcher" },
      { href: "/best-minecraft-bedrock-client", label: "Best Bedrock Clients" },
    ],
  },
  {
    label: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "https://discord.gg/flarial", label: "Discord", external: true },
      { href: "https://www.youtube.com/@flarialclient", label: "YouTube", external: true },
      { href: TIKTOK_URL, label: "TikTok", external: true },
    ],
  },
  {
    label: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="mt-32 border-t border-white/[0.04] relative"
      style={{ background: "var(--color-bg-nav)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <FlarialLogo className="w-7 h-7" />
            <span className="font-display font-bold text-[15px] tracking-[-0.01em] text-white">
              Flarial
            </span>
          </div>
          <p className="text-[13px] leading-relaxed text-[var(--color-text-mute)] max-w-sm">
            The Minecraft Bedrock client. 140+ modules, a real ClickGUI, FPS
            tools, HUDs, and active support — free, forever.
          </p>
          <p className="text-[11px] leading-relaxed text-[var(--color-text-dim)] max-w-sm">
            Not affiliated with Mojang or Microsoft. &quot;Minecraft&quot; is a
            trademark of Mojang Studios.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <SocialLink href="https://discord.gg/flarial" icon={DiscordIcon} label="Discord" />
            <SocialLink href="https://www.youtube.com/@flarialclient" icon={YoutubeIcon} label="YouTube" />
            <SocialLink href={TIKTOK_URL} icon={TikTokIcon} label="TikTok" />
          </div>
        </div>
        {COLS.map((col) => (
          <div key={col.label}>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-dim)] mb-3">
              {col.label}
            </div>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={"external" in link && link.external ? "_blank" : undefined}
                    rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                    className="text-[13px] text-white/85 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.04] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11.5px] font-mono text-[var(--color-text-dim)]">
          <div>© {new Date().getFullYear()} Flarial</div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid place-items-center w-9 h-9 rounded-[var(--radius-md)] text-[var(--color-text-mute)] hover:text-white transition-colors"
      style={{ background: "var(--color-bg-card)" }}
    >
      <Icon width={15} height={15} />
    </a>
  );
}
