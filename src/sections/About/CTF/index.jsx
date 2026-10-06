import { Trophy, Users, User, ExternalLink } from "lucide-react";
import interiutImg from "../../../assets/ctf/Interiut.webp";
import SectionTitle from "../../../components/SectionTitle";
import Reveal from "../../../components/Reveal";
import { useLang } from "../../../utils/i18n";

const ctfData = [
  {
    name: "Bl'Hack CTF, IUT de Vannes",
    date: { fr: "Décembre 2025", en: "December 2025" },
    rank: "Challmaker",
    description: {
      fr: "Création de challenges d'OSINT (suite de 4 challenges de Easy à Very Hard) et d'un challenge de reverse engineering en Go.",
      en: "Created OSINT challenges (a series of 4, from Easy to Very Hard) and a reverse engineering challenge in Go.",
    },
    team: false,
  },
  {
    name: "HelloWorld",
    date: { fr: "Septembre 2025", en: "September 2025" },
    rank: { fr: "4e / 19 équipes", en: "4th / 19 teams" },
    description: {
      fr: "Premier CTF au format box, organisé par GCC-ENSIBS et HACK2G2.",
      en: "First box-format CTF, organized by GCC-ENSIBS and HACK2G2.",
    },
    team: true,
  },
  {
    name: "404CTF",
    date: { fr: "Mai 2025", en: "May 2025" },
    rank: { fr: "159e / 2 893 participants", en: "159th / 2,893 players" },
    description: {
      fr: "Deuxième participation au CTF organisé par la DGSE et HackademINT.",
      en: "Second time at the CTF run by the DGSE (French intelligence) and HackademINT.",
    },
    team: false,
  },
  {
    name: "CTF InterIUT",
    date: { fr: "Mai 2025", en: "May 2025" },
    rank: { fr: "2e / 25 équipes", en: "2nd / 25 teams" },
    description: {
      fr: "Équipe Alt+kids de l'IUT de Vannes, 8 heures d'épreuves.",
      en: "Team Alt+kids from IUT de Vannes, 8 hours of challenges.",
    },
    team: true,
  },
  {
    name: "CTF IUT de Vannes",
    date: { fr: "Décembre 2024", en: "December 2024" },
    rank: { fr: "6e / 17 équipes", en: "6th / 17 teams" },
    description: { fr: "3e équipe parmi les premières années.", en: "3rd team among first-year students." },
    team: true,
  },
  {
    name: "Pass Ton Hack",
    date: { fr: "Février 2024", en: "February 2024" },
    rank: { fr: "3e / 270 équipes", en: "3rd / 270 teams" },
    description: { fr: "Compétition nationale de cybersécurité.", en: "National cybersecurity competition." },
    team: true,
  },
  {
    name: "NoBrackets CTF",
    date: { fr: "Novembre 2023", en: "November 2023" },
    rank: { fr: "4e / 70 équipes", en: "4th / 70 teams" },
    description: {
      fr: "Qualifiés pour la finale à l'European Cyber Week, encore au lycée.",
      en: "Qualified for the final at the European Cyber Week, while still in high school.",
    },
    team: true,
  },
  {
    name: "404CTF",
    date: { fr: "Mai 2023", en: "May 2023" },
    rank: { fr: "39e / 2 847 participants", en: "39th / 2,847 players" },
    description: {
      fr: "Mon premier CTF, organisé par la DGSE et Télécom SudParis.",
      en: "My first CTF, run by the DGSE and Télécom SudParis.",
    },
    team: false,
  },
];

// Points Root-Me par catégorie (relevé d'octobre 2026)
const rootme = {
  score: { fr: "2 065", en: "2,065" },
  solved: 117,
  categories: [
    { name: { fr: "Web serveur", en: "Web server" }, points: 1025 },
    { name: { fr: "Réseau", en: "Network" }, points: 275 },
    { name: { fr: "Web client", en: "Web client" }, points: 170 },
    { name: "Forensic", points: 160 },
    { name: "Cracking", points: 150 },
    { name: { fr: "Stéganographie", en: "Steganography" }, points: 125 },
    { name: { fr: "Programmation", en: "Programming" }, points: 105 },
  ],
};

