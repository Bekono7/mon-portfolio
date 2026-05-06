import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <p className="mb-2 text-xl font-semibold text-foreground">Page introuvable</p>
          <p className="mb-6 text-muted-foreground">Cette page n'existe pas ou a été déplacée.</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-md hover:bg-primary/90 transition-colors"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
