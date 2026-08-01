import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import {
  heroContent,
  sortedMedia,
  CATEGORY_META,
  MediaItem,
} from "@/lib/data/media";

export const metadata: Metadata = {
  title: "Media & Downloads",
  description:
    "Download conference presentations, webinar recordings, data visualisations, plain-language infographics, press coverage, and research datasets from this PhD research programme.",
  openGraph: {
    title: "Media & Downloads — PhD Research Project",
    description:
      "Access presentation slides, scientific infographics, plain-language summaries, reproducible search strategies, and the full research protocol document.",
  },
};

/* ── Helpers ── */

const FILE_TYPE_COLOURS: Record<string, string> = {
  PDF:       "bg-red-50 text-red-700 border-red-200",
  PPTX:      "bg-orange-50 text-orange-700 border-orange-200",
  MP4:       "bg-purple-50 text-purple-700 border-purple-200",
  CSV:       "bg-emerald-50 text-emerald-700 border-emerald-200",
  "ZIP (TXT + RIS)": "bg-slate-50 text-slate-700 border-slate-200",
  "PDF (A1)": "bg-red-50 text-red-700 border-red-200",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const CATEGORY_ORDER: MediaItem["category"][] = [
  "presentation",
  "infographic",
  "recording",
  "dataset",
  "press",
];

export default function MediaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection
        eyebrow={heroContent.eyebrow}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
      />

      {/* ── Grouped by category ── */}
      {CATEGORY_ORDER.map((cat) => {
        const items = sortedMedia.filter((m) => m.category === cat);
        if (items.length === 0) return null;
        const meta = CATEGORY_META[cat];

        return (
          <SectionWrapper key={cat} background="base" spacing="lg">
            {/* Category heading */}
            <div className="mb-8 flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">
                {meta.icon}
              </span>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                {meta.label}
                {meta.label === "Infographic" ? "s" : "s"}
              </h2>
              <span className="rounded-full bg-muted/10 px-2.5 py-0.5 text-xs font-semibold text-muted tabular-nums">
                {items.length}
              </span>
            </div>

            {/* Items grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="group flex flex-col rounded-xl border border-border bg-surface p-5 transition-shadow hover:shadow-raised sm:p-6"
                >
                  {/* Header */}
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
                      {formatDate(item.date)}
                    </span>
                    {item.fileType && (
                      <span
                        className={`shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-semibold ${FILE_TYPE_COLOURS[item.fileType] ?? "bg-slate-50 text-slate-700 border-slate-200"}`}
                      >
                        {item.fileType}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-semibold leading-snug text-text-primary group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  {/* Venue / Authors */}
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-muted">
                    {item.venue && <span>{item.venue}</span>}
                    {item.authors && <span>{item.authors}</span>}
                  </div>

                  {/* Description */}
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>

                  {/* Meta footer */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
                    {item.fileSize && (
                      <span className="font-mono text-xs text-muted">
                        {item.fileSize}
                      </span>
                    )}
                    <div className="flex gap-2">
                      {item.downloadUrl && (
                        <Button href={item.downloadUrl} variant="primary" size="sm">
                          Download
                        </Button>
                      )}
                      {item.externalUrl && !item.downloadUrl && (
                        <Button href={item.externalUrl} variant="secondary" size="sm">
                          View external →
                        </Button>
                      )}
                      {item.externalUrl && item.downloadUrl && (
                        <Button href={item.externalUrl} variant="ghost" size="sm">
                          View source
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </SectionWrapper>
        );
      })}

      {/* ── Usage & Citation note ── */}
      <SectionWrapper background="accentSoft" spacing="md">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-display text-xl font-semibold text-text-primary">
            Citation & Usage
          </h3>
          <p className="mt-2 leading-relaxed text-muted text-sm">
            All materials on this page are available for non-commercial use with
            attribution. Please cite as: Chen, J., Mitchell, S. (2025).{" "}
            <em>PhD Research Project</em>. University of Adelaide. When
            referencing the study protocol, include the HREC reference number
            (2025/078).
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Button href="/protocol" variant="secondary" size="sm">
              Read full protocol
            </Button>
            <Button href="/contact" variant="ghost" size="sm">
              Request permission
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Request materials ── */}
      <SectionWrapper background="base" spacing="sm">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm text-muted">
            Can't find what you're looking for?{" "}
            <a
              href="/contact"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
            >
              Contact the research team
            </a>
            {" "}to request additional materials or accessible formats.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
