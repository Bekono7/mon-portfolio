import type { PropsWithChildren } from "react";
import { m } from "framer-motion";

export default function PageTransition({ children }: PropsWithChildren) {
  return (
    <m.div
      initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0.1px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(10px)" }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </m.div>
  );
}

