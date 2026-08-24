import { Metadata } from "next";
import Image from "next/image";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata: Metadata = {
  title: "Study Team",
  description: "Meet the research team behind the CAPIS project.",
};

const NAVY = "#2A3F5F";
const TEAL = "#3C7887";

const leadInvestigator = {
  name: "Andrés F. Loaiza-Betancur",
  role: "PhD Candidate & Lead Researcher",
  affiliation: "JBI, School of Public Health, Adelaide University",
  bio: "Andrés leads all phases of the CAPIS research programme — from the scoping review and focus groups through to the Delphi consensus and dissemination. He is supported by an Adelaide University research scholarship.",
  image: "/images/team/andres.png",
  email: "andresfelipe.loaizabetancur@adelaide.edu.au",
};

const studyTeam = [
  {
    name: "Jennifer Stone",
    role: "Primary Supervisor",
    affiliation: "JBI, School of Public Health, Adelaide University",
    bio: "Jennifer provides overall methodological guidance for the CAPIS project, contributing expertise in evidence synthesis, systematic review methodology, and implementation science.",
    image: "/images/team/jennifer.png",
    email: "jennifer.stone@adelaide.edu.au",
  },
  {
    name: "Peter Tugwell",
    role: "Methodological Advisor",
    affiliation: "University of Ottawa, Canada",
    bio: "Peter contributes methodological expertise in core outcome set development, GRADE methodology, and health services research from the Bruyère Research Institute and Ottawa Hospital Research Institute.",
    image: "/images/team/Peter.jpg",
    email: "peter.tugwell@uottawa.ca",
  },
  {
    name: "Paul A. Swinton",
    role: "Methodological Advisor",
    affiliation: "School of Health, Robert Gordon University, Aberdeen, UK",
    bio: "Paul provides methodological guidance on evidence synthesis, meta-analysis, and Delphi study design for the CAPIS project.",
    image: "/images/team/Paul.jpg",
    email: "p.swinton@rgu.ac.uk",
  },
];

const publications = [
  {
    title: "A critical appraisal of systematic reviews assessing chronic velocity-based resistance training",
    journal: "PLOS ONE",
    year: "2026",
  },
  {
    title: "Physical activity for the management of obesity in children up to the age of 9 years",
    journal: "Cochrane Database of Systematic Reviews",
    year: "2026",
  },
];

const presentations = [
  {
    title: "QPR Conference 2026",
    location: "National Wine Centre, Adelaide",
    status: "Completed",
  },
  {
    title: "JBI iGNITE 2026",
    location: "Online",
    status: "Accepted",
  },
  {
    title: "World Congress of Sports Physiotherapy",
    location: "Bern, Switzerland",
    status: "Accepted",
  },
  {
    title: "Cochrane Colloquium 2026",
    location: "Krakow, Poland",
    status: "Accepted",
  },
];

