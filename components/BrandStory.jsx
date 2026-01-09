import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const BrandStory = () => {
  return (
    <section className="relative mt-16 md:mt-20 section-animate" id="mission">
      <div className="absolute -left-16 top-10 h-44 w-44 rounded-full bg-mist-200/60 blur-3xl"></div>
      <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-clay-300/60 blur-3xl"></div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center card-surface px-6 md:px-12 py-12">
        <div className="space-y-5">
          <span className="pill-tag">Our mission</span>
          <h2 className="section-title">
            A youth mental health brand built for real change.
          </h2>
          <p className="text-sm md:text-base text-ink-700">
            Scendent is a social enterprise built to back young people with the support
            they deserve. Merch drops, media services, and events work together to fund
            care, spark conversation, and grow resilience.
          </p>
          <p className="text-sm md:text-base text-ink-700">
            Every purchase and project reinvests profits into youth-led initiatives,
            trusted partners, and accessible resources across Aotearoa.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 text-xs md:text-sm text-ink-700">
            <div className="rounded-2xl border border-sage-500/25 bg-linen-100/90 p-4">
              50% of profits reinvested into the mission
            </div>
            <div className="rounded-2xl border border-sage-500/25 bg-linen-100/90 p-4">
              Community events and youth-led initiatives
            </div>
            <div className="rounded-2xl border border-sage-500/25 bg-linen-100/90 p-4">
              Purpose-driven media services for brands
            </div>
          </div>
          <Link href="/#contact" className="btn-primary">
            Support the mission
          </Link>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden border border-sage-500/20 bg-linen-50/90">
            <Image
              className="w-full h-auto object-cover"
              src={assets.scendent_hero_mission}
              alt="Scendent community"
            />
          </div>
          <div className="absolute left-3 -bottom-6 sm:left-6 rounded-2xl border border-sage-500/30 bg-linen-100 text-ink-900 px-4 py-3 shadow-lg">
            <p className="text-xs uppercase tracking-[0.2em] text-sage-300/80">
              Scendent means rise
            </p>
            <p className="text-sm font-semibold">Community is the fuel.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
