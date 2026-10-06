import SectionTitle from "../../../components/SectionTitle";
import Reveal from "../../../components/Reveal";
import sfnd from "../../../assets/timeline/sfnd.webp";
import iut from "../../../assets/timeline/iut.webp";

const studies = [
  {
    title: "BUT Informatique",
    company: "IUT de Vannes, Université Bretagne Sud",
    date: "Sept. 2024 - Juin 2027",
    logo: iut,
    points: [
      "Parcours B : déploiement d'applications communicantes et sécurisées",
      "En alternance depuis la deuxième année",
      "Troisième année : analyse et test d'intrusion, installation de services, virtualisation, chaîne de production",
      "Projets en équipe : plateforme de challenges, applications web et mobiles",
    ],
  },
  {
    title: "Baccalauréat général, mention très bien",
    company: "Saint-François Notre-Dame, Lesneven",
    date: "Sept. 2021 - Juin 2024",
    logo: sfnd,
    points: [
      "Spécialités mathématiques et informatique (NSI)",
      "Premiers CTF : 404CTF 2023 et finale du NoBrackets à l'European Cyber Week",
    ],
  },
];

const certifications = ["Cambridge English B2 (2024)", "Certificat Voltaire, 737 points (2023)", "PSE2, Croix-Rouge française"];

const TimelineStudy = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-8">
      <SectionTitle eyebrow="Formation" title="Mon parcours scolaire" center />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {studies.map((study, index) => (
          <Reveal key={study.title} delay={index * 100}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-white">
                  <img src={study.logo} alt="" className="h-9 w-9 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-medium text-accent">{study.date}</p>
                  <h3 className="text-lg font-bold text-ink">{study.title}</h3>
                </div>
              </div>
              <p className="mt-3 text-sm italic text-muted">{study.company}</p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                {study.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 flex flex-wrap justify-center gap-2">
        {certifications.map((cert) => (
          <span key={cert} className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted">
            {cert}
          </span>
        ))}
      </Reveal>
    </section>
  );
};

export default TimelineStudy;
