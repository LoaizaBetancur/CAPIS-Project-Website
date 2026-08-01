"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
      {/* ── Top Banner (like COMBAT's maroon banner) ── */}
      <div
        style={{
          backgroundColor: "#1A202C",
          borderBottom: "1px solid #2D3748",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "24px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Large Logo */}
          <div
            style={{
              position: "relative",
              width: "80px",
              height: "80px",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/capis-logo.png"
              alt="The CAPIS Project logo"
              fill
              style={{ objectFit: "contain" }}
              sizes="80px"
              priority
            />
          </div>

          {/* Project Title */}
          <div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              THE CAPIS PROJECT
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
                color: "#A0AEC0",
                margin: "4px 0 0 0",
                lineHeight: 1.4,
              }}
            >
              Core Athletic Performance-based Intervention Set for Athletes
            </p>
          </div>
        </div>
      </div>

      {/* ── Navigation Bar (white, like COMBAT) ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "56px",
          }}
        >
          {/* Desktop nav — flat horizontal row */}
          <nav
            className="hidden xl:flex"
            style={{ alignItems: "center", height: "100%" }}
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    height: "100%",
                    padding: "0 20px",
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    borderBottom: active
                      ? "3px solid var(--color-accent)"
                      : "3px solid transparent",
                    color: active ? "var(--color-accent)" : "var(--color-text)",
                    textDecoration: "none",
                    transition: "color 150ms, border-color 150ms",
                    marginBottom: "-1px",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = "var(--color-text)";
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
              color: "var(--color-text)",
              background: "none",
              border: "1px solid var(--color-border)",
              cursor: "pointer",
              marginLeft: "auto",
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
