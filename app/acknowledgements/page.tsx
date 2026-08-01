import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import {
  heroContent,
  fundingSources,
  acknowledgementGroups,
  FundingSource,
} from "@/lib/data/acknowledgements";

export const metadata: Metadata = {
  title: "Acknowledgements & Funding",
  description:
    "This PhD research programme is supported by an Australian Government RTP Scholarship, the University of Adelaide, and contributions from supervisors, experts, consumers, and colleagues.",
  openGraph: {
    title: "Acknowledgements & Funding — PhD Research Project",
    description:
      "With gratitude to those who make this research possible: funders, supervisors, expert advisors, consumer representatives, and institutional partners.",
  },
};

const FUNDING_TYPE_LABELS: Record<FundingSource["type"], string> = {
  scholarship: "Scholarship",
  grant: "Research Grant",
  institutional: "Institutional Support",
  "in-kind": "In-Kind Support",
};

const FUNDING_TYPE_COLOURS: Record<FundingSource["type"], string> = {
  scholarship: "bg-accent-soft text-accent border-accent/20",
  grant: "bg-emerald-50 text-emerald-700 border-emerald-200",
  institutional: "bg-slate-50 text-slate-700 border-slate-200",
  "in-kind": "bg-amber-50 text-amber-700 border-amber-200",
};

export default function AcknowledgementsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection
        eyebrow={heroContent.eyebrow}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
      />

      {/* ── Funding Sources ── */}
      <SectionWrapper background="bg" spacing="lg">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-2xl" aria-hidden="true">
            🏆
          </span>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
            Funding Sources
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fundingSources.map((fund) => (
            <article
              key={fund.id}
              className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-raised sm:p-7"
            >
              {/* Logo placeholder */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent-soft text-xs font-bold tracking-tight text-accent">
                {fund.logoText}
              </div>

              {/* Type badge */}
              <span
                className={`mb-2 self-start rounded-md border px-2 py-0.5 text-[11px] font-semibold ${FUNDING_TYPE_COLOURS[fund.type]}`}
              >
                {FUNDING_TYPE_LABELS[fund.type]}
              </span>

              {/* Name */}
              <h3 className="font-display text-lg font-semibold leading-snug text-text-primary group-hover:text-accent transition-colors">
                {fund.name}
              </h3>

              {/* Description */}
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {fund.description}
              </p>

              {/* Link */}
              {fund.url && (
                <div className="mt-4 border-t border-border pt-3">
                  <Button href={fund.url} variant="ghost" size="sm">
                    Visit website →
                  </Button>
                </div>
              )}
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Detailed Acknowledgements ── */}
      <SectionWrapper background="surface" spacing="lg">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-2xl" aria-hidden="true">
            🙏
          </span>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
            Acknowledgements
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {acknowledgementGroups.map((group) => (
            <section
              key={group.id}
              className="rounded-xl border border-border bg-bg/50 p-6 sm:p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="text-xl" aria-hidden="true">
                  {group.icon}
                </span>
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  {group.heading}
                </h3>
              </div>

              <div className="space-y-4">
                {group.entries.map((entry, i) => (
                  <div key={i} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                    <p className="font-medium text-text-primary text-sm">
                      {entry.name}
                    </p>
                    {(entry.role || entry.affiliation) && (
                      <p className="mt-0.5 text-xs text-muted">
                        {[entry.role, entry.affiliation].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    {entry.contribution && (
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {entry.contribution}
                      </p>
                    )}
                    {entry.url && (
                      <div className="mt-2">
                        <Button href={entry.url} variant="ghost" size="sm">
                          Learn more →
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Citation cta ── */}
      <SectionWrapper background="accent-soft" spacing="md">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-display text-xl font-semibold text-text-primary">
            How to Cite This Research
          </h3>
          <p className="mt-2 leading-relaxed text-muted text-sm">
            Please acknowledge the funders in any publications, presentations, or
            derivative works arising from this research programme. Suggested
            acknowledgement line:
          </p>
          <blockquote className="mt-3 mx-auto max-w-lg rounded-lg border border-border bg-surface px-5 py-3 font-mono text-xs leading-relaxed text-text-primary">
            This research is supported by an Australian Government Research Training
            Program (RTP) Scholarship and the University of Adelaide Faculty of
            Health and Medical Sciences. The funders had no role in study design,
            data collection, analysis, interpretation, or the decision to publish.
          </blockquote>
          <div className="mt-4 flex justify-center gap-3">
            <Button href="/publications" variant="primary" size="sm">
              View publications
            </Button>
            <Button href="/media" variant="secondary" size="sm">
              Download citation guide
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}