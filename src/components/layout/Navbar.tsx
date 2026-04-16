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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[hsl(230_35%_7%/0.92)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`container mx-auto px-4 md:px-6 ${isScrolled ? "py-3" : "py-3 sm:py-4"}`}
      >
        <div className="flex items-center justify-between gap-3">
          <a
            href="/"
            className="flex min-w-0 items-center gap-2 touch-manipulation py-1"
          >
            <LogoMark className="h-8 w-8 shrink-0 rounded-lg" alt="" />
            <span
              className={`truncate font-display text-lg font-bold tracking-wider transition-colors sm:text-xl ${brandClass}`}
            >
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
              className="inline-flex touch-manipulation items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_32px_-6px_hsl(187_100%_45%/0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
            >
              WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>

          <button
            type="button"
            className={`inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-lg p-2 md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
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
            className="absolute inset-x-0 top-full border-t border-white/10 bg-[hsl(230_35%_7%/0.98)] backdrop-blur-xl md:hidden"
            style={{
              maxHeight: "calc(100dvh - env(safe-area-inset-top, 0px) - 4.75rem)",
            }}
          >
            <div className="max-h-[inherit] overflow-y-auto overscroll-contain px-4 py-4 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block touch-manipulation border-b border-white/10 py-3.5 text-base font-medium text-white/90 active:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 flex min-h-12 w-full touch-manipulation items-center justify-center rounded-xl bg-primary py-3.5 text-center text-sm font-semibold text-primary-foreground active:brightness-110"
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
