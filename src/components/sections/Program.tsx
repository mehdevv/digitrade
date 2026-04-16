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
          desc: "Stands, démos et échanges : les partenaires présentent produits, services et feuilles de route innovation devant un public étudiant et professionnel.",
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
          desc: "Pitchs finaux, jury et remise des prix — mise en avant des équipes et des solutions les plus abouties.",
          icon: Trophy,
        },
      ],
    },
  ];

  return (
    <section
      id="program"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[hsl(230_32%_6%)] py-16 sm:py-24 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 md:mb-20">
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
            className="mb-4 font-display text-3xl font-bold text-foreground sm:mb-6 sm:text-4xl md:text-5xl"
          >
            Un programme conçu pour{" "}
            <span className="text-gradient">l'impact.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-3 max-w-3xl px-1 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base"
          >
            <strong className="text-foreground font-medium">Jour 1 — campus ESGEN :</strong> accueil
            des équipes, montée des stands et exposition toute la journée pour rencontrer
            visiteurs, médias et prospects.{" "}
            <strong className="text-foreground font-medium">Jour 2 — hôtel partenaire :</strong>{" "}
            plénières, tables rondes avec experts e-commerce / paiements / fintech, ateliers
            pratiques puis finale hackathon avec remise des prix.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
          {days.map((day, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="glass overflow-hidden"
            >
              <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:p-6 md:p-7">
                <div className="min-w-0 flex-1">
                  <span
                    className={`mb-1 block font-mono text-[10px] font-semibold uppercase tracking-widest sm:text-xs ${day.accent}`}
                  >
                    {day.day}
                  </span>
                  <h3 className="text-lg font-bold text-foreground sm:text-xl">{day.title}</h3>
                </div>
                <div className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-md border border-white/12 bg-white/[0.04] px-3 py-2 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 shrink-0" />
                  <span className="whitespace-normal break-words sm:whitespace-nowrap">
                    {day.location}
                  </span>
                </div>
              </div>

              <div className="space-y-6 p-5 sm:space-y-7 sm:p-6 md:p-7">
                {day.events.map((event, eIdx) => (
                  <div key={eIdx} className="relative flex gap-3 sm:gap-4">
                    {eIdx !== day.events.length - 1 && (
                      <div className="absolute bottom-[-1.75rem] left-5 top-10 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
                    )}
                    <div
                      className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] ${day.accent}`}
                    >
                      <event.icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5 sm:pt-1.5">
                      <span className="mb-1 block font-mono text-[10px] text-muted-foreground sm:text-xs">
                        {event.time}
                      </span>
                      <h4 className="mb-1 text-sm font-semibold text-foreground sm:text-base">
                        {event.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {event.desc}
                      </p>
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
