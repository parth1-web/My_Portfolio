import { motion } from "framer-motion";
import { 
  Server, 
  GitBranch, 
  Shield, 
  Database, 
  CheckCircle, 
  Settings,
  Wrench 
} from "lucide-react";
import { skillCategories } from "../data/skills";
import { useAnimation } from "../hooks/useAnimation";
import { cardHoverTransition, badgeHoverTransition } from "../styles/transitions";

const categoryIcons = {
  Backend: Server,
  Architecture: GitBranch,
  Security: Shield,
  Database: Database,
  Testing: CheckCircle,
  DevOps: Settings,
  Tools: Wrench,
};

export function Skills() {
  const { getInitial, getAnimate, getWhileHover } = useAnimation();

  return (
    <section
      id="skills"
      className="section bg-background-secondary"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={getInitial({ opacity: 0, y: 20 })}
          animate={getAnimate({ opacity: 1, y: 0 })}
          transition={{ duration: 0.6 }}
        >
          <motion.span className="badge">Technical Skills</motion.span>
          <motion.h2
            id="skills-heading"
            className="section-title mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.1 }}
          >
            Technologies and tools I work with.
          </motion.h2>
          <motion.p
            className="section-subtitle mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.2 }}
          >
            Organized by domain to reflect my backend engineering focus.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={getInitial({ opacity: 0 })}
          animate={getAnimate({ opacity: 1 })}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.name as keyof typeof categoryIcons] || Server;
            return (
              <motion.article
                key={category.name}
                className="card group"
                whileHover={getWhileHover(cardHoverTransition)}
                initial={getInitial({ opacity: 0, y: 20 })}
                animate={getAnimate({ opacity: 1, y: 0 })}
                transition={{ delay: categoryIndex * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2" role="list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="tech-badge group"
                      role="listitem"
                      whileHover={getWhileHover(badgeHoverTransition)}
                      initial={getInitial({ opacity: 0, scale: 0.9 })}
                      animate={getAnimate({ opacity: 1, scale: 1 })}
                      transition={{ delay: categoryIndex * 0.08 + skillIndex * 0.02 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}