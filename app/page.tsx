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

const publications = [
  {
    title: "A critical appraisal of systematic reviews assessing chronic velocity-based resistance training",
    journal: "PLOS ONE",
    year: 2026,
    doi: "10.1371/journal.pone.0342992",
  },
  {
    title: "Physical activity for the management of obesity in children up to the age of 9 years",
    journal: "Cochrane Database of Systematic Reviews",
    year: 2026,
    doi: "10.1002/14651858.CD015988",
  },
];

const events = [
  {
    title: "COMET Initiative Annual Meeting",
    role: "Poster Presentation",
    location: "Virtual",
    date: "2025",
  },
  {
    title: "ACSM Annual Meeting",
    role: "Accepted Abstract",
    location: "Minneapolis, USA",
    date: "2026",
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
            padding: "48px 24px",
            display: "grid",
            alignItems: "center",
            gap: "48px",
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
              Core Athletic Performance-based Intervention Set for Athletes
            </p>
          </div>

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
              training research studies. We call this
