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
  { label: "Resources for practitioners", href: "/resources/practitioners" },
  { label: "Resources for researchers & academics", href: "/resources/researchers & academics" },
  { label: "Useful links", href: "/useful-links" },
  { label: "Discussion Forum", href: "/discussion" },
  { label: "Funding EOI", href: "/funding" },
];

function isLinkActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

const NAVY = "#2A3F5F";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Top Banner: Big Logo Only ── */}
      <div style={{ backgroundColor: NAVY }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "48px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", height: "220px", width: "700px" }}>
            <Image
              src="/images/capis-logo.png"
              alt="The CAPIS Project"
              fill
              style={{ objectFit: "contain" }}
              sizes="700px"
              priority
            />
          </div>
        </div>
      </div>

      {/* ── Navigation Bar ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "48px",
          }}
        >
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
                    padding: "0 14px",
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    borderBottom: active
                      ? "3px solid #3C7887"
                      : "3px solid transparent",
                    color: active ? "#3C7887" : "#1A202C",
                    textDecoration: "none",
                    transition: "color 150ms, border-color 150ms",
                    marginBottom: "-1px",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="xl:hidden"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px",
              borderRadius: "4px",
              color: "#1A202C",
              background: "none",
              border: "1px solid #E2E8F0",
              cursor: "pointer",
            }}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
