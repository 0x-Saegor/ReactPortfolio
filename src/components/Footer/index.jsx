import colors from "../../utils/style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div
      className="mt-20 text-white flex flex-col md:flex-row items-center justify-center gap-y-10 md:gap-x-20 w-full p-6"
      style={{
        backgroundColor: colors.bg_dark_2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="mx-4 w-full md:w-1/2">
        <h1 className="font-bold text-lg md:text-xl mb-4">
          Pourquoi ce site ?
        </h1>
        <div className="flex flex-col gap-y-4">
          <p className="text-gray-400 text-sm md:text-base">
            Ce portfolio est bien plus qu'un simple site web. C'est une vitrine
            de mes compétences, de ma passion pour le développement et de mon
            envie constante d'apprendre et de progresser.
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            J'ai choisi React JS pour sa flexibilité et sa popularité dans le
            monde du développement web moderne. Ce projet m'a permis de
            perfectionner mes compétences tout en créant un outil qui reflète
            mon parcours et mes ambitions.
          </p>
        </div>
      </div>
      <div className="mx-4 w-full md:w-1/2">
        <h1 className="font-bold text-lg md:text-xl mb-4">Me suivre</h1>
        <div className="flex flex-col gap-y-4">
          <a
            href="https://github.com/0x-Saegor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-x-2 items-center text-gray-400 hover:text-gray-300 text-sm md:text-base"
          >
            <FontAwesomeIcon icon={faGithub} />
            <p>Mon Github</p>
          </a>
          <a
            href="https://www.linkedin.com/in/arthur-le-gall-00116b266/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-x-2 items-center text-gray-400 hover:text-gray-300 text-sm md:text-base"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <p>Mon LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
