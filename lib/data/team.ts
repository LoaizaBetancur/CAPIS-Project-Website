/**
 * Team page content — source-of-truth data.
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
  eyebrow: "Study Team",
  title: "The People Behind the Research",
  subtitle:
    "This project brings together doctoral researchers and experienced supervisors from Australia, Canada, and the United Kingdom — each contributing essential expertise to ensure the research is rigorous, relevant, and grounded in real-world athletic performance needs.",
  primaryCta: { label: "Contact Us", href: "mailto:andresfelipe.loaizabetancur@adelaide.edu.au" },
  secondaryCta: { label: "View Protocol", href: "/resources/researchers" },
} as const;

export const coreTeam: TeamCategory = {
  heading: "Core Research Team",
  description:
    "The CAPIS project is led by a doctoral candidate at the University of Adelaide, with methodological guidance from international experts in core outcome set development and evidence synthesis.",
  members: [
    {
      name: "Andrés F. Loaiza-Betancur",
      role: "PhD Candidate & Lead Researcher",
      affiliation: "JBI, School of Public Health, University of Adelaide, Australia",
      bio: "Andrés leads all phases of the CAPIS research programme — from the scoping review and focus groups through to the Delphi consensus and dissemination. He is supported by an Adelaide University research scholarship.",
      email: "andresfelipe.loaizabetancur@adelaide.edu.au",
      category: "core",
    },
    {
      name: "Jennifer Stone",
      role: "Primary Supervisor",
      affiliation: "JBI, School of Public Health, University of Adelaide, Australia",
      bio: "Jennifer provides overall methodological guidance for the CAPIS project, contributing expertise in evidence synthesis, systematic review methodology, and implementation science.",
      email: "j.stone@adelaide.edu.au",
      category: "core",
    },
    {
      name: "Peter Tugwell",
      role: "Methodological Advisor",
      affiliation: "University of Ottawa, Canada",
      bio: "Peter contributes methodological expertise in core outcome set development, GRADE methodology, and health services research from the Bruyere Research Institute and Ottawa Hospital Research Institute.",
      email: "ptugwell@uottawa.ca",
      category: "core",
    },
    {
      name: "Paul A. Swinton",
      role: "Methodological Advisor",
      affiliation: "School of Health, Robert Gordon University, Aberdeen, UK",
      bio: "Paul provides methodological guidance on evidence synthesis, meta-analysis, and Delphi study design for the CAPIS project.",
      email: "p.swinton@rgu.ac.uk",
      category: "core",
    },
  ],
};

export const teamCategories: TeamCategory[] = [coreTeam] as const;
