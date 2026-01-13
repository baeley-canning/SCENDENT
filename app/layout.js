import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Scendent",
    url: "https://scendent.co.nz",
    description:
      "Scendent is a youth mental health social enterprise funding support through merch, media, and community events.",
    logo: "https://scendent.co.nz/favicon.ico",
    sameAs: [
      "https://www.instagram.com/scendentofficial/",
      "http://www.tiktok.com/@scendent",
      "https://www.facebook.com/scendentofficial",
      "https://www.youtube.com/channel/UCvCEm4fblaA0gfrDfjg-33Q",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Scendent",
    url: "https://scendent.co.nz",
    description:
      "Mental health merch, Scendent Media services, and community events supporting youth wellbeing in Aotearoa.",
    publisher: {
      "@type": "Organization",
      name: "Scendent",
    },
  },
];

export const metadata = {
  title: "Scendent | Mental Health Merch + Media Studio",
  description:
    "Scendent is a youth mental health social enterprise. Shop merch that funds support or partner with Scendent Media for content and strategy.",
  applicationName: "Scendent",
  keywords: [
    "Scendent",
    "mental health",
    "youth mental health",
    "Aotearoa",
    "New Zealand",
    "mental health merch",
    "Scendent Media",
    "purpose-led media",
    "community events",
  ],
  authors: [{ name: "Scendent" }],
  category: "Mental health",
  creator: "Scendent",
  publisher: "Scendent",
  metadataBase: new URL("https://scendent.co.nz"),
  alternates: {
    canonical: "https://scendent.co.nz",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Scendent | Mental Health Merch + Media Studio",
    description:
      "Shop Scendent merch that funds mental health support, or work with Scendent Media to grow your brand with purpose-led content.",
    url: "https://scendent.co.nz",
    siteName: "Scendent",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "/images/scendent_hero_mission.svg",
        width: 1200,
        height: 630,
        alt: "Scendent mental health community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scendent | Mental Health Merch + Media Studio",
    description:
      "Merch, community events, and Scendent Media. Built to support youth mental health and purposeful growth.",
    images: ["/images/scendent_hero_mission.svg"],
  },
};

export const viewport = {
  themeColor: "#0a0c0d",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className="antialiased text-ink-900">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Toaster />
          <AppContextProvider>
            <div className="site-shell">{children}</div>
          </AppContextProvider>
        </body>
      </html>
  );
}
