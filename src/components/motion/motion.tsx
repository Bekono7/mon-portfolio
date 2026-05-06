import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import type { PropsWithChildren } from "react";

export function MotionProvider({ children }: PropsWithChildren) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}

