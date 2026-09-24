import { motion } from "framer-motion";
import { GithubIcon } from "./SocialIcons";
import { Star, Code, ExternalLink } from "lucide-react";
import { portfolio } from "../config/portfolio";
import { useAnimation } from "../hooks/useAnimation";
import { cardHoverTransition, buttonHoverTransition, buttonTapTransition } from "../styles/transitions";

const featuredRepos = [
  { name: "ECommerceSolution", description: "Production-style e-commerce backend API with Clean Architecture", stars: 0, forks: 0, language: "C#" },
  { name: "ECommerceMVC", description: "ASP.NET Core MVC client consuming ECommerceSolution REST API", stars: 0, forks: 0, language: "C#" },
  { name: "JobPortal", description: "Job portal with ASP.NET Core, PostgreSQL and Clean Architecture", stars: 0, forks: 0, language: "C#" },
  { name: "CafeInventory", description: "Inventory management platform for cafes and restaurants", stars: 0, forks: 0, language: "C#" },
];

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
          className="text-center max-w-3xl mx-auto mb-16"
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
            Experimenting with architecture, solving backend problems, and writing production-style code.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Featured repositories"
          initial={getInitial({ opacity: 0 })}
          animate={getAnimate({ opacity: 1 })}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {featuredRepos.map((repo, index) => (
            <motion.article
              key={repo.name}
              className="card group"
              role="listitem"
              whileHover={getWhileHover(cardHoverTransition)}
              initial={getInitial({ opacity: 0, y: 20 })}
              animate={getAnimate({ opacity: 1, y: 0 })}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Code className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono text-text-muted bg-background px-2 py-1 rounded">{repo.language}</span>
              </div>
              <h3 className="font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">{repo.name}</h3>
              <p className="text-sm text-text-secondary mb-4 line-clamp-2">{repo.description}</p>
              <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                <span className="flex items-center gap-1"><Star className="w-3 h-3" aria-hidden="true" />{repo.stars}</span>
                <span className="flex items-center gap-1"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H6zm2 2h8v2H8V5zm0 4h8v2H8v-2zm-2 4h10v2H6v-2zm4 4H6v-2h10v2z"/></svg>{repo.forks}</span>
              </div>
              <motion.a
                href={`${portfolio.github}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center group"
                whileHover={getWhileHover(buttonHoverTransition)}
                whileTap={getWhileHover(buttonTapTransition)}
                aria-label={`View ${repo.name} on GitHub`}
              >
                <GithubIcon className="w-4 h-4" aria-hidden="true" />
                <span>View Repository</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
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