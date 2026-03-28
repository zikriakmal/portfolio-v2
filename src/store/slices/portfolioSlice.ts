import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  status: "completed" | "in-progress" | "planned";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  gradient: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "design";
}

interface PortfolioState {
  projects: Project[];
  skills: Skill[];
  activeFilter: string;
  selectedProject: Project | null;
  isModalOpen: boolean;
}

const projects: Project[] = [
  {
    id: "virtual-credit-card",
    title: "Virtual Credit Card Platform",
    description:
      "A virtual credit card solution for Alliance Bank Malaysia's partner ecosystem and the Alliance Online Personal main app.",
    longDescription:
      "Built and maintained new features for Alliance Bank Malaysia's virtual credit card platform as part of the Group Digital Transformation (GDT) initiative. The platform serves both banking partners and end-users through the Alliance Online Personal app, requiring close collaboration across multiple teams. Stack includes ReactJS for the web portal, Angular for the admin interface, Cordova for the mobile hybrid layer, and Vert.x (Java) for the high-performance backend services.",
    techStack: ["ReactJS", "Angular", "Cordova", "Vert.x", "Java"],
    category: "Fullstack",
    status: "in-progress",
    featured: true,
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    icon: "💳",
  },
  {
    id: "express-ts-prisma-boilerplate",
    title: "Express + TypeScript + Prisma Boilerplate",
    description:
      "A production-ready starter template for building REST APIs with Express.js, TypeScript, and Prisma ORM.",
    longDescription:
      "A public open-source boilerplate designed to eliminate repetitive setup when starting new Node.js backend projects. Includes TypeScript configuration, Prisma ORM integration with PostgreSQL, structured routing, middleware setup, and environment management. Intended as a solid foundation that follows best practices out of the box.",
    techStack: ["TypeScript", "Express.js", "Prisma", "PostgreSQL", "Node.js"],
    category: "Backend",
    status: "completed",
    featured: true,
    githubUrl: "https://github.com/zikriakmal/express-ts-prisma-boilerplate",
    gradient: "from-green-500/20 via-teal-500/20 to-cyan-500/20",
    icon: "🛠",
  },
  {
    id: "reactjs-vite-base-boilerplate",
    title: "React + Vite Base Boilerplate",
    description:
      "A minimal, fast React starter template powered by Vite for modern frontend development.",
    longDescription:
      "An open-source React development template built on Vite for blazing-fast HMR and optimized production builds. Includes TypeScript support, sensible ESLint and Prettier configuration, and a clean project structure to get started quickly without the bloat of larger frameworks.",
    techStack: ["React", "Vite", "TypeScript", "ESLint", "Prettier"],
    category: "Frontend",
    status: "completed",
    featured: false,
    githubUrl: "https://github.com/zikriakmal/reactjs-vite-base-boilerplate",
    gradient: "from-cyan-500/20 via-blue-500/20 to-violet-500/20",
    icon: "⚡",
  },
  {
    id: "sifat-log-sheet",
    title: "SIFAT & LOG SHEET Android Apps",
    description:
      "Native Android applications developed for PLN (Indonesia's state electricity company) to digitize field operations.",
    longDescription:
      "Developed two Android applications for PLN — SIFAT and LOG SHEET — to replace paper-based processes used by field engineering divisions. SIFAT handles asset and facility tracking while LOG SHEET manages shift activity logs. Both apps were built in Kotlin targeting Android, integrated with PLN's internal APIs, and deployed across multiple divisions.",
    techStack: ["Kotlin", "Android", "REST API", "Firebase"],
    category: "Mobile",
    status: "completed",
    featured: false,
    gradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
    icon: "📱",
  },
  {
    id: "microservices-migration",
    title: "Monolith to Go Microservices Migration",
    description:
      "Migrated a legacy monolithic backend to a Go-based microservices architecture, improving API response times by 20%.",
    longDescription:
      "Led the migration of a monolithic backend system at PT. Global Investa Capital to a microservices architecture built with Go and the Gin framework. The project involved decomposing the monolith into independently deployable services, setting up inter-service communication, containerizing with Docker, and deploying behind Nginx. The result was a 20% improvement in API response speed and significantly better scalability.",
    techStack: ["Go", "Gin", "Docker", "Nginx", "PostgreSQL"],
    category: "Backend",
    status: "completed",
    featured: true,
    gradient: "from-violet-500/20 via-purple-500/20 to-pink-500/20",
    icon: "🏗",
  },
];

const skills: Skill[] = [
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Angular", level: 80, category: "frontend" },
  { name: "React Native", level: 82, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  { name: "Go (Gin)", level: 80, category: "backend" },
  { name: "Node.js", level: 78, category: "backend" },
  { name: "Java (Vert.x)", level: 70, category: "backend" },
  { name: "PHP (Laravel)", level: 72, category: "backend" },
  { name: "Kotlin (Android)", level: 75, category: "backend" },
  { name: "Docker", level: 78, category: "tools" },
  { name: "Git", level: 88, category: "tools" },
  { name: "PostgreSQL", level: 75, category: "tools" },
  { name: "Firebase", level: 72, category: "tools" },
  { name: "Nginx", level: 70, category: "tools" },
];

const initialState: PortfolioState = {
  projects,
  skills,
  activeFilter: "All",
  selectedProject: null,
  isModalOpen: false,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setActiveFilter(state, action: PayloadAction<string>) {
      state.activeFilter = action.payload;
    },
    openProject(state, action: PayloadAction<Project>) {
      state.selectedProject = action.payload;
      state.isModalOpen = true;
    },
    closeProject(state) {
      state.isModalOpen = false;
      state.selectedProject = null;
    },
  },
});

export const { setActiveFilter, openProject, closeProject } =
  portfolioSlice.actions;
export default portfolioSlice.reducer;
