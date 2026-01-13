import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8">
      <div className="px-6 md:px-16 lg:px-32 py-10">
        <div className="grid gap-6 text-ink-700 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div className="win-panel space-y-4">
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg text-ink-900">Scendent</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-ink-700">
                Mental Health + Media
              </span>
            </div>
            <p className="text-xs">
              Scendent is a youth mental health social enterprise and media studio. Every
              merch drop, event, and media project funds support for young adults and the
              community that surrounds them.
            </p>
            <p className="text-[11px] text-ink-500">
              NZ-wide shipping, 14-day returns on unopened merch, and secure checkout via
              Stripe.
            </p>
          </div>

          <div className="win-panel">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-900">
              Shop
            </h2>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <a className="hover:text-ink-900 transition" href="/all-products">All merch</a>
              </li>
              <li>
                <a className="hover:text-ink-900 transition" href="/#shop">Best sellers</a>
              </li>
              <li>
                <a className="hover:text-ink-900 transition" href="/#bundles">Give-back bundles</a>
              </li>
            </ul>
          </div>

          <div className="win-panel">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-900">
              Impact
            </h2>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <a className="hover:text-ink-900 transition" href="/events">Events</a>
              </li>
              <li>
                <a className="hover:text-ink-900 transition" href="/resources">Directory of help</a>
              </li>
              <li>
                <a className="hover:text-ink-900 transition" href="/about">Our mission</a>
              </li>
            </ul>
          </div>

          <div className="win-panel">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-900">
              Support
            </h2>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <a className="hover:text-ink-900 transition" href="/media-services">Scendent Media</a>
              </li>
              <li>
                <a className="hover:text-ink-900 transition" href="/faq">FAQs</a>
              </li>
              <li>
                <a className="hover:text-ink-900 transition" href="/policies">Returns &amp; shipping</a>
              </li>
              <li>
                <a className="hover:text-ink-900 transition" href="/my-orders">Order lookup</a>
              </li>
            </ul>
          </div>

          <div className="win-panel space-y-3">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-900">
              Get in touch
            </h2>
            <div className="text-xs space-y-2">
              <p>Aotearoa New Zealand</p>
              <p>hello@scendent.co.nz</p>
              <p className="text-[11px] text-ink-500">
                Need urgent help? Call 111 or 1737 in New Zealand.{" "}
                <a className="text-ink-900 hover:text-ink-700 transition" href="/resources">
                  Find support
                </a>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-[11px]">
              <a className="hover:text-ink-900 transition" href="https://www.instagram.com/scendentofficial/" target="_blank" rel="noopener">
                Instagram
              </a>
              <a className="hover:text-ink-900 transition" href="http://www.tiktok.com/@scendent" target="_blank" rel="noopener">
                TikTok
              </a>
              <a className="hover:text-ink-900 transition" href="https://www.facebook.com/scendentofficial" target="_blank" rel="noopener">
                Facebook
              </a>
              <a className="hover:text-ink-900 transition" href="https://www.youtube.com/channel/UCvCEm4fblaA0gfrDfjg-33Q" target="_blank" rel="noopener">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="win-statusbar">
        <span>Copyright 2025 Scendent. All rights reserved.</span>
        <span>Need urgent help? Call 111 or 1737.</span>
      </div>
    </footer>
  );
};

export default Footer;

