import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import PublicationFilter from "@/components/PublicationFilter";
import {
  heroContent,
  pubCategories,
  publications,
} from "@/lib/data/publications";

export const metadata: Metadata = {
  title: "Publications & Outputs",
  description:
    "Peer-reviewed publications and scholarly outputs from the research programme — protocol papers, systematic reviews, Delphi consensus findings, and implementation science contributions.",
  openGraph: {
    title: "Publications — PhD Research Project",
    description:
      "Browse peer-reviewed publications: protocol papers, systematic reviews, Delphi findings, and implementation science outputs with DOIs, abstracts, and downloads.",
  },
};

export default function PublicationsPage() {
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

      {/* ── Category overview ── */}
      <SectionWrapper background="bg" spacing="lg">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="font-display text-display-md mb-3">
            Publication Categories
          </h2>
          <p className="text-lead text-text-muted">
            Publications span the full research lifecycle — from registered
            protocols through evidence synthesis, empirical findings, and
            translational commentary.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pubCategories.map((cat) => {
            const count = publications.filter(
              (p) => p.type === cat.type
            ).length;
            return (
              <div
                key={cat.type}
                className="rounded-lg border border-border bg-surface p-6"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {cat.type === "protocol" && (
                      <>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </>
                    )}
                    {cat.type === "systematic-review" && (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </>
                    )}
                    {cat.type === "empirical" && (
                      <>
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </>
                    )}
                    {cat.type === "commentary" && (
                      <>
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </>
                    )}
                  </svg>
                </div>
                <h3 className="font-display text-display-sm mb-1">
                  {cat.label}
                  <span className="ml-2 text-caption text-text-muted font-normal">
                    ({count})
                  </span>
                </h3>
                <p className="text-caption text-text-muted leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ── Searchable publication list ── */}
      <SectionWrapper
        id="publication-list"
        background="surface"
        spacing="lg"
      >
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="font-display text-display-md mb-3">
            Browse All Publications
          </h2>
          <p className="text-lead text-text-muted">
            Search by title, author, keyword, or journal; filter by publication
            type. Expand entries to read abstracts and access full-text
            downloads.
          </p>
        </div>

        <PublicationFilter publications={publications} />
      </SectionWrapper>

      {/* ── Open science statement ── */}
      <SectionWrapper background="bg" spacing="md">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <h3 className="font-display text-display-sm mb-3">
            Open Science Commitment
          </h3>
          <p className="text-lead text-text-muted max-w-xl mx-auto">
            This research programme is committed to open science principles. All
            publications are registered with persistent identifiers (DOIs),
            protocols are prospectively registered, and full-text preprints or
            accepted manuscripts are made available where publisher policies
            permit. We encourage researchers to contact the team for data access
            or collaboration inquiries.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}