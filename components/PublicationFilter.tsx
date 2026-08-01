"use client";

import { useState, useMemo } from "react";
import type { Publication, PubType } from "@/lib/data/publications";

const TYPE_LABELS: Record<PubType, string> = {
  protocol: "Protocol",
  "systematic-review": "Systematic Review",
  empirical: "Empirical",
  commentary: "Commentary",
};

const TYPE_ORDER: PubType[] = [
  "protocol",
  "systematic-review",
  "empirical",
  "commentary",
];

interface PublicationFilterProps {
  publications: Publication[];
}

export default function PublicationFilter({
  publications,
}: PublicationFilterProps) {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState<PubType | "all">("all");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filtered = useMemo(() => {
    let results = publications;
    if (activeType !== "all") {
      results = results.filter((p) => p.type === activeType);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.authors.toLowerCase().includes(q) ||
          p.keywords.some((k) => k.toLowerCase().includes(q)) ||
          p.abstract.toLowerCase().includes(q) ||
          p.journal.toLowerCase().includes(q)
      );
    }
    return results;
  }, [publications, activeType, search]);

  const counts = useMemo(() => {
    const c: Record<PubType | "all", number> = { all: publications.length, protocol: 0, "systematic-review": 0, empirical: 0, commentary: 0 };
    for (const t of TYPE_ORDER) {
      c[t] = publications.filter((p) => p.type === t).length;
    }
    return c;
  }, [publications]);

  return (
    <div>
      {/* ── Search and filter bar ── */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-lg">
          <label htmlFor="pub-search" className="sr-only">
            Search publications
          </label>
          <input
            id="pub-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, author, keyword, or journal…"
            className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 pl-10 text-base font-body text-text placeholder:text-text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
          {/* Search icon */}
          <svg
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 text-text-muted hover:text-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Clear search"
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* Type filter tabs */}
        <div
          className="flex flex-wrap gap-1.5 rounded-lg border border-border bg-surface p-1"
          role="tablist"
          aria-label="Filter by publication type"
        >
          <button
            role="tab"
            aria-selected={activeType === "all"}
            onClick={() => setActiveType("all")}
            className={`rounded-md px-3 py-1.5 text-sm font-medium font-body transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              activeType === "all"
                ? "bg-accent text-white"
                : "text-text-muted hover:text-text hover:bg-accent-soft/50"
            }`}
          >
            All ({counts.all})
          </button>
          {TYPE_ORDER.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={activeType === t}
              onClick={() => setActiveType(t)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium font-body transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                activeType === t
                  ? "bg-accent text-white"
                  : "text-text-muted hover:text-text hover:bg-accent-soft/50"
              }`}
            >
              {TYPE_LABELS[t]} ({counts[t]})
            </button>
          ))}
        </div>
      </div>

      {/* ── Results ── */}
      {filtered.length === 0 ? (
        <div className="rounded-lg border border-border bg-surface px-8 py-16 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent-soft">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <h3 className="font-display text-display-sm mb-2">
            No matching publications
          </h3>
          <p className="text-text-muted max-w-md mx-auto">
            {search
              ? `No publications match "${search}". Try adjusting your search terms or clearing the filter.`
              : "No publications found for this category. Try selecting a different type or view all publications."}
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {filtered.map((pub) => {
            const isExpanded = expandedIds.has(pub.id);
            return (
              <article
                key={pub.id}
                className="rounded-lg border border-border bg-surface shadow-raised transition-all duration-300 hover:-translate-y-0.5 hover:shadow-overlay"
              >
                <div className="p-6">
                  {/* Type badge + year */}
                  <div className="mb-3 flex items-center gap-2 flex-wrap">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        pub.type === "protocol"
                          ? "bg-accent-soft text-accent"
                          : pub.type === "systematic-review"
                          ? "bg-success/10 text-success"
                          : pub.type === "empirical"
                          ? "bg-accent-soft/70 text-accent"
                          : "bg-text-muted/10 text-text-muted"
                      }`}
                    >
                      {TYPE_LABELS[pub.type]}
                    </span>
                    {pub.forthcoming && (
                      <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                        Forthcoming
                      </span>
                    )}
                    <span className="text-caption text-text-muted">
                      {pub.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-display-sm mb-2 leading-snug">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-sm text-text-muted mb-2 font-body">
                    {pub.authors}
                  </p>

                  {/* Journal */}
                  <p className="text-sm italic text-text-muted/80 mb-3">
                    {pub.journal}
                    {pub.doi && (
                      <>
                        {" "}
                        ·{" "}
                        <a
                          href={pub.externalUrl || `https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="not-italic text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
                        >
                          DOI: {pub.doi}
                        </a>
                      </>
                    )}
                  </p>

                  {/* Abstract toggle */}
                  <button
                    onClick={() => toggleExpand(pub.id)}
                    className="mb-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    aria-expanded={isExpanded}
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
                      className={`transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    {isExpanded ? "Hide abstract" : "Read abstract"}
                  </button>

                  {/* Abstract body */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-text-muted leading-relaxed mb-3 border-l-2 border-accent-soft pl-4">
                      {pub.abstract}
                    </p>

                    {/* Keywords */}
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {pub.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="inline-block rounded border border-border bg-bg px-2 py-0.5 text-xs text-text-muted font-mono"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    {/* Action links */}
                    <div className="flex gap-3 flex-wrap">
                      {pub.downloadUrl && (
                        <a
                          href={pub.downloadUrl}
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
                          Download PDF
                        </a>
                      )}
                      {pub.externalUrl && (
                        <a
                          href={pub.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-accent hover:bg-accent-soft transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
                          View at source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}