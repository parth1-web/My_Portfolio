import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { ProfileImage } from "./ProfileImage";
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
  const [active, setActive] = useState("Home");
  const { getInitial, getAnimate, getExit } = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = navItems.find((item) => item.href === `#${entry.target.id}`);
            if (match) setActive(match.label);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.1 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050D1F]/90 backdrop-blur-xl border-b border-blue-300/15 shadow-[0_8px_32px_-12px_rgba(37,99,235,0.5)]"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-3">
          <motion.a
            href="#home"
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-text-primary hover:text-white transition-colors min-h-[44px]"
            aria-label="Roshan Nepal - Home"
            whileHover={getInitial({ scale: 1.02 })}
            whileTap={getInitial({ scale: 0.98 })}
          >
            <span className="w-9 h-9 rounded-xl flex items-center justify-center border border-blue-300/25 bg-blue-500/15">
              <Code2 className="w-5 h-5 text-sky-300" aria-hidden="true" />
            </span>
            <span className="hidden sm:block truncate">{portfolio.name}</span>
            <span className="block sm:hidden">RN</span>
          </motion.a>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = active === item.label;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative px-4 py-2.5 min-h-[44px] inline-flex items-center text-sm font-semibold rounded-full transition-colors duration-200 ${
                    isActive ? "text-white" : "text-text-secondary hover:text-text-primary"
                  }`}
                  whileHover={getInitial({ y: -2 })}
                  initial={getInitial({ opacity: 0, y: -10 })}
                  animate={getAnimate({ opacity: 1, y: 0 })}
                  transition={{ delay: index * 0.05 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-blue-300/30 bg-blue-500/15"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </motion.a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" aria-hidden="true" />
            </a>
            {portfolio.linkedin && (
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" aria-hidden="true" />
              </a>
            )}
            <a href="#contact" className="btn-primary !py-2.5 !px-5 !text-sm ml-1">
              Hire Me
            </a>
          </div>

          <button
            className="lg:hidden icon-btn min-w-[44px] min-h-[44px] flex items-center justify-center border border-border"
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
            <>
              <motion.div
                className="fixed inset-0 top-16 bg-[#020610]/70 backdrop-blur-sm lg:hidden"
                initial={getInitial({ opacity: 0 })}
                animate={getAnimate({ opacity: 1 })}
                exit={getExit({ opacity: 0 })}
                onClick={closeMobileMenu}
                aria-hidden="true"
              />
              <motion.div
                id="mobile-menu"
                className="lg:hidden absolute left-4 right-4 top-full mt-2 overflow-hidden rounded-2xl glass border border-blue-300/20 shadow-2xl"
                initial={getInitial({ opacity: 0, y: -12, scale: 0.98 })}
                animate={getAnimate({ opacity: 1, y: 0, scale: 1 })}
                exit={getExit({ opacity: 0, y: -12, scale: 0.98 })}
                transition={{ duration: 0.25, ease: "easeOut" }}
                role="navigation"
                aria-label="Mobile menu"
              >
                <div className="p-4 space-y-1.5">
                  <div className="flex items-center gap-3 px-2 py-3 border-b border-border mb-2">
                    <ProfileImage size="sm" showStatus={false} />
                    <div className="min-w-0">
                      <p className="font-bold text-text-primary truncate">{portfolio.name}</p>
                      <p className="text-xs text-text-secondary truncate">{portfolio.role}</p>
                    </div>
                  </div>
                  {navItems.map((item, index) => {
                    const isActive = active === item.label;
                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        className={`flex items-center justify-between px-4 py-3 min-h-[48px] font-semibold rounded-xl transition-colors ${
                          isActive
                            ? "text-white bg-blue-500/20 border border-blue-300/25"
                            : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                        }`}
                        onClick={closeMobileMenu}
                        initial={getInitial({ opacity: 0, x: -20 })}
                        animate={getAnimate({ opacity: 1, x: 0 })}
                        transition={{ delay: index * 0.04 }}
                      >
                        {item.label}
                        <span aria-hidden="true" className="text-text-muted">→</span>
                      </motion.a>
                    );
                  })}
                  <div className="flex items-center gap-2 pt-3 border-t border-border">
                    <a
                      href={portfolio.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn min-w-[48px] min-h-[48px] flex items-center justify-center flex-1 border border-border"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    {portfolio.linkedin && (
                      <a
                        href={portfolio.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-btn min-w-[48px] min-h-[48px] flex items-center justify-center flex-1 border border-border"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon className="w-5 h-5" />
                      </a>
                    )}
                    <a href="#contact" onClick={closeMobileMenu} className="btn-primary flex-1 !py-3">
                      Hire Me
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
