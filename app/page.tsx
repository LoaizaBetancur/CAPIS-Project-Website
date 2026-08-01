import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import ParticipantCard from "@/components/ParticipantCard";
import StageCard from "@/components/StageCard";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The CAPIS project: Core Athletic Performance-based Intervention Set for Athletes. An international multi-phase research project to develop a core outcome set.",
};

const participants = [
  {
    name: "Athletes",
    description: "Football players classified as Tier 3, 4 or 5 participating in athletic performance-based training.",
    color: "bg-blue-100 text-blue-700",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2"/></svg>
    ),
  },
  {
    name: "Coaches & Performance Staff",
    description: "Strength and conditioning coaches, directors of performance, and sports scientists.",
    color: "bg-green-100 text-green-700",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m22 21-3-3"/><path d="m19 18 3 3"/></svg>
    ),
  },
  {
    name: "Health Professionals",
    description: "Clinicians, physiotherapists, and medical staff working with athletes.",
    color: "bg-orange-100 text-orange-700",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
    ),
  },
  {
    name: "Researchers",
    description: "Researchers investigating athletic performance-based training interventions.",
    color: "bg-purple-100 text-purple-700",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14"/><path d="M3 18a9 9 0 0 1 9-9 9 9 0 0 1 9 9"/></svg>
    ),
  },
];

const stages = [
  {
    number: 1,
    title: "Scoping Review",
    description: "A review of scientific literature to identify what outcome domains are currently used in athletic performance-based training interventions.",
    image: "📚",
  },
  {
    number: 2,
    title: "Focus Groups & Delphi",
    description: "Discussions with athletes and coaches, followed by two e-Delphi surveys to reach consensus on the most important outcomes.",
    image: "💬",
  },
  {
    number: 3,
    title: "Consensus Meeting",
    description: "An online half-day consensus meeting to agree on the final core outcome set domains for plyometric training interventions in football players.",
    image: "🤝",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-soft to-bg py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-up">
              <h1 className="text-display-lg mb-6">
                The CAPIS Project
              </h1>
              <p className="text-lead mb-6 text-text-muted">
                Core Athletic Performance-based Intervention Set for Athletes. 
                An international multi-phase research project to develop a core outcome set 
                that should be measured for all trials of athletic performance-based training interventions.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/team" variant="primary" size="lg">
                  Meet the Team
                </Button>
                <Button href="/resources/researchers" variant="secondary" size="lg">
                  View Protocol
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-soft">
                <div className="flex items-center justify-center rounded-xl bg-accent-soft/50 p-8">
                  <svg width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                    <path d="M2 12h2"/><path d="M20 12h2"/><path d="M12 2v2"/><path d="M12 20v2"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <p className="mt-4 text-center text-sm text-text-muted">
                  Developing consensus on what matters most in athletic performance research
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What is CAPIS? ── */}
      <SectionWrapper id="what-is-capis" background="bg">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="text-display-md mb-4">What is The CAPIS Project?</h2>
          <p className="text-lead text-text-muted">
            Athletes and sport-related professionals need the best evidence about which 
            athletic performance-based training interventions work best and are safe. 
            The CAPIS project aims to identify the most relevant results for athletic 
            performance-based training interventions in athletes.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Why is this needed? ── */}
      <SectionWrapper id="why-needed" background="surface">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="text-display-md mb-4">Why is this project needed?</h2>
          <p className="text-lead text-text-muted mb-6">
            Sport research studies should consistently measure and report the results of 
            athletic performance-based training interventions. We call these results 
            <strong> outcomes</strong>, and they can be positive and unwanted. 
            Outcomes are not always measured and reported in the same manner, making it 
            difficult to compare or combine the results of research.
          </p>
          <p className="text-body text-text-muted">
            The CAPIS project will help us do this by agreeing on which athletic performance 
            outcomes should be measured in sport research studies. We call this a 
            <strong> Core Outcome Set</strong>.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Why participate? ── */}
      <SectionWrapper id="participate" background="bg">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="text-display-md mb-4">Why have you asked me to take part?</h2>
          <p className="text-lead text-text-muted">
            We will invite you to take part because you are a key professional in athletic 
            performance-based training interventions. Your routine or research experiences 
            are really important. We want to know what is important to you when 
            implementing or performing athletic performance-based training interventions 
            and what impact it has on you.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Participants ── */}
      <SectionWrapper id="participants" background="surface">
        <div className="mx-auto max-w-content text-center">
          <h2 className="text-display-md mb-4">Participants</h2>
          <p className="text-lead text-text-muted mb-10 max-w-2xl mx-auto">
            We are inviting expert clinicians, researchers, and consumer representatives 
            to join our Delphi consensus panel.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {participants.map((p) => (
              <ParticipantCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── How will we do the project? ── */}
      <SectionWrapper id="stages" background="bg">
        <div className="mx-auto max-w-content text-center">
          <h2 className="text-display-md mb-4">How will we do the project?</h2>
          <p className="text-lead text-text-muted mb-10 max-w-2xl mx-auto">
            This project involves three stages.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {stages.map((stage) => (
              <StageCard key={stage.number} {...stage} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── What is a Core Outcome Set? ── */}
      <SectionWrapper id="cos" background="surface">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="text-display-md mb-4">What is a core outcome set?</h2>
          <p className="text-lead text-text-muted mb-6">
            A core outcome set (COS) is an agreed standardised collection of outcomes that 
            should be measured and reported in all clinical trials for a specific condition 
            or intervention. This ensures that research is comparable and that nothing 
            important is missed.
          </p>
          <p className="text-body text-text-muted mb-6">
            You can find out more from the COMET Initiative:
          </p>
          <Button href="https://www.comet-initiative.org/" external variant="secondary" size="md">
            COMET Plain Language Summary →
          </Button>
        </div>
      </SectionWrapper>

      {/* ── Publications ── */}
      <SectionWrapper id="publications" background="bg">
        <div className="mx-auto max-w-content">
          <h2 className="text-display-md mb-8 text-center">Latest Publications</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-border bg-surface p-6 shadow-raised">
              <p className="text-caption mb-2 uppercase tracking-wide text-accent">Published</p>
              <h3 className="font-display text-lg font-semibold mb-2">
                A critical appraisal of systematic reviews assessing chronic velocity-based resistance training
              </h3>
              <p className="text-sm text-text-muted mb-3">PLOS ONE · 2026</p>
              <p className="text-mono">DOI: 10.1371/journal.pone.0342992</p>
            </article>
            <article className="rounded-lg border border-border bg-surface p-6 shadow-raised">
              <p className="text-caption mb-2 uppercase tracking-wide text-accent">Published</p>
              <h3 className="font-display text-lg font-semibold mb-2">
                Physical activity for the management of obesity in children up to the age of 9 years
              </h3>
              <p className="text-sm text-text-muted mb-3">Cochrane Database of Systematic Reviews · 2026</p>
              <p className="text-mono">DOI: 10.1002/14651858.CD015988</p>
            </article>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Get Involved CTA ── */}
      <SectionWrapper background="accent-soft">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="text-display-md mb-4">Interested in Participating?</h2>
          <p className="text-lead text-text-muted mb-6">
            We are recruiting expert clinicians, researchers, and consumer representatives 
            to join our Delphi consensus panel. Expressions of interest are welcome from 
            across clinical disciplines.
          </p>
          <Button href="/resources/researchers" variant="primary" size="lg">
            Find Out How to Take Part
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
