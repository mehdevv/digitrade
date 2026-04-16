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
    <section
      className="relative box-border flex w-full shrink-0 items-center justify-center overflow-hidden pt-[max(5.25rem,calc(4.25rem+env(safe-area-inset-top,0px)))] pb-[env(safe-area-inset-bottom,0px)]"
      style={{
        height: "100dvh",
        minHeight: "100dvh",
        maxHeight: "100dvh",
      }}
    >
      <div className="absolute inset-0 z-0 isolate">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full min-h-full w-full min-w-full object-cover opacity-[0.32] scale-[1.02]"
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
          className="absolute inset-0 opacity-[0.22] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Caps blend at edges so grain never punches through to the page behind the hero */}
        <div
          className="pointer-events-none absolute inset-0 shadow-[inset_0_-4rem_4rem_-1rem_rgba(0,0,0,0.55)]"
          aria-hidden
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] text-center sm:px-4 md:px-6"
        style={{ y: y1, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex max-w-[min(100%,22rem)] flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white/90 shadow-lg shadow-black/20 backdrop-blur-md sm:mb-8 sm:gap-3 sm:px-6 sm:py-3 sm:text-base md:text-lg"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_12px_hsl(187_100%_50%)]" />
          <span className="font-medium tracking-wide">2e édition · Tipaza</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 max-w-[100%] px-1 font-display text-[clamp(2.65rem,11vw+0.5rem,9.5rem)] font-bold leading-[0.9] tracking-tighter text-white sm:mb-7 sm:leading-[0.92] md:text-8xl lg:text-[9.5rem]"
        >
          DIGITRADE
          <br />
          <span className="text-gradient">2.0</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 max-w-lg px-1 text-base font-light text-white/75 sm:mb-12 sm:text-lg md:mb-14 md:text-xl"
        >
          E-commerce, fintech &amp; innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex w-full max-w-md flex-col items-stretch gap-5 sm:mb-12 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-8 md:mb-14 md:gap-10"
        >
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-left sm:gap-4 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-primary shadow-inner backdrop-blur-md sm:h-14 sm:w-14 md:h-16 md:w-16">
              <Calendar className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white sm:text-base md:text-lg">2 jours</p>
              <p className="text-xs text-white/60 sm:text-sm md:text-base">Expo &amp; conférences</p>
            </div>
          </div>
          <div className="hidden h-12 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent sm:block" />
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-left sm:gap-4 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-primary shadow-inner backdrop-blur-md sm:h-14 sm:w-14 md:h-16 md:w-16">
              <MapPin className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white sm:text-base md:text-lg">ESGEN</p>
              <p className="text-xs text-white/60 sm:text-sm md:text-base">Tipaza</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4 md:gap-5"
        >
          <a
            href="#contact"
            className="btn-primary flex min-h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base shadow-[0_0_48px_-12px_hsl(187_100%_45%/0.55)] sm:min-h-14 sm:w-auto sm:min-w-[220px] sm:px-10 md:min-h-16 md:min-w-[260px] md:px-12 md:text-lg active:brightness-95"
          >
            Contact WhatsApp
            <ArrowRight className="h-5 w-5 shrink-0 sm:h-6 sm:w-6 md:h-7 md:w-7" />
          </a>
          <a
            href="#program"
            className="flex min-h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white/10 sm:min-h-14 sm:w-auto sm:min-w-[220px] sm:px-10 md:min-h-16 md:min-w-[260px] md:px-12 md:text-lg active:bg-white/15"
          >
            Le programme
            <ArrowRight className="h-5 w-5 shrink-0 sm:h-6 sm:w-6 md:h-7 md:w-7" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
