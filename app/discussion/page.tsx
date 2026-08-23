import { Metadata } from "next";
import Image from "next/image";
import { getTopics } from "./actions";
import TopicList from "./TopicList";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "Discussion Forum",
  description:
    "Engage with the CAPIS community on topics in concussion and athletic performance science.",
  openGraph: {
    title: "Discussion Forum | The CAPIS Project",
    description:
      "Engage with the CAPIS community on topics in concussion and athletic performance science.",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discussion Forum | The CAPIS Project",
    description:
      "Engage with the CAPIS community on topics in concussion and athletic performance science.",
    images: ["/images/og-default.png"],
  },
};

const NAVY = "#2A3F5F";

export default async function DiscussionPage() {
  const topics = await getTopics();

  return (
    <main>
      <section style={{ backgroundColor: NAVY }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "48px 24px",
            display: "grid",
            alignItems: "center",
            gap: "40px",
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
              Discussion
              <br />
              Forum
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#B0C4DE",
                marginTop: "12px",
              }}
            >
              Engage with the CAPIS community on topics in concussion and
              athletic performance science.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "280px",
                height: "220px",
                transform: "scale(1.4)",
                transformOrigin: "center center",
              }}
            >
              <Image
                src="/images/discussion.png"
                alt="Discussion forum graphic"
                fill
                style={{ objectFit: "contain" }}
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      <section style={{ backgroundColor: "#FFFFFF", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <TopicList initialTopics={topics} />
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      <section style={{ backgroundColor: "#F7FAFC", padding: "32px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: "14px",
              color: "#4A5568",
              marginBottom: "8px",
            }}
          >
            Share this page
          </p>
          <ShareButtons
            title="Discussion Forum | The CAPIS Project"
            description="Engage with the CAPIS community on topics in concussion and athletic performance science."
          />
        </div>
      </section>
    </main>
  );
}
