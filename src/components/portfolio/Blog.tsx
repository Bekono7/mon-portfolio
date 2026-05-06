import AnimatedSection from "@/components/motion/AnimatedSection";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { m } from "framer-motion";
import { fadeInUp, stagger } from "@/components/motion/variants";
import { Calendar } from "lucide-react";

const articles = [
  {
    title: "Structurer une API REST avec Django",
    excerpt: "Bonnes pratiques pour la versionnage, la pagination et les réponses d’erreur cohérentes.",
    tags: ["Django", "API", "Backend"],
    date: "12 mars 2026",
  },
  {
    title: "Animations fluides sans sacrifier les performances",
    excerpt: "Framer Motion, réduction des mouvements et patterns pour une UX premium sur le web.",
    tags: ["React", "Framer Motion", "UX"],
    date: "28 févr. 2026",
  },
  {
    title: "Tailwind : design system léger en équipe",
    excerpt: "Tokens, composants et cohérence visuelle quand le projet grandit.",
    tags: ["Tailwind", "Design", "Frontend"],
    date: "5 janv. 2026",
  },
];

const Blog = () => {
  return (
    <AnimatedSection id="blog" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Écrits"
          title="Articles"
          subtitle="Notes techniques et réflexions sur le développement produit."
        />

        <m.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={stagger(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {articles.map((post) => (
            <m.article
              key={post.title}
              variants={fadeInUp}
              className="group relative flex flex-col rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition-shadow duration-300 hover:border-primary/25 hover:shadow-[0_20px_50px_-12px_hsl(0_0%_0%_/_0.35)] dark:hover:shadow-[0_20px_50px_-12px_hsl(0_0%_0%_/_0.55)]"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </AnimatedSection>
  );
};

export default Blog;
