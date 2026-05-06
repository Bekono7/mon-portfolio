import { useState, type ReactNode } from "react";
import AnimatedSection from "@/components/motion/AnimatedSection";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { m, AnimatePresence } from "framer-motion";
import { Globe, Server, Smartphone, Wrench, Sparkles, Palette } from "lucide-react";
import { Category, CategoryData, skillCategories } from "@/data/skills";

/* ─── icon map ─────────────────────────────────────────────────────────────── */
// jsDelivr CDN is more reliable than cdn.simpleicons.org
const SI = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons";
const iconMap: Record<string, string> = {
  vuejs:          `${SI}/vuedotjs.svg`,
  nuxtjs:         `${SI}/nuxt.svg`,
  react:          `${SI}/react.svg`,
  typescript:     `${SI}/typescript.svg`,
  html5:          `${SI}/html5.svg`,
  css3:           `${SI}/css3.svg`,
  javascript:     `${SI}/javascript.svg`,
  tailwindcss:    `${SI}/tailwindcss.svg`,
  django:         `${SI}/django.svg`,
  fastapi:        `${SI}/fastapi.svg`,
  mysql:          `${SI}/mysql.svg`,
  postgresql:     `${SI}/postgresql.svg`,
  flutter:        `${SI}/flutter.svg`,
  dart:           `${SI}/dart.svg`,
  firebase:       `${SI}/firebase.svg`,
  git:            `${SI}/git.svg`,
  github:         `${SI}/github.svg`,
  gitlab:         `${SI}/gitlab.svg`,
  vscode:         `${SI}/visualstudiocode.svg`,
  docker:         `${SI}/docker.svg`,
  postman:        `${SI}/postman.svg`,
  trello:         `${SI}/trello.svg`,
  figma:          `${SI}/figma.svg`,
  anthropic:      `${SI}/anthropic.svg`,
};

/* ─── category meta ─────────────────────────────────────────────────────────── */
const categoryMeta: Record<Category, { icon: ReactNode; color: string }> = {
  Frontend:       { icon: <Globe className="h-4 w-4" />,       color: "from-blue-500 to-cyan-400" },
  Backend:        { icon: <Server className="h-4 w-4" />,      color: "from-emerald-500 to-teal-400" },
  Mobile:         { icon: <Smartphone className="h-4 w-4" />,  color: "from-violet-500 to-purple-400" },
  Outils:         { icon: <Wrench className="h-4 w-4" />,      color: "from-orange-500 to-amber-400" },
  "IA & Prompting": { icon: <Sparkles className="h-4 w-4" />, color: "from-pink-500 to-rose-400" },
  Design:         { icon: <Palette className="h-4 w-4" />,     color: "from-fuchsia-500 to-pink-400" },
};

/* ─── fallback text badges ──────────────────────────────────────────────────── */
const textFallback: Record<string, string> = {
  openai: "AI", anthropic: "AC", cursor: "C",
  adobephotoshop: "Ps", html5: "HTML", css3: "CSS",
  javascript: "JS", vscode: "VS",
};

/* ─── SkillIcon ─────────────────────────────────────────────────────────────── */
function SkillIcon({ iconName }: { iconName: string }) {
  const [hasError, setHasError] = useState(false);
  const url = iconMap[iconName];

  if (hasError || !url) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-[10px] font-bold text-primary">
        {textFallback[iconName] ?? iconName.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <m.img
      src={url}
      alt={iconName}
      onError={() => setHasError(true)}
      whileHover={{ scale: 1.2, rotate: 6 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="h-7 w-7 rounded-md bg-background/60 p-1 object-contain shadow-sm"
    />
  );
}

/* ─── SkillCard ─────────────────────────────────────────────────────────────── */
const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.96, filter: "blur(6px)" },
  show:   { opacity: 1, y: 0,  scale: 1,    filter: "blur(0.1px)",
    transition: { type: "spring", stiffness: 260, damping: 22 } },
  exit:   { opacity: 0, y: -12, scale: 0.96, filter: "blur(4px)",
    transition: { duration: 0.18 } },
};

function SkillCard({ skill, index }: { skill: CategoryData["skills"][number]; index: number }) {
  return (
    <m.div
      variants={cardVariant}
      layout
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-5
                 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-colors duration-300"
    >
      {/* subtle gradient shine on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl" />

      <div className="flex items-center gap-4">
        {/* icons cluster */}
        <div className="flex shrink-0 items-center gap-1.5">
          {skill.icons.map((name) => (
            <SkillIcon key={name} iconName={name} />
          ))}
        </div>

        {/* name */}
        <p className="text-sm font-semibold text-foreground leading-tight">{skill.name}</p>

        {/* index badge */}
        <span className="ml-auto shrink-0 text-[10px] font-mono text-muted-foreground/40 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </m.div>
  );
}

/* ─── grid container ────────────────────────────────────────────────────────── */
const gridVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
  exit:  { transition: { staggerChildren: 0.04 } },
};

function SkillsGrid({ skills }: { skills: CategoryData["skills"] }) {
  return (
    <m.div
      key={skills.map((s) => s.name).join("|")}
      variants={gridVariant}
      initial="hidden"
      animate="show"
      exit="exit"
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      {skills.map((skill, i) => (
        <SkillCard key={skill.name} skill={skill} index={i} />
      ))}
    </m.div>
  );
}

/* ─── category tabs ─────────────────────────────────────────────────────────── */
function CategoryTabs({
  active,
  onChange,
}: {
  active: Category;
  onChange: (c: Category) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {skillCategories.map((cat) => {
        const meta = categoryMeta[cat.id];
        const isActive = cat.id === active;
        return (
          <m.button
            key={cat.id}
            type="button"
            onClick={() => onChange(cat.id)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium
                        transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary
                        ${isActive
                          ? "text-white shadow-md"
                          : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
          >
            {isActive && (
              <m.span
                layoutId="tab-bg"
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${meta.color}`}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {meta.icon}
              {cat.id}
            </span>
          </m.button>
        );
      })}
    </div>
  );
}

/* ─── active category header ────────────────────────────────────────────────── */
function CategoryHeader({ category }: { category: Category }) {
  const meta = categoryMeta[category];
  const count = skillCategories.find((c) => c.id === category)?.skills.length ?? 0;
  return (
    <m.div
      key={category}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3"
    >
      <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${meta.color} text-white shadow-sm`}>
        {meta.icon}
      </div>
      <div>
        <p className="text-base font-bold text-foreground">{category}</p>
        <p className="text-xs text-muted-foreground">{count} compétence{count > 1 ? "s" : ""}</p>
      </div>
    </m.div>
  );
}

/* ─── main component ────────────────────────────────────────────────────────── */
const Skills = () => {
  const [active, setActive] = useState<Category>("Frontend");
  const activeData = skillCategories.find((c) => c.id === active) ?? skillCategories[0];

  return (
    <AnimatedSection id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading eyebrow="Stack" title="Compétences" />

        <div className="mt-10 space-y-8">
          {/* tabs */}
          <CategoryTabs active={active} onChange={setActive} />

          {/* panel */}
          <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur-sm p-6 space-y-6 shadow-sm">
            <CategoryHeader category={active} />

            <div className="h-px bg-border/50" />

            <AnimatePresence mode="wait">
              <SkillsGrid key={active} skills={activeData.skills} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
