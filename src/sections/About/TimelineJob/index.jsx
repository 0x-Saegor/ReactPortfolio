// Timeline.jsx
import React from "react";
import TimelineItem from "../../../components/TimelineItem";
import superprof from "../../../assets/timeline/superprof.png";
import ng from "../../../assets/timeline/ng.png";
import echalotes from "../../../assets/timeline/echalotes.jpg";
import asten from "../../../assets/timeline/asten.png";

const experiences = [
  {
    title: "Professeur particulier mathématiques",
    company: "Freelance",
    date: "Mars 2025 - Aujourd'hui",
    logo: superprof,
    side: "left",
    points: [
      "J'aide les élèves à régler leurs difficultés avec les mathématiques à travers des exercices et des activités",
      "Utilisation de métaphores et comparaisons pour vulgariser les problèmes mathématiques",
    ],
  },
  {
    title: "Stage dans le domaine cyber, informatique, big data, innovation",
    company: "NAVAL GROUP",
    date: "Avril 2023 - Avril 2023",
    logo: ng,
    side: "right",
    points: [
      "Approfondissement de la cybersécurité des systèmes embarqués et réseaux",
      "Développement d'applications et programmation dans le domaine industriel",
      "Découverte de la gestion de projet informatique, big data, agilité, innovation et design",
    ],
  },
  {
    title: "Agent agricole - ramassage d'échalotes",
    company: "SAS CABON Ploudaniel",
    date: "Juillet 2022 - Juillet 2022",
    logo: echalotes,
    side: "left",
    points: ["Ramassage d'échalotes durant l'été 2022 et l'été 2023"],
  },
  {
    title:
      "Stage de découverte des domaines de l'informatique et cybersécurité",
    company: "Groupe Asten",
    date: "Juillet 2021 - Juillet 2021",
    logo: asten,
    side: "right",
    points: [
      "Découverte du développement de logiciels et applications autour du big data",
      "Initiation à la cybersécurité et à l'hébergement/infogérance de données",
      "Conforté mon choix professionnel dans le domaine informatique et cybersécurité",
    ],
  },
];

const TimelineJob = () => {
  return (
    <div className="items-center text-center">
      <h1 className="text-3xl font-bold text-center">Mes expériences professionnelles</h1>
      <div className="relative max-w-5xl mx-auto py-6 px-4">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

        {experiences.map((exp, idx) => (
          <TimelineItem key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default TimelineJob;
