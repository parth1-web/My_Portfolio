export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      "C#",
      "ASP.NET Core",
      "ASP.NET Core Web API",
      "REST APIs",
      "LINQ",
      "Dependency Injection",
      "Middleware",
      "Async/Await",
    ],
  },
  {
    name: "Architecture",
    skills: [
      "Clean Architecture",
      "Repository Pattern",
      "Service Layer",
      "SOLID",
      "Dependency Injection",
      "DTOs",
      "Separation of Concerns",
    ],
  },
  {
    name: "Security",
    skills: [
      "JWT Authentication",
      "Role-Based Authorization",
      "Password Hashing",
      "API Security",
      "Input Validation",
    ],
  },
  {
    name: "Database",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL",
      "Entity Framework Core",
      "Database Design",
      "Relationships",
      "Migrations",
    ],
  },
  {
    name: "Testing",
    skills: [
      "xUnit",
      "Unit Testing",
      "Integration Testing",
      "API Testing",
      "Automated Tests",
    ],
  },
  {
    name: "DevOps",
    skills: [
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Git",
      "GitHub",
      "Cloud Deployment",
    ],
  },
  {
    name: "Tools",
    skills: [
      "Swagger / OpenAPI",
      "Postman",
      "Git",
      "GitHub",
    ],
  },
];