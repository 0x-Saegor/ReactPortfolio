// Vignettes (maquettes sur fond pastel)
import carcassonne from "./projects/carcassonne.png";
import data from "./projects/data.png";
import poc from "./projects/poc.png";
import hacking from "./projects/hacking.png";
import transavia from "./projects/transavia.png";
import homelab from "./projects/homelab.png";
import infra from "./projects/infra.png";
import pentest from "./projects/pentest.png";
import challmaker from "./projects/challmaker.png";
import defiut from "./projects/defiut.png";
import secours from "./projects/secours.png";
import codebateau from "./projects/codebateau.png";

// Captures affichées dans le détail d'un projet
import captureCarcassonne from "./projects/captureCarcassonne.webp";
import wallhack from "./projects/wallhack.webp";
import shotTransavia from "./projects/screens/transavia.webp";
import shotEssence from "./projects/screens/essence.webp";
import shotInfra from "./projects/screens/infra-starttls.webp";
import shotPentest from "./projects/screens/pentest-root.webp";
import shotBadEncryption from "./projects/screens/badencryption-graph.webp";
import shotDefiut from "./projects/screens/defiut-runners.webp";
import shotDefiutHome from "./projects/screens/defiut-home.webp";
import shotDefiutChallenge from "./projects/screens/defiut-challenge.webp";
import shotSafeEvent from "./projects/screens/safeevent.webp";
import shotBateauConnexion from "./projects/screens/codebateau-connexion.webp";
import shotBateauSerie from "./projects/screens/codebateau-serie.webp";
import shotBateauMeteo from "./projects/screens/codebateau-meteo.webp";

