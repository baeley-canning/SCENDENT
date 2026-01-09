import AddAddressClient from "./AddAddressClient";

export const metadata = {
  title: "Add Address | Scendent",
  description: "Add a delivery address for your Scendent merch order.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AddAddressPage() {
  return <AddAddressClient />;
}
