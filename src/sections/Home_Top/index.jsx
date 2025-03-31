import profile from "../../assets/NoBG.png";
import TypeWriter from "../../components/TypeWriter";
import colors from "../../utils/style/colors";
import { useState } from "react";

function Home_Top(){
    const [title, setTitle] = useState("");

    return (
        <div
      className="h-200"
      style={{ backgroundColor: colors.bg_light_2
 }}
    >
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

          <p>
            Je suis passioné d'informatique depuis plusieurs années, j'adore
            coder et découvrir de nouvelles technos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home_Top;