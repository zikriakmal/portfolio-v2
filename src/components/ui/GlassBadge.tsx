"use client";

interface GlassBadgeProps {
  children: React.ReactNode;
  color?: "blue" | "cyan" | "purple" | "green" | "pink" | "default";
  className?: string;
}

const colorMap = {
  blue: "bg-blue-500/15 text-blue-600 dark:text-blue-300 border-blue-400/30",
  cyan: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border-cyan-400/30",
  purple: "bg-purple-500/15 text-purple-600 dark:text-purple-300 border-purple-400/30",
  green: "bg-green-500/15 text-green-600 dark:text-green-300 border-green-400/30",
  pink: "bg-pink-500/15 text-pink-600 dark:text-pink-300 border-pink-400/30",
  default: "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/70 border-gray-300/60 dark:border-white/20",
};

export default function GlassBadge({
  children,
  color = "default",
  className = "",
}: GlassBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  );
}
