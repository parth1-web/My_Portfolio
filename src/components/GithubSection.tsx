import { motion } from "framer-motion";
import { GithubIcon } from "./SocialIcons";
import { Star, Code, ExternalLink } from "lucide-react";
import { portfolio } from "../config/portfolio";
import { projects } from "../data/projects";
import { useAnimation } from "../hooks/useAnimation";
import { cardHoverTransition, buttonHoverTransition, buttonTapTransition } from "../styles/transitions";

export function GithubSection() {
  const { getInitial, getAnimate, getWhileHover } = useAnimation();

  return (
    <section
      id="github"
      className="section"
      aria-labelledby="github-heading"
    >
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          initial={getInitial({ opacity: 0, y: 20 })}
          animate={getAnimate({ opacity: 1, y: 0 })}
          transition={{ duration: 0.6 }}
        >
          <motion.span className="badge">Explore My Code</motion.span>
          <motion.h2
            id="github-heading"
            className="section-title mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.1 }}
          >
            Most of my learning happens by building real applications.
          </motion.h2>
          <motion.p
            className="section-subtitle mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.2 }}
          >
            Experimenting with architecture, solving backend problems, and writing production-style .NET code.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          role="list"
          aria-label="Featured repositories"
          initial={getInitial({ opacity: 0 })}
          animate={getAnimate({ opacity: 1 })}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((repo, index) => (
            <motion.article
              key={repo.id}
              className="card group"
              role="listitem"
              whileHover={getWhileHover(cardHoverTransition)}
              initial={getInitial({ opacity: 0, y: 20 })}
              animate={getAnimate({ opacity: 1, y: 0 })}
              transition={{ delay: index * 0.06 }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/15 border border-blue-300/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/25 transition-colors">
                  <Code className="w-5 h-5 text-sky-300" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono text-text-muted bg-white/5 border border-border px-2 py-1 rounded">{repo.language ?? "C#"}</span>
              </div>
              <h3 className="font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors break-words">{repo.title}</h3>
              <p className="text-sm text-text-secondary mb-4 line-clamp-3">{repo.description}</p>
              <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-300" aria-hidden="true" />{repo.stars ?? 1}</span>
                <span className="font-mono">{repo.category}</span>
              </div>
              <motion.a
                href={repo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center group min-h-[44px]"
                whileHover={getWhileHover(buttonHoverTransition)}
                whileTap={getWhileHover(buttonTapTransition)}
                aria-label={`View ${repo.title} on GitHub`}
              >
                <GithubIcon className="w-4 h-4" aria-hidden="true" />
                <span>View Repository</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10 sm:mt-12"
          initial={getInitial({ opacity: 0, y: 20 })}
          animate={getAnimate({ opacity: 1, y: 0 })}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 group"
            whileHover={getWhileHover(buttonHoverTransition)}
            whileTap={getWhileHover(buttonTapTransition)}
          >
            <GithubIcon className="w-5 h-5" aria-hidden="true" />
            View All Repositories on GitHub
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
