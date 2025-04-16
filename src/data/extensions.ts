
export interface Extension {
  id: string;
  name: string;
  description: string;
  icon: string;
  active: boolean;
  color: string;
}

export const extensionsData: Extension[] = [
  {
    id: "devlens",
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    icon: "search",
    active: true,
    color: "bg-emerald-100"
  },
  {
    id: "styleispy",
    name: "StyleIspy",
    description: "Instantly analyze and copy CSS from any page element.",
    icon: "paintbrush",
    active: true,
    color: "bg-cyan-100"
  },
  {
    id: "speedboost",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to maximize page loading.",
    icon: "zap",
    active: false,
    color: "bg-pink-100"
  },
  {
    id: "jsonwizard",
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in browser.",
    icon: "braces",
    active: true,
    color: "bg-pink-100"
  },
  {
    id: "tabmaster-pro",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups by function.",
    icon: "layout-grid",
    active: true,
    color: "bg-violet-100"
  },
  {
    id: "viewportbuddy",
    name: "ViewportBuddy",
    description: "Simulates various screen resolutions during mobile testing.",
    icon: "smartphone",
    active: false,
    color: "bg-blue-100"
  },
  {
    id: "markup-notes",
    name: "Markup Notes",
    description: "Allows annotation and notes directly on webpage for collaboration.",
    icon: "pencil",
    active: true,
    color: "bg-cyan-100"
  },
  {
    id: "gridguides",
    name: "GridGuides",
    description: "Overlay customizable grids and alignment guides for UI development.",
    icon: "layout",
    active: false,
    color: "bg-violet-100"
  },
  {
    id: "palette-picker",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    icon: "palette",
    active: true,
    color: "bg-teal-100"
  },
  {
    id: "linkchecker",
    name: "LinkChecker",
    description: "Automatically highlights broken links on any page.",
    icon: "link",
    active: true,
    color: "bg-orange-100"
  },
  {
    id: "dom-snapshot",
    name: "DOM Snapshot",
    description: "Capture and export DOM structure as a guide.",
    icon: "copy",
    active: false,
    color: "bg-cyan-100"
  },
  {
    id: "consoleplus",
    name: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    icon: "terminal",
    active: true,
    color: "bg-green-100"
  }
];
