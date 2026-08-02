interface ParticipantCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export default function ParticipantCard({ name, description, icon }: ParticipantCardProps) {
  return (
    <div style={{ textAlign: "center" }}>
      {/* Image area like COMBAT */}
      <div
        style={{
          backgroundColor: "#F7FAFC",
          border: "1px solid #E2E8F0",
          borderRadius: "12px",
          padding: "24px",
          marginBottom: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "140px",
        }}
      >
        <div style={{ fontSize: "64px", lineHeight: 1 }}>{icon}</div>
      </div>
      {/* Label box like COMBAT */}
      <div
        style={{
          display: "inline-block",
          border: "1px solid #1A202C",
          padding: "6px 16px",
          fontSize: "13px",
          fontWeight: 500,
          color: "#1A202C",
          fontFamily: "var(--font-body)",
        }}
      >
        {name}
      </div>
      <p
        style={{
          fontSize: "13px",
          color: "#4A5568",
          marginTop: "8px",
          lineHeight: 1.5,
          maxWidth: "220px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {description}
      </p>
    </div>
  );
}