// origin : "Perso", "IUT" ou "Alternance"
// featured : mis en avant sur l'accueil et en tête de la page projets
const projets = [
  {
    id: "infra-segmentee",
    title: "Infrastructure d'entreprise segmentée",
    label: "Le réseau d'une petite entreprise monté de zéro : DMZ, LAN, VPN, pare-feu et services.",
    origin: "IUT",
    module: "R5.B.06",
    year: 2026,
    tags: ["nftables", "WireGuard", "BIND9", "Postfix", "Samba AD"],
    image: infra,
    screenshots: [{ src: shotInfra, alt: "Test du chiffrement STARTTLS du serveur mail avec openssl" }],
    featured: true,
    description:
      "Projet réalisé seul : concevoir un réseau segmenté en trois zones et y déployer les services qu'on attend en entreprise, en ne laissant passer que le strict nécessaire.",
    points: [
      "Routeur Alpine et pare-feu nftables, règles de filtrage service par service entre DMZ et LAN",
      "VPN WireGuard site à site",
      "DNS faisant autorité avec BIND9 (zone, enregistrements MX)",
      "Messagerie Postfix et Dovecot conteneurisée, chiffrée avec TLS",
      "Samba en contrôleur de domaine Active Directory avec Kerberos et postes Windows",
    ],
  },
  {
    id: "audits",
    title: "Audits de sécurité",
    label: "Trois audits rédigés comme de vraies missions, avec rapport et recommandations.",
    origin: "IUT",
    module: "Analyse & pentest",
    year: 2026,
    tags: ["Audit", "Web", "Linux", "Android", "Rapport"],
    image: pentest,
    screenshots: [{ src: shotPentest, alt: "Terminal en fin d'audit sur la machine de laboratoire" }],
    featured: true,
    description:
      "En laboratoire, sur des cibles volontairement vulnérables : une machine Linux, une application web et une application Android. Le plus formateur reste la partie rapport.",
    points: [
      "Démarche complète : reconnaissance, analyse, validation des failles",
      "Vulnérabilités classées par criticité",
      "Recommandations de correction pour chaque point relevé",
      "Article détaillé sur mon blog : l'audit de Kioptrix Level 2",
    ],
    blog: "https://blog.arthurlg.fr/posts/exploitation-kioptrix-level-2/",
  },
  {
    id: "transavia",
    title: "Transavia France VA",
    label: "La plateforme d'une compagnie aérienne virtuelle sur le réseau IVAO, en production.",
    origin: "Perso",
    year: 2026,
    tags: ["React", "Node.js", "Docker", "Nginx", "GitHub Actions"],
    image: transavia,
    screenshots: [{ src: shotTransavia, alt: "Page d'accueil de Transavia France VA" }],
    site: "https://transavia-france-va.fr",
    featured: true,
    description:
      "Le site complet d'une communauté de pilotes virtuels : comptes via Discord, carnet de vols relié à FsHub, carte du trafic en direct et panneau d'administration.",
    points: [
      "API Express durcie : en-têtes de sécurité, limitation de débit, validation des entrées, rôles",
      "Seul Nginx est exposé, l'API reste sur le réseau interne Docker",
      "Publication via Cloudflare Tunnel, sans port ouvert sur la machine",
      "Déploiement continu sur un runner GitHub Actions auto-hébergé",
      "Développé en partie avec Claude comme assistant, pour aller plus vite et lui confier les tâches répétitives",
    ],
  },
  {
    id: "defiut",
    title: "Déf'IUT",
    label: "Une plateforme de challenges type CTF, du code jusqu'à la production. Équipe de quatre.",
    origin: "IUT",
    module: "SAÉ 2e année",
    year: 2026,
    tags: ["React", "Node.js", "MySQL", "Caddy", "GitLab CI"],
    image: defiut,
    screenshots: [
      { src: shotDefiutHome, alt: "Page d'accueil de Déf'IUT avec les actualités" },
      { src: shotDefiutChallenge, alt: "Page d'un challenge web avec soumission du flag et indices" },
      { src: shotDefiut, alt: "Les deux runners GitLab du projet, Raspberry Pi et VPS" },
    ],
    description:
      "Classement, XP, collections et challenges servis dans leur propre conteneur. J'ai pris en charge l'essentiel de l'infrastructure et rédigé le guide d'installation.",
    points: [
      "Huit services Docker Compose, seul Caddy est exposé (HTTPS automatique)",
      "Supervision Prometheus et Grafana, accessibles uniquement en interne",
      "Pipeline GitLab CI (validation, tests, déploiement) sur un Raspberry Pi et une VM Azure",
      "JWT, bcrypt, CORS restreint, sauvegardes de la base avec rotation",
    ],
  },
  {
    id: "gamehacking",
    title: "Gamehacking Journey",
    label: "Rétro-ingénierie et manipulation mémoire sur des jeux open source, en C++.",
    origin: "Perso",
    year: 2026,
    tags: ["C++", "WinAPI", "x64dbg", "Cheat Engine"],
    image: hacking,
    screenshots: [{ src: wallhack, alt: "Wallhack sur un jeu open source" }],
    url: "https://github.com/0x-Saegor/Gamehacking-Journey",
    blog: "https://blog.arthurlg.fr/posts/gamehacking-journey/",
    description:
      "Ce projet documente mon parcours pratique autour du game hacking et de la rétro-ingénierie, en m'appuyant sur les contenus de Game Hacking Academy. L'objectif : comprendre le fonctionnement d'un jeu en mémoire et concevoir des techniques en C++ pour modifier son comportement.",
    points: [
      "Manipulation mémoire externe puis interne au processus",
      "Code caves et détournement du flot d'exécution en assembleur",
      "Wallhacks par modification mémoire puis par hook du rendu OpenGL",
      "Outils : Cheat Engine, x64dbg, Visual Studio",
    ],
  },
  {
    id: "codebateau",
    title: "Mon Code Bateau",
    label: "Application mobile de révision du permis bateau côtier, faite avec FlutterFlow.",
    origin: "IUT",
    module: "2e année",
    year: 2026,
    tags: ["FlutterFlow", "Firebase", "Firestore", "OpenWeather"],
    image: codebateau,
    screenshots: [
      { src: shotBateauConnexion, alt: "Écran de connexion", phone: true },
      { src: shotBateauSerie, alt: "Question d'une série d'entraînement", phone: true },
      { src: shotBateauMeteo, alt: "Météo et marées en thème sombre", phone: true },
    ],
    description:
      "Du cahier des charges (cas d'utilisation, diagrammes, planning) jusqu'à l'application : cours par thème, séries de vingt questions aléatoires, météo et marées géolocalisées.",
    points: [
      "Authentification Firebase par e-mail ou compte Google",
      "Questions et scores stockés dans Firestore",
      "Météo via l'API OpenWeather et la géolocalisation du téléphone",
      "Un retour franc sur les limites du no-code dans le rapport",
    ],
  },
  {
    id: "challmaker",
    title: "Challmaker au Bl'Hack CTF",
    label: "Conception de challenges pour le CTF de l'IUT de Vannes, édition 2025.",
    origin: "Perso",
    year: 2025,
    tags: ["Reverse", "OSINT", "Go", "Python"],
    image: challmaker,
    screenshots: [{ src: shotBadEncryption, alt: "Graphe de désassemblage du challenge BadEncryption" }],
    description:
      "Passer de l'autre côté oblige à se demander ce que le joueur voit vraiment dans un binaire, et combien d'indices il faut pour que ce soit dur sans être injuste. L'objectif : des challenges qu'on ne valide pas en les donnant simplement à une IA.",
    points: [
      "BadEncryption : un challenge de reverse engineering en Go, avec writeup",
      "Voyage Temporel : une suite de quatre challenges OSINT, de facile à très difficile",
      "Scoring dynamique, essais limités et indices sur la plateforme",
    ],
  },
  {
    id: "homelab",
    title: "Homelab",
    label: "Un Raspberry Pi qui héberge et surveille mes projets, sans rien exposer directement.",
    origin: "Perso",
    year: 2025,
    tags: ["Linux", "Docker", "Cloudflare Tunnel", "Prometheus", "Grafana"],
    image: homelab,
    screenshots: [{ src: shotEssence, alt: "Carte des prix du carburant de essence.arthurlg.fr" }],
    site: "https://essence.arthurlg.fr",
    description:
      "Ma machine de test et de pré-production. Tout tourne en conteneurs, les services passent par un tunnel et un reverse proxy.",
    points: [
      "Docker Compose, reverse proxy Caddy, Cloudflare Tunnel",
      "Supervision Prometheus et Grafana",
      "Runners CI auto-hébergés pour GitHub Actions et GitLab CI",
      "Héberge notamment essence.arthurlg.fr, une PWA des prix du carburant",
    ],
  },
  {
    id: "data-transfer",
    title: "Data Transfer Server",
    label: "Frontend en Vue et backend en Go pour tester la fiabilité du suivi de trafic sur des switchs.",
    origin: "Alternance",
    year: 2025,
    tags: ["Go", "Vue", "Docker", "Kubernetes"],
    image: data,
    url: "https://github.com/0x-Saegor/data-transfer-server",
    description:
      "Mon projet d'intégration chez Alcatel-Lucent Enterprise : envoyer des fichiers de taille connue entre serveur et client pour vérifier ce que mesurent les outils de suivi réseau.",
    points: [
      "Backend Go avec Gin, endpoints d'upload et de téléchargement",
      "Frontend Vue avec barres de progression et transferts prédéfinis",
      "Image Docker déployée sur un cluster Kubernetes",
    ],
  },
  {
    id: "cluster-config",
    title: "POC Cluster Config",
    label: "Configurer DNS et NTP sur un parc de machines depuis une interface web.",
    origin: "IUT",
    module: "SAÉ 2e année",
    year: 2025,
    tags: ["Go", "Vue", "Ansible"],
    image: poc,
    url: "https://github.com/0x-Saegor/POC-ClusterConfig",
    description:
      "Preuve de concept : un backend Go reçoit la configuration depuis une interface Vue et lance des playbooks Ansible sur les machines cibles.",
    points: [
      "Playbooks Ansible idempotents exécutés via SSH",
      "Configuration DNS et NTP centralisée",
    ],
  },
  {
    id: "wordpress",
    title: "Carcassonne WordPress",
    label: "Le site fictif d'une ville, du serveur Linux sur Azure jusqu'à la boutique. Chef de projet.",
    origin: "IUT",
    module: "SAÉ 1.05 / 1.06",
    year: 2025,
    tags: ["Linux", "Apache", "MariaDB", "WordPress", "Azure"],
    image: carcassonne,
    screenshots: [{ src: captureCarcassonne, alt: "Page d'accueil du site de Carcassonne" }],
    url: "https://github.com/0x-Saegor/CarcassonneWordpress",
    report: "https://github.com/user-attachments/files/18965226/CompteRenduSAE105.pdf",
    description:
      "Premier vrai projet d'équipe en BUT, à quatre. J'ai monté et maintenu le serveur en SSH, réparti le travail avec les issues GitLab et géré les demandes du groupe.",
    points: [
      "VM Linux sur Azure : Apache, PHP, MariaDB, utilisateur de base aux droits limités",
      "Sauvegardes des fichiers et de la base versionnées sur GitLab",
      "Une quinzaine de pages, des articles et une boutique WooCommerce",
      "Incident géré en cours de projet : serveur hors ligne, site restauré sur une nouvelle VM sans perte de données",
    ],
  },
  {
    id: "secours",
    title: "SafeEvent",
    label: "Application de gestion des secouristes sur les événements. Équipe de quatre.",
    origin: "IUT",
    module: "SAÉ 1re année",
    year: 2025,
    tags: ["Java", "JavaFX", "MySQL", "Graphes"],
    image: secours,
    screenshots: [{ src: shotSafeEvent, alt: "Création d'un dispositif de secours dans SafeEvent" }],
    url: "https://github.com/0x-Saegor/ApplicationSecouristes",
    description:
      "Application de bureau JavaFX en MVC sur une base MySQL distante : rôles, planning et affectation des secouristes aux postes par un algorithme sur les graphes. Un sujet que je connais de l'intérieur grâce à la Croix-Rouge.",
    points: [
      "Architecture MVC et base de données distante",
      "Affectation automatique selon les compétences (PSE1, PSE2...)",
      "Près de 200 commits à quatre",
    ],
  },
];

export const origins = ["Perso", "IUT", "Alternance"];

export default projets;
