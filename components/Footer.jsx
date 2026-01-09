import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-sage-500/20 bg-linen-100/80">
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 text-ink-700">
        <div className="w-full md:w-2/5">
          <div className="flex flex-col leading-tight">
            <span className="font-display text-2xl text-ink-900">Scendent</span>
            <span className="text-[11px] uppercase tracking-[0.35em] text-ink-500">
              Mental Health + Media
            </span>
          </div>
          <p className="mt-6 text-sm max-w-sm">
            Scendent is a youth mental health social enterprise and media studio. Every
            merch drop, event, and media project funds support for young adults and the
            community that surrounds them.
          </p>
          <p className="mt-4 text-xs text-ink-500 max-w-sm">
            NZ-wide shipping, 14-day returns on unopened merch, and secure checkout via
            Stripe.
          </p>
        </div>

        <div className="w-full md:w-1/5">
          <h2 className="font-medium text-ink-900 mb-5">Shop</h2>
          <ul className="text-sm space-y-2">
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

        <div className="w-full md:w-1/5">
          <h2 className="font-medium text-ink-900 mb-5">Impact</h2>
          <ul className="text-sm space-y-2">
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

        <div className="w-full md:w-1/5">
          <h2 className="font-medium text-ink-900 mb-5">Support</h2>
          <ul className="text-sm space-y-2">
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

        <div className="w-full md:w-1/5">
          <h2 className="font-medium text-ink-900 mb-5">Get in touch</h2>
          <div className="text-sm space-y-2">
            <p>Aotearoa New Zealand</p>
            <p>hello@scendent.co.nz</p>
            <p className="text-xs text-ink-500">
              Need urgent help? Call 111 or 1737 in New Zealand.{" "}
              <a className="text-ink-900 hover:text-ink-700 transition" href="/resources">
                Find support
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
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
      <p className="py-4 text-center text-xs md:text-sm text-ink-500">
        Copyright 2025 Scendent. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

