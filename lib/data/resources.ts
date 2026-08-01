/**
 * Resources page content — source-of-truth data.
 *
 * Resources are organised by audience:
 * - researchers: Methodological documents, data dictionaries, analysis plans
 * - clinicians: Clinical summaries, practice implications, implementation guides
 * - consumers: Plain-language summaries, FAQ sheets, participation information
 * - policymakers: Policy briefs, executive summaries, recommendation documents
 *
 * Each resource carries format metadata (PDF, web page, dataset, etc.) and
 * either a download URL or external link.
 */

export type ResourceFormat = "PDF" | "Web Page" | "Dataset" | "Infographic" | "Video" | "Slide Deck";

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  format: ResourceFormat;
  audience: "researchers" | "clinicians" | "consumers" | "policymakers";
  fileSize?: string;
  downloadUrl?: string;
  externalUrl?: string;
  updatedAt?: string;
}

export interface ResourceAudience {
  slug: string;
  label: string;
  description: string;
  icon: string; // SVG markup
}

export const heroContent = {
  eyebrow: "Resources",
  title: "Research Resources & Downloads",
  subtitle:
    "Practical resources for researchers, clinicians, consumers, and policymakers — including study protocols, plain-language summaries, implementation guides, policy briefs, and methodological toolkits.",
  primaryCta: { label: "Download Protocol", href: "/downloads/protocol.pdf" },
  secondaryCta: { label: "Get Involved", href: "/get-involved" },
} as const;

