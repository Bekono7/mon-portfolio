import { Button } from "@/components/ui/button";
import { ArrowDown, Download, FolderKanban, Mail } from "lucide-react";
import { m } from "framer-motion";
import { fadeInUp, stagger } from "@/components/motion/variants";
import { site, mailtoCvRequest } from "@/config/site";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-glow py-20"
    >
      <m.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-3xl dark:bg-primary/12"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/[0.06] blur-3xl dark:bg-primary/10"
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <m.div
            variants={stagger(0.1, 0.1)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1"
          >
            <m.p
              variants={fadeInUp}
              className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary"
            >
              {site.title}
            </m.p>

            <m.h1 variants={fadeInUp} className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Bonjour, je suis <span className="text-gradient">{site.fullName}</span>
            </m.h1>

            <m.p variants={fadeInUp} className="mb-8 text-lg font-light leading-relaxed text-muted-foreground">
              Développeur full stack passionné. Je crée des interfaces élégantes et des APIs robustes.
              Du concept au déploiement, je transforme vos idées en solutions digitales performantes.
              <br className="hidden sm:block" />
              Basé à {site.location}.
            </m.p>

            <m.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <m.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="hero" size="lg" className="rounded-full px-6 shadow-glow">
                  <a
                    href={site.cvPdfPath ? site.cvPdfPath : mailtoCvRequest()}
                    download={site.cvPdfPath ? true : false}
                  >
                    <Download className="h-4 w-4" />
                    Télécharger CV
                  </a>
                </Button>
              </m.div>
              <m.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="outlineDark" size="lg" className="rounded-full px-6">
                  <a href="#projects">
                    <FolderKanban className="h-4 w-4" />
                    Projets
                  </a>
                </Button>
              </m.div>
              <m.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="outlineDark" size="lg" className="rounded-full px-6">
                  <a href="#contact">
                    <Mail className="h-4 w-4" />
                    Contact
                  </a>
                </Button>
              </m.div>
            </m.div>
          </m.div>

          <m.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <img
                src="/portrait.jpg"
                alt={site.fullName}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </m.div>
        </div>
      </div>

      <m.a
        href="#about"
        aria-label="Aller à la section À propos"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <m.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="h-6 w-6" strokeWidth={1.5} />
        </m.span>
      </m.a>
    </section>
  );
};

export default Hero;
