"use client";

import Image from "next/image";
import { EXPERIENCES_DATA, PERSONAL_INFO, SKILLS_CATEGORIES } from "@/data/portfolioData";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import styles from "./AboutMe.module.scss";

interface AboutMeProps {
  onOpenBooking: () => void;
}

export default function AboutMe({ onOpenBooking }: AboutMeProps) {
  // Aggregate main high-level skills for the bio card
  const coreSkills = [
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "Spring Boot",
    "Java",
    "PostgreSQL",
    "NgRx / Redux",
    "Docker",
    "AWS",
    "GraphQL",
    "SCSS / Sass",
  ];

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>
            Senior Frontend/Full Stack Developer with more than 6 years of experience in creating and deploying reliable web apps.
          </p>
        </div>

        <div className={styles.aboutGrid}>
          {/* Left Profile Card */}
          <div className={styles.profileCard}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/oussama-portrait.jpg"
                alt="Mohammadi Oussama"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>

            <div className={styles.statusPill}>
              <span className={styles.statusDot}></span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            <h3 className={styles.profileName}>{PERSONAL_INFO.name}</h3>
            <p className={styles.profileRole}>{PERSONAL_INFO.title}</p>
            <p className={styles.profileBio}>
              Highly skilled in turning requirements into efficient solutions that ensure future maintainability and reliability.
            </p>

            {/* Direct Contact Details */}
            <div className={styles.contactList}>
              <a href={`mailto:${PERSONAL_INFO.email}`} className={styles.contactItem}>
                <Mail size={15} />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className={styles.contactItem}>
                <Phone size={15} />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <div className={styles.contactItem}>
                <MapPin size={15} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialRow}>
              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className={styles.socialIconBtn}
                aria-label="GitHub"
                title="GitHub Profile"
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
                className={styles.socialIconBtn}
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={styles.socialIconBtn}
                aria-label="Send Email"
                title="Direct Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <button
              onClick={onOpenBooking}
              className={styles.profileConnectBtn}
              type="button"
            >
              Contact Me
            </button>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Bio & Skills Card */}
            <div className={styles.bioCard}>
              <h3 className={styles.greetingTitle}>Hi! I&apos;m Mohammadi Oussama,</h3>
              <p className={styles.bioParagraph}>
                a Senior Frontend/Full Stack Developer with more than 6 years of experience in creating and deploying reliable web apps. Highly skilled in turning requirements into efficient solutions that ensure future maintainability and reliability. Proven track record of collaborating with cross-functional teams to deliver successful projects.
              </p>
              <p className={styles.bioParagraph}>
                My expertise spans enterprise insurance platforms (contract management, policy issuance, claim tracking for Alliance, CIAR, and MacirVie), high-volume e-commerce dashboards (serving 30,000+ users), and microservices architectures built on Spring Boot, PostgreSQL, and AWS.
              </p>

              <div className={styles.techStackSection}>
                <span className={styles.techStackTitle}>Core Technologies & Frameworks:</span>
                <div className={styles.skillsPillGrid}>
                  {coreSkills.map((skill) => (
                    <span key={skill} className={styles.skillPill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className={styles.educationSection}>
                <h4 className={styles.educationTitle}>Education & Languages:</h4>
                <p className={styles.educationText}>
                  <strong>{PERSONAL_INFO.education.degree}</strong>
                  <br />
                  {PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.period})
                  <br />
                  Languages: Arabic (Native), French (Fluent), English (Professional).
                </p>
              </div>
            </div>

            {/* Employment History Card */}
            <div className={styles.experienceCard} id="experience">
              <div className={styles.expHeader}>
                <h3 className={styles.expHeaderTitle}>Employment History</h3>
                <span className={styles.expHeaderBadge}>6+ Years Experience</span>
              </div>

              <div className={styles.expTable}>
                {EXPERIENCES_DATA.map((exp) => (
                  <div key={exp.id} className={styles.expRow}>
                    <div className={styles.expRowTop}>
                      <span className={styles.expRole}>{exp.role}</span>
                      <span className={styles.expPeriod}>{exp.period}</span>
                    </div>

                    <div className={styles.expCompanyRow}>
                      <strong>{exp.company}</strong>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <p className={styles.expDescription}>{exp.description}</p>

                    <div className={styles.expTags}>
                      {exp.skills.map((skill) => (
                        <span key={skill} className={styles.expTag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
