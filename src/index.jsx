import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import GlobalStyle from "./utils/style/GlobalStyle";
import { ThemeProvider } from "./utils/context";
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
        <GlobalStyle />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projets />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
