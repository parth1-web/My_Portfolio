import type { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const cardHover: Variants = {
  initial: { y: 0, scale: 1 },
  hover: { y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } },
};

export const buttonHover: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } },
  tap: { scale: 0.98, transition: { duration: 0.1, ease: "easeOut" } },
};

export const iconHover: Variants = {
  initial: { x: 0 },
  hover: { x: 4, transition: { duration: 0.2, ease: "easeOut" } },
};

export const borderGlow: Variants = {
  initial: { borderColor: "rgba(255,255,255,0.08)" },
  hover: { borderColor: "rgba(59, 130, 246, 0.5)", transition: { duration: 0.3, ease: "easeOut" } },
};

export const terminalCursor: Variants = {
  initial: { opacity: 1 },
  animate: { opacity: [1, 0, 1], transition: { duration: 1, repeat: Infinity, ease: "linear" } },
};

export const floatingElement: Variants = {
  initial: { y: 0, x: 0 },
  animate: {
    y: [0, -10, 0],
    x: [0, 5, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export const nodePulse: Variants = {
  initial: { scale: 1, opacity: 0.6 },
  animate: { scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } },
};

export const lineFlow: Variants = {
  initial: { strokeDashoffset: 100 },
  animate: { strokeDashoffset: 0, transition: { duration: 2, ease: "linear" } },
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const getStaggeredVariants = (index: number, baseDelay = 0.1): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: baseDelay + index * 0.1,
    },
  },
});