
import { useState } from "react";
import { Extension } from "@/data/extensions";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Trash2, 
  Search, 
  Paintbrush, 
  Zap, 
  Braces, 
  LayoutGrid, 
  Smartphone, 
  Pencil, 
  Layout, 
  Palette as PaletteIcon, 
  Link, 
  Copy, 
  Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExtensionCardProps {
  extension: Extension;
  onToggle: (id: string, active: boolean) => void;
  onRemove: (id: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  search: <Search size={20} />,
  paintbrush: <Paintbrush size={20} />,
  zap: <Zap size={20} />,
  braces: <Braces size={20} />,
  "layout-grid": <LayoutGrid size={20} />,
  smartphone: <Smartphone size={20} />,
  pencil: <Pencil size={20} />,
  layout: <Layout size={20} />,
  palette: <PaletteIcon size={20} />,
  link: <Link size={20} />,
  copy: <Copy size={20} />,
  terminal: <Terminal size={20} />
};

export function ExtensionCard({ extension, onToggle, onRemove }: ExtensionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="rounded-lg bg-card p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary/50 card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
    >
      <div className="flex items-start mb-3">
        <div 
          className={cn(
            "flex items-center justify-center rounded-md p-2 mr-3 transition-colors",
            extension.color,
            extension.active ? "text-gray-800" : "text-gray-500"
          )}
        >
          {iconMap[extension.icon]}
        </div>
        <div className="flex-1">
          <h3 className={cn("font-medium", extension.active ? "text-foreground" : "text-muted-foreground")}>
            {extension.name}
          </h3>
          <p className={cn("text-xs", extension.active ? "text-muted-foreground" : "text-muted-foreground/70")}>
            {extension.description}
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-2">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => onRemove(extension.id)}
          className={cn(
            "hover:bg-destructive/10 hover:text-destructive focus-visible:ring-2 focus-visible:ring-destructive/20 transition-all duration-200",
            isHovered ? "opacity-100" : "opacity-80"
          )}
        >
          Remove
        </Button>
        <Switch 
          checked={extension.active} 
          onCheckedChange={(checked) => onToggle(extension.id, checked)}
          className="data-[state=checked]:bg-primary focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors"
        />
      </div>
    </div>
  );
}
