import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis & Dev — Zikri",
  description: "Zikri's love for tennis and Roger Federer, beyond the code.",
};

const stats = [
  { label: "Federer Grand Slams", value: "20" },
  { label: "Weeks at World No.1", value: "310" },
  { label: "Career Win Rate", value: "82%" },
  { label: "Years on Tour", value: "24" },
];

const qualities = [
  {
    title: "Precision",
    icon: "🎯",
    tennis: "Federer's one-handed backhand — effortless, surgical accuracy.",
    dev: "Clean, readable code that does exactly one thing perfectly.",
  },
  {
    title: "Elegance",
    icon: "✨",
    tennis: "Fluid movement and footwork that makes every shot look easy.",
    dev: "UI components that feel natural and interfaces that just work.",
  },
  {
    title: "Consistency",
    icon: "📈",
    tennis: "310 weeks at world No.1 across two decades.",
    dev: "Maintainable systems that stay reliable under pressure.",
  },
  {
    title: "Adaptability",
    icon: "⚡",
    tennis: "Won on every surface — clay, grass, hard court.",
    dev: "Comfortable across the full stack — React, Next.js, APIs, DevOps.",
  },
];

export default function TennisPage() {
  return (
    <main className="relative min-h-screen bg-[#060608] text-white overflow-x-hidden">
      {/* Dot grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-green-600/15 blur-[120px]" />
        <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] rounded-full bg-yellow-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-600/10 blur-[100px]" />
      </div>

      {/* Sticky nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          <Link
            href="/"
            className="px-4 py-1.5 rounded-full text-sm font-medium text-white/50 hover:text-white/80 hover:bg-white/8 transition-all duration-200"
          >
            ← Home
          </Link>
          <span className="w-px h-4 bg-white/10" />
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/15 text-white shadow-inner">
            🎾 Tennis & Dev
          </span>
        </div>
      </nav>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-28 pb-24 space-y-20">

        {/* Hero section */}
        <section className="text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium">
            Beyond the code
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">Developer.</span>{" "}
            <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              Tennis Player.
            </span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            When I&apos;m not writing code, I&apos;m on the court — chasing the
            same elegance in tennis that I aim for in software.
          </p>
        </section>

        {/* Roger Federer card */}
        <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col md:flex-row">
            {/* Image side */}
            <div className="relative md:w-72 h-72 md:h-auto shrink-0 overflow-hidden">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/1/11/Roger_Federer_2015_%28cropped%29.jpg"
                alt="Roger Federer at the 2015 Mutua Madrid Open"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 288px"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 md:hidden">
                <span className="text-xs text-white/50">Photo: CC BY-SA 2.0 · Tatiana / Wikimedia</span>
              </div>
            </div>

            {/* Content side */}
            <div className="flex-1 p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
                    My Idol
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white">Roger Federer</h2>
                <p className="text-white/40 text-sm mt-1">
                  Swiss professional tennis player · Born 8 Aug 1981
                </p>
              </div>

              <p className="text-white/65 leading-relaxed">
                Federer isn&apos;t just the greatest tennis player — he&apos;s a
                philosophy. His game is built on precision, adaptability, and
                making the difficult look effortless. That&apos;s exactly what I
                aspire to as a developer: write code that feels inevitable,
                obvious, and beautiful.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/8 bg-white/5 px-4 py-3"
                  >
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-xs text-white/40 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-white/30 hidden md:block">
                Photo: CC BY-SA 2.0 · Tatiana from Moscow / Wikimedia Commons
              </p>
            </div>
          </div>
        </section>

        {/* Tennis × Dev parallels */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Tennis taught me to code better
            </h2>
            <p className="text-white/40 text-sm">
              The qualities I admire in Federer&apos;s game map directly to great software.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {qualities.map(({ title, icon, tennis, dev }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4 hover:border-green-500/30 hover:bg-white/8 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-xs text-green-400">🎾</span>
                    <p className="text-white/55 text-sm leading-relaxed">{tennis}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-xs text-blue-400">💻</span>
                    <p className="text-white/55 text-sm leading-relaxed">{dev}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal tennis note */}
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-green-500/10 to-cyan-500/5 backdrop-blur-xl p-8 md:p-12 text-center space-y-4">
          <span className="text-4xl">🎾</span>
          <h2 className="text-2xl font-bold text-white">On the court</h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            I play recreational tennis whenever I can — working on my serve,
            studying Federer&apos;s footwork on YouTube, and trying to channel
            that one-handed backhand. The court is where I decompress, reset,
            and come back to the keyboard with fresh eyes.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {["Baseline rallies", "One-handed backhand", "Net play", "Serve & volley"].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full border border-green-500/25 bg-green-500/10 text-green-400 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
