import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Presentation, Users, Trophy } from "lucide-react";

export function Program() {
  const days = [
    {
      day: "Jour 01",
      title: "L'Exposition",
      location: "Campus ESGEN",
      accent: "text-primary",
      events: [
        {
          time: "09:00",
          title: "Ouverture de l'espace d'exposition",
          desc: "Accueil des participants et installation des stands.",
          icon: Users,
        },
        {
          time: "Toute la journée",
          title: "Exposition des entreprises",
          desc: "Les sponsors et partenaires présentent leurs produits, services et innovations.",
          icon: Presentation,
        },
        {
          time: "16:00",
          title: "Clôture de la première journée",
          desc: "Fin des expositions et networking.",
          icon: Clock,
        },
      ],
    },
    {
      day: "Jour 02",
      title: "Conférences & Compétition",
      location: "Hôtel Prestigieux",
      accent: "text-secondary",
      events: [
        {
          time: "09:30",
          title: "Cérémonie d'ouverture",
          desc: "Discours officiels et présentation des enjeux de l'économie numérique.",
          icon: Presentation,
        },
        {
          time: "10:30",
          title: "Panels d'experts",
          desc: "Discussions sur l'e-commerce, les paiements digitaux et la fintech.",
          icon: Users,
        },
        {
          time: "14:00",
          title: "Ateliers pratiques (Workshops)",
          desc: "Sessions de formation animées par des professionnels de l'industrie.",
          icon: Clock,
        },
        {
          time: "16:00",
          title: "Hackathon & Compétition",
          desc: "Présentation des projets innovants et remise des prix.",
          icon: Trophy,
        },
      ],
    },
  ];

  return (
    <section id="program" className="py-32 bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-pill mx-auto mb-6"
          >
            <span className="text-secondary">Agenda</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Un programme conçu pour{" "}
            <span className="text-gradient">l'impact.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {days.map((day, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="rounded-2xl surface overflow-hidden"
            >
              <div className="p-7 border-b border-border flex items-center justify-between">
                <div>
                  <span className={`text-xs font-mono font-semibold uppercase tracking-widest ${day.accent} mb-1 block`}>
                    {day.day}
                  </span>
                  <h3 className="text-xl font-bold text-white">{day.title}</h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-md px-3 py-1.5">
                  <MapPin className="w-3 h-3" />
                  {day.location}
                </div>
              </div>

              <div className="p-7 space-y-7">
                {day.events.map((event, eIdx) => (
                  <div key={eIdx} className="flex gap-4 relative">
                    {eIdx !== day.events.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-[-1.75rem] w-px bg-border" />
                    )}
                    <div
                      className={`w-10 h-10 rounded-lg surface flex items-center justify-center shrink-0 ${day.accent} z-10`}
                    >
                      <event.icon className="w-4 h-4" />
                    </div>
                    <div className="pt-1.5">
                      <span className="text-xs font-mono text-muted-foreground mb-1 block">
                        {event.time}
                      </span>
                      <h4 className="text-sm font-semibold text-white mb-1">{event.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
