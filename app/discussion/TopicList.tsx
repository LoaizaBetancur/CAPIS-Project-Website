"use client";

import { useState } from "react";
import { createTopic, voteTopic, type Topic } from "./actions";

const NAVY = "#2A3F5F";
const TEAL = "#3C7887";

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

function formatTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

interface TopicListProps {
  initialTopics: Topic[];
}

export default function TopicList({ initialTopics }: TopicListProps) {
  const [topics, setTopics] = useState<Topic[]>(initialTopics);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    body: "",
    author: "",
    category: "General",
  });
  const [submitting, setSubmitting] = useState(false);

  async function handleVote(id: string, delta: number) {
    setTopics((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, votes: Math.max(0, t.votes + delta) } : t
      )
    );

    const result = await voteTopic(id, delta);
    if (result !== null) {
      setTopics((prev) =>
        prev.map((t) => (t.id === id ? { ...t, votes: result } : t))
      );
    }
  }

  async function handleSubmit() {
    if (!form.title.trim() || !form.body.trim()) return;
    setSubmitting(true);

    const newTopic = await createTopic(form);
    if (newTopic) {
      setTopics((prev) => [newTopic, ...prev]);
      setForm({ title: "", body: "", author: "", category: "General" });
      setModalOpen(false);
    }

    setSubmitting(false);
  }

  return (
    <>
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
            {topics.length} active discussion{topics.length !== 1 ? "s" : ""}
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
          }}
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
            }}
          >
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
                onClick={() => handleVote(topic.id, 1)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#A0AEC0",
                  fontSize: "16px",
                  padding: "2px",
                }}
              >
                ▲
              </button>
              <span style={{ fontWeight: 700, fontSize: "13px", color: NAVY }}>
                {topic.votes}
              </span>
              <button
                onClick={() => handleVote(topic.id, -1)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#A0AEC0",
                  fontSize: "16px",
                  padding: "2px",
                }}
              >
                ▼
              </button>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#1A202C",
                  marginBottom: "4px",
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
                <span>🕒 {formatTime(topic.created_at)}</span>
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

      {modalOpen && (
        <div
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
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "6px",
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
                placeholder="Share your thoughts, ask a question..."
                rows={4}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "6px",
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
                onChange={(e) =>
                  setForm({ ...form, author: e.target.value })
                }
                placeholder="Dr. Name or Organisation"
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "6px",
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
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                style={{
                  backgroundColor: NAVY,
                  color: "#FFFFFF",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: submitting ? "not-allowed" : "pointer",
                  opacity: submitting ? 0.6 : 1,
                }}
              >
                {submitting ? "Posting..." : "Post Topic"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
