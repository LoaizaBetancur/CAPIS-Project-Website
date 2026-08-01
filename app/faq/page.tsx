import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import FAQAccordion from "@/components/FAQAccordion";
import {
  heroContent,
  faqItems,
  FAQ_CATEGORY_META,
  FaqItem,
} from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Frequently asked questions about this PhD research programme — study design, participation, collaboration opportunities, clinical relevance, and how to access research outputs.",
  openGraph: {
    title: "FAQ — PhD Research Project",
    description:
      "Find answers to common questions about the research study design, how to participate as a consumer or clinician, researcher collaboration, and how findings will be shared.",
  },
};

const CATEGORY_ORDER: FaqItem["category"][] = [
  "general",
  "participant",
  "clinical",
  "researcher",
  "outputs",
];

export default function FAQPage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection
        eyebrow={heroContent.eyebrow}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
      />

      {/* ── Category sections ── */}
      {CATEGORY_ORDER.map((cat) => {
        const meta = FAQ_CATEGORY_META[cat];
        const categoryItems = faqItems.filter((f) => f.category === cat);
        if (categoryItems.length === 0) return null;

        return (
          <SectionWrapper key={cat} background="bg" spacing="lg">
            {/* Category header */}
            <div className="mb-8 flex items-center gap-4">
              <span className="text-2xl" aria-hidden="true">
                {meta.icon}
              </span>
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                  {meta.label}
                </h2>
                <p className="mt-1 text-sm text-muted max-w-xl">
                  {meta.description}
                </p>
              </div>
              <span className="ml-auto rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent tabular-nums">
                {categoryItems.length}
              </span>
            </div>

            {/* Accordion */}
            <div className="mx-auto max-w-3xl rounded-xl border border-border bg-surface px-5 sm:px-7">
              <FAQAccordion items={categoryItems} />
            </div>
          </SectionWrapper>
        );
      })}

      {/* ── Didn't find answer ── */}
      <SectionWrapper background="accent-soft" spacing="md">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-display text-xl font-semibold text-text-primary">
            Didn't find your question?
          </h3>
          <p className="mt-2 leading-relaxed text-muted text-sm">
            We're happy to answer any questions not covered above. Reach out to
            the research team and we'll respond within 3–5 business days.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Button href="/contact" variant="primary" size="sm">
              Contact us
            </Button>
            <Button href="/about" variant="secondary" size="sm">
              Learn more about the project
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}