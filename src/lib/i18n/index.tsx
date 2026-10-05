import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { hi } from "./hi";
import { en } from "./en";

export type Language = "hi" | "en";
type Translations = typeof hi;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "hi",
  setLang: () => {},
  t: hi,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("mp-schemes-lang");
      return (saved === "en" ? "en" : "hi") as Language;
    } catch {
      return "hi";
    }
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("mp-schemes-lang", newLang);
    } catch {}
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = lang === "hi" ? hi : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useTranslation() {
  const { lang } = useContext(LanguageContext);
  return lang === "hi" ? hi : en;
}
