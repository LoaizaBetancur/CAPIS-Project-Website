import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";
import {
  heroContent,
  contactDetails,
  enquiryTypes,
} from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the PhD research team at the University of Adelaide — collaborate, participate, request materials, or ask a question. We respond within 3–5 business days.",
  openGraph: {
    title: "Contact — PhD Research Project",
    description:
      "Contact the research team for collaboration, participation enquiries, resource requests, media enquiries, or general questions about the PhD research programme.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection
        eyebrow={heroContent.eyebrow}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
      />

      {/* ── Two-column: details + form ── */}
      <SectionWrapper background="bg" spacing="lg">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left column — contact details */}
          <aside className="lg:col-span-1">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-6">
              Contact Details
            </h2>
            <div className="space-y-5">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-3">
                  <span className="text-xl shrink-0" aria-hidden="true">
                    {detail.icon}
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted mb-0.5">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-sm text-text-primary font-medium underline underline-offset-2 hover:text-accent transition-colors"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-sm text-text-primary">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <hr className="my-8 border-border" />

            {/* Quick links */}
            <h3 className="font-display text-sm font-semibold text-text-primary mb-3">
              Quick Links
            </h3>
            <nav className="space-y-2" aria-label="Contact quick links">
              <a
                href="/faq"
                className="block text-sm text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
              >
                Frequently Asked Questions →
              </a>
              <a
                href="/get-involved"
                className="block text-sm text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
              >
                Get Involved pathways →
              </a>
              <a
                href="/media"
                className="block text-sm text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
              >
                Media & Downloads →
              </a>
              <a
                href="/acknowledgements"
                className="block text-sm text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
              >
                Acknowledgements & Funding →
              </a>
            </nav>

            {/* Ethics contact */}
            <div className="mt-8 rounded-lg border border-border bg-surface p-4">
              <p className="text-xs text-muted leading-relaxed">
                <strong className="text-text-primary">
                  Ethics concerns or complaints?
                </strong>{" "}
                Contact the University of Adelaide Human Research Ethics
                Committee Secretariat:{" "}
                <a
                  href="mailto:hrec@adelaide.edu.au"
                  className="font-medium text-accent underline underline-offset-2"
                >
                  hrec@adelaide.edu.au
                </a>{" "}
                or phone{" "}
                <a
                  href="tel:+61883136328"
                  className="font-medium text-accent underline underline-offset-2"
                >
                  +61 8 8313 6328
                </a>
                .
              </p>
            </div>
          </aside>

          {/* Right column — form */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-semibold text-text-primary mb-6">
              Send a Message
            </h2>
            <ContactForm enquiryTypes={enquiryTypes} />
          </div>
        </div>
      </SectionWrapper>

      {/* ── Land acknowledgement ── */}
      <SectionWrapper background="accent-soft" spacing="lg">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs text-muted leading-relaxed">
            This research is conducted on Kaurna Country. We acknowledge the
            Kaurna people as the traditional custodians of the Adelaide Plains
            and pay respect to Elders past and present. We recognise that
            sovereignty was never ceded.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}