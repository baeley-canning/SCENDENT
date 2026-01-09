import AllProductsClient from "./AllProductsClient";

const title = "All Merch | Scendent";
const description =
  "Shop the full Scendent merch drop. Every order funds youth mental health support and community initiatives in Aotearoa.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: "/images/scendent_hero_merch.svg",
        width: 1200,
        height: 630,
        alt: "Scendent merch drop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/scendent_hero_merch.svg"],
  },
};

export default function AllProductsPage() {
  return <AllProductsClient />;
}
