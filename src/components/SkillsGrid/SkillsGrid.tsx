import { SKILLS_CATEGORIES } from "@/data/portfolioData";
import styles from "./SkillsGrid.module.scss";

export default function SkillsGrid() {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills & Technical Expertise</h2>
          <p className={styles.subtitle}>
            Comprehensive technical repertoire developed through 7+ years of engineering enterprise systems.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {SKILLS_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.categoryCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.categoryTitle}>{cat.title}</h3>
                <span className={styles.categoryCount}>{cat.skills.length} Skills</span>
              </div>

              <div className={styles.pillsRow}>
                {cat.skills.map((skill) => (
                  <span key={skill} className={styles.pill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
