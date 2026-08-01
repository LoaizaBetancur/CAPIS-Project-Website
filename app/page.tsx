import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import ParticipantCard from "@/components/ParticipantCard";
import StageCard from "@/components/StageCard";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The CAPIS project: Core Athletic Performance-based Intervention Set for Athletes." ;
    "An international five-phase research project to develop a core outcome set for plyometric training interventions in Tier 3, 4, or 5 football players.",
};

const participants = [
  {
    name: "Athletes",
    description: "Tier 3, 4, or 5 football players (≥18 years) participating in plyometric training interventions.",
    color: "bg-blue-100 text-blue-700",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2"/></svg>
    ),
  },
  {
    name: "Coaches & Performance Staff",
    description: "Strength and conditioning coaches, football coaches, and sports physicians working with elite players.",
    color: "bg-green-100 text-green-700",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m22 21-3-3"/><path d="m19 18 3 3"/></svg>
    ),
  },
  {
    name: "Academics & Researchers",
    description: "Sport science lecturers, students, trialists, and systematic reviewers in athletic performance research.",
    color: "bg-purple-100 text-purple-700",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14"/><path d="M3 18a9 9 0 0 1 9-9 9 9 0 0 1 9 9"/></svg>
    ),
  },
  {
    name: "Policymakers",
    description: "Chief performance officers and directors of performance involved in athletic performance decision-making.",
    color: "bg-orange-100 text-orange-700",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
  },
];

const stages = [
  {
    number: 1,
    title: "Scoping Review",
    description: "A comprehensive review of scientific literature to identify all outcome domains already measured in plyometric training studies with Tier 3, 4, or 5 football players.",
    image: "📚",
  },
  {
    number: 2,
    title: "Focus Groups",
    description: "Semi-structured interviews with players, coaches, and experts to discover outcomes that matter in practice but may be missing from research.",
    image: "💬",
  },
  {
    number: 3,
    title: "Winnowing & Binning",
    description: "Online meetings with each interest-holder group to organise and group outcome domains into a clear, manageable list of candidates.",
    image: "🗂️",
  },
  {
    number: 4,
    title: "e-Delphi Surveys",
    description: "Two rounds of online surveys where players, coaches, academics, and researchers vote on which outcomes are most important using a 9-point scale.",
    image: "📊",
  },
  {
    number: 5,
    title: "Consensus Meeting",
    description: "A half-day online meeting to reach final agreement on the core outcome set that all future plyometric training trials should measure.",
    image: "🤝",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-soft to-bg py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-up">
              <p className="mb-4 font-body text-sm font-medium uppercase tracking-widest text-accent">
                Core Outcome Set Development
              </p>
              <h1 className="text-display-lg mb-6">
                The CAPIS Project
              </h1>
              <p className="text-lead mb-6 text-text-muted">
                Core Athletic Performance-based Intervention Set for Athletes. 
                An international five-phase research project to develop a core outcome set 
                for plyometric training interventions in Tier 3, 4, or 5 football players.
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
                  Developing consensus on what matters most in plyometric training research
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper id="what-is-capis" background="bg">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="text-display-md mb-4">What is The CAPIS Project?</h2>
          <p className="text-lead text-text-muted">
            Athletes and sport-related professionals need the best evidence about which 
            athletic performance-based training interventions work best and are safe. 
            The CAPIS project aims to identify a subset of core outcome set (COS) domains 
            for plyometric training interventions in adult football players classified as 
            Tiers 3, 4, or 5.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="why-needed" background="surface">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="text-display-md mb-4">Why is this project needed?</h2>
          <p className="text-lead text-text-muted mb-6">
            Football research studies should consistently measure and report the results of 
            athletic performance-based training interventions. We call these results 
            <strong> outcomes</strong>, and they can be positive or unwanted. 
            When studies measure different outcomes in diverse ways, it becomes 
            difficult to compare or combine them.
          </p>
          <p className="text-body text-text-muted">
            This project will agree on which outcomes should always be measured in plyometric 
            training research studies. We call this agreed-upon minimum list a 
            <strong> Core Outcome Set (COS)</strong>.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="participate" background="bg">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="text-display-md mb-4">Why have you asked me to take part?</h2>
          <p className="text-lead text-text-muted">
            We will invite you to take part because you are a key professional in athletic 
            performance-based training interventions. Your routine or research experiences 
            are really important. We want to know what is important to you when 
            implementing or performing plyometric training interventions and what impact 
            it has on you.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="participants" background="surface">
        <div className="mx-auto max-w-content text-center">
          <h2 className="text-display-md mb-4">Participants</h2>
          <p className="text-lead text-text-muted mb-10 max-w-2xl mx-auto">
            We are recruiting four key interest-holder groups to join our consensus study. 
            Expressions of interest are welcome from across all disciplines and regions.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {participants.map((p) => (
              <ParticipantCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="stages" background="bg">
        <div className="mx-auto max-w-content text-center">
          <h2 className="text-display-md mb-4">How will we do the project?</h2>
          <p className="text-lead text-text-muted mb-10 max-w-2xl mx-auto">
            This project involves five phases, following the COMET and OMERACT methodological guidance.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stages.map((stage) => (
              <StageCard key={stage.number} {...stage} />
            ))}
          </div>
        </div>
      </SectionWrapper>

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

      <SectionWrapper background="accent-soft">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="text-display-md mb-4">Interested in Participating?</h2>
          <p className="text-lead text-text-muted mb-6">
            We are recruiting expert clinicians, researchers, academics, and football players 
            to join our Delphi consensus panel. Expressions of interest are welcome from across 
            clinical disciplines and geographic regions.
          </p>
          <Button href="/resources/researchers" variant="primary" size="lg">
            Find Out How to Take Part
          </Button>
          <p className="mt-4 text-sm text-text-muted">
            Contact:{" "}
            <a href="mailto:andresfelipe.loaizabetancur@adelaide.edu.au" className="text-accent hover:underline">
              andresfelipe.loaizabetancur@adelaide.edu.au
            </a>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
