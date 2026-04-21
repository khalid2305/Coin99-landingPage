"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 bg-[#F4F6F8] dark:bg-zinc-900/90 backdrop-blur-md p-[6px] rounded-[18px] z-50">
      <button
        onClick={() => setTheme("light")}
        className={`w-[42px] h-[42px] flex items-center justify-center rounded-[12px] transition-all duration-200 ${
          theme === "light"
            ? "bg-white text-[#0F172A] shadow-[0_2px_4px_rgba(0,0,0,0.06)] dark:bg-zinc-800 dark:text-white"
            : "text-[#94A3B8] hover:text-[#475569] dark:text-zinc-500 dark:hover:text-zinc-300"
        }`}
        aria-label="Light theme"
      >
        <Sun size={22} strokeWidth={2.5} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`w-[42px] h-[42px] flex items-center justify-center rounded-[12px] transition-all duration-200 ${
          theme === "dark"
            ? "bg-white text-[#0F172A] shadow-[0_2px_4px_rgba(0,0,0,0.06)] dark:bg-zinc-800 dark:text-white"
            : "text-[#94A3B8] hover:text-[#475569] dark:text-zinc-500 dark:hover:text-zinc-300"
        }`}
        aria-label="Dark theme"
      >
        <Moon size={22} strokeWidth={2} />
      </button>
    </div>
  );
}
