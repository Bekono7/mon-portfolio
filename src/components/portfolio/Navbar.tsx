import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AnimatePresence, m } from "framer-motion";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Parcours", href: "#parcours" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

const techBadges = [
  { name: "Django", color: "#092e20", primary: "#339933" },
  { name: "React", color: "#1e293b", primary: "#61dafb" },
  { name: "Flutter", color: "#02569B", primary: "#02569B" },
];

type TechTheme = "default" | "django" | "react" | "flutter";

const Navbar = () => {
  const [active, setActive] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"FR" | "EN">("FR");
  const [techTheme, setTechTheme] = useState<TechTheme>("default");
  const [primaryColor, setPrimaryColor] = useState("hsl(9 90% 52%)");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const syncActiveFromHash = useCallback(() => {
    const hash = window.location.hash;
    if (hash && links.some((l) => l.href === hash)) {
      setActive(hash);
    }
  }, []);

  useEffect(() => {
    syncActiveFromHash();
    window.addEventListener("hashchange", syncActiveFromHash);
    return () => window.removeEventListener("hashchange", syncActiveFromHash);
  }, [syncActiveFromHash]);

  const hexToHsl = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
  };

  const handleTechThemeClick = (badge: typeof techBadges[number]) => {
    if (techTheme === badge.name.toLowerCase() as TechTheme) {
      // reset
      setTechTheme("default");
      const defaultHsl = "9 90% 52%";
      document.documentElement.style.setProperty("--primary", defaultHsl);
      document.documentElement.style.setProperty("--primary-foreground", "0 0% 100%");
      document.documentElement.style.setProperty("--primary-glow", defaultHsl);
      document.documentElement.style.setProperty("--ring", defaultHsl);
      document.documentElement.style.setProperty("--accent", defaultHsl);
      setPrimaryColor(`hsl(${defaultHsl})`);
      return;
    }
    setTechTheme(badge.name.toLowerCase() as TechTheme);
    const hsl = hexToHsl(badge.primary);
    document.documentElement.style.setProperty("--primary", hsl);
    document.documentElement.style.setProperty("--primary-foreground", "0 0% 100%");
    document.documentElement.style.setProperty("--primary-glow", hsl);
    document.documentElement.style.setProperty("--ring", hsl);
    document.documentElement.style.setProperty("--accent", hsl);
    setPrimaryColor(`hsl(${hsl})`);
  };

  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.15, 0.35, 0.55] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "border-border/50 bg-background/95 dark:bg-black/95 shadow-md backdrop-blur-xl"
          : "border-border/20 bg-background/80 dark:bg-black/80 backdrop-blur-md"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between gap-4 px-4 py-3" aria-label="Navigation principale">
        {/* logo */}
        <m.a
          href="#hero"
          className="text-xl font-bold tracking-tight hover:scale-105 transition-transform"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-foreground dark:text-white">Bekono</span>
          <span style={{ color: primaryColor }}>.dev</span>
        </m.a>

        {/* liens desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <m.a
                href={l.href}
                onClick={() => setActive(l.href)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  active === l.href
                    ? "text-white shadow-lg"
                    : scrolled
                      ? "text-muted-foreground dark:text-white/70 hover:text-foreground dark:hover:text-white hover:bg-accent dark:hover:bg-white/10"
                      : "text-foreground/80 dark:text-white/80 hover:text-foreground dark:hover:text-white hover:bg-white/10"
                )}
                style={active === l.href ? {
                  backgroundColor: primaryColor,
                  boxShadow: `0 4px 14px 0 ${primaryColor}55`,
                } : {}}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {l.label}
              </m.a>
            </li>
          ))}
        </ul>

        {/* contrôles desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* langue */}
          <div className="flex items-center gap-1 rounded-full bg-secondary dark:bg-white/5 p-1">
            {(["FR", "EN"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-medium transition-all",
                  lang === l
                    ? "text-white shadow-lg"
                    : "text-muted-foreground dark:text-white/50 hover:text-foreground dark:hover:text-white"
                )}
                style={lang === l ? { backgroundColor: primaryColor } : {}}
              >
                {l}
              </button>
            ))}
          </div>

          {/* tech badges */}
          <div className="flex items-center gap-1.5 rounded-full border border-border dark:border-white/10 px-2 py-1">
            {techBadges.map((tech, index) => {
              const isActive = techTheme === tech.name.toLowerCase() as TechTheme;
              return (
                <button
                  key={tech.name}
                  onClick={() => handleTechThemeClick(tech)}
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-medium transition-all duration-300 hover:scale-105",
                    isActive && "ring-2 ring-offset-2 ring-offset-background",
                    index < techBadges.length - 1 && "border-r border-border dark:border-white/10 pr-1.5"
                  )}
                  style={{
                    backgroundColor: isActive ? tech.primary : "transparent",
                    color: isActive ? "#fff" : "inherit",
                  }}
                >
                  {tech.name}
                </button>
              );
            })}
          </div>

          <ThemeToggle />
        </div>

        {/* burger mobile */}
        <m.button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="rounded-full bg-secondary dark:bg-white/10 p-2 text-foreground dark:text-white hover:bg-accent dark:hover:bg-white/20 transition-colors lg:hidden"
          onClick={() => setOpen((o) => !o)}
          whileTap={{ scale: 0.98 }}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </m.button>
      </nav>

      {/* menu mobile */}
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            className="border-t border-border/50 bg-background/95 dark:bg-black/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
              {links.map((l) => (
                <m.a
                  key={l.href}
                  href={l.href}
                  onClick={() => { setOpen(false); setActive(l.href); }}
                  className={cn(
                    "rounded-full px-4 py-3 text-sm font-medium transition-all",
                    active === l.href
                      ? "text-white"
                      : "text-muted-foreground dark:text-white/70 hover:bg-accent dark:hover:bg-white/10 dark:hover:text-white"
                  )}
                  style={active === l.href ? { backgroundColor: primaryColor } : {}}
                  whileTap={{ scale: 0.99 }}
                >
                  {l.label}
                </m.a>
              ))}

              <div className="flex items-center gap-3 pt-4 border-t border-border dark:border-white/10">
                <div className="flex items-center gap-1 rounded-full bg-secondary dark:bg-white/5 p-1">
                  {(["FR", "EN"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-medium transition-all",
                        lang === l ? "text-white" : "text-muted-foreground dark:text-white/50"
                      )}
                      style={lang === l ? { backgroundColor: primaryColor } : {}}
                    >
                      {l}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 rounded-full border border-border dark:border-white/10 px-2 py-1">
                  {techBadges.map((tech, index) => {
                    const isActive = techTheme === tech.name.toLowerCase() as TechTheme;
                    return (
                      <button
                        key={tech.name}
                        onClick={() => handleTechThemeClick(tech)}
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-medium transition-all hover:scale-105",
                          isActive && "ring-2 ring-offset-2 ring-offset-background",
                          index < techBadges.length - 1 && "border-r border-border dark:border-white/10 pr-1.5"
                        )}
                        style={{
                          backgroundColor: isActive ? tech.primary : "transparent",
                          color: isActive ? "#fff" : "inherit",
                        }}
                      >
                        {tech.name}
                      </button>
                    );
                  })}
                </div>

                <ThemeToggle />
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
