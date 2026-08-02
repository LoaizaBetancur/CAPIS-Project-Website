import Image from "next/image";

interface Publication {
  title: string;
  journal: string;
  year: number;
  doi: string;
}

interface Event {
  title: string;
  location: string;
}

interface TeamMember {
  name: string;
  role: string;
  affiliation: string;
  bio: string;
  email?: string;
  image?: string;
  category: "core" | "advisory" | "consumer";
  publications?: Publication[];
  events?: Event[];
}

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div
      className="rounded-xl border bg-white p-6 shadow-sm"
      style={{ borderColor: "#E2E8F0" }}
    >
      {member.image && (
        <div className="mb-4 flex justify-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2" style={{ borderColor: "#E2E8F0" }}>
            <Image
              src={member.image}
              alt={`Photo of ${member.name}`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        </div>
      )}

      <h3 className="font-display text-lg font-semibold text-center mb-1" style={{ color: "#1A202C" }}>
        {member.name}
      </h3>

      <p className="text-sm font-medium text-center mb-1" style={{ color: "#3C7887" }}>
        {member.role}
      </p>

      <p className="text-xs text-center mb-3" style={{ color: "#4A5568" }}>
        {member.affiliation}
      </p>

      <p className="text-sm leading-relaxed text-center mb-4" style={{ color: "#4A5568" }}>
        {member.bio}
      </p>

      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="mt-auto mb-4 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium w-full transition-colors"
          style={{ backgroundColor: "#EBF4FF", color: "#2B6CB0" }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2B6CB0"; e.currentTarget.style.color = "#FFFFFF"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#EBF4FF"; e.currentTarget.style.color = "#2B6CB0"; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          Email
        </a>
      )}

      {/* Publications */}
      {member.publications && member.publications.length > 0 && (
        <div className="mt-4 pt-4 border-t" style={{ borderColor: "#E2E8F0" }}>
          <h4 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#1A202C" }}>
            Selected Publications
          </h4>
          <ul className="space-y-2">
            {member.publications.map((pub) => (
              <li key={pub.doi} className="text-xs" style={{ color: "#4A5568", lineHeight: 1.5 }}>
                <span className="font-medium" style={{ color: "#1A202C" }}>{pub.title}</span>
                <br />
                <span style={{ color: "#3C7887" }}>{pub.journal} · {pub.year}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Events */}
      {member.events && member.events.length > 0 && (
        <div className="mt-4 pt-4 border-t" style={{ borderColor: "#E2E8F0" }}>
          <h4 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#1A202C" }}>
            Presentations & Conferences
          </h4>
          <ul className="space-y-1">
            {member.events.map((evt, i) => (
              <li key={i} className="text-xs" style={{ color: "#4A5568", lineHeight: 1.5 }}>
                {evt.title} — <span style={{ color: "#3C7887" }}>{evt.location}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
