
import { useState } from "react";
import { Extension } from "@/data/extensions";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

interface ExtensionDetailSidebarProps {
  extension: Extension | null;
  open: boolean;
  onClose: () => void;
  onToggle: (id: string, active: boolean) => void;
}

export function ExtensionDetailSidebar({ extension, open, onClose, onToggle }: ExtensionDetailSidebarProps) {
  if (!extension) return null;
  
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="text-destructive">
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
            <DialogTitle>Extensions</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="space-y-4 mt-2">
          <div className="flex justify-between items-center py-2 border-b">
            <h3>Filter</h3>
            <div className="flex gap-2">
              <button className="px-4 py-1 bg-primary rounded-full text-sm text-primary-foreground">
                Active
              </button>
              <button className="px-4 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                Inactive
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b">
            <div>
              <h3 className="font-medium">{extension.name}</h3>
              <p className="text-sm text-muted-foreground">{extension.description}</p>
            </div>
            <Switch
              checked={extension.active}
              onCheckedChange={(checked) => onToggle(extension.id, checked)}
            />
          </div>
          
          {/* Sample Other Extensions */}
          <div className="space-y-3 py-2">
            <div className="flex justify-between items-center py-2">
              <div>
                <h3 className="font-medium">StyleIspy</h3>
                <p className="text-sm text-muted-foreground">Instantly analyze and copy CSS from any page element.</p>
              </div>
              <Switch checked />
            </div>
            
            <div className="flex justify-between items-center py-2">
              <div>
                <h3 className="font-medium">Palette Picker</h3>
                <p className="text-sm text-muted-foreground">Instantly extracts color palettes from any webpage.</p>
              </div>
              <Switch checked />
            </div>
            
            <div className="flex justify-between items-center py-2">
              <div>
                <h3 className="font-medium">ViewportBuddy</h3>
                <p className="text-sm text-muted-foreground">Simulates various screen resolutions during mobile testing.</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
