
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FilterType = 'all' | 'active' | 'inactive';

interface ExtensionFiltersProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: {
    all: number;
    active: number;
    inactive: number;
  };
}

export function ExtensionFilters({ filter, onFilterChange, counts }: ExtensionFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <Button
        variant={filter === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onFilterChange('all')}
        className={cn(
          "rounded-full px-4 transition-all duration-200 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-primary/50",
          filter === 'all' ? "bg-primary text-primary-foreground" : ""
        )}
      >
        All
        <span className="ml-2 text-xs rounded-full px-1.5 py-0.5 bg-primary-foreground/20 text-primary-foreground">
          {counts.all}
        </span>
      </Button>
      <Button
        variant={filter === 'active' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onFilterChange('active')}
        className={cn(
          "rounded-full px-4 transition-all duration-200 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-primary/50",
          filter === 'active' ? "bg-primary text-primary-foreground" : ""
        )}
      >
        Active
        <span className="ml-2 text-xs rounded-full px-1.5 py-0.5 bg-primary-foreground/20 text-primary-foreground">
          {counts.active}
        </span>
      </Button>
      <Button
        variant={filter === 'inactive' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onFilterChange('inactive')}
        className={cn(
          "rounded-full px-4 transition-all duration-200 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-primary/50",
          filter === 'inactive' ? "bg-primary text-primary-foreground" : ""
        )}
      >
        Inactive
        <span className="ml-2 text-xs rounded-full px-1.5 py-0.5 bg-primary-foreground/20 text-primary-foreground">
          {counts.inactive}
        </span>
      </Button>
    </div>
  );
}
