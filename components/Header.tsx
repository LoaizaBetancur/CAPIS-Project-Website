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
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-base font-semibold tracking-tight text-text no-underline transition-colors hover:text-accent whitespace-nowrap"
          >
            The CAPIS Project
          </Link>

          {/* Desktop nav — flat horizontal row, all links visible */}
          <nav
            className="hidden xl:flex items-center"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-5 text-sm font-medium transition-colors whitespace-nowrap border-b-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    active
                      ? "border-accent text-accent"
                      : "border-transparent text-text-muted hover:text-text hover:border-border"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger — hidden on xl and up */}
          <button
            type="button"
            className="inline-flex xl:hidden items-center justify-center rounded-md p-2 text-text-muted hover:bg-accent-soft hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
