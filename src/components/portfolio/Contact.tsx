import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/motion/AnimatedSection";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { m, AnimatePresence } from "framer-motion";
import { fadeInUp, stagger } from "@/components/motion/variants";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────────
   ⚙️  CONFIGURATION EMAILJS
   1. Crée un compte sur https://www.emailjs.com (gratuit — 200 emails/mois)
   2. Connecte ton service email (Gmail, Outlook…)
   3. Crée un template avec les variables : {{from_name}}, {{from_email}}, {{message}}
   4. Remplace les 3 valeurs ci-dessous par tes vraies clés
───────────────────────────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = "service_chil6qw";   // ex: "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_1hzce89";  // ex: "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "7orpDw-loSkgbiK6c";   // ex: "abcDEFghiJKL"

const fieldClass =
  "rounded-xl border-border bg-background/80 transition-all duration-300 focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
      // reset après 5s
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <AnimatedSection id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Restons en contact"
          title="Contact"
          subtitle="Pour une collaboration ou un entretien — réponse sous quelques jours ouvrés."
        />

        <m.div
          className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:gap-12"
          variants={stagger(0.08, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ── infos de contact ── */}
          <m.div variants={fadeInUp} className="space-y-4">
            {[
              { icon: Phone, label: "Téléphone", value: site.phoneDisplay, href: `tel:${site.phoneTel}` },
              { icon: Mail,  label: "Email",     value: site.email,        href: `mailto:${site.email}` },
              { icon: MapPin,label: "Localisation", value: site.location },
            ].map((c) => (
              <m.div
                key={c.label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-sm transition-colors hover:border-primary/35"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-light text-muted-foreground">{c.label}</p>
                  {"href" in c && c.href ? (
                    <a href={c.href} className="font-medium transition-colors hover:text-primary">
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-medium">{c.value}</p>
                  )}
                </div>
              </m.div>
            ))}

            <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="hero" size="lg" className="w-full gap-2 rounded-full shadow-glow">
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Send className="h-4 w-4" /> WhatsApp
                </a>
              </Button>
            </m.div>
          </m.div>

          {/* ── formulaire ── */}
          <m.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-border bg-gradient-card p-6 shadow-card md:p-8"
            variants={fadeInUp}
          >
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                Nom
              </label>
              <Input
                id="contact-name"
                name="name"
                required
                placeholder="Votre nom"
                className={cn(fieldClass, "h-11")}
                disabled={status === "sending"}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="contact-email"
                name="email"
                required
                type="email"
                placeholder="vous@email.com"
                className={cn(fieldClass, "h-11")}
                disabled={status === "sending"}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Votre message…"
                className={cn(fieldClass, "min-h-[140px] resize-none")}
                disabled={status === "sending"}
              />
            </div>
            {/* champ caché pour {{title}} */}
            <input type="hidden" name="title" value="Portfolio — Nouveau message" />

            <m.div whileHover={status === "idle" ? { scale: 1.02 } : {}} whileTap={status === "idle" ? { scale: 0.98 } : {}}>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full rounded-full shadow-glow gap-2"
                disabled={status === "sending" || status === "success"}
              >
                {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
              </Button>
            </m.div>

            {/* feedback */}
            <AnimatePresence>
              {status === "success" && (
                <m.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Message envoyé ! Je vous répondrai très vite.
                </m.div>
              )}
              {status === "error" && (
                <m.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-600 dark:text-red-400"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  Erreur d'envoi. Utilisez directement l'email ou WhatsApp.
                </m.div>
              )}
            </AnimatePresence>
          </m.form>
        </m.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
