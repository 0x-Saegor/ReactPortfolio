import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import GlobalStyle from "./utils/style/GlobalStyle";
import { ThemeProvider } from "./utils/context";
import { LanguageProvider } from "./utils/i18n";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./utils/style/index.css";

import Home from "./pages/Home";
import Projets from "./pages/Projets"
import About from "./pages/About";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
        <GlobalStyle />
        <Router>
          <Header />
          {/* marge pour ne pas passer sous la barre de navigation (en bas sur mobile, à gauche sur desktop) */}
          <div className="pb-16 md:pb-0 md:pl-20 xl:pl-0">
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projets />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