export const audiences: ResourceAudience[] = [
  {
    slug: "researchers",
    label: "For Researchers",
    description:
      "Methodological documents, data collection instruments, analysis plans, and registration records for researchers interested in replicating or extending this work.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  },
  {
    slug: "clinicians",
    label: "For Clinicians",
    description:
      "Clinical summaries, practice implications, implementation guides, and decision-support tools for practitioners applying research findings at the point of care.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  },
  {
    slug: "consumers",
    label: "For Consumers & Participants",
    description:
      "Plain-language summaries, participant information sheets, consent form templates, and FAQ resources designed for patients, carers, and community members.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>`,
  },
  {
    slug: "policymakers",
    label: "For Policymakers",
    description:
      "Policy briefs, executive summaries, recommendation documents, and evidence-to-action frameworks for health policy and funding decision-makers.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  },
];

export const resources: ResourceItem[] = [
  // ── Researchers ──
  {
    id: "study-protocol",
    title: "Full Study Protocol",
    description:
      "Complete protocol document describing the three-phase research design: systematic review methodology, modified e-Delphi consensus process, and implementation science framework. Includes search strategies, eligibility criteria, Delphi round procedures, and analysis plans.",
    format: "PDF",
    audience: "researchers",
    fileSize: "1.2 MB",
    downloadUrl: "/downloads/protocol.pdf",
    updatedAt: "2025-06-15",
  },
  {
    id: "data-dictionary",
    title: "Data Dictionary & Codebook",
    description:
      "Comprehensive variable definitions, coding schemes, and data structure documentation for the Delphi survey dataset. Includes item-level metadata, response scales, derived variable formulas, and missing-data handling rules.",
    format: "PDF",
    audience: "researchers",
    fileSize: "0.8 MB",
    downloadUrl: "/downloads/data-dictionary.pdf",
    updatedAt: "2026-01-20",
  },
  {
    id: "search-strategy",
    title: "Systematic Review Search Strategy",
    description:
      "Replicable search strings for MEDLINE (Ovid), Embase, CINAHL (EBSCO), PsycINFO, and Cochrane Library, including database-specific syntax, filters, and date restrictions. Suitable for updating or reproducing the evidence synthesis.",
    format: "PDF",
    audience: "researchers",
    fileSize: "0.5 MB",
    downloadUrl: "/downloads/search-strategy.pdf",
    updatedAt: "2025-04-10",
  },
  {
    id: "delphi-instrument",
    title: "Delphi Round 1 Survey Instrument",
    description:
      "The full Round 1 e-Delphi questionnaire including all candidate research priority items, rating scales (9-point Likert), free-text response fields, and participant information statement. Useful for researchers designing similar consensus studies.",
    format: "PDF",
    audience: "researchers",
    fileSize: "1.5 MB",
    downloadUrl: "/downloads/delphi-round1-instrument.pdf",
    updatedAt: "2025-11-01",
  },
  {
    id: "analysis-plan",
    title: "Statistical Analysis Plan",
    description:
      "Pre-specified analysis plan for the Delphi consensus study: consensus thresholds, inter-rater agreement metrics (IQR, percent agreement), subgroup analyses, sensitivity analyses, and reporting standards aligned with CREDES guidelines.",
    format: "PDF",
    audience: "researchers",
    fileSize: "0.6 MB",
    downloadUrl: "/downloads/analysis-plan.pdf",
    updatedAt: "2025-10-01",
  },
  {
    id: "prospero-registration",
    title: "PROSPERO Registration Record",
    description:
      "Prospectively registered systematic review protocol on PROSPERO (CRD42025XXXXXX). Includes PICO framework, eligibility criteria, data extraction form, risk-of-bias assessment plan, and synthesis methodology.",
    format: "Web Page",
    audience: "researchers",
    externalUrl: "https://www.crd.york.ac.uk/prospero/display_record.php?ID=CRD42025XXXXXX",
    updatedAt: "2025-03-01",
  },

  // ── Clinicians ──
  {
    id: "clinical-summary",
    title: "Clinical Research Priorities: Summary for Practitioners",
    description:
      "A concise, clinically oriented summary of the top consensus-derived research priorities, organised by clinical domain. Each priority includes a brief rationale and suggested practice implications for front-line clinicians.",
    format: "PDF",
    audience: "clinicians",
    fileSize: "0.4 MB",
    downloadUrl: "/downloads/clinical-summary.pdf",
    updatedAt: "2026-03-01",
  },
  {
    id: "implementation-guide",
    title: "Implementation Guide for Clinical Settings",
    description:
      "Step-by-step guide for clinical teams seeking to align local practice with consensus-derived research priorities. Covers stakeholder mapping, barrier assessment, strategy selection, and evaluation planning using CFIR-ERIC frameworks.",
    format: "PDF",
    audience: "clinicians",
    fileSize: "1.0 MB",
    downloadUrl: "/downloads/implementation-guide.pdf",
    updatedAt: "2026-04-15",
  },
  {
    id: "decision-tool",
    title: "Research Priority Decision-Support Tool",
    description:
      "An interactive web-based tool to help clinical teams assess which consensus-derived research priorities are most relevant to their setting, considering local context, resource availability, and patient population characteristics.",
    format: "Web Page",
    audience: "clinicians",
    externalUrl: "/tools/decision-support",
    updatedAt: "2026-05-01",
  },
  {
    id: "grand-rounds-slides",
    title: "Grand Rounds Presentation: Research Priorities in Practice",
    description:
      "Ready-to-use slide deck for clinical educators and department heads presenting the research programme's findings at grand rounds, journal clubs, or in-service training sessions. Includes speaker notes and discussion prompts.",
    format: "Slide Deck",
    audience: "clinicians",
    fileSize: "2.5 MB",
    downloadUrl: "/downloads/grand-rounds-slides.pptx",
    updatedAt: "2026-02-10",
  },

  // ── Consumers ──
  {
    id: "plain-language-summary",
    title: "Plain-Language Research Summary",
    description:
      "A jargon-free overview of the research programme written for patients, carers, and community members. Explains what the study is about, how it works, why it matters, and what the findings mean for people receiving care.",
    format: "PDF",
    audience: "consumers",
    fileSize: "0.3 MB",
    downloadUrl: "/downloads/plain-language-summary.pdf",
    updatedAt: "2026-03-15",
  },
  {
    id: "participant-info-sheet",
    title: "Delphi Panel Participant Information Sheet",
    description:
      "The official participant information and consent documentation for the Delphi consensus panel. Covers study purpose, participation requirements, time commitment, confidentiality, withdrawal rights, and contact details.",
    format: "PDF",
    audience: "consumers",
    fileSize: "0.4 MB",
    downloadUrl: "/downloads/participant-information-sheet.pdf",
    updatedAt: "2025-09-01",
  },
  {
    id: "consumer-faq",
    title: "Consumer FAQ: What This Research Means for You",
    description:
      "Frequently asked questions answered in plain language: What are research priorities? How were they chosen? Will this change my care? How can I get involved? Includes links to further reading and support organisations.",
    format: "Web Page",
    audience: "consumers",
    externalUrl: "/faq#consumers",
    updatedAt: "2026-04-01",
  },
  {
    id: "infographic-priorities",
    title: "Top Research Priorities Infographic",
    description:
      "A visually accessible, single-page infographic illustrating the top five consensus-derived research priorities with icons, brief descriptions, and links to more detailed resources. Designed for sharing in waiting rooms, community newsletters, and social media.",
    format: "Infographic",
    audience: "consumers",
    fileSize: "0.7 MB",
    downloadUrl: "/downloads/top-priorities-infographic.pdf",
    updatedAt: "2026-05-01",
  },

  // ── Policymakers ──
  {
    id: "policy-brief",
    title: "Policy Brief: Research Priorities for Health System Investment",
    description:
      "A two-page policy brief summarising the research programme's findings and their implications for health system planning, research funding allocation, and workforce development. Includes actionable recommendations with implementation timelines.",
    format: "PDF",
    audience: "policymakers",
    fileSize: "0.3 MB",
    downloadUrl: "/downloads/policy-brief.pdf",
    updatedAt: "2026-05-15",
  },
  {
    id: "executive-summary",
    title: "Executive Summary: Full Research Programme Findings",
    description:
      "A comprehensive but concise executive summary covering all three research phases: systematic review results, Delphi consensus outcomes, and implementation strategy recommendations. Designed for senior health system decision-makers.",
    format: "PDF",
    audience: "policymakers",
    fileSize: "0.5 MB",
    downloadUrl: "/downloads/executive-summary.pdf",
    updatedAt: "2026-06-01",
  },
  {
    id: "evidence-brief",
    title: "Evidence-to-Action Framework",
    description:
      "A structured framework mapping each consensus-derived research priority to specific policy levers, funding mechanisms, workforce implications, and evaluation metrics. Designed to support evidence-informed health policy decisions.",
    format: "PDF",
    audience: "policymakers",
    fileSize: "0.9 MB",
    downloadUrl: "/downloads/evidence-to-action-framework.pdf",
    updatedAt: "2026-06-15",
  },
  {
    id: "economic-brief",
    title: "Economic Implications Briefing Note",
    description:
      "Preliminary analysis of the potential economic implications of addressing the top five research priorities, including estimated resource requirements, projected health system savings, and return-on-investment considerations.",
    format: "PDF",
    audience: "policymakers",
    fileSize: "0.6 MB",
    downloadUrl: "/downloads/economic-implications.pdf",
    updatedAt: "2026-07-01",
  },
];