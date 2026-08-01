import Button from "./Button";

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <section className="bg-bg py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="mb-4 font-body text-sm font-medium uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="text-display-lg mb-6">{title}</h1>
          <p className="text-lead mb-8 max-w-2xl mx-auto text-text-muted">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}