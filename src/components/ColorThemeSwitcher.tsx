
import { useColorTheme } from "@/hooks/use-color-theme";
import { ColorPalette } from "@/components/ui/palette";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

export function ColorThemeSwitcher() {
  const { color, setColor } = useColorTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Toggle color theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4">
        <div className="space-y-2">
          <h4 className="font-medium">Color Theme</h4>
          <ColorPalette 
            selectedColor={color} 
            onSelectColor={(selectedColor) => 
              setColor(selectedColor as "slate" | "red" | "orange" | "green" | "blue" | "purple")
            } 
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
