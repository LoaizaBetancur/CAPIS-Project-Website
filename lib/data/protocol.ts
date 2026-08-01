/**
 * Research Protocol page content — source-of-truth data.
 * All scientific claims derived from the research protocol.
 * This page serves as an accessible summary + download gateway for the full protocol document.
 */

export interface ProtocolSection {
  heading: string;
  content: string;
  subsections?: { heading: string; content: string }[];
}

export interface DownloadResource {
  title: string;
  description: string;
  format: string;
  size: string;
  href: string;
}

export const heroContent = {
  eyebrow: "Research Protocol",
  title: "The Complete Research Programme",
  subtitle:
    "A detailed, peer-reviewed protocol prospectively registered with PROSPERO and published in BMJ Open — describing every methodological decision, from search strategies through Delphi questionnaires to implementation plans.",
  primaryCta: { label: "Download Protocol PDF", href: "#downloads" },
  secondaryCta: { label: "View PROSPERO Record", href: "#registration" },
} as const;

export const protocolSummary = {
  heading: "Protocol at a Glance",
  items: [
    {
      label: "Study Title",
      value:
        "A systematic review and modified e-Delphi consensus to establish core outcome measures and best-practice recommendations in [clinical domain]: a multi-phase research protocol",
    },
    {
      label: "Protocol Version",
      value: "Version 1.0 — published and registered",
    },
    {
      label: "PROSPERO ID",
      value: "CRD42025XXXXXX (prospectively registered)",
    },
    {
      label: "Study Design",
      value:
        "Multi-phase: systematic review + modified e-Delphi consensus + implementation science",
    },
    {
      label: "Ethics Approval",
      value:
        "University of Adelaide Human Research Ethics Committee (approval no. H-2025-XXX)",
    },
    {
      label: "Funding",
      value: "Australian Government Research Training Program Scholarship",
    },
    {
      label: "Protocol Publication",
      value: "BMJ Open, 2025 (DOI: TBD)",
    },
  ],
} as const;

