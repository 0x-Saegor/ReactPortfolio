import TimelineItem from "../../../components/TimelineItem";
import SectionTitle from "../../../components/SectionTitle";
import { useLang } from "../../../utils/i18n";
import superprof from "../../../assets/timeline/superprof.png";
import ng from "../../../assets/timeline/ng.png";
import echalotes from "../../../assets/timeline/echalotes.jpg";
import asten from "../../../assets/timeline/asten.png";
import alcatel from "../../../assets/timeline/alcatel.jpg";
import gendarmerie from "../../../assets/timeline/gendarmerie.webp";

const experiences = [
  {
    title: { fr: "Développeur logiciel en alternance", en: "Work-study software developer" },
    company: "Alcatel-Lucent Enterprise, Brest",
    date: { fr: "Juillet 2025 - Aujourd'hui", en: "July 2025 - Present" },
    logo: alcatel,
    points: [
      {
        fr: "Backend Go et frontend Vue pour un panneau de configuration réseau (DNS, DHCP, NTP)",
        en: "Go backend and Vue frontend for a network configuration panel (DNS, DHCP, NTP)",
      },
      {
        fr: "Déploiement automatisé avec Ansible, contrôle de checksum et rollback en cas d'échec",
        en: "Automated deployment with Ansible, checksum verification and rollback on failure",
      },
      {
        fr: "Maintenance d'un service interne : Vue, Sails et application mobile React Native",
        en: "Maintenance of an internal service: Vue, Sails and a React Native mobile app",
      },
      {
        fr: "Conteneurisation Docker et déploiement sur Kubernetes",
        en: "Docker containerization and deployment on Kubernetes",
      },
    ],
  },
  {
    title: { fr: "Réserviste, brigadier de réserve", en: "Reservist, reserve corporal" },
    company: "Gendarmerie Nationale",
    date: { fr: "Mars 2026 - Aujourd'hui", en: "March 2026 - Present" },
    logo: gendarmerie,
    points: [
      {
        fr: "Interventions ponctuelles en équipe sur les dispositifs de la Gendarmerie du Finistère",
        en: "Occasional team deployments with the Gendarmerie in Finistère, Brittany",
      },
    ],
  },
  {
    title: { fr: "Professeur particulier de mathématiques", en: "Private math tutor" },
    company: "Freelance (Superprof)",
    date: { fr: "Mars 2025 - Aujourd'hui", en: "March 2025 - Present" },
    logo: superprof,
    points: [
      {
        fr: "J'aide les élèves à régler leurs difficultés avec les mathématiques à travers des exercices et des activités",
        en: "Helping students overcome their difficulties in math through exercises and activities",
      },
      {
        fr: "Utilisation de métaphores et comparaisons pour vulgariser les problèmes mathématiques",
        en: "Using metaphors and comparisons to make math problems easier to grasp",
      },
    ],
  },
  {
    title: {
      fr: "Stage dans le domaine cyber, informatique, big data, innovation",
      en: "Internship in cybersecurity, IT, big data and innovation",
    },
    company: "Naval Group, Brest",
    date: { fr: "Avril 2023", en: "April 2023" },
    logo: ng,
    points: [
      {
        fr: "Approfondissement de la cybersécurité des systèmes embarqués et réseaux",
        en: "Deeper look at cybersecurity for embedded systems and networks",
      },
      {
        fr: "Développement d'applications et programmation dans le domaine industriel",
        en: "Application development and programming in an industrial context",
      },
      {
        fr: "Découverte de la gestion de projet informatique, big data, agilité, innovation et design",
        en: "Introduction to IT project management, big data, agile, innovation and design",
      },
    ],
  },
  {
    title: { fr: "Agent agricole, ramassage d'échalotes", en: "Farm worker, shallot harvest" },
    company: "SAS CABON Ploudaniel",
    date: { fr: "Étés 2022 et 2023", en: "Summers 2022 and 2023" },
    logo: echalotes,
    points: [
      {
        fr: "Ramassage d'échalotes durant l'été 2022 et l'été 2023",
        en: "Shallot harvesting during the summers of 2022 and 2023",
      },
    ],
  },
  {
    title: {
      fr: "Stage de découverte de l'informatique et de la cybersécurité",
      en: "Discovery internship in IT and cybersecurity",
    },
    company: "Groupe Asten",
    date: { fr: "Juillet 2021", en: "July 2021" },
    logo: asten,
    points: [
      {
        fr: "Découverte du développement de logiciels et applications autour du big data",
        en: "Discovered software and application development around big data",
      },
      {
        fr: "Initiation à la cybersécurité et à l'hébergement/infogérance de données",
        en: "Introduction to cybersecurity and to data hosting and managed services",
      },
      {
        fr: "Conforté mon choix professionnel dans le domaine informatique et cybersécurité",
        en: "Confirmed my career choice in IT and cybersecurity",
      },
    ],
  },
];

const TimelineJob = () => {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <SectionTitle
        eyebrow={t({ fr: "Parcours", en: "Experience" })}
        title={t({ fr: "Mes expériences professionnelles", en: "Work experience" })}
        center
      />
      <ol className="relative">
        {/* ligne verticale : à gauche sur mobile, au centre sur desktop */}
        <span
          className="absolute bottom-0 left-6 top-0 w-px bg-line md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        />
        {experiences.map((exp, index) => (
          <TimelineItem
            key={exp.title.fr}
            title={t(exp.title)}
            company={exp.company}
            date={t(exp.date)}
            logo={exp.logo}
            points={exp.points.map(t)}
            side={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </ol>
    </section>
  );
};

export default TimelineJob;
