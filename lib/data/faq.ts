// ── FAQ ──
// Frequently asked questions organised by audience category,
// addressing both researcher and participant concerns.

export interface FaqItem {
  id: string;
  category: "general" | "researcher" | "participant" | "clinical" | "outputs";
  question: string;
  answer: string;
}

export const FAQ_CATEGORY_META: Record<FaqItem["category"], {
  label: string;
  icon: string;
  description: string;
}> = {
  general: {
    label: "About the Research",
    icon: "📖",
    description:
      "General questions about the PhD research programme, its purpose, scope, and timeline.",
  },
  researcher: {
    label: "For Researchers",
    icon: "🔬",
    description:
      "Questions about methodology, collaboration, data access, and how to get involved as a researcher.",
  },
  participant: {
    label: "For Participants & Consumers",
    icon: "💬",
    description:
      "Practical questions about what participation involves, time commitment, privacy, and consumer involvement.",
  },
  clinical: {
    label: "For Clinicians & Practitioners",
    icon: "🩺",
    description:
      "Clinical relevance, implementation tools, CPD recognition, and how findings will reach practice.",
  },
  outputs: {
    label: "Research Outputs & Access",
    icon: "📄",
    description:
      "Questions about publications, open access, data sharing, and how to stay informed about findings.",
  },
};

export const heroContent = {
  eyebrow: "Frequently Asked Questions",
  title: "Questions About the Research Programme",
  subtitle:
    "Find answers to common questions about the study design, participation, collaboration opportunities, and how research findings will be shared. If your question isn't answered here, please get in touch.",
};

