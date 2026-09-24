import { motion } from "framer-motion";
import { 
  Layers, 
  Globe, 
  Shield, 
  CheckCircle, 
  Server 
} from "lucide-react";
import { philosophy } from "../data/philosophy";
import { useAnimation } from "../hooks/useAnimation";
import { cardHoverTransition } from "../styles/transitions";

const icons = {
  Architecture: Layers,
  "API Development": Globe,
  Security: Shield,
  Quality: CheckCircle,
  Deployment: Server,
};

export function TechnicalPhilosophy() {
  const { getInitial, getAnimate, getWhileHover } = useAnimation();

  return (
    <section
      id="philosophy"
      className="section"
      aria-labelledby="philosophy-heading"
    >
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={getInitial({ opacity: 0, y: 20 })}
          animate={getAnimate({ opacity: 1, y: 0 })}
          transition={{ duration: 0.6 }}
        >
          <motion.span className="badge">How I Build</motion.span>
          <motion.h2
            id="philosophy-heading"
            className="section-title mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.1 }}
          >
            My technical philosophy and engineering principles.
          </motion.h2>
          <motion.p
            className="section-subtitle mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.2 }}
          >
            These principles guide how I approach backend engineering, system design, and software craftsmanship.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={getInitial({ opacity: 0 })}
          animate={getAnimate({ opacity: 1 })}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {philosophy.map((item, index) => {
            const Icon = icons[item.title as keyof typeof icons] || Layers;
            return (
              <motion.article
                key={item.title}
                className="card group"
                whileHover={getWhileHover(cardHoverTransition)}
                initial={getInitial({ opacity: 0, y: 20 })}
                animate={getAnimate({ opacity: 1, y: 0 })}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-accent text-sm font-medium mb-3">{item.description}</p>
                    <ul className="space-y-2" role="list">
                      {item.points.map((point, pointIndex) => (
                        <motion.li
                          key={point}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                          initial={getInitial({ opacity: 0, x: -10 })}
                          animate={getAnimate({ opacity: 1, x: 0 })}
                          transition={{ delay: 0.1 + pointIndex * 0.05 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" aria-hidden="true" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}