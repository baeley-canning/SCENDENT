import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    image: assets.scendent_hero_merch,
    title: "Merch + Apparel",
    description: "Drops designed to start conversations and fund real support.",
    href: "/all-products",
  },
  {
    id: 2,
    image: assets.scendent_hero_events,
    title: "Events + Community",
    description: "Workshops and festivals that connect people and amplify change.",
    href: "/events",
  },
  {
    id: 3,
    image: assets.scendent_hero_media,
    title: "Scendent Media",
    description: "Content and strategy services that grow purpose-led brands.",
    href: "/media-services",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-16 section-animate" id="pillars">
      <div className="flex flex-col items-center text-center">
        <p className="section-kicker">Our pillars</p>
        <p className="section-title mt-2">Merch, media, and mental health</p>
        <p className="mt-3 text-sm md:text-base text-ink-700 max-w-2xl">
          Each pillar funds the next. Together they create sustainable support for youth
          mental health and purposeful growth for the community.
        </p>
        <div className="w-28 h-0.5 bg-sage-600 mt-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description, href }) => (
          <div key={id} className="relative group overflow-hidden rounded-[28px] border border-ink-900/10 bg-linen-50/90 shadow-[0_26px_60px_-48px_rgba(11,14,18,0.5)]">
            <Image
              src={image}
              alt={title}
              className="group-hover:brightness-95 transition duration-300 w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-linen-50/95 via-linen-50/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="group-hover:-translate-y-3 transition duration-300 absolute bottom-8 left-8 text-ink-900 space-y-2">
              <p className="font-semibold text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-64 text-ink-700">
                {description}
              </p>
              <Link href={href} className="btn-primary">
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
