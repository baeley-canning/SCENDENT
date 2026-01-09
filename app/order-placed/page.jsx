import { Suspense } from "react";
import OrderPlacedClient from "./OrderPlacedClient";

export const metadata = {
  title: "Order Confirmed | Scendent",
  description: "Your Scendent order has been placed. Check your email for confirmation.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OrderPlacedPage() {
  return (
    <Suspense fallback={<div className="min-h-screen px-6 md:px-16 lg:px-32 py-14" />}>
      <OrderPlacedClient />
    </Suspense>
  );
}
