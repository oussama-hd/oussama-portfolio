"use client";

import Image from "next/image";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/portfolioData";
import { ArrowRight, ExternalLink } from "lucide-react";
import styles from "./RecentProjects.module.scss";

export default function RecentProjects() {
  // Show 6 featured projects in a 3-column grid
  const featuredProjects = PROJECTS_DATA.slice(0, 6);

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Production Projects & Systems</h2>
          <p className={styles.subtitle}>
            Live applications deployed for leading insurance companies, e-commerce giants, and enterprise software suites.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {featuredProjects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.overlayAction}>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.viewWebsiteBtn}
                    >
                      <span>View Website</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span className={styles.badge}>{project.badge}</span>
              </div>

              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.techPills}>
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className={styles.pill}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Link to Dedicated "All Projects" Page */}
        <div className={styles.viewAllContainer}>
          <Link href="/projects" className={styles.viewAllBtn}>
            <span>Browse All 10 Production Projects</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
