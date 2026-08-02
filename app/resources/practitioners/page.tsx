import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources for practitioners",
  description: "Information sheets and resources for practitioners taking part in the CAPIS project.",
};

const NAVY = "#2A3F5F";

export default function ResourcesForCoachesPage() {
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
              FOR COACHES
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
              Information sheets and resources for strength and conditioning coaches, football coaches, physiotherapists, and sports physicians working with elite players.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "160px" }}>🏋️</span>
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
              We have invited you to take part because you are a strength and conditioning coach, football coach, physiotherapist, or sports physician working with elite players. Your professional experiences are really important.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#2D3748" }}>
              We want to know what is important to you when implementing plyometric training interventions and what impact it has on your athletes. The information sheets below have more details!
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
                Everything you need to know about taking part in the CAPIS project, including what to expect, how the e-Delphi survey works, and how your data will be used.
              </p>
              <a
                href="#"
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
                Access PIS
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
                A simple, jargon-free explanation of what the CAPIS project is, why it matters for coaches and performance staff, and how your input will shape future research.
              </p>
              <a
                href="#"
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
                Access Summary
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
                href="#"
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
            </div>

            {/* Card 4 */}
            <div
              style={{
                border: `2px solid ${NAVY}`,
                backgroundColor: "#FFFFFF",
                padding: "28px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "72px", marginBottom: "16px" }}>❓</div>
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
                FAQ for
                <br />
                Coaches
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#2D3748",
                  marginBottom: "20px",
                  lineHeight: 1.5,
                }}
              >
                Answers to common questions about participating in the Delphi consensus panel, time commitment, and what happens to your responses.
              </p>
              <a
                href="#"
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
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
