import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources for Athletes",
  description: "Information sheets and resources for athletes taking part in the CAPIS project.",
};

const NAVY = "#2A3F5F";

export default function ResourcesForAthletesPage() {
  return (
    <main>
      {/* ── Hero Banner ── */}
      <section style={{ backgroundColor: NAVY }}>
        <div
          className="hero-grid"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "48px 24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              RESOURCES
              <br />
              FOR ATHLETES
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#B0C4DE",
                marginTop: "16px",
                maxWidth: "500px",
                lineHeight: 1.5,
              }}
            >
              Information sheets and resources for Tier 3, 4, or 5 football players taking part in the CAPIS project.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "160px" }}>🏃</span>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Intro Section ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "48px 24px" }}>
        <div
          className="content-grid"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                fontWeight: 600,
                color: "#1A202C",
                lineHeight: 1.3,
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                marginBottom: "16px",
              }}
            >
              Why have you asked me to take part?
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#2D3748",
                marginBottom: "12px",
              }}
            >
              We have invited you to take part because you are a Tier 3, 4, or 5 football player who has experience with plyometric training interventions. Your experiences are really important.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#2D3748" }}>
              We want to know what is important to you when performing plyometric training and what impact it has on your athletic performance. The information sheets below have more details!
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "120px" }}>🤔</span>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Information Sheets ── */}
      <section style={{ backgroundColor: "#F7FAFC", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              fontWeight: 600,
              color: "#1A202C",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            The information sheets below have more details!
          </h2>

          <div
            style={{
              display: "grid",
              gap: "24px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                border: `2px solid ${NAVY}`,
                backgroundColor: "#FFFFFF",
                padding: "28px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "72px", marginBottom: "16px" }}>📄</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#1A202C",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                Participant
                <br />
                Information Sheet
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#2D3748",
                  marginBottom: "20px",
                  lineHeight: 1.5,
                }}
              >
                Everything you need to know about taking part in the CAPIS project, including what to expect, how the e-Delphi survey works, and how your data will be used. Available in English and Spanish.
              </p>
              <a
                href="/documents/CAPIS-PIS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  backgroundColor: NAVY,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "4px",
                }}
              >
                View PIS - Focus group
              </a>
              <a
                href="/documents/CAPIS-PIS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  backgroundColor: NAVY,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "4px",
                }}
              >
                View PIS - e-Delphi (soon)
              </a>
              <a
                href="/documents/CAPIS-PIS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  backgroundColor: NAVY,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "4px",
                }}
              >
                Mira aquí la hoja de información para participantes - Grupo focal
              </a>
               <a
                href="/documents/CAPIS-PIS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  backgroundColor: NAVY,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "4px",
                }}
              >
                Mira aquí la hoja de información para participantes - encuesta electrónica (pronto)
              </a>
            </div>

            {/* Card 2 */}
            <div
              style={{
                border: `2px solid ${NAVY}`,
                backgroundColor: "#FFFFFF",
                padding: "28px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "72px", marginBottom: "16px" }}>📖</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#1A202C",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                Plain Language
                <br />
                Summary
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#2D3748",
                  marginBottom: "20px",
                  lineHeight: 1.5,
                }}
              >
                A simple, jargon-free explanation of what the CAPIS project is, why it matters for football players, and how your input will shape future research.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", marginTop: "16px" }}>
              <a
                href="/documents/CAPIS-PLS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  backgroundColor: NAVY,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "4px",
                }}
              >
                Plain Language Summary
                </a>
              <a
                href="/documents/CAPIS-PLS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  backgroundColor: NAVY,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "4px",
                }}
              >
                Resumen en lenguaje sencillo
                </a>
            </div>

            {/* Card 3 */}
            <div
              style={{
                border: `2px solid ${NAVY}`,
                backgroundColor: "#FFFFFF",
                padding: "28px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "72px", marginBottom: "16px" }}>🎥</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#1A202C",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                Video: What is a
                <br />
                Core Outcome Set?
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#2D3748",
                  marginBottom: "20px",
                  lineHeight: 1.5,
                }}
              >
                A short video explaining what core outcome sets are and why they are important for improving research in football and athletic performance.
              </p>
              <a
                href="https://youtu.be/fYMz7wH3wKM"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  backgroundColor: NAVY,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "4px",
                }}
              >
                Watch Video
              </a>
               <a
                href="https://www.youtube.com/watch?v=Sb7sZRKC26o"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  backgroundColor: NAVY,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "4px",
                }}
              >
                Mira el Video
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
