/**
 * About page content — source-of-truth data.
 * All scientific claims derived from the research protocol.
 */

export interface StudyPhase {
  phase: number;
  title: string;
  timeframe: string;
  description: string;
  methods: string[];
}

export interface ProjectGoal {
  title: string;
  description: string;
}

export interface CollaboratorTeaser {
  name: string;
  role: string;
  affiliation: string;
}

export const heroContent = {
  eyebrow: "About the Project",
  title: "What is The CAPIS Project?",
  subtitle:
    "Athletes and sport-related professionals need the best evidence about which athletic performance-based training interventions work best and are safe. The CAPIS project aims to identify the most relevant results for athletic performance-based training interventions in athletes. ",
  primaryCta: { label: "View Methods", href: "/methods" },
  secondaryCta: { label: "Download Protocol", href: "/resources" },
} as const;

export const backgroundContent = {
  heading: "Why is the CAPIS project needed?",
  paragraphs: [
    "Sport research studies should consistently measure and report the results of the athletic performance-based training interventions. We call these results outcomes, and they can be positive and unwanted. Outcomes are not always measured and reported in the same manner, making it difficult to compare or combine the results of research.",
    "The CAPIS project will help us do this by agreeing on which athletic performance outcomes should be measured in sport research studies. We call this 'Core Outcome Set'. ",
  ],
} as const;
export const takepartContent = {
  heading: "Why will you ask me to take part?",
  paragraphs: [
  "We will invite you to take part because you are a key professional in athletic performance-based training interventions. Your routine or research experiences are really important. We want to know what is important to you when implementing or performing athletic performance-based training interventions and what impact it has on you."
],
}as const;

export const studyPhases: StudyPhase[] = [
  {
    phase: 1,
    title: "Systematic Review & Evidence Mapping",
    timeframe: "Year 1",
    description:
      "A comprehensive systematic review following PRISMA 2020 guidelines to map the existing evidence landscape, identify gaps, and establish the current state of outcome reporting in the target clinical domain.",
    methods: [
      "PRISMA-compliant systematic review protocol",
      "Multi-database search strategy (MEDLINE, Embase, CINAHL, Cochrane)",
      "Dual independent screening and data extraction",
      "Risk of bias assessment (ROB 2 / ROBINS-I)",
      "Evidence gap map visualisation",
    ],
  },
  {
    phase: 2,
    title: "Modified e-Delphi Consensus Study",
    timeframe: "Year 1–2",
    description:
      "A structured, multi-round online Delphi process with an international expert panel to establish consensus on core outcome measures, definitions, and best-practice recommendations. The modified Delphi approach combines anonymous voting with structured feedback between rounds.",
    methods: [
      "International expert panel recruitment (n ≥ 50)",
      "Multi-round online voting with controlled feedback",
      "Pre-defined consensus thresholds (≥ 70% agreement)",
      "Qualitative analysis of free-text responses",
      "Stability assessment between rounds",
    ],
  },
  {
    phase: 3,
    title: "Implementation & Dissemination",
    timeframe: "Year 2–3",
    description:
      "Translating consensus findings into actionable clinical tools, implementation guidance, and peer-reviewed outputs. This phase focuses on making the research usable — for clinicians, guideline developers, and policymakers.",
    methods: [
      "Implementation framework mapping (CFIR / TIDieR)",
      "Stakeholder consultation workshops",
      "Development of clinician-facing toolkits",
      "Peer-reviewed publication series",
      "Conference presentations and open-access dissemination",
    ],
  },
  {
    phase: 4,
    title: "Consumer & Stakeholder Engagement",
    timeframe: "Years 1–3",
    description:
      "Ongoing throughout the project lifecycle, this phase ensures that consumer voices, practitioner perspectives, and policy needs are embedded in the research from design through to dissemination.",
    methods: [
      "Consumer advisory group meetings",
      "Survey of clinician priorities and needs",
      "Co-design workshops for toolkit development",
      "Plain-language summary production",
      "Social media and stakeholder newsletter updates",
    ],
  },
] as const;

export const projectGoals: ProjectGoal[] = [
  {
    title: "Identify Evidence Gaps",
    description:
      "Systematically map the current evidence base to identify where research is missing, inconsistent, or of low quality — providing a clear picture of what we know and what we don't.",
  },
  {
    title: "Build Expert Consensus",
    description:
      "Bring together an international, multidisciplinary panel to establish agreement where evidence alone cannot provide definitive answers — using structured Delphi methodology.",
  },
  {
    title: "Standardise Outcome Measures",
    description:
      "Develop a core outcome set that researchers and clinicians can adopt, enabling meaningful comparison across studies and strengthening future meta-analyses.",
  },
  {
    title: "Translate to Practice",
    description:
      "Produce actionable guidance, toolkits, and recommendations that clinicians and guideline developers can implement directly in their settings.",
  },
] as const;

export const teamTeaser = {
  heading: "Meet the Team",
  description:
    "The project is led by a doctoral candidate under the supervision of experienced researchers at the University of Adelaide, with guidance from an international expert advisory panel spanning multiple clinical and methodological disciplines.",
  cta: { label: "View Full Team", href: "/team" },
} as const;

export const collaborators: CollaboratorTeaser[] = [
  {
    name: "PhD Candidate",
    role: "Doctoral Researcher",
    affiliation: "Faculty of Health Sciences, University of Adelaide",
  },
  {
    name: "Primary Supervisor",
    role: "Professor of [Discipline]",
    affiliation: "University of Adelaide",
  },
  {
    name: "Co-Supervisor",
    role: "Associate Professor, Biostatistics",
    affiliation: "University of Adelaide",
  },
] as const;

export const institutionContent = {
  heading: "Host Institution",
  paragraphs: [
    "This research is conducted within the Faculty of Health Sciences at the University of Adelaide, a member of Australia's prestigious Group of Eight (Go8) research-intensive universities. The Faculty has a strong track record in clinical research, systematic review methodology, and implementation science.",
    "The project benefits from the University's research infrastructure, library resources, statistical consulting services, and ethics review processes — ensuring the highest standards of academic rigour throughout.",
  ],
} as const;