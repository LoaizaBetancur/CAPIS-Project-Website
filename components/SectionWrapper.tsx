interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: "bg" | "surface" | "accent-soft";
  spacing?: "md" | "lg" | "xl";
}

const BG_CLASSES: Record<string, string> = {
  bg: "bg-bg",
  surface: "bg-surface",
  "accent-soft": "bg-accent-soft/50",
};

const SPACING_CLASSES: Record<string, string> = {
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32",
};

export default function SectionWrapper({
  id,
  children,
  className = "",
  background = "bg",
  spacing = "lg",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${BG_CLASSES[background]} ${SPACING_CLASSES[spacing]} ${className}`}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}