export const protocolSections: ProtocolSection[] = [
  {
    heading: "1. Introduction & Rationale",
    content:
      "The introduction establishes the clinical context and evidence gap that motivates this research programme. It draws on preliminary scoping work demonstrating inconsistent outcome reporting in the target domain, and situates the project within the broader movement toward core outcome set development (COMET Initiative). The rationale section argues that without standardised measures, evidence synthesis is compromised, clinical guideline recommendations remain weak, and patient care suffers from an inability to compare interventions meaningfully.",
  },
  {
    heading: "2. Research Questions & Objectives",
    content:
      "The protocol specifies four primary research questions, each mapped to a methodological phase. These questions address: (1) what outcome measures are currently reported in the target literature, and with what consistency; (2) what constitutes a minimum core outcome set as determined by expert consensus; (3) what definitions and measurement instruments should accompany each core outcome; and (4) what implementation strategies are most likely to support uptake of the core outcome set in clinical practice and research.",
  },
  {
    heading: "3. Systematic Review Methods",
    content:
      "The systematic review protocol follows PRISMA-P and PRISMA 2020 guidance. This section details the complete search strategy — including database selection (MEDLINE via Ovid, Embase, CINAHL, Cochrane CENTRAL, and grey literature sources), search terms with Boolean operators, date restrictions, and language criteria. Inclusion and exclusion criteria are specified using a PICOS framework. The screening process (Covidence), data extraction form (piloted, with inter-rater reliability targets), risk of bias assessment tools (RoB 2, ROBINS-I, AMSTAR 2), and synthesis plan (narrative, evidence gap maps, meta-analysis where feasible) are each described in full.",
    subsections: [
      {
        heading: "Search Strategy",
        content:
          "Complete Boolean search strings for each database, developed in consultation with a research librarian. Search terms span the clinical domain, outcome measurement terminology, and study design filters. Grey literature sources include clinical trial registries, conference proceedings, and institutional repositories.",
      },
      {
        heading: "Screening & Selection",
        content:
          "Two-stage screening (title/abstract, full text) with dual independent review. Disagreements resolved through discussion or a third reviewer. PRISMA flow diagram documenting inclusions and exclusions at each stage. Inter-rater reliability assessed using Cohen's κ.",
      },
    ],
  },
  {
    heading: "4. Delphi Consensus Methods",
    content:
      "The Delphi protocol describes panel composition (target n ≥ 50, international, multidisciplinary), recruitment strategy (purposive sampling via professional networks, clinical societies, and COMET database), and the three-round structure. Round 1 uses open-ended questions informed by the systematic review evidence map. Round 2 presents items for structured rating on 9-point Likert scales (importance, feasibility, clarity). Round 3 re-rates items not reaching consensus in Round 2. Consensus is pre-defined as ≥70% of participants rating an item 7–9 AND interquartile range ≤1. The protocol specifies a stopping rule: items stable between Rounds 2–3 are not re-rated. Free-text responses undergo qualitative content analysis.",
    subsections: [
      {
        heading: "Panel Composition & Recruitment",
        content:
          "Target: ≥50 international experts including clinicians, researchers, methodologists, and consumer representatives. Recruitment via purposive sampling through professional organisations, clinical networks, social media, and the COMET People and Projects database. Minimum participation commitment: all three rounds.",
      },
      {
        heading: "Consensus Definition & Thresholds",
        content:
          "Consensus defined a priori as ≥70% agreement (ratings 7–9 on 9-point Likert) AND interquartile range ≤1.0. Items not meeting both criteria proceed to Round 3 for re-rating. Items stable between rounds (defined as ≤10% change in median and IQR) are excluded from further rounds.",
      },
    ],
  },
  {
    heading: "5. Implementation Science Framework",
    content:
      "This section maps the CFIR (Consolidated Framework for Implementation Research) domains to the project context and describes the planned stakeholder engagement approach. TIDieR (Template for Intervention Description and Replication) will guide the description of final consensus recommendations to ensure they are replicable and actionable. Stakeholder consultation workshops and co-design sessions are planned following consensus completion.",
  },
  {
    heading: "6. Data Management & Analysis Plan",
    content:
      "Systematic review data managed in Covidence and exported to Microsoft Excel/Stata for analysis. Delphi data collected via REDCap (Research Electronic Data Capture), hosted on University of Adelaide servers. Quantitative analysis: descriptive statistics, median and IQR for Delphi ratings, stability assessment using Wilcoxon signed-rank test or intraclass correlation. Qualitative analysis: thematic analysis of free-text responses using NVivo. All data stored securely for 5 years post-completion per University policy.",
  },
  {
    heading: "7. Ethics & Governance",
    content:
      "Ethics approval obtained from the University of Adelaide Human Research Ethics Committee. Delphi participants provide informed consent via an online participant information sheet and consent form embedded in the first round questionnaire. Participants may withdraw at any time; data contributed prior to withdrawal may be retained in anonymised form. The systematic review phase uses only published, publicly available data and is exempt from separate ethics review.",
  },
  {
    heading: "8. Dissemination & Impact Plan",
    content:
      "The dissemination plan includes: (1) open-access peer-reviewed publications (BMJ Open protocol paper, systematic review paper, Delphi consensus paper, implementation paper); (2) conference presentations at relevant clinical and methodological meetings; (3) plain-language summaries for consumers and the public; (4) stakeholder newsletter updates throughout the project lifecycle; (5) a dedicated project website (this site); and (6) deposition of the final core outcome set in the COMET database.",
  },
] as const;

export const downloadResources: DownloadResource[] = [
  {
    title: "Full Research Protocol (PDF)",
    description:
      "The complete, peer-reviewed protocol document as published — including all search strategies, Delphi questionnaires, and methodological appendices.",
    format: "PDF",
    size: "~850 KB",
    href: "/downloads/protocol-v1.pdf",
  },
  {
    title: "Protocol Summary (PDF)",
    description:
      "A concise 4-page summary of the protocol, suitable for sharing with collaborators, potential panel members, and stakeholders.",
    format: "PDF",
    size: "~250 KB",
    href: "/downloads/protocol-summary-v1.pdf",
  },
  {
    title: "Supplementary Materials",
    description:
      "Complete search strategies, draft data extraction forms, and Delphi questionnaire templates — all supplementary files from the published protocol.",
    format: "ZIP",
    size: "~1.2 MB",
    href: "/downloads/protocol-supplements-v1.zip",
  },
] as const;

export const registrationInfo = {
  heading: "Protocol Registration & Transparency",
  paragraphs: [
    "This protocol is prospectively registered with PROSPERO (International Prospective Register of Systematic Reviews), the recommended registry for systematic review protocols in health and social care. Prospective registration prevents duplication, reduces reporting bias, and enables comparison between planned and conducted methods.",
    "The protocol has also been published as a peer-reviewed article in BMJ Open, providing an additional layer of methodological transparency. This dual approach — registration plus publication — follows best-practice recommendations from the Cochrane Collaboration and the EQUATOR Network.",
  ],
} as const;