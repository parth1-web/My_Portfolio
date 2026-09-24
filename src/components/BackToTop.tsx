import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useAnimation } from "../hooks/useAnimation";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { getInitial, getAnimate } = useAnimation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-600/30 border border-blue-300/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          style={{ background: "linear-gradient(135deg,#2563EB,#0EA5E9)" }}
          aria-label="Back to top"
          initial={getInitial({ opacity: 0, y: 16, scale: 0.9 })}
          animate={getAnimate({ opacity: 1, y: 0, scale: 1 })}
          exit={getInitial({ opacity: 0, y: 16, scale: 0.9 })}
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
