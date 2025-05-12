import { Link } from "react-router-dom";
import colors from "../../utils/style/colors";
import projets from "../../assets/projets.jsx";
import { useState } from "react";
import CardProject from "../../components/CardProjects";
import useTheme from "../../utils/hooks/index.jsx";

function Projects({ max }) {
  const [activeProjects, setActiveProjects] = useState("All");
    const {theme, toggleTheme} = useTheme();


  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ backgroundColor: (theme === 'light' ? colors.bg_light_1 : colors.bg_dark_) }}
    >
      <div className="container p-4 mx-auto w-full items-center flex justify-center">
        <div className="flex flex-wrap place-items-center space-x-4">
          <Link
            style={activeProjects === "All" ? { color: (theme === 'light' ? colors.primary : colors.secondary) } : {}}
            className={`${activeProjects === "All" ? "font-bold" : ""}`}
            onClick={() => setActiveProjects("All")}
          >
            Toutes les catégories
          </Link>
          <Link
            style={activeProjects === "Web" ? { color: (theme === 'light' ? colors.primary : colors.secondary) } : {}}
            className={activeProjects === "Web" ? "font-bold" : ""}
            onClick={() => setActiveProjects("Web")}
          >
            Web
          </Link>
          <Link
            style={
              activeProjects === "Programmation"
                ? { color: (theme === 'light' ? colors.primary : colors.secondary) }
                : {}
            }
            className={activeProjects === "Programmation" ? "font-bold" : ""}
            onClick={() => setActiveProjects("Programmation")}
          >
            Programmation
          </Link>
        </div>
      </div>

      <div
        className={`mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`}
      >
        {projets
          .filter(
            (projet) =>
              activeProjects === "All" || projet.category === activeProjects
          )
          .slice(0, max !== 0 ? max : projets.length)
          .map((projet, index) => (
            <CardProject key={projet.id || index} projet={projet} index={index} />
          ))}
      </div>
    </div>
  );
}

export default Projects;
