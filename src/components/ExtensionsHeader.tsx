
import { Button } from "@/components/ui/button";
import { Sun, Moon, RefreshCw } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

interface ExtensionsHeaderProps {
  onRefresh: () => void;
}

export function ExtensionsHeader({ onRefresh }: ExtensionsHeaderProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-2">
        <div className="text-destructive h-6 w-6 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
            <line x1="6" y1="17" x2="18" y2="17" />
          </svg>
        </div>
        <h1 className="text-lg font-medium">Extensions</h1>
      </div>
      <div className="flex space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onRefresh}
          className="rounded-full"
          aria-label="Refresh extensions"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
