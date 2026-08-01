import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { heroContent, teamCategories } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Research Team",
  description:
    "Meet the researchers, supervisors, international expert advisory panel, and consumer representatives behind this multi-phase PhD research project.",
  openGraph: {
    title: "Research Team — PhD Research Project",
    description:
      "Core research team, international expert advisory panel, and consumer representatives: the people driving this research programme.",
  },
};

function getCategoryIcon(category: "core" | "advisory" | "consumer"): string {
  switch (category) {
    case "core":
      return `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="2" y="2" width="24" height="24" rx="5" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="2"/><path d="M8 16l4 4 8-10" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    case "advisory":
      return `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="10" cy="14" r="6" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="2"/><circle cx="18" cy="14" r="6" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="2"/><circle cx="14" cy="7" r="6" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="2"/></svg>`;
    case "consumer":
      return `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="12" r="7" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="2"/><path d="M5 26c0-5 4-9 9-9s9 4 9 9" fill="var(--color-accent-soft)" stroke="var(--color-accent)" stroke-width="2"/></svg>`;
  }
}

export default function TeamPage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection
        eyebrow={heroContent.eyebrow}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
      />

      {/* ── Team Categories ── */}
      {teamCategories.map((category, catIdx) => (
        <SectionWrapper
          key={category.heading}
          id={category.heading.toLowerCase().replace(/\s+/g, "-")}
          background={catIdx % 2 === 1 ? "surface" : "bg"}
          spacing="lg"
        >
          <div className="mx-auto max-w-2xl text-center mb-12">
            <div
              className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent-soft"
              dangerouslySetInnerHTML={{
                __html: getCategoryIcon(
                  category.members[0]?.category ?? "core"
                ),
              }}
            />
            <h2 className="font-display text-display-md mb-3">
              {category.heading}
            </h2>
            <p className="text-lead text-text-muted">
              {category.description}
            </p>
          </div>

          {/* Profile cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.members.map((member) => (
              <Card key={member.name}>
                <div className="flex flex-col items-center text-center">
                  {/* Monogram avatar */}
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent-soft text-2xl font-bold text-accent">
                    {member.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>

                  <h3 className="font-display text-display-sm mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-text mb-1">
                    {member.role}
                  </p>
                  <p className="text-caption mb-3">
                    {member.affiliation}
                  </p>

                  {/* Bio */}
                  <p className="text-caption text-left leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Meta links */}
                  <div className="mt-auto flex items-center gap-3 text-xs">
                    {member.orcid && (
                      <a
                        href={`https://orcid.org/${member.orcid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-accent-soft/70 px-2.5 py-1 text-accent transition-colors hover:bg-accent-soft"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM7.2 4.8h3.6v7.2c0 1.2.6 1.8 1.8 1.8s1.8-.6 1.8-1.8V4.8h3.6v7.2c0 2.4-1.2 4.2-3.6 4.2s-3.6-1.8-3.6-4.2V4.8z" />
                        </svg>
                        ORCID
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1 rounded-full bg-accent-soft/70 px-2.5 py-1 text-accent transition-colors hover:bg-accent-soft"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          aria-hidden="true"
                        >
                          <rect
                            x="1"
                            y="3"
                            width="14"
                            height="10"
                            rx="2"
                          />
                          <path d="M1 5l7 4.5L15 5" />
                        </svg>
                        Email
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      ))}

      {/* ── Join the Team CTA ── */}
      <SectionWrapper
        background="accent-soft"
        spacing="lg"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-display-md mb-4">
            Interested in Contributing?
          </h2>
          <p className="text-lead mb-8">
            We are actively recruiting Delphi panel members across clinical
            disciplines. If you have expertise in the target domain and would
            like to contribute to building consensus on core outcome measures,
            we would welcome your involvement.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/get-involved" variant="primary">
              Join the Panel
            </Button>
            <Button href="/contact" variant="secondary">
              Contact the Team
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}