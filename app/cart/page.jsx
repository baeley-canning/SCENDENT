import CartClient from "./CartClient";

export const metadata = {
  title: "Your Cart | Scendent",
  description: "Review your Scendent merch and proceed to secure Stripe checkout.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CartPage() {
  return <CartClient />;
}
