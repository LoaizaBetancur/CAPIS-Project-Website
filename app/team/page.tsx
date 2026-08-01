import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import TeamCard from "@/components/TeamCard";
import { coreTeam, advisoryPanel, consumerReps } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Study Team",
  description: "Meet the people behind the CAPIS project.",
};

export default function TeamPage() {
  return (
    <>
      <SectionWrapper background="bg" spacing="xl">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-display-lg mb-4">Study Team</h1>
          <p className="text-lead text-text-muted">
            This project brings together doctoral researchers, experienced supervisors, 
            an international expert advisory panel, and consumer representatives.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="core" background="surface">
        <div className="mx-auto max-w-content">
          <h2 className="text-display-md mb-2">{coreTeam.heading}</h2>
          <p className="text-lead text-text-muted mb-8">{coreTeam.description}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreTeam.members.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="advisory" background="bg">
        <div className="mx-auto max-w-content">
          <h2 className="text-display-md mb-2">{advisoryPanel.heading}</h2>
          <p className="text-lead text-text-muted mb-8">{advisoryPanel.description}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advisoryPanel.members.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="consumer" background="surface">
        <div className="mx-auto max-w-content">
          <h2 className="text-display-md mb-2">{consumerReps.heading}</h2>
          <p className="text-lead text-text-muted mb-8">{consumerReps.description}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {consumerReps.members.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
