import { motion } from "framer-motion";
import { GithubIcon } from "./SocialIcons";
import { ExternalLink, ChevronDown, ChevronUp, Code, Star } from "lucide-react";
import type { Project } from "../data/projects";
import { useAnimation } from "../hooks/useAnimation";
import { useInView } from "../hooks/useInView";
import { useState } from "react";
import { cardHoverTransition, buttonHoverTransition, buttonTapTransition, arrowPulseTransition } from "../styles/transitions";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { getInitial, getAnimate, getWhileHover } = useAnimation();
  const [showArchitecture, setShowArchitecture] = useState(false);
  const inView = useInView();

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return "status-completed";
      case "Production-style":
      case "Featured":
        return "status-production";
      case "In Development":
      case "Active":
        return "status-development";
      case "Learning Project":
        return "status-learning";
      default:
        return "status-development";
    }
  };

  const statusLabel = project.status;

  return (
    <motion.article
      className="card group relative overflow-hidden"
      whileHover={getWhileHover(cardHoverTransition)}
      initial={!inView ? getInitial({ opacity: 0, y: 30 }) : undefined}
      animate={inView ? getAnimate({ opacity: 1, y: 0 }) : undefined}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ viewTransitionName: `project-${project.id}` }}
    >
      <div className="absolute top-4 right-4 z-10">
        <motion.span
          className={`status-badge ${getStatusClass(project.status)}`}
          initial={getInitial({ opacity: 0, scale: 0.8 })}
          animate={getAnimate({ opacity: 1, scale: 1 })}
          transition={{ delay: 0.2 }}
        >
          {statusLabel}
        </motion.span>
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <motion.h3
              className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors text-balance"
              whileHover={getWhileHover({ x: 4 })}
            >
              {project.title}
            </motion.h3>
            <motion.p className="text-sm text-text-muted mt-1 capitalize">
              {project.category}
            </motion.p>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-text-secondary">
              {project.language && (
                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-500/10 border border-blue-300/20 font-mono">
                  <span className="w-2 h-2 rounded-full bg-sky-400" aria-hidden="true" />
                  {project.language}
                </span>
              )}
              {typeof project.stars === "number" && (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-400/10 border border-amber-300/20">
                  <Star className="w-3 h-3 text-amber-300" aria-hidden="true" />
                  {project.stars}
                </span>
              )}
              {project.updatedAt && (
                <span className="px-2 py-1 rounded-md bg-white/5 border border-border font-mono">
                  Updated {project.updatedAt}
                </span>
              )}
            </div>
          </div>
          {project.architecture.length > 0 && (
            <motion.button
              onClick={() => setShowArchitecture(!showArchitecture)}
              className="btn-ghost p-2 flex-shrink-0"
              whileHover={getWhileHover(buttonHoverTransition)}
              whileTap={getWhileHover(buttonTapTransition)}
              aria-expanded={showArchitecture}
              aria-controls={`architecture-${project.id}`}
              aria-label={showArchitecture ? "Hide architecture" : "Show architecture"}
            >
              <LayersIcon className="w-4 h-4" aria-hidden="true" />
              <motion.span
                className="sr-only"
                animate={showArchitecture ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                {showArchitecture ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </motion.span>
            </motion.button>
          )}
        </div>

        <motion.p
          className="text-text-secondary leading-relaxed"
          initial={getInitial({ opacity: 0, y: 10 })}
          animate={getAnimate({ opacity: 1, y: 0 })}
          transition={{ delay: 0.1 }}
        >
          {project.description}
        </motion.p>

        <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies">
          {project.technologies.slice(0, 8).map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="tech-badge"
              role="listitem"
              initial={getInitial({ opacity: 0, scale: 0.9 })}
              animate={getAnimate({ opacity: 1, scale: 1 })}
              transition={{ delay: 0.15 + techIndex * 0.02 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 8 && (
            <motion.span
              className="tech-badge text-text-muted"
              initial={getInitial({ opacity: 0, scale: 0.9 })}
              animate={getAnimate({ opacity: 1, scale: 1 })}
              transition={{ delay: 0.15 + 8 * 0.02 }}
            >
              +{project.technologies.length - 8} more
            </motion.span>
          )}
        </div>

        <motion.div
          id={`architecture-${project.id}`}
          className="overflow-hidden transition-all duration-300"
          initial={getInitial({ height: 0, opacity: 0 })}
          animate={getAnimate(showArchitecture ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 })}
        >
          {showArchitecture && (
            <motion.div
              className="mt-4 pt-4 border-t border-border space-y-3"
              initial={getInitial({ opacity: 0, y: -10 })}
              animate={getAnimate({ opacity: 1, y: 0 })}
              transition={{ delay: 0.1 }}
            >
              <p className="text-sm font-medium text-text-primary flex items-center gap-2">
                <Code className="w-4 h-4 text-accent" aria-hidden="true" />
                Architecture Flow
              </p>
              <div className="font-mono text-sm text-text-secondary space-y-1 overflow-x-auto">
                {project.architecture.map((layer, layerIndex) => (
                  <motion.div
                    key={layer}
                    className="flex items-center gap-2"
                    initial={getInitial({ opacity: 0, x: -10 })}
                    animate={getAnimate({ opacity: 1, x: 0 })}
                    transition={{ delay: layerIndex * 0.05 }}
                  >
                    <span className="text-text-muted">{layer}</span>
                    {layerIndex < project.architecture.length - 1 && (
                      <motion.span
                        className="text-accent"
                        animate={getAnimate(arrowPulseTransition)}
                        transition={{ delay: layerIndex * 0.2 }}
                      >
                        ↓
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group flex-1 sm:flex-none justify-center"
            whileHover={getWhileHover(buttonHoverTransition)}
            whileTap={getWhileHover(buttonTapTransition)}
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon className="w-4 h-4" aria-hidden="true" />
            <span>Code</span>
          </motion.a>
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group flex-1 sm:flex-none justify-center"
              whileHover={getWhileHover(buttonHoverTransition)}
              whileTap={getWhileHover(buttonTapTransition)}
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}