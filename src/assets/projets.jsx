import carcassonne from "./projects/carcassonne.png";
import captureCarcassonne from "./projects/captureCarcassonne.webp";

import marienbad from "./projects/marienbad.png";
import shiny from "./projects/shiny.png";
import data from "./projects/data.png";
import poc from "./projects/poc.png";
import wallhack from "./projects/wallhack.png";
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
        <ul className="list-disc pl-5 space-y-1">
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
    label: "Frontend en Vue et backend en Go, l'objectif est de pouvoir tester la solidité et la vitesse d'un réseau.",
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
    screenshot: wallhack,
    url: "https://github.com/0x-Saegor/Gamehacking-Journey",
    description: (
      <p>
        Ce projet documente mon parcours pratique autour du game hacking et de
        la rétro-ingénierie, en m'appuyant sur les contenus de Game Hacking
        Academy. L'objectif est double : comprendre le fonctionnement d'un jeu
        en mémoire et concevoir des techniques en C++ pour modifier son
        comportement.
        <br />
        <br />
        J'ai pu manipuler des outils classiques (Cheat Engine, x64dbg, Visual 
        Studio) et progresser étape par étape, de la simple manipulation mémoire 
        jusqu'aux hooks plus complexes intervenant sur le rendu du jeu.
        <br />
        <br />
        <strong>Points clés :</strong>{" "}
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Manipulation mémoire externe (OpenProcess, Read/WriteProcessMemory)</li>
          <li>Injection de DLL et manipulation de mémoire interne</li>
          <li>Mise en place de Code Caves avec détournement du flot d'exécution en assembleur</li>
          <li>Développement de Wallhacks par modification de mémoire ou interception de fonctions via un hook (OpenGL)</li>
          <li>
            Explications détaillées disponibles sur{" "}
            <a
              href="https://blog.arthurlg.fr/posts/gamehacking-journey/"
              target="_blank"
              className="underline text-blue-600 hover:text-blue-800"
            >
              mon article de blog
            </a>
          </li>
        </ul>
      </p>
    ),
  },
];

export default projets;
