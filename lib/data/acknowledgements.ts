// ── Acknowledgements & Funding ──
// Funding bodies, institutional support, scholarly acknowledgements,
// and contributor credits for the research programme.

export interface FundingSource {
  id: string;
  name: string;
  type: "scholarship" | "grant" | "institutional" | "in-kind";
  description: string;
  logoText?: string; // text-based placeholder until logo assets are available
  url?: string;
}

export interface AcknowledgementGroup {
  id: string;
  heading: string;
  icon: string;
  entries: {
    name: string;
    role?: string;
    affiliation?: string;
    contribution?: string;
    url?: string;
  }[];
}

export const heroContent = {
  eyebrow: "Acknowledgements & Funding",
  title: "With Gratitude to Those Who Make This Research Possible",
  subtitle:
    "This research programme is supported by scholarships, institutional resources, expert collaborators, and community contributors. We acknowledge the traditional owners of the lands on which this research is conducted and pay respect to Elders past and present.",
};

export const fundingSources: FundingSource[] = [
  {
    id: "fund-1",
    name: "Research Training Program (RTP) Scholarship",
    type: "scholarship",
    description:
      "The Australian Government Research Training Program (RTP) Stipend Scholarship provides tuition fee offset and a living allowance stipend, enabling full-time PhD candidature. Awarded 2025, duration 3.5 years with possible 6-month extension.",
    logoText: "RTP",
    url: "https://www.education.gov.au/research-training-program",
  },
  {
    id: "fund-2",
    name: "University of Adelaide — Faculty of Health and Medical Sciences",
    type: "institutional",
    description:
      "The Faculty provides research infrastructure, supervisor stipends, library and database access, statistical consulting services, HDR training and development programmes, and administrative support for ethics and governance processes.",
    logoText: "FMHS",
    url: "https://health.adelaide.edu.au/",
  },
  {
    id: "fund-3",
    name: "University of Adelaide — Adelaide Graduate Research School",
    type: "institutional",
    description:
      "The AGRS administers the RTP Scholarship, provides candidature management, research skills training (CaRST), conference travel funding, and examination support. The PhD Confirmation of Candidature process was supported by AGRS resources.",
    logoText: "AGRS",
    url: "https://www.adelaide.edu.au/graduate-research/",
  },
  {
    id: "fund-4",
    name: "University Library — Systematic Review Service",
    type: "in-kind",
    description:
      "Research librarians at the University of Adelaide Library provided expert consultation on database selection, search strategy development, and PRESS peer review of the systematic review search strategies. In-kind support valued at approximately 25 librarian hours.",
    logoText: "UAL",
    url: "https://www.adelaide.edu.au/library/",
  },
  {
    id: "fund-5",
    name: "School of Public Health — Research Support Fund",
    type: "grant",
    description:
      "A small research support grant from the School of Public Health (2025 round) provided funding for conference registration (Australasian Clinical Research Symposium 2026), open-access publication fees, and consumer engagement honoraria.",
    logoText: "SPH",
  },
];

export const acknowledgementGroups: AcknowledgementGroup[] = [
  {
    id: "ack-supervisors",
    heading: "Supervisory Team",
    icon: "🎓",
    entries: [
      {
        name: "Associate Professor Sarah Mitchell",
        role: "Principal Supervisor",
        affiliation: "School of Public Health, University of Adelaide",
        contribution:
          "Conceptualisation of the multi-phase study design, methodological oversight across all three phases, Delphi consensus expertise, and primary supervisory guidance throughout candidature.",
      },
      {
        name: "Professor David Reynolds",
        role: "Co-Supervisor",
        affiliation: "School of Public Health, University of Adelaide",
        contribution:
          "Systematic review methodology expertise, GRADE evidence certainty assessment guidance, implementation science framework integration, and manuscript review.",
      },
      {
        name: "Dr Lisa Hartmann",
        role: "Co-Supervisor (External)",
        affiliation: "Clinical Research Unit, Royal Adelaide Hospital",
        contribution:
          "Clinical domain expertise, clinician recruitment strategy, implementation mapping workshop design, and translation-to-practice guidance.",
      },
    ],
  },
  {
    id: "ack-experts",
    heading: "Expert Advisory Panel",
    icon: "🧑‍🔬",
    entries: [
      {
        name: "Expert Advisory Panel Members",
        role: "Delphi consensus study (Phase 2)",
        contribution:
          "International panel of clinical, methodological, and implementation science experts who will contribute to three Delphi rounds. Members are acknowledged by name (with permission) in resulting publications.",
      },
    ],
  },
  {
    id: "ack-consumers",
    heading: "Consumer Advisory Group",
    icon: "💬",
    entries: [
      {
        name: "Consumer Advisory Group Members",
        role: "Consumer engagement and co-design",
        contribution:
          "Members with relevant lived experience who provide input on study materials, co-design plain-language resources, and ensure the research remains grounded in what matters to consumers. Members are acknowledged by name (with permission) in publications and on this website.",
      },
    ],
  },
  {
    id: "ack-librarians",
    heading: "Research Librarians & Methodology Support",
    icon: "📚",
    entries: [
      {
        name: "University of Adelaide Library — Health Sciences Team",
        contribution:
          "Expert consultation on systematic review search strategy design, database selection, PRESS peer review of search strategies, and EndNote library management support.",
      },
      {
        name: "Statistical Consulting Service",
        affiliation: "University of Adelaide",
        contribution:
          "Advisory support on meta-analysis planning, heterogeneity assessment methods, and Delphi consensus threshold calculation.",
      },
    ],
  },
  {
    id: "ack-colleagues",
    heading: "Colleagues & Peer Reviewers",
    icon: "🤝",
    entries: [
      {
        name: "School of Public Health HDR Cohort",
        affiliation: "University of Adelaide",
        contribution:
          "Peer feedback on Confirmation of Candidature documents, presentation rehearsal support, and ongoing collegial exchange throughout the research programme.",
      },
      {
        name: "Anonymous Peer Reviewers",
        contribution:
          "Reviewers who provided constructive feedback on the published protocol paper and systematic review registration, strengthening the methodological rigour of the programme.",
      },
    ],
  },
  {
    id: "ack-land",
    heading: "Land & Traditional Owners Acknowledgement",
    icon: "🌏",
    entries: [
      {
        name: "Kaurna People",
        role: "Traditional Owners",
        contribution:
          "This research is conducted on Kaurna Country, the traditional lands of the Kaurna people of the Adelaide Plains. We pay our respects to Kaurna Elders past and present and acknowledge that sovereignty was never ceded. We recognise the ongoing connection of Aboriginal and Torres Strait Islander peoples to Country, culture, and community.",
        url: "https://www.adelaide.edu.au/reconciliation/",
      },
    ],
  },
  {
    id: "ack-declaration",
    heading: "Declaration of Interests",
    icon: "⚖️",
    entries: [
      {
        name: "Funding Declaration",
        contribution:
          "The PhD candidate (J. Chen) receives an Australian Government RTP Stipend Scholarship. No commercial, pharmaceutical, or industry funding is associated with this research programme. No funder has had any role in study design, data collection, analysis, interpretation, or the decision to publish.",
      },
      {
        name: "Competing Interests Declaration",
        contribution:
          "The research team declares no competing interests. Supervisor S. Mitchell has previously received unrelated research funding from NHMRC and the Australian Department of Health. These are disclosed for transparency and have no bearing on the current research programme.",
      },
    ],
  },
];