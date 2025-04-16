
import { createContext, useContext, useEffect, useState } from "react";

type ColorTheme = "slate" | "red" | "orange" | "green" | "blue" | "purple";

interface ColorThemeProviderProps {
  children: React.ReactNode;
  defaultColor?: ColorTheme;
}

interface ColorThemeProviderState {
  color: ColorTheme;
  setColor: (color: ColorTheme) => void;
}

const initialState: ColorThemeProviderState = {
  color: "slate",
  setColor: () => null,
};

const ColorThemeProviderContext = createContext<ColorThemeProviderState>(initialState);

export function ColorThemeProvider({
  children,
  defaultColor = "slate",
}: ColorThemeProviderProps) {
  const [color, setColor] = useState<ColorTheme>(defaultColor);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all color theme classes
    root.classList.remove("color-slate", "color-red", "color-orange", "color-green", "color-blue", "color-purple");
    
    // Add the selected color theme class
    root.classList.add(`color-${color}`);
    
    // Update CSS variables based on color theme
    const updateColorVariables = () => {
      let primary, primaryForeground;
      
      switch (color) {
        case "red":
          primary = "0 84% 60%"; // hsl(0, 84%, 60%)
          primaryForeground = "0 0% 98%";
          break;
        case "orange":
          primary = "24 95% 58%"; // hsl(24, 95%, 58%)
          primaryForeground = "0 0% 98%";
          break;
        case "green":
          primary = "142 71% 45%"; // hsl(142, 71%, 45%)
          primaryForeground = "0 0% 98%";
          break;
        case "blue":
          primary = "210 100% 50%"; // hsl(210, 100%, 50%)
          primaryForeground = "0 0% 98%";
          break;
        case "purple":
          primary = "270 76% 60%"; // hsl(270, 76%, 60%)
          primaryForeground = "0 0% 98%";
          break;
        case "slate":
        default:
          primary = "222.2 47.4% 11.2%"; // Slate (default)
          primaryForeground = "210 40% 98%";
          break;
      }
      
      document.documentElement.style.setProperty("--primary", primary);
      document.documentElement.style.setProperty("--primary-foreground", primaryForeground);
      
      // Also set destructive color for "red" theme to avoid clashes
      if (color === "red") {
        document.documentElement.style.setProperty("--destructive", "0 84% 40%");
      } else {
        document.documentElement.style.setProperty("--destructive", "0 84.2% 60.2%");
      }
    };
    
    updateColorVariables();
  }, [color]);

  return (
    <ColorThemeProviderContext.Provider value={{ color, setColor }}>
      {children}
    </ColorThemeProviderContext.Provider>
  );
}

export const useColorTheme = () => {
  const context = useContext(ColorThemeProviderContext);

  if (context === undefined)
    throw new Error("useColorTheme must be used within a ColorThemeProvider");

  return context;
};
