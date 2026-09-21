import { SERVICES_DATA } from "@/data/portfolioData";
import styles from "./Services.module.scss";

export default function Services() {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.subtitle}>
            From interfaces to full-stack, I build modern products that are scalable and user-friendly.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.iconFrame}>
                {service.iconType === "code" && (
                  /* Web Development outline wireframe */
                  <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="8" y="10" width="84" height="60" rx="8" stroke="rgba(56, 189, 248, 0.7)" />
                    <line x1="8" y1="24" x2="92" y2="24" stroke="rgba(56, 189, 248, 0.4)" />
                    <circle cx="18" cy="17" r="2" fill="rgba(56, 189, 248, 0.8)" />
                    <circle cx="26" cy="17" r="2" fill="rgba(56, 189, 248, 0.5)" />
                    <circle cx="34" cy="17" r="2" fill="rgba(56, 189, 248, 0.5)" />
                    {/* Code bracket symbols */}
                    <polyline points="36,40 28,48 36,56" stroke="#38bdf8" strokeWidth="3" />
                    <polyline points="64,40 72,48 64,56" stroke="#38bdf8" strokeWidth="3" />
                    <line x1="53" y1="36" x2="47" y2="60" stroke="#60a5fa" strokeWidth="3" />
                  </svg>
                )}

                {service.iconType === "devices" && (
                  /* Cross-platform responsive devices wireframe */
                  <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Tablet */}
                    <rect x="10" y="16" width="46" height="54" rx="6" stroke="rgba(56, 189, 248, 0.7)" />
                    <line x1="28" y1="64" x2="38" y2="64" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="3" />
                    {/* Mobile phone overlapping */}
                    <rect x="44" y="24" width="28" height="46" rx="5" stroke="#38bdf8" strokeWidth="2.5" fill="rgba(10, 16, 30, 0.8)" />
                    <line x1="54" y1="64" x2="62" y2="64" stroke="#60a5fa" strokeWidth="2.5" />
                    {/* Laptop base hint */}
                    <path d="M68 44h22v26H68" stroke="rgba(56, 189, 248, 0.4)" />
                    <line x1="64" y1="70" x2="94" y2="70" stroke="rgba(56, 189, 248, 0.6)" />
                  </svg>
                )}

                {service.iconType === "design" && (
                  /* UI/UX Laptop with pointer wireframe */
                  <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Laptop screen */}
                    <rect x="18" y="14" width="64" height="44" rx="4" stroke="rgba(56, 189, 248, 0.7)" />
                    {/* Laptop keyboard base */}
                    <path d="M10 60h80l-6 6H16z" stroke="rgba(56, 189, 248, 0.6)" fill="rgba(56, 189, 248, 0.1)" />
                    {/* Design pointer / cursor */}
                    <polygon points="56,30 56,46 62,42 68,52 72,50 66,40 73,40" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.2" />
                  </svg>
                )}
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>

              <ul className={styles.featureList}>
                {service.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
