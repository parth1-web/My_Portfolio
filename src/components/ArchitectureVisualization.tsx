import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useAnimation } from "../hooks/useAnimation";
import { pulseTransition } from "../styles/transitions";

const nodes = [
  { id: "client", label: "Client", x: 50, y: 50, color: "#3B82F6" },
  { id: "api", label: "API Gateway", x: 50, y: 200, color: "#8B5CF6" },
  { id: "auth", label: "Auth", x: 150, y: 200, color: "#F59E0B" },
  { id: "app", label: "Application", x: 50, y: 350, color: "#10B981" },
  { id: "domain", label: "Domain", x: 50, y: 500, color: "#EC4899" },
  { id: "infra", label: "Infrastructure", x: 50, y: 650, color: "#6366F1" },
  { id: "db", label: "Database", x: 50, y: 800, color: "#14B8A6" },
  { id: "test", label: "Testing", x: 250, y: 350, color: "#EF4444" },
  { id: "docker", label: "Docker", x: 250, y: 500, color: "#06B6D4" },
  { id: "cicd", label: "CI/CD", x: 250, y: 650, color: "#F97316" },
  { id: "payment", label: "Payment Gateway", x: 150, y: 800, color: "#84CC16" },
];

const connections = [
  { from: "client", to: "api" },
  { from: "api", to: "auth" },
  { from: "api", to: "app" },
  { from: "app", to: "domain" },
  { from: "domain", to: "infra" },
  { from: "infra", to: "db" },
  { from: "app", to: "test" },
  { from: "infra", to: "docker" },
  { from: "docker", to: "cicd" },
  { from: "app", to: "payment" },
];

export function ArchitectureVisualization() {
  const { getInitial, getAnimate } = useAnimation();
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 300, height: 900 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width || 300, height: rect.height || 900 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return (
      <div className="aspect-square max-w-md mx-auto" aria-hidden="true">
        <div className="w-full h-full bg-background-secondary rounded-xl flex items-center justify-center">
          <span className="text-text-muted">Loading architecture...</span>
        </div>
      </div>
    );
  }

  const nodePositions = nodes.map(node => ({
    ...node,
    x: (node.x / 300) * dimensions.width,
    y: (node.y / 900) * dimensions.height,
  }));

  const connectionPaths = connections.map((conn, index) => {
    const fromNode = nodePositions.find(n => n.id === conn.from);
    const toNode = nodePositions.find(n => n.id === conn.to);
    if (!fromNode || !toNode) return null;

    const pathData = `M${fromNode.x} ${fromNode.y + 30} L${fromNode.x} ${(fromNode.y + toNode.y) / 2} L${toNode.x} ${(fromNode.y + toNode.y) / 2} L${toNode.x} ${toNode.y - 30}`;

    return (
      <motion.path
        key={conn.from + conn.to}
        d={pathData}
        stroke="rgba(59, 130, 246, 0.3)"
        strokeWidth={2}
        fill="none"
        markerEnd="url(#arrowhead)"
        style={{
          strokeDasharray: 100,
          strokeDashoffset: 100,
        }}
        initial={getInitial({ strokeDashoffset: 100 })}
        animate={getAnimate({ strokeDashoffset: 0 })}
        transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeInOut" }}
      />
    );
  });

  const nodeElements = nodePositions.map((node, index) => (
    <motion.g
      key={node.id}
      initial={getInitial({ opacity: 0, scale: 0.5 })}
      animate={getAnimate({ opacity: 1, scale: 1 })}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.08, type: "spring", stiffness: 100 }}
    >
      <motion.circle
        cx={node.x}
        cy={node.y}
        r={30}
        fill={node.color}
        opacity={0.15}
        stroke={node.color}
        strokeWidth={2}
        animate={getAnimate({ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6], transition: pulseTransition })}
        style={{ filter: "drop-shadow(0 0 8px currentColor)" }}
      />
      <motion.circle
        cx={node.x}
        cy={node.y}
        r={20}
        fill={node.color}
        opacity={0.2}
        stroke={node.color}
        strokeWidth={1}
      />
      <text
        x={node.x}
        y={node.y + 4}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#F4F4F5"
        fontSize="11"
        fontWeight={600}
        fontFamily="Inter, Manrope, system-ui, sans-serif"
      >
        {node.label}
      </text>
    </motion.g>
  ));

  return (
    <div className="relative max-w-md mx-auto" role="img" aria-label="Backend system architecture diagram showing client, API, authentication, application, domain, infrastructure, database, testing, Docker, CI/CD, and payment gateway layers">
      <svg
        ref={svgRef}
        className="w-full h-auto"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
            fill="rgba(59, 130, 246, 0.6)"
          >
            <polygon points="0 0, 10 3.5, 0 7" />
          </marker>
        </defs>

        {connectionPaths}
        {nodeElements}
      </svg>
    </div>
  );
}