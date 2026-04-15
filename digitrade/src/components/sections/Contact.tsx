import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl surface overflow-hidden"
          >
            <div className="grid md:grid-cols-5">
              {/* Contact Info */}
              <div className="md:col-span-2 bg-card border-r border-border p-10 md:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-display font-bold text-white mb-2">
                    Prêt à nous rejoindre ?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-10 leading-relaxed">
                    Contactez-nous pour finaliser votre partenariat ou pour toute question.
                  </p>

                  <div className="space-y-6">
                    <a
                      href="mailto:digitalvalley@esgen.edu.dz"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg surface flex items-center justify-center text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="text-sm">
                        <p className="text-muted-foreground text-xs mb-0.5">Email</p>
                        <p className="text-white font-medium group-hover:text-primary transition-colors">
                          digitalvalley@esgen.edu.dz
                        </p>
                      </div>
                    </a>

                    <a href="tel:+213793760040" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-lg surface flex items-center justify-center text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="text-sm">
                        <p className="text-muted-foreground text-xs mb-0.5">Téléphone</p>
                        <p className="text-white font-medium group-hover:text-primary transition-colors">
                          +213 793 76 00 40
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg surface flex items-center justify-center text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="text-sm">
                        <p className="text-muted-foreground text-xs mb-0.5">Adresse</p>
                        <p className="text-white font-medium">Pôle Universitaire de Kolea</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-3 p-10 md:p-12">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border border-border rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border border-border rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Nom de l'entreprise"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Email professionnel
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border border-border rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                      placeholder="jean@entreprise.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border border-border rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Nous sommes intéressés par le pack Gold..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full h-11 text-sm font-semibold"
                  >
                    Envoyer la demande
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
