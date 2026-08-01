// ── Events ──
// Research programme events: conferences, workshops, webinars, meetings.
// Split into upcoming (future) and past for dual-section layout.

export interface ResearchEvent {
  id: string;
  title: string;
  date: string;          // ISO date string
  endDate?: string;      // ISO date string for multi-day events
  time?: string;         // e.g. "09:00–17:00 AEDT"
  location: string;      // venue, city, or "Online (Zoom)"
  description: string;
  type: "conference" | "workshop" | "webinar" | "meeting" | "symposium";
  registrationUrl?: string;
  programmeUrl?: string;
  recordingUrl?: string; // for past events
  slidesUrl?: string;    // for past events
  featured?: boolean;
}

export const TYPE_META: Record<ResearchEvent["type"], { label: string; icon: string }> = {
  conference: { label: "Conference", icon: "🏛" },
  workshop:   { label: "Workshop",   icon: "🛠" },
  webinar:    { label: "Webinar",    icon: "💻" },
  meeting:    { label: "Meeting",    icon: "🤝" },
  symposium:  { label: "Symposium",  icon: "🎓" },
};

export const heroContent = {
  eyebrow: "Events",
  title: "Conferences, Workshops & Community Engagement",
  subtitle:
    "The research programme engages with academic, clinical, and consumer communities through conferences, workshops, webinars, advisory panel meetings, and public symposia. All events are listed below — recordings and slides are available for past events where permission has been granted.",
};

export const upcomingEvents: ResearchEvent[] = [
  {
    id: "evt-up-4",
    title: "Consumer Advisory Group Meeting — Q3 2026",
    date: "2026-09-15",
    time: "14:00–16:00 ACST",
    location: "Online (Zoom) — link provided to members",
    description:
      "Quarterly meeting of the Consumer Advisory Group. Agenda items include review of plain-language summary templates, feedback on recruitment materials for Study Phase 3, and planning for the public symposium. Closed meeting for appointed consumer representatives; observers may attend by invitation.",
    type: "meeting",
  },
  {
    id: "evt-up-3",
    title: "Delphi Consensus Methods Workshop",
    date: "2026-08-22",
    time: "10:00–15:30 ACST",
    location: "University of Adelaide, North Terrace Campus — Room 507, Schulz Building",
    description:
      "A hands-on workshop for researchers and postgraduate students interested in Delphi consensus methodology. Covers panel composition, questionnaire design, feedback structuring, and consensus threshold selection. Includes a practical exercise designing a Delphi round using the RAND/UCLA Appropriateness Method. Morning tea and lunch provided.",
    type: "workshop",
    registrationUrl: "https://example.edu.au/delphi-workshop-2026",
  },
  {
    id: "evt-up-2",
    title: "Implementation Science Webinar — Mapping Barriers to Evidence Uptake",
    date: "2026-07-30",
    time: "12:00–13:00 ACST",
    location: "Online (Zoom) — open to all",
    description:
      "A lunchtime webinar exploring the Consolidated Framework for Implementation Research (CFIR) and its application to clinical guideline adherence. Dr Jennifer Chen presents the implementation mapping methodology planned for Study Phase 3, followed by Q&A with clinicians and implementation practitioners.",
    type: "webinar",
    registrationUrl: "https://example.edu.au/implementation-webinar-2026",
  },
  {
    id: "evt-up-1",
    title: "Annual Higher Degree by Research Symposium",
    date: "2026-07-15",
    time: "09:00–17:00 ACST",
    location: "Ingkarni Wardli Conference Centre, University of Adelaide",
    description:
      "The university's annual showcase of postgraduate research across all faculties. The PhD candidate will present a poster on the integrated study design and preliminary findings from the systematic review. Open to university staff, students, and invited guests.",
    type: "symposium",
    registrationUrl: "https://example.edu.au/hdr-symposium-2026",
  },
];

