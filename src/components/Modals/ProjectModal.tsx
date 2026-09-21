"use client";

import Image from "next/image";
import { ProjectItem } from "@/data/portfolioData";
import { X, ExternalLink, Globe, Code2 } from "lucide-react";
import styles from "./ProjectModal.module.scss";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

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

        <div className={styles.imagePreview}>
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 680px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.headerRow}>
          <span className={styles.badge}>{project.badge}</span>
          <span className={styles.metricBadge}>{project.metrics}</span>
        </div>

        <h2 className={styles.projectTitle}>{project.title}</h2>
        <p className={styles.overviewText}>
          {project.fullOverview || project.description}
        </p>

        {/* Live URL Display Box */}
        <div style={{
          background: "rgba(37, 99, 235, 0.08)",
          border: "1px solid rgba(59, 130, 246, 0.3)",
          borderRadius: "12px",
          padding: "12px 16px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <Globe size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>Live Website:</span>
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#38bdf8",
                fontWeight: 600,
                fontSize: "0.85rem",
                textDecoration: "underline",
                wordBreak: "break-all",
              }}
            >
              {project.liveDemoUrl}
            </a>
          </div>
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              borderRadius: "9999px",
              background: "#2563eb",
              color: "#ffffff",
              fontSize: "0.78rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <span>Open Link</span>
            <ExternalLink size={12} />
          </a>
        </div>

        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Client / Ecosystem</span>
            <span className={styles.metaValue}>{project.client}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Timeline</span>
            <span className={styles.metaValue}>{project.year}</span>
          </div>
        </div>

        <div className={styles.techPills}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.pill}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.actionRow}>
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.primaryAction}
          >
            <span>Visit Live Production Website</span>
            <ExternalLink size={16} />
          </a>
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryAction}
            >
              <Code2 size={16} />
              <span>GitHub Profile</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
