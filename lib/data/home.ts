/**
 * Homepage content — source-of-truth data.
 * All scientific claims derived from the research protocol.
 */

export interface OverviewCard {
  title: string;
  description: string;
  icon: "review" | "delphi" | "group interview" | "consensus";
}

export interface HighlightStat {
  value: string;
  label: string;
}

export interface LatestPub {
  title: string;
  journal: string;
  year: number;
  doi: string;
  status: "published" | "in-press" | "preprint";
}

export const heroContent = {
  eyebrow: "Welcome to the CAPIS research project!",
  title: " The CAPIS project: Core Athletic Performance-based Intervention Set for Athletes",
  subtitle:
    "An international multi-phase research project to develop a outcome domain list that shoudl be measured for all trials for athletic performance-based training interventions in athletes.",
  primaryCta: { label: "About the Project", href: "/about" },
  secondaryCta: { label: "View Protocol", href: "/resources" },
} as const;

export const overviewCards: OverviewCard[] = [
  {
    title: "Scoping Review",
    description:
      "A review of scientific literature to identify and see what outcome domains are currently being used in athletic performance-based training interventions.",
    icon: "review",
  },
  {
    title: "Focus groups",
    description:
      "Dicussions with football players classifiet as Tier 3, 4 or 5 and their coaches, strength and conditioning coaches, carers, director of perfomance and sports scientists to identify what outcome domains are important to them.",
    icon: "group interview",
  },
  {
    title: "e-Delphi survey",
    description:
      "A two e-Delphi surveys to tell us what you think the most important wanted and unwanted outcome domains are for plyometric training interventions in football players.",
    icon: "delphi",
  },
  {
    title: "Outcome consensus",
    description:
      "After completion of the e-Delphi phases, an online half-day consensus meeting to reach an agreement on the final core outcome set domains (COS) for plyometric training interventions in football players.",
    icon: "consensus",
  },
] as const;

export const highlightStats: HighlightStat[] = [
  { value: "5", label: "COS development phases" },
  { value: "4", label: "Interest-holders groups" },
  { value: "2", label: "e-Delphi surveys" },
  { value: "1", label: "Core Outcome Set" },
] as const;

export const latestPublications: LatestPub[] = [
  {
    title:
      "A critical appraisal of systematic reviews assessing chronic velocity-based resistance training",
    journal: "PLOS ONE",
    year: 2026,
    doi: "10.1371/journal.pone.0342992",
    status: "published",
  },
  {
    title:
      "Physical activity for the management of obesity in children up to the age of 9 years",
    journal: "Cochrane Database of Systematic Reviews",
    year: 2026,
    doi: "10.1002/14651858.CD015988",
    status: "published",
  },
];

/**
 * Icon lookup returns an SVG path description string.
 * These are simple representative shapes — replace with project-specific
 * custom illustrations as the PhD develops.
 */
export function getIconSvg(icon: OverviewCard["icon"]): string {
  switch (icon) {
    case "review":
      return `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="2" y="4" width="28" height="24" rx="3" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.5"/><path d="M8 12h12M8 17h16M8 22h16" stroke="var(--color-accent)" stroke-width="1.8" stroke-linecap="round"/></svg>`;
    case "delphi":
      return `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="11" cy="16" r="5" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.5"/><circle cx="21" cy="16" r="5" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.5"/><circle cx="16" cy="9" r="5" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.5"/><circle cx="16" cy="23" r="5" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.5"/></svg>`;
    case "group interview":
      return `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M4 27L12 17L16 20L28 7" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="28" cy="7" r="3" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.5"/><circle cx="4" cy="27" r="3" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.5"/></svg>`;
    case "consensus":
      return `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="13" r="6" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.5"/><path d="M7 28c0-4.97 4.03-9 9-9s9 4.03 9 9" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="1.5"/></svg>`;
  }
}