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
  const backgroundSrc = `${basePath}/images/tv_full_1440p_extended_v2.png`;

  return (
    <main className="crt-home">
      <section className="crt-tv-shell">
        <div className="crt-tv-stage" style={{ backgroundImage: `url(${backgroundSrc})` }}>
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
      </section>

    </main>
  );
};

export default CrtHome;
