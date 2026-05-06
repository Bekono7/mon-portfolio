export type Lang = "FR" | "EN";

export const t = {
  FR: {
    // ── Navbar ──────────────────────────────────────────────────────────────
    nav: {
      home: "Accueil",
      about: "À propos",
      parcours: "Parcours",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },

    // ── Hero ────────────────────────────────────────────────────────────────
    hero: {
      title: "Développeur Full Stack",
      greeting: "Bonjour, je suis",
      subtitle:
        "Développeur full stack passionné. Je crée des interfaces élégantes et des APIs robustes. Du concept au déploiement, je transforme vos idées en solutions digitales performantes.",
      basedIn: "Basé à",
      downloadCv: "Télécharger CV",
      projects: "Projets",
      contact: "Contact",
      scrollTo: "Aller à la section À propos",
    },

    // ── About ───────────────────────────────────────────────────────────────
    about: {
      eyebrow: "Présentation",
      title: "À propos de moi",
      subtitle:
        "Full stack avec une attention portée à l'architecture, à la sécurité des API et à une expérience utilisateur cohérente.",
      bio1: "Développeur full stack basé à",
      bio1b:
        ", je couvre le cycle des applications : besoins, architecture, API, interface et mise en production. Stack principale :",
      bio1c: "avec une approche Agile / Scrum.",
      bio2: "Formation :",
      bio2b: "(IAI-Cameroun). Code lisible, APIs sécurisées et UX soignée restent mes priorités.",
      stats: {
        years: "Années",
        projects: "Projets",
        tech: "Tech",
      },
      whatIDo: "Ce que je fais",
      services: [
        {
          title: "Développement Web",
          description: "Sites et applications web modernes, performants et accessibles.",
        },
        {
          title: "Développement Mobile",
          description: "Applications iOS et Android avec Flutter pour une expérience native.",
        },
        {
          title: "Backend & API",
          description: "APIs robustes et sécurisées avec Django et architectures modernes.",
        },
        {
          title: "Création & Design",
          description: "Interfaces élégantes et expériences utilisateur soignées.",
        },
        {
          title: "Intégration Front-End",
          description: "Intégration pixel-perfect avec React, TypeScript et Tailwind CSS.",
        },
        {
          title: "IoT & Systèmes",
          description: "Solutions connectées et systèmes embarqués intelligents.",
        },
      ],
    },

    // ── Parcours ─────────────────────────────────────────────────────────────
    parcours: {
      eyebrow: "Mon parcours",
      title: "Expériences, Parcours Académique & Diplômes",
      subtitle:
        "Un parcours marqué par des expériences terrain enrichissantes et une formation solide en génie logiciel.",
      experiences: "Expériences",
      diplomas: "Diplômes",
      academicProject: "Projet Académique",
      experiences_data: [
        {
          company: "Welldone Planet",
          role: "Stagiaire Académique en Développement Informatique",
          period: "Juillet 2024 - Septembre 2024",
          details: [
            "Conception d'une application de gestion de collecte et vente de déchets non recyclés",
            "Développement d'une plateforme de gestion d'agence de voyage avec réservation et suivi client",
            "Refonte du site web de l'entreprise avec amélioration de l'UX",
          ],
        },
        {
          company: "Welldone Planet",
          role: "Stagiaire Académique – Chargé de Formation",
          period: "Janvier 2025 - Juin 2025",
          details: [
            "Formation des jeunes aux outils informatiques de base",
            "Animation d'ateliers HTML5, CSS3 et Python",
            "Modernisation du site web de l'entreprise",
          ],
        },
      ],
      education_data: [
        { degree: "Diplôme d'Ingénieur des Travaux Informatique", institution: "IAI-Cameroun", year: "2025" },
        { degree: "Licence Professionnelle en Génie Logiciel", institution: "IAI-Cameroun", year: "2025" },
        { degree: "DTS – Diplôme de Technicien Supérieur", institution: "IAI-Cameroun", year: "2024" },
        { degree: "Baccalauréat A4 Allemand", institution: "Lycée Bilingue", year: "2021" },
      ],
      project_data: {
        title: "ERP – Progiciel de Gestion Intégré",
        institution: "IAI-Cameroun",
        period: "Janvier - Juin 2025",
        details: [
          "Développement d'un ERP modulaire avec gestion comptable, RH et ventes",
          "Stack: Python (Django), PostgreSQL, architecture MVC",
          "Méthodologie Agile/Scrum",
          "Présenté au séminaire académique de l'IAI-Cameroun",
        ],
      },
    },

    // ── Skills ───────────────────────────────────────────────────────────────
    skills: {
      eyebrow: "Stack",
      title: "Compétences",
      skill: "compétence",
      skills: "compétences",
    },

    // ── Projects ─────────────────────────────────────────────────────────────
    projects: {
      eyebrow: "Mes réalisations",
      title: "Projets",
      subtitle: "Sélection de projets académiques et professionnels. Les liens apparaissent lorsqu'une démo est disponible.",
      all: "Tout",
      online: "En ligne",
      viewDemo: "Voir la démo",
      code: "Code",
      onRequest: "Démo sur demande",
      empty: "Aucun projet dans cette catégorie pour le moment.",
      items: [
        {
          title: "Fahari ERP",
          desc: "Progiciel de gestion intégré en ligne — solution ERP complète pour entreprises avec gestion des modules métiers, tableau de bord et interface moderne.",
        },
        {
          title: "Unifio ERP",
          desc: "Progiciel de gestion intégré (ERP) inspiré de Fahari ERP, avec gestion complète des modules métiers et interface moderne pour entreprises.",
        },
        {
          title: "NutriHarmony",
          desc: "Plateforme web complète pour un restaurant diététique : commandes en ligne, création de comptes, gestion des plats et suivi nutritionnel.",
        },
        {
          title: "Marketia – Social Commerce",
          desc: "Plateforme de social commerce permettant aux marchands de vendre via les réseaux sociaux avec un hub centralisé de gestion.",
        },
        {
          title: "Dolicash Admin Hub",
          desc: "Interface administrative React pour la gestion d'utilisateurs et la supervision d'une application de gestion financière.",
        },
      ],
    },

    // ── Contact ──────────────────────────────────────────────────────────────
    contact: {
      eyebrow: "Restons en contact",
      title: "Contact",
      subtitle: "Pour une collaboration ou un entretien — réponse sous quelques jours ouvrés.",
      phone: "Téléphone",
      email: "Email",
      location: "Localisation",
      whatsapp: "WhatsApp",
      name: "Nom",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "vous@email.com",
      message: "Message",
      messagePlaceholder: "Votre message…",
      send: "Envoyer le message",
      sending: "Envoi en cours…",
      success: "Message envoyé ! Je vous répondrai très vite.",
      error: "Erreur d'envoi. Utilisez directement l'email ou WhatsApp.",
    },

    // ── Footer ───────────────────────────────────────────────────────────────
    footer: {
      rights: "Tous droits réservés.",
      links: [
        { label: "À propos", href: "#about" },
        { label: "Compétences", href: "#skills" },
        { label: "Projets", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
    },
  },

  EN: {
    // ── Navbar ──────────────────────────────────────────────────────────────
    nav: {
      home: "Home",
      about: "About",
      parcours: "Journey",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },

    // ── Hero ────────────────────────────────────────────────────────────────
    hero: {
      title: "Full Stack Developer",
      greeting: "Hello, I'm",
      subtitle:
        "Passionate full stack developer. I build elegant interfaces and robust APIs. From concept to deployment, I turn your ideas into high-performance digital solutions.",
      basedIn: "Based in",
      downloadCv: "Download CV",
      projects: "Projects",
      contact: "Contact",
      scrollTo: "Go to About section",
    },

    // ── About ───────────────────────────────────────────────────────────────
    about: {
      eyebrow: "Introduction",
      title: "About Me",
      subtitle:
        "Full stack developer focused on architecture, API security, and consistent user experience.",
      bio1: "Full stack developer based in",
      bio1b:
        ", I cover the full application lifecycle: requirements, architecture, API, UI, and deployment. Main stack:",
      bio1c: "with an Agile / Scrum approach.",
      bio2: "Education:",
      bio2b: "(IAI-Cameroon). Clean code, secure APIs, and polished UX are my priorities.",
      stats: {
        years: "Years",
        projects: "Projects",
        tech: "Tech",
      },
      whatIDo: "What I Do",
      services: [
        {
          title: "Web Development",
          description: "Modern, performant and accessible websites and web applications.",
        },
        {
          title: "Mobile Development",
          description: "iOS and Android apps with Flutter for a native experience.",
        },
        {
          title: "Backend & API",
          description: "Robust and secure APIs with Django and modern architectures.",
        },
        {
          title: "UI & Design",
          description: "Elegant interfaces and carefully crafted user experiences.",
        },
        {
          title: "Front-End Integration",
          description: "Pixel-perfect integration with React, TypeScript and Tailwind CSS.",
        },
        {
          title: "IoT & Systems",
          description: "Connected solutions and intelligent embedded systems.",
        },
      ],
    },

    // ── Parcours ─────────────────────────────────────────────────────────────
    parcours: {
      eyebrow: "My Journey",
      title: "Experience, Education & Degrees",
      subtitle:
        "A path shaped by enriching hands-on experience and a solid software engineering background.",
      experiences: "Experience",
      diplomas: "Degrees",
      academicProject: "Academic Project",
      experiences_data: [
        {
          company: "Welldone Planet",
          role: "Academic Intern – Software Development",
          period: "July 2024 – September 2024",
          details: [
            "Designed a waste collection and sales management application",
            "Built a travel agency management platform with booking and client tracking",
            "Redesigned the company website with improved UX",
          ],
        },
        {
          company: "Welldone Planet",
          role: "Academic Intern – Training Officer",
          period: "January 2025 – June 2025",
          details: [
            "Trained youth in basic computer tools",
            "Led HTML5, CSS3 and Python workshops",
            "Modernized the company website",
          ],
        },
      ],
      education_data: [
        { degree: "Computer Engineering Diploma", institution: "IAI-Cameroon", year: "2025" },
        { degree: "Professional Bachelor in Software Engineering", institution: "IAI-Cameroon", year: "2025" },
        { degree: "DTS – Higher Technician Diploma", institution: "IAI-Cameroon", year: "2024" },
        { degree: "A4 German Baccalaureate", institution: "Bilingual High School", year: "2021" },
      ],
      project_data: {
        title: "ERP – Integrated Management Software",
        institution: "IAI-Cameroon",
        period: "January – June 2025",
        details: [
          "Developed a modular ERP with accounting, HR and sales management",
          "Stack: Python (Django), PostgreSQL, MVC architecture",
          "Agile/Scrum methodology",
          "Presented at the IAI-Cameroon academic seminar",
        ],
      },
    },

    // ── Skills ───────────────────────────────────────────────────────────────
    skills: {
      eyebrow: "Stack",
      title: "Skills",
      skill: "skill",
      skills: "skills",
    },

    // ── Projects ─────────────────────────────────────────────────────────────
    projects: {
      eyebrow: "My Work",
      title: "Projects",
      subtitle: "A selection of academic and professional projects. Links appear when a demo is available.",
      all: "All",
      online: "Live",
      viewDemo: "View demo",
      code: "Code",
      onRequest: "Demo on request",
      empty: "No projects in this category yet.",
      items: [
        {
          title: "Fahari ERP",
          desc: "Online integrated management software — complete ERP solution for businesses with full module management, dashboard and modern interface.",
        },
        {
          title: "Unifio ERP",
          desc: "Integrated ERP platform inspired by Fahari ERP, with complete business module management and a modern enterprise interface.",
        },
        {
          title: "NutriHarmony",
          desc: "Full-featured web platform for a dietetic restaurant: online ordering, account creation, dish management and nutritional tracking.",
        },
        {
          title: "Marketia – Social Commerce",
          desc: "Social commerce platform enabling merchants to sell through social networks with a centralized management hub.",
        },
        {
          title: "Dolicash Admin Hub",
          desc: "React admin interface for user management and supervision of a financial management application.",
        },
      ],
    },

    // ── Contact ──────────────────────────────────────────────────────────────
    contact: {
      eyebrow: "Let's connect",
      title: "Contact",
      subtitle: "For a collaboration or interview — reply within a few business days.",
      phone: "Phone",
      email: "Email",
      location: "Location",
      whatsapp: "WhatsApp",
      name: "Name",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      message: "Message",
      messagePlaceholder: "Your message…",
      send: "Send message",
      sending: "Sending…",
      success: "Message sent! I'll get back to you very soon.",
      error: "Send failed. Please use email or WhatsApp directly.",
    },

    // ── Footer ───────────────────────────────────────────────────────────────
    footer: {
      rights: "All rights reserved.",
      links: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
    },
  },
} as const;
