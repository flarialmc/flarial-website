import type { DocsArticle } from "../docs-types";
import {
  BookOpen,
  CheckCircle2,
  DocsHeading,
  Download,
  ExternalLink,
  Image,
  InfoCard,
  Link,
  ShieldCheck,
  Sparkles,
  sectionFrameClass,
} from "./article-kit";

const brandAssets = [
  {
    title: "Primary logo",
    description: "Main Flarial logo for overlays, thumbnails, websites, and high-resolution creator exports.",
    href: "/logo.svg",
    preview: "/logo.svg",
    format: "SVG + transparent PNG exports",
    downloads: [
      { label: "SVG", href: "/logo.svg" },
      { label: "PNG 1024", href: "/media-kit/flarial-logo-1024.png" },
      { label: "PNG 2048", href: "/media-kit/flarial-logo-2048.png" },
      { label: "PNG 4096", href: "/media-kit/flarial-logo-4096.png" },
    ],
  },
  {
    title: "Transparent wordmark",
    description: "Flarial Client logo-and-name wordmark with a transparent background for overlays and creator graphics.",
    href: "/media-kit/logo-variants/flarial-wordmark-transparent.png",
    preview: "/media-kit/logo-variants/flarial-wordmark-transparent.png",
    format: "PNG · transparent · 464×82",
    downloads: [{ label: "PNG", href: "/media-kit/logo-variants/flarial-wordmark-transparent.png" }],
  },
  {
    title: "Black background wordmark",
    description: "Flarial wordmark with logo on a black background for dark thumbnails, cards, and embeds.",
    href: "/media-kit/logo-variants/flarial-wordmark-black-bg.png",
    preview: "/media-kit/logo-variants/flarial-wordmark-black-bg.png",
    format: "PNG · 600×240",
    downloads: [{ label: "PNG", href: "/media-kit/logo-variants/flarial-wordmark-black-bg.png" }],
  },
  {
    title: "Embed/banner artwork",
    description: "High-resolution Flarial banner artwork for posts, video descriptions, and embeds.",
    href: "/flarial-client-embed.png",
    preview: "/flarial-client-embed.png",
    format: "PNG · 3170×1420",
    downloads: [{ label: "PNG", href: "/flarial-client-embed.png" }],
  },
  {
    title: "Website hero artwork",
    description: "High-resolution branded graphic used by the website.",
    href: "/grafik-1.png",
    preview: "/grafik-1.png",
    format: "PNG · 3170×1420",
    downloads: [{ label: "PNG", href: "/grafik-1.png" }],
  },
];

const iconVariants = [
  { name: "Red", href: "/flarial-icons/red-logo.png", hex: ["#FE4443", "#C43C3A"] },
  { name: "Cyan", href: "/flarial-icons/cyan-logo.png", hex: ["#72D4FF", "#33B1E9"] },
  { name: "White", href: "/flarial-icons/white-logo.png", hex: ["#FFFFFF"] },
  { name: "Media", href: "/flarial-icons/media-logo.png", hex: ["#007556", "#006348"] },
  { name: "Partner", href: "/flarial-icons/partner-logo.png", hex: ["#FFD942", "#EEC40F"] },
  { name: "Booster", href: "/flarial-icons/booster-logo.png", hex: ["#F47FFF", "#D76BE9"] },
  { name: "Supporter", href: "/flarial-icons/supporter-logo.png", hex: ["#FF3C8B", "#C5356E"] },
  { name: "Gamer", href: "/flarial-icons/gamer-logo.png", hex: ["#A750CA", "#9039B3"] },
];

const wordmarkVariants = [
  {
    name: "Scenic background",
    description: "Flarial Client wordmark on a blurred scenic background.",
    href: "/media-kit/logo-variants/flarial-wordmark-scenic-bg.png",
  },
  {
    name: "Light background",
    description: "Flarial Client wordmark on a clean white background.",
    href: "/media-kit/logo-variants/flarial-wordmark-light-bg.png",
  },
  {
    name: "Dark background",
    description: "Flarial Client wordmark on a clean black background.",
    href: "/media-kit/logo-variants/flarial-wordmark-dark-bg.png",
  },
];

