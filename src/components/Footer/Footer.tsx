"use client";

import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.scss";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.giantBrand}>{PERSONAL_INFO.name}</div>

        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <Link href="/#home">Home</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/projects">All Projects</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/#experience">Experience</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/#skills">Skills</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/#services">Services</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/#about">About</Link>
          </li>
          <li className={styles.navLink}>
            <button
              onClick={onOpenBooking}
              type="button"
              style={{
                background: "none",
                border: "none",
                color: "#cbd5e1",
                fontFamily: "inherit",
                fontSize: "0.92rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Contact info pill row */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginBottom: "28px", color: "#94a3b8", fontSize: "0.85rem" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <Mail size={14} color="#38bdf8" /> {PERSONAL_INFO.email}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <Phone size={14} color="#38bdf8" /> {PERSONAL_INFO.phone}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <MapPin size={14} color="#38bdf8" /> {PERSONAL_INFO.location}
          </span>
        </div>

        <div className={styles.socialRow}>
          {/* GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className={styles.socialCircle}
            aria-label="GitHub"
            title="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className={styles.socialCircle}
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* Email direct */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className={styles.socialCircle}
            aria-label="Email"
            title="Direct Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
          </span>

          <div className={styles.legalLinks}>
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms of Service</a>
            <span>|</span>
            <a href="#license">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
