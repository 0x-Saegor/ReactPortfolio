import colors from "../../../utils/style/colors";
import useTheme from "../../../utils/hooks";
import interiutImg from "../../../assets/ctf/Interiut.jpg";

const ctfData = [
  {
    name: "CTF IUT de Vannes",
    date: "Décembre 2025",
    rank: "Challmaker",
    description:
      "Création de challenges d'OSINT (suite de 4 challenges de Easy à Very Hard) et d'un challenge de reverse engineering en Go.",
    team: false,
  },
  {
    name: "NoBrackets CTF",
    date: "Novembre 2023",
    rank: "4ème / 51 équipes",
    description: "Finale du NoBrackets CTF.",
    team: true,
  },
  {
    name: "Pass Ton Hack",
    date: "Février 2024",
    rank: "3ème / 270 équipes",
    description: "Compétition nationale de cybersécurité.",
    team: true,
  },
  {
    name: "404CTF",
    date: "Mai 2023",
    rank: "39ème / 2877 participants",
    description: "CTF organisé par la DGSE et Télécom SudParis.",
    team: false,
  },
];

function CTF() {
  const { theme } = useTheme();

  return (
    <div className="items-center text-center py-12">
      <h1 className="text-3xl font-bold text-center">Compétitions CTF</h1>
      <p className="mt-4 text-sm md:text-base leading-relaxed max-w-3xl mx-auto px-4">
        Je me suis lancé dans les CTFs (Capture The Flag, compétitions de cybersécurité contenant différents challenges de multiples catégories) en 2023. C'est vraiment comme un escape game : chaque challenge fonctionne différemment et force à toujours plus se creuser la tête.
      </p>
      <p className="mt-4 text-sm md:text-base leading-relaxed max-w-3xl mx-auto px-4">
        Avec l'arrivée de l'IA, je trouve moins intéressant de participer dans des compétitions où nos adversaires peuvent valider des challenges en quelques secondes en utilisant des agents. C'est pourquoi je me suis mis au challmaking : c'est un nouveau moyen de me creuser la tête, l'objectif étant de concevoir des challenges que les joueurs ne puissent pas valider avec de l'IA.
      </p>
      <p className="mt-4 text-sm md:text-base leading-relaxed max-w-3xl mx-auto px-4">
        J'ai également eu l'occasion de participer à un CTF avec <a href="https://gcc-ensibs.fr/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: colors.primary }}>GCC</a> au format Box, le principe étant de pentester une machine (à la HackTheBox) en fournissant différentes informations trouvées pendant l'attaque. C'était une super expérience, j'ai trouvé ça plus motivant à l'ère de l'IA car il est moins possible d'envoyer des agents pour pentester tout ça.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto py-6 px-4">
        {ctfData.map((ctf, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl shadow-lg border"
            style={{
              backgroundColor: theme === "light" ? colors.bg_light_2 : colors.bg_dark_3,
              borderColor: theme === "light" ? colors.bg_light_4 : colors.bg_dark_5,
            }}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-left">{ctf.name}</h3>
              <span className="text-xs whitespace-nowrap ml-2" style={{ color: theme === "light" ? "#6b7280" : "#9ca3af" }}>
                {ctf.date}
              </span>
            </div>
            <p
              className="text-sm font-semibold mb-2 text-left"
              style={{ color: colors.primary }}
            >
              {ctf.rank}
            </p>
            <p className="text-sm text-left" style={{ color: theme === "light" ? "#374151" : "#d1d5db" }}>
              {ctf.description}
            </p>
            <p className="text-xs mt-3 text-left" style={{ color: theme === "light" ? "#6b7280" : "#9ca3af" }}>
              {ctf.team ? "En équipe" : "Solo"}
            </p>
          </div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto mt-8 px-4">
        <p className="text-sm font-semibold mb-2 text-center">CTF InterIUT 2025 — 2ème / 25 équipes avec l'IUT de Vannes</p>
        <img src={interiutImg} alt="CTF InterIUT" className="rounded-2xl shadow-lg w-full max-h-72 object-cover" />
      </div>
    </div>
  );
}

export default CTF;
