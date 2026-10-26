import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import About from "./pages/About";

// Arbre commun au rendu navigateur (index.jsx) et au pré-rendu du build (entry-server.jsx)
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
