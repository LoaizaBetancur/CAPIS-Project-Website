// ── Media & Downloads ──
// Presentation materials, recordings, infographics, press coverage,
// and downloadable assets for the research programme.

export interface MediaItem {
  id: string;
  title: string;
  date: string;          // ISO date string
  description: string;
  category: "presentation" | "recording" | "infographic" | "press" | "dataset";
  thumbnailUrl?: string;  // local path to SVG thumbnail
  downloadUrl?: string;
  externalUrl?: string;
  fileSize?: string;      // e.g. "2.4 MB PDF"
  fileType?: string;      // e.g. "PDF", "PPTX", "MP4", "CSV"
  venue?: string;         // conference/symposium name
  authors?: string;
}

export const CATEGORY_META: Record<MediaItem["category"], { label: string; icon: string }> = {
  presentation: { label: "Presentation", icon: "📊" },
  recording:    { label: "Recording",    icon: "🎥" },
  infographic:  { label: "Infographic",  icon: "📌" },
  press:        { label: "Press",        icon: "📰" },
  dataset:      { label: "Dataset",       icon: "📁" },
};

export const heroContent = {
  eyebrow: "Media & Downloads",
  title: "Presentations, Recordings, Infographics & Research Assets",
  subtitle:
    "Access conference presentations, webinar recordings, data visualisations, plain-language infographics, and downloadable research datasets. Materials are added as the research programme progresses — check back or subscribe to updates for new releases.",
};

export const mediaItems: MediaItem[] = [
  {
    id: "media-10",
    title: "Study Logic Model — Visual Overview",
    date: "2026-05-28",
    description:
      "A one-page infographic depicting the integrated three-phase study design: systematic review → Delphi consensus → implementation mapping. Designed for stakeholder briefings and plain-language communication.",
    category: "infographic",
    downloadUrl: "/downloads/logic-model-infographic.pdf",
    fileSize: "1.1 MB",
    fileType: "PDF",
  },
  {
    id: "media-9",
    title: "Consumer Advisory Group — Terms of Reference",
    date: "2026-02-14",
    description:
      "The formal Terms of Reference document governing the Consumer Advisory Group, including membership, meeting frequency, confidentiality provisions, and reporting structure.",
    category: "presentation",
    downloadUrl: "/downloads/cag-tor.pdf",
    fileSize: "340 KB",
    fileType: "PDF",
  },
  {
    id: "media-8",
    title: "Scoping Review PRISMA-ScR Flow Diagram",
    date: "2026-03-18",
    description:
      "PRISMA-ScR compliant flow diagram documenting the scoping review screening process: 847 records identified, 112 full-text assessed, 43 included in synthesis.",
    category: "infographic",
    downloadUrl: "/downloads/prisma-scr-flow.pdf",
    fileSize: "420 KB",
    fileType: "PDF",
  },
  {
    id: "media-7",
    title: "Database Search Strategies — Full Reproducible Set",
    date: "2026-01-15",
    description:
      "Complete reproducible search strategies for all six databases (MEDLINE, Embase, CINAHL, PsycINFO, Cochrane CENTRAL, Web of Science), including PRESS-validated refinements. Provided in plain text and RIS format.",
    category: "dataset",
    downloadUrl: "/downloads/search-strategies-2026.zip",
    fileSize: "180 KB",
    fileType: "ZIP (TXT + RIS)",
  },
  {
    id: "media-6",
    title: "A Multi-Phase Approach to Evidence Synthesis and Consensus Building",
    date: "2026-04-03",
    description:
      "Conference presentation delivered at the Australasian Clinical Research Symposium 2026 (Sydney). Covers the integrated study design and preliminary scoping review findings. 24 slides.",
    category: "presentation",
    downloadUrl: "/downloads/acrs-2026-presentation.pdf",
    fileSize: "3.8 MB",
    fileType: "PDF",
    venue: "Australasian Clinical Research Symposium, Sydney",
    authors: "Chen, J., Mitchell, S.",
  },
  {
    id: "media-5",
    title: "Protocol Summary — Two-Page Brief for Clinicians",
    date: "2026-02-01",
    description:
      "A concise two-page summary of the research protocol tailored for busy clinicians. Covers the rationale, study phases, expected timeline, and clinical relevance. Ideal for printing and sharing within clinical teams.",
    category: "infographic",
    downloadUrl: "/downloads/protocol-summary-clinicians.pdf",
    fileSize: "280 KB",
    fileType: "PDF",
  },
  {
    id: "media-4",
    title: "Plain-Language Research Summary for Consumers",
    date: "2026-02-01",
    description:
      "A four-page plain-language summary explaining the research programme in accessible terms. Covers why the research matters, what participation involves, who is involved, and how findings will be shared. Developed with input from the Consumer Advisory Group.",
    category: "infographic",
    downloadUrl: "/downloads/plain-language-summary.pdf",
    fileSize: "460 KB",
    fileType: "PDF",
  },
  {
    id: "media-3",
    title: "University Research Showcase — PhD Confirmation Poster",
    date: "2025-10-22",
    description:
      "A1 research poster presented at the PhD Confirmation of Candidature seminar. Summarises the multi-phase study design, key references, and anticipated contributions. Suitable for display at departmental events.",
    category: "presentation",
    downloadUrl: "/downloads/confirmation-poster.pdf",
    fileSize: "2.1 MB",
    fileType: "PDF (A1)",
    venue: "University of Adelaide, Confirmation of Candidature",
    authors: "Chen, J.",
  },
  {
    id: "media-2",
    title: "Research Programme Press Release",
    date: "2025-06-20",
    description:
      "University media release announcing the commencement of the PhD research programme and the RTP Scholarship award. Published on the University of Adelaide newsroom and picked up by two clinical profession newsletters.",
    category: "press",
    externalUrl: "https://example.edu.au/newsroom/phd-research-programme-2025",
    venue: "University of Adelaide Newsroom",
  },
  {
    id: "media-1",
    title: "Protocol PDF — Full Research Protocol (v1.0)",
    date: "2025-12-08",
    description:
      "The complete research protocol document as approved by the University Human Research Ethics Committee (HREC: 2025/078). Contains the full background, methodology for all three study phases, data management plan, timeline, and references. This is the authoritative protocol document; cite it when referencing the study design.",
    category: "dataset",
    downloadUrl: "/downloads/research-protocol-v1.0.pdf",
    fileSize: "1.8 MB",
    fileType: "PDF",
  },
];

/* ── Helper to sort by date descending ── */
export const sortedMedia = [...mediaItems].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);