import React from 'react'
import Link from 'next/link';
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {

    const { currency, addToCart } = useAppContext()
    const productId = product._id || product.id || "";
    const productLink = productId
        ? `/product?id=${encodeURIComponent(productId)}`
        : "/all-products";
    const imageAlt = product.imageAlt || product.name;

    return (
        <Link
            href={productLink}
            className="group flex flex-col items-start gap-0.5 max-w-[230px] w-full cursor-pointer"
        >
            <div className="relative bg-linen-50/90 border border-ink-900/10 rounded-[26px] w-full h-52 flex items-center justify-center shadow-[0_14px_40px_-28px_rgba(11,14,18,0.5)] transition group-hover:-translate-y-0.5">
                <Image
                    src={product.image[0]}
                    alt={imageAlt}
                    className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
                    width={800}
                    height={800}
                />
                <button className="absolute top-3 right-3 bg-linen-50/90 p-2 rounded-full shadow-md border border-ink-900/10">
                    <Image
                        className="h-3 w-3"
                        src={assets.heart_icon}
                        alt="heart_icon"
                    />
                </button>
            </div>

            <p className="md:text-base font-semibold pt-3 w-full truncate text-ink-900">{product.name}</p>
            <p className="w-full text-xs text-ink-700 max-sm:hidden truncate">{product.description}</p>
            <div className="flex items-center gap-2">
                <p className="text-xs text-ink-500">{4.5}</p>
                <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                            key={index}
                            className="h-3 w-3"
                            src={
                                index < Math.floor(4)
                                    ? assets.star_icon
                                    : assets.star_dull_icon
                            }
                            alt="star_icon"
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-end justify-between w-full mt-1">
                <p className="text-base font-semibold text-ink-900">{currency}{product.offerPrice}</p>
                <button
                    onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        if (productId) {
                            addToCart(productId);
                        }
                    }}
                    className="max-sm:hidden px-4 py-1.5 text-ink-700 border border-ink-900/15 rounded-full text-xs hover:border-ink-900/35 hover:bg-linen-100 transition"
                >
                    Add to cart
                </button>
            </div>
        </Link>
    )
}

export default ProductCard
