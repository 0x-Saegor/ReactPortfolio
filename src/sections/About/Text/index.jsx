import Reveal from "../../../components/Reveal";
import { useLang } from "../../../utils/i18n";

const facts = [
  {
    label: { fr: "Formation", en: "Education" },
    value: {
      fr: "BUT Informatique, parcours déploiement d'applications communicantes et sécurisées, IUT de Vannes (2024-2027)",
      en: "BUT Informatique (Computer Science), secure networked applications track, IUT de Vannes (2024-2027)",
    },
  },
  {
    label: { fr: "Alternance", en: "Work-study" },
    value: { fr: "Développeur logiciel chez Alcatel-Lucent Enterprise", en: "Software developer at Alcatel-Lucent Enterprise" },
  },
  {
    label: { fr: "Objectif", en: "Goal" },
    value: {
      fr: "Cycle ingénieur cybersécurité en alternance, 2027-2030",
      en: "Cybersecurity engineering degree as a work-study student, 2027-2030",
    },
  },
  {
    label: { fr: "À côté", en: "Outside work" },
    value: {
      fr: "Réserviste Gendarmerie, secouriste PSE2, escalade",
      en: "Gendarmerie reservist, certified first aider (PSE2), climbing",
    },
  },
];

function Text() {
  const { lang, t } = useLang();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-16">
        <Reveal>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            {t({ fr: "Un peu plus sur moi", en: "A bit more about me" })}
          </h2>
          {lang === "fr" ? (
            <div className="mt-6 space-y-4 leading-relaxed text-muted md:text-lg">
              <p>
                Depuis toujours j'adore découvrir de nouvelles choses. Lorsque j'ai
                découvert l'informatique en classe de 3<sup>e</sup> avec un stage, j'ai
                tout de suite su que c'était un domaine qui me passionnerait. Depuis, je
                n'ai cessé d'apprendre, en développement comme en cybersécurité, que je
                pratique depuis le lycée avec les CTF.
              </p>
              <p>
                Mon alternance chez Alcatel-Lucent Enterprise m'apprend à travailler sur
                du vrai code en équipe, et au BUT je suis le parcours déploiement
                d'applications communicantes et sécurisées. Les CTF, Root-Me
                et HackTheBox complètent le tout en pratique.
              </p>
              <p>
                Après le BUT, je vise une <strong className="text-ink">école d'ingénieur en alternance, spécialité cybersécurité</strong>.
                Je cherche donc une entreprise pour m'accueillir trois ans, de 2027 à 2030,
                au sein d'une équipe sécurité.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-4 leading-relaxed text-muted md:text-lg">
              <p>
                I've always loved discovering new things. When I first tried computer
                science during a school internship at 14, I knew right away it was a
                field I'd be passionate about. Since then I've kept learning, both in
                software development and in cybersecurity, which I've been practicing
                since high school through CTFs.
              </p>
              <p>
                My work-study at Alcatel-Lucent Enterprise teaches me to work on real
                code within a team, and at university I follow a track focused on
                secure networked applications. CTFs, Root-Me and HackTheBox complete
                it all with hands-on practice.
              </p>
              <p>
                After my degree, I'm aiming for an <strong className="text-ink">engineering school with a cybersecurity specialization, as a work-study student</strong>.
                I'm looking for a company to host me for three years, from 2027 to 2030,
                within a security team.
              </p>
            </div>
          )}
        </Reveal>
        <Reveal delay={120}>
          <dl className="divide-y divide-line rounded-2xl border border-line bg-surface shadow-soft">
            {facts.map((fact) => (
              <div key={fact.label.fr} className="p-5">
                <dt className="text-sm font-semibold text-accent">{t(fact.label)}</dt>
                <dd className="mt-1 text-ink">{t(fact.value)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export default Text;
