import React from "react";
import Image from "next/image";
import Link from "next/link";
import { scendentImages, withImageWidth } from "@/lib/scendentImages";

const SeasonalRelease = () => {
  return (
    <section className="mt-16 md:mt-20 section-animate">
      <div className="relative hero-surface px-6 md:px-12 py-12 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-mist-200/60 blur-3xl"></div>
        <div className="absolute -left-16 -bottom-24 h-64 w-64 rounded-full bg-clay-300/60 blur-3xl"></div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-4">
            <p className="section-kicker">Community events</p>
            <h2 className="section-title">Spaces to connect, learn, and grow.</h2>
            <p className="text-sm md:text-base text-ink-700">
              From workshops to festivals, Scendent events bring people together and
              fund mental health support for young adults.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-sage-300">
              <span className="rounded-full border border-sage-500/30 bg-linen-100/90 px-4 py-1.5">
                Purpose-led gatherings
              </span>
              <span className="rounded-full border border-sage-500/30 bg-linen-100/90 px-4 py-1.5">
                Local collabs and pop-ups
              </span>
              <span className="rounded-full border border-sage-500/30 bg-linen-100/90 px-4 py-1.5">
                All profits fuel the mission
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/events" className="btn-primary">
                View upcoming events
              </Link>
              <Link href="/resources" className="btn-outline">
                Find support
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 md:w-72 aspect-[4/5] drop-shadow-[0_18px_40px_rgba(43,36,31,0.25)]">
              <Image
                src={withImageWidth(scendentImages.community, 1200)}
                alt="Scendent community events"
                fill
                sizes="(max-width: 768px) 70vw, 320px"
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalRelease;
