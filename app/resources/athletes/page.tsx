import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Resources for athletes",
  description: "Information and resources for football players participating in the CAPIS project.",
};

export default function ResourcesAthletesPage() {
  return (
    <>
      <SectionWrapper background="bg" spacing="xl">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-display-lg mb-4">Resources for athletes</h1>
          <p className="text-lead text-text-muted">
            Information sheets and resources for Tier 3, 4, or 5 football players 
            taking part in the CAPIS project.
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
                including what to expect, how the e-Delphi survey works, and how your 
                data will be used. Available in English and Spanish.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Plain Language Summary</h3>
              <p className="text-sm text-text-muted mb-4">
                A simple, jargon-free explanation of what the CAPIS project is, why it 
                matters for football players, and how your input will shape future research.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Video: What is a Core Outcome Set?</h3>
              <p className="text-sm text-text-muted mb-4">
                A short video explaining what core outcome sets are and why they are 
                important for improving research in football and athletic performance.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">FAQ for Athletes</h3>
              <p className="text-sm text-text-muted mb-4">
                Answers to common questions about participating in the Delphi consensus 
                panel, time commitment, and what happens to your responses.
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
