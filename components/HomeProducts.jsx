import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {

  const { products, router } = useAppContext()

  return (
    <div className="flex flex-col items-center pt-14 section-animate" id="shop">
      <div className="w-full">
        <p className="section-kicker">Merch drop</p>
        <p className="section-title mt-2">Wear the movement</p>
        <p className="mt-3 text-sm md:text-base text-ink-700 max-w-2xl">
          Clean fits, bold reminders, and purpose-driven pieces. Every order supports
          youth mental health initiatives.
        </p>
        <div className="mt-6 grid gap-3 text-xs md:text-sm text-ink-700 sm:grid-cols-3 max-w-2xl uppercase tracking-[0.18em]">
          <div className="rounded-lg border border-sage-500/25 bg-linen-100/90 px-4 py-3">
            NZ-wide shipping on all drops
          </div>
          <div className="rounded-lg border border-sage-500/25 bg-linen-100/90 px-4 py-3">
            14-day returns on unopened merch
          </div>
          <div className="rounded-lg border border-sage-500/25 bg-linen-100/90 px-4 py-3">
            Secure checkout via Stripe
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-8 pb-14 w-full">
        {products.map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
      <button onClick={() => { router.push('/all-products') }} className="btn-outline">
        Browse all merch
      </button>
    </div>
  );
};

export default HomeProducts;
