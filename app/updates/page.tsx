import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { heroContent, updates, CATEGORY_META, StudyUpdate } from "@/lib/data/updates";

export const metadata: Metadata = {
  title: "Study Updates",
  description:
    "Track the latest progress across this multi-phase PhD research programme — systematic review milestones, Delphi consensus rounds, conference presentations, recruitment updates, and community engagement.",
  openGraph: {
    title: "Study Updates — PhD Research Project",
    description:
      "Follow the latest developments from a multi-phase research programme advancing evidence-based clinical practice through systematic review, Delphi consensus, and implementation science.",
  },
};

/* ── Helpers ── */

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function groupByYear(items: StudyUpdate[]): Map<number, StudyUpdate[]> {
  const map = new Map<number, StudyUpdate[]>();
  for (const item of items) {
    const year = parseInt(item.date.slice(0, 4), 10);
    const bucket = map.get(year);
    if (bucket) bucket.push(item);
    else map.set(year, [item]);
  }
  return map;
}

/* ── Page ── */

export default function UpdatesPage() {
  const grouped = groupByYear(updates);
  const years = Array.from(grouped.keys()).sort((a, b) => b - a);

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection
        eyebrow={heroContent.eyebrow}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
      />

      {/* ── Year-by-Year Updates ── */}
      {years.map((year) => {
        const items = grouped.get(year)!;
        return (
          <SectionWrapper key={year} background="bg" spacing="lg">
            {/* Year heading */}
            <div className="mb-10 flex items-center gap-5">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                {year}
              </h2>
              <span className="h-px flex-1 bg-border" />
              <span className="text-sm font-medium text-muted tabular-nums">
                {items.length} update{items.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Timeline list */}
            <div className="relative ml-4 border-l-2 border-border sm:ml-6">
              {items.map((update, idx) => {
                const meta = CATEGORY_META[update.category];
                return (
                  <article
                    key={update.id}
                    className="group relative pb-12 pl-8 last:pb-0 sm:pl-10"
                  >
                    {/* Timeline dot */}
                    <span
                      className="absolute left-0 top-1.5 -translate-x-1/2 rounded-full border-2 border-border bg-surface p-[5px] ring-4 ring-background transition-colors group-hover:border-accent"
                      aria-hidden="true"
                    />

                    {/* Date */}
                    <time
                      dateTime={update.date}
                      className="mb-1 block font-mono text-xs font-medium uppercase tracking-wider text-muted"
                    >
                      {formatDate(update.date)}
                    </time>

                    {/* Category badge */}
                    <span
                      className={`mb-3 inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${meta.colour}`}
                    >
                      {meta.label}
                    </span>

                    {/* Title */}
                    <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {update.title}
                    </h3>

                    {/* Body */}
                    <p className="mt-2 max-w-prose leading-relaxed text-muted">
                      {update.body}
                    </p>

                    {/* Links */}
                    {update.links && update.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {update.links.map((link) => (
                          <Button
                            key={link.url}
                            href={link.url}
                            variant="ghost"
                            size="sm"
                          >
                            {link.label} →
                          </Button>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </SectionWrapper>
        );
      })}

      {/* ── Subscribe CTA ── */}
      <SectionWrapper background="accent-soft" spacing="lg">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
            Stay Informed
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            New updates are published as the research programme progresses.
            Subscribe to receive notifications when milestones are reached,
            publications are accepted, or recruitment opportunities open.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button href="/contact" variant="primary">
              Join mailing list
            </Button>
            <Button href="/get-involved" variant="secondary">
              Get involved
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* ── RSS / Feeds ── */}
      <SectionWrapper background="bg" spacing="md">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm text-muted">
            Updates are also available via{" "}
            <a
              href="/rss.xml"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
            >
              RSS feed
            </a>
            {" "}and posted on the project's{" "}
            <a
              href="https://twitter.com/phdresearch"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
            >
              X (Twitter) account
            </a>
            .
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}