import { BAR_STATS } from "@/data/portfolioData";
import styles from "./StatsBar.module.scss";

export default function StatsBar() {
  return (
    <div className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.statsBar}>
          {BAR_STATS.map((stat) => (
            <div key={stat.id} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
