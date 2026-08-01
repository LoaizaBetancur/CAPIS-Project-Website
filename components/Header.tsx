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
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          borderBottom: "1px solid var(--color-border)",
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(4px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "var(--color-text)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            The CAPIS Project
          </Link>

          {/* Desktop nav — flat horizontal row */}
          <nav
            className="hidden xl:flex"
            style={{ alignItems: "center" }}
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "inline-block",
                    padding: "20px 16px",
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    borderBottom: active
                      ? "2px solid var(--color-accent)"
                      : "2px solid transparent",
                    color: active ? "var(--color-accent)" : "var(--color-muted)",
                    textDecoration: "none",
                    transition: "color 150ms, border-color 150ms",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = "var(--color-text)";
                      e.currentTarget.style.borderBottomColor = "var(--color-border)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = "var(--color-muted)";
                      e.currentTarget.style.borderBottomColor = "transparent";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="xl:hidden"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px",
              borderRadius: "6px",
              color: "var(--color-muted)",
              background: "none",
              border: "1px solid var(--color-border)",
              cursor: "pointer",
            }}
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