const clientScreenshots = [
  {
    title: "Module list",
    description: "Minecraft main menu with Flarial's module list and toggles open.",
    href: "/media-kit/client-screenshots/client-module-list.jpg",
  },
  {
    title: "Keybind settings",
    description: "In-game module settings with keybind controls and shortcuts visible.",
    href: "/media-kit/client-screenshots/client-keybind-settings.jpg",
  },
  {
    title: "Launcher home",
    description: "Flarial launcher home screen with launch and settings actions.",
    href: "/media-kit/client-screenshots/launcher-home.jpg",
  },
  {
    title: "Mobile gameplay",
    description: "Gameplay view with mobile controls and Flarial client buttons visible.",
    href: "/media-kit/client-screenshots/gameplay-mobile-controls.jpg",
  },
  {
    title: "Loading tip",
    description: "Minecraft loading screen with a Flarial tip about opening mods.",
    href: "/media-kit/client-screenshots/loading-client-tip.jpg",
  },
  {
    title: "HUD modules",
    description: "Gameplay HUD example with coordinates, FPS, keystrokes, and controls.",
    href: "/media-kit/client-screenshots/hud-modules-gameplay.jpg",
  },
  {
    title: "Keystrokes layout",
    description: "Flarial keystrokes module settings with layout and scale controls.",
    href: "/media-kit/client-screenshots/keystrokes-layout-settings.jpg",
  },
];

