"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const AllProductsClient = () => {
  const { products } = useAppContext();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const seen = new Map();
    products.forEach((product) => {
      const raw = (product.category || "").trim();
      if (!raw) return;
      const key = raw.toLowerCase();
      if (!seen.has(key)) {
        seen.set(key, raw);
      }
    });
    return Array.from(seen.values()).sort((a, b) => a.localeCompare(b));
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    const target = activeCategory.toLowerCase();
    return products.filter((product) => {
      const raw = (product.category || "").trim().toLowerCase();
      return raw === target;
    });
  }, [products, activeCategory]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
        <div className="flex flex-col items-start pt-12 section-animate">
          <p className="section-kicker">Merch</p>
          <p className="section-title mt-2">All drops</p>
          <p className="mt-3 text-sm md:text-base text-ink-700 max-w-2xl">
            Every order supports youth mental health initiatives and community-led care.
          </p>
          <div className="w-16 h-0.5 bg-sage-600 rounded-sm mt-4"></div>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-8">
          <button
            className={`px-4 py-1.5 rounded-sm text-xs uppercase tracking-[0.28em] border transition font-accent ${
              activeCategory === "All"
                ? "bg-sage-500 text-linen-50 border-sage-500"
                : "border-ink-900/15 text-ink-700 hover:border-sage-500/60 hover:text-sage-300 hover:bg-linen-100"
            }`}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-1.5 rounded-sm text-xs uppercase tracking-[0.28em] border transition font-accent ${
                activeCategory === category
                  ? "bg-sage-500 text-linen-50 border-sage-500"
                  : "border-ink-900/15 text-ink-700 hover:border-sage-500/60 hover:text-sage-300 hover:bg-linen-100"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full card-surface p-8 text-center text-ink-700">
              No products found in this category yet.
            </div>
          ) : (
            filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProductsClient;
