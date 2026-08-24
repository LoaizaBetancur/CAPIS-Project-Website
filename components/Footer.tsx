"use client";

import Image from "next/image";

const NAVY = "#2A3F5F";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY, borderTop: "1px solid #3A4F6F" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT: Logo + Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ position: "relative", width: "40px", height: "40px", flexShrink: 0 }}>
            <Image
              src="/images/capis-logo.png"
              alt="CAPIS"
              fill
              style={{ objectFit: "contain" }}
              sizes="40px"
            />
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "14px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
            }}
          >
            THE CAPIS PROJECT
          </span>
        </div>

        {/* MIDDLE: Social Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="https://x.com/theCAPISproject"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on X"
            style={{
              color: "#B0C4DE",
              transition: "color 150ms",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#FFFFFF"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#B0C4DE"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/andresfelipeloaizabetancur"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on LinkedIn"
            style={{
              color: "#B0C4DE",
              transition: "color 150ms",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#FFFFFF"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#B0C4DE"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/thecapisproject/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            style={{
              color: "#B0C4DE",
              transition: "color 150ms",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#FFFFFF"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#B0C4DE"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="https://bsky.app/profile/loaizabetancur.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Bluesky"
            style={{
              color: "#B0C4DE",
              transition: "color 150ms",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#FFFFFF"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#B0C4DE"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.588 3.496 6.152 3.218-3.92.584-7.288 2.317-2.688 8.295C7.152 18.104 10.634 14.5 12 12.2c1.366 2.3 3.624 4.576 7.912 9.565 4.816-6.168 1.336-7.879-2.536-8.295 2.564.278 5.367-.591 6.152-3.218C23.622 9.418 24 4.458 24 3.768c0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8z" />
            </svg>
          </a>
        </div>

        {/* RIGHT: Ethics + Contact */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#B0C4DE",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Ethics: HREC/HREC-1/2026/1233(v5)
          </span>
          <a
            href="mailto:andresfelipe.loaizabetancur@adelaide.edu.au"
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#B0C4DE",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#B0C4DE";
            }}
          >
            andresfelipe.loaizabetancur@adelaide.edu.au
          </a>
        </div>
      </div>
    </footer>
  );
}
