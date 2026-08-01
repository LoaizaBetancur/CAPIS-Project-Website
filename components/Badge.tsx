import { type ComponentPropsWithoutRef } from "react";

type BadgeVariant = "default" | "accent" | "success" | "warning" | "neutral";

interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  variant?: BadgeVariant;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  default: "bg-accent-soft text-accent",
  accent:  "bg-accent text-white",
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
  neutral: "bg-slate-100 text-slate-600",
};

/**
 * Inline badge/chip for categories, tags, and status indicators.
 * Used extensively across Publications (type badges), Events (category
 * badges), Study Updates (milestone/recruitment labels), and Resources
 * (audience tags).
 */
export default function Badge({
  variant = "default",
  className = "",
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}