/**
 * Timeline component — vertical timeline with connector line and nodes.
 * Used for study phases, Delphi rounds, and chronological content.
 */

interface TimelineItem {
  phase?: number;
  title: string;
  timeframe?: string;
  description: string;
  methods?: string[];
  iconSvg?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical connector line */}
      <div
        className="absolute left-6 top-0 h-full w-0.5 bg-border"
        aria-hidden="true"
      />

      <ol className="relative m-0 list-none p-0 space-y-10">
        {items.map((item, idx) => (
          <li key={idx} className="relative pl-16">
            {/* Node marker */}
            <div
              className="absolute left-3 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-surface text-xs font-bold text-accent"
              aria-hidden="true"
            >
              {item.phase ?? idx + 1}
            </div>

            {/* Content */}
            <div className="rounded-lg border border-border bg-surface p-5 shadow-raised">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  {item.timeframe && (
                    <span className="mb-1 inline-block rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                      {item.timeframe}
                    </span>
                  )}
                  <h3 className="mt-1 font-display text-display-sm text-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-body text-text-muted">
                    {item.description}
                  </p>
                </div>

                {item.iconSvg && (
                  <div
                    className="shrink-0"
                    dangerouslySetInnerHTML={{ __html: item.iconSvg }}
                  />
                )}
              </div>

              {/* Methods list */}
              {item.methods && item.methods.length > 0 && (
                <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                  {item.methods.map((method, mIdx) => (
                    <li
                      key={mIdx}
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
                        <path
                          d="M6 8.5l1.5 1.5 3-3"
                          stroke="var(--color-accent)"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {method}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}