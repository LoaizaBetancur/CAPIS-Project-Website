/**
 * Publications page content — source-of-truth data.
 *
 * Publications are categorised by type:
 * - protocol: Registered protocol papers
 * - systematic-review: Systematic/scoping review publications
 * - empirical: Primary data publications (Delphi results, pilot findings)
 * - commentary: Discussion, perspective, or editorial pieces
 *
 * Replace placeholder DOIs, URLs, and citation details with published versions
 * when available. Entries marked with `forthcoming: true` represent anticipated
 * publications from the research programme.
 */

export type PubType = "protocol" | "systematic-review" | "empirical" | "commentary";

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  abstract: string;
  keywords: string[];
  type: PubType;
  forthcoming: boolean;
  downloadUrl?: string;
  externalUrl?: string;
}

export interface PubCategory {
  label: string;
  type: PubType;
  description: string;
}

export const heroContent = {
  eyebrow: "Publications & Outputs",
  title: "Research Publications",
  subtitle:
    "Peer-reviewed publications and scholarly outputs from the research programme — including protocol papers, systematic reviews, Delphi consensus findings, and implementation science contributions. All outputs are registered with persistent identifiers where available.",
  primaryCta: { label: "View Resources", href: "/resources" },
  secondaryCta: { label: "Study Updates", href: "/study-updates" },
} as const;

export const pubCategories: PubCategory[] = [
  {
    label: "Protocol Papers",
    type: "protocol",
    description:
      "Registered study protocols describing the research design and methodological framework prior to data collection, in accordance with best-practice open science guidelines.",
  },
  {
    label: "Systematic Reviews",
    type: "systematic-review",
    description:
      "PRISMA-compliant systematic reviews and evidence syntheses addressing clinical research priorities — including scoping, rapid, and meta-analytic approaches where indicated.",
  },
  {
    label: "Empirical Studies",
    type: "empirical",
    description:
      "Primary research outputs reporting Delphi panel consensus results, stakeholder engagement findings, pilot implementation data, and other empirically derived evidence.",
  },
  {
    label: "Commentary & Perspective",
    type: "commentary",
    description:
      "Discussion papers, clinical perspectives, editorial contributions, and policy briefs translating research findings for practitioner and policymaker audiences.",
  },
];

