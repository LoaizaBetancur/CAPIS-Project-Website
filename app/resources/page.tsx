import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { heroContent, audiences, resources } from "@/lib/data/resources";

export const metadata: Metadata = {
  title: "Resources & Downloads",
  description:
    "Practical resources for researchers, clinicians, consumers, and policymakers — study protocols, plain-language summaries, implementation guides, policy briefs, and methodological toolkits.",
  openGraph: {
    title: "Resources — PhD Research Project",
    description:
      "Download study protocols, clinical summaries, consumer resources, policy briefs, and methodological toolkits from this multi-phase research programme.",
  },
};

const FORMAT_STYLES: Record<string, string> = {
  PDF: "bg-red-50 text-red-700 border-red-200",
  "Web Page": "bg-blue-50 text-blue-700 border-blue-200",
  Dataset: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Infographic: "bg-purple-50 text-purple-700 border-purple-200",
  Video: "bg-amber-50 text-amber-700 border-amber-200",
  "Slide Deck": "bg-orange-50 text-orange-700 border-orange-200",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ResourcesPage() {
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

      {/* ── Audience sections ── */}
      {audiences.map((audience, audIdx) => {
        const audienceResources = resources.filter(
          (r) => r.audience === audience.slug
        );
        return (
          <SectionWrapper
            key={audience.slug}
            id={audience.slug}
            background={audIdx % 2 === 0 ? "bg" : "surface"}
            spacing="lg"
          >
            <div className="mx-auto max-w-2xl text-center mb-10">
              <div
                className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent-soft text-accent"
                dangerouslySetInnerHTML={{ __html: audience.icon }}
              />
              <h2 className="font-display text-display-md mb-3">
                {audience.label}
              </h2>
              <p className="text-lead text-text-muted">
                {audience.description}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
              {audienceResources.map((resource) => (
                <article
                  key={resource.id}
                  className="flex flex-col rounded-lg border border-border bg-surface p-5 shadow-raised transition-all duration-300 hover:-translate-y-0.5 hover:shadow-overlay"
                >
                  {/* Format badge + date */}
                  <div className="mb-3 flex items-center gap-2 flex-wrap">
                    <span
                      className={`inline-block rounded border px-2 py-0.5 text-xs font-semibold ${
                        FORMAT_STYLES[resource.format] ||
                        "bg-gray-50 text-gray-600 border-gray-200"
                      }`}
                    >
                      {resource.format}
                    </span>
                    {resource.fileSize && (
                      <span className="text-caption text-text-muted">
                        {resource.fileSize}
                      </span>
                    )}
                    {resource.updatedAt && (
                      <span className="text-caption text-text-muted ml-auto">
                        Updated {formatDate(resource.updatedAt)}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-display-sm mb-2 leading-snug">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
                    {resource.description}
                  </p>

                  {/* Action */}
                  <div className="flex gap-3 flex-wrap">
                    {resource.downloadUrl && (
                      <a
                        href={resource.downloadUrl}
                        className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download {resource.format === "PDF" ? "PDF" : ""}
                      </a>
                    )}
                    {resource.externalUrl && (
                      <a
                        href={resource.externalUrl}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-accent hover:bg-accent-soft transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        {...(resource.externalUrl.startsWith("http")
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        {resource.format === "Web Page"
                          ? "Open resource"
                          : "View online"}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Empty state for audiences with no resources yet */}
            {audienceResources.length === 0 && (
              <div className="rounded-lg border border-border bg-surface px-8 py-12 text-center">
                <h3 className="font-display text-display-sm mb-2">
                  Resources coming soon
                </h3>
                <p className="text-text-muted max-w-md mx-auto">
                  Resources for this audience are currently in development.
                  Check back or contact the team for early access.
                </p>
              </div>
            )}
          </SectionWrapper>
        );
      })}

      {/* ── All downloads quick-access ── */}
      <SectionWrapper background="bg" spacing="md">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="font-display text-display-md mb-3">
            Quick Downloads
          </h2>
          <p className="text-lead text-text-muted">
            The most frequently requested documents in one place.
          </p>
        </div>

        <div className="mx-auto max-w-3xl grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Study Protocol", href: "/downloads/protocol.pdf", format: "PDF" },
            { label: "Plain-Language Summary", href: "/downloads/plain-language-summary.pdf", format: "PDF" },
            { label: "Policy Brief", href: "/downloads/policy-brief.pdf", format: "PDF" },
            { label: "Implementation Guide", href: "/downloads/implementation-guide.pdf", format: "PDF" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center rounded-lg border border-border bg-surface p-5 text-center shadow-raised hover:-translate-y-0.5 hover:shadow-overlay transition-all duration-300 no-underline"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft">
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <span className="font-medium text-sm text-text">{item.label}</span>
              <span className="text-caption text-text-muted mt-0.5">{item.format}</span>
            </a>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Citation guidance ── */}
      <SectionWrapper background="surface" spacing="md">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="font-display text-display-sm mb-3">
            Citing These Resources
          </h3>
          <p className="text-lead text-text-muted mb-4">
            When referencing project resources in your own work, please use the
            following format:
          </p>
          <div className="mx-auto max-w-xl rounded-lg border border-border bg-bg p-4 text-left font-mono text-sm text-text-muted">
            <p>
              PhD Candidate et al. (2025). <em>[Resource Title]</em>. PhD
              Research Project, University of Adelaide. Available at:
              [URL]. Accessed [date].
            </p>
          </div>
          <p className="mt-4 text-caption text-text-muted">
            For specific citation formats (APA, Vancouver, Harvard), refer to
            the individual resource metadata or contact the research team.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}