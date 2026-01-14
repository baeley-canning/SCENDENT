import Link from "next/link";
import React from "react";

const DesktopIcons = () => {
  const icons = [
    {
      label: "My Computer",
      href: "/all-products",
      hint: "Browse Scendent merch",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 40 40" className="win-desktop-icon-svg">
          <rect x="4" y="6" width="32" height="22" fill="#c0c0c0" stroke="#000000" />
          <rect x="6" y="8" width="28" height="18" fill="#000080" stroke="#000000" />
          <rect x="14" y="30" width="12" height="4" fill="#808080" stroke="#000000" />
        </svg>
      ),
    },
    {
      label: "Windows Media Player",
      href: "/media-services",
      hint: "Scendent Media services",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 40 40" className="win-desktop-icon-svg">
          <circle cx="20" cy="20" r="12" fill="#0b3d91" stroke="#000000" />
          <polygon points="17,14 27,20 17,26" fill="#ffffff" />
          <circle cx="30" cy="12" r="4" fill="#ff9a2e" stroke="#000000" />
        </svg>
      ),
    },
    {
      label: "Help & Support",
      href: "/resources",
      hint: "Mental health resources",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 40 40" className="win-desktop-icon-svg">
          <rect x="8" y="6" width="24" height="28" fill="#ffffff" stroke="#000000" />
          <rect x="10" y="8" width="20" height="4" fill="#000080" />
          <text x="20" y="26" textAnchor="middle" fontSize="16" fill="#000080" fontFamily="Tahoma, Arial, sans-serif">?</text>
        </svg>
      ),
    },
    {
      label: "Recycle Bin",
      href: "/about",
      hint: "Mission and impact",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 40 40" className="win-desktop-icon-svg">
          <rect x="12" y="10" width="16" height="22" fill="#c0c0c0" stroke="#000000" />
          <rect x="10" y="8" width="20" height="4" fill="#808080" stroke="#000000" />
          <path
            d="M16 18h8M16 22h8M16 26h8"
            stroke="#008000"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="win-desktop-surface section-animate" aria-label="Scendent desktop shortcuts">
      <div className="win-desktop-icons">
        {icons.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="win-desktop-icon"
            title={item.hint}
          >
            <span className="win-desktop-icon-box">{item.icon}</span>
            <span className="win-desktop-icon-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DesktopIcons;
