import React from "react";
import { motion } from "framer-motion";
import { Check, Star, Sparkles, Gem } from "lucide-react";

export function SponsorshipTiers() {
  const tiers = [
    {
      name: "Silver",
      icon: Star,
      desc: "Pour une visibilité digitale ciblée.",
      iconColor: "text-white/60",
      features: [
        "Placement de logo sur les supports",
        "Mention sur les réseaux sociaux",
        "Accès à l'espace exposition",
        "Visibilité digitale",
      ],
    },
    {
      name: "Gold",
      icon: Sparkles,
      desc: "Une présence physique et digitale forte.",
      iconColor: "text-yellow-400",
      popular: true,
      features: [
        "Stand d'exposition standard",
        "Placement de logo premium",
        "Mentions dédiées sur les réseaux",
        "Accès aux panels d'experts",
        "Insertion dans le dossier de presse",
      ],
    },
    {
      name: "Platinum",
      icon: Gem,
      desc: "L'expérience partenaire ultime.",
      iconColor: "text-primary",
      features: [
        "Stand d'exposition premium",
        "Intervention lors des panels (Speaking slot)",
        "Logo sur tous les supports principaux",
        "Campagne digitale dédiée",
        "Accès VIP et networking exclusif",
        "Remise de prix lors du Hackathon",
      ],
    },
  ];

  return (
    <section id="sponsors" className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
            Packs de <span className="text-gradient">Sponsoring</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Choisissez le niveau d'engagement qui correspond à vos objectifs de visibilité et
            d'impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.55 }}
              className={`relative p-7 rounded-2xl surface flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)] ${
                tier.popular ? "border-white/25" : "hover:border-white/20"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-md">
                  Recommandé
                </div>
              )}

              <div className="mb-7">
                <tier.icon className={`w-8 h-8 mb-5 ${tier.iconColor}`} />
                <h3 className="text-xl font-display font-bold text-white mb-1.5">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.desc}</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3.5">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                      <span className="text-sm text-white/75">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-7 border-t border-border">
                <a
                  href="#contact"
                  className={`block w-full text-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                    tier.popular
                      ? "bg-white text-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.5)]"
                      : "border border-border text-white hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  Sélectionner
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
