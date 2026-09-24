import { motion } from "framer-motion";
import { Code2, Heart, Coffee, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { portfolio } from "../config/portfolio";
import { useAnimation } from "../hooks/useAnimation";

export function Footer() {
  const { getInitial, getAnimate } = useAnimation();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-background-secondary border-t border-border"
      role="contentinfo"
    >
      <div className="container py-12 lg:py-16">
        <motion.div
          className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center"
          initial={getInitial({ opacity: 0 })}
          animate={getAnimate({ opacity: 1 })}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center lg:text-left"
            initial={getInitial({ opacity: 0, y: 20 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
              whileHover={getInitial({ scale: 1.02 })}
            >
              <Code2 className="w-7 h-7 text-accent" aria-hidden="true" />
              <span className="text-xl font-bold text-text-primary">{portfolio.name}</span>
            </motion.div>
            <p className="text-text-secondary mb-4">{portfolio.role}</p>
            <p className="text-sm text-text-muted font-mono">
              C# · ASP.NET Core · PostgreSQL · Clean Architecture
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={getInitial({ opacity: 0, y: 20 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.2 }}
            role="navigation"
            aria-label="Social links"
          >
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" aria-hidden="true" />
            </a>
            {portfolio.linkedin && (
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" aria-hidden="true" />
              </a>
            )}
            {portfolio.email && (
              <a
                href={`mailto:${portfolio.email}`}
                className="icon-btn"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            )}
          </motion.div>

          <motion.div
            className="text-center lg:text-right space-y-2"
            initial={getInitial({ opacity: 0, y: 20 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.3 }}
          >
            <motion.p className="text-sm text-text-muted">
              © {currentYear} {portfolio.name}
            </motion.p>
            <motion.p className="text-sm text-text-muted flex items-center justify-center lg:justify-end gap-2">
              <Heart className="w-3.5 h-3.5 text-red-500" aria-hidden="true" />
              <span>Built with curiosity, code, and a lot of coffee.</span>
              <Coffee className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}