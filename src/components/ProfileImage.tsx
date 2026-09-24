import { useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "../config/portfolio";
import { useAnimation } from "../hooks/useAnimation";

interface ProfileImageProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showStatus?: boolean;
}

const sizeMap: Record<NonNullable<ProfileImageProps["size"]>, string> = {
  sm: "w-14 h-14",
  md: "w-24 h-24",
  lg: "w-40 h-40 sm:w-52 sm:h-52",
  xl: "w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80",
};

export function ProfileImage({ size = "lg", className = "", showStatus = true }: ProfileImageProps) {
  const { getInitial, getAnimate } = useAnimation();
  const [src, setSrc] = useState(portfolio.profileImage);
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial={getInitial({ opacity: 0, scale: 0.92 })}
      animate={getAnimate({ opacity: 1, scale: 1 })}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/40 via-cyan-400/20 to-indigo-500/30 blur-2xl" aria-hidden="true" />
      <div className={`relative ${sizeMap[size]} rounded-[1.75rem] overflow-hidden border border-blue-300/30 shadow-[0_24px_70px_-20px_rgba(59,130,246,0.7)] bg-[#0A1730]`}>
        {!failed ? (
          <img
            src={src}
            alt={`${portfolio.name} — ${portfolio.role}`}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            onError={() => {
              if (src !== portfolio.avatarFallback) {
                setSrc(portfolio.avatarFallback);
              } else {
                setFailed(true);
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white text-4xl sm:text-5xl font-bold" aria-label={portfolio.name}>
            RN
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050D1F]/55 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
      </div>
      {showStatus && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-blue-300/25 shadow-lg whitespace-nowrap">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-[11px] sm:text-xs font-semibold text-sky-100">Open to opportunities</span>
        </div>
      )}
    </motion.div>
  );
}
