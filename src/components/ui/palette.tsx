
import * as React from "react"
import { cn } from "@/lib/utils"

const colorOptions = [
  { name: "slate", value: "bg-slate-900 text-slate-50", hoverValue: "hover:bg-slate-900 hover:text-slate-50", focusValue: "focus:ring-slate-500"},
  { name: "red", value: "bg-red-600 text-red-50", hoverValue: "hover:bg-red-600 hover:text-red-50", focusValue: "focus:ring-red-500" },
  { name: "orange", value: "bg-orange-500 text-orange-50", hoverValue: "hover:bg-orange-500 hover:text-orange-50", focusValue: "focus:ring-orange-500" },
  { name: "green", value: "bg-green-600 text-green-50", hoverValue: "hover:bg-green-600 hover:text-green-50", focusValue: "focus:ring-green-500" },
  { name: "blue", value: "bg-blue-600 text-blue-50", hoverValue: "hover:bg-blue-600 hover:text-blue-50", focusValue: "focus:ring-blue-500" },
  { name: "purple", value: "bg-purple-600 text-purple-50", hoverValue: "hover:bg-purple-600 hover:text-purple-50", focusValue: "focus:ring-purple-500" },
]

interface ColorPaletteProps extends React.HTMLAttributes<HTMLDivElement> {
  onSelectColor: (color: string) => void
  selectedColor?: string
}

export function ColorPalette({
  className,
  onSelectColor,
  selectedColor = "slate",
  ...props
}: ColorPaletteProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)} {...props}>
      {colorOptions.map((color) => (
        <button
          key={color.name}
          onClick={() => onSelectColor(color.name)}
          className={cn(
            "h-8 w-8 rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2",
            color.value,
            color.focusValue,
            selectedColor === color.name && "ring-2 ring-offset-2 scale-110",
          )}
          aria-label={`Select ${color.name} theme`}
        />
      ))}
    </div>
  )
}
