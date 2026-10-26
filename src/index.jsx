import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./utils/context";
import { LanguageProvider } from "./utils/i18n";
import App from "./App";

import "./utils/style/index.css";

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <App />
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);

// Les pages sont pré-rendues au build (scripts/postbuild.js) : on reprend le HTML existant
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
