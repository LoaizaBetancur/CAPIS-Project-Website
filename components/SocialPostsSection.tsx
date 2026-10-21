import Image from "next/image";
import Link from "next/link";
import { SocialPost, socialPostsForHome, visibleSocialPosts } from "@/lib/socialPosts";

const NAVY = "#2A3F5F";
const TEAL = "#3C7887";

const PLATFORM_COLORS: Record<SocialPost["platform"], string> = {
  Instagram: "#C13584",
  "X (Twitter)": "#000000",
  LinkedIn: "#0A66C2",
  Bluesky: "#1185FE",
  Website: TEAL,
};

type Props = {
  title?: string;
  subtitle?: string;
  limit?: number;
  // When true, show pinned posts + latest instead of all posts (Home mode)
  featured?: boolean;
};

export default function SocialPostsSection({
  title = "Follow The CAPIS Project",
  subtitle = "Updates and recruitment posts from our social media channels.",
  limit,
  featured = false,
}: Props) {
  let posts = featured
    ? socialPostsForHome()
    : visibleSocialPosts().sort((a, b) => b.date.localeCompare(a.date));
  if (limit) posts = posts.slice(0, limit);

  if (posts.length === 0) return null;

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
          fontWeight: 600,
          color: "#1A202C",
          lineHeight: 1.3,
          textDecoration: "underline",
          textUnderlineOffset: "4px",
          marginBottom: "8px",
        }}
      >
        {title}
      </h2>
      <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#2D3748", marginBottom: "24px" }}>
        {subtitle}
      </p>
      <div
        style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {posts.map((post) => (
          <article
            key={post.image + post.date}
            style={{
              borderRadius: "8px",
              border: "1px solid #E2E8F0",
              backgroundColor: "#FFFFFF",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ padding: "16px 16px 8px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "11px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#FFFFFF",
                      backgroundColor: PLATFORM_COLORS[post.platform],
                      borderRadius: "999px",
                      padding: "3px 10px",
                    }}
                  >
                    {post.platform}
                  </span>
                  {post.pinned && (
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "11px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: NAVY,
                        backgroundColor: "#E2E8F0",
                        borderRadius: "999px",
                        padding: "3px 10px",
                      }}
                    >
                      📌 Pinned
                    </span>
                  )}
                </div>
                <span style={{ fontSize: "12px", color: "#4A5568" }}>{post.date}</span>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1 / 1",
                backgroundColor: NAVY,
              }}
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, 410px"
              />
            </div>
            <div
              style={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flexGrow: 1,
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#2D3748",
                  whiteSpace: "pre-line",
                }}
              >
                {post.caption}
              </p>
              {post.link && (
                post.link.startsWith("/") ? (
                  <Link
                    href={post.link}
                    style={{
                      marginTop: "auto",
                      alignSelf: "flex-start",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      backgroundColor: TEAL,
                      borderRadius: "8px",
                      padding: "8px 16px",
                      textDecoration: "none",
                    }}
                  >
                    {post.linkLabel ?? "Learn more"}
                  </Link>
                ) : (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: "auto",
                      alignSelf: "flex-start",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      backgroundColor: TEAL,
                      borderRadius: "8px",
                      padding: "8px 16px",
                      textDecoration: "none",
                    }}
                  >
                    {post.linkLabel ?? "View post"}
                  </a>
                )
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