export const pastEvents: ResearchEvent[] = [
  {
    id: "evt-past-7",
    title: "Expert Advisory Panel — Round 1 Orientation",
    date: "2026-04-28",
    time: "16:00–17:30 ACST / 07:30–09:00 BST / 01:30–03:00 EST",
    location: "Online (Zoom) — panel members only",
    description:
      "Orientation session for the newly constituted Expert Advisory Panel. Covered the Delphi consensus process overview, expected time commitment across three rounds, questionnaire format, and confidentiality expectations. Panel members received the scoping review summary and draft PICO framework for background reading.",
    type: "meeting",
  },
  {
    id: "evt-past-6",
    title: "Australasian Clinical Research Symposium 2026",
    date: "2026-04-03",
    endDate: "2026-04-04",
    location: "International Convention Centre, Sydney",
    description:
      "Two-day national symposium covering clinical research methodology, evidence translation, and health services research. Dr Jennifer Chen presented 'A Multi-Phase Approach to Evidence Synthesis and Consensus Building' in the Methodology Innovations session. Valuable feedback received on Delphi panel diversity considerations.",
    type: "conference",
    programmeUrl: "https://example.edu.au/acrs-2026",
    slidesUrl: "/media#presentations",
    featured: true,
  },
  {
    id: "evt-past-5",
    title: "Consumer Advisory Group Meeting — Q1 2026",
    date: "2026-02-14",
    time: "13:00–15:00 ACDT",
    location: "Online (Zoom)",
    description:
      "Inaugural meeting of the Consumer Advisory Group. Introductions, terms of reference, and initial discussion of study materials from the consumer perspective. Members provided feedback on recruitment flyer wording and suggested additional consumer-facing resources for the project website.",
    type: "meeting",
  },
  {
    id: "evt-past-4",
    title: "Systematic Review Methodology Workshop",
    date: "2025-11-20",
    time: "09:30–16:30 ACDT",
    location: "Barr Smith Library, University of Adelaide",
    description:
      "Full-day workshop on systematic review methods delivered by the university's research librarians and the Joanna Briggs Institute (JBI) Adelaide GRADE Centre. Covered database searching, PRISMA 2020 compliance, risk-of-bias assessment using ROB 2 and ROBINS-I, and GRADE evidence certainty ratings.",
    type: "workshop",
    featured: true,
  },
  {
    id: "evt-past-3",
    title: "PhD Confirmation Seminar",
    date: "2025-10-22",
    time: "14:00–15:30 ACDT",
    location: "Room 402, Adelaide Health and Medical Sciences Building",
    description:
      "Formal Confirmation of Candidature seminar presented to the review panel. The 45-minute presentation covered research background, integrated study design, methodology for each phase, timeline, and anticipated contributions to clinical practice and policy.",
    type: "meeting",
    slidesUrl: "/media#presentations",
  },
  {
    id: "evt-past-2",
    title: "Clinical Stakeholder Consultation Workshop",
    date: "2025-07-08",
    time: "10:00–13:00 ACST",
    location: "Online (Microsoft Teams)",
    description:
      "Consultation workshop with 15 clinical stakeholders from three Australian states to refine the research questions, identify priority outcome domains, and discuss barriers to evidence uptake in current practice. Outputs directly informed the PICOS framework and Delphi question domains.",
    type: "workshop",
    featured: true,
  },
  {
    id: "evt-past-1",
    title: "Research Programme Commencement Meeting",
    date: "2025-06-04",
    time: "11:00–12:00 ACST",
    location: "Supervisor's Office, University of Adelaide",
    description:
      "Initial planning meeting with the supervisory panel to establish the research timeline, milestone schedule, and resource requirements. Agreed on the three-phase integrated study design and identified key clinical and methodological contacts for the Expert Advisory Panel.",
    type: "meeting",
  },
];

/* ── Helper — segregates events by today ── */
export function isUpcoming(event: ResearchEvent): boolean {
  return new Date(event.date) >= new Date();
}

export function isPast(event: ResearchEvent): boolean {
  return new Date(event.date) < new Date();
}