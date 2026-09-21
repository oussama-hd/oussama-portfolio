import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammadi Oussama — Senior Frontend & Full Stack Developer",
  description:
    "Senior Frontend/Full Stack Developer with more than 7 years of experience in creating and deploying reliable web apps. Specialized in React, Next.js, Angular, Spring Boot, and PostgreSQL.",
  keywords: [
    "Mohammadi Oussama",
    "Senior Frontend Developer",
    "Full Stack Developer",
    "Angular",
    "React",
    "Next.js",
    "Spring Boot",
    "Algeria",
    "Portfolio",
  ],
  authors: [{ name: "Mohammadi Oussama" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#07090e] text-slate-100 antialiased selection:bg-blue-600/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}
