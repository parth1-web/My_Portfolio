import { motion } from "framer-motion";
import { ArchitectureVisualization } from "./ArchitectureVisualization";
import { useAnimation } from "../hooks/useAnimation";

export function Architecture() {
  const { getInitial, getAnimate } = useAnimation();

  return (
    <section
      id="architecture"
      className="section bg-background-secondary"
      aria-labelledby="architecture-heading"
    >
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={getInitial({ opacity: 0, y: 20 })}
          animate={getAnimate({ opacity: 1, y: 0 })}
          transition={{ duration: 0.6 }}
        >
          <motion.span className="badge">Engineering Approach</motion.span>
          <motion.h2
            id="architecture-heading"
            className="section-title mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.1 }}
          >
            How I structure backend systems.
          </motion.h2>
          <motion.p
            className="section-subtitle mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.2 }}
          >
            A visual representation of the layered architecture pattern I use for building maintainable, scalable applications.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={getInitial({ opacity: 0 })}
          animate={getAnimate({ opacity: 1 })}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ArchitectureVisualization />

          <motion.div className="space-y-6">
            <motion.div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Clean Architecture Layers</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-blue-500" aria-hidden="true" />
                  <span className="text-text-primary">Client Applications</span>
                </div>
                <div className="text-accent text-center">↓</div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-purple-500" aria-hidden="true" />
                  <span className="text-text-primary">API Gateway / Controllers</span>
                </div>
                <div className="text-accent text-center">↓</div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-yellow-500" aria-hidden="true" />
                  <span className="text-text-primary">Authentication & Authorization</span>
                </div>
                <div className="text-accent text-center">↓</div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                  <span className="text-text-primary">Application Layer (Use Cases)</span>
                </div>
                <div className="text-accent text-center">↓</div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-pink-500" aria-hidden="true" />
                  <span className="text-text-primary">Domain Layer (Entities, Rules)</span>
                </div>
                <div className="text-accent text-center">↓</div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" aria-hidden="true" />
                  <span className="text-text-primary">Infrastructure (EF Core, External Services)</span>
                </div>
                <div className="text-accent text-center">↓</div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-teal-500" aria-hidden="true" />
                  <span className="text-text-primary">Database (PostgreSQL)</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Cross-Cutting Concerns</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: "Testing", desc: "Unit & Integration" },
                  { label: "Docker", desc: "Containerization" },
                  { label: "CI/CD", desc: "GitHub Actions" },
                  { label: "Payments", desc: "Khalti, eSewa, COD" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="p-3 bg-background rounded-lg border border-border"
                    initial={getInitial({ opacity: 0, y: 10 })}
                    animate={getAnimate({ opacity: 1, y: 0 })}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <p className="font-medium text-text-primary">{item.label}</p>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Key Principles</h3>
              <ul className="space-y-3" role="list">
                {[
                  "Dependency Inversion - Inner layers don't depend on outer layers",
                  "Repository Pattern - Abstract data access behind interfaces",
                  "Service Layer - Encapsulate business logic in application services",
                  "DTOs - Separate API contracts from domain models",
                  "SOLID - Single responsibility, open/closed, Liskov substitution, interface segregation, dependency inversion",
                ].map((principle, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                    initial={getInitial({ opacity: 0, x: -10 })}
                    animate={getAnimate({ opacity: 1, x: 0 })}
                    transition={{ delay: 0.15 + index * 0.05 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" aria-hidden="true" />
                    <span>{principle}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}