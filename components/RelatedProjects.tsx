"use client";

import { useState, useRef, useEffect } from "react";

interface Project {
  title: string;
  status: "Ongoing" | "Recruiting" | "Completed" | "Submitted";
  description: string;
  meta: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    title: "Study protocol for developing a core domain set for plyometric training interventions in Tier 3-5 football players",
    status: "Submitted",
    description:
      "CAPIS Core Outcome Set Development",
    meta: [
      { label: "📅", value: "2025 – 2026" },
      { label: "🏷️", value: "Core Outcome Set" },
    ],
  },
  {
    title: "A critical appraisal of SRMAs assessing the effect of athletic performance training-based interventions in athletes: Umbrella review",
    status: "Ongoing",
    description:
      "Thesis",
    meta: [
      { label: "📅", value: "2025 – 2027" },
      { label: "📄", value: "66 systematic reviews with pairwise meta-analysis" },
      { label: "🏷️", value: "Thesis: Chapter 2" },
    ],
  },
  {
    title: "Statistical heterogeneity in meta-analyses of athletic performance outcomes in athletes: a scoping review",
    status: "Ongoing",
    description:
      "Thesis",
    meta: [
      { label: "📅", value: "2025 – 2027" },
      { label: "📄", value: "66 systematic reviews with pairwise meta-analysis" },
      { label: "🏷️", value: "Chapter 2" },
    ],
  },
  {
    title: "Comparative effectiveness of athletic performance training-based interventions in Tier 3-5 football players: a systematic review and network meta-analysis",
    status: "Ongoing",
    description:
      "Thesis",
    meta: [
      { label: "📅", value: "2025 – 2027" },
      { label: "📄", value: "144 studies RCTs and NRSIs" },
      { label: "🏷️", value: "Chapter 2" },
    ],
  },
  {
    title: "A cumulative meta-analysis of plyometric trials for Tier 3-5 football players",
    status: "Ongoing",
    description:
      "Thesis",
    meta: [
      { label: "📅", value: "2025 – 2028" },
      { label: "📄", value: "ongoing" },
      { label: "🏷️", value: "Chapter 2" },
    ],
  },
  {
    title: "Analysis of reporting completeness in plyometric football trials: a systematic review",
    status: "Ongoing",
    description:
      "Thesis",
    meta: [
      { label: "📅", value: "2025 – 2027" },
      { label: "📄", value: "23 studies RCTs and NRSIs" },
      { label: "🏷️", value: "Chapter 2"},
    ],
  },
  {
    title: "Core outcome set of athletic performance training-based interventions: a scoping review",
    status: "Ongoing",
    description:
      "CAPIS Core Outcome Set Development",
    meta: [
      { label: "📅", value: "2025 – 2026" },
      { label: "📄", value: "144 studies RCTs and NRSIs" },
      { label: "🏷️", value: "Core Outcome Set" },
    ],
  },
  {
    title: "Perspectives and priorities on athletic performance outcome domains in football: a qualitative study",
    status: "Recruiting",
    description:
      "CAPIS Core Outcome Set Development",
    meta: [
      { label: "📅", value: "2026 – 2027" },
      { label: "👥", value: "5-10 interest-holders per focus group" },
      { label: "🏷️", value: "Core Outcome Set" },
    ],
  },
  {
    title: "CAPIS Study: Winnowing and binning preliminary candidate domains for the core outcome set in football",
    status: "Recruiting",
    description:
      "CAPIS Core Outcome Set Development",
    meta: [
      { label: "📅", value: "2027" },
      { label: "👥", value: "open invitation to interest-holder groups" },
      { label: "🏷️", value: "Core Outcome Set" },
    ],
  },
  {
    title: "The CAPIS study: A core outcome set for plyometric training intervention in Tier 3-5 football players",
    status: "Ongoing",
    description:
      "CAPIS Core Outcome Set Development",
    meta: [
      { label: "📅", value: "2025 – 2028" },
      { label: "🏷️", value: "Core Outcome Set" },
    ],
  },
];

const statusStyles: Record<string, { bg: string; color: string }> = {
  Ongoing: { bg: "#EBF4FF", color: "#2B6CB0" },
  Recruiting: { bg: "#FEF3C7", color: "#B45309" },
  Completed: { bg: "#D1FAE5", color: "#047857" },
  Submitted: { bg: "#F1F5F9", color: "#64748B" },
};

export default function RelatedProjects() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={wrapRef} style={{ position: "relative", maxWidth: "640px" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          border: open ? "2px solid #2B6CB0" : "2px solid #E2E8F0",
          borderRadius: "8px",
          padding: "12px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          fontWeight: 500,
          color: selected !== null ? "#1A202C" : "#A0AEC0",
          cursor: "pointer",
        }}
      >
        <span>
          {selected !== null ? projects[selected].title : "Select a project..."}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 200ms",
            flexShrink: 0,
          }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        style={{
          position: "absolute",
          top: "calc(100% + 6px)",
          left: 0,
          right: 0,
          backgroundColor: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "8px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          zIndex: 50,
          overflow: "hidden",
          maxHeight: open ? "2000px" : "0px",
          opacity: open ? 1 : 0,
          transition: "max-height 250ms ease, opacity 200ms ease",
        }}
      >
        {projects.map((project, idx) => {
          const s = statusStyles[project.status] || { bg: "#F1F5F9", color: "#64748B" };
          return (
            <div
              key={project.title}
              onClick={() => {
                setSelected(idx);
                setOpen(false);
              }}
              style={{
                padding: "10px 14px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom:
                  idx < projects.length - 1 ? "1px solid #F1F5F9" : "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#F8FAFC")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#1A202C",
                }}
              >
                {project.title}
              </span>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  padding: "3px 8px",
                  borderRadius: "999px",
                  backgroundColor: s.bg,
                  color: s.color,
                  flexShrink: 0,
                  marginLeft: "8px",
                }}
              >
                {project.status}
              </span>
            </div>
          );
        })}
      </div>

      {selected !== null && (
        <div
          style={{
            marginTop: "20px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <h4
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "15px",
              fontWeight: 600,
              color: "#1A202C",
              marginBottom: "8px",
            }}
          >
            {projects[selected].title}
          </h4>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.6,
              color: "#4A5568",
              marginBottom: "12px",
            }}
          >
            {projects[selected].description}
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {projects[selected].meta.map((m) => (
              <span
                key={m.label + m.value}
                style={{ fontSize: "12px", color: "#64748B" }}
              >
                {m.label} {m.value}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
