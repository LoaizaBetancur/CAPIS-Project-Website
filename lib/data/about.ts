/**
 * About page content — source-of-truth data.
 * All scientific claims derived from the CAPIS study protocol.
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
    "The CAPIS project aims to identify a subset of core outcome set (COS) domains for plyometric training interventions in adult football players classified as Tiers 3, 4, or 5.",
  primaryCta: { label: "View Methods", href: "/resources/researchers" },
  secondaryCta: { label: "Download Protocol", href: "/resources/researchers" },
} as const;

export const backgroundContent = {
  heading: "Why is the CAPIS project needed?",
  paragraphs: [
    "Football research studies should consistently measure and report the results of athletic performance-based training interventions. We call these results outcomes, and they can be positive or unwanted. When studies measure different outcomes in diverse ways, it becomes difficult to compare or combine them.",
    "The CAPIS project will help us do this by agreeing on which athletic performance outcomes should be measured in plyometric training research studies. We call this agreed-upon minimum list a 'Core Outcome Set (COS)'.",
  ],
} as const;

export const takepartContent = {
  heading: "Why will you ask me to take part?",
  paragraphs: [
    "We will invite you to take part because you are a key professional in athletic performance-based training interventions. Your routine or research experiences are really important. We want to know what is important to you when implementing or performing plyometric training interventions and what impact it has on you.",
  ],
} as const;

export const studyPhases: StudyPhase[] = [
  {
    phase: 1,
    title: "Scoping Review",
    timeframe: "Phase 1",
    description:
      "A comprehensive scoping review following JBI and PRISMA-ScR guidelines to identify all reported outcome domains in RCTs, non-RCTs, and qualitative studies of plyometric training interventions in Tier 3, 4, or 5 football players.",
    methods: [
      "Search MEDLINE, Embase, CINAHL, PsycINFO, Web of Science, and SPORTDiscus",
      "Include unpublished studies via ICTRP, ClinicalTrials.gov, and grey literature",
      "Dual independent screening and data extraction",
      "Group outcomes into domains using COMET taxonomy",
    ],
  },
  {
    phase: 2,
    title: "Focus Group Interviews",
    timeframe: "Phase 2",
    description:
      "Semi-structured focus group interviews with practitioners, academics, researchers, and policymakers to explore perspectives and identify outcome domains that may be missing from the literature.",
    methods: [
      "Maximum variation sampling across geographic locations",
      "5–10 participants per focus group",
      "Conducted in English or Spanish via Microsoft Teams",
      "Conventional deductive content analysis using NVivo",
    ],
  },
  {
    phase: 3,
    title: "Winnowing and Binning",
    timeframe: "Phase 3",
    description:
      "Online meetings with each interest-holder group to organise and refine the preliminary outcome domain list into a clear, manageable set of candidate outcomes for the e-Delphi surveys.",
    methods: [
      "OMERACT-inspired winnowing and binning approach",
      "No more than 30 unique preliminary outcome domains presented",
      "Pilot test with at least 3 participants from each group",
      "Review and adjustment by the steering group",
    ],
  },
  {
    phase: 4,
    title: "e-Delphi Consensus Study",
    timeframe: "Phase 4",
    description:
      "Two rounds of online Delphi surveys with an international expert panel to establish consensus on core outcome domains using a 9-point Likert scale and controlled feedback between rounds.",
    methods: [
      "International expert panel recruitment (target n ≥ 120 across 4 groups)",
      "9-point Likert scale (1–3 not important; 4–6 important; 7–9 critical)",
      "70/15 consensus definition for inclusion/exclusion",
      "Personalised reminders at weeks 2, 3, and 48 hours before closing",
    ],
  },
  {
    phase: 5,
    title: "Consensus Meeting",
    timeframe: "Phase 5",
    description:
      "A half-day online consensus meeting with representatives from all interest-holder groups to reach final agreement on the core outcome set domains.",
    methods: [
      "Stratified purposive sampling (up to 60 participants)",
      "Presentation of Round 2 results to all groups",
      "Discussion and anonymous voting on outcomes without consensus",
      "Finalisation of the CAPIS core outcome set",
    ],
  },
] as const;

export const projectGoals: ProjectGoal[] = [
  {
    title: "Identify Evidence Gaps",
    description:
      "Systematically map the current evidence base to identify where research is missing, inconsistent, or of low quality in plyometric training outcomes.",
  },
  {
    title: "Build Expert Consensus",
    description:
      "Bring together an international, multidisciplinary panel of interest-holders to establish agreement on which outcomes matter most.",
  },
  {
    title: "Standardise Outcome Measures",
    description:
      "Develop a core outcome set that researchers and clinicians can adopt, enabling meaningful comparison across plyometric training trials.",
  },
  {
    title: "Translate to Practice",
    description:
      "Produce actionable guidance that trialists, journal editors, and peer reviewers can use to reduce selective reporting and research waste.",
  },
] as const;

export const teamTeaser = {
  heading: "Meet the Team",
  description:
    "The project is led by Andrés F. Loaiza-Betancur, a doctoral candidate at the University of Adelaide, under the supervision of experienced researchers with international methodological expertise.",
  cta: { label: "View Full Team", href: "/team" },
} as const;

export const collaborators: CollaboratorTeaser[] = [
  {
    name: "Andrés F. Loaiza-Betancur",
    role: "PhD Candidate & Lead Researcher",
    affiliation: "JBI, School of Public Health, University of Adelaide",
  },
  {
    name: "Jennifer Stone",
    role: "Primary Supervisor",
    affiliation: "JBI, School of Public Health, University of Adelaide",
  },
  {
    name: "Peter Tugwell",
    role: "Methodological Advisor",
    affiliation: "University of Ottawa, Canada",
  },
  {
    name: "Paul A. Swinton",
    role: "Methodological Advisor",
    affiliation: "Robert Gordon University, Aberdeen, UK",
  },
] as const;

export const institutionContent = {
  heading: "Host Institution",
  paragraphs: [
    "This research is conducted within the Faculty of Health Sciences at the University of Adelaide, a member of Australia's prestigious Group of Eight (Go8) research-intensive universities.",
    "The project benefits from the University's research infrastructure, library resources, statistical consulting services, and ethics review processes — ensuring the highest standards of academic rigour throughout.",
  ],
} as const;
