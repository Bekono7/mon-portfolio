import AnimatedSection from "@/components/motion/AnimatedSection";
import { m } from "framer-motion";
import { fadeInUp, stagger } from "@/components/motion/variants";
import { Calendar, BriefcaseBusiness, Award, BookOpen, Building2 } from "lucide-react";

const experiences = [
  {
    company: "Welldone Planet",
    role: "Stagiaire Académique en Développement Informatique",
    period: "Juillet 2024 - Septembre 2024",
    icon: Building2,
    color: "#3b82f6",
    details: [
      "Conception d'une application de gestion de collecte et vente de déchets non recyclés",
      "Développement d'une plateforme de gestion d'agence de voyage avec réservation et suivi client",
      "Refonte du site web de l'entreprise avec amélioration de l'UX",
    ],
  },
  {
    company: "Welldone Planet",
    role: "Stagiaire Académique – Chargé de Formation",
    period: "Janvier 2025 - Juin 2025",
    icon: BriefcaseBusiness,
    color: "#10b981",
    details: [
      "Formation des jeunes aux outils informatiques de base",
      "Animation d'ateliers HTML5, CSS3 et Python",
      "Modernisation du site web de l'entreprise",
    ],
  },
];

const education = [
  {
    degree: "Diplôme d'Ingénieur des Travaux Informatique",
    institution: "IAI-Cameroun",
    year: "2025",
    icon: Award,
    color: "#8b5cf6",
  },
  {
    degree: "Licence Professionnelle en Génie Logiciel",
    institution: "IAI-Cameroun",
    year: "2025",
    icon: Award,
    color: "#8b5cf6",
  },
  {
    degree: "DTS – Diplôme de Technicien Supérieur",
    institution: "IAI-Cameroun",
    year: "2024",
    icon: Award,
    color: "#8b5cf6",
  },
  {
    degree: "Baccalauréat A4 Allemand",
    institution: "Lycée Bilingue",
    year: "2021",
    icon: Award,
    color: "#8b5cf6",
  },
];

const projects = [
  {
    title: "ERP – Progiciel de Gestion Intégré",
    institution: "IAI-Cameroun",
    period: "Janvier - Juin 2025",
    icon: BookOpen,
    color: "#f59e0b",
    details: [
      "Développement d'un ERP modulaire avec gestion comptable, RH et ventes",
      "Stack: Python (Django), PostgreSQL, architecture MVC",
      "Méthodologie Agile/Scrum",
      "Présenté au séminaire académique de l'IAI-Cameroun",
    ],
  },
];

const Parcours = () => {
  return (
    <AnimatedSection id="parcours" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <m.div
          variants={stagger(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <m.p variants={fadeInUp} className="text-primary text-center mb-2 text-sm font-medium uppercase tracking-wide">
            Mon parcours
          </m.p>
          <m.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
          >
            Expériences, Parcours Académique & Diplômes
          </m.h2>
          <m.p
            variants={fadeInUp}
            className="text-muted-foreground text-center max-w-2xl mx-auto text-sm"
          >
            Un parcours marqué par des expériences terrain enrichissantes et une formation solide en génie logiciel.
          </m.p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Section Expériences */}
          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger(0.15, 0.1)}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="rounded-xl p-3 bg-primary/10 border border-primary/20">
                <BriefcaseBusiness className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Expériences</h3>
            </div>

            <div className="relative">
              {/* Timeline verticale */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <m.div
                    key={index}
                    className="relative pl-12"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {/* Point */}
                    <div className="absolute left-3 top-6 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                    <div className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all group">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-medium text-muted-foreground mb-3">
                        {exp.company}
                      </p>
                      <ul className="space-y-2">
                        {exp.details.map((detail, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </m.div>
                ))}
              </div>
            </div>
          </m.div>

          {/* Section Formation & Diplômes */}
          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger(0.15, 0.1)}
          >
            {/* Diplômes */}
            <div className="flex items-center gap-3 mb-8">
              <div className="rounded-xl p-3 bg-primary/10 border border-primary/20">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Diplômes</h3>
            </div>

            <div className="relative mb-10">
              {/* Timeline verticale */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <m.div
                    key={index}
                    className="relative pl-12"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Point */}
                    <div className="absolute left-3 top-5 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                    <div className="flex items-start gap-2">
                      <div className="mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-foreground">
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-foreground">{edu.institution}</p>
                        <p className="text-xs text-muted-foreground">{edu.year}</p>
                      </div>
                    </div>
                  </m.div>
                ))}
              </div>
            </div>

              {/* Projet académique */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-xl p-3 bg-primary/10 border border-primary/20">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Projet Académique</h3>
              </div>

              <m.div
                className="rounded-xl border border-border bg-card p-5 shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="rounded-lg p-2" style={{ backgroundColor: `${projects[0].color}15` }}>
                    <BookOpen className="h-5 w-5" style={{ color: projects[0].color }} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {projects[0].title}
                    </h4>
                    <p className="text-sm text-primary font-medium">
                      {projects[0].institution}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3" />
                      <span>{projects[0].period}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {projects[0].details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </m.div>
            </div>
          </m.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Parcours;
