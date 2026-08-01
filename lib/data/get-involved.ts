// ── Get Involved ──
// Pathways for researchers, clinicians, consumers, and policymakers
// to engage with the research programme.

export interface InvolvementPathway {
  id: string;
  audience: "researcher" | "clinician" | "consumer" | "policymaker";
  title: string;
  description: string;
  details: string[];
  cta: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

export const AUDIENCE_META: Record<InvolvementPathway["audience"], {
  label: string;
  icon: string;
  heading: string;
}> = {
  researcher: {
    label: "Researchers",
    icon: "🔬",
    heading: "Collaborate on evidence synthesis and methodology",
  },
  clinician: {
    label: "Clinicians & Practitioners",
    icon: "🩺",
    heading: "Shape evidence that matters to practice",
  },
  consumer: {
    label: "Consumers & Community",
    icon: "💬",
    heading: "Bring the lived-experience voice to research",
  },
  policymaker: {
    label: "Policymakers & Funders",
    icon: "🏛",
    heading: "Connect evidence to policy decisions",
  },
};

export const heroContent = {
  eyebrow: "Get Involved",
  title: "Engage with the Research Programme",
  subtitle:
    "There are multiple ways to contribute — whether you're a researcher interested in methodology, a clinician wanting to shape evidence, a consumer bringing lived experience, or a policymaker connecting research to practice. All pathways are designed to be accessible and respectful of your time.",
};

export const pathways: InvolvementPathway[] = [
  // ── Researcher ──
  {
    id: "inv-res-1",
    audience: "researcher",
    title: "Join the Delphi Expert Advisory Panel",
    description:
      "We are recruiting international experts in the clinical domain, systematic review methodology, Delphi consensus methods, and implementation science to serve on the Expert Advisory Panel for the Delphi consensus study (Phase 2). Panel members contribute expertise across three Delphi rounds (anticipated total time commitment: 6–8 hours over 4 months) and are offered co-authorship on resulting publications.",
    details: [
      "Participation in three Delphi rounds via online questionnaires (Qualtrics)",
      "Review of synthesised evidence summaries between rounds",
      "Optional contribution to manuscript preparation for Delphi results paper",
      "Co-authorship offered to panel members who complete all three rounds",
      "Expected timeframe: August–November 2026",
    ],
    cta: { label: "Express interest", href: "/contact" },
    ctaSecondary: { label: "Read protocol", href: "/protocol" },
  },
  {
    id: "inv-res-2",
    audience: "researcher",
    title: "Contribute to the Systematic Review",
    description:
      "Researchers with expertise in systematic review methodology, risk-of-bias assessment, or GRADE evidence certainty rating are invited to contribute as independent reviewers for the scoping and systematic review components (Phase 1). This is a structured contribution with clear tasks and acknowledgement on resulting publications.",
    details: [
      "Independent dual screening of titles/abstracts and full-text records",
      "Risk-of-bias assessment using ROB 2 / ROBINS-I tools",
      "GRADE evidence certainty rating for key outcomes",
      "Acknowledgement in review publications; co-authorship possible for substantial contributions",
      "Flexible timing — each task is ~3–5 hours across 2–3 weeks",
    ],
    cta: { label: "Contact research team", href: "/contact" },
    ctaSecondary: { label: "View methods", href: "/methods" },
  },
  {
    id: "inv-res-3",
    audience: "researcher",
    title: "Use Our Open Data & Reproducible Methods",
    description:
      "All search strategies, PRISMA flow diagrams, data extraction templates, and analysis scripts from this programme are shared openly. Researchers conducting related evidence syntheses are welcome to reuse, adapt, and cite these materials.",
    details: [
      "Full reproducible search strategies for 6 databases (MEDLINE, Embase, CINAHL, PsycINFO, Cochrane CENTRAL, Web of Science)",
      "PRISMA 2020 and PRISMA-ScR flow diagrams",
      "Data extraction templates and quality appraisal forms",
      "Delphi questionnaire frameworks (anonymised, post-study)",
      "All available under CC BY 4.0 licence",
    ],
    cta: { label: "Browse downloads", href: "/media" },
    ctaSecondary: { label: "View publications", href: "/publications" },
  },

  // ── Clinician ──
  {
    id: "inv-clin-1",
    audience: "clinician",
    title: "Participate in Implementation Mapping",
    description:
      "Clinical practitioners across relevant disciplines are invited to participate in the implementation mapping study (Phase 3). This involves collaborative workshops to identify barriers to evidence uptake, design implementation strategies, and develop actionable clinical tools. Participation can be as a workshop attendee or as a site champion.",
    details: [
      "Half-day or full-day implementation mapping workshops (in-person or online)",
      "Identify context-specific barriers and facilitators to evidence uptake",
      "Co-design implementation strategies and clinical decision-support tools",
      "Pilot implementation tools within your practice setting (optional)",
      "Continuing Professional Development (CPD) recognition may be available",
      "Expected timeframe: early 2027",
    ],
    cta: { label: "Register interest", href: "/contact" },
    ctaSecondary: { label: "View protocol (Phase 3)", href: "/protocol" },
  },
  {
    id: "inv-clin-2",
    audience: "clinician",
    title: "Stay Informed with Clinician-Focused Updates",
    description:
      "Subscribe to receive concise research updates tailored for busy clinicians: key findings in 2-minute summaries, upcoming CPD-eligible events, and new clinician-facing resources as they become available.",
    details: [
      "Quarterly email digest with key findings and clinical implications",
      "Early access to clinician-focused resources (two-page summaries, decision aids)",
      "Invitations to CPD-eligible webinars and workshops",
      "No spam — 4–6 emails per year",
    ],
    cta: { label: "Subscribe to updates", href: "/study-updates" },
    ctaSecondary: { label: "Download clinician summary", href: "/media" },
  },

  // ── Consumer ──
  {
    id: "inv-con-1",
    audience: "consumer",
    title: "Join the Consumer Advisory Group",
    description:
      "We are recruiting consumers with relevant lived experience to serve on the Consumer Advisory Group (CAG). CAG members provide input on study materials from the consumer perspective, co-design plain-language resources, and ensure the research remains grounded in what matters to the people it aims to serve. Meetings are quarterly, with flexible participation options.",
    details: [
      "Quarterly meetings (online, 90–120 minutes) with flexible attendance",
      "Review and provide feedback on study materials and plain-language resources",
      "Co-design consumer-facing outputs (infographics, summaries, website content)",
      "Honorarium provided for each meeting attended",
      "Training and support available — no research experience required",
      "Membership term: 12 months, renewable",
    ],
    cta: { label: "Express interest in CAG", href: "/contact" },
    ctaSecondary: { label: "Read consumer summary", href: "/media" },
  },
  {
    id: "inv-con-2",
    audience: "consumer",
    title: "Attend Consumer-Focused Events",
    description:
      "Throughout the research programme, we host public-facing events designed for consumers and community members. These include plain-language research updates, Q&A sessions with the research team, and the end-of-programme public symposium.",
    details: [
      "Plain-language research update webinars (free, online)",
      "Public Q&A sessions with the research team",
      "End-of-programme public symposium presenting final findings in accessible format",
      "All events are free; recordings available afterwards",
    ],
    cta: { label: "View upcoming events", href: "/events" },
    ctaSecondary: { label: "Subscribe to updates", href: "/study-updates" },
  },

  // ── Policymaker ──
  {
    id: "inv-pol-1",
    audience: "policymaker",
    title: "Engage with Evidence-to-Policy Translation",
    description:
      "Policymakers and health system funders are invited to engage with the research at key translation points. We provide policy briefs summarising findings with explicit policy implications, and welcome input on research questions that align with current policy priorities.",
    details: [
      "Policy briefs at major project milestones (~18 months and programme completion)",
      "Explicit mapping of findings to current policy frameworks and funding models",
      "Opportunity to input on research questions relevant to policy decision-making",
      "Briefings available for health departments, agencies, and parliamentary committees",
    ],
    cta: { label: "Request a policy briefing", href: "/contact" },
    ctaSecondary: { label: "Read about the research", href: "/about" },
  },
  {
    id: "inv-pol-2",
    audience: "policymaker",
    title: "Access Research Evidence for Decision-Making",
    description:
      "All evidence outputs from this programme are structured for policy accessibility: GRADE evidence profiles, plain-language summaries, and implementation-ready tools. Policymakers can access these directly or request tailored evidence summaries for specific decision contexts.",
    details: [
      "GRADE evidence profiles with certainty ratings for each outcome",
      "Plain-language summaries suitable for policy briefing documents",
      "Implementation strategy frameworks adaptable to jurisdictional contexts",
      "All materials freely available under CC BY 4.0",
    ],
    cta: { label: "Browse research outputs", href: "/publications" },
    ctaSecondary: { label: "Download protocol", href: "/media" },
  },
];

/* ── Grouped by audience ── */
export function getPathwaysByAudience(audience: InvolvementPathway["audience"]): InvolvementPathway[] {
  return pathways.filter((p) => p.audience === audience);
}