export default function Footer() {
  return (
    <footer className="relative py-10 px-4 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 dark:text-white/30 text-sm">
        <span>© {new Date().getFullYear()} Zikri Akmal Santoso. All rights reserved.</span>
        <span className="flex items-center gap-2">
          Built with
          <span className="text-blue-400/70">Next.js</span>·
          <span className="text-purple-400/70">Redux Toolkit</span>·
          <span className="text-cyan-400/70">Tailwind</span>
        </span>
      </div>
    </footer>
  );
}
