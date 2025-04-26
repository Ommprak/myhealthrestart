
import { Button } from "@/components/ui/button";
import { useThemeToggle } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { toggleTheme, isDark } = useThemeToggle();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <i className="ri-moon-line text-xl text-slate-300 transition-all duration-300 transform scale-100" aria-hidden="true"></i>
      ) : (
        <i className="ri-sun-line text-xl text-yellow-500 transition-all duration-300 transform scale-100" aria-hidden="true"></i>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
