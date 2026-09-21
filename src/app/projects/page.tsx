"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS_DATA, PERSONAL_INFO } from "@/data/portfolioData";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BookingModal from "@/components/Modals/BookingModal";
import { ArrowLeft, Search, Sparkles, ExternalLink } from "lucide-react";
import styles from "./projects.module.scss";

const CATEGORIES = [
  "All",
  "Insurance SaaS",
  "E-Commerce",
  "Full Stack",
  "Frontend",
];

export default function AllProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className={styles.projectsPage}>
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Container */}
      <main className={styles.pageHeaderSection}>
        <div className={styles.container}>
          {/* Back Link */}
          <div className={styles.backRow}>
            <Link href="/" className={styles.backBtn}>
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Heading */}
          <div className={styles.headerText}>
            <span className={styles.pageBadge}>
              <Sparkles size={14} style={{ display: "inline", marginRight: "6px" }} />
              Production Systems & Live Deployments
            </span>
            <h1 className={styles.pageTitle}>
              Browse All <span className={styles.highlightText}>Live Platforms & Projects</span>
            </h1>
            <p className={styles.pageSubtitle}>
              Explore the complete portfolio of live production applications engineered by {PERSONAL_INFO.name} for major insurance companies (Alliance, Macir Vie), high-traffic e-commerce portals, and enterprise administrative suites.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className={styles.filterBar}>
            <div className={styles.searchBox}>
              <Search size={18} />
              <input
                type="text"
                placeholder="Search projects by name, client, tech (e.g. Alliance, Macir, Angular, Next.js)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className={styles.categoryPills}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`${styles.categoryBtn} ${
                    selectedCategory === cat ? styles.active : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count info */}
          <div className={styles.resultsMeta}>
            <span className={styles.resultsCount}>
              Showing <strong>{filteredProjects.length}</strong> of {PROJECTS_DATA.length} projects
            </span>
            {selectedCategory !== "All" && (
              <span>Filtered by: <strong>{selectedCategory}</strong></span>
            )}
          </div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <article key={project.id} className={styles.projectCard}>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
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

                  <div className={styles.cardHeader}>
                    <span className={styles.cardBadge}>{project.badge}</span>
                  </div>

                  <h2 className={styles.cardTitle}>{project.title}</h2>
                  <p className={styles.cardDescription}>{project.description}</p>

                  <div className={styles.techPills}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.pill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))
            ) : (
              <div className={styles.emptyState}>
                <h3>No projects found</h3>
                <p>Try adjusting your search criteria or reset filter category.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>


      {/* Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