const maxPoints = Math.max(...rootme.categories.map((c) => c.points));

function CTF() {
  const { lang, t } = useLang();

  return (
    <section className="border-y border-line bg-bg-alt">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionTitle
          eyebrow={t({ fr: "Cybersécurité", en: "Cybersecurity" })}
          title={t({ fr: "Compétitions CTF", en: "CTF competitions" })}
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16">
          {lang === "fr" ? (
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
          ) : (
            <Reveal className="space-y-4 leading-relaxed text-muted">
              <p>
                I got into CTFs (Capture The Flag, cybersecurity competitions with
                challenges across many categories) in 2023. It really feels like an
                escape game: every challenge works differently and pushes you to think
                harder.
              </p>
              <p>
                With AI, I find it less interesting to compete when opponents can
                solve challenges in seconds using agents. That's why I got into
                challmaking: a new way to rack my brain, with the goal of designing
                challenges that players can't solve with AI.
              </p>
              <p>
                I also took part in a box-format CTF with{" "}
                <a
                  href="https://gcc-ensibs.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover"
                >
                  GCC
                </a>
                : attacking a machine (HackTheBox style) and reporting the information
                found along the way. I found it more motivating in the age of AI, since
                it's much harder to throw agents at it.
              </p>
            </Reveal>
          )}

          <Reveal delay={120} className="rounded-2xl border border-line bg-surface p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-accent">Root-Me</p>
                <p className="mt-1 text-4xl font-bold text-ink">
                  {t(rootme.score)} <span className="text-base font-medium text-muted">points</span>
                </p>
                <p className="mt-1 text-sm text-muted">
                  {rootme.solved} {t({ fr: "challenges validés", en: "challenges solved" })}
                </p>
              </div>
              <a
                href="https://www.root-me.org/0xSaegor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {t({ fr: "Profil", en: "Profile" })}
                <ExternalLink size={14} />
              </a>
            </div>
            <ul className="mt-6 space-y-3" aria-label={t({ fr: "Points par catégorie", en: "Points by category" })}>
              {rootme.categories.map((cat) => (
                <li key={cat.points} className="grid grid-cols-[7.5rem_minmax(0,1fr)_3rem] items-center gap-3 text-sm">
                  <span className="text-muted">{t(cat.name)}</span>
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
            <p className="mt-5 text-xs text-muted">{t({ fr: "Relevé d'octobre 2026.", en: "As of October 2026." })}</p>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ctfData.map((ctf, index) => (
            <Reveal as="li" key={`${ctf.name}-${ctf.date.fr}`} delay={(index % 4) * 70}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent">
                <div className="flex items-center justify-between gap-2 text-xs text-muted">
                  <span>{t(ctf.date)}</span>
                  <span className="inline-flex items-center gap-1">
                    {ctf.team ? <Users size={14} /> : <User size={14} />}
                    {ctf.team ? t({ fr: "En équipe", en: "Team" }) : "Solo"}
                  </span>
                </div>
                <h3 className="mt-3 font-bold text-ink">{ctf.name}</h3>
                <p className="mt-1 inline-flex items-center gap-1.5 font-semibold text-accent">
                  <Trophy size={15} />
                  {t(ctf.rank)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(ctf.description)}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <figure>
            <img
              src={interiutImg}
              alt={t({
                fr: "L'équipe de l'IUT de Vannes au CTF InterIUT 2025",
                en: "The IUT de Vannes team at CTF InterIUT 2025",
              })}
              loading="lazy"
              className="max-h-80 w-full rounded-2xl object-cover shadow-soft"
            />
            <figcaption className="mt-3 text-center text-sm text-muted">
              {t({
                fr: "CTF InterIUT 2025, 2e sur 25 équipes avec l'IUT de Vannes",
                en: "CTF InterIUT 2025, 2nd out of 25 teams with IUT de Vannes",
              })}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export default CTF;
