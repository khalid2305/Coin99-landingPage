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
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 z-50">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full transition-colors ${
          theme === "light"
            ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
            : "text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700"
        }`}
        aria-label="Light theme"
      >
        <Sun size={20} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full transition-colors ${
          theme === "dark"
            ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
            : "text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700"
        }`}
        aria-label="Dark theme"
      >
        <Moon size={20} />
      </button>
    </div>
  );
}
