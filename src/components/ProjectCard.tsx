import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon } from "./SocialIcons";
import { ExternalLink, ChevronDown, Code, Star } from "lucide-react";
import type { Project } from "../data/projects";
import { useAnimation } from "../hooks/useAnimation";
import { useInView } from "../hooks/useInView";
import { useState, useCallback } from "react";
import { buttonHoverTransition, buttonTapTransition, arrowPulseTransition } from "../styles/transitions";

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
  const { getInitial, getAnimate, getWhileHover, reducedMotion } = useAnimation();
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);
  const { ref, inView } = useInView<HTMLElement>();

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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, [reducedMotion]);

  const visibleTechs = showAllTech ? project.technologies : project.technologies.slice(0, 8);
  const hiddenCount = project.technologies.length - visibleTechs.length;

  return (
    <motion.article
      ref={ref as React.Ref<HTMLElement>}
      onMouseMove={handleMouseMove}
      className="card group relative overflow-hidden"
      initial={getInitial({ opacity: 0, y: 30 })}
      animate={inView ? getAnimate({ opacity: 1, y: 0 }) : undefined}
      transition={{ duration: 0.55, delay: Math.min(index * 0.08, 0.3) }}
      style={{ viewTransitionName: `project-${project.id}` }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
        style={{ background: "radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgba(59,130,246,0.16), transparent 65%)" }}
      />
      <div className="absolute top-4 right-4 z-10">
        <span className={`status-badge ${getStatusClass(project.status)}`}>
          {project.status}
        </span>
      </div>

      <div className="relative space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0 pr-2">
            <h3 className="text-xl font-bold text-text-primary group-hover:text-sky-300 transition-colors text-balance">
              {project.title}
            </h3>
            <p className="text-sm text-text-muted mt-1 capitalize">
              {project.category}
            </p>
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
              onClick={() => setShowArchitecture((v) => !v)}
              className="btn-ghost !min-h-[44px] !min-w-[44px] p-2 flex-shrink-0 border border-border"
              whileHover={getWhileHover({ scale: 1.06 })}
              whileTap={getWhileHover({ scale: 0.96 })}
              aria-expanded={showArchitecture}
              aria-controls={`architecture-${project.id}`}
              aria-label={showArchitecture ? "Hide architecture" : "Show architecture"}
            >
              <motion.span
                animate={{ rotate: showArchitecture ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-1"
              >
                <LayersIcon className="w-4 h-4" aria-hidden="true" />
                <ChevronDown className="w-3.5 h-3.5 text-text-muted" aria-hidden="true" />
              </motion.span>
            </motion.button>
          )}
        </div>

        <p className="text-text-secondary leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies">
          {visibleTechs.map((tech) => (
            <span key={tech} className="tech-badge transition-colors hover:border-sky-300/50 hover:text-sky-100" role="listitem">
              {tech}
            </span>
          ))}
          {hiddenCount > 0 && !showAllTech && (
            <button
              onClick={() => setShowAllTech(true)}
              className="tech-badge text-sky-300 border-sky-300/30 hover:bg-sky-400/10 min-h-[28px]"
            >
              +{hiddenCount} more
            </button>
          )}
          {showAllTech && project.technologies.length > 8 && (
            <button
              onClick={() => setShowAllTech(false)}
              className="tech-badge text-text-muted hover:text-text-primary min-h-[28px]"
            >
              Show less
            </button>
          )}
        </div>

        <AnimatePresence initial={false}>
          {showArchitecture && (
            <motion.div
              id={`architecture-${project.id}`}
              className="overflow-hidden"
              initial={getInitial({ height: 0, opacity: 0 })}
              animate={getAnimate({ height: "auto", opacity: 1 })}
              exit={getInitial({ height: 0, opacity: 0 })}
              transition={{ duration: 0.32, ease: "easeInOut" }}
            >
              <div className="mt-4 pt-4 border-t border-border space-y-3">
                <p className="text-sm font-medium text-text-primary flex items-center gap-2">
                  <Code className="w-4 h-4 text-accent" aria-hidden="true" />
                  Architecture Flow
                </p>
                <div className="font-mono text-sm text-text-secondary space-y-1 overflow-x-auto">
                  {project.architecture.map((layer, layerIndex) => (
                    <div key={layer} className="flex items-center gap-2">
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
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group/btn flex-1 sm:flex-none justify-center min-h-[44px]"
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
              className="btn-secondary group/btn flex-1 sm:flex-none justify-center min-h-[44px]"
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
