
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full transition-transform hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 transition-transform rotate-0 hover:rotate-90" />
      ) : (
        <Moon className="h-4 w-4 transition-transform rotate-0 hover:rotate-90" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
