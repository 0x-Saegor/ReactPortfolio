import { createContext, useContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

// Langue mémorisée, sinon celle du navigateur (français par défaut)
function getInitialLang() {
  if (typeof window === "undefined") return "fr";
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") return saved;
  } catch {
    // stockage indisponible
  }
  if (navigator.language && !navigator.language.toLowerCase().startsWith("fr")) {
    return "en";
  }
  return "fr";
}

// Langue voulue par le visiteur, lue une seule fois au chargement
const preferredLang = getInitialLang();
// Page pré-rendue au build (en français) : on démarre pareil pour l'hydratation
const prerendered = typeof document !== "undefined" && Boolean(document.getElementById("root")?.hasChildNodes());

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(prerendered ? "fr" : preferredLang);

  // Après l'hydratation, passe à la langue du visiteur si ce n'est pas le français
  useEffect(() => {
    setLang(preferredLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    const next = lang === "fr" ? "en" : "fr";
    setLang(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      // stockage indisponible
    }
  };

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
