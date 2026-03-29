import GlassCard from "@/components/ui/GlassCard";
import GlassBadge from "@/components/ui/GlassBadge";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Companies", value: "4" },
  { label: "GitHub Repos", value: "55+" },
  { label: "Tennis", value: "🎾" },
];

const interests = [
  "Microservices",
  "Mobile Dev",
  "Open Source",
  "Web Performance",
  "Clean Code",
  "Tennis",
];

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4">
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-gray-400 dark:text-white/30 text-sm font-mono">02.</span>
          <span className="text-sm text-gray-500 dark:text-white/50 uppercase tracking-widest font-medium">
            About Me
          </span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Bio card */}
          <GlassCard className="p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-xl border border-white/10">
                🚀
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Story</h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-white/60 text-sm leading-relaxed">
              <p>
                I&apos;m a passionate software engineer with 5+ years of
                experience building web, mobile, and backend systems. My journey
                started writing Android apps for PLN (Indonesia&apos;s state
                electricity company) and has taken me across fintech, investment,
                and banking.
              </p>
              <p>
                I work across the full stack — React and Angular on the frontend,
                Go microservices and Java Vert.x on the backend, and React Native
                for mobile. Currently at Alliance Bank Malaysia as part of the
                Group Digital Transformation team.
              </p>
              <p>
                Outside of work I write on Medium, contribute to open source, and
                spend time on the tennis court.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {interests.map((i) => (
                <GlassBadge key={i} color="purple">
                  {i}
                </GlassBadge>
              ))}
            </div>
          </GlassCard>

          {/* Stats + info */}
          <div className="space-y-4">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value }) => (
                <GlassCard key={label} className="p-5 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {value}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-white/40 mt-1 font-medium uppercase tracking-wide">
                    {label}
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Currently card */}
            <GlassCard className="p-6 space-y-4">
              <h3 className="text-gray-900 dark:text-white font-semibold text-sm uppercase tracking-widest">
                Currently
              </h3>
              <div className="space-y-3">
                {[
                  { icon: "💳", text: "Senior SE at Alliance Bank Malaysia (GDT)" },
                  { icon: "📝", text: "Writing on Medium about Redux Saga & APIs" },
                  { icon: "🎾", text: "Playing tennis in my spare time" },
                  { icon: "🤝", text: "Open to collaborations" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-gray-600 dark:text-white/60">
                    <span className="text-base">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
