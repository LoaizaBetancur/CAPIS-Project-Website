import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Button from "@/components/Button";
import {
  heroContent,
  protocolSummary,
  protocolSections,
  downloadResources,
  registrationInfo,
} from "@/lib/data/protocol";

export const metadata: Metadata = {
  title: "Research Protocol",
  description:
    "The complete, peer-reviewed research protocol prospectively registered with PROSPERO and published — systematic review methods, Delphi consensus design, and implementation framework.",
  openGraph: {
    title: "Research Protocol — PhD Research Project",
    description:
      "Download the full protocol document or read a structured summary of the multi-phase research design: systematic review, Delphi consensus, and implementation science.",
  },
};

export default function ProtocolPage() {
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

      {/* ── Protocol Summary Table ── */}
      <SectionWrapper id="summary" background="surface" spacing="lg">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-display-md mb-8">
            {protocolSummary.heading}
          </h2>

          <dl className="divide-y divide-border rounded-lg border border-border bg-surface">
            {protocolSummary.items.map((item) => (
              <div
                key={item.label}
                className="grid gap-2 px-5 py-4 sm:grid-cols-[180px_1fr] sm:gap-6 sm:px-6"
              >
                <dt className="text-sm font-semibold text-text">
                  {item.label}
                </dt>
                <dd className="text-sm text-text-muted">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionWrapper>

      {/* ── Protocol Sections — accordion-style narrative ── */}
      <SectionWrapper id="sections" spacing="lg">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-display-md mb-8">
            Protocol Structure
          </h2>

          <div className="space-y-4">
            {protocolSections.map((section, idx) => (
              <details
                key={idx}
                className="group rounded-lg border border-border bg-surface transition-shadow hover:shadow-raised"
              >
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-display text-lg font-semibold text-text select-none">
                  <span>{section.heading}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                  >
                    <path
                      d="M5 7l5 5 5-5"
                      stroke="var(--color-accent)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>

                <div className="px-5 pb-5 pt-1">
                  <p className="text-body text-text-muted leading-relaxed">
                    {section.content}
                  </p>

                  {section.subsections && section.subsections.length > 0 && (
                    <div className="mt-4 space-y-3">
                      {section.subsections.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="rounded-md bg-accent-soft/30 px-4 py-3"
                        >
                          <h4 className="font-display text-sm font-semibold text-text mb-1">
                            {sub.heading}
                          </h4>
                          <p className="text-caption">{sub.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Downloads ── */}
      <SectionWrapper
        id="downloads"
        background="surface"
        spacing="lg"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-display-md mb-4">
            Download the Protocol
          </h2>
          <p className="text-lead text-text-muted mb-10">
            All protocol documents are freely available for download. The full
            protocol includes complete search strategies, Delphi questionnaires,
            and methodological appendices.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {downloadResources.map((resource) => (
              <Card key={resource.title} highlighted>
                <div className="flex flex-col h-full">
                  {/* Format badge */}
                  <span className="mb-3 inline-block self-start rounded-md bg-accent px-2.5 py-0.5 text-xs font-semibold text-white">
                    {resource.format}
                  </span>

                  <h3 className="font-display text-display-sm mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-caption mb-4 flex-1">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                    <span className="text-mono">{resource.size}</span>
                    <Button
                      href={resource.href}
                      variant="ghost"
                      size="sm"
                      iconTrailing={
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M8 2v8M4 7l4 4 4-4M2 13h12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Registration & Transparency ── */}
      <SectionWrapper id="registration" spacing="lg">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-display-md mb-6">
            {registrationInfo.heading}
          </h2>
          <div className="space-y-4">
            {registrationInfo.paragraphs.map((para, idx) => (
              <p key={idx} className="text-lead text-text-muted">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href="https://www.crd.york.ac.uk/prospero/"
              external
              variant="secondary"
              size="sm"
            >
              Visit PROSPERO Registry
            </Button>
            <Button
              href="/resources"
              variant="ghost"
              size="sm"
            >
              View All Resources
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Bottom CTA ── */}
      <SectionWrapper
        background="accent-soft"
        spacing="lg"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-display-md mb-4">
            Have Questions About the Protocol?
          </h2>
          <p className="text-lead mb-8">
            If you are considering joining the Delphi panel, collaborating on
            the systematic review, or would like more detail about any
            methodological aspect, we welcome your enquiry.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
            <Button href="/faq" variant="secondary">
              Frequently Asked Questions
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}