export const publications: Publication[] = [
  {
    id: "protocol-2025",
    title:
      "A multi-method research programme combining systematic review, modified e-Delphi consensus, and implementation science: study protocol",
    authors:
      "PhD Candidate, Supervisor One, Supervisor Two, Expert Advisory Panel Lead",
    journal: "BMJ Open",
    year: 2025,
    doi: "10.1136/bmjopen-2025-0XXXXX",
    abstract:
      "Introduction: Clinical research priorities require rigorous, multi-method approaches to produce actionable evidence. This protocol describes a three-phase doctoral research programme integrating PRISMA-compliant systematic review methodology, a modified e-Delphi consensus process with international expert panel participation, and an implementation science framework to translate findings into clinical practice recommendations. Methods and analysis: Phase 1 comprises a comprehensive systematic review and evidence synthesis. Phase 2 employs a three-round modified e-Delphi survey with an international multidisciplinary panel (target n ≥ 30). Phase 3 applies the Consolidated Framework for Implementation Research (CFIR) to develop context-sensitive implementation strategies. Ethics and dissemination: Institutional ethics approval has been obtained. Results will be disseminated through peer-reviewed publication, conference presentation, stakeholder briefing documents, and an open-access project website.",
    keywords: [
      "study protocol",
      "systematic review",
      "Delphi technique",
      "implementation science",
      "clinical research priorities",
    ],
    type: "protocol",
    forthcoming: false,
    downloadUrl: "/downloads/protocol-paper-2025.pdf",
    externalUrl: "https://doi.org/10.1136/bmjopen-2025-0XXXXX",
  },
  {
    id: "sr-2025",
    title:
      "Clinical research priorities in [field]: a PRISMA-compliant systematic review of the literature 2015–2025",
    authors:
      "PhD Candidate, Supervisor One, Supervisor Two, Research Librarian",
    journal: "Systematic Reviews",
    year: 2025,
    doi: "10.1186/s13643-025-0XXXXX",
    abstract:
      "Background: Identifying and prioritising clinical research gaps is essential for directing limited resources toward high-impact questions. This systematic review synthesises published research priorities across [clinical field] over the past decade. Methods: We searched MEDLINE, Embase, CINAHL, PsycINFO, and the Cochrane Library from January 2015 to April 2025 using a validated search strategy. Two reviewers independently screened titles, abstracts, and full texts against predetermined eligibility criteria. Data extraction followed a standardised form; risk of bias was assessed using adapted JBI tools. Results were synthesised narratively with thematic grouping. Results: From 3,847 deduplicated records, 127 full texts were assessed and 42 studies met inclusion criteria. Five overarching priority themes emerged: [Theme A], [Theme B], [Theme C], [Theme D], and [Theme E]. Substantial heterogeneity in priority-setting methods was observed. Discussion: The findings provide an evidence base for the subsequent Delphi consensus phase and highlight methodological gaps in current priority-setting research. Registration: PROSPERO CRD42025XXXXXX.",
    keywords: [
      "systematic review",
      "research priorities",
      "evidence synthesis",
      "PRISMA",
      "clinical research",
    ],
    type: "systematic-review",
    forthcoming: false,
    downloadUrl: "/downloads/systematic-review-2025.pdf",
    externalUrl: "https://doi.org/10.1186/s13643-025-0XXXXX",
  },
  {
    id: "delphi-results-2026",
    title:
      "International expert consensus on clinical research priorities: findings from a three-round modified e-Delphi study",
    authors:
      "PhD Candidate, Supervisor One, Supervisor Two, Delphi Panel Collaborators",
    journal: "Journal of Clinical Epidemiology",
    year: 2026,
    doi: "10.1016/j.jclinepi.2026.XX.XXXX",
    abstract:
      "Objective: To establish international, multidisciplinary expert consensus on the highest-priority clinical research questions identified through systematic review. Study Design and Setting: A three-round modified e-Delphi survey was conducted with an international panel of clinicians, researchers, methodologists, and consumer representatives (n = XX). Round 1 invited free-text nominations and ratings of systematic-review-derived items. Round 2 provided controlled feedback with group median and interquartile range, enabling panel members to revise their ratings. Round 3 established final consensus using a predefined agreement threshold (≥70% agreement on priority level). Results: XX items entered Round 1; XX achieved consensus after Round 3. The top five consensus priorities addressed [domain A], [domain B], [domain C], [domain D], and [domain E]. Panel retention across three rounds was XX%. Subgroup analyses revealed moderate differences between clinician and researcher prioritisation patterns. Conclusion: The Delphi process produced a ranked, consensus-derived research agenda with strong face validity and stakeholder buy-in, providing a foundation for targeted funding allocation and implementation planning.",
    keywords: [
      "Delphi technique",
      "expert consensus",
      "research priorities",
      "modified e-Delphi",
      "clinical research agenda",
    ],
    type: "empirical",
    forthcoming: true,
    externalUrl: "",
  },
  {
    id: "implementation-2026",
    title:
      "Translating consensus-derived research priorities into clinical practice: an implementation science framework approach",
    authors:
      "PhD Candidate, Supervisor One, Supervisor Two, Implementation Science Advisor",
    journal: "Implementation Science",
    year: 2026,
    doi: "",
    abstract:
      "Background: Consensus-derived research agendas require deliberate translation strategies to influence clinical practice, policy, and funding allocation. Without structured implementation planning, even rigorously developed priorities risk remaining unused. Methods: Using the Consolidated Framework for Implementation Research (CFIR), we mapped each consensus-derived research priority to its relevant implementation determinants across five domains: intervention characteristics, outer setting, inner setting, characteristics of individuals, and process. Implementation strategies were selected using the Expert Recommendations for Implementing Change (ERIC) compilation. Results: Twenty-three discrete implementation strategies were matched to five priority areas, with stakeholder engagement, audit and feedback, and educational outreach identified as cross-cutting strategies. Contextual barriers and facilitators were documented for each priority domain. Conclusion: Systematic application of CFIR to consensus research outputs yields a structured, auditable implementation roadmap that can be adapted across healthcare settings.",
    keywords: [
      "implementation science",
      "CFIR",
      "knowledge translation",
      "research-to-practice gap",
      "clinical implementation",
    ],
    type: "empirical",
    forthcoming: true,
  },
  {
    id: "scoping-review-2025",
    title:
      "Priority-setting methods in allied health: a scoping review of stakeholder engagement approaches",
    authors:
      "PhD Candidate, Supervisor One, Consumer Representative Lead",
    journal: "JBI Evidence Synthesis",
    year: 2025,
    doi: "10.11124/JBIES-25-XXXXX",
    abstract:
      "Objective: To map the range of stakeholder engagement methods used in allied health research priority-setting exercises and assess their reported effectiveness. Introduction: Including consumers, clinicians, and policymakers in priority-setting is widely recommended, yet the methods for achieving meaningful engagement vary substantially across studies. This scoping review catalogues those methods and identifies evidence gaps. Inclusion criteria: Studies describing any formal priority-setting exercise in allied health disciplines (physiotherapy, occupational therapy, speech pathology, dietetics, podiatry, psychology) published 2010–2025. Methods: JBI scoping review methodology with dual independent screening. Results mapped to a stakeholder engagement typology. Results: From XX included studies, five engagement method categories were identified: surveys (n = XX), workshops (n = XX), nominal group technique (n = XX), Delphi (n = XX), and mixed-methods (n = XX). Consumer involvement was reported in only XX% of studies. Conclusions: Despite widespread endorsement, structured consumer engagement in priority-setting remains inconsistently applied and poorly evaluated.",
    keywords: [
      "scoping review",
      "stakeholder engagement",
      "allied health",
      "priority-setting",
      "consumer involvement",
    ],
    type: "systematic-review",
    forthcoming: true,
  },
  {
    id: "commentary-2026",
    title:
      "Closing the research-to-practice gap: why implementation planning belongs in every doctoral research programme",
    authors:
      "PhD Candidate, Supervisor One, Implementation Science Advisor",
    journal: "BMC Medical Education",
    year: 2026,
    doi: "",
    abstract:
      "Doctoral research programmes in health sciences produce substantial scholarly output, yet the translation of doctoral findings into clinical practice remains inconsistent and underprioritised. This commentary argues for embedding implementation science training and structured knowledge translation planning within doctoral curricula — not as an optional addendum but as a core competency. Drawing on the authors' experience integrating CFIR into a multi-method PhD research programme, the paper outlines five practical recommendations: (1) include an implementation chapter in every doctoral thesis, (2) train doctoral candidates in implementation frameworks early in candidature, (3) require stakeholder dissemination plans at confirmation, (4) fund implementation-focused doctoral fellowships, and (5) track post-doctoral practice impact as a performance metric. Without these structural changes, the research-to-practice gap will persist, and doctoral research — however rigorous — will continue to underdeliver on its translational potential.",
    keywords: [
      "doctoral education",
      "implementation science",
      "knowledge translation",
      "research-to-practice gap",
      "health professions education",
    ],
    type: "commentary",
    forthcoming: true,
  },
  {
    id: "sr-update-2026",
    title:
      "Living systematic review of clinical research priorities in [field]: 2026 update",
    authors:
      "PhD Candidate, Supervisor One, Supervisor Two",
    journal: "Cochrane Database of Systematic Reviews",
    year: 2026,
    doi: "",
    abstract:
      "This living systematic review updates the 2025 evidence synthesis with newly published priority-setting studies identified through ongoing monthly surveillance searches. From January to June 2026, seven new eligible studies were identified, two of which shifted the ranking of previously consensus-derived priorities. The living review model ensures that the Delphi-derived research agenda remains current and responsive to emerging evidence — a critical feature given the rapid evolution of clinical research landscapes. Maintenance: Monthly searches across MEDLINE, Embase, and CINAHL with dual independent screening. Updates published biannually.",
    keywords: [
      "living systematic review",
      "research priorities",
      "evidence update",
      "ongoing surveillance",
    ],
    type: "systematic-review",
    forthcoming: true,
  },
];