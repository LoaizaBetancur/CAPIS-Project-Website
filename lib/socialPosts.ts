// ── Social media posts shown on the website ──────────────────────────────
// To publish or unpublish a post, set its `visible` flag to true/false.
// To add a new post: upload the image to `public/images/social/` and add an
// entry here. Posts are rendered newest-first on the Home and Gallery pages.

export type SocialPost = {
  image: string;
  alt: string;
  caption: string;
  date: string;
  platform: "Instagram" | "X (Twitter)" | "LinkedIn" | "Bluesky" | "Website";
  // Optional link to the live post / relevant page (e.g., registration form)
  link?: string;
  linkLabel?: string;
  // Pinned posts (e.g., the recruitment call) are always shown on the Home page
  pinned?: boolean;
  visible: boolean;
};

export const socialPosts: SocialPost[] = [
  {
    image: "/images/social/capis-recruitment-carousel.png",
    alt: "CAPIS recruitment carousel: registering interest to join the consensus study",
    caption:
      "🔬 Calling all football players, coaches, sport scientists, and practitioners! The CAPIS Project is developing the first core outcome set for plyometric training interventions in Tier 3–5 football players. We are recruiting participants for Stage 2 (Focus Groups) and Stage 3 (Online Meetings) — your experience matters. Registered with COMET (Study 3589) and approved by the Adelaide University HREC.",
    date: "2026-10-01",
    platform: "Instagram",
    link: "/resources/athletes",
    linkLabel: "Register your interest",
    pinned: true,
    visible: true,
  },
  {
    image: "/images/Logos-JBI-AU/JBI iGNITEI'm presenting at-Insta Post.jpg",
    alt: "Instagram announcement: presenting at JBI iGNITE 2026",
    caption:
      "📢 The CAPIS scoping review will be presented at JBI iGNITE 2026 (online, 24–25 September) — and is also accepted for WCSPT 2026 (Bern, Switzerland) and the Cochrane Colloquium 2026 (Krakow, Poland). Excited to share our findings with the global sport science community!",
    date: "2026-09-20",
    platform: "Instagram",
    link: "https://www.instagram.com/thecapisproject/",
    linkLabel: "View on Instagram",
    visible: true,
  },
  {
    image: "/images/social/capis-recruitment-carousel-alt.png",
    alt: "Alternative CAPIS recruitment design: why participate in the CAPIS Project",
    caption:
      "Why should you participate in the CAPIS Project? Because the outcomes we choose to measure shape how future training interventions are evaluated. We need the perspective of players, coaches, practitioners, and researchers to ensure the core outcome set reflects real-world priorities.",
    date: "2026-09-10",
    platform: "X (Twitter)",
    link: "https://x.com/theCAPISproject",
    linkLabel: "View on X",
    visible: false,
  },
];

// Helper: only posts whose `visible` flag is true appear on the website.
export function visibleSocialPosts(): SocialPost[] {
  return socialPosts.filter((p) => p.visible);
}

// Home page: pinned posts plus the most recent non-pinned post.
export function socialPostsForHome(): SocialPost[] {
  const visible = visibleSocialPosts().sort((a, b) => b.date.localeCompare(a.date));
  const pinned = visible.filter((p) => p.pinned);
  const latest = visible.find((p) => !p.pinned);
  return latest ? [...pinned, latest] : pinned;
}
