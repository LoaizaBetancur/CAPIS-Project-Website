import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Useful links",
  description: "External resources and related initiatives.",
};

const links = [
  {
    title: "COMET Initiative",
    description: "The Core Outcome Measures in Effectiveness Trials initiative provides guidance on developing and selecting core outcome sets.",
    url: "https://www.comet-initiative.org/",
  },
  {
    title: "OMERACT",
    description: "Outcome Measures in Rheumatology — an international initiative that develops core outcome measurement sets for clinical trials.",
    url: "https://omeract.org/",
  },
  {
    title: "University of Adelaide",
    description: "Faculty of Health Sciences, where the CAPIS project is based.",
    url: "https://www.adelaide.edu.au/health/",
  },
  {
    title: "JBI (Joanna Briggs Institute)",
    description: "Global leader in evidence-based healthcare, providing guidance for systematic reviews and evidence synthesis.",
    url: "https://jbi.global/",
  },
  {
    title: "PROSPERO",
    description: "International prospective register of systematic reviews.",
    url: "https://www.crd.york.ac.uk/prospero/",
  },
  {
    title: "ClinicalTrials.gov",
    description: "Database of privately and publicly funded clinical studies conducted around the world.",
    url: "https://clinicaltrials.gov/",
  },
];

export default function UsefulLinksPage() {
  return (
    <>
      <SectionWrapper background="bg" spacing="xl">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-display-lg mb-4">Useful links</h1>
          <p className="text-lead text-text-muted">
            Related organisations, tools, and further reading.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="surface">
        <div className="mx-auto max-w-content">
          <div className="grid gap-6 md:grid-cols-2">
            {links.map((link) => (
              <Card key={link.url} href={link.url}>
                <h3 className="font-display text-lg font-semibold mb-2">{link.title}</h3>
                <p className="text-sm text-text-muted mb-4">{link.description}</p>
                <span className="text-sm font-medium text-accent">Visit website →</span>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
