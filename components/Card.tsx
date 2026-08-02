import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "12px",
        padding: "24px",
      }}
    >
      {children}
    </div>
  );
}
