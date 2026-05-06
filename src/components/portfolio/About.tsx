import AnimatedSection from "@/components/motion/AnimatedSection";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { m } from "framer-motion";
import { fadeInUp, stagger } from "@/components/motion/variants";
import { site } from "@/config/site";
import TechCube3D from "./TechCube";
import {
  Globe,
  Smartphone,
  Server,
  Palette,
  Monitor,
  Cpu,
  Wrench,
} from "lucide-react";

const About = () => {
  return (
    <AnimatedSection id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Présentation"
          title="À propos de moi"
          subtitle="Full stack avec une attention portée à l'architecture, à la sécurité des API et à une expérience utilisateur cohérente."
          align="left"
        />

        <m.div
          className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
          variants={stagger(0.1, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <m.div variants={fadeInUp} className="space-y-3 text-muted-foreground">
            <p className="text-sm font-light leading-relaxed">
              Développeur full stack basé à <span className="font-medium text-foreground">{site.location}</span>, je
              couvre le cycle des applications : besoins, architecture, API, interface et mise en production. Stack
              principale : <span className="font-medium text-foreground">Django, React et Flutter</span>, avec une approche Agile /
              Scrum.
            </p>
            <p className="text-sm font-light leading-relaxed">
              Formation : <span className="font-medium text-foreground">DTS et licence professionnelle en génie logiciel</span>
              (IAI-Cameroun). Code lisible, APIs sécurisées et UX soignée restent mes priorités.
            </p>
            <div className="grid grid-cols-3 gap-2 pt-3">
              {[
                { value: "2+", label: "Années" },
                { value: "6+", label: "Projets" },
                { value: "10+", label: "Tech" },
              ].map((s) => (
                <m.div
                  key={s.label}
                  className="rounded-xl border border-border bg-gradient-card px-2 py-3 text-center shadow-sm"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                >
                  <div className="text-xl font-bold text-primary">{s.value}</div>
                  <div className="text-xs font-light text-muted-foreground">{s.label}</div>
                </m.div>
              ))}
            </div>
          </m.div>

          <m.div variants={fadeInUp} className="relative mx-auto w-full max-w-md md:mx-0 flex justify-center">
            <div className="relative h-60 w-60 mx-auto lg:h-72 lg:w-72">
              <TechCube3D />
            </div>
          </m.div>
        </m.div>

            <m.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger(0.1, 0.1)}
              className="w-full mt-12"
            >
              <div className="relative mb-6">
                <h3 className="text-2xl font-bold text-foreground inline-block">
                  Ce que je fais
                </h3>
                <div
                  className="absolute -bottom-2 left-0 h-1 w-[4%] rounded-full"
                  style={{ backgroundColor: "hsl(var(--primary))" }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {[
                  {
                    title: "Développement Web",
                    description: "Sites et applications web modernes, performants et accessibles.",
                    icon: Globe,
                    color: "#10b981",
                  },
                  {
                    title: "Développement Mobile",
                    description: "Applications iOS et Android avec Flutter pour une expérience native.",
                    icon: Smartphone,
                    color: "#3b82f6",
                  },
                  {
                    title: "Backend & API",
                    description: "APIs robustes et sécurisées avec Django et architectures modernes.",
                    icon: Server,
                    color: "#8b5cf6",
                  },
                  {
                    title: "Création & Design",
                    description: "Interfaces élégantes et expériences utilisateur soignées.",
                    icon: Palette,
                    color: "#ec4899",
                  },
                  {
                    title: "Intégration Front-End",
                    description: "Intégration pixel-perfect avec React, TypeScript et Tailwind CSS.",
                    icon: Monitor,
                    color: "#f59e0b",
                  },
                  {
                    title: "IoT & Systèmes",
                    description: "Solutions connectées et systèmes embarqués intelligents.",
                    icon: Cpu,
                    color: "#06b6d4",
                  },
                ].map((service) => (
                  <m.div
                    key={service.title}
                    className="group relative flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                    whileHover={{ y: -4 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="rounded-lg p-3"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon className="h-6 w-6" style={{ color: service.color }} />
                    </div>
                    <h4 className="text-base font-semibold text-foreground">{service.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </m.div>
                ))}
          </div>
        </m.div>
      </div>
    </AnimatedSection>
  );
};

export default About;
