import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { Mail, ArrowRight, Send } from "lucide-react";
import { portfolio } from "../config/portfolio";
import { useAnimation } from "../hooks/useAnimation";
import { floatingTransition, cardHoverTransition, buttonHoverTransition, buttonTapTransition } from "../styles/transitions";

const contactMethods = [
  {
    label: "GitHub",
    href: portfolio.github,
    icon: GithubIcon,
    description: "View my repositories and contributions",
  },
  ...(portfolio.linkedin
    ? [
        {
          label: "LinkedIn",
          href: portfolio.linkedin,
          icon: LinkedinIcon,
          description: "Connect professionally",
        },
      ]
    : []),
  ...(portfolio.email
    ? [
        {
          label: "Email",
          href: `mailto:${portfolio.email}`,
          icon: Mail,
          description: "Send me a direct message",
        },
      ]
    : []),
] as const;

export function Contact() {
  const { getInitial, getAnimate, getWhileHover } = useAnimation();

  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={getInitial({ opacity: 0, x: -30 })}
            animate={getAnimate({ opacity: 1, x: 0 })}
            transition={{ duration: 0.6 }}
          >
            <motion.span className="badge">Let's Build Something</motion.span>
            <motion.h2
              id="contact-heading"
              className="section-title"
              initial={getInitial({ opacity: 0, y: 10 })}
              animate={getAnimate({ opacity: 1, y: 0 })}
              transition={{ delay: 0.1 }}
            >
              Have a project idea, collaboration opportunity, or simply want to talk about backend development?
            </motion.h2>
            <motion.p
              className="text-lg text-text-secondary leading-relaxed"
              initial={getInitial({ opacity: 0, y: 10 })}
              animate={getAnimate({ opacity: 1, y: 0 })}
              transition={{ delay: 0.2 }}
            >
              Feel free to reach out. I'm always open to discussing new projects, backend architecture, or just connecting with fellow developers.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={getInitial({ opacity: 0, y: 10 })}
              animate={getAnimate({ opacity: 1, y: 0 })}
              transition={{ delay: 0.3 }}
            >
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 group"
                  whileHover={getWhileHover(cardHoverTransition)}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <method.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">{method.label}</h3>
                    <p className="text-sm text-text-secondary">{method.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={getInitial({ opacity: 0, x: 30 })}
            animate={getAnimate({ opacity: 1, x: 0 })}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div className="card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" aria-hidden="true" />
              <div className="relative p-8 text-center">
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center"
                  animate={getAnimate({ y: [0, -10, 0], x: [0, 5, 0], transition: floatingTransition })}
                >
                  <Send className="w-10 h-10 text-accent" aria-hidden="true" />
                </motion.div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Ready to collaborate?</h3>
                <p className="text-text-secondary mb-6 max-w-sm mx-auto">
                  Whether it's a backend project, API design, or system architecture discussion — I'd love to hear from you.
                </p>
                <motion.a
                  href={portfolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 group"
                  whileHover={getWhileHover(buttonHoverTransition)}
                  whileTap={getWhileHover(buttonTapTransition)}
                >
                  <GithubIcon className="w-5 h-5" aria-hidden="true" />
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}