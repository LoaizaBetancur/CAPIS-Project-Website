import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Resources for coaches",
  description: "Information and resources for coaches and performance staff participating in the CAPIS project.",
};

export default function ResourcesCoachesPage() {
  return (
    <>
      <SectionWrapper background="bg" spacing="xl">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-display-lg mb-4">Resources for coaches</h1>
          <p className="text-lead text-text-muted">
            Information sheets and resources for coaches, strength and conditioning staff, 
            and performance directors.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="surface">
        <div className="mx-auto max-w-content">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Coach Information Sheet</h3>
              <p className="text-sm text-text-muted mb-4">
                Details about the CAPIS project tailored for coaching and performance staff.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Plain Language Summary</h3>
              <p className="text-sm text-text-muted mb-4">
                An accessible overview of the project and how it relates to coaching practice.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Video: How the Delphi Process Works</h3>
              <p className="text-sm text-text-muted mb-4">
                Learn about the consensus process and how your input shapes the final outcome set.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">FAQ for Coaches</h3>
              <p className="text-sm text-text-muted mb-4">
                Common questions from coaching staff about participation and time commitment.
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
