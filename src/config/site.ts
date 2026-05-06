/**
 * Configuration centralisée du portfolio.
 * Renseignez les URLs réelles quand elles sont disponibles ; les liens absents sont masqués à l’interface.
 */
export const site = {
  fullName: "Jean Michel Bekono Ateba",
  title: "Développeur Full Stack",
  location: "Yaoundé, Cameroun",
  email: "jpbekono7@gmail.com",
  phoneDisplay: "+237 655 26 26 29 · +237 651 05 55 71",
  /** Numéro principal pour lien tel: */
  phoneTel: "+237655262629",
  whatsappUrl: "https://wa.me/237655262629",
  /** Ajoutez un PDF dans `public/` (ex. `cv.pdf`) puis indiquez le chemin, ex. "/cv.pdf" */
   cvPdfPath: "/CV_Bekono_Ateba.pdf",
  githubUrl: null as string | null,
  linkedinUrl: null as string | null,
  /** Ex. https://twitter.com/votre_compte ou https://x.com/votre_compte */
  twitterUrl: null as string | null,
} as const;

export function mailtoCvRequest() {
  const subject = encodeURIComponent("Demande de CV — Jean Michel Bekono Ateba");
  const body = encodeURIComponent(
    "Bonjour,\n\nJe souhaiterais recevoir votre CV.\n\nCordialement,"
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}
