import { motion } from "framer-motion";
import { MapPin, Briefcase, Database, Code, Mail, ExternalLink, BadgeCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { ProfileImage } from "./ProfileImage";
import { portfolio } from "../config/portfolio";
import { useAnimation } from "../hooks/useAnimation";
import { cardHoverTransition } from "../styles/transitions";

const profileItems = [
  { label: "Focus", value: "Backend Engineering", icon: Code },
  { label: "Stack", value: "C# / ASP.NET Core", icon: Code },
  { label: "Database", value: "PostgreSQL / SQL", icon: Database },
  { label: "Architecture", value: "Clean Architecture", icon: Briefcase },
] as const;

const socialLinks = [
  { href: portfolio.github, label: "GitHub", icon: GithubIcon },
  ...(portfolio.linkedin ? [{ href: portfolio.linkedin, label: "LinkedIn", icon: LinkedinIcon }] : []),
  ...(portfolio.email ? [{ href: `mailto:${portfolio.email}`, label: "Email", icon: Mail }] : []),
] as const;

export function About() {
  const { getInitial, getAnimate, getWhileHover } = useAnimation();

  return (
    <section
      id="about"
      className="section bg-background-secondary"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={getInitial({ opacity: 0, y: 20 })}
          animate={getAnimate({ opacity: 1, y: 0 })}
          transition={{ duration: 0.6 }}
        >
          <motion.span className="badge">About Me</motion.span>
          <motion.h2
            id="about-heading"
            className="section-title mt-4"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: 0.1 }}
          >
            Building backend systems with purpose.
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            className="space-y-6"
            initial={getInitial({ opacity: 0, x: -30 })}
            animate={getAnimate({ opacity: 1, x: 0 })}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="card space-y-4"
              whileHover={getWhileHover(cardHoverTransition)}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 text-center sm:text-left">
                <ProfileImage size="sm" showStatus={false} />
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-text-primary flex items-center justify-center sm:justify-start gap-2">
                    {portfolio.name}
                    <BadgeCheck className="w-5 h-5 text-sky-400" aria-label="Verified developer" />
                  </h3>
                  <p className="text-text-secondary">{portfolio.role}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                {profileItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-3 p-3 bg-background rounded-lg"
                    initial={getInitial({ opacity: 0, y: 10 })}
                    animate={getAnimate({ opacity: 1, y: 0 })}
                    transition={{ delay: index * 0.05 }}
                  >
                    <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-text-muted uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-medium text-text-primary">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:text-text-primary bg-background rounded-lg transition-colors group"
                    whileHover={getWhileHover({ scale: 1.02 })}
                    initial={getInitial({ opacity: 0, y: 10 })}
                    animate={getAnimate({ opacity: 1, y: 0 })}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    aria-label={link.label}
                  >
                    <link.icon className="w-4 h-4" aria-hidden="true" />
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div className="space-y-4">
              <motion.p
                className="text-text-secondary leading-relaxed"
                initial={getInitial({ opacity: 0, y: 10 })}
                animate={getAnimate({ opacity: 1, y: 0 })}
                transition={{ delay: 0.2 }}
              >
                I'm a Computer Science student and aspiring .NET Backend Developer focused on building secure, maintainable and production-style web applications.
              </motion.p>
              <motion.p
                className="text-text-secondary leading-relaxed"
                initial={getInitial({ opacity: 0, y: 10 })}
                animate={getAnimate({ opacity: 1, y: 0 })}
                transition={{ delay: 0.3 }}
              >
                My primary focus is the ASP.NET Core ecosystem, with hands-on experience building REST APIs, implementing authentication and authorization, working with relational databases, integrating payment systems, writing automated tests, and applying Clean Architecture principles.
              </motion.p>
              <motion.p
                className="text-text-secondary leading-relaxed"
                initial={getInitial({ opacity: 0, y: 10 })}
                animate={getAnimate({ opacity: 1, y: 0 })}
                transition={{ delay: 0.4 }}
              >
                I enjoy turning real-world problems into reliable software while continuously improving my understanding of backend engineering, system design, databases, DevOps and distributed systems.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={getInitial({ opacity: 0, x: 30 })}
            animate={getAnimate({ opacity: 1, x: 0 })}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div className="card relative overflow-hidden text-center">
              <div className="absolute inset-0 bg-grid-blue opacity-60" aria-hidden="true" />
              <div className="relative py-4">
                <ProfileImage size="xl" className="mx-auto" />
                <p className="mt-8 text-sm text-text-secondary max-w-xs mx-auto">
                  Backend developer from {portfolio.location} building production-style .NET systems.
                </p>
              </div>
            </motion.div>
            <motion.div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
                Location
              </h3>
              <p className="text-text-secondary">{portfolio.location}</p>
            </motion.div>

            <motion.div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-accent" aria-hidden="true" />
                GitHub Profile
              </h3>
              <p className="text-text-secondary mb-2">{portfolio.headline}</p>
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-sm font-medium transition-colors group"
              >
                View Profile
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div className="card">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-accent" aria-hidden="true" />
                Professional Identity
              </h3>
              <p className="text-text-secondary">{portfolio.role}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}