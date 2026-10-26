import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./utils/context";
import { LanguageProvider } from "./utils/i18n";
import App from "./App";

// Pré-rendu d'une route pour le build. Avec React 19, les balises <head>
// (titre, description...) arrivent en tête du HTML renvoyé.
export function render(url) {
  return renderToString(
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
