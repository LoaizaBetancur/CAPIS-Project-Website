"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Methods", href: "/methods" },
  { label: "Protocol", href: "/protocol" },
  { label: "Team", href: "/team" },
  { label: "Publications", href: "/publications" },
  { label: "Resources", href: "/resources" },
  { label: "Updates", href: "/updates" },
  { label: "Events", href: "/events" },
  { label: "Media", href: "/media" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
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
      {/* ── Header bar ── */}
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ── Logo / site name ── */}
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-text no-underline transition-colors hover:text-accent"
          >
            PhD Research Programme
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    active
                      ? "bg-accent text-white"
                      : "text-text-muted hover:bg-accent-soft hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Hamburger toggle (mobile) ── */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-text-muted hover:bg-accent-soft hover:text-text lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              /* X icon */
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ── Mobile menu drawer ── */}
      <MobileMenu
        id="mobile-menu"
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={NAV_LINKS}
        activePath={pathname}
      />
    </>
  );
}