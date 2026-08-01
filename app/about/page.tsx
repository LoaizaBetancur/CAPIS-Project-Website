import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Timeline from "@/components/Timeline";
import {
  heroContent,
  backgroundContent,
  studyPhases,
  projectGoals,
  teamTeaser,
  collaborators,
  institutionContent,
  takepartContent,
} from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About the Project",
  description:
    "A comprehensive overview of this multi-phase PhD research project — its goals, methodology, study phases, team, and host institution at the University of Adelaide.",
  openGraph: {
    title: "About the Project — PhD Research Project",
    description:
      "Understanding the research programme: systematic review, Delphi consensus, implementation science, and stakeholder engagement at the University of Adelaide.",
  },
};

export default function AboutPage() {
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

      {/* ── Background: Why this research matters ── */}
      <SectionWrapper id="background" spacing="lg">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-display-md mb-6">
            {backgroundContent.heading}
          </h2>
          <div className="space-y-4">
            {backgroundContent.paragraphs.map((para, idx) => (
              <p key={idx} className="text-lead text-text-muted">
                {para}
              </p>
            ))}
          </div>
        </div>
      </SectionWrapper>
      {/* ── Why will you ask me to take part? ── */}
<SectionWrapper id="takepart" spacing="lg">
  <div className="mx-auto max-w-3xl">
    <h2 className="font-display text-display-md mb-6">
      {takepartContent.heading}
    </h2>

    <div className="space-y-4">
      {takepartContent.paragraphs.map((para, idx) => (
        <p key={idx} className="text-lead text-text-muted">
          {para}
        </p>
      ))}
    </div>
  </div>
</SectionWrapper>
      {/* ── Study Phases Timeline ── */}
      <SectionWrapper
        id="phases"
        background="surface"
        spacing="lg"
      >
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-display-md mb-4">
            Study Phases
          </h2>
          <p className="text-lead text-text-muted">
            The research programme unfolds across four interconnected phases —
            each building on the findings of the previous to produce rigorous,
            actionable evidence.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Timeline
            items={studyPhases.map((phase) => ({
              phase: phase.phase,
              title: phase.title,
              timeframe: phase.timeframe,
              description: phase.description,
              methods: phase.methods,
            }))}
          />
        </div>
      </SectionWrapper>

      {/* ── Project Goals ── */}
      <SectionWrapper id="goals" spacing="lg">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-display-md mb-4">
            Project Goals
          </h2>
          <p className="text-lead text-text-muted">
            Four clear objectives guide every phase of this research programme.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projectGoals.map((goal, idx) => (
            <Card key={idx} highlighted>
              <div className="flex items-start gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-lg font-bold text-accent"
                  aria-hidden="true"
                >
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-display text-display-sm mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-body text-text-muted">
                    {goal.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Team Teaser ── */}
      <SectionWrapper
        id="team"
        background="surface"
        spacing="lg"
      >
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-display-md mb-4">
            {teamTeaser.heading}
          </h2>
          <p className="text-lead text-text-muted">
            {teamTeaser.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {collaborators.map((person) => (
            <Card key={person.role}>
              {/* Monogram avatar — replace with real photos when available */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-xl font-bold text-accent">
                {person.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
              <h3 className="font-display text-display-sm mb-1">
                {person.name}
              </h3>
              <p className="text-caption font-medium text-text">
                {person.role}
              </p>
              <p className="text-caption">{person.affiliation}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href={teamTeaser.cta.href} variant="secondary">
            {teamTeaser.cta.label}
          </Button>
        </div>
      </SectionWrapper>

      {/* ── Host Institution ── */}
      <SectionWrapper id="institution" spacing="lg">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-display-md mb-6">
            {institutionContent.heading}
          </h2>
          <div className="space-y-4">
            {institutionContent.paragraphs.map((para, idx) => (
              <p key={idx} className="text-lead text-text-muted">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-caption mb-4">
            Interested in collaborating or learning more about the
            methodology?
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/methods" variant="primary">
              Explore Research Methods
            </Button>
            <Button href="/contact" variant="ghost">
              Get in Touch
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}