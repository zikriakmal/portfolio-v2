"use client";

import { useAppSelector } from "@/lib/hooks";
import GlassCard from "@/components/ui/GlassCard";

const categoryMeta: Record<
  string,
  { label: string; icon: string; color: string }
> = {
  frontend: { label: "Frontend", icon: "🎨", color: "from-blue-500 to-cyan-500" },
  backend: { label: "Backend", icon: "⚙️", color: "from-green-500 to-teal-500" },
  tools: { label: "Tools", icon: "🛠", color: "from-orange-500 to-amber-500" },
  design: { label: "Design", icon: "✏️", color: "from-pink-500 to-rose-500" },
};

export default function Skills() {
  const { skills } = useAppSelector((s) => s.portfolio);

  const grouped = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <section id="skills" className="relative py-20 px-4">
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-gray-400 dark:text-white/30 text-sm font-mono">04.</span>
          <span className="text-sm text-gray-500 dark:text-white/50 uppercase tracking-widest font-medium">
            Skills
          </span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {Object.entries(grouped).map(([category, catSkills]) => {
            const meta = categoryMeta[category];
            return (
              <GlassCard key={category} className="p-6 space-y-5">
                {/* Category header */}
                <div className="flex items-center gap-3">
                  <span className="text-xl">{meta.icon}</span>
                  <h3 className="text-gray-900 dark:text-white font-semibold">{meta.label}</h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {catSkills
                    .sort((a, b) => b.level - a.level)
                    .map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-700 dark:text-white/70 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-400 dark:text-white/35 font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-white/8 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${meta.color} shadow-sm`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Tech cloud */}
        <GlassCard className="mt-5 p-8">
          <p className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-widest font-medium mb-5 text-center">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "HTML5",
              "JavaScript",
              "REST APIs",
              "ESLint",
              "Prettier",
              "npm",
              "VS Code",
              "Vercel",
              "GitHub",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-white/50 text-sm hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/15 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
