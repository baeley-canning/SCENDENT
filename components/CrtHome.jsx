import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getBasePath } from "@/lib/basePath";
import { scendentImages, withImageWidth } from "@/lib/scendentImages";

const tiles = [
  {
    label: "Shop",
    href: "/all-products",
    tone: "text-sage-500",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <path
          d="M12 18h24l-2 22H14l-2-22Z"
          fill="currentColor"
          opacity="0.85"
        />
        <path
          d="M16 18v-4a8 8 0 0 1 16 0v4"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Media",
    href: "/media-services",
    tone: "text-clay-500",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <rect x="8" y="10" width="32" height="26" rx="4" fill="currentColor" opacity="0.85" />
        <polygon points="22,18 34,24 22,30" fill="#0b0d0b" />
        <rect x="14" y="36" width="20" height="4" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: "Events",
    href: "/events",
    tone: "text-sage-300",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <rect x="10" y="12" width="28" height="24" rx="4" fill="currentColor" opacity="0.85" />
        <path d="M16 12v-4M32 12v-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M16 22h16M16 28h10" stroke="#0b0d0b" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Resources",
    href: "/resources",
    tone: "text-sage-600",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <circle cx="24" cy="24" r="14" fill="currentColor" opacity="0.85" />
        <circle cx="24" cy="24" r="8" fill="#0b0d0b" />
        <path d="M24 10v6M24 32v6M10 24h6M32 24h6" stroke="#0b0d0b" strokeWidth="3" />
      </svg>
    ),
  },
  {
    label: "About",
    href: "/about",
    tone: "text-ink-900",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <path d="M12 18 24 12l12 6v12l-12 6-12-6V18Z" fill="currentColor" opacity="0.85" />
        <path d="M24 12v24" stroke="#0b0d0b" strokeWidth="3" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "/#contact",
    tone: "text-sage-700",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <rect x="10" y="12" width="28" height="22" rx="4" fill="currentColor" opacity="0.85" />
        <path d="M14 18l10 7 10-7" stroke="#0b0d0b" strokeWidth="3" strokeLinecap="round" />
        <rect x="18" y="36" width="12" height="4" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
];

const CrtHome = () => {
  const basePath = getBasePath();
  const tvFrameSrc = basePath ? `${basePath}/images/tv-frame.jpg` : "/images/tv-frame.jpg";

  return (
    <main className="px-6 md:px-16 lg:px-32 py-10">
      <section className="crt-tv-shell">
        <div className="crt-tv">
          <Image
            src={tvFrameSrc}
            alt="Vintage television frame"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 70vw"
            className="crt-tv-image"
          />
          <div className="crt-tv-screen">
            <div className="crt-window crt-window--tv">
              <div className="crt-titlebar">
                <div>
                  <p className="crt-brand">Scendent</p>
                  <p className="crt-subtitle">Mental health + media studio</p>
                </div>
                <div className="crt-status">
                  <span className="crt-dot"></span>
                  System live
                </div>
              </div>
              <div className="crt-grid">
                {tiles.map((tile) => (
                  <Link key={tile.label} href={tile.href} className="crt-tile">
                    <span className={`crt-icon ${tile.tone}`}>{tile.icon}</span>
                    <span className={`crt-label ${tile.tone}`}>{tile.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="crt-mini">
              <div className="crt-mini-bar">
                <span>Media</span>
                <span className="crt-mini-indicator">REC</span>
              </div>
              <div className="crt-mini-screen">
                <Image
                  src={withImageWidth(scendentImages.eventStage, 900)}
                  alt="Scendent media capture"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
                <div className="crt-mini-noise"></div>
              </div>
            </div>

            <div className="crt-footer">
              <p>50% of profits fund youth mental health</p>
              <div className="crt-footer-links">
                <Link href="/policies">Terms + policies</Link>
                <Link href="/resources">Need support? 1737</Link>
              </div>
            </div>
          </div>
        </div>
        <p className="crt-brandplate">SCENDENT</p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="crt-card">
          <p className="crt-card-kicker">Mission</p>
          <h2 className="crt-card-title">Merch, media, and mental health</h2>
          <p className="crt-card-body">
            Every drop, campaign, and event funds youth mental health support across
            Aotearoa.
          </p>
          <Link href="/about" className="crt-card-link">Learn the story</Link>
        </div>
        <div className="crt-card">
          <p className="crt-card-kicker">Merch drop</p>
          <h2 className="crt-card-title">Limited runs, real impact</h2>
          <p className="crt-card-body">
            Clean fits and bold reminders. Secure checkout with Stripe and NZ-wide
            shipping.
          </p>
          <Link href="/all-products" className="crt-card-link">Shop the drop</Link>
        </div>
        <div className="crt-card">
          <p className="crt-card-kicker">Scendent Media</p>
          <h2 className="crt-card-title">Content that converts</h2>
          <p className="crt-card-body">
            Strategy, production, and social systems for brands that want purpose-led
            growth.
          </p>
          <Link href="/media-services" className="crt-card-link">View services</Link>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="crt-card">
          <p className="crt-card-kicker">Events</p>
          <h2 className="crt-card-title">Community-led gatherings</h2>
          <p className="crt-card-body">
            Workshops, pop-ups, and festivals that spark conversation and fund support.
          </p>
          <Link href="/events" className="crt-card-link">See upcoming events</Link>
        </div>
        <div className="crt-card" id="contact">
          <p className="crt-card-kicker">Contact</p>
          <h2 className="crt-card-title">Get in touch</h2>
          <p className="crt-card-body">
            Email hello@scendent.co.nz for collabs, media bookings, or support.
          </p>
          <a href="mailto:hello@scendent.co.nz" className="crt-card-link">Email Scendent</a>
        </div>
      </section>
    </main>
  );
};

export default CrtHome;
