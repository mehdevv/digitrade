import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 160]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-background" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center"
        style={{ y: y1, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="badge-pill mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>La 2ème Édition &bull; Événement Premium</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-6 text-white leading-none"
        >
          DIGITRADE
          <br />
          <span className="text-gradient">2.0</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-muted-foreground font-light mb-12 max-w-2xl"
        >
          Adoptez le Digital.{" "}
          <span className="text-white font-medium">Simplifiez le Paiement.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-16"
        >
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-9 h-9 rounded-lg surface flex items-center justify-center text-primary">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-white">2 Jours</p>
              <p className="text-xs">Exposition &amp; Conférences</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border" />
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-9 h-9 rounded-lg surface flex items-center justify-center text-primary">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-white">ESGEN &amp; Hôtel Prestigieux</p>
              <p className="text-xs">Tipaza, Algérie</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#sponsors"
            className="btn-primary h-12 px-8 text-base min-w-[200px]"
          >
            Devenir Sponsor
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#program"
            className="btn-outline h-12 px-8 text-base min-w-[200px]"
          >
            Découvrir le Programme
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-10"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
