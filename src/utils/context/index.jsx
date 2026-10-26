import { useState, useEffect, createContext } from 'react'

export const ThemeContext = createContext()

// Le thème est déjà appliqué par le script de index.html avant le rendu,
// on le relit ici pour éviter un flash au chargement
function getInitialTheme() {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

// Thème voulu par le visiteur, lu une seule fois au chargement
const preferredTheme = getInitialTheme()
// Page pré-rendue au build (en thème clair) : on démarre pareil pour l'hydratation
const prerendered = typeof document !== 'undefined' && Boolean(document.getElementById('root')?.hasChildNodes())

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(prerendered ? 'light' : preferredTheme)

  // Après l'hydratation, l'état rejoint le thème déjà affiché par index.html
  useEffect(() => {
    setTheme(preferredTheme)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    try {
      localStorage.setItem('theme', next)
    } catch {
      // stockage indisponible (navigation privée), pas grave
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
