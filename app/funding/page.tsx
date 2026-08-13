"use client";

import { useState } from "react";
import Image from "next/image";

const NAVY = "#2A3F5F";
const TEAL = "#3C7887";
const ACCENT = "#2B6CB0";
const SUCCESS = "#047857";

const totalSteps = 4;

export default function FundingPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  function next() {
    if (step === totalSteps) {
      setSubmitted(true);
      return;
    }
    setStep((s) => Math.min(s + 1, totalSteps));
  }

  function prev() {
    setStep((s) => Math.max(s - 1, 1));
  }

  function reset() {
    setStep(1);
    setSubmitted(false);
  }

  return (
    <main>
      {/* ── Hero ── */}
      <section style={{ backgroundColor: NAVY }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "48px 24px",
            display: "grid",
            alignItems: "center",
            gap: "40px",
            gridTemplateColumns: "1fr 1fr",
          }}
          className="hero-grid"
        >
          <div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Funding
              <br />
              Expression of Interest
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#B0C4DE",
                marginTop: "12px",
              }}
            >
              Submit your interest to collaborate with or fund CAPIS-related research.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", width: "280px", height: "220px" }}>
              <Image
                src="/images/funding.png"
                alt="Funding expression of interest graphic"
                fill
                style={{ objectFit: "contain" }}
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "4px", backgroundColor: NAVY }} />

      {/* ── Form ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "48px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                backgroundColor: NAVY,
                color: "#FFFFFF",
                padding: "28px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                Expression of Interest
              </h2>
              <p style={{ fontSize: "13px", color: "#B0C4DE" }}>
                Complete the form below. All fields marked with * are required.
              </p>
            </div>

            {/* Progress bar */}
            {!submitted && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "20px 28px 0",
                }}
              >
                {Array.from({ length: totalSteps }, (_, i) => i + 1).map((n) => {
                  const isActive = n === step;
                  const isCompleted = n < step;
                  return (
                    <div
                      key={n}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "6px",
                        flex: 1,
                        position: "relative",
                      }}
                    >
                      {n < totalSteps && (
                        <div
                          style={{
                            position: "absolute",
                            top: "11px",
                            left: "50%",
                            width: "100%",
                            height: "2px",
                            backgroundColor:
                              n < step ? ACCENT : "#E2E8F0",
                            zIndex: 0,
                          }}
                        />
                      )}
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          backgroundColor: isCompleted
                            ? SUCCESS
                            : isActive
                            ? ACCENT
                            : "#E2E8F0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          zIndex: 1,
                        }}
                      >
                        {isCompleted ? "✓" : n}
                      </div>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 500,
                          color: isActive ? ACCENT : "#A0AEC0",
                        }}
                      >
                        {n === 1 && "Applicant"}
                        {n === 2 && "Project"}
                        {n === 3 && "Budget"}
                        {n === 4 && "Review"}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Form body */}
            <div style={{ padding: "28px" }}>
              {!submitted ? (
                <>
                  {/* Step 1: Applicant */}
                  {step === 1 && (
                    <div style={{ animation: "fadeIn 300ms ease" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "16px",
                          fontWeight: 600,
                          color: NAVY,
                          marginBottom: "16px",
                        }}
                      >
                        Applicant Details
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "14px",
                          marginBottom: "14px",
                        }}
                        className="form-row"
                      >
                        <FormGroup label="First Name *">
                          <input type="text" placeholder="e.g. Sarah" />
                        </FormGroup>
                        <FormGroup label="Last Name *">
                          <input type="text" placeholder="e.g. Chen" />
                        </FormGroup>
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "14px",
                          marginBottom: "14px",
                        }}
                        className="form-row"
                      >
                        <FormGroup label="Email *">
                          <input
                            type="email"
                            placeholder="sarah.chen@institution.edu"
                          />
                        </FormGroup>
                        <FormGroup label="Phone">
                          <input type="tel" placeholder="+61 ..." />
                        </FormGroup>
                      </div>
                      <FormGroup label="Institution / Organisation *">
                        <input
                          type="text"
                          placeholder="University of Adelaide, etc."
                        />
                      </FormGroup>
                      <FormGroup label="Role / Position *">
                        <select>
                          <option>Researcher / Academic</option>
                          <option>Clinician</option>
                          <option>Sport Administrator</option>
                          <option>Industry Partner</option>
                          <option>Funding Body Representative</option>
                          <option>Other</option>
                        </select>
                      </FormGroup>
                    </div>
                  )}

                  {/* Step 2: Project */}
                  {step === 2 && (
                    <div style={{ animation: "fadeIn 300ms ease" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "16px",
                          fontWeight: 600,
                          color: NAVY,
                          marginBottom: "16px",
                        }}
                      >
                        Project Summary
                      </h3>
                      <FormGroup label="Project Title *">
                        <input
                          type="text"
                          placeholder="Proposed research project title"
                        />
                      </FormGroup>
                      <FormGroup label="Research Area *">
                        <select>
                          <option>Concussion Assessment & Diagnosis</option>
                          <option>Prevention & Risk Reduction</option>
                          <option>Treatment & Rehabilitation</option>
                          <option>Implementation Science</option>
                          <option>Policy & Governance</option>
                          <option>Other</option>
                        </select>
                      </FormGroup>
                      <FormGroup label="Project Abstract (max 300 words) *">
                        <textarea
                          rows={4}
                          placeholder="Briefly describe the research question, methodology, and expected outcomes..."
                        />
                      </FormGroup>
                      <FormGroup label="Alignment with CAPIS">
                        <textarea
                          rows={3}
                          placeholder="How does this project align with or extend the CAPIS research programme?"
                        />
                      </FormGroup>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "14px",
                        }}
                        className="form-row"
                      >
                        <FormGroup label="Proposed Start Date">
                          <input type="date" />
                        </FormGroup>
                        <FormGroup label="Duration (months)">
                          <input type="number" placeholder="24" />
                        </FormGroup>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Budget */}
                  {step === 3 && (
                    <div style={{ animation: "fadeIn 300ms ease" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "16px",
                          fontWeight: 600,
                          color: NAVY,
                          marginBottom: "16px",
                        }}
                      >
                        Budget & Resources
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "14px",
                          marginBottom: "14px",
                        }}
                        className="form-row"
                      >
                        <FormGroup label="Total Funding Request (AUD) *">
                          <input type="text" placeholder="$50,000" />
                        </FormGroup>
                        <FormGroup label="Funding Type *">
                          <select>
                            <option>Seed Grant</option>
                            <option>Project Grant</option>
                            <option>Fellowship / Scholarship</option>
                            <option>In-kind Support</option>
                            <option>Partnership / Collaboration</option>
                          </select>
                        </FormGroup>
                      </div>
                      <FormGroup label="Budget Breakdown">
                        <textarea
                          rows={3}
                          placeholder="Personnel, equipment, travel, dissemination, etc."
                        />
                      </FormGroup>
                      <FormGroup label="Has this project been submitted elsewhere?">
                        <select>
                          <option>No — first submission</option>
                          <option>Yes — currently under review</option>
                          <option>Yes — previously unsuccessful</option>
                        </select>
                      </FormGroup>
                      <FormGroup label="Additional Supporting Information">
                        <textarea
                          rows={3}
                          placeholder="Letters of support, co-funding commitments, ethical approvals..."
                        />
                      </FormGroup>
                    </div>
                  )}

                  {/* Step 4: Review */}
                  {step === 4 && (
                    <div style={{ animation: "fadeIn 300ms ease" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "16px",
                          fontWeight: 600,
                          color: NAVY,
                          marginBottom: "12px",
                        }}
                      >
                        Review & Submit
                      </h3>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#4A5568",
                          marginBottom: "20px",
                        }}
                      >
                        Please review your information before submitting. You will
                        receive a confirmation email within 2 business days.
                      </p>

                      <div
                        style={{
                          backgroundColor: "#F8FAFC",
                          borderRadius: "8px",
                          padding: "18px",
                          marginBottom: "16px",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: NAVY,
                            marginBottom: "12px",
                          }}
                        >
                          Declaration
                        </h4>
                        <Checkbox
                          label="I confirm that the information provided is accurate and complete to the best of my knowledge."
                        />
                        <Checkbox
                          label="I agree to the CAPIS collaboration terms and data sharing policies."
                        />
                        <Checkbox
                          label="I consent to being contacted regarding this expression of interest."
                        />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Success state */
                <div
                  style={{
                    textAlign: "center",
                    padding: "32px 16px",
                    animation: "fadeIn 400ms ease",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      backgroundColor: SUCCESS,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 14px",
                      color: "#FFFFFF",
                      fontSize: "22px",
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: NAVY,
                      marginBottom: "6px",
                    }}
                  >
                    Expression of Interest Submitted
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#4A5568",
                      marginBottom: "20px",
                    }}
                  >
                    Thank you. We have received your submission and will be in
                    touch within 2 business days.
                  </p>
                  <button
                    onClick={reset}
                    style={{
                      backgroundColor: NAVY,
                      color: "#FFFFFF",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "6px",
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    Submit Another
                  </button>
                </div>
              )}
            </div>

            {/* Actions */}
            {!submitted && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "16px 28px",
                  borderTop: "1px solid #E2E8F0",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <button
                  onClick={prev}
                  disabled={step === 1}
                  style={{
                    backgroundColor: "transparent",
                    border: `1.5px solid ${NAVY}`,
                    color: NAVY,
                    padding: "8px 16px",
                    borderRadius: "6px",
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 500,
                    cursor: step === 1 ? "not-allowed" : "pointer",
                    opacity: step === 1 ? 0.4 : 1,
                  }}
                >
                  ← Previous
                </button>
                <button
                  onClick={next}
                  style={{
                    backgroundColor: NAVY,
                    color: "#FFFFFF",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  {step === totalSteps ? "Submit EOI ✓" : "Next Step →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Reusable form pieces ── */
function FormGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label
        style={{
          display: "block",
          fontSize: "12px",
          fontWeight: 500,
          color: "#1A202C",
          marginBottom: "5px",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Checkbox({ label }: { label: string }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "8px",
        marginBottom: "10px",
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        style={{ marginTop: "3px", flexShrink: 0 }}
      />
      <span style={{ fontSize: "12px", lineHeight: 1.5, color: "#4A5568" }}>
        {label}
      </span>
    </label>
  );
}
