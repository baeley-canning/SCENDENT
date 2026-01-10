import React from "react";
import Image from "next/image";
import Link from "next/link";
import { scendentImages, withImageWidth } from "@/lib/scendentImages";

const Banner = () => {
  return (
    <div className="hero-surface section-animate flex flex-col md:flex-row items-center justify-between my-16" id="media">
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-mist-200/60 blur-3xl"></div>
      <div className="absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-clay-300/60 blur-3xl"></div>
      <div className="relative flex flex-col items-start justify-center text-left space-y-4 px-6 md:px-12 py-12 md:py-16 max-w-xl">
        <span className="pill-tag">Scendent Media</span>
        <h2 className="section-title">Purpose-led media that turns attention into action</h2>
        <p className="text-sm md:text-base text-ink-700">
          Content creation, strategy, and social management for brands that want to
          grow with impact. Half of profits fund youth mental health support.
        </p>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.24em] text-sage-300">
          <span className="rounded-full border border-sage-500/30 bg-linen-100/80 px-3 py-1">
            Strategy + production
          </span>
          <span className="rounded-full border border-sage-500/30 bg-linen-100/80 px-3 py-1">
            Social systems
          </span>
          <span className="rounded-full border border-sage-500/30 bg-linen-100/80 px-3 py-1">
            Impact-led pricing
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/media-services" className="btn-primary">
            Explore media services
          </Link>
          <a href="mailto:hello@scendent.co.nz" className="btn-outline">
            Book a consult
          </a>
        </div>
      </div>
      <div className="relative flex items-center gap-4 px-6 pb-10 md:pb-0">
        <div className="relative w-44 md:w-52 aspect-[3/4] drop-shadow-[0_20px_50px_rgba(11,14,18,0.25)]">
          <Image
            src={withImageWidth(scendentImages.ryanWorking, 900)}
            alt="Scendent Media strategy session"
            fill
            sizes="(max-width: 768px) 45vw, 220px"
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="relative w-44 md:w-52 aspect-[3/4] drop-shadow-[0_20px_50px_rgba(11,14,18,0.25)]">
          <Image
            src={withImageWidth(scendentImages.filmReel, 900)}
            alt="Creative production in motion"
            fill
            sizes="(max-width: 768px) 45vw, 220px"
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
