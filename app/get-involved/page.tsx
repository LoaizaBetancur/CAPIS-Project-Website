import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import {
  heroContent,
  pathways,
  AUDIENCE_META,
  InvolvementPathway,
} from "@/lib/data/get-involved";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Engage with this PhD research programme — join the Delphi Expert Advisory Panel, contribute to systematic reviews, participate in implementation mapping, join the Consumer Advisory Group, or access evidence for policy decisions.",
  openGraph: {
    title: "Get Involved — PhD Research Project",
    description:
      "Multiple pathways to contribute: researchers, clinicians, consumers, and policymakers are all invited to engage with this research programme.",
  },
};

const AUDIENCE_ORDER: InvolvementPathway["audience"][] = [
  "researcher",
  "clinician",
  "consumer",
  "policymaker",
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection
        eyebrow={heroContent.eyebrow}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
      />

      {/* ── Audience sections ── */}
      {AUDIENCE_ORDER.map((audience) => {
        const meta = AUDIENCE_META[audience];
        const audiencePathways = pathways.filter((p) => p.audience === audience);

        return (
          <SectionWrapper key={audience} background="base" spacing="lg">
            {/* Section header */}
            <div className="mb-10 flex items-center gap-4">
              <span className="text-3xl" aria-hidden="true">
                {meta.icon}
              </span>
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                  For {meta.label}
                </h2>
                <p className="mt-1 text-base text-muted max-w-2xl">
                  {meta.heading}
                </p>
              </div>
              <span className="ml-auto rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent tabular-nums">
                {audiencePathways.length} pathway{audiencePathways.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Pathway cards */}
            <div className="grid gap-6 lg:grid-cols-2">
              {audiencePathways.map((pathway) => (
                <article
                  key={pathway.id}
                  className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-raised sm:p-8"
                >
                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold leading-snug text-text-primary group-hover:text-accent transition-colors">
                    {pathway.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {pathway.description}
                  </p>

                  {/* Detail bullets */}
                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {pathway.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-text-primary">
                        <svg
                          className="mt-[3px] h-4 w-4 shrink-0 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
                    <Button href={pathway.cta.href} variant="primary" size="sm">
                      {pathway.cta.label}
                    </Button>
                    {pathway.ctaSecondary && (
                      <Button href={pathway.ctaSecondary.href} variant="ghost" size="sm">
                        {pathway.ctaSecondary.label}
                      </Button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </SectionWrapper>
        );
      })}

      {/* ── General collaboration ── */}
      <SectionWrapper background="accentSoft" spacing="md">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-display text-xl font-semibold text-text-primary">
            Not sure which pathway fits you?
          </h3>
          <p className="mt-2 leading-relaxed text-muted text-sm">
            We welcome enquiries from anyone interested in the research, regardless
            of background or expertise. Reach out to the research team and we'll
            help find the right way for you to contribute or stay informed.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Button href="/contact" variant="primary" size="sm">
              Get in touch
            </Button>
            <Button href="/about" variant="secondary" size="sm">
              Learn more about the project
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Ethical note ── */}
      <SectionWrapper background="base" spacing="sm">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs text-muted leading-relaxed">
            All involvement pathways operate under the approved research protocol
            (HREC: 2025/078). Participation is voluntary; you may withdraw at any
            time. Personal information is handled in accordance with the
            University's Privacy Policy and the Australian Privacy Principles.
            For questions about your rights as a participant, contact the
            University's Human Research Ethics Committee.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}