"use client";

import { useEffect, useState } from "react";
import { pinnedInstagramPostUrl } from "@/lib/socialPosts";

// Automatic Instagram feed rendered as site-native cards, driven by the
// Behold JSON feed. You post on Instagram → it appears here, no extra work.

const FEED_URL = "https://feeds.behold.so/wqBI4c6ZUDSRUd3e3XSX";
const INSTA_PINK = "#C13584";
const TEAL = "#3C7887";
const NAVY = "#2A3F5F";

type MediaSize = { mediaUrl?: string };
type InstagramPost = {
  id?: string;
  timestamp?: string;
  mediaType?: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl?: string;
  permalink?: string;
  caption?: string;
  prunedCaption?: string;
  thumbnailUrl?: string;
  sizes?: Partial<Record<"small" | "medium" | "large" | "full", MediaSize>>;
};

function mediaSrc(
  mediaType?: InstagramPost["mediaType"],
  sizes?: InstagramPost["sizes"]
): string {
  return (
    sizes?.large?.mediaUrl ||
    sizes?.medium?.mediaUrl ||
    sizes?.small?.mediaUrl ||
    ""
  );
}

function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function InstagramCard({
  post,
  pinned = false,
}: {
  post: InstagramPost;
  pinned?: boolean;
}) {
  const src = mediaSrc(post.mediaType, post.sizes);
  return (
    <article
      style={{
        borderRadius: "8px",
        border: "1px solid #E2E8F0",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ padding: "16px 16px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#FFFFFF",
              backgroundColor: INSTA_PINK,
              borderRadius: "999px",
              padding: "3px 10px",
            }}
          >
            Instagram
          </span>
          {pinned && (
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
        <span style={{ fontSize: "12px", color: "#4A5568" }}>{formatDate(post.timestamp)}</span>
      </div>
      <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1", backgroundColor: NAVY }}>
        {post.mediaType === "VIDEO" ? (
          <video
            src={post.mediaUrl}
            poster={post.thumbnailUrl || src}
            controls
            muted
            loop
            playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={(post.prunedCaption || post.caption || "Instagram post").slice(0, 100)}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : null}
      </div>
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px", flexGrow: 1 }}>
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.6,
            color: "#2D3748",
            whiteSpace: "pre-line",
            display: "-webkit-box",
            WebkitLineClamp: 6,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.prunedCaption || post.caption}
        </p>
        {post.permalink && (
          <a
            href={post.permalink}
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
            View on Instagram
          </a>
        )}
      </div>
    </article>
  );
}

export default function InstagramAutoFeed({
  featured = false,
  limit = 6,
}: {
  // Home mode: pinned post + latest (or 2 latest if no pinned URL is set)
  featured?: boolean;
  limit?: number;
}) {
  const [posts, setPosts] = useState<InstagramPost[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let ignore = false;
    fetch(FEED_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.statusText))))
      .then((data: { posts?: InstagramPost[] }) => {
        if (ignore) return;
        let list = data.posts ?? [];
        if (featured) {
          const pinned = pinnedInstagramPostUrl
            ? list.find((p) => (p.permalink || "").replace(/\/$/, "") === pinnedInstagramPostUrl.replace(/\/$/, ""))
            : undefined;
          list = pinned ? [pinned, ...list.filter((p) => p !== pinned).slice(0, 1)] : list.slice(0, 2);
        } else {
          list = list.slice(0, limit);
        }
        setPosts(list);
      })
      .catch(() => {
        if (!ignore) setFailed(true);
      });
    return () => {
      ignore = true;
    };
  }, [featured, limit]);

  if (failed) return null;

  return (
    <div>
      <p
        style={{
          fontSize: "11px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: INSTA_PINK,
          marginBottom: "12px",
        }}
      >
        Latest from Instagram — updated automatically
      </p>
      <div
        style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {posts === null
          ? Array.from({ length: featured ? 2 : 3 }).map((_, i) => (
              <div
                key={`sk-${i}`}
                style={{
                  borderRadius: "8px",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  minHeight: "380px",
                }}
              />
            ))
          : posts.map((p, i) =>
              p && p.mediaType && (p.prunedCaption || p.caption) ? (
                <InstagramCard key={p.id ?? p.permalink ?? i} post={p} pinned={isPinned(p)} />
              ) : null
            )}
      </div>
    </div>
  );
}

function isPinned(post: InstagramPost): boolean {
  return (
    Boolean(pinnedInstagramPostUrl) &&
    (post.permalink || "").replace(/\/$/, "") ===
      pinnedInstagramPostUrl.replace(/\/$/, "")
  );
}
