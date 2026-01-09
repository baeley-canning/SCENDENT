"use client";
import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Loading from "@/components/Loading";
import { useAppContext } from "@/context/AppContext";
import React from "react";

const ProductDetail = ({ product, featuredProducts, isLoading }) => {
  const { router, addToCart, currency } = useAppContext();
  const [mainImage, setMainImage] = useState(product?.image?.[0] ?? null);
  const imageAlt = product?.imageAlt || product?.name || "Product image";

  useEffect(() => {
    setMainImage(product?.image?.[0] ?? null);
  }, [product]);

  const detailsByCategory = {
    Tees: {
      fabric: "Midweight cotton blend for daily wear.",
      care: "Machine wash cold, inside out. Hang dry.",
      fit: "Unisex regular fit.",
    },
    Hoodies: {
      fabric: "Soft fleece cotton blend with brushed interior.",
      care: "Machine wash cold. Low tumble or hang dry.",
      fit: "Relaxed fit with drop shoulders.",
    },
    Caps: {
      fabric: "Structured cotton twill with adjustable strap.",
      care: "Spot clean only.",
      fit: "One size, adjustable.",
    },
    Accessories: {
      fabric: "Durable canvas, metal, or woven blends.",
      care: "Wipe clean and store dry.",
      fit: "Everyday essentials.",
    },
    Stickers: {
      fabric: "Weather-resistant vinyl.",
      care: "Apply to clean, dry surfaces.",
      fit: "Fits laptops, bottles, boards.",
    },
    Bundle: {
      fabric: "Curated merch set with drop pricing.",
      care: "See each item for care guidance.",
      fit: "Best value, limited quantities.",
    },
  };

  const detail = product
    ? detailsByCategory[product.category] || {
        fabric: "Premium materials built for everyday wear.",
        care: "Follow the care label for longevity.",
        fit: "Designed for comfort and movement.",
      }
    : null;

  if (isLoading) {
    return <Loading />;
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="px-6 md:px-16 lg:px-32 pt-16">
          <div className="card-surface p-10 text-center">
            <p className="text-ink-900 text-lg font-medium">Product not found.</p>
            <p className="text-sm text-ink-700 mt-2">
              Try browsing the merch drop to find something similar.
            </p>
            <button
              onClick={() => router.push("/all-products")}
              className="btn-primary mt-5"
            >
              Browse products
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="px-5 lg:px-16 xl:px-20">
            <div className="rounded-2xl overflow-hidden bg-linen-100/90 border border-sage-500/20 mb-4">
              <Image
                src={mainImage || product.image[0]}
                alt={imageAlt}
                className="w-full h-auto object-cover"
                width={1280}
                height={720}
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(image)}
                  className="cursor-pointer rounded-xl overflow-hidden bg-linen-100/90 border border-sage-500/20"
                >
                  <Image
                    src={image}
                    alt={`${imageAlt} view ${index + 1}`}
                    className="w-full h-auto object-cover"
                    width={1280}
                    height={720}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-medium text-ink-900 mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                <Image className="h-4 w-4" src={assets.star_dull_icon} alt="star_dull_icon" />
              </div>
              <p className="text-ink-500">(4.5)</p>
            </div>
            <p className="text-ink-700 mt-3">
              {product.description}
            </p>
            <p className="text-3xl font-medium mt-6">
              {currency}{product.offerPrice}
              <span className="text-base font-normal text-ink-500/70 line-through ml-2">
                {currency}{product.price}
              </span>
            </p>
            <hr className="bg-ink-500/30 my-6" />
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse w-full max-w-72">
                <tbody>
                  <tr>
                    <td className="text-ink-500 font-medium">Brand</td>
                    <td className="text-ink-700/70">Scendent</td>
                  </tr>
                  <tr>
                    <td className="text-ink-500 font-medium">Collection</td>
                    <td className="text-ink-700/70">{product.category}</td>
                  </tr>
                  <tr>
                    <td className="text-ink-500 font-medium">Impact</td>
                    <td className="text-ink-700/70">Profits support youth mental health</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {detail ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-sm text-ink-700">
                <div className="rounded-2xl border border-sage-500/20 bg-linen-100/90 p-4">
                  <p className="text-ink-900 font-medium">Fabric</p>
                  <p className="mt-1">{detail.fabric}</p>
                </div>
                <div className="rounded-2xl border border-sage-500/20 bg-linen-100/90 p-4">
                  <p className="text-ink-900 font-medium">Care</p>
                  <p className="mt-1">{detail.care}</p>
                </div>
                <div className="rounded-2xl border border-sage-500/20 bg-linen-100/90 p-4">
                  <p className="text-ink-900 font-medium">Fit</p>
                  <p className="mt-1">{detail.fit}</p>
                </div>
              </div>
            ) : null}

            <div className="flex items-center mt-10 gap-4">
              <button
                onClick={() => addToCart(product._id)}
                className="w-full py-3.5 bg-linen-100 text-ink-700 hover:bg-linen-50 transition rounded-full"
              >
                Add to Cart
              </button>
              <button
                onClick={() => { addToCart(product._id); router.push("/cart"); }}
                className="w-full py-3.5 bg-sage-500 text-linen-50 hover:bg-sage-600 transition rounded-full"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-4 mt-16">
            <p className="text-3xl font-medium">
              Featured <span className="font-medium text-sage-600">Products</span>
            </p>
            <div className="w-28 h-0.5 bg-sage-600 mt-2"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
            {(featuredProducts || []).slice(0, 5).map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </div>
          <button className="btn-outline mb-16">
            See more
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
