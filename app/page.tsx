import { Metadata } from "next";
import Button from "@/components/Button";
import ParticipantCard from "@/components/ParticipantCard";
import StageCard from "@/components/StageCard";

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
    color: "bg-blue-100 text-blue-700",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2"/></svg>
    ),
  },
  {
    name: "Coaches & Performance Staff",
    description: "Strength and conditioning coaches, football coaches, and sports physicians working with elite players.",
    color: "bg-green-100 text-green-700",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m22 21-3-3"/><path d="m19 18 3 3"/></svg>
    ),
  },
  {
    name: "Academics & Researchers",
    description: "Sport science lecturers, students, trialists, and systematic reviewers in athletic performance research.",
    color: "bg-purple-100 text-purple-700",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14"/><path d="M3 18a9 9 0 0 1 9-9 9 9 0 0 1 9 9"/></svg>
    ),
  },
  {
    name: "Policymakers",
    description: "Chief performance officers and directors of performance involved in athletic performance decision-making.",
    color: "bg-orange-100 text-orange-700",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
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
      {/* ── HERO: Text LEFT, Image RIGHT ── */}
      <section style={{ backgroundColor: NAVY }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "48px 24px",
            display: "grid",
            alignItems: "center",
            gap: "48px",
            gridTemplateColumns: "1fr 1fr",
          }}
          className="hero-grid"
        >
          {/* LEFT: Text */}
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
              Core Athletic Performance-based Intervention Set for Athletes
            </p>
          </div>

          {/* RIGHT: Video / Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "16px",
              overflow: "hidden",
              aspectRatio: "16/9",
              backgroundColor: "#1A2A40",
            }}
          >
            <iframe
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="CAPIS Project video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
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
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4A5568" }}>
              Athletes and sport-related professionals need the best evidence about which 
              athletic performance-based training interventions work best and are safe. 
              The CAPIS project aims to identify a subset of core outcome set (COS) domains 
              for plyometric training interventions in adult football players classified as 
              Tiers 3, 4, or 5.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span style={{ fontSize: "120px" }}>🏃</span>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
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
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4A5568", marginBottom: "12px" }}>
              Football research studies should consistently measure and report the results of 
              athletic performance-based training interventions. We call these results{" "}
              <strong>outcomes</strong>, and they can be positive or unwanted. 
              When studies measure different outcomes in diverse ways, it becomes 
              difficult to compare or combine them.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4A5568" }}>
              This project will agree on which outcomes should always be measured in plyometric 
              training research studies. We call this agreed-upon minimum list a{" "}
              <strong>Core Outcome Set (COS)</strong>.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span style={{ fontSize: "120px" }}>🤔</span>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
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
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4A5568" }}>
              We will invite you to take part because you are a key professional in athletic 
              performance-based training interventions. Your routine or research experiences 
              are really important. We want to know what is important to you when 
              implementing or performing plyometric training interventions and what impact 
              it has on you.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span style={{ fontSize: "120px" }}>✋</span>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
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
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4A5568", marginBottom: "32px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            We are recruiting four key interest-holder groups to join our consensus study.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {participants.map((p) => (
              <ParticipantCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Stages ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "48px 24px" }}>
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
            How will we do the project?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4A5568", marginBottom: "32px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            This project involves five phases, following the COMET and OMERACT methodological guidance.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stages.map((stage) => (
              <StageCard key={stage.number} {...stage} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── What is COS? (with embedded video) ── */}
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
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4A5568", marginBottom: "8px" }}>
            A core outcome set (COS) is an agreed standardised collection of outcomes that 
            should be measured and reported in all clinical trials for a specific condition 
            or intervention.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4A5568", marginBottom: "24px" }}>
            The video below explains more. Further information from the COMET Initiative:{" "}
            <a href="https://www.comet-initiative.org/" target="_blank" rel="noopener noreferrer" style={{ color: TEAL, textDecoration: "underline" }}>
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
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="What are core outcome sets?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Project Information (WHITE section, like COMBAT) ── */}
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
              marginBottom: "24px",
            }}
          >
            Project information
          </h2>

          <div style={{ maxWidth: "700px" }}>
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#1A202C", textDecoration: "underline", textUnderlineOffset: "3px", marginBottom: "6px" }}>
                Registration
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#4A5568" }}>
                This Study is registered with the COMET database as Study 3589 (
                <a href="https://www.comet-initiative.org/Studies/Details/3589" target="_blank" rel="noopener noreferrer" style={{ color: TEAL, textDecoration: "underline" }}>
                  https://www.comet-initiative.org/Studies/Details/3589
                </a>
                ).
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#1A202C", textDecoration: "underline", textUnderlineOffset: "3px", marginBottom: "6px" }}>
                Ethics
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#4A5568" }}>
                Ethics approval: HREC/HREC-1/2026/1233(v5)
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#1A202C", textDecoration: "underline", textUnderlineOffset: "3px", marginBottom: "6px" }}>
                Sponsor
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#4A5568" }}>
                JBI, School of Public Health, University of Adelaide
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#1A202C", textDecoration: "underline", textUnderlineOffset: "3px", marginBottom: "6px" }}>
                Contact
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#4A5568" }}>
                The Research Sponsor can be contacted at{" "}
                <a href="mailto:andresfelipe.loaizabetancur@adelaide.edu.au" style={{ color: TEAL, textDecoration: "underline" }}>
                  andresfelipe.loaizabetancur@adelaide.edu.au
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: "4px", backgroundColor: NAVY }} />
    </>
  );
}
