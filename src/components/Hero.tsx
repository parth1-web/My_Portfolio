import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, MapPin, Star } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { Terminal } from "./Terminal";
import { ProfileImage } from "./ProfileImage";
import { portfolio } from "../config/portfolio";
import { useAnimation } from "../hooks/useAnimation";
import { floatingTransition, bounceTransition } from "../styles/transitions";

const techElements = [
  "C#",
  "ASP.NET Core",
  "API",
  "PostgreSQL",
  "Docker",
  "JWT",
  "EF Core",
];

export function Hero() {
  const { getInitial, getAnimate } = useAnimation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {techElements.map((tech, index) => (
          <motion.div
            key={tech}
            className="absolute text-accent/20 text-sm font-mono font-medium"
            style={{
              top: `${10 + (index * 12)}%`,
              left: `${5 + (index * 13)}%`,
            }}
            initial={getInitial({ opacity: 0, scale: 0.8 })}
            animate={getAnimate({ y: [0, -10, 0], x: [0, 5, 0], transition: floatingTransition })}
            transition={{ delay: index * 0.3 }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={getInitial({ opacity: 0 })}
            animate={getAnimate({ opacity: 1 })}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20"
              initial={getInitial({ opacity: 0, y: 20 })}
              animate={getAnimate({ opacity: 1, y: 0 })}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-text-primary"
              initial={getInitial({ opacity: 0, y: 20 })}
              animate={getAnimate({ opacity: 1, y: 0 })}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hi, I'm <span className="text-accent">{portfolio.name}</span>.
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl font-medium text-accent tracking-tight"
              initial={getInitial({ opacity: 0, y: 20 })}
              animate={getAnimate({ opacity: 1, y: 0 })}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {portfolio.role}
            </motion.p>

            <motion.p
              className="text-lg lg:text-xl text-text-secondary max-w-xl leading-relaxed"
              initial={getInitial({ opacity: 0, y: 20 })}
              animate={getAnimate({ opacity: 1, y: 0 })}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {portfolio.tagline}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={getInitial({ opacity: 0, y: 20 })}
              animate={getAnimate({ opacity: 1, y: 0 })}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="btn-primary group"
                whileHover={getInitial({ scale: 1.02 })}
                whileTap={getInitial({ scale: 0.98 })}
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
                whileHover={getInitial({ scale: 1.02 })}
                whileTap={getInitial({ scale: 0.98 })}
              >
                <GithubIcon className="w-5 h-5" />
                GitHub
              </motion.a>
              {portfolio.email && (
                <motion.a
                  href={`mailto:${portfolio.email}`}
                  className="btn-ghost group"
                  whileHover={getInitial({ scale: 1.02 })}
                  whileTap={getInitial({ scale: 0.98 })}
                >
                  Contact Me
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative space-y-6"
            initial={getInitial({ opacity: 0, x: 30 })}
            animate={getAnimate({ opacity: 1, x: 0 })}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-6">
              <ProfileImage size="lg" />
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 w-full max-w-md">
                <div className="card !p-4 text-center">
                  <p className="text-2xl font-bold gradient-text">6+</p>
                  <p className="text-xs text-text-secondary mt-1">Public repos</p>
                </div>
                <div className="card !p-4 text-center">
                  <p className="text-2xl font-bold gradient-text flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 text-amber-300" aria-hidden="true" />5
                  </p>
                  <p className="text-xs text-text-secondary mt-1">Stars earned</p>
                </div>
                <div className="card !p-4 text-center">
                  <p className="text-2xl font-bold gradient-text">C#</p>
                  <p className="text-xs text-text-secondary mt-1">Primary stack</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary justify-center sm:justify-start">
              <MapPin className="w-4 h-4 text-accent-cyan" aria-hidden="true" />
              <span>{portfolio.location} · Working worldwide via remote</span>
            </div>
            <Terminal />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        initial={getInitial({ opacity: 0 })}
        animate={getAnimate({ opacity: 1, y: [0, 10, 0] })}
        transition={bounceTransition}
      >
        <svg
          className="w-6 h-6 text-text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}