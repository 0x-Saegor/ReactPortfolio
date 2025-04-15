import profile from "../../../assets/NoBG.png";
import TypeWriter from "../../../components/TypeWriter";
import colors from "../../../utils/style/colors";
import { useState } from "react";
import { Link } from "react-router-dom";

function Top() {
  const [title, setTitle] = useState("");

  return (
    <div className="h-200" style={{ backgroundColor: colors.bg_light_2 }}>
      <div className="container mx-auto p-4 flex items-center justify-start">
        <div className="ml-[10%] mr-[10%]">
          <img
            src={profile}
            alt="Photo de profil"
            className="w-90 rounded-full"
          />
        </div>
        <div>
          <p className="text-lg">Hey ! Je suis </p>
          <h1 className="text-4xl font-bold">Arthur</h1>
          <h2 className="text-3xl font-bold">
            Je suis {title} <TypeWriter title={title} setTitle={setTitle} />
          </h2>

          <p className="mb-7">
            Je suis passioné d'informatique depuis plusieurs années, j'adore
            coder et découvrir de nouvelles technos.
          </p>

          <Link
            to="contact"
            className="mt-20 px-6 py-3 text-white rounded-lg shadow-lg transition"
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
            Envoyez moi un message !
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Top;
