import React from "react";
import Image from "next/image";
import Link from "next/link";
import { scendentImages, withImageWidth } from "@/lib/scendentImages";

const BrandStory = () => {
  return (
    <section className="relative mt-16 md:mt-20 section-animate" id="mission">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center sc-panel px-6 md:px-12 py-12">
        <div className="space-y-5">
          <span className="pill-tag">Charity trust</span>
          <h2 className="section-title">
            A youth mental health brand built for real change.
          </h2>
          <p className="text-sm md:text-base text-ink-700">
            Scendent is a youth mental health charity and social enterprise built to
            back young people with the support they deserve. Merch drops, media
            services, and events work together to fund care, spark conversation, and
            grow resilience.
          </p>
          <p className="text-sm md:text-base text-ink-700">
            Every purchase and project reinvests profits into youth-led initiatives,
            trusted partners, and accessible resources across Aotearoa.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 text-xs md:text-sm text-ink-700">
            <div className="rounded-lg border border-sage-500/25 bg-linen-100/90 p-4 uppercase tracking-[0.18em]">
              50% of profits reinvested into the mission
            </div>
            <div className="rounded-lg border border-sage-500/25 bg-linen-100/90 p-4 uppercase tracking-[0.18em]">
              Community events and youth-led initiatives
            </div>
            <div className="rounded-lg border border-sage-500/25 bg-linen-100/90 p-4 uppercase tracking-[0.18em]">
              Purpose-driven media services for brands
            </div>
          </div>
          <Link href="/#contact" className="btn-primary">
            Support the mission
          </Link>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-sage-500/25 bg-linen-50/90 relative">
            <Image
              className="w-full h-auto object-cover"
              src={withImageWidth(scendentImages.charityGroup, 1200)}
              alt="Scendent youth mental health community group"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 520px"
            />
            <div className="absolute left-3 bottom-3 sm:left-6 rounded-2xl border border-sage-500/30 bg-linen-100 text-ink-900 px-4 py-3 shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-sage-300/80">
                Scendent means rise
              </p>
              <p className="text-sm font-semibold uppercase">Community is the fuel.</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden border border-sage-500/25 bg-linen-50/90">
              <Image
                className="w-full h-auto object-cover"
                src={withImageWidth(scendentImages.womanSmile, 900)}
                alt="Wellbeing support in nature"
                width={600}
                height={600}
                sizes="(max-width: 768px) 50vw, 260px"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-sage-500/25 bg-linen-50/90">
              <Image
                className="w-full h-auto object-cover"
                src={withImageWidth(scendentImages.hopscotch, 900)}
                alt="Youth wellbeing in action"
                width={600}
                height={600}
                sizes="(max-width: 768px) 50vw, 260px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
