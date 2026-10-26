import interiutImg from "../../../assets/ctf/Interiut.webp";
import SectionTitle from "../../../components/SectionTitle";
import Reveal from "../../../components/Reveal";
import { useLang } from "../../../utils/i18n";
import { ctfData, rootme } from "../../../assets/ctf";

const maxPoints = Math.max(...rootme.categories.map((c) => c.points));

function CTF() {
  const { lang, t } = useLang();

  return (
    <section className="border-y border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionTitle
          title={t({ fr: "La cybersécurité en pratique", en: "Cybersecurity in practice" })}
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

          <Reveal className="border-t-2 border-ink pt-5">
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
                className="text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
              >
                {t({ fr: "Voir le profil", en: "View profile" })}
              </a>
            </div>
            <ul className="mt-6 space-y-3" aria-label={t({ fr: "Points par catégorie", en: "Points by category" })}>
              {rootme.categories.map((cat) => (
                <li key={cat.points} className="grid grid-cols-[7.5rem_minmax(0,1fr)_3rem] items-center gap-3 text-sm">
                  <span className="text-muted">{t(cat.name)}</span>
                  <span className="h-1.5 overflow-hidden bg-line" aria-hidden="true">
                    <span
                      className="bar-fill block h-full bg-accent"
                      style={{ "--value": cat.points / maxPoints }}
                    />
                  </span>
                  <span className="text-right font-medium tabular-nums text-ink">{cat.points}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted">{t({ fr: "Relevé d'octobre 2026.", en: "As of October 2026." })}</p>
          </Reveal>
        </div>

        <h3 className="mt-16 text-xl font-bold text-ink md:text-2xl">
          {t({ fr: "Compétitions CTF", en: "CTF competitions" })}
        </h3>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {ctfData.map((ctf) => (
            <li
              key={`${ctf.name}-${ctf.date.fr}`}
              className="grid gap-1 py-4 md:grid-cols-[9rem_minmax(0,1fr)_14rem] md:gap-6"
            >
              <span className="text-sm text-muted md:pt-0.5">{t(ctf.date)}</span>
              <div>
                <h3 className="font-semibold text-ink">
                  {ctf.name}
                  <span className="ml-2 text-sm font-normal text-muted">
                    {ctf.team ? t({ fr: "en équipe", en: "team" }) : "solo"}
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{t(ctf.description)}</p>
              </div>
              <span className="font-semibold tabular-nums text-ink md:text-right">{t(ctf.rank)}</span>
            </li>
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
              className="max-h-80 w-full rounded-md object-cover"
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
