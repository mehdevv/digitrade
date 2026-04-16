import React from "react";
import { Mail, MapPin, Phone, ArrowUpRight, Twitter, Linkedin } from "lucide-react";
import { LogoMark } from "@/components/brand/LogoMark";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[hsl(230_38%_5%)] pb-[max(2.5rem,env(safe-area-inset-bottom,0px)+1rem)] pt-16 sm:pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:mb-16 sm:gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-2">
              <LogoMark className="h-8 w-8 rounded-lg" alt="" />
              <span className="font-display font-bold text-xl tracking-wider text-foreground">
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
                className="w-9 h-9 rounded-lg surface flex items-center justify-center text-muted-foreground transition-all duration-200 hover:text-foreground hover:border-foreground/20 hover:-translate-y-0.5"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg surface flex items-center justify-center text-muted-foreground transition-all duration-200 hover:text-foreground hover:border-foreground/20 hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-foreground font-display font-semibold tracking-wide text-sm">
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              {[
                { name: "À propos", href: "#about" },
                { name: "Programme", href: "#program" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex touch-manipulation items-center gap-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-foreground font-display font-semibold tracking-wide text-sm">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:digitalvalley@esgen.edu.dz"
                  className="touch-manipulation break-all text-left transition-colors hover:text-foreground"
                >
                  digitalvalley@esgen.edu.dz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a
                  href="tel:+213793760040"
                  className="touch-manipulation transition-colors hover:text-foreground"
                >
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
            <h3 className="text-foreground font-display font-semibold tracking-wide text-sm">
              Organisé par
            </h3>
            <div className="max-w-sm rounded-xl p-4 surface">
              <p className="text-foreground font-semibold text-sm mb-1">Digital Valley Club</p>
              <p className="text-xs text-primary mb-3">
                ESGEN — École Supérieure de Gestion et d'Économie Numérique
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Club scientifique au Pôle Universitaire de Kolea : relier étudiants et
                professionnels, renforcer les compétences numériques et soutenir
                l&apos;entrepreneuriat. Équipe habituée aux grands formats (médias, logistique,
                événements sectoriels).
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p className="px-2">© {new Date().getFullYear()} Digital Valley Club. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#" className="touch-manipulation px-1 py-2 transition-colors hover:text-foreground">
              Politique de confidentialité
            </a>
            <a href="#" className="touch-manipulation px-1 py-2 transition-colors hover:text-foreground">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
