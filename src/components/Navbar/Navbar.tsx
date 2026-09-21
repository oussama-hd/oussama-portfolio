"use client";

import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const navLinks = [
    { label: "PROJECTS", href: "/projects" },
    { label: "EXPERIENCE", href: "/#experience" },
    { label: "SKILLS", href: "/#skills" },
    { label: "SERVICES", href: "/#services" },
    { label: "ABOUT", href: "/#about" }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          {PERSONAL_INFO.name}
        </Link>

        <nav>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.label} className={styles.navItem}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

    
      </div>
    </header>
  );
}
