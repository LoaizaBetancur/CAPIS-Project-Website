import { Metadata } from "next";
import Image from "next/image";
import ParticipantCard from "@/components/ParticipantCard";
import StageCard from "@/components/StageCard";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The CAPIS project: Core Athletic Performance-based Intervention Set for Athletes.",
};

const NAVY = "#2A3F5F";
const TEAL = "#3C7887";

const participants = [
  {
    name: "Athletes",
    description: "Tier 3, 4, or 5 football players (≥18 years) participating in plyometric training interventions.",
    icon: "🏃",
  },
  {
    name: "Coaches & Performance Staff",
    description: "Strength and conditioning coaches, football coaches, and sports physicians working with elite players.",
    icon: "🏋️",
  },
  {
    name: "Academics & Researchers",
    description: "Sport science lecturers, students, trialists, and systematic reviewers in athletic performance research.",
    icon: "🎓",
  },
  {
    name: "Policymakers",
    description: "Chief performance officers and directors of performance involved in athletic performance decision-making.",
    icon: "📋",
  },
];

const stages = [
  {
    number: 1,
    title: "Scoping Review",
    description: "A comprehensive review of scientific literature to identify all outcome domains already measured in plyometric training studies with Tier 3, 4, or 5 football players.",
    image: "📚",
  },
  {
    number: 2,
    title: "Focus Groups",
    description: "Semi-structured interviews with players, coaches, and experts to discover outcomes that matter in practice but may be missing from research.",
    image: "💬",
  },
  {
    number: 3,
    title: "Winnowing & Binning",
    description: "Online meetings with each interest-holder group to organise and group outcome domains into a clear, manageable list of candidates.",
    image: "🗂️",
  },
  {
    number: 4,
    title: "e-Delphi Surveys",
    description: "Two rounds of online surveys where players, coaches, academics, and researchers vote on which outcomes are most important using a 9-point scale.",
    image: "📊",
  },
  {
    number: 5,
    title: "Consensus Meeting",
    description: "A half-day online meeting to reach final agreement on the core outcome set that all future plyometric training trials should measure.",
    image: "🤝",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ backgroundColor: NAVY }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "40px 24px",
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
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              THE<br />CAPIS<br />PROJECT
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9rem, 1.5vw, 1.125rem)",
                color: "#B0C4DE",
                marginTop: "16px",
                lineHeight: 1.5,
                maxWidth: "500px",
              }}
            >
              <span style={{ fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px", color: "#FFFFFF" }}>C</span>ore{" "}
              <span style={{ fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px", color: "#FFFFFF" }}>A</span>thletic{" "}
              <span style={{ fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px", color: "#FFFFFF" }}>P</span>erformance-based{" "}
              <span style={{ fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px", color: "#FFFFFF" }}>I</span>ntervention{" "}
              <span style={{ fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px", color: "#FFFFFF" }}>S</span>et for Athletes
            </p>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              aspectRatio: "16/9",
              backgroundColor: "#1A2A40",
            }}
          >
            <iframe
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              src="https://www.youtube.com/embed/fYMz7wH3wKM?si=YypPlM9fvPXrnIEU"
              title="CAPIS Project video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── What is CAPIS? ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "48px 24px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            alignItems: "center",
            gap: "48px",
            gridTemplateColumns: "1fr 1fr",
          }}
          className="content-grid"
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
              What is The CAPIS Project?
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#2D3748" }}>
              Athletes and sport-related professionals need the best evidence about which 
              athletic performance-based training interventions work best and are safe. 
              The CAPIS project aims to identify a minimum subset of outcome domains  
              for plyometric training interventions in adult football players classified as 
              Tiers 3, 4, or 5.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", width: "280px", height: "220px" }}>
              <Image
                src="/images/what-pic.jpg"
                alt="Graphic representing the CAPIS project"
                fill
                style={{ objectFit: "contain" }}
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Why needed? ── */}
      <section style={{ backgroundColor: "#F7FAFC", padding: "48px 24px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            alignItems: "center",
            gap: "48px",
            gridTemplateColumns: "1fr 1fr",
          }}
          className="content-grid"
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
              Why is this project needed?
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#2D3748", marginBottom: "12px" }}>
              Football research studies should consistently measure and report the important 
              effects of athletic performance training interventions. These effects are assessed 
              using outcomes which can reflect beneficial, neutral, or unwanted changes. 
              Outcomes can be grouped into broader areas called <strong>outcomes domains</strong>. 
              When studies focus on different outcome domains, it becomes difficult to compare 
              or combine their findings.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#2D3748" }}>
              This project will agree on the minimum set of outcome 
              domains that should always be assessed in plyometric training research studies. 
              We call this agreed-upon minimum list a <strong>core domain set</strong>.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", width: "280px", height: "220px" }}>
              <Image
                src="/images/why-pic.png"
                alt="Graphic representing the CAPIS project"
                fill
                style={{ objectFit: "contain" }}
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Why participate? ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "48px 24px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            alignItems: "center",
            gap: "48px",
            gridTemplateColumns: "1fr 1fr",
          }}
          className="content-grid"
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
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#2D3748" }}>
              We will invite you to take part because you are a key professional in athletic 
              performance-based training interventions. Your routine or research experiences 
              are really important. We want to know what is important to you when 
              implementing or performing plyometric training interventions and what impact 
              it has on you.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", width: "280px", height: "220px" }}>
              <Image
                src="/images/take-part-pic.png"
                alt="Graphic representing the CAPIS project"
                fill
                style={{ objectFit: "contain" }}
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Participants ── */}
      <section style={{ backgroundColor: "#F7FAFC", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
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
            Participants
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#2D3748",
              marginBottom: "40px",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            We are recruiting four key interest-holder groups to join our consensus study.
          </p>
          <div
            style={{
              display: "grid",
              gap: "24px",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            {participants.map((p) => (
              <ParticipantCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Stages ── */}
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
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            How will we do the project?
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#2D3748",
              marginBottom: "12px",
              textAlign: "center",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            This project involves five phases.
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.6,
              color: "#2D3748",
              marginBottom: "32px",
              textAlign: "center",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            You would have been invited to take part in Stage 2 or Stage 3. You can find out more about each stage from the videos and information sheets in the resources page!
          </p>
          <div
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            {stages.map((stage) => (
              <StageCard key={stage.number} {...stage} />
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── What is COS? ── */}
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
            What is a core outcome set?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#2D3748", marginBottom: "8px" }}>
            A core outcome set (COS) is an agreed standardised collection of outcomes that 
            should be measured and reported in all clinical trials for a specific condition 
            or intervention.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#2D3748", marginBottom: "24px" }}>
            The video below explains more. Further information from the COMET Initiative:{" "}
            <a
              href="https://www.comet-initiative.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: TEAL, textDecoration: "underline" }}
            >
              COMET Plain Language Summary
            </a>
          </p>

          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "720px",
              margin: "0 auto",
              borderRadius: "12px",
              overflow: "hidden",
              aspectRatio: "16/9",
              backgroundColor: "#1A2A40",
              border: "1px solid #E2E8F0",
            }}
          >
            <iframe
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              src="https://www.youtube.com/embed/Sb7sZRKC26o?si=VhxJjPb3l-qXeejj"
              title="What are core outcome sets?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Related Projects & Thesis Work ── */}
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
              marginBottom: "8px",
            }}
          >
            Related Projects & Thesis Work
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#2D3748", marginBottom: "24px" }}>
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

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Presentations & Conferences ── */}
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
            Presentations & Conferences
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#2D3748", marginBottom: "24px" }}>
            The CAPIS project has been accepted for presentation at the following international conferences.
          </p>

          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#F7FAFC",
                padding: "20px",
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
                Poster Presentation
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#1A202C",
                  marginBottom: "6px",
                }}
              >
                JBI iGNITE 2026
              </h3>
              <p style={{ fontSize: "13px", color: "#2D3748", marginBottom: "4px" }}>
                Online · 24–25 September 2026
              </p>
              <p style={{ fontSize: "12px", color: "#2D3748", marginBottom: "10px" }}>
                Session 2 — Friday 25 September, 9:05–9:50am ACST
              </p>
              <p style={{ fontSize: "12px", color: "#2D3748", fontStyle: "italic" }}>
                &ldquo;Core outcome set of athletic performance training-based interventions: a scoping review&rdquo;
              </p>
            </div>

            <div
              style={{
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#F7FAFC",
                padding: "20px",
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
                Poster Accepted
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#1A202C",
                  marginBottom: "6px",
                }}
              >
                WCSPT 2026
              </h3>
              <p style={{ fontSize: "13px", color: "#2D3748", marginBottom: "4px" }}>
                World Congress of Sports Physiotherapy
              </p>
              <p style={{ fontSize: "12px", color: "#2D3748", marginBottom: "10px" }}>
                Bern, Switzerland · 4–5 December 2026
              </p>
              <p style={{ fontSize: "12px", color: "#2D3748", fontStyle: "italic" }}>
                &ldquo;Core outcome set of athletic performance training-based interventions: a scoping review&rdquo;
              </p>
              <p style={{ fontSize: "11px", color: "#2D3748", marginTop: "6px" }}>
                To be published in <em>International Journal of Sports Physical Therapy (IJSPT)</em>
              </p>
            </div>

            <div
              style={{
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#F7FAFC",
                padding: "20px",
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
                Poster Accepted
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#1A202C",
                  marginBottom: "6px",
                }}
              >
                Cochrane Colloquium 2026
              </h3>
              <p style={{ fontSize: "13px", color: "#2D3748", marginBottom: "4px" }}>
                Krakow, Poland · 8–10 December 2026
              </p>
              <p style={{ fontSize: "12px", color: "#2D3748", marginBottom: "10px" }}>
                Theme 5.5: Strengthening evidence literacy for researchers, communities, politicians, media, and decision-makers
              </p>
              <p style={{ fontSize: "12px", color: "#2D3748", fontStyle: "italic" }}>
                &ldquo;Core outcome set of athletic performance training-based interventions: a scoping review&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Project Information ── */}
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
              marginBottom: "24px",
            }}
          >
            Project information
          </h2>

          <div style={{ maxWidth: "700px" }}>
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1A202C",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  marginBottom: "6px",
                }}
              >
                Registration
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#2D3748" }}>
                This Study is registered with the COMET database as Study 3589 (
                <a
                  href="https://www.comet-initiative.org/Studies/Details/3589"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: TEAL, textDecoration: "underline" }}
                >
                  https://www.comet-initiative.org/Studies/Details/3589
                </a>
                ).
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1A202C",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  marginBottom: "6px",
                }}
              >
                Ethics
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#2D3748" }}>
                Ethics approval: HREC/HREC-1/2026/1233(v5)
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1A202C",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  marginBottom: "6px",
                }}
              >
                Affiliation
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#2D3748" }}>
                JBI, School of Public Health, Adelaide University
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1A202C",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  marginBottom: "6px",
                }}
              >
                Contact
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#2D3748" }}>
                The Research Team can be contacted at{" "}
                <a
                  href="mailto:andresfelipe.loaizabetancur@adelaide.edu.au"
                  style={{ color: TEAL, textDecoration: "underline" }}
                >
                  andresfelipe.loaizabetancur@adelaide.edu.au
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
