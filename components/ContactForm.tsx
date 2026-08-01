"use client";

import { useState, useCallback, type FormEvent } from "react";
import type { EnquiryType } from "@/lib/data/contact";

interface ContactFormProps {
  enquiryTypes: EnquiryType[];
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ enquiryTypes }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [selectedType, setSelectedType] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = useCallback(
    (formData: FormData): Record<string, string> => {
      const errs: Record<string, string> = {};
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;

      if (!name || name.trim().length < 2) {
        errs.name = "Please enter your name (at least 2 characters).";
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        errs.email = "Please enter a valid email address.";
      }
      if (!selectedType) {
        errs.enquiryType = "Please select an enquiry type.";
      }
      if (!message || message.trim().length < 10) {
        errs.message = "Please enter a message (at least 10 characters).";
      }
      return errs;
    },
    [selectedType]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrors({});

      const formData = new FormData(e.currentTarget);
      const validationErrors = validate(formData);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setStatus("submitting");

      // Simulate submission — in production this would POST to an API endpoint
      setTimeout(() => {
        setStatus("success");
      }, 1200);
    },
    [validate]
  );

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-surface p-8 text-center sm:p-10">
        <span className="text-4xl" aria-hidden="true">
          ✅
        </span>
        <h3 className="mt-4 font-display text-xl font-semibold text-text-primary">
          Thank you — your message has been sent
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted max-w-md mx-auto">
          We've received your enquiry and will respond within 3–5 business days.
          If your enquiry is urgent, please email{" "}
          <a
            href="mailto:phd-research@adelaide.edu.au"
            className="font-medium text-accent underline underline-offset-2"
          >
            phd-research@adelaide.edu.au
          </a>{" "}
          directly.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setSelectedType("");
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-border bg-surface p-6 sm:p-8"
      aria-label="Contact form"
    >
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            aria-describedby={errors.name ? "err-name" : undefined}
            aria-invalid={!!errors.name}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm text-text-primary bg-bg placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent ${
              errors.name ? "border-red-400" : "border-border"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="err-name" className="mt-1 text-xs text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-describedby={errors.email ? "err-email" : undefined}
            aria-invalid={!!errors.email}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm text-text-primary bg-bg placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent ${
              errors.email ? "border-red-400" : "border-border"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="err-email" className="mt-1 text-xs text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Organisation (optional) */}
        <div>
          <label
            htmlFor="contact-org"
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            Organisation or Affiliation{" "}
            <span className="text-muted font-normal">(optional)</span>
          </label>
          <input
            id="contact-org"
            name="organisation"
            type="text"
            autoComplete="organization"
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-text-primary bg-bg placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            placeholder="University, hospital, organisation, or community group"
          />
        </div>

        {/* Enquiry type */}
        <fieldset>
          <legend className="block text-sm font-medium text-text-primary mb-3">
            Enquiry type <span className="text-red-500">*</span>
          </legend>
          {errors.enquiryType && (
            <p id="err-type" className="mb-2 text-xs text-red-600" role="alert">
              {errors.enquiryType}
            </p>
          )}
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {enquiryTypes.map((type) => (
              <label
                key={type.id}
                className={`flex cursor-pointer items-start gap-2.5 rounded-lg border px-4 py-3 text-sm transition-colors ${
                  selectedType === type.id
                    ? "border-accent bg-accent-soft"
                    : "border-border bg-bg hover:border-muted/50"
                }`}
              >
                <input
                  type="radio"
                  name="enquiryType"
                  value={type.id}
                  checked={selectedType === type.id}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="sr-only"
                />
                <span className="text-lg shrink-0 mt-[-1px]" aria-hidden="true">
                  {type.icon}
                </span>
                <div>
                  <span className="font-medium text-text-primary">
                    {type.label}
                  </span>
                  <span className="block mt-0.5 text-xs text-muted leading-relaxed">
                    {type.description}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            minLength={10}
            aria-describedby={errors.message ? "err-message" : undefined}
            aria-invalid={!!errors.message}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm text-text-primary bg-bg placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent resize-y ${
              errors.message ? "border-red-400" : "border-border"
            }`}
            placeholder="Tell us about your interest, question, or how you'd like to be involved..."
          />
          {errors.message && (
            <p id="err-message" className="mt-1 text-xs text-red-600" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {status === "submitting" ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Sending…
              </>
            ) : (
              "Send message"
            )}
          </button>
          <p className="text-xs text-muted leading-relaxed max-w-xs">
            By submitting, you acknowledge that your information will be handled
            in accordance with the University's Privacy Policy. We do not share
            your details with third parties without consent.
          </p>
        </div>

        {/* Error banner */}
        {status === "error" && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            Something went wrong. Please try again or email us directly at{" "}
            <a
              href="mailto:phd-research@adelaide.edu.au"
              className="font-medium underline underline-offset-2"
            >
              phd-research@adelaide.edu.au
            </a>
            .
          </div>
        )}
      </div>
    </form>
  );
}