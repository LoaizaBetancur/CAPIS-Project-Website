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
            This study is registered in the COMET database (ID: 3589).
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="surface">
        <div className="mx-auto max-w-content">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Study Protocol</h3>
              <p className="text-sm text-text-muted mb-4">
                Full protocol describing the five-phase research design: scoping review, 
                focus groups, winnowing and binning, e-Delphi consensus, and consensus meeting. 
                Reported in accordance with COS-STAP.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Search Strategy</h3>
              <p className="text-sm text-text-muted mb-4">
                Replicable search strings for MEDLINE, Embase, CINAHL, PsycINFO, Web of Science, 
                and SPORTDiscus, including database-specific syntax and filters.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Delphi Survey Instrument</h3>
              <p className="text-sm text-text-muted mb-4">
                The e-Delphi questionnaire including all candidate outcome domains, 
                9-point Likert rating scales, and participant information. Useful for 
                researchers designing similar consensus studies.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold mb-2">Consensus Definition</h3>
              <p className="text-sm text-text-muted mb-4">
                The 70/15 consensus rule: outcomes rated 7–9 by ≥70% of interest-holders 
                and 1–3 by ≤15% are included in the final COS. Full criteria and analysis plan.
              </p>
              <span className="inline-block rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Coming soon
              </span>
            </Card>
          </div>

          <div className="mt-12 rounded-xl border border-border bg-surface p-8 text-center">
            <h3 className="font-display text-lg font-semibold mb-2">COMET Database Registration</h3>
            <p className="text-sm text-text-muted mb-4">
              The CAPIS study protocol is registered in the COMET initiative database.
            </p>
            <Button href="https://www.comet-initiative.org/Studies/Details/3589" external variant="secondary">
              View COMET Registration →
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-body text-text-muted mb-4">
              For questions about collaborating or accessing preliminary data, please contact the study team.
            </p>
            <Button href="mailto:andresfelipe.loaizabetancur@adelaide.edu.au" variant="primary">
              Contact Study Team
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
