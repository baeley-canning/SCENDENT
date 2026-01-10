import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const communityPhoto =
  "https://scendent.co.nz/cdn/shop/files/IMG_4034.jpg?v=1661904070&width=1200";

const galleryImages = [
  { src: communityPhoto, label: "Charity in action" },
  { src: assets.scendent_product_tee, label: "Tees" },
  { src: assets.scendent_product_hoodie, label: "Hoodies" },
  { src: assets.scendent_product_cap, label: "Caps" },
  { src: assets.scendent_product_sticker, label: "Sticker packs" },
  { src: assets.scendent_hero_events, label: "Community events" },
];

const Gallery = () => {
  return (
    <section className="mt-16 section-animate" id="gallery">
      <div className="flex flex-col items-start">
        <p className="section-kicker">In the community</p>
        <h2 className="section-title mt-2">Merch, moments, and movement</h2>
        <p className="mt-3 text-sm md:text-base text-ink-700 max-w-2xl">
          From drops to events, Scendent is built on people showing up for each other.
          Here is a snapshot of the movement in action.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {galleryImages.map((image) => (
          <div
            key={image.label}
            className="group rounded-[24px] overflow-hidden border border-sage-500/20 bg-linen-100/90 shadow-[0_18px_45px_-32px_rgba(0,0,0,0.7)] transition hover:shadow-[0_18px_55px_-28px_rgba(57,255,20,0.2)]"
          >
            <Image
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition"
              src={image.src}
              alt={image.label}
              width={600}
              height={600}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="px-4 py-3 text-xs uppercase tracking-[0.2em] text-sage-300">
              {image.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
