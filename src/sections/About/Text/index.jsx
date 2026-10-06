import Reveal from "../../../components/Reveal";

const facts = [
  { label: "Formation", value: "BUT Informatique, IUT de Vannes (2024-2027)" },
  { label: "Alternance", value: "Développeur logiciel chez Alcatel-Lucent Enterprise" },
  { label: "Objectif", value: "Cycle ingénieur cybersécurité en alternance, 2027-2030" },
  { label: "À côté", value: "Réserviste Gendarmerie, secouriste PSE2, escalade" },
];

function Text() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-16">
        <Reveal>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">Un peu plus sur moi</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted md:text-lg">
            <p>
              Depuis toujours j'adore découvrir de nouvelles choses. Lorsque j'ai
              découvert l'informatique en classe de 3<sup>e</sup> avec un stage, j'ai
              tout de suite su que c'était un domaine qui me passionnerait. Depuis, je
              n'ai cessé d'apprendre, d'abord en développement, puis de plus en plus en
              cybersécurité.
            </p>
            <p>
              Mon alternance chez Alcatel-Lucent Enterprise m'apprend à travailler sur
              du vrai code en équipe, et mes deux dernières années de BUT m'ont fait
              travailler la sécurité et l'administration système. Les CTF, Root-Me
              et HackTheBox complètent le tout en pratique.
            </p>
            <p>
              Après le BUT, je vise une <strong className="text-ink">école d'ingénieur en alternance, spécialité cybersécurité</strong>.
              Je cherche donc une entreprise pour m'accueillir trois ans, de 2027 à 2030,
              au sein d'une équipe sécurité.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <dl className="divide-y divide-line rounded-2xl border border-line bg-surface shadow-soft">
            {facts.map((fact) => (
              <div key={fact.label} className="p-5">
                <dt className="text-sm font-semibold text-accent">{fact.label}</dt>
                <dd className="mt-1 text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export default Text;
