import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { HERO_VIDEO_POSTER, HERO_VIDEO_SRC } from "@/lib/hero-media";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 120]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      v.pause();
      v.removeAttribute("autoplay");
    }
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover scale-[1.02]"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_VIDEO_POSTER}
          aria-hidden
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        {/* Cinematic grade + legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-[hsl(230_35%_7%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_20%,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.35] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center md:px-6"
        style={{ y: y1, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-base text-white/90 shadow-lg shadow-black/20 backdrop-blur-md md:text-lg"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_12px_hsl(187_100%_50%)]" />
          <span className="font-medium tracking-wide">2e édition · Tipaza</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 font-display text-7xl font-bold leading-[0.92] tracking-tighter text-white sm:text-8xl md:text-9xl lg:text-[9.5rem]"
        >
          DIGITRADE
          <br />
          <span className="text-gradient">2.0</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-lg text-lg font-light text-white/75 md:text-xl"
        >
          E-commerce, fintech &amp; innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col items-center gap-8 sm:flex-row sm:gap-10"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-primary shadow-inner backdrop-blur-md md:h-16 md:w-16">
              <Calendar className="h-7 w-7 md:h-8 md:w-8" />
            </div>
            <div>
              <p className="text-base font-semibold text-white md:text-lg">2 jours</p>
              <p className="text-sm text-white/60 md:text-base">Expo &amp; conférences</p>
            </div>
          </div>
          <div className="hidden h-12 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent sm:block" />
          <div className="flex items-center gap-4 text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-primary shadow-inner backdrop-blur-md md:h-16 md:w-16">
              <MapPin className="h-7 w-7 md:h-8 md:w-8" />
            </div>
            <div>
              <p className="text-base font-semibold text-white md:text-lg">ESGEN</p>
              <p className="text-sm text-white/60 md:text-base">Tipaza</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
        >
          <a
            href="#contact"
            className="btn-primary flex h-14 min-w-[240px] items-center justify-center gap-2 rounded-xl px-10 text-base shadow-[0_0_48px_-12px_hsl(187_100%_45%/0.55)] md:h-16 md:min-w-[260px] md:px-12 md:text-lg"
          >
            Contact WhatsApp
            <ArrowRight className="h-6 w-6 md:h-7 md:w-7" />
          </a>
          <a
            href="#program"
            className="flex h-14 min-w-[240px] items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-10 text-base font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white/10 md:h-16 md:min-w-[260px] md:px-12 md:text-lg"
          >
            Le programme
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
