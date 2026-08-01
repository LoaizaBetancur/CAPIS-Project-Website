/**
 * Team page content — source-of-truth data.
 *
 * Team members are organised into three categories:
 * 1. Core Research Team (PhD candidate + supervisors)
 * 2. Expert Advisory Panel (international Delphi panel leads)
 * 3. Consumer & Stakeholder Representatives
 *
 * Replace placeholder names and titles with real personnel when available.
 */

export interface TeamMember {
  name: string;
  role: string;
  affiliation: string;
  bio: string;
  orcid?: string;
  email?: string;
  category: "core" | "advisory" | "consumer";
}

export interface TeamCategory {
  heading: string;
  description: string;
  members: TeamMember[];
}

export const heroContent = {
  eyebrow: "Research Team",
  title: "The People Behind the Research",
  subtitle:
    "This project brings together doctoral researchers, experienced supervisors, an international expert advisory panel, and consumer representatives — each contributing essential expertise to ensure the research is rigorous, relevant, and grounded in real-world clinical needs.",
  primaryCta: { label: "Get Involved", href: "/get-involved" },
  secondaryCta: { label: "Contact Us", href: "/contact" },
} as const;

export const coreTeam: TeamCategory = {
  heading: "Core Research Team",
  description:
    "The doctoral candidate leads the research programme under the supervision of experienced academics at the University of Adelaide, with day-to-day research activities supported by the Faculty of Health Sciences.",
  members: [
    {
      name: "PhD Candidate",
      role: "Doctoral Researcher",
      affiliation: "Faculty of Health Sciences, University of Adelaide",
      bio: "The doctoral candidate leads all phases of the research programme — from systematic review screening and data extraction through Delphi panel coordination and stakeholder engagement. Their doctoral training includes advanced coursework in systematic review methodology, biostatistics, and implementation science.",
      orcid: "0000-000X-XXXX-XXXX",
      email: "phd.candidate@adelaide.edu.au",
      category: "core",
    },
    {
      name: "Primary Supervisor",
      role: "Professor of [Clinical Discipline]",
      affiliation: "Faculty of Health Sciences, University of Adelaide",
      bio: "An internationally recognised researcher with extensive experience in clinical research, systematic reviews, and Delphi methodology. Professor [Name] has supervised 12 doctoral candidates to completion and published over 150 peer-reviewed articles. Their methodological expertise ensures the research design meets the highest standards of rigour.",
      orcid: "0000-000X-XXXX-XXXX",
      email: "supervisor@adelaide.edu.au",
      category: "core",
    },
    {
      name: "Co-Supervisor",
      role: "Associate Professor, Biostatistics",
      affiliation: "School of Public Health, University of Adelaide",
      bio: "A biostatistician specialising in evidence synthesis methods, meta-analysis, and Delphi study design. Associate Professor [Name] brings quantitative expertise to the systematic review analysis plan and Delphi consensus threshold design.",
      orcid: "0000-000X-XXXX-XXXX",
      email: "co-supervisor@adelaide.edu.au",
      category: "core",
    },
    {
      name: "Research Librarian",
      role: "Senior Research Librarian",
      affiliation: "University of Adelaide Library",
      bio: "Expert in systematic review search strategy design and database interrogation. The research librarian developed and peer-reviewed the search strategies for all databases included in the systematic review, ensuring comprehensive coverage and reproducible methods.",
      category: "core",
    },
  ],
} as const;

export const advisoryPanel: TeamCategory = {
  heading: "Expert Advisory Panel",
  description:
    "An international, multidisciplinary panel of experts provides guidance throughout the Delphi consensus process and contributes domain-specific expertise to ensure the research outputs are clinically meaningful and methodologically sound.",
  members: [
    {
      name: "Panel Chair",
      role: "Professor of Clinical Epidemiology",
      affiliation: "University of Oxford, United Kingdom",
      bio: "A leading figure in core outcome set development and Delphi methodology. Professor [Name] chairs the advisory panel and provides independent oversight of the consensus process, ensuring methodological rigour and neutrality.",
      orcid: "0000-000X-XXXX-XXXX",
      category: "advisory",
    },
    {
      name: "Clinical Lead",
      role: "Director of [Clinical Specialty]",
      affiliation: "Royal Adelaide Hospital",
      bio: "Senior clinician with 20+ years of experience in the target clinical domain. [Name] ensures the Delphi items and consensus outputs remain clinically relevant and actionable for practising clinicians across different healthcare settings.",
      category: "advisory",
    },
    {
      name: "Methodology Expert",
      role: "Associate Professor, Evidence Synthesis",
      affiliation: "Monash University, Melbourne",
      bio: "Specialist in systematic review methodology, GRADE evidence assessment, and guideline development. [Name] contributes methodological expertise to the systematic review phase and ensures alignment with Cochrane and GRADE standards.",
      orcid: "0000-000X-XXXX-XXXX",
      category: "advisory",
    },
    {
      name: "International Advisor",
      role: "Professor of Health Services Research",
      affiliation: "University of Toronto, Canada",
      bio: "An internationally recognised health services researcher contributing expertise in implementation science and knowledge translation. Professor [Name] advises on CFIR framework application and stakeholder engagement strategy.",
      orcid: "0000-000X-XXXX-XXXX",
      category: "advisory",
    },
    {
      name: "International Advisor",
      role: "Senior Research Fellow, COMET Initiative",
      affiliation: "University of Liverpool, United Kingdom",
      bio: "A core member of the COMET (Core Outcome Measures in Effectiveness Trials) Initiative. [Name] provides guidance on alignment with COMET standards and ensures the final core outcome set is registered in the COMET database.",
      orcid: "0000-000X-XXXX-XXXX",
      category: "advisory",
    },
  ],
} as const;

export const consumerReps: TeamCategory = {
  heading: "Consumer & Stakeholder Representatives",
  description:
    "Meaningful consumer and stakeholder involvement is embedded throughout the research lifecycle — from protocol design through to dissemination. Consumer representatives ensure the research addresses outcomes that matter to patients and the public.",
  members: [
    {
      name: "Consumer Advocate",
      role: "Consumer Representative",
      affiliation: "Health Consumers Alliance of SA",
      bio: "[Name] brings lived experience of the target clinical condition to the research team, ensuring that patient priorities and perspectives are represented in the Delphi process, outcome measure selection, and plain-language dissemination materials.",
      category: "consumer",
    },
    {
      name: "Policy Advisor",
      role: "Health Policy Advisor",
      affiliation: "SA Health",
      bio: "[Name] provides the policy perspective, ensuring that research outputs align with state and national health policy directions and are formatted to support evidence-informed policymaking.",
      category: "consumer",
    },
    {
      name: "Clinical Practitioner",
      role: "Senior Clinician & Stakeholder Representative",
      affiliation: "[Clinical Network], Australia",
      bio: "A practising clinician representing the end-user perspective. [Name] advises on the feasibility and usability of proposed outcome measures in real-world clinical settings, including resource-constrained environments.",
      category: "consumer",
    },
  ],
} as const;

export const teamCategories: TeamCategory[] = [
  coreTeam,
  advisoryPanel,
  consumerReps,
] as const;