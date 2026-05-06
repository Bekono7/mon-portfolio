import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { m } from "framer-motion";
import { site } from "@/config/site";

const quick = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Articles", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-tight">{site.fullName}</p>
            <p className="mt-2 text-sm font-light text-muted-foreground">
              {site.title} · {site.location}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-primary transition-colors hover:underline"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
          </div>

          <nav aria-label="Liens rapides" className="flex flex-wrap gap-x-10 gap-y-3 text-sm">
            {quick.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-light text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            {site.twitterUrl ? (
              <m.a
                href={site.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                aria-label="X / Twitter"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Twitter className="h-5 w-5" />
              </m.a>
            ) : null}
            {site.githubUrl ? (
              <m.a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                aria-label="GitHub"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github className="h-5 w-5" />
              </m.a>
            ) : null}
            {site.linkedinUrl ? (
              <m.a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                aria-label="LinkedIn"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Linkedin className="h-5 w-5" />
              </m.a>
            ) : null}
          </div>
        </div>

        <p className="mt-14 border-t border-border pt-10 text-center text-xs font-light text-muted-foreground">
          © {new Date().getFullYear()} {site.fullName}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
