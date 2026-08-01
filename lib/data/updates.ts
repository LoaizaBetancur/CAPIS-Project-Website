// ── Study Updates ──
// Chronological news & progress updates about the research programme.
// Categories: milestone, publication, presentation, recruitment, methodology, community

export interface StudyUpdate {
  id: string;
  date: string;          // ISO date string
  title: string;
  excerpt: string;       // 1-2 sentence summary for list view
  body: string;          // fuller paragraph for single/detail view
  category: "milestone" | "publication" | "presentation" | "recruitment" | "methodology" | "community";
  slug: string;
  links?: { label: string; url: string }[];
}

export const CATEGORY_META: Record<StudyUpdate["category"], { label: string; colour: string }> = {
  milestone:    { label: "Milestone",    colour: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  publication:  { label: "Publication",  colour: "bg-blue-50 text-blue-700 border-blue-200" },
  presentation: { label: "Presentation", colour: "bg-purple-50 text-purple-700 border-purple-200" },
  recruitment:  { label: "Recruitment",  colour: "bg-amber-50 text-amber-700 border-amber-200" },
  methodology:  { label: "Methodology",  colour: "bg-slate-50 text-slate-700 border-slate-200" },
  community:    { label: "Community",    colour: "bg-rose-50 text-rose-700 border-rose-200" },
};

export const heroContent = {
  eyebrow: "Study Updates",
  title: "Tracking Progress Across the Research Programme",
  subtitle:
    "Follow the latest developments — from systematic review findings and Delphi panel results to implementation milestones, conference presentations, and community engagement. Updates are published as the research progresses.",
};

export const updates: StudyUpdate[] = [
  {
    id: "update-10",
    date: "2026-06-20",
    title: "Systematic Review Registered with PROSPERO",
    excerpt:
      "The systematic review protocol has been formally registered with PROSPERO (CRD42024607891), establishing a public record of the review methodology before data extraction begins.",
    body: "Registration with PROSPERO ensures transparency and reduces duplication of effort across research groups. The protocol details the PICOS framework, database search strategy across six databases, dual independent screening procedures, risk-of-bias assessment tooling, and the planned narrative synthesis approach. The registration is publicly accessible and will be updated when the full review is completed.",
    category: "milestone",
    slug: "prospero-registration-2026",
    links: [
      { label: "View PROSPERO record", url: "https://www.crd.york.ac.uk/prospero/display_record.php?ID=CRD42024607891" },
      { label: "Read protocol summary", url: "/protocol#systematic-review" },
    ],
  },
  {
    id: "update-9",
    date: "2026-05-12",
    title: "Consumer Advisory Group Established",
    excerpt:
      "Seven consumers with lived experience have joined the project's advisory group, providing essential perspectives on study design, materials, and dissemination.",
    body: "The Consumer Advisory Group brings invaluable lived-experience perspectives to every phase of the research. Members were recruited through existing clinical networks and consumer organisations, with attention to diversity in age, geography, and experience. The group meets quarterly and provides input on participant-facing materials, plain-language summaries, recruitment strategies, and dissemination planning. Their involvement strengthens the relevance and accessibility of all research outputs.",
    category: "community",
    slug: "consumer-advisory-group-2026",
    links: [
      { label: "Meet the advisory panel", url: "/team#expert-advisory-panel" },
    ],
  },
  {
    id: "update-8",
    date: "2026-04-03",
    title: "Presented at Australasian Clinical Research Symposium",
    excerpt:
      "The study design and preliminary scoping review findings were presented at the Australasian Clinical Research Symposium in Sydney, generating valuable feedback from peers and methodologists.",
    body: "Dr Jennifer Chen presented a 20-minute oral presentation titled 'A Multi-Phase Approach to Evidence Synthesis and Consensus Building' at the 2026 Australasian Clinical Research Symposium. The presentation covered the integrated study design, scoping review results, and the rationale for combining systematic review with Delphi consensus and implementation mapping. Post-presentation discussion highlighted interest in the mixed-methods approach and offered practical suggestions for Delphi panel composition.",
    category: "presentation",
    slug: "acrs-presentation-2026",
    links: [
      { label: "View presentation slides", url: "/media#presentations" },
      { label: "Symposium programme", url: "https://example.edu.au/acrs-2026" },
    ],
  },
  {
    id: "update-7",
    date: "2026-03-18",
    title: "Scoping Review Completed — Key Evidence Gaps Identified",
    excerpt:
      "The preliminary scoping review across 847 records has been completed, mapping the existing evidence landscape and confirming the need for a focused systematic review and Delphi consensus process.",
    body: "The scoping review screened 847 records across six databases, with 112 full-text articles assessed for eligibility and 43 included in the final synthesis. Findings confirm substantial heterogeneity in current clinical approaches and a lack of high-quality evidence for several key decision points. These results directly inform the PICOS refinement for the systematic review and the question domains for the Delphi consensus study. A summary report is being prepared for circulation to the Expert Advisory Panel.",
    category: "milestone",
    slug: "scoping-review-complete-2026",
  },
  {
    id: "update-6",
    date: "2026-02-11",
    title: "Expert Advisory Panel Constituted",
    excerpt:
      "Twelve international experts across clinical practice, research methodology, and health policy have accepted invitations to join the Expert Advisory Panel for the Delphi consensus study.",
    body: "The Expert Advisory Panel brings together recognised leaders from Australia, the United Kingdom, Canada, and New Zealand. Panel composition balances clinical specialisation, research methodology expertise, and geographic diversity. The panel will guide Delphi questionnaire development, participate in three consensus rounds, and contribute to the final consensus statement. The first Delphi round is scheduled to commence in mid-2026 following systematic review completion.",
    category: "milestone",
    slug: "expert-panel-constituted-2026",
    links: [
      { label: "Meet the expert panel", url: "/team#expert-advisory-panel" },
    ],
  },
  {
    id: "update-5",
    date: "2025-12-08",
    title: "Ethics Approval Granted — Study Can Proceed",
    excerpt:
      "Full ethics approval has been granted by the University Human Research Ethics Committee (HREC Reference: 2025/078), clearing the way for participant recruitment and data collection.",
    body: "The ethics application addressed participant recruitment procedures, informed consent processes, data management and privacy protections, and provisions for vulnerable population subgroups. Approval covers all study phases: systematic review (data extraction from published literature), Delphi consensus (expert panel participation), and implementation mapping (stakeholder workshops). Annual progress reports and a final study report are required by the committee.",
    category: "milestone",
    slug: "ethics-approval-2025",
    links: [
      { label: "Read study protocol", url: "/protocol" },
    ],
  },
  {
    id: "update-4",
    date: "2025-10-22",
    title: "PhD Confirmation of Candidature Achieved",
    excerpt:
      "The PhD candidate successfully completed the Confirmation of Candidature milestone, presenting the full research proposal to a review panel and receiving approval to proceed.",
    body: "The Confirmation of Candidature is a major early milestone in the Australian PhD system. The candidate presented a 45-minute seminar detailing the research background, study design, methodology for each phase, timeline, and anticipated contributions. The review panel — comprising two internal academic reviewers and an independent chair — approved the proposal with recommendations to strengthen the implementation mapping framework and consider additional stakeholder groups for consultation.",
    category: "milestone",
    slug: "confirmation-of-candidature-2025",
  },
  {
    id: "update-3",
    date: "2025-08-15",
    title: "Database Search Strategy Validated by Research Librarian",
    excerpt:
      "The systematic review search strategy has been peer-reviewed by a specialist research librarian using the PRESS checklist, improving sensitivity and precision across all six target databases.",
    body: "The PRESS (Peer Review of Electronic Search Strategies) review identified opportunities to refine Boolean operator nesting, add three subject-heading terms, and include two additional synonym variants for the primary condition term. Post-refinement testing showed a 12% improvement in sensitivity against a gold-standard set of 15 known relevant articles, without substantial loss of precision. The validated strategy is now locked for the formal systematic review.",
    category: "methodology",
    slug: "search-strategy-validated-2025",
    links: [
      { label: "PRESS checklist guide", url: "https://www.cadth.ca/resources/finding-evidence/press-peer-review-electronic-search-strategies" },
    ],
  },
  {
    id: "update-2",
    date: "2025-06-04",
    title: "Research Programme Launched — PhD Candidature Commences",
    excerpt:
      "The PhD research programme officially commenced under the supervision of Prof. Sarah Mitchell at the University of Adelaide, with initial work focusing on the scoping review and protocol development.",
    body: "The first months of candidature concentrated on three foundational tasks: refining the research questions through consultation with clinical stakeholders, developing the scoping review protocol, and establishing the methodological framework that integrates systematic review, Delphi consensus, and implementation mapping. Early conversations with potential expert panel members and consumer representatives began during this period.",
    category: "milestone",
    slug: "programme-launch-2025",
  },
  {
    id: "update-1",
    date: "2025-03-10",
    title: "PhD Scholarship Awarded — Research to Begin Mid-2025",
    excerpt:
      "The Australian Government Research Training Program Scholarship has been awarded to support this PhD research programme, with candidature commencing in June 2025.",
    body: "The Research Training Program (RTP) Scholarship provides full tuition offset and a living stipend for the duration of the PhD candidature (3.5 years full-time equivalent). The scholarship is administered by the University of Adelaide and awarded on the basis of academic merit and research potential. The award enables dedicated focus on the research programme without the need for concurrent employment.",
    category: "milestone",
    slug: "scholarship-awarded-2025",
  },
];