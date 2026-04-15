import React from "react";
import { Mail, MapPin, Phone, ArrowUpRight, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-black pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-base">
                D
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-white">
                DIGITRADE<span className="text-primary">2.0</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              L'événement incontournable de l'e-commerce, de la fintech et de l'innovation
              numérique en Algérie.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg surface flex items-center justify-center text-muted-foreground transition-all duration-200 hover:text-white hover:border-white/25 hover:-translate-y-0.5"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg surface flex items-center justify-center text-muted-foreground transition-all duration-200 hover:text-white hover:border-white/25 hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-white font-display font-semibold tracking-wide text-sm">
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              {[
                { name: "À propos", href: "#about" },
                { name: "Programme", href: "#program" },
                { name: "Sponsoring", href: "#sponsors" },
                { name: "Organisateur", href: "#organizer" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-white font-display font-semibold tracking-wide text-sm">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:digitalvalley@esgen.edu.dz"
                  className="hover:text-white transition-colors"
                >
                  digitalvalley@esgen.edu.dz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="tel:+213793760040" className="hover:text-white transition-colors">
                  +213 793 76 00 40
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Pôle Universitaire de Kolea
                  <br />
                  TIPAZA, Algérie
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-white font-display font-semibold tracking-wide text-sm">
              Organisé par
            </h3>
            <div className="surface rounded-xl p-4 inline-block">
              <p className="text-white font-semibold text-sm mb-1">Digital Valley Club</p>
              <p className="text-xs text-primary">
                ESGEN — École Supérieure de Gestion et d'Économie Numérique
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Digital Valley Club. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
