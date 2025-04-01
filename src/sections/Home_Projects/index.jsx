import { Link } from "react-router-dom";
import colors from "../../utils/style/colors";
import default_card from "../../assets/projects-1.jpg";
import projets from "../../assets/projets";
import { useState } from "react";

function Home_Projects() {
  const [activeProjects, setActiveProjects] = useState("All");

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ backgroundColor: colors.bg_light_1 }}
    >
      <div className="container p-4 mx-auto w-full items-center flex justify-center">
        <div className="flex place-items-center space-x-4">
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
        className={`mt-4 grid grid-cols-${
          projets
            .filter(
              (projet) =>
                activeProjects === "All" || projet.category === activeProjects
            )
            .slice(0, 6).length < 3
            ? projets
                .filter(
                  (projet) =>
                    activeProjects === "All" ||
                    projet.category === activeProjects
                )
                .slice(0, 6).length
            : 3
        } gap-4`}
      >
        {projets
          .filter(
            (projet) =>
              activeProjects === "All" || projet.category === activeProjects
          )
          .slice(0, 6) // Limit to 6 projects
          .map((projet, index) => (
            <div key={index} className="relative group">
              <img
                src={projet.image || default_card}
                alt="Image"
                className="w-100 rounded"
              />
              <h1 className="absolute bottom-18 left-5 right-0 opacity-100 transition-opacity text-2xl text-black font-bold p-1 rounded-xl uppercase">
                {projet.title}
              </h1>
              <h1 className="absolute bottom-10 left-5 right-0 opacity-100 transition-opacity text-l text-black p-1 rounded-xl text-gray-600">
                {projet.label}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home_Projects;
