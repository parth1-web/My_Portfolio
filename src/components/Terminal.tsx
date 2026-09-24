import { motion } from "framer-motion";
import { useAnimation } from "../hooks/useAnimation";
import { cursorTransition } from "../styles/transitions";

interface TerminalLine {
  prompt?: string;
  command?: string;
  output?: string;
  delay?: number;
}

const terminalLines: TerminalLine[] = [
  { prompt: "roshan@developer:~$", command: "whoami", output: "Roshan Nepal", delay: 0 },
  { prompt: "roshan@developer:~$", command: "role", output: ".NET Backend Developer", delay: 200 },
  { prompt: "roshan@developer:~$", command: "stack", output: "C# ASP.NET Core PostgreSQL EF Core", delay: 400 },
  { prompt: "roshan@developer:~$", command: "architecture", output: "Clean Architecture", delay: 600 },
  { prompt: "roshan@developer:~$", command: "focus", output: "Backend Engineering", delay: 800 },
  { prompt: "roshan@developer:~$", command: "status", output: "Building • Testing • Learning", delay: 1000 },
];

export function Terminal() {
  const { getInitial, getAnimate } = useAnimation();

  return (
    <div className="terminal w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <div className="terminal-header">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true" />
          <div className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
        </div>
        <div className="flex-1 text-center text-xs text-text-muted font-mono">
          roshan@developer:~
        </div>
      </div>
      <div className="terminal-body" role="terminal" aria-label="Terminal demonstration">
        {terminalLines.map((line, index) => (
          <motion.div
            key={index}
            className="terminal-line"
            initial={getInitial({ opacity: 0, y: 10 })}
            animate={getAnimate({ opacity: 1, y: 0 })}
            transition={{ delay: (line.delay ?? 0) / 1000, duration: 0.4, ease: "easeOut" }}
          >
            <span className="terminal-prompt" aria-hidden="true">
              {line.prompt}
            </span>
            <span className="terminal-command" aria-hidden="true">
              {line.command}
            </span>
            {line.output && (
              <motion.span
                className="terminal-output ml-2"
                initial={getInitial({ opacity: 0 })}
                animate={getAnimate({ opacity: 1 })}
                transition={{ delay: ((line.delay ?? 0) + 300) / 1000, duration: 0.3 }}
              >
                {line.output}
              </motion.span>
            )}
          </motion.div>
        ))}
        <motion.div
          className="terminal-line"
          initial={getInitial({ opacity: 0 })}
          animate={getAnimate({ opacity: 1 })}
          transition={{ delay: 1.5, duration: 0.3 }}
        >
          <span className="terminal-prompt" aria-hidden="true">
            roshan@developer:~$
          </span>
          <motion.span
            className="terminal-command ml-2"
            animate={getAnimate({ opacity: [1, 0, 1], transition: cursorTransition })}
            aria-hidden="true"
          >
            █
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}