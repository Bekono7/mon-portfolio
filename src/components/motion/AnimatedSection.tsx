import type { PropsWithChildren } from "react";
import { m } from "framer-motion";
import { scaleIn } from "@/components/motion/variants";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = PropsWithChildren<{
  className?: string;
  as?: "section" | "div";
  id?: string;
  delay?: number;
  once?: boolean;
}>;

export default function AnimatedSection({
  children,
  className,
  as = "section",
  id,
  delay = 0,
  once = true,
}: AnimatedSectionProps) {
  const Comp = as === "div" ? m.div : m.section;

  return (
    <Comp
      id={id}
      className={cn(className)}
      variants={scaleIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}

