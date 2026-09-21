"use client";

import styles from "./CtaBanner.module.scss";

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export default function CtaBanner({ onOpenBooking }: CtaBannerProps) {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.bannerCard}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.headline}>
              Your vision, my expertise. Let&apos;s create something{" "}
              <span className={styles.exceptionalText}>exceptional.</span>
            </h2>

            <p className={styles.subheadline}>
              Ready to start? Schedule a consultation and let&apos;s shape your next big project.
            </p>

            <button
              onClick={onOpenBooking}
              className={styles.ctaBtn}
              type="button"
            >
              Book a call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
