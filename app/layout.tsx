import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteFrame } from "./components/site/SiteFrame";

/*
  Limit font weights to the ones actually used in the design (grepped from
  class usage). Each Google Font subset/weight is a separate @font-face,
  so trimming unused weights drops both CSS and woff2 preload weight
  without changing rendered glyphs.
*/
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://flarial.xyz";
const SITE_NAME = "Flarial";
const EMBED_IMAGE = "/grafik-1.png";
const DESCRIPTION =
  "The Minecraft Bedrock client. 140+ modules, a real-time ClickGUI, and a scripting marketplace. Free, forever — for Windows and Android.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · The Minecraft Bedrock Client`,
    template: "%s · Flarial",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Flarial" }],
  keywords: [
    "Flarial",
    "Minecraft Bedrock client",
    "Bedrock utility client",
    "Minecraft client",
    "MCPE client",
    "Bedrock mods",
    "ClickGUI",
    "Minecraft Windows 10 client",
    "Minecraft Android client",
    "Bedrock FPS",
    "Minecraft scripting",
    "Flarial download",
    "Bedrock client",
    "MCPE mods",
    "Minecraft Bedrock client download",
    "free bedrock client",
    "Minecraft PE client",
    "best bedrock client",
    "bedrock launcher",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} · The Minecraft Bedrock Client`,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: EMBED_IMAGE,
        width: 2048,
        height: 871,
        alt: "Flarial · Minecraft Bedrock client",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} · The Minecraft Bedrock Client`,
    description: DESCRIPTION,
    images: [EMBED_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/icon.svg" },
  formatDetection: { telephone: false, address: false, email: false },
  other: process.env.NEXT_PUBLIC_ADSENSE_CLIENT
    ? { "google-adsense-account": process.env.NEXT_PUBLIC_ADSENSE_CLIENT }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#ff233a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD: site identity for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: SITE_NAME,
                  description: DESCRIPTION,
                  inLanguage: "en-US",
                  publisher: { "@id": `${SITE_URL}/#org` },
                },
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#org`,
                  name: SITE_NAME,
                  url: SITE_URL,
                  logo: `${SITE_URL}/icon.svg`,
                  sameAs: [
                    "https://discord.gg/flarial",
                    "https://www.youtube.com/@flarialclient",
                  ],
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Flarial",
                  applicationCategory: "GameApplication",
                  operatingSystem: "Windows 10, Windows 11, Android",
                  description:
                    "Flarial is a free Minecraft Bedrock client (MCPE client) for Windows 10/11 and Android — a TOS-compliant bedrock utility client with 140+ modules, a real-time ClickGUI, and an FPS boost.",
                  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                },
              ],
            }),
          }}
        />
        {/* AdSense — loaded in <head> on every page so the crawler can verify */}
        {ADSENSE_CLIENT ? (
          <Script
            id="adsense-loader"
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        ) : null}
      </head>
      <body className="min-h-full flex flex-col">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
