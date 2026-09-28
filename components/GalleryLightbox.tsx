"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const NAVY = "#2A3F5F";

interface GalleryLightboxProps {
  photos: string[];
  eventTitle: string;
  /** Thumbnail box shape — defaults to a uniform 4:3 crop like the QPR grid */
  aspect?: string;
  fit?: "cover" | "contain";
  /** Per-photo thumbnail fit (falls back to `fit`); use "contain" for posters so nothing is cropped */
  fits?: ("cover" | "contain")[];
  /** Keeps single-photo grids from stretching full-width */
  maxWidth?: number;
}

export default function GalleryLightbox({
  photos,
  eventTitle,
  aspect = "4 / 3",
  fit = "cover",
  fits,
  maxWidth,
}: GalleryLightboxProps) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setIndex((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const btn: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.4)",
    background: "rgba(42,63,95,0.8)",
    color: "#FFFFFF",
    fontSize: "20px",
    cursor: "pointer",
    flexShrink: 0,
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          maxWidth: maxWidth,
        }}
      >
        {photos.map((file, i) => (
          <figure key={file} style={{ margin: 0 }}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              title="Click to view"
              aria-label={`View ${eventTitle} photo ${i + 1} of ${photos.length}`}
              style={{
                display: "block",
                width: "100%",
                padding: 0,
                border: "none",
                background: "none",
                cursor: "zoom-in",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: aspect,
                  overflow: "hidden",
                  borderRadius: "8px",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#EDF2F7",
                }}
              >
                <Image
                  src={file}
                  alt={`${eventTitle} — photo ${i + 1}`}
                  fill
                  style={{ objectFit: fits?.[i] ?? fit }}
                  sizes="(max-width: 768px) 100vw, 600px"
                  quality={90}
                />
              </div>
            </button>
          </figure>
        ))}
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${eventTitle} photo viewer`}
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(10, 18, 30, 0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            padding: "24px",
          }}
        >
          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              style={btn}
            >
              ‹
            </button>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(88vw, 1100px)",
              height: "min(80vh, 750px)",
            }}
          >
            <Image
              src={photos[index]}
              alt={`${eventTitle} — photo ${index + 1} of ${photos.length}`}
              fill
              style={{ objectFit: "contain" }}
              sizes="1100px"
              quality={95}
              priority
            />
          </div>

          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              style={btn}
            >
              ›
            </button>
          )}

          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            style={{
              ...btn,
              position: "absolute",
              top: "16px",
              right: "16px",
            }}
          >
            ✕
          </button>

          <p
            style={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              margin: 0,
              fontSize: "13px",
              color: "#B0C4DE",
              backgroundColor: NAVY,
              padding: "6px 14px",
              borderRadius: "20px",
              whiteSpace: "nowrap",
            }}
          >
            {eventTitle} — {index + 1} of {photos.length}
          </p>
        </div>
      )}
    </>
  );
}
