import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_E164 = "213793760040";
const WHATSAPP_DISPLAY = "+213 793 76 00 40";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_E164}`;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] pt-16 sm:pt-24 md:pt-32"
      style={{
        paddingBottom: "max(3.5rem, calc(env(safe-area-inset-bottom, 0px) + 2rem))",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,hsl(187_100%_50%/0.12),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass w-full p-5 text-center sm:p-8 md:p-10"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </p>
          <h2 className="mb-5 font-display text-xl font-bold text-foreground sm:mb-6 sm:text-2xl md:text-3xl">
            Écrivez-nous sur WhatsApp
          </h2>
          <motion.a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contacter sur WhatsApp au ${WHATSAPP_DISPLAY}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex min-h-12 w-full touch-manipulation flex-col items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-4 text-sm font-semibold text-white shadow-[0_16px_48px_-12px_rgba(37,211,102,0.45)] transition-shadow hover:shadow-[0_20px_56px_-12px_rgba(37,211,102,0.55)] active:brightness-95 sm:flex-row sm:gap-3 sm:px-6 sm:text-base md:text-lg"
          >
            <FaWhatsapp className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" aria-hidden />
            <span className="max-w-full break-words">
              WhatsApp · <span className="whitespace-nowrap">{WHATSAPP_DISPLAY}</span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
