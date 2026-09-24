# Roshan Nepal — .NET Backend Developer Portfolio

A premium, modern, responsive personal developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom SVG icons
- **Deployment**: GitHub Pages / Vercel

## ✨ Features

- **Dark-first theme** with custom color system
- **Terminal-inspired Hero** with animated command output
- **Interactive Architecture Diagram** with animated nodes and connections
- **Project Cards** with expandable architecture flow
- **Development Journey Timeline** with animated progress
- **Skills Section** organized by domain
- **Learning Section** with floating animations
- **Full Responsiveness** (375px - 1440px)
- **Accessibility** (WCAG 2.1 AA)
- **Reduced Motion** support
- **SEO Optimized**

## 📦 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Terminal.tsx
│   ├── About.tsx
│   ├── TechnicalPhilosophy.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Architecture.tsx
│   ├── ArchitectureVisualization.tsx
│   ├── Journey.tsx
│   ├── Learning.tsx
│   ├── GithubSection.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SocialIcons.tsx
├── config/
│   └── portfolio.ts
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   ├── journey.ts
│   ├── learning.ts
│   └── philosophy.ts
├── hooks/
│   ├── useAnimation.ts
│   ├── useInView.ts
│   └── useReducedMotion.ts
├── styles/
│   ├── animations.ts
│   └── transitions.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

Edit `src/config/portfolio.ts` to update personal information:

```typescript
export const portfolio = {
  name: "Roshan Nepal",
  username: "parth1-web",
  role: ".NET Backend Developer",
  location: "Nepal",
  github: "https://github.com/parth1-web",
  linkedin: "", // Add your LinkedIn URL
  email: "",    // Add your email
  resume: "",   // Add your resume URL
  tagline: "Building secure, maintainable and production-style backend systems.",
};
```

## 📄 Featured Projects

1. **ECommerceSolution** - Production-style e-commerce backend API with Clean Architecture
2. **ECommerceMVC** - ASP.NET Core MVC client consuming the REST API
3. **JobPortal** - Job portal with ASP.NET Core, PostgreSQL, Clean Architecture
4. **Cafe Inventory Management** - Inventory management platform for cafes/restaurants

## 📝 License

MIT License - feel free to use as inspiration for your own portfolio.

---

Built with curiosity, code, and a lot of coffee ☕