import { motion, useScroll, useSpring } from "framer-motion";
import { useAnimation } from "../hooks/useAnimation";

export function ScrollProgress() {
  const { reducedMotion } = useAnimation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  if (reducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg,#2563EB,#38BDF8,#818CF8)",
      }}
      aria-hidden="true"
    />
  );
}
