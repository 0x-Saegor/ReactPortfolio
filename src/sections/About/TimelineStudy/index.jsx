// Timeline.jsx
import React from "react";
import TimelineItem from "../../../components/TimelineItem";
import sfnd from "../../../assets/timeline/sfnd.png";
import iut from "../../../assets/timeline/iut.jpg";
import useTheme from "../../../utils/hooks";
import colors from "../../../utils/style/colors";

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

const TimelineStudy = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className="my-50 items-center text-center">
      <h1 className="text-3xl font-bold text-center">Mon parcours scolaire</h1>
      <div className="relative max-w-5xl mx-auto py-6 px-4 grid grid-cols-2 gap-5">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg border-3"
            style={{
              backgroundColor: theme === "light" ? colors.bg_light_3 : colors.bg_dark_4,
              borderColor: theme === "light" ? colors.primary : colors.button_hover_senary,
            }}
          >
            <h2 className="text-xl font-semibold">{exp.title}</h2>
            <p className="text-lg italic">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.date}</p>
            <ul className="text-left">
              {exp.points.map((point, pointIdx) => (
                <li key={pointIdx} className="mt-2">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineStudy;
