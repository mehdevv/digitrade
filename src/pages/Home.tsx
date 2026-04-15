import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Program } from "@/components/sections/Program";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background font-sans">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Program />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
