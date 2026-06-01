"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  // Define as a hoisted function so it can be called safely in useEffect
  function applyTheme(t: "light" | "dark") {
    const root = document.documentElement;
    const meta = document.querySelector('meta[name="color-scheme"]');
    
    if (t === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      if (meta) meta.setAttribute("content", "dark");
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
      if (meta) meta.setAttribute("content", "light");
    }
  }

  useEffect(() => {
    // Determine initial theme on mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      // Use setTimeout to avoid synchronous setState inside useEffect body
      setTimeout(() => {
        setTheme(savedTheme);
        applyTheme(savedTheme);
      }, 0);
    } else {
      // Default to dark or check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = prefersDark ? "dark" : "light";
      setTimeout(() => {
        setTheme(initial);
        applyTheme(initial);
      }, 0);
    }
    
    setTimeout(() => {
      setMounted(true);
    }, 0);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center transition-all duration-300 text-text-primary hover:text-blue-500 hover:scale-105"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
    </button>
  );
}
