"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setActiveSection, toggleNav, closeNav, setTheme } from "@/store/slices/uiSlice";

const navItems = [
  { label: "Home", section: "hero" },
  { label: "About", section: "about" },
  { label: "Projects", section: "projects" },
  { label: "Skills", section: "skills" },
  { label: "Contact", section: "contact" },
];

const themeOptions: { value: "dark" | "light" | "system"; label: string; icon: string }[] = [
  { value: "dark",   label: "Dark",   icon: "🌙" },
  { value: "light",  label: "Light",  icon: "☀️" },
  { value: "system", label: "System", icon: "💻" },
];

function ThemeSelect() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((s) => s.ui.theme);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = themeOptions.find((o) => o.value === theme) ?? themeOptions[0];

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
          text-gray-500 dark:text-white/50 hover:text-gray-800 dark:hover:text-white/80
          hover:bg-gray-100 dark:hover:bg-white/8
          ${open ? "bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white" : ""}`}
        aria-label="Select theme"
      >
        <span>{current.icon}</span>
        <span className="hidden lg:inline">{current.label}</span>
        {/* Chevron */}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute right-0 top-[calc(100%+8px)] w-36 rounded-2xl overflow-hidden
          border border-gray-200 dark:border-white/10
          bg-white/95 dark:bg-[#0d0d12]/95 backdrop-blur-2xl
          shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)]
          transition-all duration-200 origin-top-right
          ${open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"}`}
      >
        <div className="p-1.5 space-y-0.5">
          {themeOptions.map((opt, i) => {
            const isActive = theme === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => {
                  dispatch(setTheme(opt.value));
                  setOpen(false);
                }}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium
                  transition-all duration-150
                  ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
                  ${isActive
                    ? "bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/8 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                <span className="text-base">{opt.icon}</span>
                <span>{opt.label}</span>
                {isActive && (
                  <svg className="ml-auto w-3.5 h-3.5 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MobileThemeSelect() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((s) => s.ui.theme);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = themeOptions.find((o) => o.value === theme) ?? themeOptions[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-sm transition-all duration-200
          text-gray-500 dark:text-white/50
          ${open ? "bg-gray-100 dark:bg-white/10" : ""}`}
      >
        <span>{current.icon}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute right-0 top-[calc(100%+8px)] w-36 rounded-2xl overflow-hidden
          border border-gray-200 dark:border-white/10
          bg-white/95 dark:bg-[#0d0d12]/95 backdrop-blur-2xl
          shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)]
          transition-all duration-200 origin-top-right
          ${open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"}`}
      >
        <div className="p-1.5 space-y-0.5">
          {themeOptions.map((opt, i) => {
            const isActive = theme === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => {
                  dispatch(setTheme(opt.value));
                  setOpen(false);
                }}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium
                  transition-all duration-150
                  ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
                  ${isActive
                    ? "bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/8 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                <span className="text-base">{opt.icon}</span>
                <span>{opt.label}</span>
                {isActive && (
                  <svg className="ml-auto w-3.5 h-3.5 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { activeSection, navOpen } = useAppSelector((s) => s.ui);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dispatch(setActiveSection(entry.target.id));
          }
        });
      },
      { threshold: 0.4 }
    );
    navItems.forEach(({ section }) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [dispatch]);

  const scrollTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    dispatch(closeNav());
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      {/* Desktop pill nav */}
      <div className="hidden md:flex items-center gap-1 px-3 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
        {navItems.map(({ label, section }) => (
          <button
            key={section}
            onClick={() => isHome ? scrollTo(section) : (window.location.href = `/#${section}`)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              isHome && activeSection === section
                ? "bg-gray-900/10 dark:bg-white/15 text-gray-900 dark:text-white shadow-inner"
                : "text-gray-500 dark:text-white/50 hover:text-gray-800 dark:hover:text-white/80 hover:bg-gray-100 dark:hover:bg-white/8"
            }`}
          >
            {label}
          </button>
        ))}
        <span className="w-px h-4 bg-gray-200 dark:bg-white/10 mx-1" />
        <Link
          href="/tennis"
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            pathname === "/tennis"
              ? "bg-green-500/20 text-green-600 dark:text-green-400 shadow-inner border border-green-500/30"
              : "text-gray-500 dark:text-white/50 hover:text-gray-800 dark:hover:text-white/80 hover:bg-gray-100 dark:hover:bg-white/8"
          }`}
        >
          🎾 Tennis
        </Link>
        <span className="w-px h-4 bg-gray-200 dark:bg-white/10 mx-1" />
        <ThemeSelect />
      </div>

      {/* Mobile bar */}
      <div className="md:hidden w-full flex justify-between items-center px-4 py-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
        <span className="text-gray-900 dark:text-white font-semibold tracking-wide">ZK</span>
        <div className="flex items-center gap-1">
          <MobileThemeSelect />
          <button
            onClick={() => dispatch(toggleNav())}
            className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors p-1 ml-1"
            aria-label="menu"
          >
            <div className="w-5 space-y-1">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${navOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${navOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${navOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {navOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 px-4">
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-black/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden">
            {navItems.map(({ label, section }) => (
              <button
                key={section}
                onClick={() => isHome ? scrollTo(section) : (window.location.href = `/#${section}`)}
                className={`w-full text-left px-6 py-3.5 text-sm font-medium border-b border-gray-100 dark:border-white/5 transition-colors ${
                  isHome && activeSection === section
                    ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10"
                    : "text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                }`}
              >
                {label}
              </button>
            ))}
            <Link
              href="/tennis"
              onClick={() => dispatch(closeNav())}
              className={`flex items-center gap-2 w-full px-6 py-3.5 text-sm font-medium transition-colors ${
                pathname === "/tennis"
                  ? "text-green-600 dark:text-green-400 bg-green-500/10"
                  : "text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
              }`}
            >
              🎾 Tennis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
