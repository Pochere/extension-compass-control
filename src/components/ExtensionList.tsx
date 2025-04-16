
import { useState } from "react";
import { Extension } from "@/data/extensions";
import { ExtensionCard } from "./ExtensionCard";
import { ExtensionsHeader } from "./ExtensionsHeader";
import { ExtensionFilters } from "./ExtensionFilters";
import { ExtensionDetailSidebar } from "./ExtensionDetailSidebar";
import { useToast } from "@/components/ui/use-toast";

interface ExtensionListProps {
  initialExtensions: Extension[];
}

type FilterType = 'all' | 'active' | 'inactive';

export function ExtensionList({ initialExtensions }: ExtensionListProps) {
  const [extensions, setExtensions] = useState<Extension[]>(initialExtensions);
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedExtension, setSelectedExtension] = useState<Extension | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { toast } = useToast();

  const counts = {
    all: extensions.length,
    active: extensions.filter((ext) => ext.active).length,
    inactive: extensions.filter((ext) => !ext.active).length,
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === 'all') return true;
    if (filter === 'active') return ext.active;
    if (filter === 'inactive') return !ext.active;
    return true;
  });

  const handleToggle = (id: string, active: boolean) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, active } : ext
      )
    );
    toast({
      title: active ? "Extension activated" : "Extension deactivated",
      description: `${extensions.find(ext => ext.id === id)?.name} has been ${active ? "activated" : "deactivated"}.`,
    });
  };

  const handleRemove = (id: string) => {
    const extName = extensions.find(ext => ext.id === id)?.name;
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
    toast({
      title: "Extension removed",
      description: `${extName} has been removed from your extensions list.`,
    });
  };

  const handleRefresh = () => {
    // In a real app, this would fetch the latest extensions from an API
    setExtensions(initialExtensions);
    toast({
      title: "Extensions refreshed",
      description: "Your extensions list has been refreshed.",
    });
  };

  const handleOpenDetail = (extension: Extension) => {
    setSelectedExtension(extension);
    setSidebarOpen(true);
  };

  return (
    <div className="container max-w-4xl mx-auto p-4 md:p-6 animate-fade-in">
      <ExtensionsHeader onRefresh={handleRefresh} />
      <h2 className="text-xl font-semibold mb-4">Extensions List</h2>
      <ExtensionFilters filter={filter} onFilterChange={setFilter} counts={counts} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredExtensions.map((extension, index) => (
          <ExtensionCard
            key={extension.id}
            extension={extension}
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
        ))}
        {filteredExtensions.length === 0 && (
          <div className="col-span-full p-8 text-center text-muted-foreground border border-dashed rounded-lg">
            No extensions found for the current filter.
          </div>
        )}
      </div>
      
      <ExtensionDetailSidebar
        extension={selectedExtension}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onToggle={handleToggle}
      />
    </div>
  );
}
