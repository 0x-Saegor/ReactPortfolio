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
                J'ai découvert l'informatique pendant mon stage de 3<sup>e</sup>. Au lycée,
                j'ai commencé les CTF, puis Root-Me et HackTheBox : c'est comme ça que je
                suis arrivé à la cybersécurité.
              </p>
              <p>
                En alternance chez Alcatel-Lucent Enterprise, je travaille en équipe sur un
                logiciel en production : développement, déploiement sur Kubernetes,
                correction de vulnérabilités. Au BUT, je suis le parcours déploiement
                d'applications communicantes et sécurisées.
              </p>
              <p>
                Après le BUT, je vise une école d'ingénieur en cybersécurité, en alternance.
                Je cherche une entreprise qui m'accueille dans une équipe sécurité pendant
                trois ans, de 2027 à 2030.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-4 leading-relaxed text-muted md:text-lg">
              <p>
                I discovered computer science during a school internship at 14. In high
                school I started doing CTFs, then Root-Me and HackTheBox: that's how I got
                into cybersecurity.
              </p>
              <p>
                As a work-study student at Alcatel-Lucent Enterprise, I work in a team on
                software running in production: development, deployment on Kubernetes,
                vulnerability fixes. At university I follow a track focused on secure
                networked applications.
              </p>
              <p>
                After my degree, I'm aiming for a cybersecurity engineering school as a
                work-study student. I'm looking for a company to host me in a security team
                for three years, from 2027 to 2030.
              </p>
            </div>
          )}
        </Reveal>
        <Reveal>
          <dl className="divide-y divide-line border-y-2 border-t-ink border-b-line">
            {facts.map((fact) => (
              <div key={fact.label.fr} className="py-4">
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
