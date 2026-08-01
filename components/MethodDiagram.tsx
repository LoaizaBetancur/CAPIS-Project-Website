/**
 * MethodDiagram — visual step-by-step diagram for systematic review,
 * Delphi consensus, or implementation workflows.
 *
 * Renders a horizontal stepped diagram (desktop) / stacked vertical (mobile)
 * with numbered nodes, connector lines, and inline SVG icons.
 */

interface DiagramStep {
  step: number;
  title: string;
  description: string;
  icon: "search" | "screen" | "extract" | "assess" | "synthesise" | "delphi-round" | "consensus" | "implement";
}

interface MethodDiagramProps {
  title: string;
  subtitle?: string;
  steps: DiagramStep[];
  variant: "review" | "delphi" | "implement";
  className?: string;
}

function iconSvg(icon: DiagramStep["icon"]): string {
  switch (icon) {
    case "search":
      return `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="7" stroke="var(--color-accent)" stroke-width="2"/><path d="M17 17l6 6" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round"/></svg>`;
    case "screen":
      return `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="3" y="4" width="22" height="16" rx="2" stroke="var(--color-accent)" stroke-width="2"/><path d="M3 10h22M10 20l4 3 4-3" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round"/></svg>`;
    case "extract":
      return `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="4" y="3" width="20" height="22" rx="3" stroke="var(--color-accent)" stroke-width="2"/><path d="M9 10h10M9 15h10M9 20h6" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round"/></svg>`;
    case "assess":
      return `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="10" stroke="var(--color-accent)" stroke-width="2"/><path d="M14 8v6l4 2" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round"/></svg>`;
    case "synthesise":
      return `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M4 24L12 14l4 4L24 6" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="4" cy="24" r="2.5" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.5"/><circle cx="24" cy="6" r="2.5" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.5"/></svg>`;
    case "delphi-round":
      return `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="10" stroke="var(--color-accent)" stroke-width="2"/><path d="M10 14a4 4 0 118 0" stroke="var(--color-accent)" stroke-width="1.8" stroke-linecap="round"/><circle cx="14" cy="11" r="1.2" fill="var(--color-accent)"/></svg>`;
    case "consensus":
      return `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="10" cy="14" r="5" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.8"/><circle cx="18" cy="14" r="5" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.8"/><circle cx="14" cy="8" r="5" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.8"/></svg>`;
    case "implement":
      return `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="2" y="3" width="24" height="18" rx="3" stroke="var(--color-accent)" stroke-width="2"/><path d="M9 21l5 4 5-4" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="14" cy="11" r="3" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.5"/></svg>`;
  }
}

export default function MethodDiagram({
  title,
  subtitle,
  steps,
  variant,
  className = "",
}: MethodDiagramProps) {
  const isHorizontal = steps.length <= 6;

  return (
    <div className={`${className}`}>
      {/* Header */}
      <div className="mb-8 text-center">
        <h3 className="font-display text-display-sm mb-2">{title}</h3>
        {subtitle && (
          <p className="text-body text-text-muted max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Horizontal layout (desktop) */}
      <div className="hidden md:block">
        <div className={`relative ${isHorizontal ? "grid grid-cols-6 gap-3" : "grid grid-cols-4 gap-3"}`}>
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              {/* Connector line to next step */}
              {idx < steps.length - 1 && (
                <div
                  className="absolute left-[calc(50%+16px)] top-8 w-[calc(100%-32px)] h-0.5 bg-border"
                  aria-hidden="true"
                />
              )}

              {/* Step circle */}
              <div
                className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-surface shadow-raised mb-3"
                aria-hidden="true"
              >
                <div dangerouslySetInnerHTML={{ __html: iconSvg(step.icon) }} />
              </div>

              {/* Step number badge */}
              <span className="mb-1 inline-block rounded-full bg-accent-soft px-2 text-xs font-bold text-accent">
                Step {step.step}
              </span>

              {/* Title */}
              <p className="font-display text-sm font-semibold text-text mb-1 leading-tight">
                {step.title}
              </p>

              {/* Description */}
              <p className="text-caption leading-snug max-w-[140px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical layout (mobile) */}
      <div className="md:hidden">
        <ol className="relative m-0 list-none p-0 space-y-6">
          {steps.map((step, idx) => (
            <li key={idx} className="relative pl-14">
              {/* Vertical connector */}
              {idx < steps.length - 1 && (
                <div
                  className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-border"
                  aria-hidden="true"
                />
              )}

              {/* Node */}
              <div
                className="absolute left-1 top-0 flex h-[38px] w-[38px] items-center justify-center rounded-full border-2 border-accent bg-surface shadow-raised z-10"
                aria-hidden="true"
              >
                <div dangerouslySetInnerHTML={{ __html: iconSvg(step.icon) }} />
              </div>

              {/* Content */}
              <div>
                <span className="inline-block rounded-full bg-accent-soft px-2 py-0.5 text-xs font-bold text-accent mb-1">
                  Step {step.step}
                </span>
                <p className="font-display text-sm font-semibold text-text">
                  {step.title}
                </p>
                <p className="mt-1 text-caption">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}