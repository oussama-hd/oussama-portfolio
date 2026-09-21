"use client";

import { useState } from "react";
import { Download, Check, Loader2 } from "lucide-react";
import styles from "./DownloadZipBar.module.scss";

export default function DownloadZipBar() {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const res = await fetch("/api/download-zip");
      if (!res.ok) throw new Error("Download failed");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "mohammadi-oussama-portfolio.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className={styles.downloadBar}>
      <button
        onClick={handleDownload}
        className={styles.downloadBtn}
        type="button"
        title="Download Mohammadi Oussama Portfolio source code (.ZIP)"
      >
        <div className={styles.iconCircle}>
          {downloading ? (
            <Loader2 size={18} className="animate-spin" />
          ) : downloaded ? (
            <Check size={18} />
          ) : (
            <Download size={18} />
          )}
        </div>
        <div className={styles.textGroup}>
          <span className={styles.title}>
            {downloaded ? "ZIP Downloaded!" : "Download Code (.ZIP)"}
          </span>
          <span className={styles.subtitle}>
            {downloading ? "Preparing archive..." : "Full Next.js + SCSS Codebase"}
          </span>
        </div>
      </button>
    </div>
  );
}
