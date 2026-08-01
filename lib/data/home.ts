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
  title: "The CAPIS project: Core Athletic Performance-based Intervention Set for Athletes",
  subtitle:
    "An international multi-phase research project to develop an outcome domain list that should be measured for all trials of athletic performance-based training interventions in athletes.",
  primaryCta: { label: "About the Project", href: "/about" },
  secondaryCta: { label: "View Protocol", href: "/resources/researchers" },
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
      "Discussions with football players classified as Tier 3, 4 or 5 and their coaches, strength and conditioning coaches, carers, director of performance and sports scientists to identify what outcome domains are important to them.",
    icon: "group interview",
  },
  {
    title: "e-Delphi survey",
    description:
      "Two e-Delphi surveys to tell us what you think the most important wanted and unwanted outcome domains are for plyometric training interventions in football players.",
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
  { value: "4", label: "Interest-holder groups" },
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
