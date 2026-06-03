import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Smartphone, Download, ShieldCheck, Apple, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Flarial for MCPE — Minecraft Bedrock Client for Android",
  description:
    "Flarial is a Minecraft Bedrock (MCPE) client coming to Android. Learn the real mobile status, how the Android build works, the APK/launcher path, and the iOS situation.",
  keywords: [
    "mcpe client",
    "flarial client mobile",
    "flarial client apk",
    "flarial client android",
    "minecraft bedrock client mobile",
    "mcpe client android",
  ],
  alternates: { canonical: "/mcpe-client" },
  openGraph: {
    title: "Flarial for MCPE — Minecraft Bedrock Client for Android",
    description:
      "The honest status of Flarial on Android: closed beta, how it installs, APK vs. launcher, and why iOS is not supported.",
    type: "website",
    url: "https://flarial.xyz/mcpe-client",
  },
};

const faqs = [
  {
    q: "Is there a Flarial client APK for Android?",
    a: "Flarial mobile is distributed through the Android closed beta on Google Play, not as a loose APK from random sites. Only install from a link the Flarial team has published officially — any other \"Flarial APK\" is unofficial and unsafe.",
  },
  {
    q: "Does Flarial work on iOS (iPhone / iPad)?",
    a: "No. There is no iOS release and it is not planned. Apple's sandbox blocks the client-injection and modding path Flarial relies on, and App Store policy restricts the kind of native-code loading the client needs. Flarial will not point you toward jailbreaking.",
  },
  {
    q: "Is the Android build a texture pack or behavior pack?",
    a: "No. The Android build works like the Windows client rather than a resource pack — it does things a texture or behavior pack simply cannot replicate.",
  },
  {
    q: "How do I become a mobile tester?",
    a: "Join the Discord and check the announcements and tester channels. If applications are open, follow the Android tester form. Tester access is limited and may be closed while the build is still in beta.",
  },
];

export default function McpeClientPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Flarial for MCPE",
        operatingSystem: "Android",
        applicationCategory: "GameApplication",
        description:
          "Flarial is a TOS-compliant Minecraft Bedrock (MCPE) utility client with 140+ modules and a ClickGUI, coming to Android.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-nav)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
          <Smartphone size={13} />
          Mobile · Android beta
        </div>
        <h1 className="font-display text-[38px] font-semibold leading-[1.0] tracking-[-0.025em] text-white sm:text-[58px]">
          Flarial for MCPE — Minecraft Bedrock Client for Android.
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-text-mute)] sm:text-[16px]">
          Flarial is a free, TOS-compliant Minecraft Bedrock utility client — the same kind of
          quality-of-life client PC players use, now being built for{" "}
          <span className="text-white">Android (MCPE)</span>. This page covers the real mobile
          status, how the Android build installs, and the iOS situation, with no overpromising.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/download/"
            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 py-3 font-display text-[14px] font-semibold text-white shadow-[var(--shadow-glow)]"
          >
            <Download size={16} />
            Get Flarial for Android
          </Link>
          <Link
            href="/docs/troubleshooting-mobile-beta/"
            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-bg-nav)] px-5 py-3 font-display text-[14px] font-semibold text-white hover:brightness-110"
          >
            <BookOpen size={16} className="text-[var(--color-accent)]" />
            Mobile &amp; beta docs
          </Link>
        </div>
      </header>

      <section className="mt-12 space-y-4">
        <h2 className="font-display text-[26px] font-semibold leading-tight text-white">
          What mobile support exists today
        </h2>
        <div className="rounded-[var(--radius-2xl)] p-5 sm:p-7" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <p className="text-[14px] leading-relaxed text-[var(--color-text-mute)]">
            Flarial mobile is being built <span className="text-white">Android-first</span> and is
            currently in a <span className="text-white">closed beta</span>. It behaves like the
            Windows client — not a texture pack or behavior pack — so you get real modules and the
            in-game menu rather than a cosmetic overlay. Android is still in beta, so there is no
            public release date yet and tester access is limited.
          </p>
          <ul className="mt-4 grid gap-3 text-[14px] text-[var(--color-text)]">
            {[
              "Android-only for now — the build is distributed through the Google Play closed beta.",
              "Works like the desktop client, with the same module-based design and an in-game menu.",
              "Free, like the Windows client — no paid tier and no cosmetics paywall.",
              "TOS-compliant by default: the standard module set is quality-of-life, not combat hacks.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-[26px] font-semibold leading-tight text-white">
          How to install Flarial on Android
        </h2>
        <div className="rounded-[var(--radius-2xl)] p-5 sm:p-7" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <ol className="grid gap-3">
            {[
              <>
                Open the{" "}
                <Link href="/download/" className="font-semibold text-white underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
                  download page
                </Link>{" "}
                and switch to the Android option, or tap “Get on Google Play.”
              </>,
              "Join the Flarial Discord — the Android build is a closed beta, so you opt in through the published Google Play beta link.",
              "Install from Google Play once you have access. Do not sideload a random \"Flarial APK\" from third-party sites; only use links the team has published.",
              "Launch Minecraft Bedrock through Flarial and open the in-game menu to configure your modules.",
            ].map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-accent)] text-[11px] font-bold text-white">
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1 text-[14px] leading-relaxed text-[var(--color-text)]">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-[var(--radius-xl)] border border-[rgba(255,35,58,0.28)] bg-black/25 p-4">
            <div className="flex items-center gap-2 font-display text-[15px] font-semibold text-white">
              <ShieldCheck size={16} className="text-[var(--color-accent)]" />
              APK safety
            </div>
            <p className="mt-1 text-[14px] leading-relaxed text-[var(--color-text-mute)]">
              There is no official standalone APK download outside the channels the Flarial team
              publishes. Files labeled “Flarial client APK” on other sites are not from us — installing
              them is a security risk.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <div className="flex items-center gap-2">
          <Apple size={18} className="text-[var(--color-text-mute)]" />
          <h2 className="font-display text-[26px] font-semibold leading-tight text-white">
            iOS &amp; common questions
          </h2>
        </div>
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-[var(--radius-xl)] p-5"
              style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}
            >
              <h3 className="font-display text-[16px] font-semibold text-white">{faq.q}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-mute)]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <Link
          href="/download/"
          className="flex items-center justify-between gap-3 rounded-[var(--radius-xl)] px-5 py-4 text-white transition-colors hover:brightness-110"
          style={{ background: "var(--color-bg-nav)" }}
        >
          <span className="text-[14px]">
            Ready to try it? Head to the download page for the Windows client and Android beta.
          </span>
          <ArrowRight size={16} className="shrink-0 text-[var(--color-text-mute)]" />
        </Link>
      </section>
    </div>
  );
}
