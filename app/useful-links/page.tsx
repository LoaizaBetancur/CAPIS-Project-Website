import { Metadata } from "next";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Useful Links",
  description: "Helpful resources and links related to the CAPIS project.",
};

const TEAL = "#3C7887";

const links = [
  {
    title: "COMET Initiative",
    description: "The Core Outcome Measures in Effectiveness Trials (COMET) Initiative brings together people interested in the development and application of core outcome sets.",
    url: "https://www.comet-initiative.org/",
  },
  {
    title: "University of Adelaide",
    description: "The University of Adelaide is a public university located in Adelaide, South Australia.",
    url: "https://www.adelaide.edu.au/",
  },
  {
    title: "JBI",
    description: "JBI is an international research organisation based in the Faculty of Health and Medical Sciences at the University of Adelaide.",
    url: "https://jbi.global/",
  },
];

export default function UsefulLinksPage() {
  return (
    <main style={{ padding: "48px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 600,
            color: "#1A202C",
            marginBottom: "8px",
          }}
        >
          Useful Links
        </h1>
        <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#2D3748", marginBottom: "32px" }}>
          A collection of helpful resources and external links related to the CAPIS project.
        </p>

        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {links.map((link) => (
            <Card key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#1A202C",
                    marginBottom: "8px",
                  }}
                >
                  {link.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#2D3748", marginBottom: "12px" }}>
                  {link.description}
                </p>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: TEAL,
                    textDecoration: "underline",
                  }}
                >
                  Visit website →
                </span>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
