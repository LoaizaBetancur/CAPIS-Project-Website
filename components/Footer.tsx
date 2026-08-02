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
