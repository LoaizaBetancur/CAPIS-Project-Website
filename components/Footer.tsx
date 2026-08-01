import Link from "next/link";

interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "Project",
    links: [
      { label: "About", href: "/about" },
      { label: "Methods", href: "/methods" },
      { label: "Team", href: "/team" },
      { label: "Publications", href: "/publications" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface" role="contentinfo">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="mb-3 inline-flex items-center gap-2 font-display text-lg font-semibold text-text no-underline"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  width="28"
                  height="28"
                  rx="6"
                  fill="var(--color-accent)"
                />
                <path
                  d="M7 14h5.5M7 18h8M7 10h3.5M17.5 8v12l5-6-5-6z"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              PhD Research Project
            </Link>
            <p className="text-caption max-w-xs">
              Advancing evidence-based clinical practice through rigorous research,
              systematic review, and expert consensus.
            </p>
          </div>

          {/* Link groups */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 font-display text-sm font-semibold text-text">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-caption transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h3 className="mb-3 font-display text-sm font-semibold text-text">
              Contact
            </h3>
            <ul className="flex flex-col gap-2 text-caption">
              <li>
                <a
                  href="mailto:research@university.edu"
                  className="transition-colors hover:text-accent"
                >
                  research@university.edu
                </a>
              </li>
              <li className="text-text-muted">
                Faculty of Health Sciences
                <br />
                University of Adelaide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-caption text-text-muted">
            &copy; {new Date().getFullYear()} PhD Research Project. All rights
            reserved.
          </p>
          <p className="text-caption text-text-muted">
            Built with Next.js &middot; Open access research
          </p>
        </div>
      </div>
    </footer>
  );
}