import Image from "next/image";

interface StageCardProps {
  number: number;
  title: string;
  description: string;
  image: string;
}

export default function StageCard({ number, title, description, image }: StageCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "12px",
        padding: "20px",
        textAlign: "left",
      }}
    >
      <div
        style={{
          backgroundColor: "#F7FAFC",
          borderRadius: "8px",
          height: "140px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
          overflow: "hidden",
        }}
      >
        {image.startsWith("/") ? (
          <Image
            src={image}
            alt={`Stage ${number}`}
            width={280}
            height={140}
            style={{ objectFit: "contain" }}
            sizes="280px"
          />
        ) : (
          <div style={{ fontSize: "72px", lineHeight: 1 }}>{image}</div>
        )}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "16px",
          fontWeight: 600,
          color: "#1A202C",
          marginBottom: "8px",
        }}
      >
        Stage {number}
      </h3>
      <p
        style={{
          fontSize: "13px",
          lineHeight: 1.6,
          color: "#2D3748",
        }}
      >
        {description}
      </p>
    </div>
  );
}