function ProfileCard({ member }: { member: typeof leadInvestigator }) {
  return (
    <div
      style={{
        border: `1px solid ${NAVY}`,
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "140px",
          height: "160px",
          flexShrink: 0,
          overflow: "hidden",
          borderRadius: "12px",
          border: `3px solid ${NAVY}`,
          backgroundColor: "#E2E8F0",
        }}
      >
        <Image
          src={member.image}
          alt={`Photo of ${member.name}`}
          fill
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
          sizes="140px"
        />
      </div>

      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "16px",
            fontWeight: 700,
            color: "#1A202C",
            marginBottom: "4px",
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: NAVY,
            marginBottom: "2px",
          }}
        >
          {member.role}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#4A5568",
            marginBottom: "10px",
            fontStyle: "italic",
          }}
        >
          {member.affiliation}
        </p>
        <p
          style={{
            fontSize: "13px",
            lineHeight: 1.6,
            color: "#2D3748",
          }}
        >
          {member.bio}
        </p>

        {member.email && (
          <a
            href={`mailto:${member.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "12px",
              fontSize: "13px",
              fontWeight: 500,
              color: TEAL,
              textDecoration: "none",
            }}
          >
            <svg
              width="14"
              height="14"
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
            Email
          </a>
        )}
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main>
      {/* ── Hero Banner ── */}
      <section style={{ backgroundColor: NAVY }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "20px 24px",
            display: "grid",
            alignItems: "center",
            gap: "24px",
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
              STUDY
              <br />
              TEAM
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#B0C4DE",
                marginTop: "8px",
              }}
            >
              Meet the research team behind the CAPIS project.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", width: "400px", height: "320px" }}>
              <Image
                src="/images/meet.png"
                alt="Graphic representing the CAPIS project"
                fill
                style={{ objectFit: "contain" }}
                sizes="400px"
              />
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Lead Investigator ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "32px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              fontWeight: 600,
              color: "#1A202C",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            Lead Investigator
          </h2>
          <ProfileCard member={leadInvestigator} />
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Study Team ── */}
      <section style={{ backgroundColor: "#F7FAFC", padding: "32px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              fontWeight: 600,
              color: "#1A202C",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            Study Team
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {studyTeam.map((member) => (
              <ProfileCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Acknowledgment ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
              border: "1px solid #bae6fd",
              borderRadius: "10px",
              padding: "28px",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "17px",
                fontWeight: 600,
                color: NAVY,
                marginBottom: "12px",
              }}
            >
            Acknowledgment
            </h3>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#2D3748",
              }}
           >
              The CAPIS project would like to extend its sincere gratitude to the
              following researchers for their valuable contributions and involvement in
              the project:
            </p>
            <ul
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#2D3748",
                paddingLeft: "20px",
                marginTop: "8px",
              }}
            >
              <li>M.Sc. Lubin Fernando Betancur Sepulveda</li>
              <li>PhD María Cinta Gómez</li>
              <li>M.Sc. Andrés M. Echavarría-Rodríguez</li>
              <li>PhD Juan Osvaldo Jiménez Trujillo</li>
              <li>Post-doc. Julia Bidonde</li>
            </ul>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Related Projects & Thesis Work ── */}
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
              marginBottom: "8px",
            }}
          >
            Related Projects & Thesis Work
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#2D3748",
              marginBottom: "24px",
            }}
          >
            Explore the broader research landscape connected to CAPIS.
          </p>
          <RelatedProjects />
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Publications ── */}
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
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Latest Publications
          </h2>
          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            <article
              style={{
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#FFFFFF",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: TEAL,
                  marginBottom: "8px",
                }}
              >
                Published
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#1A202C",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                Physical activity for the management of obesity in children up to the age of 9 years
              </h3>
              <p style={{ fontSize: "13px", color: "#2D3748", marginBottom: "8px" }}>
                Cochrane Database of Systematic Reviews · 2026
              </p>
              <p style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "#2D3748" }}>
                DOI: <a 
                  href="https://doi.org/10.1002/14651858.CD015988" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "#2D3748", textDecoration: "underline", textUnderlineOffset: "2px" }}
                >
                  10.1002/14651858.CD015988
                </a>
              </p>
            </article>

            <article
              style={{
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#FFFFFF",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: TEAL,
                  marginBottom: "8px",
                }}
              >
                Published
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#1A202C",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                Physical activity for the management of obesity in adolescents aged 10 to 19 years
              </h3>
              <p style={{ fontSize: "13px", color: "#2D3748", marginBottom: "8px" }}>
                Cochrane Database of Systematic Reviews · 2026
              </p>
              <p style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "#2D3748" }}>
                DOI: <a 
                  href="https://doi.org/10.1002/14651858.cd015987" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "#2D3748", textDecoration: "underline", textUnderlineOffset: "2px" }}
                >
                  10.1002/14651858.cd015987
                </a>
              </p>
            </article>
            
            <article
              style={{
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#FFFFFF",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: TEAL,
                  marginBottom: "8px",
                }}
              >
                Published
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#1A202C",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                A critical appraisal of systematic reviews assessing chronic velocity-based resistance training
              </h3>
              <p style={{ fontSize: "13px", color: "#2D3748", marginBottom: "8px" }}>
                PLOS ONE · 2026
              </p>
              <p style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "#2D3748" }}>
                DOI: <a 
                  href="https://doi.org/10.1371/journal.pone.0342992" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "#2D3748", textDecoration: "underline", textUnderlineOffset: "2px" }}
                >
                  10.1371/journal.pone.0342992
                </a>
              </p>
            </article>

            <article
              style={{
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#FFFFFF",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: TEAL,
                  marginBottom: "8px",
                }}
              >
                Published
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#1A202C",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                Effects of exercise training on blood pressure: An overview of reviews
              </h3>
              <p style={{ fontSize: "13px", color: "#2D3748", marginBottom: "8px" }}>
                Journal of Sports Sciences · 2025
              </p>
              <p style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "#2D3748" }}>
                DOI: <a 
                  href="https://doi.org/10.1080/02640414.2025.2549862" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "#2D3748", textDecoration: "underline", textUnderlineOffset: "2px" }}
                >
                  10.1080/02640414.2025.2549862
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Presentations & Conferences ── */}
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
              marginBottom: "24px",
            }}
          >
            Presentations & Conferences
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {presentations.map((pres) => (
              <div
                key={pres.title}
                style={{
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  padding: "20px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: TEAL,
                    marginBottom: "8px",
                  }}
                >
                  {pres.status}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#1A202C",
                    marginBottom: "4px",
                  }}
                >
                  {pres.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#4A5568" }}>
                  {pres.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
