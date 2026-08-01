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
        <div className="mx-auto max-w-[70ch] text-center">
          <h1 className="font-semibold mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15, color: "#1A202C" }}>
            Useful links
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#4A5568" }}>
            Related organisations, tools, and further reading.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="surface">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-6 md:grid-cols-2">
            {links.map((link) => (
              <Card key={link.url} href={link.url}>
                <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", color: "#1A202C" }}>
                  {link.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: "#4A5568" }}>{link.description}</p>
                <span className="text-sm font-medium" style={{ color: "#2B6CB0" }}>Visit website →</span>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
