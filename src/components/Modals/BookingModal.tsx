"use client";

import { useState } from "react";
import { X, CheckCircle, Send, Loader2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import styles from "./BookingModal.module.scss";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Senior Frontend Engineering",
    budget: "$3,000 - $5,000",
    preferredDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      service: "Senior Frontend Engineering",
      budget: "$3,000 - $5,000",
      preferredDate: "",
      message: "",
    });
    onClose();
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.modalCard}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className={styles.successCard}>
            <div className={styles.successIcon}>
              <CheckCircle size={36} />
            </div>
            <h3 className={styles.successTitle}>Inquiry Sent Successfully!</h3>
            <p className={styles.successText}>
              Thank you {formData.name}! Your message has been sent to {PERSONAL_INFO.name}. I will review your project requirements and email you back at {formData.email} shortly.
            </p>
            <button
              onClick={handleReset}
              className={styles.submitBtn}
              type="button"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Get in Touch with {PERSONAL_INFO.shortName}</h2>
              <p className={styles.modalSubtitle}>
                Discuss a full-time senior role, technical project sprint, or engineering consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Jean Dupont / Alex Smith"
                    className={styles.input}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="contact@company.com"
                    className={styles.input}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="service" className={styles.label}>
                    Opportunity / Service
                  </label>
                  <select
                    id="service"
                    className={styles.select}
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <option value="Senior Frontend Engineering">Senior Frontend Engineering (Angular/React/Next.js)</option>
                    <option value="Full Stack Development">Full Stack Development (Spring Boot / Node.js)</option>
                    <option value="Insurance / E-Commerce Project">Insurance / E-Commerce Project</option>
                    <option value="Technical Consultation">Technical Consultation & CI/CD</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="budget" className={styles.label}>
                    Project Scope / Engagement
                  </label>
                  <select
                    id="budget"
                    className={styles.select}
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                  >
                    <option value="Full-Time Employment">Full-Time Employment</option>
                    <option value="Contract / Sprint ($3k - $5k)">Contract / Sprint ($3k - $5k)</option>
                    <option value="Enterprise Platform ($5k - $10k+)">Enterprise Platform ($5k - $10k+)</option>
                    <option value="Advisory / Consultation">Advisory / Consultation</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message / Details *
                </label>
                <textarea
                  id="message"
                  required
                  placeholder="Share details about the position, tech stack, or platform you are building..."
                  className={styles.textarea}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {errorMessage && (
                <p style={{ color: "#f87171", fontSize: "0.85rem" }}>
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Inquiry to Oussama</span>
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
