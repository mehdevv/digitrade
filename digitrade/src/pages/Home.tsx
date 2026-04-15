import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Program } from "@/components/sections/Program";
import { WhySponsor } from "@/components/sections/WhySponsor";
import { SponsorshipTiers } from "@/components/sections/SponsorshipTiers";
import { OrganizerStats } from "@/components/sections/OrganizerStats";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Program />
        <WhySponsor />
        <SponsorshipTiers />
        <OrganizerStats />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