export const mediaKitArticle: DocsArticle = {
  slug: "media-kit",
  title: "Media Kit",
  summary: "Download official Flarial logos, banners, and brand assets for videos, thumbnails, posts, and community projects.",
  icon: Download,
  toc: [
    { title: "Download", href: "#download" },
    { title: "Brand assets", href: "#brand-assets" },
    { title: "Client screenshots", href: "#client-screenshots" },
    { title: "Logo variants", href: "#logo-variants" },
    { title: "Wordmark backgrounds", href: "#wordmark-backgrounds" },
    { title: "Typography", href: "#typography" },
    { title: "Usage notes", href: "#usage-notes" },
  ],
  render: () => (
    <>
      <section
        className={sectionFrameClass}
        style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
      >
        <DocsHeading id="download">Download the kit</DocsHeading>
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
          <div className="space-y-3">
            <p>
              Grab the bundled Flarial Media Kit if you want the main logos, banners, and role-style icon
              variants in one download. Use these for video overlays, thumbnails, social posts, articles,
              and other creator/community content about Flarial.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/media-kit/flarial-media-kit.zip"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-2 font-display text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,88,118,0.25)] transition hover:brightness-110"
              >
                <Download size={16} />
                Download media kit ZIP
              </Link>
              <Link
                href="#brand-assets"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-4 py-2 font-display text-sm font-semibold text-white transition hover:bg-white/[0.06]"
              >
                Browse individual assets
              </Link>
            </div>
          </div>
          <div className="rounded-[var(--radius-xl)] border border-white/[0.08] bg-black/25 p-4 text-sm text-[var(--color-text-mute)]">
            <div className="mb-2 flex items-center gap-2 font-display font-semibold text-white">
              <Sparkles size={16} className="text-[var(--color-accent)]" />
              Included
            </div>
            <ul className="space-y-1.5">
              <li>• Primary SVG logo</li>
              <li>• Transparent logo-and-name wordmark</li>
              <li>• Black background wordmark</li>
              <li>• High-resolution transparent PNG logo exports</li>
              <li>• High-resolution banner artwork</li>
              <li>• Client screenshots</li>
              <li>• Flarial icon variants</li>
              <li>• Wordmark background variants</li>
              <li>• Space Grotesk typography notes</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className={sectionFrameClass}
        style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
      >
        <DocsHeading id="brand-assets">Brand assets</DocsHeading>
        <p>Download individual high-quality assets when you only need one logo or banner.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {brandAssets.map((asset) => (
            <div key={asset.href} className="overflow-hidden rounded-[var(--radius-xl)] bg-black/25">
              <div className="relative flex aspect-[16/9] items-center justify-center bg-black/35 p-5">
                <Image
                  src={asset.preview}
                  alt={asset.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain p-5"
                />
              </div>
              <div className="space-y-3 p-4">
                <div>
                  <div className="font-display text-[17px] font-semibold text-white">{asset.title}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {asset.format}
                  </div>
                </div>
                <p className="text-sm">{asset.description}</p>
                <div className="flex flex-wrap gap-2">
                  {asset.downloads.map((download) => (
                    <Link
                      key={download.href}
                      href={download.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/[0.06] hover:text-[var(--color-accent)]"
                    >
                      {download.label} <ExternalLink size={13} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={sectionFrameClass}
        style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
      >
        <DocsHeading id="client-screenshots">Client screenshots</DocsHeading>
        <p>
          Use these high-resolution client screenshots for videos, thumbnails, articles, social posts, and
          creator graphics that need real Flarial UI/gameplay examples.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {clientScreenshots.map((screenshot) => (
            <div key={screenshot.href} className="overflow-hidden rounded-[var(--radius-xl)] bg-black/25">
              <div className="relative aspect-[20/9] bg-black/35">
                <Image
                  src={screenshot.href}
                  alt={screenshot.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-4">
                <div>
                  <div className="font-display text-[17px] font-semibold text-white">{screenshot.title}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    JPG · 2400×1080
                  </div>
                </div>
                <p className="text-sm">{screenshot.description}</p>
                <Link
                  href={screenshot.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/[0.06] hover:text-[var(--color-accent)]"
                >
                  Download JPG <ExternalLink size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={sectionFrameClass}
        style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
      >
        <DocsHeading id="logo-variants">Logo variants</DocsHeading>
        <p>
          These 128×128 icon variants are useful for credits, badges, small overlays, and community
          pages where a compact Flarial mark fits better than a full banner.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {iconVariants.map((variant) => (
            <Link
              key={variant.href}
              href={variant.href}
              className="group rounded-[var(--radius-xl)] bg-black/25 p-4 text-center transition hover:bg-white/[0.06]"
            >
              <div className="relative mx-auto mb-3 size-20">
                <Image src={variant.href} alt={`${variant.name} Flarial logo`} fill sizes="80px" className="object-contain" />
              </div>
              <div className="font-display text-sm font-semibold text-white group-hover:text-[var(--color-accent)]">
                {variant.name}
              </div>
              <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                {variant.hex.map((hex) => (
                  <span
                    key={hex}
                    className="inline-flex items-center gap-1 rounded-full bg-black/30 px-2 py-1 font-mono text-[10px] text-[var(--color-text-mute)]"
                  >
                    <span
                      className="size-2 rounded-full border border-white/20"
                      style={{ backgroundColor: hex }}
                      aria-hidden="true"
                    />
                    {hex}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        className={sectionFrameClass}
        style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
      >
        <DocsHeading id="wordmark-backgrounds">Wordmark background variants</DocsHeading>
        <p>
          Use these Flarial Client wordmarks when you need a ready-to-place banner-style mark with a
          light, dark, or scenic background already included.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {wordmarkVariants.map((variant) => (
            <div key={variant.href} className="overflow-hidden rounded-[var(--radius-xl)] bg-black/25">
              <div className="relative aspect-[464/82] bg-black/35">
                <Image
                  src={variant.href}
                  alt={variant.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-4">
                <div>
                  <div className="font-display text-[17px] font-semibold text-white">{variant.name}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    PNG · 464×82
                  </div>
                </div>
                <p className="text-sm">{variant.description}</p>
                <Link
                  href={variant.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/[0.06] hover:text-[var(--color-accent)]"
                >
                  Download PNG <ExternalLink size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={sectionFrameClass}
        style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
      >
        <DocsHeading id="typography">Typography</DocsHeading>
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
          <div className="space-y-3">
            <p>
              Flarial uses <strong className="font-display text-white">Space Grotesk</strong> as its primary
              brand/display font. Use it for headings, thumbnails, banners, and creator graphics when you want
              the artwork to feel close to the official Flarial site.
            </p>
            <Link
              href="https://fonts.google.com/specimen/Space+Grotesk"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-4 py-2 font-display text-sm font-semibold text-white transition hover:bg-white/[0.06]"
            >
              Download Space Grotesk <ExternalLink size={14} />
            </Link>
          </div>
          <div className="rounded-[var(--radius-xl)] border border-white/[0.08] bg-black/25 p-4">
            <div className="font-display text-4xl font-semibold tracking-[-0.04em] text-white">Aa</div>
            <div className="mt-3 font-display text-xl font-semibold text-white">Space Grotesk</div>
            <p className="mt-2 text-sm text-[var(--color-text-mute)]">
              Geometric, clean, and chunky enough for Flarial branding without turning into corporate soup.
            </p>
          </div>
        </div>
      </section>

      <section
        className={sectionFrameClass}
        style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
      >
        <DocsHeading id="usage-notes">Usage notes</DocsHeading>
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard icon={<CheckCircle2 size={16} className="text-[var(--color-accent)]" />} title="Good uses">
            <p>Use these assets for videos, thumbnails, news posts, guides, tutorials, and community pages about Flarial.</p>
          </InfoCard>
          <InfoCard icon={<ShieldCheck size={16} className="text-[var(--color-accent)]" />} title="Keep it recognizable">
            <p>Do not stretch, heavily distort, or recolor the logos in a way that makes them hard to recognize.</p>
          </InfoCard>
          <InfoCard icon={<BookOpen size={16} className="text-[var(--color-accent)]" />} title="Credit clearly">
            <p>When possible, link back to Flarial or mention that the assets are official Flarial brand assets.</p>
          </InfoCard>
        </div>
      </section>
    </>
  ),
};
