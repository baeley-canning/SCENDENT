import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-sage-500/20 bg-linen-100/80">
      <div className="grid gap-10 px-6 md:px-16 lg:px-32 py-14 text-ink-700 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-2xl text-ink-900 uppercase tracking-[0.2em]">Scendent</span>
            <span className="text-[10px] uppercase tracking-[0.45em] text-ink-500">
              Mental Health + Media
            </span>
          </div>
          <p className="mt-6 text-sm max-w-sm">
            Scendent is a youth mental health social enterprise and media studio. Every
            merch drop, event, and media project funds support for young adults and the
            community that surrounds them.
          </p>
          <p className="mt-4 text-xs text-ink-500 max-w-sm uppercase tracking-[0.28em]">
            NZ-wide shipping + secure Stripe checkout.
          </p>
        </div>

        <div>
          <p className="sc-label mb-4">Shop</p>
          <ul className="text-sm space-y-2 uppercase tracking-[0.2em]">
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

        <div>
          <p className="sc-label mb-4">Impact</p>
          <ul className="text-sm space-y-2 uppercase tracking-[0.2em]">
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

        <div>
          <p className="sc-label mb-4">Support</p>
          <ul className="text-sm space-y-2 uppercase tracking-[0.2em]">
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
      </div>

      <div className="border-t border-sage-500/20 px-6 md:px-16 lg:px-32 py-6 text-xs uppercase tracking-[0.28em] text-ink-500 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <span>Copyright 2025 Scendent. All rights reserved.</span>
        <span className="text-ink-600">
          Need urgent help? Call 111 or 1737.{" "}
          <a className="text-ink-900 hover:text-ink-700 transition" href="/resources">
            Find support
          </a>
          .
        </span>
      </div>
    </footer>
  );
};

export default Footer;

