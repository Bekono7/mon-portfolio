export type Category = "Frontend" | "Backend" | "Mobile" | "Outils" | "IA & Prompting" | "Design";

export interface Skill {
  name: string;
  icons: string[];
}

export interface CategoryData {
  id: Category;
  skills: Skill[];
}

export const skillCategories: CategoryData[] = [
  {
    id: "Frontend",
    skills: [
      { name: "Vue.js / Nuxt.js", icons: ["vuejs", "nuxtjs"] },
      { name: "React / TypeScript", icons: ["react", "typescript"] },
      { name: "HTML / CSS / JS", icons: ["html5", "css3", "javascript"] },
      { name: "Tailwind CSS", icons: ["tailwindcss"] },
    ],
  },
  {
    id: "Backend",
    skills: [
      { name: "Django", icons: ["django"] },
      { name: "API REST", icons: ["fastapi"] },
      { name: "MySQL / PostgreSQL", icons: ["mysql", "postgresql"] },
    ],
  },
  {
    id: "Mobile",
    skills: [
      { name: "Flutter / Dart", icons: ["flutter", "dart"] },
      { name: "Firebase", icons: ["firebase"] },
    ],
  },
  {
    id: "Outils",
    skills: [
      { name: "Git / GitHub / GitLab", icons: ["git", "github", "gitlab"] },
      { name: "VSCode", icons: ["vscode"] },
      { name: "Docker", icons: ["docker"] },
      { name: "Postman", icons: ["postman"] },
      { name: "Trello", icons: ["trello"] },
    ],
  },
  {
    id: "IA & Prompting",
    skills: [
      { name: "Cursor", icons: ["cursor"] },
      { name: "Prompt Engineering", icons: ["openai"] },
      { name: "Assistant IA Code", icons: ["anthropic"] },
    ],
  },
  {
    id: "Design",
    skills: [
      { name: "Photoshop", icons: ["adobephotoshop"] },
      { name: "Figma", icons: ["figma"] },
      { name: "UX / UI Design", icons: ["figma"] },
    ],
  },
];
