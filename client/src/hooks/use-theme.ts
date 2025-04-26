import { useEffect, useState } from "react";
import { useTheme } from "@/providers/theme-provider";

export function useThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return { 
      theme: "light", 
      toggleTheme: () => {}, 
      isDark: false, 
      isLight: true 
    };
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = theme === "dark";
  const isLight = theme === "light" || (theme === "system" && !isDark);

  return { theme, toggleTheme, isDark, isLight };
}
