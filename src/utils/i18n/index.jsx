import { createContext, useContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

// Langue mémorisée, sinon celle du navigateur (français par défaut)
function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") return saved;
  } catch {
    // stockage indisponible
  }
  if (typeof navigator !== "undefined" && navigator.language && !navigator.language.toLowerCase().startsWith("fr")) {
    return "en";
  }
  return "fr";
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // stockage indisponible
    }
  }, [lang]);

  const toggleLang = () => setLang((current) => (current === "fr" ? "en" : "fr"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// t({ fr: "...", en: "..." }) renvoie la version de la langue active.
// Une valeur simple (nom propre, techno) est renvoyée telle quelle.
export function useLang() {
  const { lang, toggleLang } = useContext(LanguageContext);
  const t = (value) =>
    value && typeof value === "object" && !Array.isArray(value) && "fr" in value ? value[lang] : value;
  return { lang, toggleLang, t };
}
