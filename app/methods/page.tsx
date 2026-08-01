import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Button from "@/components/Button";
import MethodDiagram from "@/components/MethodDiagram";
import {
  heroContent,
  methodsIntro,
  systematicReviewPhases,
  delphiPhases,
  implementationPhases,
  systematicReviewDetail,
  delphiDetail,
  implementationDetail,
  qualityAssurance,
  ethicsStatement,
} from "@/lib/data/methods";

export const metadata: Metadata = {
  title: "Research Methods",
  description:
    "A multi-method research design combining PRISMA-compliant systematic review, modified e-Delphi consensus, and implementation science frameworks to produce rigorous, actionable evidence.",
  openGraph: {
    title: "Research Methods — PhD Research Project",
    description:
      "Systematic review, Delphi consensus, and implementation science: the three-pillar methodological framework underlying this PhD research programme.",
  },
};

export default function MethodsPage() {
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

      {/* ── Methods Introduction ── */}
      <SectionWrapper id="introduction" spacing="lg">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-display-md mb-6">
            {methodsIntro.heading}
          </h2>
          <div className="space-y-4">
            {methodsIntro.paragraphs.map((para, idx) => (
              <p key={idx} className="text-lead text-text-muted">
                {para}
              </p>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Systematic Review Process Diagram ── */}
      <SectionWrapper
        id="systematic-review"
        background="surface"
        spacing="lg"
      >
        <MethodDiagram
          title="Systematic Review & Evidence Mapping"
          subtitle="Following PRISMA 2020 guidelines, the review moves through six structured stages — from protocol registration through to evidence synthesis."
          steps={systematicReviewPhases}
          variant="review"
        />

        {/* Detail cards */}
        <div className="mx-auto mt-16 max-w-3xl">
          <Card highlighted>
            <h3 className="font-display text-display-sm mb-3">
              {systematicReviewDetail.heading}
            </h3>
            <p className="text-body text-text-muted mb-6">
              {systematicReviewDetail.description}
            </p>

            <h4 className="font-display text-sm font-semibold text-text mb-3">
              Key methodological features
            </h4>
            <ul className="space-y-2">
              {systematicReviewDetail.keyPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-text-muted"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 shrink-0"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="4"
                      fill="var(--color-accent-soft)"
                      stroke="var(--color-accent)"
                      strokeWidth="1.2"
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            {systematicReviewDetail.standards && (
              <div className="mt-6 rounded-md bg-accent-soft/50 px-4 py-3">
                <p className="text-sm">
                  <span className="font-semibold text-text">
                    Reporting standards:{" "}
                  </span>
                  <span className="text-text-muted">
                    {systematicReviewDetail.standards}
                  </span>
                </p>
              </div>
            )}
          </Card>
        </div>
      </SectionWrapper>

      {/* ── Delphi Process Diagram ── */}
      <SectionWrapper id="delphi-consensus" spacing="lg">
        <MethodDiagram
          title="Modified e-Delphi Consensus"
          subtitle="A structured, multi-round online process with an international expert panel — moving from open-ended item generation through structured rating to final consensus."
          steps={delphiPhases}
          variant="delphi"
        />

        {/* Detail cards */}
        <div className="mx-auto mt-16 max-w-3xl">
          <Card highlighted>
            <h3 className="font-display text-display-sm mb-3">
              {delphiDetail.heading}
            </h3>
            <p className="text-body text-text-muted mb-6">
              {delphiDetail.description}
            </p>

            <h4 className="font-display text-sm font-semibold text-text mb-3">
              Key methodological features
            </h4>
            <ul className="space-y-2">
              {delphiDetail.keyPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-text-muted"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 shrink-0"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="4"
                      fill="var(--color-accent-soft)"
                      stroke="var(--color-accent)"
                      strokeWidth="1.2"
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            {delphiDetail.standards && (
              <div className="mt-6 rounded-md bg-accent-soft/50 px-4 py-3">
                <p className="text-sm">
                  <span className="font-semibold text-text">
                    Reporting standards:{" "}
                  </span>
                  <span className="text-text-muted">
                    {delphiDetail.standards}
                  </span>
                </p>
              </div>
            )}
          </Card>
        </div>
      </SectionWrapper>

      {/* ── Implementation Process Diagram ── */}
      <SectionWrapper
        id="implementation-science"
        background="surface"
        spacing="lg"
      >
        <MethodDiagram
          title="Implementation Science & Knowledge Translation"
          subtitle="Translating evidence into practice through framework mapping, stakeholder engagement, toolkit development, and open-access dissemination."
          steps={implementationPhases}
          variant="implement"
        />

        {/* Detail cards */}
        <div className="mx-auto mt-16 max-w-3xl">
          <Card highlighted>
            <h3 className="font-display text-display-sm mb-3">
              {implementationDetail.heading}
            </h3>
            <p className="text-body text-text-muted mb-6">
              {implementationDetail.description}
            </p>

            <h4 className="font-display text-sm font-semibold text-text mb-3">
              Key methodological features
            </h4>
            <ul className="space-y-2">
              {implementationDetail.keyPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-text-muted"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 shrink-0"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="4"
                      fill="var(--color-accent-soft)"
                      stroke="var(--color-accent)"
                      strokeWidth="1.2"
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            {implementationDetail.standards && (
              <div className="mt-6 rounded-md bg-accent-soft/50 px-4 py-3">
                <p className="text-sm">
                  <span className="font-semibold text-text">
                    Reporting standards:{" "}
                  </span>
                  <span className="text-text-muted">
                    {implementationDetail.standards}
                  </span>
                </p>
              </div>
            )}
          </Card>
        </div>
      </SectionWrapper>

      {/* ── Quality Assurance ── */}
      <SectionWrapper id="quality-assurance" spacing="lg">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-display-md mb-6">
            {qualityAssurance.heading}
          </h2>
          <p className="text-lead text-text-muted mb-8">
            {qualityAssurance.description}
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {qualityAssurance.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="mt-0.5 shrink-0"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    fill="var(--color-accent-soft)"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7 10.5l2 2 4-4"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm text-text-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Ethics Statement ── */}
      <SectionWrapper
        id="ethics"
        background="accent-soft"
        spacing="lg"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-display-md mb-6">
            {ethicsStatement.heading}
          </h2>
          <div className="space-y-4">
            {ethicsStatement.paragraphs.map((para, idx) => (
              <p key={idx} className="text-lead">
                {para}
              </p>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Bottom CTAs ── */}
      <SectionWrapper spacing="lg">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-display-md mb-4">
            Explore the Detailed Protocol
          </h2>
          <p className="text-lead text-text-muted mb-8">
            The full research protocol — including search strategies, Delphi
            questionnaires, and implementation plans — is available as a
            downloadable document.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/resources" variant="primary">
              Download Protocol
            </Button>
            <Button href="/publications" variant="secondary">
              View Publications
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}