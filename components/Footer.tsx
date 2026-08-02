import Image from "next/image";

const NAVY = "#2A3F5F";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY, padding: "32px 24px" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          alignItems: "center",
          gap: "32px",
          gridTemplateColumns: "1fr 1fr",
        }}
        className="footer-grid"
      >
        {/* LEFT: Logo + Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ position: "relative", width: "50px", height: "50px", flexShrink: 0 }}>
            <Image
              src="/images/capis-logo.png"
              alt="CAPIS"
              fill
              style={{ objectFit: "contain" }}
              sizes="50px"
            />
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "16px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.05em",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              THE <span style={{ fontSize: "20px" }}>CAPIS</span> PROJECT
            </p>
          </div>
        </div>

        {/* RIGHT: Ethics + Contact */}
        <div style={{ textAlign: "right" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#B0C4DE",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 8px 0",
            }}
          >
            Ethics approval: HREC/HREC-1/2026/1233(v5)
          </p>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#B0C4DE",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 4px 0",
            }}
          >
            Contact details:
          </p>
          <a
            href="mailto:andresfelipe.loaizabetancur@adelaide.edu.au"
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#B0C4DE",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#FFFFFF"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#B0C4DE"; }}
          >
            andresfelipe.loaizabetancur@adelaide.edu.au
          </a>
        </div>
      </div>
    </footer>
  );
}
