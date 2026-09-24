import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { portfolio } from "../config/portfolio";
import { useAnimation } from "../hooks/useAnimation";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { getInitial, getAnimate, getExit } = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.a
            href="#home"
            className="flex items-center gap-2 text-xl font-bold text-text-primary hover:text-accent transition-colors"
            aria-label="Roshan Nepal - Home"
            whileHover={getInitial({ scale: 1.02 })}
            whileTap={getInitial({ scale: 0.98 })}
          >
            <Code2 className="w-6 h-6 text-accent" aria-hidden="true" />
            <span className="hidden sm:block">{portfolio.name}</span>
            <span className="block sm:hidden">RN</span>
          </motion.a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-text-secondary hover:text-text-primary font-medium transition-colors duration-200 relative"
                whileHover={getInitial({ y: -2 })}
                initial={getInitial({ opacity: 0, y: -10 })}
                animate={getAnimate({ opacity: 1, y: 0 })}
                transition={{ delay: index * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
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
          </div>

          <button
            className="lg:hidden icon-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              className="lg:hidden overflow-hidden bg-background border-t border-border"
              initial={getInitial({ opacity: 0, height: 0 })}
              animate={getAnimate({ opacity: 1, height: "auto" })}
              exit={getExit({ opacity: 0, height: 0 })}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              role="navigation"
              aria-label="Mobile menu"
            >
              <div className="py-6 space-y-4 px-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-text-secondary hover:text-text-primary font-medium rounded-lg hover:bg-background-secondary transition-colors"
                    onClick={closeMobileMenu}
                    initial={getInitial({ opacity: 0, x: -20 })}
                    animate={getAnimate({ opacity: 1, x: 0 })}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <a
                    href={portfolio.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  {portfolio.linkedin && (
                    <a
                      href={portfolio.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}