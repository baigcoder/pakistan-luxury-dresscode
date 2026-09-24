import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "../styles/globals.css";
import { BRAND } from "@/config/brand";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F1EEE8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${BRAND.name}`,
    default: `${BRAND.name} — Contemporary Pakistani Luxury Fashion House`,
  },
  description: BRAND.statement,
  keywords: [
    "Pakistani Luxury Fashion",
    "Couture Pakistan",
    "Sindhi Ajrak",
    "Contemporary Silhouette",
    "Handcrafted Tailoring",
    "NAVA Atelier",
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  metadataBase: new URL("https://nava-atelier.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nava-atelier.com",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.statement,
    siteName: BRAND.name,
    images: [
      {
        url: "/images/hero-couture.jpg",
        width: 1200,
        height: 1500,
        alt: `${BRAND.name} Campaign — The New Pakistani Silhouette`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.statement,
    images: ["/images/hero-couture.jpg"],
  },
};

import { AppShell } from "@/components/layout";
import { IntroCurtain } from "@/components/motion/IntroCurtain";
import { introSkipScript } from "@/components/motion/introScript";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${serif.variable} ${sans.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introSkipScript }} />
      </head>
      <body>
        <IntroCurtain />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
