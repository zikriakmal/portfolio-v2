"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setActiveFilter,
  openProject,
  closeProject,
  Project,
} from "@/store/slices/portfolioSlice";
import GlassCard from "@/components/ui/GlassCard";
import GlassBadge from "@/components/ui/GlassBadge";

const filters = ["All", "Frontend", "Backend", "Fullstack"];

const techColors: Record<string, "blue" | "cyan" | "purple" | "green" | "pink" | "default"> = {
  "React 18": "cyan",
  TypeScript: "blue",
  Vite: "purple",
  CSS3: "pink",
  "Next.js": "default",
  "Redux Toolkit": "green",
};

function ProjectModal({ project }: { project: Project }) {
  const dispatch = useAppDispatch();
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={() => dispatch(closeProject())}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-lg rounded-3xl border border-gray-200 dark:border-white/20 bg-white/95 dark:bg-[#1a1a2e] backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.6)] p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => dispatch(closeProject())}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 dark:bg-white/15 border border-gray-200 dark:border-white/20 flex items-center justify-center text-gray-500 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/25 transition-all"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl border border-white/10`}
          >
            {project.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span
                className={`w-2 h-2 rounded-full ${project.status === "completed" ? "bg-green-400" : "bg-yellow-400"}`}
              />
              <span className="text-xs text-gray-400 dark:text-white/75 capitalize">
                {project.status}
              </span>
            </div>
          </div>
        </div>

        {/* Long description */}
        <p className="text-gray-600 dark:text-white/90 text-sm leading-relaxed">
          {project.longDescription}
        </p>

        {/* Tech stack */}
        <div>
          <p className="text-xs text-gray-400 dark:text-white/80 uppercase tracking-widest mb-3 font-medium">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <GlassBadge key={t} color={techColors[t] ?? "default"}>
                {t}
              </GlassBadge>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-white/25 bg-gray-50 dark:bg-white/10 text-gray-600 dark:text-white text-sm font-medium text-center hover:bg-gray-100 dark:hover:bg-white/20 hover:text-gray-900 transition-all"
            >
              GitHub →
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold text-center shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all"
            >
              Live Demo ↗
            </a>
          )}
          {!project.githubUrl && !project.liveUrl && (
            <div className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-white/20 bg-gray-50 dark:bg-white/10 text-gray-400 dark:text-white/70 text-sm text-center">
              Links coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const dispatch = useAppDispatch();
  const { projects, activeFilter, isModalOpen, selectedProject } =
    useAppSelector((s) => s.portfolio);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 px-4">
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-gray-400 dark:text-white/30 text-sm font-mono">03.</span>
          <span className="text-sm text-gray-500 dark:text-white/50 uppercase tracking-widest font-medium">
            Projects
          </span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 flex-wrap mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => dispatch(setActiveFilter(f))}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-gray-900/10 dark:bg-white/15 border-gray-300 dark:border-white/25 text-gray-900 dark:text-white shadow-inner"
                  : "bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/50 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/15"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        {filtered.length === 0 ? (
          <GlassCard className="p-16 text-center">
            <p className="text-gray-400 dark:text-white/30 text-sm">No projects in this category yet.</p>
          </GlassCard>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => dispatch(openProject(project))}
              />
            ))}
          </div>
        )}
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} />
      )}
    </section>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <GlassCard hover className="p-6 space-y-4 flex flex-col" onClick={onOpen}>
      {/* Icon + status */}
      <div className="flex items-start justify-between">
        <div
          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-xl border border-white/10`}
        >
          {project.icon}
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className={`w-2 h-2 rounded-full ${project.status === "completed" ? "bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" : "bg-yellow-400"}`}
          />
          <span className="text-xs text-gray-400 dark:text-white/35 capitalize">
            {project.status}
          </span>
        </div>
      </div>

      {/* Title & desc */}
      <div className="flex-1 space-y-2">
        <h3 className="text-gray-900 dark:text-white font-semibold">{project.title}</h3>
        <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 3).map((t) => (
          <GlassBadge key={t} color={techColors[t] ?? "default"}>
            {t}
          </GlassBadge>
        ))}
        {project.techStack.length > 3 && (
          <GlassBadge>+{project.techStack.length - 3}</GlassBadge>
        )}
      </div>

      {/* View more */}
      <div className="pt-1">
        <span className="text-xs text-gray-400 dark:text-white/50 group-hover:text-gray-600 dark:group-hover:text-white/80 transition-colors">
          Click to view details →
        </span>
      </div>
    </GlassCard>
  );
}
