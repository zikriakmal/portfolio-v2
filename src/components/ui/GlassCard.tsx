"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  onClick,
}: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-2xl border backdrop-blur-xl
        border-gray-200/80 bg-white/70
        shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]
        dark:border-white/10 dark:bg-white/5
        dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]
        ${hover ? "cursor-pointer transition-all duration-300 hover:bg-white/90 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
