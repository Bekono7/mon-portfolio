export const fadeInUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0.1px)" },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.98, filter: "blur(8px)" },
  show: { opacity: 1, scale: 1, filter: "blur(0.1px)" },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0.06) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
