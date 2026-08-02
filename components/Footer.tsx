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
    <footer style={{ backgroundColor: "#1E2D4B", borderTop: "1px solid #2A3F5F" }}>
      <div className="mx-auto max-w-[1280px] px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 text-white font-display font-bold text-sm tracking-wide">
              THE CAPIS PROJECT
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#8BA4C7" }}>
              Core Athletic Performance-based Intervention Set for Athletes.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "#8BA4C7" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-6 text-center text-xs space-y-2" style={{ borderColor: "#2A3F5F", color: "#8BA4C7" }}>
          <p>© {new Date().getFullYear()} The CAPIS Project. All rights reserved.</p>
          <p>Faculty of Health Sciences, University of Adelaide</p>
          <p>
            Ethics approval: HREC/HREC-1/2026/1233(v5) ·{" "}
            <a
              href="https://www.comet-initiative.org/Studies/Details/3589"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
              style={{ color: "#8BA4C7" }}
            >
              COMET ID: 3589
            </a>
          </p>
          <p>
            Contact:{" "}
            <a href="mailto:andresfelipe.loaizabetancur@adelaide.edu.au" className="underline hover:text-white" style={{ color: "#8BA4C7" }}>
              andresfelipe.loaizabetancur@adelaide.edu.au
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
