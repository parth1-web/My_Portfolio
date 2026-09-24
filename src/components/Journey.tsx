import { motion } from "framer-motion";
import { journey } from "../data/journey";
import { useAnimation } from "../hooks/useAnimation";

export function Journey() {
  const { getInitial, getAnimate } = useAnimation();

  return (
    <section
      id="journey"
      className="section"
      aria-labelledby="journey-heading"
    >
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={getInitial({ opacity: 0, y: 20 })}
          animate={getAnimate({ opacity: 1, y: 0 })}
          transition={{ duration: 0.6 }}
        >
          <motion.span className="badge">Development Journey</motion.span>
          <motion.h2
            id="journey-heading"
            className="section-title mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.1 }}
          >
            My path to backend engineering.
          </motion.h2>
          <motion.p
            className="section-subtitle mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.2 }}
          >
            From computer science fundamentals to distributed systems exploration.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative max-w-3xl mx-auto"
          initial={getInitial({ opacity: 0 })}
          animate={getAnimate({ opacity: 1 })}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" aria-hidden="true" />

          {journey.map((item, index) => (
            <motion.div
              key={item.number}
              className="relative pl-20 pb-12 last:pb-0"
              initial={getInitial({ opacity: 0, x: -30 })}
              animate={getAnimate({ opacity: 1, x: 0 })}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute left-0 top-1 flex items-center justify-center w-16 h-16">
                <div className="relative z-10 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg" aria-hidden="true" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-accent/30"
                  animate={getAnimate({ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] })}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </div>

              <motion.article className="card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent font-mono">{item.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-text-secondary mb-4">{item.description}</p>
                    {item.details && (
                      <div className="flex flex-wrap gap-2" role="list">
                        {item.details.map((detail, detailIndex) => (
                          <motion.span
                            key={detail}
                            className="tech-badge"
                            role="listitem"
                            initial={getInitial({ opacity: 0, scale: 0.9 })}
                            animate={getAnimate({ opacity: 1, scale: 1 })}
                            transition={{ delay: 0.1 + detailIndex * 0.02 }}
                          >
                            {detail}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}