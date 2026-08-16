import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Funding Expression of Interest",
  description:
    "Expression of interest for research collaboration and funding opportunities with the CAPIS project.",
};

const NAVY = "#2A3F5F";
const TEAL = "#3C7887";

export default function FundingPage() {
  return (
    <main>
      <section style={{ backgroundColor: NAVY }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "48px 24px",
            display: "grid",
            alignItems: "center",
            gap: "40px",
            gridTemplateColumns: "1fr 1fr",
          }}
          className="hero-grid"
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
              Funding
              <br />
              Expression of Interest
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#B0C4DE",
                marginTop: "12px",
              }}
            >
              Collaborate with or support the CAPIS research programme.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "280px",
                height: "220px",
              }}
            >
              <Image
                src="/images/funding.png"
                alt="Funding expression of interest graphic"
                fill
                style={{ objectFit: "contain" }}
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      <section style={{ backgroundColor: "#FFFFFF", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
            Expression of Interest
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#2D3748",
              marginBottom: "16px",
              maxWidth: "720px",
            }}
          >
            The CAPIS project welcomes expressions of interest from researchers,
            institutions, funding bodies, and industry partners who wish to
            collaborate with or support our work in developing core outcome sets
            for athletic performance-based interventions.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#2D3748",
              marginBottom: "16px",
              maxWidth: "720px",
            }}
          >
            We are particularly interested in partnerships that align with our
            mission to improve the consistency and quality of outcome measurement
            in sports science research.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#2D3748",
              marginBottom: "24px",
              maxWidth: "720px",
            }}
          >
            At this stage, CAPIS is not accepting formal funding applications
            directly. However, we are happy to discuss potential collaborations
            and can provide letters of support for aligned grant proposals
            submitted through appropriate institutional channels.
          </p>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      <section style={{ backgroundColor: "#F7FAFC", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
            How to Express Your Interest
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#2D3748",
              marginBottom: "20px",
              maxWidth: "720px",
            }}
          >
            To discuss collaboration or funding opportunities, please contact
            the CAPIS research team directly:
          </p>

          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "8px",
              padding: "24px",
              maxWidth: "560px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#1A202C",
                marginBottom: "8px",
              }}
            >
              Lead Researcher
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.6,
                color: "#4A5568",
                marginBottom: "12px",
              }}
            >
              Andrés F. Loaiza-Betancur
              <br />
              PhD Candidate & Lead Researcher
              <br />
              JBI, School of Public Health, University of Adelaide
            </p>
            <a
              href="mailto:andresfelipe.loaizabetancur@adelaide.edu.au"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: 500,
                color: TEAL,
                textDecoration: "none",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              andresfelipe.loaizabetancur@adelaide.edu.au
            </a>
          </div>

          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.6,
              color: "#A0AEC0",
              marginTop: "16px",
              maxWidth: "560px",
            }}
          >
            Please include a brief description of your organisation, the nature
            of your proposed collaboration, and any relevant timelines in your
            enquiry.
          </p>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      <section style={{ backgroundColor: "#FFFFFF", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
            Areas of Interest
          </h2>
          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {[
              {
                title: "Joint Grant Applications",
                desc: "Collaborative applications to NHMRC, ARC, or international funding bodies for aligned research.",
              },
              {
                title: "Multi-Site Studies",
                desc: "Partnerships to expand the CAPIS registry or Delphi consensus across institutions and countries.",
              },
              {
                title: "Implementation Research",
                desc: "Support for translating CAPIS findings into practice across sporting organisations and clinics.",
              },
              {
                title: "Student & Early-Career Support",
                desc: "Co-supervision, internships, and research assistantships for HDR students and early-career researchers.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "#F7FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#1A202C",
                    marginBottom: "6px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#4A5568",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
