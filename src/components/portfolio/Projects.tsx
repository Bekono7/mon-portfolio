import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Wifi } from "lucide-react";
import AnimatedSection from "@/components/motion/AnimatedSection";
import { m, AnimatePresence } from "framer-motion";
import { fadeInUp, stagger } from "@/components/motion/variants";
import { SectionHeading } from "@/components/portfolio/SectionHeading";

const filters = ["Tout", "ERP", "Plateforme", "E-commerce", "Admin"] as const;
type Filter = (typeof filters)[number];

type Project = {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  color: string;
  url?: string;
  repoUrl?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Fahari ERP",
    category: "ERP",
    desc: "Progiciel de gestion intégré en ligne — solution ERP complète pour entreprises avec gestion des modules métiers, tableau de bord et interface moderne.",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    color: "from-sky-500/20 to-blue-500/20",
    url: "https://fahari-erp.com/",
    image: "/fahari-preview.jpg.png",
  },
  {
    title: "Unifio ERP",
    category: "ERP",
    desc: "Progiciel de gestion intégré (ERP) inspiré de Fahari ERP, avec gestion complète des modules métiers et interface moderne pour entreprises.",
    tags: ["React", "TypeScript", "ERP", "Tailwind"],
    color: "from-orange-500/20 to-red-500/20",
    url: "https://github.com/Bekono7/unifio",
    image: "/unifio-preview.png",
  },
  {
    title: "NutriHarmony",
    category: "Plateforme",
    desc: "Plateforme web complète pour un restaurant diététique : commandes en ligne, création de comptes, gestion des plats et suivi nutritionnel.",
    tags: ["React", "Supabase", "Tailwind"],
    color: "from-green-500/20 to-emerald-500/20",
    url: "https://github.com/Bekono7/nutriharmony",
    image: "/nutriharmony-preview.png",
  },
  {
    title: "Marketia – Social Commerce",
    category: "E-commerce",
    desc: "Plateforme de social commerce permettant aux marchands de vendre via les réseaux sociaux avec un hub centralisé de gestion.",
    tags: ["React", "Social", "Commerce"],
    color: "from-pink-500/20 to-rose-500/20",
    image: "/marketia-preview.png",
  },
  {
    title: "Dolicash Admin Hub",
    category: "Admin",
    desc: "Interface administrative React pour la gestion d'utilisateurs et la supervision d'une application de gestion financière.",
    tags: ["React", "Admin", "Dashboard"],
    color: "from-yellow-500/20 to-orange-500/20",
    url: "https://github.com/Bekono7/dolicash-admin",
    image: "/dolicash-preview.png",
  },
];

/* ─── card ──────────────────────────────────────────────────────────────────── */
function ProjectCard({ p }: { p: Project }) {
  const hasDemo = Boolean(p.url);
  const hasRepo = Boolean(p.repoUrl);

  return (
    <m.article
      layout
      key={p.title}
      className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden
                 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5
                 transition-all duration-300 will-change-transform"
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -6 }}
    >
      {/* ── bannière ── */}
      <div className={cn("relative h-48 overflow-hidden bg-gradient-to-br", p.color)}>
        {p.image ? (
          <>
            <img
              src={p.image}
              alt={`Aperçu ${p.title}`}
              className="absolute inset-0 h-full w-full object-cover object-top
                         group-hover:scale-105 transition-transform duration-500"
            />
            {/* overlay pour lisibilité des badges */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-5xl font-black text-foreground/20
                          group-hover:scale-110 transition-transform duration-300 select-none">
            {p.title.substring(0, 2)}
          </div>
        )}

        {/* badges top */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="text-xs px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 font-medium">
            {p.category}
          </span>
          {hasDemo && (
            <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-emerald-500/90 text-white font-medium backdrop-blur-sm">
              <Wifi className="w-3 h-3" /> En ligne
            </span>
          )}
        </div>
      </div>

      {/* ── contenu ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors duration-200">
          {p.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {p.desc}
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-lg bg-secondary/80 text-muted-foreground
                         border border-border/50 group-hover:border-primary/20 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* liens */}
        <div className="flex items-center gap-4 pt-3 border-t border-border/60 mt-auto">
          {hasDemo ? (
            <m.a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              whileHover={{ x: 2 }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Voir la démo
            </m.a>
          ) : (
            <span className="text-xs text-muted-foreground italic">Démo sur demande</span>
          )}
          {hasRepo && (
            <m.a
              href={p.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground ml-auto"
              whileHover={{ x: 2 }}
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </m.a>
          )}
        </div>
      </div>
    </m.article>
  );
}

/* ─── main ──────────────────────────────────────────────────────────────────── */
const Projects = () => {
  const [filter, setFilter] = useState<Filter>("Tout");
  const list = filter === "Tout" ? projects : projects.filter((p) => p.category === filter);

  return (
    <AnimatedSection id="projects" className="py-24 bg-card/30">
      <m.div
        className="container mx-auto px-4 max-w-6xl"
        variants={stagger(0.08, 0.04)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeading
          eyebrow="Mes réalisations"
          title="Projets"
          subtitle="Sélection de projets académiques et professionnels. Les liens apparaissent lorsqu'une démo est disponible."
        />

        {/* ── filtres ── */}
        <m.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => {
            const count = f === "Tout" ? projects.length : projects.filter((p) => p.category === f).length;
            return (
              <m.button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                    : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                )}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {f}
                <span className={cn(
                  "text-[10px] font-bold px-1.5 py-0.5 rounded-full",
                  filter === f
                    ? "bg-white/20 text-white"
                    : "bg-secondary text-muted-foreground"
                )}>
                  {count}
                </span>
              </m.button>
            );
          })}
        </m.div>

        {/* ── grille ── */}
        <m.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout" initial={false}>
            {list.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </AnimatePresence>
        </m.div>

        {/* ── empty state ── */}
        {list.length === 0 && (
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground py-16"
          >
            Aucun projet dans cette catégorie pour le moment.
          </m.p>
        )}
      </m.div>
    </AnimatedSection>
  );
};

export default Projects;
