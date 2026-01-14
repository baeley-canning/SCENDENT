import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { scendentImages, withImageWidth } from "@/lib/scendentImages";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 2,
      title: "Scendent Media for brands that lead with purpose.",
      offer: "Content + strategy",
      description:
        "End-to-end production, TikTok training, and social systems built to convert while funding youth mental health.",
      buttonText1: "View media services",
      buttonText2: "Book a consult",
      primaryHref: "/media-services",
      secondaryHref: "/#contact",
      imgSrc: withImageWidth(scendentImages.ryanWorking, 1200),
      highlights: ["Strategy + production", "Social systems", "Impact-led pricing"],
    },
    {
      id: 1,
      title: "Merch that funds youth mental health support.",
      offer: "Wear the rise",
      description:
        "Limited drops designed in Aotearoa. Every order backs community-led support and early intervention.",
      buttonText1: "Shop the drop",
      buttonText2: "How the mission works",
      primaryHref: "/all-products",
      secondaryHref: "/about",
      imgSrc: withImageWidth(scendentImages.ryanBlur, 1200),
      highlights: ["NZ-designed drops", "Profits reinvested", "Limited runs"],
    },
    {
      id: 3,
      title: "Events that bring the community together.",
      offer: "Workshops, pop-ups, festivals",
      description:
        "We host spaces to connect, learn, and celebrate progress while funding support for young adults.",
      buttonText1: "See upcoming events",
      buttonText2: "Find support",
      primaryHref: "/events",
      secondaryHref: "/resources",
      imgSrc: withImageWidth(scendentImages.eventCrowd, 1200),
      highlights: ["Community workshops", "Youth-led spaces", "Impact gatherings"],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full section-animate">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="hero-surface flex flex-col-reverse md:flex-row items-center justify-between py-12 md:px-14 px-6 mt-6 min-w-full"
          >
            <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-mist-200/60 blur-3xl"></div>
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-clay-300/60 blur-3xl"></div>
            <div className="relative md:pl-8 mt-10 md:mt-0">
              <span className="pill-tag">{slide.offer}</span>
              <h1 className="max-w-xl text-3xl md:text-[48px] md:leading-[54px] font-semibold text-ink-900 mt-4">
                {slide.title}
              </h1>
              <p className="mt-3 max-w-lg text-sm md:text-base text-ink-700">
                {slide.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.24em] text-sage-300">
                {slide.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-sage-500/30 bg-linen-100/80 px-3 py-1"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center mt-5 md:mt-7 gap-3">
                <Link href={slide.primaryHref} className="btn-primary">
                  {slide.buttonText1}
                </Link>
                <Link href={slide.secondaryHref} className="btn-outline">
                  {slide.buttonText2}
                </Link>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <div className="relative md:w-80 w-56 aspect-[4/5] drop-shadow-[0_24px_60px_rgba(11,14,18,0.28)]">
                <Image
                  src={slide.imgSrc}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 768px) 60vw, 320px"
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-sage-500" : "bg-ink-500/40"
            }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
