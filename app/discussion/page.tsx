"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const NAVY = "#2A3F5F";
const TEAL = "#3C7887";

interface Topic {
  id: number;
  title: string;
  body: string;
  author: string;
  category: string;
  votes: number;
  replies: number;
  time: string;
}

const initialTopics: Topic[] = [
  {
    id: 1,
    title: "What outcome measures should be prioritised in youth concussion research?",
    body: "Following our recent Delphi study, I'd love to hear perspectives on whether patient-reported outcomes should outweigh clinician-reported measures in COS development...",
    author: "Andrés L.",
    category: "Core Outcome Set",
    votes: 24,
    replies: 12,
    time: "2 days ago",
  },
  {
    id: 2,
    title: "Barriers to implementing concussion protocols in community sport",
    body: "We're seeing resistance at the club level due to resource constraints. Has anyone successfully navigated this with limited budgets? Looking for practical strategies...",
    author: "Jennifer S.",
    category: "Implementation",
    votes: 18,
    replies: 8,
    time: "5 days ago",
  },
  {
    id: 3,
    title: "SCAT6 vs. SCAT5: Implications for our registry data",
    body: "With the recent release of SCAT6, should we transition our prospective registry mid-study? Concerned about comparability with our baseline SCAT5 data...",
    author: "Peter T.",
    category: "Methods",
    votes: 31,
    replies: 15,
    time: "1 week ago",
  },
];

const categories = [
  "Core Outcome Set",
  "Implementation",
  "Methods",
  "Prevention",
  "Assessment",
  "General",
];

const categoryColors: Record<string, string> = {
  "Core Outcome Set": "#EBF4FF",
  Implementation: "#FEF3C7",
  Methods: "#F3E8FF",
  Prevention: "#D1FAE5",
  Assessment: "#FEE2E2",
  General: "#F1F5F9",
};

export default function DiscussionPage() {
  const [topics, setTopics] = useState<Topic[]>(initialTopics);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ title: "", body: "", author: "", category: "General" });
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
    }
    if (modalOpen) {
      document.addEventListener("keydown", handleKey);
      return () => document.removeEventListener("keydown", handleKey);
    }
  }, [modalOpen]);

  function vote(id: number, delta: number) {
    setTopics((prev) =>
      prev.map((t) => (t.id === id ? { ...t, votes: t.votes + delta } : t))
    );
  }

  function submitTopic() {
    if (!form.title.trim() || !form.body.trim()) return;
    const newTopic: Topic = {
      id: Date.now(),
      title: form.title,
      body: form.body,
      author: form.author.trim() || "Anonymous",
      category: form.category,
      votes: 0,
      replies: 0,
      time: "Just now",
    };
    setTopics((prev) => [newTopic, ...prev]);
    setForm({ title: "", body: "", author: "", category: "General" });
    setModalOpen(false);
  }

  return (
    <main>
      {/* ── Hero ── */}
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
              Engage with the CAPIS community on topics in concussion and athletic performance science.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", width: "280px", height: "220px" }}>
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

      {/* ── Topics ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: TEAL,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                🔥 Trending Topics
              </span>
              <p style={{ fontSize: "12px", color: "#A0AEC0", marginTop: "2px" }}>
                {topics.length} active discussions
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              style={{
                backgroundColor: NAVY,
                color: "#FFFFFF",
                border: "none",
                padding: "10px 18px",
                borderRadius: "6px",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "background 150ms",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#3A4F6F")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = NAVY)
              }
            >
              + Start a Topic
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {topics.map((topic) => (
              <div
                key={topic.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  padding: "16px 18px",
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  cursor: "pointer",
                  transition: "box-shadow 150ms, border-color 150ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#CBD5E1";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Vote box */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2px",
                    minWidth: "36px",
                    flexShrink: 0,
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      vote(topic.id, 1);
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#A0AEC0",
                      fontSize: "16px",
                      padding: "2px",
                      lineHeight: 1,
                    }}
                  >
                    ▲
                  </button>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "13px",
                      color: NAVY,
                    }}
                  >
                    {topic.votes}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      vote(topic.id, -1);
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#A0AEC0",
                      fontSize: "16px",
                      padding: "2px",
                      lineHeight: 1,
                    }}
                  >
                    ▼
                  </button>
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#1A202C",
                      marginBottom: "4px",
                      lineHeight: 1.3,
                    }}
                  >
                    {topic.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "#4A5568",
                      marginBottom: "8px",
                    }}
                  >
                    {topic.body}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "14px",
                      fontSize: "11px",
                      color: "#A0AEC0",
                      marginBottom: "6px",
                    }}
                  >
                    <span>👤 {topic.author}</span>
                    <span>💬 {topic.replies} replies</span>
                    <span>🕒 {topic.time}</span>
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "11px",
                      fontWeight: 500,
                      padding: "3px 10px",
                      borderRadius: "999px",
                      backgroundColor:
                        categoryColors[topic.category] || "#F1F5F9",
                      color: "#4A5568",
                    }}
                  >
                    {topic.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {modalOpen && (
        <div
          ref={modalRef}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 200,
            padding: "16px",
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              padding: "28px",
              maxWidth: "480px",
              width: "100%",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                fontWeight: 600,
                color: NAVY,
                marginBottom: "16px",
              }}
            >
              Start a New Discussion
            </h3>

            <div style={{ marginBottom: "12px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#1A202C",
                  marginBottom: "4px",
                }}
              >
                Topic Title
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="e.g., Best practices for..."
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "6px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                }}
              />
            </div>

            <div style={{ marginBottom: "12px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#1A202C",
                  marginBottom: "4px",
                }}
              >
                Category
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "6px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                }}
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: "12px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#1A202C",
                  marginBottom: "4px",
                }}
              >
                Your Question or Discussion Point
              </label>
              <textarea
                value={form.body}
                onChange={(e) => setForm({ ...form, body: e.target.value })}
                placeholder="Share your thoughts, ask a question, or propose a collaboration..."
                rows={4}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "6px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#1A202C",
                  marginBottom: "4px",
                }}
              >
                Your Name
              </label>
              <input
                type="text"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
                placeholder="Dr. Name or Organisation"
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "6px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => setModalOpen(false)}
                style={{
                  backgroundColor: "transparent",
                  border: `1.5px solid ${NAVY}`,
                  color: NAVY,
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={submitTopic}
                style={{
                  backgroundColor: NAVY,
                  color: "#FFFFFF",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Post Topic
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
