import React from "react";
import { motion } from "framer-motion";
import { Network, Cpu, Users, Lightbulb } from "lucide-react";

export function About() {
  const objectives = [
    {
      icon: Network,
      title: "Promouvoir l'E-commerce",
      desc: "Mettre en lumière le secteur des services en ligne et ses opportunités en Algérie.",
    },
    {
      icon: Cpu,
      title: "Mettre en avant l'Innovation",
      desc: "Explorer les nouvelles technologies et les paiements numériques de demain.",
    },
    {
      icon: Users,
      title: "Créer un espace d'Échange",
      desc: "Favoriser la collaboration entre étudiants, professionnels et entreprises.",
    },
    {
      icon: Lightbulb,
      title: "Stimuler par la Compétition",
      desc: "Inspirer l'innovation à travers un hackathon et des compétitions engageantes.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="badge-pill">
              <span className="text-primary">L'Événement</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              L'avenir du commerce
              <br />
              <span className="text-muted-foreground">se dessine ici.</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              DIGITRADE 2.0 se situe à l'intersection de l'e-commerce, de la fintech et de
              l'innovation. C'est l'événement phare où les étudiants rencontrent les
              professionnels, où les startups trouvent leurs investisseurs, et où les idées
              deviennent des produits réels.
            </p>

            <div className="p-6 rounded-xl surface border-l-2 border-l-primary">
              <h3 className="text-base font-semibold text-white mb-2">
                Fort du succès de la 1ère édition
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Le 8 avril 2025, nous avons réuni 11 exposants, des sponsors prestigieux (GIE
                Monétique, CAAT), et organisé des conférences, workshops et hackathons marquants.
                La 2ème édition s'annonce encore plus ambitieuse.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {objectives.map((obj, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-xl surface surface-hover group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg surface flex items-center justify-center mb-5 text-primary group-hover:text-primary transition-transform duration-300 group-hover:scale-110">
                  <obj.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{obj.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{obj.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
