import { motion } from "framer-motion";
import { learningItems } from "../data/learning";
import { BookOpen, Sparkles, Target } from "lucide-react";
import { useAnimation } from "../hooks/useAnimation";
import { floatingTransition, cardHoverTransition } from "../styles/transitions";

export function Learning() {
  const { getInitial, getAnimate, getWhileHover } = useAnimation();

  return (
    <section
      id="learning"
      className="section bg-background-secondary"
      aria-labelledby="learning-heading"
    >
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={getInitial({ opacity: 0, y: 20 })}
          animate={getAnimate({ opacity: 1, y: 0 })}
          transition={{ duration: 0.6 }}
        >
          <motion.span className="badge">Currently Learning</motion.span>
          <motion.h2
            id="learning-heading"
            className="section-title mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.1 }}
          >
            Expanding my engineering horizons.
          </motion.h2>
          <motion.p
            className="section-subtitle mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.2 }}
          >
            Always pushing forward. These are the areas I'm actively exploring and diving deeper into.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          role="list"
          aria-label="Learning topics"
          initial={getInitial({ opacity: 0 })}
          animate={getAnimate({ opacity: 1 })}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {learningItems.map((item, index) => (
            <motion.article
              key={item}
              className="card group relative overflow-hidden"
              role="listitem"
              whileHover={getWhileHover(cardHoverTransition)}
              initial={getInitial({ opacity: 0, y: 20, scale: 0.95 })}
              animate={getAnimate({ opacity: 1, y: 0, scale: 1 })}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              <div className="relative flex flex-col items-center text-center p-6 h-full">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                  animate={getAnimate({ y: [0, -10, 0], x: [0, 5, 0], transition: floatingTransition })}
                  transition={{ delay: index * 0.2 }}
                >
                  <BookOpen className="w-6 h-6 text-accent" aria-hidden="true" />
                </motion.div>
                <h3 className="font-semibold text-text-primary mb-1">{item}</h3>
                <p className="text-xs text-text-muted">Active exploration</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={getInitial({ opacity: 0, y: 20 })}
          animate={getAnimate({ opacity: 1, y: 0 })}
          transition={{ delay: 0.4 }}
        >
          <motion.p className="text-text-secondary mb-4">
            Learning is a continuous journey. No progress bars, no arbitrary percentages — just genuine curiosity and consistent effort.
          </motion.p>
          <div className="flex items-center justify-center gap-3 text-sm text-text-muted">
            <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
            <span>Driven by curiosity</span>
            <Target className="w-4 h-4 text-accent" aria-hidden="true" />
            <span>Focused on depth</span>
            <BookOpen className="w-4 h-4 text-accent" aria-hidden="true" />
            <span>Building real understanding</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}