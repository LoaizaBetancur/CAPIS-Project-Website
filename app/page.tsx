import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Button from "@/components/Button";
import {
  heroContent,
  overviewCards,
  highlightStats,
  latestPublications,
  getIconSvg,
} from "@/lib/data/home";

export const metadata: Metadata = {
  title: "Home",
  description:
    "An international multi-phase research project to develop a outcome domain list that shoudl be measured for all trials for athletic performance-based training interventions in athletes.",
  openGraph: {
    title: "The CAPIS project: Core Athletic Performance-based Intervention Set for Athletes",
    description:
      "Advancing evidence-based clinical practice through systematic review, Delphi consensus, and implementation science.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection
        eyebrow={heroContent.eyebrow}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
      />

      {/* ── Structured data (JSON-LD) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ResearchProject",
              name: "PhD Research Project — Advancing Evidence-Based Clinical Practice",
              description:
                "A multi-phase doctoral research programme integrating systematic review, Delphi consensus methodology, and implementation science frameworks to advance evidence-based clinical practice.",
              url: "https://phdresearchproject.edu",
              foundingDate: "2025-03-01",
              parentOrganization: {
                "@type": "EducationalOrganization",
                name: "University of Adelaide",
                url: "https://www.adelaide.edu.au",
              },
              author: {
                "@type": "Person",
                name: "Jennifer Chen",
                jobTitle: "PhD Candidate",
              },
              sponsor: {
                "@type": "GovernmentOrganization",
                name: "Australian Government Research Training Program",
              },
              keywords: [
                "systematic review",
                "Delphi consensus",
                "implementation science",
                "evidence-based practice",
                "clinical research",
                "knowledge translation",
              ],
            }),
          }}
        />

        {/* ── Highlight statistics ── */}
      <SectionWrapper background="surface" spacing="md">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {highlightStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-display-md text-accent">
                {stat.value}
              </p>
              <p className="mt-1 text-caption uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── About the project teaser ── */}
      <SectionWrapper background="accent-soft" spacing="lg">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-display-md mb-4">
            About This Research
          </h2>
          <p className="text-lead mb-6">
            Athletes and sport-related professionals need the best evidence 
            about which athletic performance-based training interventions work best and are safe. 
            The CAPIS project aims to identify the most relevant results for athletic performance-based 
            training interventions in athletes.
          </p>
          <p className="text-body text-text-muted mb-8">
            The project is based at the Faculty of Health Sciences, University
            of Adelaide, and brings together an international panel of expert
            clinicians, researchers, and consumer representatives.
          </p>
          <Button href="/about" variant="secondary">
            Learn More About the Project
          </Button>
        </div>
      </SectionWrapper>

      {/* ── Latest publications ── */}
      <SectionWrapper id="publications" background="surface" spacing="lg">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-display-md mb-2">
              Latest Publications
            </h2>
            <p className="text-lead text-text-muted">
              Peer-reviewed outputs from the research programme.
            </p>
          </div>
          <Button href="/publications" variant="ghost" size="sm">
            View All Publications &rarr;
          </Button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {latestPublications.map((pub) => (
            <Card key={pub.title} as="article">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex shrink-0 items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                  {pub.status === "published"
                    ? "Published"
                    : pub.status === "in-press"
                      ? "In Press"
                      : "Preprint"}
                </span>
              </div>
              <h3 className="mt-3 font-display text-display-sm">{pub.title}</h3>
              <p className="mt-2 text-caption">
                {pub.journal} &middot; {pub.year}
              </p>
              {pub.doi && (
                <p className="mt-1 text-mono">
                  DOI: {pub.doi}
                </p>
              )}
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Call to action ── */}
      <SectionWrapper spacing="lg">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-display-md mb-4">
            Interested in Participating?
          </h2>
          <p className="text-lead text-text-muted mb-8">
            We are recruiting expert clinicians, researchers, and consumer
            representatives to join our Delphi consensus panel. Expressions of
            interest are welcome from across clinical disciplines.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="primary">
              Register Your Interest
            </Button>
            <Button href="/faq" variant="ghost">
              Frequently Asked Questions
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}