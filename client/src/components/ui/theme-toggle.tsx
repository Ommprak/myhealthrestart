
import { Button } from "@/components/ui/button";
import { useThemeToggle } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { toggleTheme, isDark } = useThemeToggle();

  return (
    <Button 
      variant="outline" 
      size="default" 
      onClick={toggleTheme}
      className="transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <i className="ri-moon-line mr-2 text-slate-300" aria-hidden="true"></i>
      ) : (
        <i className="ri-sun-line mr-2 text-yellow-500" aria-hidden="true"></i>
      )}
      Toggle theme
    </Button>
  );
}
