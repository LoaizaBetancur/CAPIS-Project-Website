/**
 * Methods page content — source-of-truth data.
 * All scientific claims derived from the research protocol.
 */

export interface MethodDiagramStep {
  step: number;
  title: string;
  description: string;
  icon: "search" | "screen" | "extract" | "assess" | "synthesise" | "delphi-round" | "consensus" | "implement";
}

export interface MethodDetail {
  heading: string;
  description: string;
  keyPoints: string[];
  standards?: string;
}

export const heroContent = {
  eyebrow: "Research Methods",
  title: "Rigorous Methodology for Actionable Evidence",
  subtitle:
    "This PhD project employs a multi-method research design combining systematic review, modified e-Delphi consensus, and implementation science — each phase selected to address a specific evidence gap with the most appropriate methodology available.",
  primaryCta: { label: "View Protocol", href: "/resources" },
  secondaryCta: { label: "Explore Publications", href: "/publications" },
} as const;

export const methodsIntro = {
  heading: "A Three-Pillar Methodological Framework",
  paragraphs: [
    "The research design rests on three interconnected methodological pillars, each chosen for its proven ability to address a distinct type of evidence challenge. Together they form a coherent programme that moves from evidence synthesis through expert consensus to practical implementation.",
    "This structure follows established guidance for complex evidence synthesis and guideline development, drawing on frameworks from the Cochrane Collaboration, COMET (Core Outcome Measures in Effectiveness Trials) Initiative, and implementation science.",
  ],
} as const;

export const systematicReviewPhases: MethodDiagramStep[] = [
  {
    step: 1,
    title: "Protocol Registration",
    description: "PROSPERO registration and published protocol following PRISMA-P guidelines.",
    icon: "search",
  },
  {
    step: 2,
    title: "Systematic Search",
    description: "Multi-database search across MEDLINE, Embase, CINAHL, Cochrane Library, and grey literature sources.",
    icon: "search",
  },
  {
    step: 3,
    title: "Dual Screening",
    description: "Two independent reviewers screen titles/abstracts and full texts against pre-registered eligibility criteria.",
    icon: "screen",
  },
  {
    step: 4,
    title: "Data Extraction",
    description: "Structured extraction using a piloted form, capturing study characteristics, outcome measures, and methodological details.",
    icon: "extract",
  },
  {
    step: 5,
    title: "Risk of Bias Assessment",
    description: "Cochrane RoB 2 for randomised trials, ROBINS-I for non-randomised studies, AMSTAR 2 for existing reviews.",
    icon: "assess",
  },
  {
    step: 6,
    title: "Synthesis & Mapping",
    description: "Narrative synthesis, evidence gap maps, and meta-analysis where heterogeneity permits.",
    icon: "synthesise",
  },
] as const;

export const delphiPhases: MethodDiagramStep[] = [
  {
    step: 1,
    title: "Panel Recruitment",
    description: "International recruitment of ≥50 expert clinicians, researchers, methodologists, and consumer representatives.",
    icon: "delphi-round",
  },
  {
    step: 2,
    title: "Round 1 — Item Generation",
    description: "Open-ended survey informed by systematic review findings; participants propose outcome measures and definitions.",
    icon: "delphi-round",
  },
  {
    step: 3,
    title: "Round 2 — Rating",
    description: "Participants rate importance, feasibility, and clarity of each item on structured Likert scales.",
    icon: "delphi-round",
  },
  {
    step: 4,
    title: "Controlled Feedback",
    description: "Aggregated group responses and anonymous panel comments shared between rounds to inform re-rating.",
    icon: "consensus",
  },
  {
    step: 5,
    title: "Round 3 — Re-rating & Consensus",
    description: "Items below 70% agreement threshold are re-rated; stability assessed between Rounds 2 and 3.",
    icon: "consensus",
  },
  {
    step: 6,
    title: "Final Core Outcome Set",
    description: "Items reaching pre-defined consensus threshold (≥70% agreement, IQR ≤1) form the final recommendation set.",
    icon: "consensus",
  },
] as const;

export const implementationPhases: MethodDiagramStep[] = [
  {
    step: 1,
    title: "Framework Mapping",
    description: "Mapping consensus findings to CFIR (Consolidated Framework for Implementation Research) domains.",
    icon: "implement",
  },
  {
    step: 2,
    title: "Stakeholder Workshops",
    description: "Consultation with clinicians and guideline developers to identify implementation barriers and facilitators.",
    icon: "implement",
  },
  {
    step: 3,
    title: "Toolkit Development",
    description: "Co-design of clinician-facing resources, decision aids, and implementation guidance documents.",
    icon: "implement",
  },
  {
    step: 4,
    title: "Dissemination",
    description: "Open-access publications, conference presentations, stakeholder newsletters, and plain-language summaries.",
    icon: "implement",
  },
] as const;

