import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Megaphone, Users, Award } from "lucide-react";

export function WhySponsor() {
  const benefits = [
    {
      icon: Users,
      title: "Audience Qualifiée",
      desc: "Accédez directement à une communauté ciblée d'étudiants talentueux, de professionnels du secteur et d'entreprises innovantes.",
    },
    {
      icon: Award,
      title: "Visibilité Premium",
      desc: "Bénéficiez d'une exposition maximale dans un cadre prestigieux garantissant une image de marque forte.",
    },
    {
      icon: Megaphone,
      title: "Couverture Médiatique",
      desc: "Profitez d'une présence accrue sur nos réseaux sociaux et à travers nos partenaires médias avant, pendant et après l'événement.",
    },
    {
      icon: TrendingUp,
      title: "Association à l'Innovation",
      desc: "Liez votre marque à l'avenir de l'économie numérique, de l'e-commerce et de la fintech en Algérie.",
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
    <section className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/3 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Pourquoi devenir
              <br />
              <span className="text-gradient">partenaire ?</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Associer votre entreprise à DIGITRADE 2.0, c'est investir dans l'écosystème
              numérique de demain et positionner votre marque en tant que leader de l'innovation.
            </p>
            <div className="hidden lg:block pt-4">
              <div className="w-12 h-px bg-primary rounded-full" />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-2/3 grid sm:grid-cols-2 gap-5"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-7 rounded-xl surface surface-hover group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg surface flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
