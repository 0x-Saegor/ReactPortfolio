import projets from "../../../assets/projets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../../utils/style/colors";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Presentation({ projectId }) {
  let projet = projets[projectId];

  return (
    <div className="flex flex-col md:flex-row items-center text-center px-6 py-6 md:py-12 gap-10">
      <div className="w-full md:w-[50%] lg:w-[40%] xl:w-[30%] ml-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
          {projet.title}
        </h1>
        <p className="text-justify text-sm md:text-base">
          {projet.description}
        </p>
        <a
          href={projet.url}
          className="flex p-5 w-50 h-5 rounded-full items-center justify-center text-white gap-3 my-5 mx-auto"
          target="_blank"
          style={{ backgroundColor: colors.senary }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = colors.button_hover_senary)(
              e.target.child
            )
          }
          onMouseLeave={(e) => (e.target.style.backgroundColor = colors.senary)}
        >
          <FontAwesomeIcon icon={faGithub} />
          Github du projet
        </a>{" "}
      </div>
      <div className="w-full md:w-[50%] lg:w-[40%] xl:w-[40%] mr-auto">
        <img
          src={projet.screenshot}
          alt="Image du projet"
          className="rounded-2xl w-full"
        />
      </div>
    </div>
  );
}

export default Presentation;
