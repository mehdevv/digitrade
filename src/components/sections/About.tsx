import React from "react";
import { motion } from "framer-motion";
import { Network, Cpu, Users, Lightbulb, Megaphone, Award, TrendingUp } from "lucide-react";

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

  const partnerAngles = [
    {
      icon: Users,
      title: "Audience qualifiée",
      desc: "Étudiants, professionnels du numérique et entreprises innovantes réunis sur deux jours.",
    },
    {
      icon: Award,
      title: "Visibilité premium",
      desc: "Stand, logo sur supports, mentions réseaux et présence dans un cadre professionnel.",
    },
    {
      icon: Megaphone,
      title: "Couverture média",
      desc: "Relais sur nos canaux et avec nos partenaires avant, pendant et après l'événement.",
    },
    {
      icon: TrendingUp,
      title: "Innovation & marque",
      desc: "Associer votre nom à l'e-commerce, la fintech et les projets qui se concrétisent sur place.",
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
    <section id="about" className="relative border-t border-white/[0.06] py-16 sm:py-24 md:py-32">
      <div className="container mx-auto space-y-16 px-4 sm:space-y-20 md:space-y-24 md:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full space-y-6 sm:space-y-8 lg:w-1/2"
          >
            <div className="badge-pill">
              <span className="text-primary">L'Événement</span>
            </div>

            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
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

            <p className="text-base text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-5">
              Pour une marque ou une institution, participer à DIGITRADE 2.0, c'est s'ancrer dans
              l'écosystème numérique algérien, gagner en crédibilité auprès d'une audience jeune et
              engagée, et soutenir concrètement la prochaine génération d'acteurs du digital.
            </p>

            <div className="p-6 rounded-xl surface border-l-2 border-l-primary">
              <h3 className="text-base font-semibold text-foreground mb-2">
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
            className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:w-1/2"
          >
            {objectives.map((obj, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group cursor-default rounded-xl p-5 surface surface-hover sm:p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-primary transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
                  <obj.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{obj.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{obj.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="glass p-8 md:p-10"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            Partenaires &amp; sponsors
          </h3>
          <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Les niveaux d'engagement (visibilité digitale, stand d'exposition, interventions,
            dossier de presse, campagnes dédiées, accès VIP…) peuvent être ajustés à vos objectifs.
            Écrivez-nous sur WhatsApp pour recevoir la plaquette et caler un appel avec l'équipe.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {partnerAngles.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:p-5"
              >
                <item.icon className="w-5 h-5 text-primary mb-3" />
                <h4 className="text-sm font-semibold text-foreground mb-1.5">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
