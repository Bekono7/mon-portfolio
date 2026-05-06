import { m } from "framer-motion";
import { fadeInUp, stagger } from "@/components/motion/variants";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <m.div
      variants={stagger(0.08, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className={`${isCentered ? "text-center mx-auto" : "text-left"} max-w-3xl mb-14 md:mb-16`}
    >
      <m.p variants={fadeInUp} className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">
        {eyebrow}
      </m.p>
      <div className={`relative ${isCentered ? "inline-block" : "w-[70%] mr-auto"}`}>
        <m.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </m.h2>
        <div
          className={`absolute -bottom-2 h-1 rounded-full ${isCentered ? "left-1/2 -translate-x-1/2 w-1/5" : "left-0 w-1/5"}`}
          style={{ backgroundColor: "hsl(var(--primary))" }}
        />
      </div>
      {subtitle ? (
        <m.p variants={fadeInUp} className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">
          {subtitle}
        </m.p>
      ) : null}
    </m.div>
  );
}
