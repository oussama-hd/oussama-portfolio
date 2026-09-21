import styles from "./TrustedBy.module.scss";

export default function TrustedBy() {
  const clients = [
    { name: "ALLIANCE", url: "https://uat.allianceassurances.com.dz/ec/#/connexion", label: "Alliance Assurances" },
    { name: "MacirVie", url: "https://www.macirvie.com/", label: "Macir Vie Assurances" },
    { name: "B-link Solutions", url: "https://b-link.io/home", label: "B-link Solutions" },
    { name: "TEKKEYS", url: "https://tekkeys.net/en_GB", label: "Tekkeys High Tech" },
    { name: "Wissal Store", url: "https://www.wissalstore.com/", label: "Wissal Store" },
    { name: "G.K IMMOBILIER", url: "https://www.guezzout-immobilier.com/", label: "Guezzout Kaci Promoteur" },
  ];

  return (
    <section className={styles.trustedSection} aria-label="Trusted by top companies and employers">
      <div className={styles.container}>
        <p className={styles.heading}>Companies & Live Platforms Delivered:</p>

        <div className={styles.logoGrid}>
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noreferrer"
              className={styles.logoItem}
              title={`Visit ${client.label}`}
              style={{ textDecoration: "none" }}
            >
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "1.15rem",
                letterSpacing: "0.05em",
                color: "#cbd5e1",
                transition: "color 0.2s, transform 0.2s",
              }}>
                {client.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
