"use client";
import React from "react";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
  const { getCartCount } = useAppContext();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50">
      <div className="win-titlebar">
        <Link href="/" className="win-titlebar-left">
          <span className="win-titlebar-icon">S</span>
          <span>Scendent Control Panel</span>
        </Link>
        <div className="win-titlebar-controls" aria-label="Window controls">
          <button className="win-titlebar-btn" type="button" aria-label="Minimize">
            _
          </button>
          <button className="win-titlebar-btn" type="button" aria-label="Maximize">
            []
          </button>
          <button className="win-titlebar-btn" type="button" aria-label="Close">
            X
          </button>
        </div>
      </div>

      <div className="win-menubar flex-col md:flex-row md:items-center">
        <div className="win-menu-group flex-wrap">
          <button className="win-menu-item" type="button">File</button>
          <button className="win-menu-item" type="button">Edit</button>
          <button className="win-menu-item" type="button">View</button>
          <button className="win-menu-item" type="button">Help</button>
        </div>
        <div className="win-menu-group flex-wrap">
          <span className="win-status-pill">
            50% of profits fund youth mental health
          </span>
          <Link href="/resources" className="win-menu-item">
            Need support? 1737
          </Link>
        </div>
      </div>

      <nav className="win-toolbar">
        <div className="win-toolbar-group">
          <Link href="/" className="win-toolbar-btn">
            Home
          </Link>
          <Link href="/all-products" className="win-toolbar-btn">
            Merch
          </Link>
          <Link href="/media-services" className="win-toolbar-btn">
            Media
          </Link>
          <Link href="/events" className="win-toolbar-btn">
            Events
          </Link>
          <Link href="/resources" className="win-toolbar-btn">
            Resources
          </Link>
          <Link href="/about" className="win-toolbar-btn">
            About
          </Link>
          <Link href="/#contact" className="win-toolbar-btn">
            Contact
          </Link>
          <Link href="/faq" className="win-toolbar-btn">
            FAQ
          </Link>
        </div>

        <div className="win-toolbar-group">
          <Link href="/cart" className="win-toolbar-btn">
            Checkout
          </Link>
          <span className="win-status-pill">Cart {cartCount}</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
