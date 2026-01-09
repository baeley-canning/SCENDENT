"use client";
import React from "react";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const Navbar = () => {

  const { router, getCartCount } = useAppContext();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden md:flex items-center justify-between px-6 md:px-16 lg:px-32 py-2 text-[11px] uppercase tracking-[0.28em] text-ink-700 bg-linen-50/75 border-b border-ink-900/10">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-sage-500"></span>
          50% of profits fund youth mental health
        </span>
        <Link href="/resources" className="hover:text-ink-900 transition">
          Need support? 1737
        </Link>
      </div>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-4 border-b border-ink-900/10 text-ink-700 bg-linen-50/85 backdrop-blur">
        <button
          className="flex flex-col leading-tight text-left"
          onClick={() => router.push("/")}
        >
          <span className="font-display text-xl md:text-2xl text-ink-900">Scendent</span>
          <span className="text-[10px] uppercase tracking-[0.32em] text-ink-500">
            Mental Health + Media Studio
          </span>
        </button>
        <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
          <Link href="/" className="hover:text-ink-900 transition">
            Home
          </Link>
          <Link href="/all-products" className="hover:text-ink-900 transition">
            Merch
          </Link>
          <Link href="/media-services" className="hover:text-ink-900 transition">
            Media
          </Link>
          <Link href="/events" className="hover:text-ink-900 transition">
            Events
          </Link>
          <Link href="/resources" className="hover:text-ink-900 transition">
            Resources
          </Link>
          <Link href="/about" className="hover:text-ink-900 transition">
            About
          </Link>
          <Link href="/#contact" className="hover:text-ink-900 transition">
            Contact
          </Link>
          <Link href="/faq" className="hover:text-ink-900 transition">
            FAQ
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-ink-700">
          <Link
            href="/cart"
            className="btn-outline !text-xs !px-4 !py-2"
          >
            Checkout
          </Link>
          <span className="rounded-full bg-sage-500/15 px-2 py-1 text-[10px] tracking-[0.2em] text-sage-300">
            Cart {cartCount}
          </span>
        </div>

        <div className="flex md:hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-700">
          <Link href="/all-products" className="btn-outline !text-xs !px-4 !py-2">
            Shop
          </Link>
          <Link href="/cart" className="btn-primary !text-xs !px-4 !py-2">
            Cart {cartCount}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
