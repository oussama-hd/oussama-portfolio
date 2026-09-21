"use client";

import { PROCESS_STEPS } from "@/data/portfolioData";
import styles from "./Process.module.scss";

interface ProcessProps {
  onOpenBooking: () => void;
}

export default function Process({ onOpenBooking }: ProcessProps) {
  return (
    <section className={styles.processSection} id="process">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Process</h2>
          <p className={styles.subtitle}>
            A clear workflow drives each project—from strategy and design to development and post-launch support.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className={styles.stepCard}>
              <span className={styles.numberWatermark} aria-hidden="true">
                {step.step}
              </span>

              <div className={styles.cardContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.innerCtaBar}>
          <p className={styles.innerCtaText}>
            Build reliable, user-focused products with expert code.
          </p>
          <button
            onClick={onOpenBooking}
            className={styles.innerCtaBtn}
            type="button"
          >
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
}
