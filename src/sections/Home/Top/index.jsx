import profile from "../../../assets/NoBG.webp";
import TypeWriter from "../../../components/TypeWriter";
import { useTheme } from "../../../utils/hooks";
import colors from "../../../utils/style/colors";
import { useState } from "react";
import { Link } from "react-router-dom";

function Top() {
  const [title, setTitle] = useState("");
  const {theme, toggleTheme} = useTheme();

  return (
    <div
      className="h-auto md:h-200"
      style={{ backgroundColor: (theme === 'light' ? colors.bg_light_2 : colors.bg_dark_2) }}
    >
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center md:justify-start">
        <div className="mb-6 md:mb-0 md:ml-[10%] md:mr-[10%] flex-shrink-0">
          <img
            src={profile}
            alt="Photo de profil"
            className="w-40 md:w-90 rounded-full mx-auto md:mx-0"
            onLoad={(e) => (e.target.style.opacity = 1)}
            style={{ opacity: 0, transition: "opacity 0.5s" }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/150";
              e.target.style.opacity = 1;
            }}
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg">Je suis </p>
          <h1 className="text-3xl md:text-4xl font-bold">Arthur Le Gall</h1>
          <h2 className="text-2xl md:text-3xl font-bold">
            Je suis {title} <TypeWriter title={title} setTitle={setTitle} />
          </h2>

          <p>
            Je suis passioné d'informatique depuis plusieurs années, j'adore
            coder et découvrir de nouvelles technos.
          </p>

          <Link
            to="mailto:arthurleg29@gmail.com?subject=Prise%20de%20contact"
            className="mt-6 px-6 py-3 text-white rounded-lg shadow-lg transition inline-block"
            style={{
              backgroundColor: colors.secondary,
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = colors.primary)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = colors.secondary)
            }
          >
            Envoyez moi un message !
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Top;
