"use client";

import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";
import styles from "./Hero.module.scss";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.container}>
        {/* Left text column */}
        <div className={styles.textContent}>
          <h1 className={styles.greeting}>
            Hi! I&apos;m {PERSONAL_INFO.shortName}, building
            <span className={styles.emphasis}>Digital Experiences.</span>
          </h1>

          <p className={styles.description}>
            Senior Frontend/Full Stack Developer with more than 7 years of experience in creating and deploying reliable web apps. Highly skilled in turning requirements into efficient, scalable solutions.
          </p>

          <div className={styles.buttonGroup}>
            <button
              onClick={onOpenBooking}
              className={styles.connectBtn}
              type="button"
            >
              Let&apos;s Connect
            </button>
            <a href="#projects" className={styles.seeWorkBtn}>
              <span>See My Work</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Right visual portrait with floating badges */}
        <div className={styles.visualWrapper}>
          <div className={styles.imageCircleWrapper}>
            <div className={styles.imageInner}>
              <Image
                src="/images/oussama-portrait.jpg"
                alt="Mohammadi Oussama - Senior Frontend & Full Stack Developer"
                width={360}
                height={360}
                priority
              />
            </div>
          </div>

          {/* Floating badge 1: 7+ Years */}
          <div className={`${styles.badgeCard} ${styles.badgeTopCenter}`}>
            <span className={styles.badgeValue}>7+ Years</span>
            <span className={styles.badgeLabel}>Experience</span>
          </div>

          {/* Floating badge 2: 30k+ Users */}
          <div className={`${styles.badgeCard} ${styles.badgeTopRight}`}>
            <span className={styles.badgeValue}>30k+</span>
            <span className={styles.badgeLabel}>Users Served</span>
          </div>

          {/* Floating badge 3: 90% Test Coverage */}
          <div className={`${styles.badgeCard} ${styles.badgeBottomLeft}`}>
            <span className={styles.badgeValue}>90%</span>
            <span className={styles.badgeLabel}>Test Coverage</span>
          </div>

          {/* Floating badge 4: Enterprise Insurance & FinTech */}
          <div className={`${styles.badgeCard} ${styles.badgeBottomRight}`}>
            <span className={styles.badgeValue}>Alliance/CIAR</span>
            <span className={styles.badgeLabel}>Enterprise Delivered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
