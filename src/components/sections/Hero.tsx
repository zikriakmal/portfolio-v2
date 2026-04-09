"use client";

import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import GlassBadge from "@/components/ui/GlassBadge";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 md:pt-0 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-600/15 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center space-y-6">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="relative w-24 h-24 rounded-full border-2 border-white/20 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            <Image
              src="/avatar.jpg"
              alt="Zikri Akmal Santoso"
              fill
              className="rounded-full object-cover"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-black/60" />
          </div>
        </div>

        {/* Status pill */}
        <div className="flex justify-center">
          <GlassBadge color="green">Software Engineer</GlassBadge>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gray-900 dark:text-white">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zikri
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-white/50 font-light">
            Senior Software Engineer
          </p>
        </div>

        {/* Description card */}
        <GlassCard className="p-6 mx-auto max-w-lg">
          <p className="text-gray-600 dark:text-white/70 text-base leading-relaxed">
            5+ years building web, mobile, and backend systems with{" "}
            <span className="text-cyan-400 font-medium">React</span>,{" "}
            <span className="text-blue-400 font-medium">Go</span>, and{" "}
            <span className="text-purple-400 font-medium">Angular</span> —
            from PLN field apps to Alliance Bank&apos;s digital platform.
          </p>
        </GlassCard>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-2">
          {["React", "Go", "TypeScript", "Angular", "React Native"].map((t) => (
            <GlassBadge key={t} color="blue">
              {t}
            </GlassBadge>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={() => scrollTo("projects")}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] hover:-translate-y-0.5 transition-all duration-200"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3 rounded-full border border-white/20 bg-white/5 text-white/80 font-semibold text-sm backdrop-blur-sm hover:bg-white/10 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pt-8 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
