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
    company: "Alcatel-Lucent Enterprise, R&D Brest",
    date: { fr: "Juillet 2025 - Aujourd'hui", en: "July 2025 - Present" },
    logo: alcatel,
    points: [
      {
        fr: "Équipe OmniVista Network Advisor (OVNA), un outil de supervision réseau qui détecte les anomalies avant qu'elles n'impactent les utilisateurs",
        en: "OmniVista Network Advisor (OVNA) team, a network monitoring tool that detects anomalies before they affect users",
      },
      {
        fr: "Portage de fonctionnalités vers la version intégrée au cloud OVCX, dont l'import/export d'anomalies réseau (NestJS et Go)",
        en: "Porting features to the version integrated into the OVCX cloud, including network anomaly import/export (NestJS and Go)",
      },
      {
        fr: "Micro-services orchestrés avec Kubernetes et Helm, messaging Apache Kafka, cache Redis",
        en: "Microservices orchestrated with Kubernetes and Helm, Apache Kafka messaging, Redis cache",
      },
      {
        fr: "Tests en conditions réelles : après les tests en local, je build l'image dans la CI/CD GitLab puis je remplace moi-même les images sur le cluster Kubernetes avec k9s, dans un environnement type production",
        en: "Real-world testing: after local tests, I build the image in GitLab CI/CD, then swap the images myself on the Kubernetes cluster with k9s, in a production-like environment",
      },
      {
        fr: "Sécurité en production : mise à jour des images Docker et des librairies Go/JS pour corriger les CVE publiques",
        en: "Production security: updating Docker images and Go/JS libraries to patch public CVEs",
      },
      {
        fr: "Fichiers traités entièrement en mémoire pour respecter un disque en lecture seule, imposé pour la sécurité",
        en: "Files processed entirely in memory to comply with a read-only disk, enforced for security",
      },
      {
        fr: "OmniVista on-premise : setup du logiciel en Vue et Go, configuration des serveurs (NTP) par playbooks Ansible avec checksum et rollback",
        en: "On-premise OmniVista: software setup in Vue and Go, server configuration (NTP) through Ansible playbooks with checksum and rollback",
      },
      {
        fr: "Asset Tracking : correction de bugs et maintenance de l'application mobile React Native",
        en: "Asset Tracking: bug fixes and maintenance of the React Native mobile app",
      },
      {
        fr: "Méthode agile en équipe : daily meetings pour remonter avancées et blocages, weekly meetings pour planifier la semaine, tickets YouTrack et entraide entre collègues",
        en: "Agile teamwork: daily meetings to share progress and blockers, weekly meetings to plan ahead, YouTrack tickets and helping teammates",
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
