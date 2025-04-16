// Timeline.jsx
import React from "react";
import TimelineItem from "../../../components/TimelineItem";
import sfnd from "../../../assets/timeline/sfnd.png"
import iut from "../../../assets/timeline/iut.jpg"


const experiences = [
  {
    title: "Étudiant en BUT Informatique",
    company: "IUT de Vannes",
    date: "Sept. 2024 - Juin 2027",
    logo: iut,
    side: "right",
    points: [
      "Formation en informatique avec un focus sur le développement logiciel, les bases de données et les réseaux",
      "Participation à des projets collaboratifs et apprentissage des méthodologies agiles",
    ],
  },
  {
    title: "Baccalauréat général, Mathématiques et informatique",
    company: "Saint François Notre Dame Lesneven",
    date: "Sept. 2021 - Juin 2024",
    logo: sfnd,
    side: "left",
    points: [
      "Obtention du baccalauréat mention très bien",
      "Spécialisation en mathématiques et informatique avec des projets personnels",
    ],
  },
];

const TimelineJob = () => {
  return (
    <div className="my-50 items-center text-center"> 
      <h1 className="text-3xl font-bold text-center">Mon parcours scolaire</h1>
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
