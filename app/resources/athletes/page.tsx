import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Resources for athletes",
  description: "Information and resources for athletes participating in the CAPIS project.",
};

export default function ResourcesAthletesPage() {
  return (
    <>
      <SectionWrapper background="bg" spacing="xl">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-display-lg mb-4">Resources for athletes</h1>
          <p className="text-lead text-text-muted">
            Information sheets and resources for athletes taking part in the CAPIS project.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="surface">
        <div className="mx-auto max-w-content">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Participant Information Sheet</h3>
              <p className="text-sm text-text-muted mb-4">
                Everything you need to know about taking part in the CAPIS project, 
                including what to expect and how your data will be used.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Plain Language Summary</h3>
              <p className="text-sm text-text-muted mb-4">
                A simple explanation of what the CAPIS project is and why it matters for athletes.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Video: What is a Core Outcome Set?</h3>
              <p className="text-sm text-text-muted mb-4">
                A short video explaining what core outcome sets are and why they are important.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">FAQ for Athletes</h3>
              <p className="text-sm text-text-muted mb-4">
                Answers to common questions about participating in the Delphi consensus panel.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
