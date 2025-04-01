import colors from "../../utils/style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div
      className="h-50 mt-20 text-white flex items-center justify-center gap-x-100 w-full"
      style={{ backgroundColor: colors.senary }}
    >
      <div className="mx-4 w-120">
        <h1 className="font-bold text-xl">Pourquoi ce site ?</h1>
        <div className="flex flex-row gap-x-5">
          <p className="text-gray-400 text-sm">
            Cela fait longtemps que je souhaitais me faire un portfolio, je
            n'avais jusque là pas pris le temps de le faire
          </p>
          <p className="text-gray-400 text-sm">
            Lors de ma recherche d'alternance j'ai constaté que React JS était
            fortement demandé, je me suis formé et ai donc créé ce portfolio
            avec React.
          </p>
        </div>
      </div>
      <div className="mx-4">
        <h1 className="font-bold text-xl">Me suivre</h1>
        <a href="https://github.com/0x-Saegor" target="_blank" className="flex gap-x-2 items-center text-gray-400 hover:text-gray-300">
          <FontAwesomeIcon icon={faGithub} />
          <p>Mon Github</p>
        </a>
        <a href="https://www.linkedin.com/in/arthur-le-gall-00116b266/" target="_blank" className="flex gap-x-2 items-center text-gray-400 hover:text-gray-300">
          <FontAwesomeIcon icon={faLinkedin} />
          <p>Mon LinkedIn</p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
