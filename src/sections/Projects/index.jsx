import { Link } from "react-router-dom";
import colors from "../../utils/style/colors";
import projets from "../../assets/projets.jsx";
import { useState } from "react";
import CardProject from "../../components/CardProjects";

function Projects({ max }) {
  const [activeProjects, setActiveProjects] = useState("All");

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ backgroundColor: colors.bg_light_1 }}
    >
      <div className="container p-4 mx-auto w-full items-center flex justify-center">
        <div className="flex flex-wrap place-items-center space-x-4">
          <Link
            style={activeProjects === "All" ? { color: colors.primary } : {}}
            className={`${activeProjects === "All" ? "font-bold" : ""}`}
            onClick={() => setActiveProjects("All")}
          >
            Toutes les catégories
          </Link>
          <Link
            style={activeProjects === "Web" ? { color: colors.primary } : {}}
            className={activeProjects === "Web" ? "font-bold" : ""}
            onClick={() => setActiveProjects("Web")}
          >
            Web
          </Link>
          <Link
            style={
              activeProjects === "Programmation"
                ? { color: colors.primary }
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
