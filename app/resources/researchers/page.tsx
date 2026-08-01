import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Resources for researchers",
  description: "Protocols, methods, and technical resources for researchers.",
};

export default function ResourcesResearchersPage() {
  return (
    <>
      <SectionWrapper background="bg" spacing="xl">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-display-lg mb-4">Resources for researchers</h1>
          <p className="text-lead text-text-muted">
            Study protocols, methodological documents, and research outputs from the CAPIS project.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="surface">
        <div className="mx-auto max-w-content">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Study Protocol</h3>
              <p className="text-sm text-text-muted mb-4">
                Full protocol describing the systematic review, Delphi consensus, and implementation phases.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Search Strategy</h3>
              <p className="text-sm text-text-muted mb-4">
                Replicable database search strings for MEDLINE, Embase, CINAHL, and Cochrane Library.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Data Dictionary</h3>
              <p className="text-sm text-text-muted mb-4">
                Variable definitions and coding schemes for the Delphi survey dataset.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Analysis Plan</h3>
              <p className="text-sm text-text-muted mb-4">
                Pre-specified statistical analysis plan aligned with CREDES guidelines.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-body text-text-muted mb-4">
              For questions about collaborating or accessing preliminary data, please contact the study team.
            </p>
            <Button href="/team" variant="secondary">
              Contact Study Team
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
