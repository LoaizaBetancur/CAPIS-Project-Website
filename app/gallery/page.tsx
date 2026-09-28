import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from CAPIS project presentations and conferences.",
};

const NAVY = "#2A3F5F";
const TEAL = "#3C7887";

const IMG = "/images/Presentations%20%26%20Conferences";

const events = [
  {
    title: "QPR Conference 2026",
    location: "National Wine Centre, Adelaide",
    photos: ["QPR1.jpg", "QPR2.JPG", "QPR3.JPG", "QPR4.JPG", "QPR5.JPG", "QPR6.JPG"],
  },
  {
    title: "JBI iGNITE 2026",
    location: "Online",
    photos: ["JBIiGNITE1.jpeg"],
    poster: "JBIiGNITE_Poster.jpeg",
  },
];

function PhotoGrid({ photos, eventTitle }: { photos: string[]; eventTitle: string }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "16px",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      }}
    >
      {photos.map((file) => (
        <figure key={file} style={{ margin: 0 }}>
          <a
            href={`${IMG}/${file}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Click to view full size"
            style={{ display: "block", textDecoration: "none" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 3",
                overflow: "hidden",
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#EDF2F7",
              }}
            >
              <Image
                src={`${IMG}/${file}`}
                alt={`${eventTitle} — photo (click to view full size)`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 600px"
                quality={90}
              />
            </div>
          </a>
        </figure>
      ))}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main>
      {/* ── Hero Banner ── */}
      <section style={{ backgroundColor: NAVY }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "20px 24px",
            display: "grid",
            alignItems: "center",
            gap: "24px",
            gridTemplateColumns: "1fr 1fr",
          }}
          className="hero-grid"
        >
          <div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              GALLERY
            </h1>
            <p style={{ fontSize: "16px", color: "#B0C4DE", marginTop: "8px" }}>
              Presentations and conferences from the CAPIS project.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", width: "400px", height: "320px" }}>
              <Image
                src={`${IMG}/QPR1.jpg`}
                alt="CAPIS project presentation"
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
                sizes="400px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Event sections ── */}
      {events.map((event, i) => (
        <div key={event.title}>
          <section
            style={{
              backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F7FAFC",
              padding: "32px 24px",
            }}
          >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: TEAL,
                  marginBottom: "8px",
                }}
              >
                {event.location}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                  fontWeight: 600,
                  color: "#1A202C",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  marginBottom: "24px",
                }}
              >
                {event.title}
              </h2>
              <PhotoGrid photos={event.photos} eventTitle={event.title} />
              {event.poster && (
                <div style={{ marginTop: "24px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#1A202C",
                      marginBottom: "12px",
                    }}
                  >
                    Conference poster{" "}
                    <span style={{ fontWeight: 400, fontSize: "13px", color: "#4A5568" }}>
                      (click to view full size)
                    </span>
                  </h3>
                  <a
                    href={`${IMG}/${event.poster}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Click to view full size"
                    style={{ display: "block", textDecoration: "none" }}
                  >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 9",
                      overflow: "hidden",
                      borderRadius: "8px",
                      border: "1px solid #E2E8F0",
                      backgroundColor: "#EDF2F7",
                    }}
                  >
                    <Image
                      src={`${IMG}/${event.poster}`}
                      alt={`${event.title} — conference poster (click to view full size)`}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="900px"
                      quality={90}
                    />
                  </div>
                  </a>
                </div>
              )}
            </div>
          </section>
          <div style={{ height: "4px", backgroundColor: NAVY }} />
        </div>
      ))}
    </main>
  );
}
