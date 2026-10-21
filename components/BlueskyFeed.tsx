"use client";

import { useEffect, useState } from "react";

// Fetches the latest posts from the Bluesky account automatically via the
// free, public Bluesky API — no keys, no login, nothing to update per post:
// you post on Bluesky, it appears here on its own.

const HANDLE = "loaizabetancur.bsky.social";
const API = "https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed";

type BskyImage = { fullsize?: string; alt?: string };
type BskyPost = {
  uri?: string;
  record?: {
    text?: string;
    createdAt?: string;
    reply?: unknown;
  };
  embed?: BskyImage[] | { $type?: string; images?: BskyImage[] };
  labels?: { val?: string }[];
};

type FeedItem = {
  url: string;
  text: string;
  createdAt: string;
  images: { url: string; alt: string }[];
};

const NAVY = "#2A3F5F";
const TEAL = "#3C7887";
const BLUESKY_BLUE = "#1185FE";

function extractImages(post: BskyPost): { url: string; alt: string }[] {
  const e = post.embed;
  if (!e) return [];
  const images = Array.isArray(e)
    ? e
    : typeof e === "object" && "images" in e && Array.isArray(e.images)
      ? e.images
      : [];
  return images
    .filter((img) => img?.fullsize)
    .map((img) => ({ url: img.fullsize as string, alt: img.alt || "Bluesky post image" }));
}

function toFeedItem(post: BskyPost): FeedItem | null {
  const text = post.record?.text?.trim() ?? "";
  const createdAt = post.record?.createdAt ?? "";
  if (post.record?.reply || (!text && extractImages(post).length === 0)) return null;
  const rkey = post.uri?.split("/").pop() ?? "";
  return {
    url: `https://bsky.app/profile/${HANDLE}/post/${rkey}`,
    text,
    createdAt,
    images: extractImages(post),
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function BlueskyFeed({ limit = 6 }: { limit?: number }) {
  const [items, setItems] = useState<FeedItem[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let ignore = false;
    fetch(`${API}?actor=${HANDLE}&limit=25&filter=posts_no_replies`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.statusText))))
      .then((data: { feed?: { post?: BskyPost }[] }) => {
        if (ignore) return;
        const parsed = (data.feed ?? [])
          .map((f) => f.post)
          .filter((p): p is BskyPost => Boolean(p))
          .map(toFeedItem)
          .filter((it): it is FeedItem => it !== null)
          .slice(0, limit);
        setItems(parsed);
      })
      .catch(() => {
        if (!ignore) setFailed(true);
      });
    return () => {
      ignore = true;
    };
  }, [limit]);

  if (failed) return null;

  return (
    <div>
      <p
        style={{
          fontSize: "11px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: BLUESKY_BLUE,
          marginBottom: "12px",
        }}
      >
        Latest from Bluesky — updated automatically
      </p>
      <div
        style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {(items ?? Array.from({ length: Math.min(3, limit) })).map((item, i) =>
          item ? (
            <article
              key={item.url}
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
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "#FFFFFF",
                    backgroundColor: BLUESKY_BLUE,
                    borderRadius: "999px",
                    padding: "3px 10px",
                  }}
                >
                  Bluesky
                </span>
                <span style={{ fontSize: "12px", color: "#4A5568" }}>{formatDate(item.createdAt)}</span>
              </div>
              {item.images.length > 0 && (
                <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1", backgroundColor: NAVY }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.images[0].url}
                    alt={item.images[0].alt}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
              )}
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
                    display: "-webkit-box",
                    WebkitLineClamp: 8,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.text}
                </p>
                <a
                  href={item.url}
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
                  className="bsky-public-link"
                >
                  View on Bluesky
                </a>
              </div>
            </article>
          ) : (
            <div
              key={`skeleton-${i}`}
              style={{
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#FFFFFF",
                overflow: "hidden",
                minHeight: "380px",
              }}
            />
          )
        )}
      </div>
      {items !== null && items.length === 0 && (
        <p style={{ fontSize: "14px", color: "#2D3748" }}>
          Follow us on Bluesky:{" "}
          <a
            href={`https://bsky.app/profile/${HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: TEAL, textDecoration: "underline" }}
          >
            @{HANDLE}
          </a>
        </p>
      )}
    </div>
  );
}
