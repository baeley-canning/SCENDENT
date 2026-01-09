import { Suspense } from "react";
import Loading from "@/components/Loading";
import ProductPageClient from "./ProductPageClient";

export const metadata = {
  title: "Product | Scendent",
  description: "Shop Scendent merch that funds youth mental health support.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProductPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductPageClient />
    </Suspense>
  );
}
