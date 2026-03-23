import carcassonne from "./projects/carcassonne.png";
import captureCarcassonne from "./projects/captureCarcassonne.webp";

import marienbad from "./projects/marienbad.png";
import shiny from "./projects/shiny.png";
import data from "./projects/data.png";
import poc from "./projects/poc.png";
import hacking from "./projects/hacking.png";

const projets = [
  {
    title: "Carcassone WordPress",
    label:
      "Ce projet avait pour objectif de découvrir WordPress ainsi que d'étudier l'aspect économique d'une ville.",
    image: carcassonne,
    category: "Web",
    url: "https://github.com/0x-Saegor/CarcassonneWordpress",
    screenshot: captureCarcassonne,
    description: (
      <p>
        Pour ce projet, nous devions choisir une ville et en promouvoir
        l'attractivité ainsi que son économie. Nous avons opté pour Carcassonne,
        séduits par son patrimoine et son potentiel touristique.
        <br />
        <br />
        Ce projet nous a permis de découvrir WordPress, ses thèmes, ses
        extensions et la gestion d'un hébergement. Malgré les difficultés
        initiales, nous avons appris à maintenir le site, à collaborer
        efficacement à quatre, et à utiliser Git pour le suivi et la sauvegarde.
        <br />
        <br />
        <strong>Points clés :</strong>{" "}
        <ul className="list-disc list-inside">
          <li>La gestion du serveur et des sauvegardes</li>
          <li>
            Apprendre à débugger du PHP et du SQL suivant les problèmes
            rencontrés
          </li>
          <li>
            Travailler en collaboration à 4 étudiants en se répartissant les
            tâches
          </li>
          <li>
            Rédaction d'un dossier complet que vous retrouverez{" "}
            <a
              href="https://github.com/user-attachments/files/18965226/CompteRenduSAE105.pdf"
              target="_blank"
              className="underline text-blue-600 hover:text-blue-800"
            >
              ici
            </a>
          </li>
        </ul>
      </p>
    ),
  },
  {
    title: "Marienbad AI",
    label:
      "Ceci est une implémentation du jeu Marienbad avec une intelligence artificielle qui apprend par renforcement.",
    image: marienbad,
    category: "Programmation",
    url: "https://github.com/0x-Saegor/Marienbad-Reinforcement-AI",
  },
  {
    title: "Formation React",
    label:
      "Formation visant à apprendre ReactJS ainsi que l'utilisation d'une API Rest",
    image: shiny,
    category: "Web",
    url: "https://github.com/0x-Saegor/OpenClassroom-React-Formation",
  },
  {
    title: "Data Transfer Server",
    label: "Serveur de transfert de données performant et sécurisé.",
    category: "Web",
    image: data,
    url: "https://github.com/0x-Saegor/data-transfer-server",
  },
  {
    title: "POC Cluster Config",
    label: "Preuve de concept pour le déploiement et la configuration de cluster.",
    category: "Système",
    image: poc,
    url: "https://github.com/0x-Saegor/POC-ClusterConfig",
  },
  {
    title: "Gamehacking Journey",
    label: "Exploration, apprentissage et développement d'outils liés au game hacking.",
    category: "Cyber",
    image: hacking,
    url: "https://github.com/0x-Saegor/Gamehacking-Journey",
  },
];

export default projets;
