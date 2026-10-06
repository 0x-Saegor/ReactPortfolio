import TimelineItem from "../../../components/TimelineItem";
import SectionTitle from "../../../components/SectionTitle";
import superprof from "../../../assets/timeline/superprof.png";
import ng from "../../../assets/timeline/ng.png";
import echalotes from "../../../assets/timeline/echalotes.jpg";
import asten from "../../../assets/timeline/asten.png";
import alcatel from "../../../assets/timeline/alcatel.jpg";

const experiences = [
  {
    title: "Développeur logiciel en alternance",
    company: "Alcatel-Lucent Enterprise, Brest",
    date: "Juillet 2025 - Aujourd'hui",
    logo: alcatel,
    points: [
      "Backend Go et frontend Vue pour un panneau de configuration réseau (DNS, DHCP, NTP)",
      "Déploiement automatisé avec Ansible, contrôle de checksum et rollback en cas d'échec",
      "Maintenance d'un service interne : Vue, Sails et application mobile React Native",
      "Conteneurisation Docker et déploiement sur Kubernetes",
    ],
  },
  {
    title: "Réserviste, brigadier de réserve",
    company: "Gendarmerie Nationale",
    date: "Mars 2026 - Aujourd'hui",
    points: [
      "Interventions ponctuelles en équipe sur les dispositifs de la Gendarmerie du Finistère",
    ],
  },
  {
    title: "Professeur particulier de mathématiques",
    company: "Freelance (Superprof)",
    date: "Mars 2025 - Aujourd'hui",
    logo: superprof,
    points: [
      "J'aide les élèves à régler leurs difficultés avec les mathématiques à travers des exercices et des activités",
      "Utilisation de métaphores et comparaisons pour vulgariser les problèmes mathématiques",
    ],
  },
  {
    title: "Stage dans le domaine cyber, informatique, big data, innovation",
    company: "Naval Group, Brest",
    date: "Avril 2023",
    logo: ng,
    points: [
      "Approfondissement de la cybersécurité des systèmes embarqués et réseaux",
      "Développement d'applications et programmation dans le domaine industriel",
      "Découverte de la gestion de projet informatique, big data, agilité, innovation et design",
    ],
  },
  {
    title: "Agent agricole, ramassage d'échalotes",
    company: "SAS CABON Ploudaniel",
    date: "Étés 2022 et 2023",
    logo: echalotes,
    points: ["Ramassage d'échalotes durant l'été 2022 et l'été 2023"],
  },
  {
    title: "Stage de découverte de l'informatique et de la cybersécurité",
    company: "Groupe Asten",
    date: "Juillet 2021",
    logo: asten,
    points: [
      "Découverte du développement de logiciels et applications autour du big data",
      "Initiation à la cybersécurité et à l'hébergement/infogérance de données",
      "Conforté mon choix professionnel dans le domaine informatique et cybersécurité",
    ],
  },
];

const TimelineJob = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <SectionTitle eyebrow="Parcours" title="Mes expériences professionnelles" center />
      <ol className="relative">
        {/* ligne verticale : à gauche sur mobile, au centre sur desktop */}
        <span
          className="absolute bottom-0 left-6 top-0 w-px bg-line md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        />
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.title} {...exp} side={index % 2 === 0 ? "left" : "right"} />
        ))}
      </ol>
    </section>
  );
};

export default TimelineJob;
