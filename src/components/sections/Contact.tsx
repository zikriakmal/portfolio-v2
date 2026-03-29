"use client";

import { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";

const socials = [
  { icon: "🐙", label: "GitHub", handle: "@zikriakmal", href: "https://github.com/zikriakmal" },
  { icon: "💼", label: "LinkedIn", handle: "in/zikri-akmal-santoso", href: "https://id.linkedin.com/in/zikri-akmal-santoso-b61455126" },
  { icon: "🐦", label: "Twitter", handle: "@zikriakmale", href: "https://twitter.com/zikriakmale" },
  { icon: "📧", label: "Email", handle: "zikriakmale@gmail.com", href: "mailto:zikriakmale@gmail.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-20 px-4">
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 left-0 w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-gray-400 dark:text-white/30 text-sm font-mono">05.</span>
          <span className="text-sm text-gray-500 dark:text-white/50 uppercase tracking-widest font-medium">
            Contact
          </span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Left: heading + socials */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                Let&apos;s build
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  something great
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed">
                Have a project in mind or just want to chat? I&apos;m always
                open to interesting conversations.
              </p>
            </div>

            <div className="space-y-3">
              {socials.map(({ icon, label, handle, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  <GlassCard
                    hover
                    className="flex items-center gap-3 px-4 py-3 mb-2"
                  >
                    <span className="text-lg">{icon}</span>
                    <div>
                      <div className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wide font-medium">
                        {label}
                      </div>
                      <div className="text-sm text-gray-700 dark:text-white/70">{handle}</div>
                    </div>
                  </GlassCard>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3">
            <GlassCard className="p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center text-3xl">
                    ✅
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg">Message sent!</h3>
                  <p className="text-gray-500 dark:text-white/50 text-sm">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                    className="mt-2 px-6 py-2 rounded-full border border-gray-200 dark:border-white/15 text-gray-500 dark:text-white/60 text-sm hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wide font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 text-sm focus:outline-none focus:border-blue-400/50 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wide font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 text-sm focus:outline-none focus:border-blue-400/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wide font-medium">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 text-sm focus:outline-none focus:border-blue-400/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Send Message ✦
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