export const faqItems: FaqItem[] = [
  // ── General ──
  {
    id: "faq-gen-1",
    category: "general",
    question: "What is this PhD research programme about?",
    answer:
      "This research programme uses a multi-phase design to synthesise existing evidence, build expert consensus on best practice, and develop implementation strategies for translating evidence into clinical practice. It comprises three phases: a systematic/scoping review (Phase 1), a Delphi consensus study (Phase 2), and an implementation mapping study (Phase 3). The programme is a PhD candidature project supported by an Australian Government RTP Scholarship and conducted within the School of Public Health, University of Adelaide.",
  },
  {
    id: "faq-gen-2",
    category: "general",
    question: "What is the expected timeline for the research?",
    answer:
      "The PhD candidature is 3.5 years (February 2025 – August 2028). Phase 1 (systematic/scoping review) runs from mid-2025 through early 2027. Phase 2 (Delphi consensus) is expected August–November 2026. Phase 3 (implementation mapping) runs from early 2027 through mid-2028. Key outputs will be published throughout the programme — the protocol paper was published in late 2025, with systematic review and Delphi results following in 2026–2027.",
  },
  {
    id: "faq-gen-3",
    category: "general",
    question: "Who is funding this research?",
    answer:
      "The PhD candidate (J. Chen) is supported by an Australian Government Research Training Program (RTP) Stipend Scholarship. Additional institutional support comes from the University of Adelaide Faculty of Health and Medical Sciences, the Adelaide Graduate Research School, and a small School of Public Health research support grant. No commercial, pharmaceutical, or industry funding is involved. Full details are on the Acknowledgements & Funding page.",
  },
  {
    id: "faq-gen-4",
    category: "general",
    question: "Is this research ethically approved?",
    answer:
      "Yes. The research protocol has been approved by the University of Adelaide Human Research Ethics Committee (HREC reference: 2025/078). All phases of the research operate under this approval, and any amendments are submitted for ethics review before implementation. The protocol is also registered with PROSPERO (the international prospective register of systematic reviews) for the systematic review component.",
  },

  // ── Researcher ──
  {
    id: "faq-res-1",
    category: "researcher",
    question: "How can I collaborate on the systematic review?",
    answer:
      "Researchers with expertise in systematic review methodology, risk-of-bias assessment, or GRADE evidence rating are welcome to contribute as independent reviewers. Tasks typically include dual screening of records, risk-of-bias assessment, or GRADE certainty rating — each task is approximately 3–5 hours across 2–3 weeks. Contributors are acknowledged in publications, and substantial contributions may qualify for co-authorship under ICMJE criteria. Contact the research team via the Contact page to express interest.",
  },
  {
    id: "faq-res-2",
    category: "researcher",
    question: "Can I join the Delphi Expert Advisory Panel?",
    answer:
      "We are recruiting international experts in the relevant clinical domain, systematic review methodology, Delphi consensus methods, and implementation science. Panel members participate in three Delphi rounds via online questionnaires (total time commitment: 6–8 hours over approximately 4 months). Co-authorship on Delphi publications is offered to panel members who complete all three rounds. Recruitment is ongoing through mid-2026. Express interest via the Contact page.",
  },
  {
    id: "faq-res-3",
    category: "researcher",
    question: "Are the search strategies and data extraction tools available for reuse?",
    answer:
      "Yes. All search strategies, PRISMA flow diagrams, data extraction templates, and analysis scripts are shared openly under a CC BY 4.0 licence. You can download them from the Media & Downloads page. We encourage researchers conducting related evidence syntheses to reuse, adapt, and cite these materials. The full reproducible search strategies for all six databases are available as a downloadable ZIP file.",
  },
  {
    id: "faq-res-4",
    category: "researcher",
    question: "What publication outlets are planned?",
    answer:
      "Planned publications include: (1) a protocol paper (published 2025), (2) a scoping/systematic review paper with PRISMA-compliant reporting, (3) a Delphi consensus results paper following CREDES guidance, (4) an implementation mapping and strategy development paper, and (5) a PhD thesis by publication. Target journals are discipline-appropriate, peer-reviewed, and preferably open-access. Additional outputs may include methodology commentaries and conference presentations.",
  },

  // ── Participant ──
  {
    id: "faq-part-1",
    category: "participant",
    question: "What does participation in the Consumer Advisory Group involve?",
    answer:
      "Consumer Advisory Group (CAG) members attend quarterly online meetings (90–120 minutes each) where they review study materials, provide feedback from a lived-experience perspective, and co-design consumer-facing resources such as plain-language summaries and infographics. An honorarium is provided for each meeting attended. No research experience is required — training and support are offered. Membership is for 12 months, renewable. You can withdraw at any time without affecting your relationship with the University.",
  },
  {
    id: "faq-part-2",
    category: "participant",
    question: "How is my privacy and confidentiality protected?",
    answer:
      "All personal information is handled in accordance with the University of Adelaide Privacy Policy and the Australian Privacy Principles. CAG meeting discussions are confidential within the group. Individual Delphi panel responses are anonymised for analysis and reporting. No individual participant is identifiable in published outputs without explicit written consent. Data is stored on University secure servers with access restricted to the research team. The full data management plan is detailed in the research protocol.",
  },
  {
    id: "faq-part-3",
    category: "participant",
    question: "Do I need any special knowledge or qualifications to participate?",
    answer:
      "No. For the Consumer Advisory Group, the most important qualification is relevant lived experience — no research knowledge is required. For Delphi panel members, we do seek specific expertise (clinical, methodological, or implementation science), but this is assessed through a brief expression-of-interest process, not formal credential checks. All participation pathways include orientation materials and support.",
  },
  {
    id: "faq-part-4",
    category: "participant",
    question: "Can I withdraw from the study once I've agreed to participate?",
    answer:
      "Yes, absolutely. Participation is entirely voluntary and you may withdraw at any time without giving a reason and without any negative consequences. For Delphi panel members who withdraw mid-round, any responses already submitted may be retained for analysis (with your consent) but no further participation is expected. For CAG members, you can leave the group at any point. Withdrawal does not affect your relationship with the University or any services you receive.",
  },

  // ── Clinical ──
  {
    id: "faq-clin-1",
    category: "clinical",
    question: "How will the findings be relevant to my clinical practice?",
    answer:
      "The research programme is designed with clinical translation as a core aim. Phase 3 (implementation mapping) specifically engages clinicians to identify barriers to evidence uptake, co-design implementation strategies, and develop actionable clinical tools — such as decision aids, practice summaries, and implementation checklists. The goal is to produce outputs that are directly usable in clinical settings, not just academic publications. Clinicians are involved throughout the programme to ensure relevance.",
  },
  {
    id: "faq-clin-2",
    category: "clinical",
    question: "Can I earn CPD points by participating?",
    answer:
      "Continuing Professional Development (CPD) recognition may be available for participation in implementation mapping workshops and certain research events. The research team will seek CPD accreditation through relevant professional colleges for workshops and webinars where eligible. Specific CPD details will be communicated to registered participants when events are confirmed. Contact the team for information about CPD eligibility for specific activities.",
  },
  {
    id: "faq-clin-3",
    category: "clinical",
    question: "How can busy clinicians stay informed without a major time commitment?",
    answer:
      "We offer a quarterly email digest tailored for clinicians — key findings in 2-minute summaries, new clinician-focused resources (two-page summaries, decision aids), and invitations to CPD-eligible events. This is 4–6 emails per year, designed to be read in under 5 minutes. You can also access clinician-focused downloads (including the two-page protocol summary) directly from the Media & Downloads page. Subscribe via the Study Updates page.",
  },

  // ── Outputs ──
  {
    id: "faq-out-1",
    category: "outputs",
    question: "Will publications be open access?",
    answer:
      "Wherever possible, yes. Open-access publication is a priority for this research programme, consistent with the University of Adelaide's Open Access Policy and the Australian NHMRC Open Access Policy. The School of Public Health research support grant includes provision for open-access article processing charges. Where publisher embargoes apply, accepted manuscripts will be deposited in the University's institutional repository (Adelaide Research & Scholarship) for green open access.",
  },
  {
    id: "faq-out-2",
    category: "outputs",
    question: "How can I access the full research protocol?",
    answer:
      "The complete research protocol document (v1.0) is available for download from the Media & Downloads page as a PDF. A summary version is also available. The protocol has been published as a protocol paper in a peer-reviewed journal, with the DOI available on the Publications page. The PROSPERO registration record for the systematic review component is also publicly accessible.",
  },
  {
    id: "faq-out-3",
    category: "outputs",
    question: "When and how will findings be shared with the public?",
    answer:
      "Findings are shared through multiple channels: (1) peer-reviewed publications (with plain-language summaries wherever journals permit), (2) public-facing events including webinars and an end-of-programme public symposium, (3) plain-language infographics and summaries downloadable from the Media & Downloads page, (4) the Study Updates page and quarterly email digest, and (5) policy briefs for health system decision-makers. Recordings of public webinars are made available afterwards. All public-facing materials are developed with input from the Consumer Advisory Group.",
  },
  {
    id: "faq-out-4",
    category: "outputs",
    question: "How should I cite this research programme?",
    answer:
      "Suggested citation format: Chen, J., Mitchell, S., Reynolds, D., & Hartmann, L. (2025). [Title of specific output]. PhD Research Programme, School of Public Health, University of Adelaide. For the overall programme, cite the protocol paper (DOI available on the Publications page). A suggested acknowledgement line for funders is provided on the Acknowledgements & Funding page.",
  },
];