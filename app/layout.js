import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Scendent | Mental Health Merch + Media Studio",
  description:
    "Scendent is a youth mental health social enterprise. Shop merch that funds support or partner with Scendent Media for content and strategy.",
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

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className="antialiased text-ink-900">
          <Toaster />
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
  );
}
