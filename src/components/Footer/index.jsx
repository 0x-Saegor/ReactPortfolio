import colors from "../../utils/style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div
      className="mt-20 text-white flex flex-col md:flex-row items-center justify-center gap-y-10 md:gap-x-20 w-full p-6"
      style={{
        backgroundColor: colors.senary,
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
            Cela fait longtemps que je souhaitais me faire un portfolio, je
            n'avais jusque là pas pris le temps de le faire
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            Lors de ma recherche d'alternance j'ai constaté que React JS était
            fortement demandé, je me suis formé et ai donc créé ce portfolio
            avec React.
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
