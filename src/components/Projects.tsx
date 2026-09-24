import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { useAnimation } from "../hooks/useAnimation";

const filters = ["All", "Backend", "Full-Stack", "Frontend"] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  const { getInitial, getAnimate } = useAnimation();
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category.toLowerCase().includes(active.toLowerCase()));
  }, [active]);

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          initial={getInitial({ opacity: 0, y: 20 })}
          animate={getAnimate({ opacity: 1, y: 0 })}
          transition={{ duration: 0.6 }}
        >
          <motion.span className="badge">Featured Projects</motion.span>
          <motion.h2
            id="projects-heading"
            className="section-title mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.1 }}
          >
            Real applications from my GitHub.
          </motion.h2>
          <motion.p
            className="section-subtitle mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.2 }}
          >
            Live-synced with <span className="text-sky-300 font-semibold">github.com/parth1-web</span> — descriptions match the actual repositories. Filter by stack focus.
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10" role="tablist" aria-label="Filter projects">
          {filters.map((f) => {
            const count = f === "All" ? projects.length : projects.filter((p) => p.category.toLowerCase().includes(f.toLowerCase())).length;
            const isActive = active === f;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(f)}
                className={`min-h-[44px] px-4 sm:px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? "text-white border-transparent shadow-lg shadow-blue-600/30"
                    : "text-text-secondary border-border bg-white/5 hover:text-text-primary hover:border-blue-400/40"
                }`}
                style={isActive ? { background: "linear-gradient(135deg,#2563EB,#0EA5E9)" } : undefined}
              >
                {f} · {count}
              </button>
            );
          })}
        </div>

        <motion.div
          key={active}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8"
          role="list"
          aria-label="Projects"
          initial={getInitial({ opacity: 0, y: 16 })}
          animate={getAnimate({ opacity: 1, y: 0 })}
          transition={{ duration: 0.45 }}
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10 sm:mt-12"
          initial={getInitial({ opacity: 0, y: 20 })}
          animate={getAnimate({ opacity: 1, y: 0 })}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/parth1-web?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Repositories
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
