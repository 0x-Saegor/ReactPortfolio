import SectionTitle from "../../../components/SectionTitle";
import Reveal from "../../../components/Reveal";
import { useLang } from "../../../utils/i18n";
import sfnd from "../../../assets/timeline/sfnd.webp";
import iut from "../../../assets/timeline/iut.webp";

const studies = [
  {
    title: { fr: "BUT Informatique", en: "BUT Informatique (Computer Science degree)" },
    company: "IUT de Vannes, Université Bretagne Sud",
    date: { fr: "Sept. 2024 - Juin 2027", en: "Sept. 2024 - June 2027" },
    logo: iut,
    points: [
      {
        fr: "Parcours B : déploiement d'applications communicantes et sécurisées",
        en: "Track B: deployment of secure networked applications",
      },
      { fr: "En alternance depuis la deuxième année", en: "Work-study student since the second year" },
      {
        fr: "Troisième année : analyse et test d'intrusion, installation de services, virtualisation, chaîne de production",
        en: "Third year: security analysis and penetration testing, service deployment, virtualization, CI/CD",
      },
      {
        fr: "Projets en équipe : plateforme de challenges, applications web et mobiles",
        en: "Team projects: a challenge platform, web and mobile apps",
      },
    ],
  },
  {
    title: {
      fr: "Baccalauréat général, mention très bien",
      en: "French Baccalaureate, highest honors",
    },
    company: "Saint-François Notre-Dame, Lesneven",
    date: { fr: "Sept. 2021 - Juin 2024", en: "Sept. 2021 - June 2024" },
    logo: sfnd,
    points: [
      {
        fr: "Spécialités mathématiques et informatique (NSI)",
        en: "Majors in mathematics and computer science",
      },
      {
        fr: "Premiers CTF : 404CTF 2023 et finale du NoBrackets à l'European Cyber Week",
        en: "First CTFs: 404CTF 2023 and the NoBrackets final at the European Cyber Week",
      },
    ],
  },
];

const certifications = [
  "Cambridge English B2 (2024)",
  { fr: "Certificat Voltaire, 737 points (2023)", en: "Certificat Voltaire (French spelling), 737 points (2023)" },
  { fr: "PSE2, Croix-Rouge française", en: "PSE2 first aid, French Red Cross" },
];

const TimelineStudy = () => {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-5xl px-6 pb-8">
      <SectionTitle
        eyebrow={t({ fr: "Formation", en: "Education" })}
        title={t({ fr: "Mon parcours scolaire", en: "Education" })}
        center
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {studies.map((study, index) => (
          <Reveal key={study.title.fr} delay={index * 100}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-white">
                  <img src={study.logo} alt="" className="h-9 w-9 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-medium text-accent">{t(study.date)}</p>
                  <h3 className="text-lg font-bold text-ink">{t(study.title)}</h3>
                </div>
              </div>
              <p className="mt-3 text-sm italic text-muted">{study.company}</p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                {study.points.map((point) => (
                  <li key={point.fr}>{t(point)}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 flex flex-wrap justify-center gap-2">
        {certifications.map((cert) => (
          <span key={t(cert)} className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted">
            {t(cert)}
          </span>
        ))}
      </Reveal>
    </section>
  );
};

export default TimelineStudy;
