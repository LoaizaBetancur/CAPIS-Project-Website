import type { TeamMember } from "@/lib/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <article className="group flex flex-col items-center rounded-xl border border-border bg-surface p-6 text-center transition-shadow hover:shadow-raised sm:p-7">
      {/* ── Monogram avatar ── */}
      <div
        className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent-soft text-2xl font-bold text-accent"
        aria-hidden="true"
      >
        {initials}
      </div>

      {/* ── Identity ── */}
      <h3 className="font-display text-xl font-semibold text-text-primary">
        {member.name}
      </h3>
      <p className="mt-0.5 text-sm font-medium text-text-primary">
        {member.role}
      </p>
      <p className="mt-1 text-sm text-muted">{member.affiliation}</p>

      {/* ── Bio ── */}
      <p className="mt-4 max-w-prose text-left text-sm leading-relaxed text-muted">
        {member.bio}
      </p>

      {/* ── Links ── */}
      {(member.orcid || member.email) && (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
          {member.orcid && (
            <a
              href={`https://orcid.org/${member.orcid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft/70 px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
              className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft/70 px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
                <rect x="1" y="3" width="14" height="10" rx="2" />
                <path d="M1 5l7 4.5L15 5" />
              </svg>
              Email
            </a>
          )}
        </div>
      )}
    </article>
  );
}