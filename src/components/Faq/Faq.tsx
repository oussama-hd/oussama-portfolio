"use client";

import { useState } from "react";
import { FAQ_DATA } from "@/data/portfolioData";
import { Plus, X } from "lucide-react";
import styles from "./Faq.module.scss";

export default function Faq() {
  // First item open by default like in screenshot
  const [openIds, setOpenIds] = useState<string[]>(["faq-1"]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className={styles.faqSection} id="faqs">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Answers to common questions about my work and process.
          </p>
        </div>

        <div className={styles.accordionList}>
          {FAQ_DATA.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}
              >
                <button
                  type="button"
                  className={styles.accordionTrigger}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.question}>{item.question}</span>
                  <span className={styles.toggleIcon}>
                    {isOpen ? <X size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div className={styles.answerWrapper}>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
