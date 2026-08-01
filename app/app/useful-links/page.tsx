import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Button from "@/components/Button";

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
    title: "University of Adelaide",
    description: "Faculty of Health Sciences, where the CAPIS project is based.",
    url: "https://www.adelaide.edu.au/health/",
  },
  {
    title: "PROSPERO",
    description: "International prospective register of systematic reviews.",
    url: "https://www.crd.york.ac.uk/prospero/",
  },
  {
    title: "Cochrane Library",
    description: "Collection of databases containing high-quality evidence for healthcare decision making.",
    url: "https://www.cochranelibrary.com/",
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
