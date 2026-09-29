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
    "NAVA",
    "Hassan Baig",
    "Pakistani Luxury Fashion",
    "Couture Pakistan",
    "Sindhi Ajrak",
    "Contemporary Silhouette",
    "Handcrafted Tailoring",
    "NAVA Atelier",
    "Lahore Fashion House",
    "Raw Silk Trench",
    "Intangible Cultural Heritage",
  ],
  authors: [{ name: BRAND.name }, { name: "Hassan Baig", url: "https://nava-atelier.com/about#founder" }],
  creator: "Hassan Baig",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://nava-atelier.com/#organization",
                  name: BRAND.name,
                  legalName: BRAND.legalName,
                  url: "https://nava-atelier.com",
                  logo: "https://nava-atelier.com/images/hero-couture.jpg",
                  founder: {
                    "@type": "Person",
                    name: BRAND.founder.name,
                    jobTitle: "Founder & Creative Director",
                    description: "Software Engineer & Fashion Atelier Architect",
                    image: "https://nava-atelier.com/images/founder-hassan-baig.jpg",
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Lahore",
                    addressCountry: "PK",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://nava-atelier.com/#website",
                  url: "https://nava-atelier.com",
                  name: BRAND.name,
                  description: BRAND.statement,
                  publisher: {
                    "@id": "https://nava-atelier.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <IntroCurtain />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
