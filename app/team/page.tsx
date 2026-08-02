import { Metadata } from "next";
import TeamCard from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "Study Team",
  description: "Meet the people behind the CAPIS project.",
};

const coreTeam = {
  heading: "Core Research Team",
  description:
    "The CAPIS project is led by a doctoral candidate under the supervision of experienced researchers at the University of Adelaide, with international methodological guidance.",
  members: [
    {
      name: "Andrés F. Loaiza-Betancur",
      role: "PhD Candidate & Lead Researcher",
      affiliation: "JBI, School of Public Health, University of Adelaide",
      bio: "Andrés leads all phases of the CAPIS research programme — from the scoping review and focus groups through to the Delphi consensus and dissemination. He is supported by an Adelaide University research scholarship.",
      email: "andresfelipe.loaizabetancur@adelaide.edu.au",
      image: "/images/team/andres.jpg",
      category: "core" as const,
      publications: [
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
      ],
      events: [
        { title: "Accepted: International Conference on Sports Science 2026", location: "Melbourne, Australia" },
      ],
    },
    {
      name: "Jennifer Stone",
      role: "Primary Supervisor",
      affiliation: "JBI, School of Public Health, University of Adelaide",
      bio: "Jennifer provides overall methodological guidance for the CAPIS project, contributing expertise in evidence synthesis, systematic review methodology, and implementation science.",
      email: "j.stone@adelaide.edu.au",
      image: "/images/team/jennifer.jpg",
      category: "core" as const,
    },
    {
      name: "Peter Tugwell",
      role: "Methodological Advisor",
      affiliation: "University of Ottawa, Canada",
      bio: "Peter contributes methodological expertise in core outcome set development, GRADE methodology, and health services research from the Bruyere Research Institute and Ottawa Hospital Research Institute.",
      email: "ptugwell@uottawa.ca",
      image: "/images/team/peter.jpg",
      category: "core" as const,
    },
    {
      name: "Paul A. Swinton",
      role: "Methodological Advisor",
      affiliation: "School of Health, Robert Gordon University, Aberdeen, UK",
      bio: "Paul provides methodological guidance on evidence synthesis, meta-analysis, and Delphi study design for the CAPIS project.",
      email: "p.swinton@rgu.ac.uk",
      image: "/images/team/paul.jpg",
      category: "core" as const,
    },
  ],
};

export default function TeamPage() {
  return (
    <>
      {/* Banner */}
      <div style={{ backgroundColor: "#2A3F5F", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Study Team
          </h1>
          <p style={{ color: "#B0C4DE", marginTop: "8px", fontSize: "16px" }}>
            The people behind the research
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <section style={{ backgroundColor: "#F7FAFC", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontWeight: 600,
              color: "#1A202C",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              marginBottom: "24px",
            }}
          >
            {coreTeam.heading}
          </h2>
          <p style={{ fontSize: "15px", color: "#4A5568", marginBottom: "32px", maxWidth: "700px" }}>
            {coreTeam.description}
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {coreTeam.members.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
