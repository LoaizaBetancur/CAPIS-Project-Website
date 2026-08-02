import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import ParticipantCard from "@/components/ParticipantCard";
import StageCard from "@/components/StageCard";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The CAPIS project: Core Athletic Performance-based Intervention Set for Athletes. An international five-phase research project to develop a core outcome set for plyometric training interventions in Tier 3, 4, or 5 football players.",
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
      {/* ── HERO BANNER (dark, like COMBAT) ── */}
      <section style={{ backgroundColor: "#1E2D4B" }}>
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1
                className="font-display font-bold text-white mb-6"
                style={{
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                THE<br />CAPIS<br />PROJECT
              </h1>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#8BA4C7" }}>
                Core Athletic Performance-based Intervention Set for Athletes
              </p>
            </div>
            <div className="flex items-center justify-center">
              {/* VIDEO PLACEHOLDER — replace src with your video when ready */}
              <div
                className="relative w-full rounded-xl overflow-hidden shadow-lg"
                style={{ aspectRatio: "16/9", backgroundColor: "#2A3F5F" }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="CAPIS Project video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: "4px", backgroundColor: "#1E2D4B" }} />

      {/* ── What is CAPIS? ── */}
      <SectionWrapper id="what-is-capis" background="bg">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                className="font-display font-semibold mb-4"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1.2,
                  color: "#1A202C",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                What is The CAPIS Project?
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#4A5568" }}>
                Athletes and sport-related professionals need the best evidence about which 
                athletic performance-based training interventions work best and are safe. 
                The CAPIS project aims to identify a subset of core outcome set (COS) domains 
                for plyometric training interventions in adult football players classified as 
                Tiers 3, 4, or 5.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="text-8xl">🏃</div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── DIVIDER ── */}
      <div style={{ height: "4px", backgroundColor: "#1E2D4B" }} />

      {/* ── Why is this needed? ── */}
      <SectionWrapper id="why-needed" background="surface">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                className="font-display font-semibold mb-4"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1.2,
                  color: "#1A202C",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                Why is this project needed?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#4A5568" }}>
                Football research studies should consistently measure and report the results of 
                athletic performance-based training interventions. We call these results{" "}
                <strong>outcomes</strong>, and they can be positive or unwanted. 
                When studies measure different outcomes in diverse ways, it becomes 
                difficult to compare or combine them.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#4A5568" }}>
                This project will agree on which outcomes should always be measured in plyometric 
                training research studies. We call this agreed-upon minimum list a{" "}
                <strong>Core Outcome Set (COS)</strong>.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="text-8xl">🤔</div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── DIVIDER ── */}
      <div style={{ height: "4px", backgroundColor: "#1E2D4B" }} />

      {/* ── Why participate? ── */}
      <SectionWrapper id="participate" background="bg">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                className="font-display font-semibold mb-4"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1.2,
                  color: "#1A202C",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                Why have you asked me to take part?
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#4A5568" }}>
                We will invite you to take part because you are a key professional in athletic 
                performance-based training interventions. Your routine or research experiences 
                are really important. We want to know what is important to you when 
                implementing or performing plyometric training interventions and what impact 
                it has on you.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="text-8xl">✋</div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── DIVIDER ── */}
      <div style={{ height: "4px", backgroundColor: "#1E2D4B" }} />

      {/* ── Participants ── */}
      <SectionWrapper id="participants" background="surface">
        <div className="mx-auto max-w-[1280px] text-center">
          <h2
            className="font-display font-semibold mb-4"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              lineHeight: 1.2,
              color: "#1A202C",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            Participants
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "#4A5568" }}>
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

      {/* ── DIVIDER ── */}
      <div style={{ height: "4px", backgroundColor: "#1E2D4B" }} />

      {/* ── How will we do the project? ── */}
      <SectionWrapper id="stages" background="bg">
        <div className="mx-auto max-w-[1280px] text-center">
          <h2
            className="font-display font-semibold mb-4"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              lineHeight: 1.2,
              color: "#1A202C",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            How will we do the project?
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "#4A5568" }}>
            This project involves five phases, following the COMET and OMERACT methodological guidance.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stages.map((stage) => (
              <StageCard key={stage.number} {...stage} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── DIVIDER ── */}
      <div style={{ height: "4px", backgroundColor: "#1E2D4B" }} />

      {/* ── What is a Core Outcome Set? (with EMBEDDED video) ── */}
      <SectionWrapper id="cos" background="surface">
        <div className="mx-auto max-w-[1280px]">
          <h2
            className="font-display font-semibold mb-4"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              lineHeight: 1.2,
              color: "#1A202C",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            What is a core outcome set?
          </h2>
          <p className="text-base leading-relaxed mb-2" style={{ color: "#4A5568" }}>
            A core outcome set (COS) is an agreed standardised collection of outcomes that 
            should be measured and reported in all clinical trials for a specific condition 
            or intervention. This ensures that research is comparable and that nothing 
            important is missed.
          </p>
          <p className="text-base leading-relaxed mb-6" style={{ color: "#4A5568" }}>
            The video below explains more about a core outcome set. Further information can be found from the COMET Initiative in the link below:
          </p>
          <p className="mb-6">
            <a
              href="https://www.comet-initiative.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
              style={{ color: "#3C7887" }}
            >
              COMET Plain Language Summary
            </a>
          </p>

          {/* EMBEDDED VIDEO */}
          <div
            className="relative w-full rounded-lg overflow-hidden border shadow-md mx-auto"
            style={{ maxWidth: "720px", aspectRatio: "16/9", borderColor: "#E2E8F0" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="What are core outcome sets? A COMET Initiative video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </SectionWrapper>

      {/* ── DIVIDER ── */}
      <div style={{ height: "4px", backgroundColor: "#1E2D4B" }} />

      {/* ── Project Information (like COMBAT) ── */}
      <SectionWrapper background="bg">
        <div className="mx-auto max-w-[1280px]">
          <h2
            className="font-display font-semibold mb-6"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              lineHeight: 1.2,
              color: "#1A202C",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            Project information
          </h2>

          <div className="space-y-6 max-w-prose">
            <div>
              <h3
                className="font-semibold text-base mb-1"
                style={{ color: "#1A202C", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Registration
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                This Study is registered with the COMET database as Study 3589 (
                <a
                  href="https://www.comet-initiative.org/Studies/Details/3589"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: "#3C7887" }}
                >
                  https://www.comet-initiative.org/Studies/Details/3589
                </a>
                ).
              </p>
            </div>

            <div>
              <h3
                className="font-semibold text-base mb-1"
                style={{ color: "#1A202C", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Ethics
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                Ethics approval: HREC/HREC-1/2026/1233(v5)
              </p>
            </div>

            <div>
              <h3
                className="font-semibold text-base mb-1"
                style={{ color: "#1A202C", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Sponsor
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                JBI, School of Public Health, University of Adelaide
              </p>
            </div>

            <div>
              <h3
                className="font-semibold text-base mb-1"
                style={{ color: "#1A202C", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Contact
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                The Research Sponsor can be contacted at{" "}
                <a
                  href="mailto:andresfelipe.loaizabetancur@adelaide.edu.au"
                  className="hover:underline"
                  style={{ color: "#3C7887" }}
                >
                  andresfelipe.loaizabetancur@adelaide.edu.au
                </a>
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── DIVIDER ── */}
      <div style={{ height: "4px", backgroundColor: "#1E2D4B" }} />

      {/* ── Publications ── */}
      <SectionWrapper background="surface">
        <div className="mx-auto max-w-[1280px]">
          <h2
            className="font-display font-semibold mb-8 text-center"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              lineHeight: 1.2,
              color: "#1A202C",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            Latest Publications
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border p-6 shadow-sm" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
              <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: "#3C7887" }}>Published</p>
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "#1A202C" }}>
                A critical appraisal of systematic reviews assessing chronic velocity-based resistance training
              </h3>
              <p className="text-sm mb-3" style={{ color: "#4A5568" }}>PLOS ONE · 2026</p>
              <p className="text-xs font-mono" style={{ color: "#4A5568" }}>DOI: 10.1371/journal.pone.0342992</p>
            </article>
            <article className="rounded-lg border p-6 shadow-sm" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
              <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: "#3C7887" }}>Published</p>
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "#1A202C" }}>
                Physical activity for the management of obesity in children up to the age of 9 years
              </h3>
              <p className="text-sm mb-3" style={{ color: "#4A5568" }}>Cochrane Database of Systematic Reviews · 2026</p>
              <p className="text-xs font-mono" style={{ color: "#4A5568" }}>DOI: 10.1002/14651858.CD015988</p>
            </article>
          </div>
        </div>
      </SectionWrapper>

      {/* ── DIVIDER ── */}
      <div style={{ height: "4px", backgroundColor: "#1E2D4B" }} />

      {/* ── Get Involved CTA ── */}
      <SectionWrapper background="bg">
        <div className="mx-auto max-w-[70ch] text-center">
          <h2
            className="font-display font-semibold mb-4"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              lineHeight: 1.2,
              color: "#1A202C",
            }}
          >
            Interested in Participating?
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "#4A5568" }}>
            We are recruiting expert clinicians, researchers, academics, and football players 
            to join our Delphi consensus panel. Expressions of interest are welcome from across 
            clinical disciplines and geographic regions.
          </p>
          <Button href="/resources/researchers" variant="primary" size="lg">
            Find Out How to Take Part
          </Button>
          <p className="mt-4 text-sm" style={{ color: "#4A5568" }}>
            Contact:{" "}
            <a href="mailto:andresfelipe.loaizabetancur@adelaide.edu.au" className="hover:underline" style={{ color: "#3C7887" }}>
              andresfelipe.loaizabetancur@adelaide.edu.au
            </a>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
