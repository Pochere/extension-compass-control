
import { ThemeProvider } from "@/hooks/use-theme";
import { ColorThemeProvider } from "@/hooks/use-color-theme";
import { ExtensionList } from "@/components/ExtensionList";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { ColorThemeSwitcher } from "@/components/ColorThemeSwitcher";
import { extensionsData } from "@/data/extensions";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <ColorThemeProvider defaultColor="slate">
        <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
          <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-10">
            <ColorThemeSwitcher />
            <ThemeSwitcher />
          </div>
          <main>
            <ExtensionList initialExtensions={extensionsData} />
          </main>
          
          {/* Mobile responsiveness indicator */}
          <div className="fixed bottom-4 left-4 text-xs font-mono text-muted-foreground opacity-70 md:hidden">
            Mobile view
          </div>
          <div className="fixed bottom-4 left-4 text-xs font-mono text-muted-foreground opacity-70 hidden md:block lg:hidden">
            Tablet view
          </div>
          <div className="fixed bottom-4 left-4 text-xs font-mono text-muted-foreground opacity-70 hidden lg:block">
            Desktop view
          </div>
        </div>
      </ColorThemeProvider>
    </ThemeProvider>
  );
};

export default Index;
