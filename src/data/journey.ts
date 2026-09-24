export interface JourneyItem {
  number: string;
  title: string;
  description: string;
  details?: string[];
}

export const journey: JourneyItem[] = [
  {
    number: "01",
    title: "Computer Science",
    description: "Started developing programming and software engineering fundamentals.",
  },
  {
    number: "02",
    title: ".NET Development",
    description: "Focused on core .NET technologies and backend development.",
    details: ["C#", "ASP.NET Core", "REST APIs", "Entity Framework Core", "SQL"],
  },
  {
    number: "03",
    title: "Real-World Applications",
    description: "Started building larger applications instead of only tutorial CRUD projects.",
    details: [
      "Gaun Ko Achar / ECommerceSolution",
      "ECommerceMVC",
      "JobPortal",
      "Cafe Inventory Management System",
    ],
  },
  {
    number: "04",
    title: "Production-Oriented Engineering",
    description: "Expanded into production-grade engineering practices.",
    details: [
      "Authentication",
      "Authorization",
      "Payment Integration",
      "Automated Testing",
      "Docker",
      "CI/CD",
      "Cloud Deployment",
    ],
  },
  {
    number: "05",
    title: "Distributed Systems",
    description: "Currently exploring advanced distributed systems concepts.",
    details: [
      "Microservices",
      "DDD",
      "CQRS",
      "Redis",
      "RabbitMQ / Kafka",
      "gRPC",
      "OpenTelemetry",
      "Kubernetes",
    ],
  },
];