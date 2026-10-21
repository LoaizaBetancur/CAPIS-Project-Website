"use client";

import { useState } from "react";
import BeholdWidget from "@behold/react";

// Automatic Instagram feed via the Behold widget.
// You post on Instagram → it appears here. To change its look (posts per
// row, filters, style) edit the widget in the Behold dashboard — no code
// changes needed on the website.

const FEED_ID = "wqBI4c6ZUDSRUd3e3XSX";
const INSTA_PINK = "#C13584";
const TEAL = "#3C7887";

export default function BeholdInstagramFeed() {
  const [loaded, setLoaded] = useState(false);

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
      {!loaded && (
        <p style={{ fontSize: "13px", color: "#4A5568" }}>
          Loading Instagram posts…{" "}
          <a
            href="https://www.instagram.com/thecapisproject/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: TEAL, textDecoration: "underline" }}
          >
            @thecapisproject
          </a>
        </p>
      )}
      <div style={{ minHeight: loaded ? undefined : "200px" }}>
        <BeholdWidget feedId={FEED_ID} onLoad={() => setLoaded(true)} />
      </div>
    </div>
  );
}
