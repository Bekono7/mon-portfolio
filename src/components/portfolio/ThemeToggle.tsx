import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { m } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <m.button
      type="button"
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 dark:bg-white/10 text-muted-foreground dark:text-white shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-foreground",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      disabled={!mounted}
    >
      <span className="sr-only">Thème : {resolvedTheme ?? theme}</span>
      {mounted ? (
        isDark ? (
          <Sun className="h-[18px] w-[18px]" strokeWidth={1.75} />
        ) : (
          <Moon className="h-[18px] w-[18px]" strokeWidth={1.75} />
        )
      ) : (
        <span className="h-[18px] w-[18px]" />
      )}
    </m.button>
  );
}