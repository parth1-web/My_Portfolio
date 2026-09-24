export interface PhilosophyItem {
  title: string;
  description: string;
  points: string[];
}

export const philosophy: PhilosophyItem[] = [
  {
    title: "Architecture",
    description: "Clean Architecture",
    points: [
      "Separation of concerns",
      "Dependency inversion",
      "Repository and service abstractions",
    ],
  },
  {
    title: "API Development",
    description: "RESTful APIs",
    points: [
      "DTOs",
      "Validation",
      "HTTP status codes",
      "Swagger / OpenAPI",
    ],
  },
  {
    title: "Security",
    description: "JWT Authentication",
    points: [
      "Role-based Authorization",
      "Password hashing",
      "Input validation",
      "Protected endpoints",
    ],
  },
  {
    title: "Quality",
    description: "Unit Testing",
    points: [
      "Integration Testing",
      "Automated testing",
      "Refactoring",
      "Maintainable code",
    ],
  },
  {
    title: "Deployment",
    description: "Docker",
    points: [
      "GitHub Actions",
      "CI/CD",
      "Environment configuration",
      "Cloud deployment",
    ],
  },
];