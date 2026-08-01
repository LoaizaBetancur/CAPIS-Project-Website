"use client";

import { useState, useCallback } from "react";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FaqItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="divide-y divide-border" role="list">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const headerId = `faq-header-${item.id}`;

        return (
          <div key={item.id} role="listitem">
            {/* Question button */}
            <button
              id={headerId}
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
            >
              <h3 className="font-display text-base font-semibold leading-snug text-text-primary pr-4">
                {item.question}
              </h3>
              <svg
                className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Answer panel */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[600px] opacity-100 pb-5" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}