import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import {
  heroContent,
  upcomingEvents,
  pastEvents,
  TYPE_META,
  ResearchEvent,
} from "@/lib/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events for this PhD research programme — conferences, workshops, webinars, advisory panel meetings, and public symposia on evidence-based clinical practice.",
  openGraph: {
    title: "Events — PhD Research Project",
    description:
      "Attend workshops, webinars, and symposia. Access recordings and slides from past events on clinical research methodology and evidence translation.",
  },
};

/* ── Helpers ── */

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AU", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatDateRange(start: string, end?: string): string {
  const startDate = new Date(start);
  const startStr = startDate.toLocaleDateString("en-AU", {
    weekday: "short",
    month: "long",
    day: "numeric",
  });
  if (!end) return startStr;
  const endDate = new Date(end);
  const endStr = endDate.toLocaleDateString("en-AU", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return `${startStr} – ${endStr}`;
}

/* ── Event Card ── */

function EventCard({
  event,
  isPast: past,
}: {
  event: ResearchEvent;
  isPast: boolean;
}) {
  const meta = TYPE_META[event.type];

  return (
    <article
      className={`group rounded-xl border bg-surface p-6 transition-shadow hover:shadow-raised sm:p-8 ${
        event.featured
          ? "ring-2 ring-accent/20 border-accent/30"
          : "border-border"
      }`}
    >
      {/* Type + date header */}
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-accentSoft px-3 py-1 text-xs font-semibold text-accent">
          <span aria-hidden="true">{meta.icon}</span>
          {meta.label}
        </span>
        <time
          dateTime={event.date}
          className="font-mono text-xs font-medium uppercase tracking-wider text-muted"
        >
          {formatDateRange(event.date, event.endDate)}
        </time>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
        {event.title}
      </h3>

      {/* Meta row */}
      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
        {event.time && (
          <span className="inline-flex items-center gap-1.5">
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {event.time}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5">
          <svg
            className="h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          {event.location}
        </span>
      </div>

      {/* Description */}
      <p className="mt-3 max-w-prose leading-relaxed text-muted">
        {event.description}
      </p>

      {/* Actions */}
      <div className="mt-5 flex flex-wrap gap-3">
        {!past && event.registrationUrl && (
          <Button href={event.registrationUrl} variant="primary" size="md">
            Register →
          </Button>
        )}
        {!past && !event.registrationUrl && (
          <span className="inline-flex items-center rounded-md bg-accentSoft px-3 py-1.5 text-xs font-medium text-accent">
            Registration opens soon
          </span>
        )}
        {past && event.slidesUrl && (
          <Button href={event.slidesUrl} variant="secondary" size="md">
            View slides
          </Button>
        )}
        {past && event.recordingUrl && (
          <Button href={event.recordingUrl} variant="secondary" size="md">
            Watch recording
          </Button>
        )}
        {event.programmeUrl && (
          <Button href={event.programmeUrl} variant="ghost" size="sm">
            Programme details
          </Button>
        )}
      </div>

      {/* Featured marker */}
      {event.featured && (
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-accentSoft/60 px-2.5 py-1 text-xs font-medium text-accent">
          <svg
            className="h-3.5 w-3.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" />
          </svg>
          Featured event
        </div>
      )}
    </article>
  );
}

/* ── Page ── */

export default function EventsPage() {
  const hasUpcoming = upcomingEvents.length > 0;
  const hasPast = pastEvents.length > 0;

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection
        eyebrow={heroContent.eyebrow}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
      />

      {/* ── Upcoming Events ── */}
      {hasUpcoming && (
        <SectionWrapper background="bg" spacing="lg">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              Upcoming Events
            </h2>
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white tabular-nums">
              {upcomingEvents.length}
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast={false} />
            ))}
          </div>
        </SectionWrapper>
      )}

      {!hasUpcoming && (
        <SectionWrapper background="bg" spacing="lg">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="font-display text-2xl font-semibold text-text-primary">
              No Upcoming Events
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              There are no events currently scheduled. Check back soon — new
              workshops, webinars, and symposia are announced as the research
              programme progresses.
            </p>
            <div className="mt-6">
              <Button href="/updates" variant="secondary">
                Follow study updates
              </Button>
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* ── Past Events ── */}
      {hasPast && (
        <SectionWrapper background="surface" spacing="lg">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              Past Events
            </h2>
            <span className="rounded-full bg-muted/15 px-2.5 py-0.5 text-xs font-semibold text-muted tabular-nums">
              {pastEvents.length}
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast={true} />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* ── Calendar Subscribe ── */}
      <SectionWrapper background="accent-soft" spacing="md">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-display text-xl font-semibold text-text-primary">
            Add to Your Calendar
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            Subscribe to the project events calendar to receive automatic
            updates when new events are scheduled.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Button href="/events.ics" variant="primary" size="sm">
              Download iCal feed
            </Button>
            <Button href="/contact" variant="ghost" size="sm">
              Request an invitation
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}