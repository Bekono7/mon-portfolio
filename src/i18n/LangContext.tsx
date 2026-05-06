import { createContext, useContext, useState, type ReactNode } from "react";
import { type Lang, t } from "./translations";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: typeof t["FR"];
}

const LangContext = createContext<LangContextValue>({
  lang: "FR",
  setLang: () => {},
  tr: t["FR"],
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("FR");
  return (
    <LangContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
