import { Button } from "@/components/ui/button";
import { useThemeToggle } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { toggleTheme, isDark } = useThemeToggle();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      className="h-9 w-9 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
    >
      {isDark ? (
        <i className="ri-moon-line text-xl text-slate-300"></i>
      ) : (
        <i className="ri-sun-line text-xl text-yellow-500"></i>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
