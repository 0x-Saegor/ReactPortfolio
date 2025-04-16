import { Link } from "react-router-dom";
import SkillIcons from "../../../components/SkillIcon";
import colors from "../../../utils/style/colors";

function About() {
  return (
    <div className="h-auto md:h-160 flex items-center">
      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-[30%] mb-6 md:mb-0 md:ml-12">
          <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            A propos de moi
          </h1>
          <p className="text-center md:text-left">
            Je suis étudiant en BUT informatique à l'IUT de Vannes, j'aime coder
            et découvrir de nouvelles choses. Je connais différents langages :
            python, java, javascript et différentes technologies comme ReactJS.
            Ce portfolio est temporaire, je suis en cours de création de mon
            vrai portfolio en utilisant ReactJS.
          </p>
        </div>
        <div className="w-full md:w-[60%] flex flex-col items-center">
          <h1 className="text-lg md:text-xl font-bold text-center">
            Quelques compétences que je maîtrise
          </h1>
          <SkillIcons />
          <Link
            to="about"
            className="mt-6 md:mt-20 px-6 py-3 text-white rounded-lg shadow-lg transition"
            style={{
              backgroundColor: colors.button,
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = colors.button_hover)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = colors.button)
            }
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
