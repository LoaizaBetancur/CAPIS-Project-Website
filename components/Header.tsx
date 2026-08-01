"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Study Team", href: "/team" },
  { label: "Resources for athletes", href: "/resources/athletes" },
  { label: "Resources for coaches", href: "/resources/coaches" },
  { label: "Resources for researchers", href: "/resources/researchers" },
  { label: "Useful links", href: "/useful-links" },
];

function isLinkActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur-sm" style={{ borderColor: "var(--color-border)" }}>
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-semibold tracking-tight text-[#1A202C] no-underline transition-colors hover:text-[#2B6CB0] whitespace-nowrap"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The CAPIS Project
          </Link>

          <nav className="hidden xl:flex items-center" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-5 text-sm font-medium transition-colors whitespace-nowrap border-b-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: active ? "#2B6CB0" : "#4A5568",
                    borderColor: active ? "#2B6CB0" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.borderColor = "#E2E8F0";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.borderColor = "transparent";
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="inline-flex xl:hidden items-center justify-center rounded-md p-2 text-[#4A5568] hover:bg-[#EBF4FF] hover:text-[#1A202C]"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={NAV_LINKS}
        activePath={pathname}
      />
    </>
  );
}
