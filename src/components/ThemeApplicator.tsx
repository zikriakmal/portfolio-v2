"use client";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setTheme } from "@/store/slices/uiSlice";

export function ThemeApplicator() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((s) => s.ui.theme);

  // On mount: restore saved theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | "system" | null;
    if (saved) dispatch(setTheme(saved));
  }, []);

  // Apply dark class whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    const applyDark = (dark: boolean) => {
      root.classList.toggle("dark", dark);
    };

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      applyDark(mq.matches);
      const handler = (e: MediaQueryListEvent) => applyDark(e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } else {
      applyDark(theme === "dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return null;
}
