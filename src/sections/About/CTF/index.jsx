import { Trophy, Users, User, ExternalLink } from "lucide-react";
import interiutImg from "../../../assets/ctf/Interiut.webp";
import SectionTitle from "../../../components/SectionTitle";
import Reveal from "../../../components/Reveal";

const ctfData = [
  {
    name: "Bl'Hack CTF, IUT de Vannes",
    date: "Décembre 2025",
    rank: "Challmaker",
    description:
      "Création de challenges d'OSINT (suite de 4 challenges de Easy à Very Hard) et d'un challenge de reverse engineering en Go.",
    team: false,
  },
  {
    name: "HelloWorld",
    date: "Septembre 2025",
    rank: "4e / 19 équipes",
    description: "Premier CTF au format box, organisé par GCC-ENSIBS et HACK2G2.",
    team: true,
  },
  {
    name: "404CTF",
    date: "Mai 2025",
    rank: "159e / 2 893 participants",
    description: "Deuxième participation au CTF organisé par la DGSE et HackademINT.",
    team: false,
  },
  {
    name: "CTF InterIUT",
    date: "Mai 2025",
    rank: "2e / 25 équipes",
    description: "Équipe Alt+kids de l'IUT de Vannes, 8 heures d'épreuves.",
    team: true,
  },
  {
    name: "CTF IUT de Vannes",
    date: "Décembre 2024",
    rank: "6e / 17 équipes",
    description: "3e équipe parmi les premières années.",
    team: true,
  },
  {
    name: "Pass Ton Hack",
    date: "Février 2024",
    rank: "3e / 270 équipes",
    description: "Compétition nationale de cybersécurité.",
    team: true,
  },
  {
    name: "NoBrackets CTF",
    date: "Novembre 2023",
    rank: "4e / 70 équipes",
    description: "Qualifiés pour la finale à l'European Cyber Week, encore au lycée.",
    team: true,
  },
  {
    name: "404CTF",
    date: "Mai 2023",
    rank: "39e / 2 847 participants",
    description: "Mon premier CTF, organisé par la DGSE et Télécom SudParis.",
    team: false,
  },
];

// Points Root-Me par catégorie (relevé d'octobre 2026)
const rootme = {
  score: "2 065",
  solved: 117,
  categories: [
    { name: "Web serveur", points: 1025 },
    { name: "Réseau", points: 275 },
    { name: "Web client", points: 170 },
    { name: "Forensic", points: 160 },
    { name: "Cracking", points: 150 },
    { name: "Stéganographie", points: 125 },
    { name: "Programmation", points: 105 },
  ],
};

const maxPoints = Math.max(...rootme.categories.map((c) => c.points));

function CTF() {
  return (
    <section className="border-y border-line bg-bg-alt">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionTitle eyebrow="Cybersécurité" title="Compétitions CTF" />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16">
          <Reveal className="space-y-4 leading-relaxed text-muted">
            <p>
              Je me suis lancé dans les CTF (Capture The Flag, compétitions de
              cybersécurité contenant différents challenges de multiples catégories)
              en 2023. C'est vraiment comme un escape game : chaque challenge
              fonctionne différemment et force à toujours plus se creuser la tête.
            </p>
            <p>
              Avec l'arrivée de l'IA, je trouve moins intéressant de participer à des
              compétitions où nos adversaires peuvent valider des challenges en
              quelques secondes avec des agents. C'est pourquoi je me suis mis au
              challmaking : un nouveau moyen de me creuser la tête, l'objectif étant
              de concevoir des challenges que les joueurs ne puissent pas valider
              avec de l'IA.
            </p>
            <p>
              J'ai également participé à un CTF avec{" "}
              <a
                href="https://gcc-ensibs.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover"
              >
                GCC
              </a>{" "}
              au format box : attaquer une machine (à la HackTheBox) en fournissant
              les informations trouvées pendant l'attaque. J'ai trouvé ça plus
              motivant à l'ère de l'IA, car il est bien plus difficile d'y envoyer
              des agents.
            </p>
          </Reveal>

          <Reveal delay={120} className="rounded-2xl border border-line bg-surface p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-accent">Root-Me</p>
                <p className="mt-1 text-4xl font-bold text-ink">
                  {rootme.score} <span className="text-base font-medium text-muted">points</span>
                </p>
                <p className="mt-1 text-sm text-muted">{rootme.solved} challenges validés</p>
              </div>
              <a
                href="https://www.root-me.org/0xSaegor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Profil
                <ExternalLink size={14} />
              </a>
            </div>
            <ul className="mt-6 space-y-3" aria-label="Points par catégorie">
              {rootme.categories.map((cat) => (
                <li key={cat.name} className="grid grid-cols-[7.5rem_minmax(0,1fr)_3rem] items-center gap-3 text-sm">
                  <span className="text-muted">{cat.name}</span>
                  <span className="h-2 overflow-hidden rounded-full bg-bg-alt" aria-hidden="true">
                    <span
                      className="bar-fill block h-full rounded-full bg-accent"
                      style={{ "--value": cat.points / maxPoints }}
                    />
                  </span>
                  <span className="text-right font-medium text-ink">{cat.points}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted">Relevé d'octobre 2026.</p>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ctfData.map((ctf, index) => (
            <Reveal as="li" key={`${ctf.name}-${ctf.date}`} delay={(index % 4) * 70}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent">
                <div className="flex items-center justify-between gap-2 text-xs text-muted">
                  <span>{ctf.date}</span>
                  <span className="inline-flex items-center gap-1">
                    {ctf.team ? <Users size={14} /> : <User size={14} />}
                    {ctf.team ? "En équipe" : "Solo"}
                  </span>
                </div>
                <h3 className="mt-3 font-bold text-ink">{ctf.name}</h3>
                <p className="mt-1 inline-flex items-center gap-1.5 font-semibold text-accent">
                  <Trophy size={15} />
                  {ctf.rank}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{ctf.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <figure>
            <img
              src={interiutImg}
              alt="L'équipe de l'IUT de Vannes au CTF InterIUT 2025"
              loading="lazy"
              className="max-h-80 w-full rounded-2xl object-cover shadow-soft"
            />
            <figcaption className="mt-3 text-center text-sm text-muted">
              CTF InterIUT 2025, 2e sur 25 équipes avec l'IUT de Vannes
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export default CTF;
