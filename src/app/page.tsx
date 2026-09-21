"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import RecentProjects from "@/components/RecentProjects/RecentProjects";
import SkillsGrid from "@/components/SkillsGrid/SkillsGrid";
import Services from "@/components/Services/Services";
import StatsBar from "@/components/StatsBar/StatsBar";
import Process from "@/components/Process/Process";
import AboutMe from "@/components/AboutMe/AboutMe";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import Footer from "@/components/Footer/Footer";
import BookingModal from "@/components/Modals/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#07090e]">
      {/* 1. Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 2. Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* 4. Recent Projects Section */}
      <RecentProjects />

      {/* 5. Skills Grid Section */}
      <SkillsGrid />

      {/* 6. Services Section */}
      <Services />

      {/* 7. Stats Bar */}
      <StatsBar />

      {/* 8. Process Section */}
      <Process onOpenBooking={handleOpenBooking} />

      {/* 9. About Me & Employment History Section */}
      <AboutMe onOpenBooking={handleOpenBooking} />


      {/* 11. Final Call-to-Action Banner */}
      <CtaBanner onOpenBooking={handleOpenBooking} />

      {/* 12. Footer */}
      <Footer onOpenBooking={handleOpenBooking} />


      {/* Interactive Modals */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
