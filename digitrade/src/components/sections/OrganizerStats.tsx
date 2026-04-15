import React from "react";
import { motion } from "framer-motion";
import { Users, Calendar, Flag, Activity } from "lucide-react";

export function OrganizerStats() {
  const stats = [
    { label: "Membres Actifs", value: "79", icon: Users },
    { label: "Création", value: "2024", icon: Flag },
    { label: "Grands Événements", value: "8+", icon: Calendar },
    { label: "Impact", value: "Haut", icon: Activity },
  ];

  const pastEvents = [
    "Travel Day (Fév 2026)",
    "Algeria Fintech & E-commerce Summit 2025",
    "Algeria Startup Challenge",
    "Africa Real Estate Innovation Summit 2024",
    "Slush'd",
    "Bootcamp Level Up",
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="organizer" className="py-32 bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-2xl mb-8">
              D
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
              Digital Valley Club
            </h2>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Club scientifique de l'ESGEN (Pôle Universitaire de Kolea). Notre mission est de
              connecter les étudiants aux professionnels, développer les compétences numériques,
              inspirer l'innovation et promouvoir l'entrepreneuriat en Algérie.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-4 rounded-xl surface flex items-center gap-4"
                >
                  <div className="w-9 h-9 rounded-lg surface flex items-center justify-center text-primary shrink-0">
                    <stat.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white leading-none mb-0.5">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 w-full"
          >
            <div className="rounded-2xl surface p-8 md:p-10">
              <h3 className="text-lg font-bold text-white mb-2">Notre Expertise</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                Une équipe expérimentée dans la gestion d'événements majeurs, les médias et la
                logistique complexe.
              </p>

              <h4 className="text-xs font-semibold text-primary uppercase tracking-widest mb-5">
                Événements Réalisés
              </h4>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {pastEvents.map((event, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-center gap-3 text-white/75"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span className="text-sm">{event}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
