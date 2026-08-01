// ── Contact ──
// Contact page content: enquiry types, institutional contact details,
// and metadata for the contact form.

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
  icon: string;
}

export interface EnquiryType {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export const heroContent = {
  eyebrow: "Contact",
  title: "Get in Touch with the Research Team",
  subtitle:
    "Whether you're interested in collaborating, participating, accessing research materials, or simply have a question — we'd like to hear from you. We aim to respond within 3–5 business days.",
};

export const contactDetails: ContactDetail[] = [
  {
    label: "Email",
    value: "phd-research@adelaide.edu.au",
    href: "mailto:phd-research@adelaide.edu.au",
    icon: "✉️",
  },
  {
    label: "Location",
    value: "School of Public Health, University of Adelaide, Adelaide SA 5005, Australia",
    icon: "📍",
  },
  {
    label: "Office Hours",
    value: "Monday–Friday, 9:00 am – 5:00 pm (ACST)",
    icon: "🕐",
  },
  {
    label: "ORCID",
    value: "0000-0002-1234-5678",
    href: "https://orcid.org/0000-0002-1234-5678",
    icon: "🆔",
  },
];

export const enquiryTypes: EnquiryType[] = [
  {
    id: "collaboration",
    label: "Research Collaboration",
    description:
      "Interest in joining the Delphi panel, contributing to systematic review screening, or collaborating on implementation research.",
    icon: "🔬",
  },
  {
    id: "participation",
    label: "Consumer or Community Participation",
    description:
      "Interest in joining the Consumer Advisory Group, attending consumer events, or contributing a lived-experience perspective.",
    icon: "💬",
  },
  {
    id: "resources",
    label: "Resources & Access",
    description:
      "Requesting research materials, accessible formats, permission for reuse, or a tailored policy briefing.",
    icon: "📄",
  },
  {
    id: "media",
    label: "Media & Press Enquiry",
    description:
      "Media requests, interview enquiries, or press access to research findings and expert commentary.",
    icon: "📰",
  },
  {
    id: "general",
    label: "General Enquiry",
    description:
      "Questions about the research programme, study updates, or anything not covered above.",
    icon: "❓",
  },
];