import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
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
      category: "core" as const,
    },
    {
      name: "Jennifer Stone",
      role: "Primary Supervisor",
      affiliation: "JBI, School of Public Health, University of Adelaide",
      bio: "Jennifer provides overall methodological guidance for the CAPIS project, contributing expertise in evidence synthesis, systematic review methodology, and implementation science.",
      email: "j.stone@adelaide.edu.au",
      category: "core" as const,
    },
    {
      name: "Peter Tugwell",
      role: "Methodological Advisor",
      affiliation: "University of Ottawa, Canada",
      bio: "Peter contributes methodological expertise in core outcome set development, GRADE methodology, and health services research from the Bruyere Research Institute and Ottawa Hospital Research Institute.",
      email: "ptugwell@uottawa.ca",
      category: "core" as const,
    },
    {
      name: "Paul A. Swinton",
      role: "Methodological Advisor",
      affiliation: "School of Health, Robert Gordon University, Aberdeen, UK",
      bio: "Paul provides methodological guidance on evidence synthesis, meta-analysis, and Delphi study design for the CAPIS project.",
      email: "p.swinton@rgu.ac.uk",
      category: "core" as const,
    },
  ],
};

export default function TeamPage() {
  return (
    <>
      <SectionWrapper background="bg" spacing="xl">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-display-lg mb-4">Study Team</h1>
          <p className="text-lead text-text-muted">
            Meet the people behind the CAPIS project.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="core" background="surface">
        <div className="mx-auto max-w-content">
          <h2 className="text-display-md mb-2">{coreTeam.heading}</h2>
          <p className="text-lead text-text-muted mb-8">{coreTeam.description}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {coreTeam.members.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="bg">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="text-display-md mb-4">Collaborating Institutions</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-6 text-center">
              <p className="font-display font-semibold text-text">University of Adelaide</p>
              <p className="text-sm text-text-muted mt-1">Australia</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6 text-center">
              <p className="font-display font-semibold text-text">University of Ottawa</p>
              <p className="text-sm text-text-muted mt-1">Canada</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6 text-center">
              <p className="font-display font-semibold text-text">Robert Gordon University</p>
              <p className="text-sm text-text-muted mt-1">United Kingdom</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
