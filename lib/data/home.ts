/**
 * Homepage content — source-of-truth data.
 * All scientific claims derived from the CAPIS study protocol.
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
  eyebrow: "Core Outcome Set Development",
  title: "The CAPIS project: Core Athletic Performance-based Intervention Set for Athletes",
  subtitle:
    "An international five-phase research project to develop a core outcome set for plyometric training interventions in Tier 3, 4, or 5 football players.",
  primaryCta: { label: "About the Project", href: "/about" },
  secondaryCta: { label: "View Protocol", href: "/resources/researchers" },
} as const;

export const overviewCards: OverviewCard[] = [
  {
    title: "Scoping Review",
    description:
      "A comprehensive review of the literature to identify all outcome domains reported in plyometric training studies with Tier 3, 4, or 5 football players.",
    icon: "review",
  },
  {
    title: "Focus Groups",
    description:
      "Semi-structured interviews with players, coaches, and experts to identify outcomes that matter in practice but may be missing from research.",
    icon: "group interview",
  },
  {
    title: "e-Delphi Survey",
    description:
      "Two rounds of online surveys where interest-holders vote on the most important outcome domains using a 9-point Likert scale.",
    icon: "delphi",
  },
  {
    title: "Consensus Meeting",
    description:
      "A half-day online meeting to reach final agreement on the core outcome set that all future plyometric training trials should measure.",
    icon: "consensus",
  },
] as const;

export const highlightStats: HighlightStat[] = [
  { value: "5", label: "COS development phases" },
  { value: "4", label: "Interest-holder groups" },
  { value: "2", label: "e-Delphi rounds" },
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

export function getIconSvg(icon: OverviewCard["icon"]): string {
  switch (icon) {
    case "review":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>`;
    case "delphi":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
    case "group interview":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
    case "consensus":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
  }
}
