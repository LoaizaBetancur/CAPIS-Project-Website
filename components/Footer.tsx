import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "Project",
    links: [
      { label: "Home", href: "/" },
      { label: "Study Team", href: "/team" },
      { label: "Useful links", href: "/useful-links" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "For athletes", href: "/resources/athletes" },
      { label: "For coaches", href: "/resources/coaches" },
      { label: "For researchers", href: "/resources/researchers" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 inline-block rounded bg-accent px-3 py-1.5 text-white font-display font-bold text-sm tracking-wide">
              THE CAPIS PROJECT
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Core Athletic Performance-based Intervention Set for Athletes. 
              Developing a core outcome set for plyometric training interventions 
              in Tier 3, 4, or 5 football players.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-text-muted space-y-2">
          <p>© {new Date().getFullYear()} The CAPIS Project. All rights reserved.</p>
          <p>School of Public Health, Adelaide University</p>
          <p className="text-xs">
            Ethics approval: HREC/HREC-1/2026/1233(v5) · COMET ID: 3589
          </p>
          <p className="text-xs">
            Contact:{" "}
            <a href="mailto:andresfelipe.loaizabetancur@adelaide.edu.au" className="text-accent hover:underline">
              andresfelipe.loaizabetancur@adelaide.edu.au
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
