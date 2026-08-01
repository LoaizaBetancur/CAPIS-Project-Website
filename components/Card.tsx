import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  highlighted?: boolean;
  as?: "article" | "div";
}

export default function Card({
  children,
  className = "",
  href,
  highlighted = false,
  as: Tag = "div",
}: CardProps) {
  const baseClasses = `rounded-lg border bg-surface p-6 transition-all duration-300 ${
    highlighted ? "border-accent-soft shadow-raised ring-1 ring-accent-soft/50" : "border-border shadow-raised"
  } ${href ? "cursor-pointer hover:-translate-y-0.5 hover:shadow-overlay" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block no-underline ${baseClasses}`}>
        {children}
      </Link>
    );
  }

  return <Tag className={baseClasses}>{children}</Tag>;
}