import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoMark } from "@/components/brand/LogoMark";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "À propos", href: "#about" },
    { name: "Programme", href: "#program" },
  ];

  const linkClass = isScrolled
    ? "text-muted-foreground hover:text-foreground"
    : "text-white/70 hover:text-white";

  const brandClass = isScrolled ? "text-foreground" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[hsl(230_35%_7%/0.92)] py-3 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <LogoMark className="h-8 w-8 rounded-lg" alt="" />
            <span className={`font-display text-xl font-bold tracking-wider transition-colors ${brandClass}`}>
              DIGITRADE<span className="text-primary">2.0</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`group relative text-sm font-medium transition-colors duration-200 ${linkClass}`}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_32px_-6px_hsl(187_100%_45%/0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
            >
              WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>

          <button
            type="button"
            className={`p-2 md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full border-t border-white/10 bg-[hsl(230_35%_7%/0.97)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col space-y-1 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="border-b border-white/10 py-3 text-base font-medium text-white/80 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-3 w-full rounded-xl bg-primary py-3 text-center text-sm font-semibold text-primary-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
