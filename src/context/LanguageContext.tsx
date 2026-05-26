"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "mr" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (mr: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "mr",
  toggleLanguage: () => {},
  t: (mr) => mr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("mr");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const t = (mr: string, en: string) => (lang === "mr" ? mr : en);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