export const systematicReviewDetail: MethodDetail = {
  heading: "Systematic Review & Evidence Mapping",
  description:
    "The systematic review phase follows the PRISMA 2020 (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) statement to ensure transparent, reproducible methods. The protocol is prospectively registered with PROSPERO and published in a peer-reviewed journal before any screening begins.",
  keyPoints: [
    "PRISMA 2020-compliant protocol with pre-registered inclusion/exclusion criteria",
    "Multi-database search strategy developed with a research librarian",
    "Dual independent screening at title/abstract and full-text stages",
    "Piloted, structured data extraction form with inter-rater reliability checks",
    "Risk of bias appraisal using validated tools appropriate to study design",
    "Evidence gap maps to visualise where research is concentrated and where it is absent",
    "Meta-analysis conducted where ≥3 studies report comparable outcomes with acceptable heterogeneity (I² < 75%)",
  ],
  standards: "PRISMA 2020, PRISMA-P, PRISMA-S, Cochrane Handbook, AMSTAR 2",
} as const;

export const delphiDetail: MethodDetail = {
  heading: "Modified e-Delphi Consensus Study",
  description:
    "The Delphi technique is a structured group communication method for eliciting and refining expert opinion on topics where evidence is incomplete. This project uses a modified e-Delphi approach — conducted entirely online — with three structured rounds moving from open-ended item generation through structured rating to final consensus.",
  keyPoints: [
    "International expert panel (n ≥ 50) spanning multiple disciplines and geographies",
    "Online platform enabling asynchronous participation across time zones",
    "Round 1: open-ended item generation informed by systematic review evidence map",
    "Round 2: structured 9-point Likert scale rating (importance, feasibility, clarity)",
    "Pre-defined consensus threshold: ≥70% agreement, interquartile range ≤1",
    "Controlled feedback between rounds: group aggregate + anonymised panel comments",
    "Stability assessment: items stable between Rounds 2–3 are not re-rated",
    "Conformity with COMET Initiative and CREDES (Conducting and REporting DElphi Studies) guidance",
    "Qualitative content analysis of free-text responses",
  ],
  standards: "CREDES, COMET Initiative, Delphi consensus reporting standards",
} as const;

export const implementationDetail: MethodDetail = {
  heading: "Implementation Science & Knowledge Translation",
  description:
    "Producing rigorous evidence is necessary but not sufficient — the findings must reach clinicians, guideline developers, and policymakers in forms they can use. This phase applies implementation science frameworks to translate consensus outputs into actionable guidance and evaluates barriers and facilitators to uptake.",
  keyPoints: [
    "CFIR (Consolidated Framework for Implementation Research) used to map implementation determinants",
    "TIDieR (Template for Intervention Description and Replication) checklist for intervention reporting",
    "Stakeholder consultation workshops with clinicians, guideline developers, and consumer representatives",
    "Co-design approach for clinician-facing toolkits and decision aids",
    "Plain-language summaries for consumers and the general public",
    "Open-access publication strategy (gold OA where funding permits, green OA via institutional repository otherwise)",
    "Conference presentations at relevant clinical and methodological conferences",
  ],
  standards: "CFIR, TIDieR, GRIPP2 (reporting patient and public involvement)",
} as const;

export const qualityAssurance = {
  heading: "Quality Assurance & Methodological Rigour",
  description:
    "Every methodological decision is documented, justified, and aligned with published reporting standards. Formal quality assurance processes are embedded at each phase.",
  items: [
    "Protocol pre-registration and publication before data collection",
    "Independent second reviewer for all screening, extraction, and assessment stages",
    "Piloting and calibration of all data collection instruments",
    "Inter-rater reliability assessment (Cohen's κ or intraclass correlation)",
    "A priori consensus thresholds published in Delphi protocol",
    "Audit trail documenting all methodological decisions and deviations",
    "REF2014/2021-compatible impact planning",
  ],
} as const;

export const ethicsStatement = {
  heading: "Research Ethics & Governance",
  paragraphs: [
    "All phases involving human participants (Delphi panel, stakeholder workshops) operate under ethics approval from the University of Adelaide Human Research Ethics Committee. Delphi participants provide informed consent before the first round and may withdraw at any time.",
    "The systematic review phase uses only published data and does not require separate ethics approval. All research data is stored securely on University servers, and participant confidentiality is maintained throughout — Delphi responses are anonymised before being shared between rounds.",
  ],
} as const;