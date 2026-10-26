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
import shotInfraDns from "./projects/screens/infra-dns-spf-dkim.webp";
import shotInfraClamav from "./projects/screens/infra-clamav-eicar.webp";
import shotInfraRoundcube from "./projects/screens/infra-roundcube.webp";
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
// domain : "cyber" ou "dev", les projets cyber passent en premier
// featured : mis en avant sur l'accueil et en tête de la page projets
const projets = [
  {
    id: "infra-segmentee",
    domain: "cyber",
    title: { fr: "Infrastructure d'entreprise segmentée", en: "Segmented company infrastructure" },
    label: { fr: "Le réseau d'une petite entreprise monté de zéro : DMZ, LAN, VPN, pare-feu et services.", en: "A small company's network built from scratch: DMZ, LAN, VPN, firewall and services." },
    origin: "IUT",
    module: { fr: "Projet 3e année", en: "3rd-year project" },
    year: 2026,
    tags: ["nftables", "WireGuard", "BIND9", "Postfix", "Samba AD", "OpenLDAP", "Docker"],
    image: infra,
    screenshots: [
      { src: shotInfra, alt: { fr: "Test du chiffrement STARTTLS du serveur mail avec openssl", en: "Testing the mail server's STARTTLS encryption with openssl" } },
      { src: shotInfraDns, alt: { fr: "Zone DNS BIND9 avec les enregistrements MX, SPF, DKIM et DMARC", en: "BIND9 DNS zone with MX, SPF, DKIM and DMARC records" } },
      { src: shotInfraClamav, alt: { fr: "Fichier de test EICAR bloqué par ClamAV via Amavis", en: "EICAR test file blocked by ClamAV through Amavis" } },
      { src: shotInfraRoundcube, alt: { fr: "Webmail Roundcube : Alice reçoit le courriel de Bob", en: "Roundcube webmail: Alice receives Bob's email" } },
    ],
    featured: true,
    description:
      { fr: "Projet réalisé seul, sur plusieurs TP : un réseau d'entreprise segmenté en WAN, DMZ et LAN, sur lequel j'ai déployé les services qu'on attend en entreprise, en ne laissant passer que le strict nécessaire. Chaque étape est documentée dans un rapport.", en: "Solo project over several lab sessions: a company network split into WAN, DMZ and LAN, on which I deployed the services a company expects, letting through only what's strictly needed. Each step is documented in a report." },
    points: [
      { fr: "Routeur Alpine (NAT) et pare-feu nftables en refus par défaut : seuls le mail et le VPN sont ouverts vers la DMZ, et la DMZ ne peut pas joindre le LAN", en: "Alpine router (NAT) and nftables firewall with a default-deny policy: only mail and VPN are open to the DMZ, and the DMZ cannot reach the LAN" },
      { fr: "VPN WireGuard site à site", en: "Site-to-site WireGuard VPN" },
      { fr: "DNS faisant autorité avec BIND9, et SPF, DKIM (OpenDKIM) et DMARC pour la messagerie", en: "Authoritative DNS with BIND9, plus SPF, DKIM (OpenDKIM) and DMARC for email" },
      { fr: "Messagerie Postfix et Dovecot sous Docker, chiffrée en TLS, avec webmail Roundcube, antivirus ClamAV et antispam SpamAssassin via Amavis, testés avec EICAR et GTUBE", en: "Postfix and Dovecot mail server on Docker, TLS-encrypted, with Roundcube webmail, ClamAV antivirus and SpamAssassin through Amavis, tested with EICAR and GTUBE" },
      { fr: "Samba : partage de fichiers et d'imprimante, puis contrôleur de domaine Active Directory avec Kerberos, postes Windows dans le domaine et profils itinérants", en: "Samba: file and printer sharing, then an Active Directory domain controller with Kerberos, Windows clients joined to the domain and roaming profiles" },
      { fr: "Annuaires : OpenLDAP sécurisé en LDAPS, et NIS", en: "Directories: OpenLDAP secured with LDAPS, and NIS" },
    ],
  },
  {
    id: "audits",
    domain: "cyber",
    title: { fr: "Audits et pentest", en: "Audits and pentesting" },
    label: { fr: "Des machines menées de la reconnaissance au root, rédigées comme de vraies missions avec rapport et recommandations.", en: "Machines taken from recon to root, written up like real engagements with a report and recommendations." },
    origin: "IUT",
    module: { fr: "Projet 3e année", en: "3rd-year project" },
    year: 2026,
    tags: ["Pentest", "Web", "Linux", "Android", { fr: "Rapport", en: "Report" }],
    image: pentest,
    screenshots: [{ src: shotPentest, alt: { fr: "Terminal en fin d'audit sur la machine de laboratoire", en: "Terminal at the end of the audit on the lab machine" } }],
    featured: true,
    description:
      { fr: "Plusieurs TP d'audit en laboratoire, sur des cibles volontairement vulnérables : des machines Linux (Kioptrix, FristiLeaks), une application web et une application Android. Chaque machine est prise depuis l'extérieur et remontée jusqu'au root, puis l'exploitation est détaillée dans un rapport. Le plus formateur reste cette partie rédaction.", en: "Several lab audit assignments on intentionally vulnerable targets: Linux machines (Kioptrix, FristiLeaks), a web application and an Android app. Each machine is approached from the outside and escalated up to root, then the exploitation is detailed in a report. The most valuable part is the write-up." },
    points: [
      { fr: "Démarche complète : reconnaissance, analyse, exploitation, remédiation", en: "Full methodology: recon, analysis, exploitation, remediation" },
      { fr: "Kioptrix et FristiLeaks : RCE par upload, puis escalade de privilèges jusqu'au root", en: "Kioptrix and FristiLeaks: upload-based RCE, then privilege escalation up to root" },
      { fr: "Vulnérabilités classées par criticité, correction proposée pour chaque point", en: "Vulnerabilities ranked by severity, with remediation advice for every finding" },
      { fr: "Chaque machine détaillée pas à pas sur mon blog", en: "Each machine detailed step by step on my blog" },
    ],
    blog: [
      { href: "https://blog.arthurlg.fr/posts/fristileaks-exploitation/", label: { fr: "FristiLeaks", en: "FristiLeaks" } },
      { href: "https://blog.arthurlg.fr/posts/exploitation-kioptrix-level-2/", label: { fr: "Kioptrix Level 2", en: "Kioptrix Level 2" } },
    ],
  },
  {
    id: "gamehacking",
    domain: "cyber",
    title: "Gamehacking Journey",
    label: { fr: "Rétro-ingénierie et manipulation mémoire sur des jeux open source, en C++.", en: "Reverse engineering and memory manipulation on open source games, in C++." },
    origin: "Perso",
    year: 2026,
    featured: true,
    tags: ["C++", "WinAPI", "x64dbg", "Cheat Engine"],
    image: hacking,
    screenshots: [{ src: wallhack, alt: { fr: "Wallhack sur un jeu open source", en: "Wallhack on an open source game" } }],
    url: "https://github.com/0x-Saegor/Gamehacking-Journey",
    blog: "https://blog.arthurlg.fr/posts/gamehacking-journey/",
    description:
      { fr: "Ce projet documente mon parcours pratique autour du game hacking et de la rétro-ingénierie, en m'appuyant sur les contenus de Game Hacking Academy. L'objectif : comprendre le fonctionnement d'un jeu en mémoire et concevoir des techniques en C++ pour modifier son comportement.", en: "This project documents my hands-on journey into game hacking and reverse engineering, based on Game Hacking Academy. The goal: understand how a game works in memory and build C++ techniques to change its behavior." },
    points: [
      { fr: "Manipulation mémoire externe puis interne au processus", en: "External, then in-process memory manipulation" },
      { fr: "Code caves et détournement du flot d'exécution en assembleur", en: "Code caves and execution flow hijacking in assembly" },
      { fr: "Wallhacks par modification mémoire puis par hook du rendu OpenGL", en: "Wallhacks through memory patching, then by hooking OpenGL rendering" },
      { fr: "Outils : Cheat Engine, x64dbg, Visual Studio", en: "Tools: Cheat Engine, x64dbg, Visual Studio" },
    ],
  },
  {
    id: "transavia",
    domain: "dev",
    title: "Transavia France VA",
    label: { fr: "La plateforme d'une compagnie aérienne virtuelle sur le réseau IVAO, en production.", en: "The platform of a virtual airline on the IVAO network, in production." },
    origin: "Perso",
    year: 2026,
    tags: ["React", "Node.js", "Docker", "Nginx", "GitHub Actions"],
    image: transavia,
    screenshots: [{ src: shotTransavia, alt: { fr: "Page d'accueil de Transavia France VA", en: "Transavia France VA home page" } }],
    site: "https://transavia-france-va.fr",
    description:
      { fr: "Le site complet d'une communauté de pilotes virtuels : comptes via Discord, carnet de vols relié à FsHub, carte du trafic en direct et panneau d'administration.", en: "The full website of a virtual pilot community: Discord accounts, flight logbook synced with FsHub, live traffic map and admin panel." },
    points: [
      { fr: "API Express durcie : en-têtes de sécurité, limitation de débit, validation des entrées, rôles", en: "Hardened Express API: security headers, rate limiting, input validation, roles" },
      { fr: "Seul Nginx est exposé, l'API reste sur le réseau interne Docker", en: "Only Nginx is exposed, the API stays on the internal Docker network" },
      { fr: "Publication via Cloudflare Tunnel, sans port ouvert sur la machine", en: "Published through Cloudflare Tunnel, with no open port on the machine" },
      { fr: "Déploiement continu sur un runner GitHub Actions auto-hébergé", en: "Continuous deployment on a self-hosted GitHub Actions runner" },
      { fr: "Développé en partie avec Claude comme assistant, pour aller plus vite et lui confier les tâches répétitives", en: "Partly built with Claude as an assistant, to move faster and hand off repetitive tasks" },
    ],
  },
  {
    id: "defiut",
    domain: "dev",
    title: "Déf'IUT",
    label: { fr: "Une plateforme de challenges type CTF, du code jusqu'à la production. Équipe de quatre.", en: "A CTF-style challenge platform, from code to production. Team of four." },
    origin: "IUT",
    module: { fr: "Projet 2e année", en: "2nd-year project" },
    year: 2026,
    tags: ["React", "Node.js", "MySQL", "Caddy", "GitLab CI"],
    image: defiut,
    screenshots: [
      { src: shotDefiutHome, alt: { fr: "Page d'accueil de Déf'IUT avec les actualités", en: "Déf'IUT home page with the news feed" } },
      { src: shotDefiutChallenge, alt: { fr: "Page d'un challenge web avec soumission du flag et indices", en: "A web challenge page with flag submission and hints" } },
      { src: shotDefiut, alt: { fr: "Les deux runners GitLab du projet, Raspberry Pi et VPS", en: "The project's two GitLab runners, Raspberry Pi and VPS" } },
    ],
    description:
      { fr: "Classement, XP, collections et challenges servis dans leur propre conteneur. J'ai pris en charge l'essentiel de l'infrastructure et rédigé le guide d'installation.", en: "Leaderboard, XP, collections and challenges served in their own containers. I handled most of the infrastructure and wrote the installation guide." },
    points: [
      { fr: "Huit services Docker Compose, seul Caddy est exposé (HTTPS automatique)", en: "Eight Docker Compose services, only Caddy is exposed (automatic HTTPS)" },
      { fr: "Supervision Prometheus et Grafana, accessibles uniquement en interne", en: "Prometheus and Grafana monitoring, reachable internally only" },
      { fr: "Pipeline GitLab CI (validation, tests, déploiement) sur un Raspberry Pi et une VM Azure", en: "GitLab CI pipeline (validation, tests, deployment) to a Raspberry Pi and an Azure VM" },
      { fr: "JWT, bcrypt, CORS restreint, sauvegardes de la base avec rotation", en: "JWT, bcrypt, restricted CORS, rotating database backups" },
    ],
  },
  {
    id: "codebateau",
    domain: "dev",
    title: "Mon Code Bateau",
    label: { fr: "Application mobile de révision du permis bateau côtier, faite avec FlutterFlow.", en: "Mobile app to study for the French coastal boating license, built with FlutterFlow." },
    origin: "IUT",
    module: { fr: "Projet 2e année", en: "2nd-year project" },
    year: 2026,
    tags: ["FlutterFlow", "Firebase", "Firestore", "OpenWeather"],
    image: codebateau,
    screenshots: [
      { src: shotBateauConnexion, alt: { fr: "Écran de connexion", en: "Login screen" }, phone: true },
      { src: shotBateauSerie, alt: { fr: "Question d'une série d'entraînement", en: "A practice quiz question" }, phone: true },
      { src: shotBateauMeteo, alt: { fr: "Météo et marées en thème sombre", en: "Weather and tides in dark mode" }, phone: true },
    ],
    description:
      { fr: "Du cahier des charges (cas d'utilisation, diagrammes, planning) jusqu'à l'application : cours par thème, séries de vingt questions aléatoires, météo et marées géolocalisées.", en: "From the specifications (use cases, diagrams, schedule) to the app: lessons by topic, sets of twenty random questions, geolocated weather and tides." },
    points: [
      { fr: "Authentification Firebase par e-mail ou compte Google", en: "Firebase authentication by email or Google account" },
      { fr: "Questions et scores stockés dans Firestore", en: "Questions and scores stored in Firestore" },
      { fr: "Météo via l'API OpenWeather et la géolocalisation du téléphone", en: "Weather through the OpenWeather API and the phone's location" },
      { fr: "Un retour franc sur les limites du no-code dans le rapport", en: "An honest take on the limits of no-code in the report" },
    ],
  },
  {
    id: "challmaker",
    domain: "cyber",
    title: { fr: "Challmaker au Bl'Hack CTF", en: "Challmaker at Bl'Hack CTF" },
    label: { fr: "Conception de challenges pour le CTF de l'IUT de Vannes, édition 2025.", en: "Designing challenges for the IUT de Vannes CTF, 2025 edition." },
    origin: "Perso",
    year: 2025,
    tags: ["Reverse", "OSINT", "Go", "Python"],
    image: challmaker,
    screenshots: [{ src: shotBadEncryption, alt: { fr: "Graphe de désassemblage du challenge BadEncryption", en: "Disassembly graph of the BadEncryption challenge" } }],
    description:
      { fr: "Passer de l'autre côté oblige à se demander ce que le joueur voit vraiment dans un binaire, et combien d'indices il faut pour que ce soit dur sans être injuste. L'objectif : des challenges qu'on ne valide pas en les donnant simplement à une IA.", en: "Switching sides makes you think about what a player actually sees in a binary, and how many hints it takes to be hard without being unfair. The goal: challenges you can't solve just by handing them to an AI." },
    points: [
      { fr: "BadEncryption : un challenge de reverse engineering en Go, avec writeup", en: "BadEncryption: a reverse engineering challenge in Go, with a writeup" },
      { fr: "Voyage Temporel : une suite de quatre challenges OSINT, de facile à très difficile", en: "Voyage Temporel: a series of four OSINT challenges, from easy to very hard" },
      { fr: "Scoring dynamique, essais limités et indices sur la plateforme", en: "Dynamic scoring, limited attempts and hints on the platform" },
    ],
  },
  {
    id: "homelab",
    domain: "dev",
    title: "Homelab",
    label: { fr: "Un Raspberry Pi qui héberge et surveille mes projets, sans rien exposer directement.", en: "A Raspberry Pi that hosts and monitors my projects, without exposing anything directly." },
    origin: "Perso",
    year: 2025,
    tags: ["Linux", "Docker", "Cloudflare Tunnel", "Prometheus", "Grafana"],
    image: homelab,
    screenshots: [{ src: shotEssence, alt: { fr: "Carte des prix du carburant de essence.arthurlg.fr", en: "Fuel price map on essence.arthurlg.fr" } }],
    site: "https://essence.arthurlg.fr",
    description:
      { fr: "Ma machine de test et de pré-production. Tout tourne en conteneurs, les services passent par un tunnel et un reverse proxy.", en: "My test and staging machine. Everything runs in containers, services go through a tunnel and a reverse proxy." },
    points: [
      { fr: "Docker Compose, reverse proxy Caddy, Cloudflare Tunnel", en: "Docker Compose, Caddy reverse proxy, Cloudflare Tunnel" },
      { fr: "Supervision Prometheus et Grafana", en: "Prometheus and Grafana monitoring" },
      { fr: "Runners CI auto-hébergés pour GitHub Actions et GitLab CI", en: "Self-hosted CI runners for GitHub Actions and GitLab CI" },
      { fr: "Héberge notamment essence.arthurlg.fr, une PWA des prix du carburant", en: "Hosts essence.arthurlg.fr, a fuel price PWA" },
    ],
  },
  {
    id: "data-transfer",
    domain: "dev",
    title: "Data Transfer Server",
    label: { fr: "Frontend en Vue et backend en Go pour tester la fiabilité du suivi de trafic sur des switchs.", en: "Vue frontend and Go backend to test the reliability of traffic tracking on switches." },
    origin: "Alternance",
    year: 2025,
    tags: ["Go", "Vue", "Docker", "Kubernetes"],
    image: data,
    url: "https://github.com/0x-Saegor/data-transfer-server",
    description:
      { fr: "Mon projet d'intégration chez Alcatel-Lucent Enterprise : envoyer des fichiers de taille connue entre serveur et client pour vérifier ce que mesurent les outils de suivi réseau.", en: "My onboarding project at Alcatel-Lucent Enterprise: sending files of known size between server and client to check what network tracking tools measure." },
    points: [
      { fr: "Backend Go avec Gin, endpoints d'upload et de téléchargement", en: "Go backend with Gin, upload and download endpoints" },
      { fr: "Frontend Vue avec barres de progression et transferts prédéfinis", en: "Vue frontend with progress bars and preset transfers" },
      { fr: "Image Docker déployée sur un cluster Kubernetes", en: "Docker image deployed on a Kubernetes cluster" },
    ],
  },
  {
    id: "cluster-config",
    domain: "dev",
    title: "POC Cluster Config",
    label: { fr: "Configurer DNS et NTP sur un parc de machines depuis une interface web.", en: "Configuring DNS and NTP across a fleet of machines from a web interface." },
    origin: "IUT",
    module: { fr: "Projet 2e année", en: "2nd-year project" },
    year: 2025,
    tags: ["Go", "Vue", "Ansible"],
    image: poc,
    url: "https://github.com/0x-Saegor/POC-ClusterConfig",
    description:
      { fr: "Preuve de concept : un backend Go reçoit la configuration depuis une interface Vue et lance des playbooks Ansible sur les machines cibles.", en: "Proof of concept: a Go backend receives the configuration from a Vue interface and runs Ansible playbooks on the target machines." },
    points: [
      { fr: "Playbooks Ansible idempotents exécutés via SSH", en: "Idempotent Ansible playbooks run over SSH" },
      { fr: "Configuration DNS et NTP centralisée", en: "Centralized DNS and NTP configuration" },
    ],
  },
  {
    id: "wordpress",
    domain: "dev",
    title: "Carcassonne WordPress",
    label: { fr: "Le site fictif d'une ville, du serveur Linux sur Azure jusqu'à la boutique. Chef de projet.", en: "A fictional city website, from the Linux server on Azure to the online shop. Project lead." },
    origin: "IUT",
    module: { fr: "Projet 1re année", en: "1st-year project" },
    year: 2025,
    tags: ["Linux", "Apache", "MariaDB", "WordPress", "Azure"],
    image: carcassonne,
    screenshots: [{ src: captureCarcassonne, alt: { fr: "Page d'accueil du site de Carcassonne", en: "Home page of the Carcassonne website" } }],
    url: "https://github.com/0x-Saegor/CarcassonneWordpress",
    report: "https://github.com/user-attachments/files/18965226/CompteRenduSAE105.pdf",
    description:
      { fr: "Premier vrai projet d'équipe en BUT, à quatre. J'ai monté et maintenu le serveur en SSH, réparti le travail avec les issues GitLab et géré les demandes du groupe.", en: "My first real team project at university, with four people. I set up and maintained the server over SSH, split the work with GitLab issues and handled the team's requests." },
    points: [
      { fr: "VM Linux sur Azure : Apache, PHP, MariaDB, utilisateur de base aux droits limités", en: "Linux VM on Azure: Apache, PHP, MariaDB, least-privilege database user" },
      { fr: "Sauvegardes des fichiers et de la base versionnées sur GitLab", en: "File and database backups versioned on GitLab" },
      { fr: "Une quinzaine de pages, des articles et une boutique WooCommerce", en: "About fifteen pages, articles and a WooCommerce shop" },
      { fr: "Incident géré en cours de projet : serveur hors ligne, site restauré sur une nouvelle VM sans perte de données", en: "Incident handled mid-project: server went offline, site restored on a new VM with no data loss" },
    ],
  },
  {
    id: "secours",
    domain: "dev",
    title: "SafeEvent",
    label: { fr: "Application de gestion des secouristes sur les événements. Équipe de quatre.", en: "An app to manage first aiders at events. Team of four." },
    origin: "IUT",
    module: { fr: "Projet 1re année", en: "1st-year project" },
    year: 2025,
    tags: ["Java", "JavaFX", "MySQL", { fr: "Graphes", en: "Graphs" }],
    image: secours,
    screenshots: [{ src: shotSafeEvent, alt: { fr: "Création d'un dispositif de secours dans SafeEvent", en: "Creating a first aid deployment in SafeEvent" } }],
    url: "https://github.com/0x-Saegor/ApplicationSecouristes",
    description:
      { fr: "Application de bureau JavaFX en MVC sur une base MySQL distante : rôles, planning et affectation des secouristes aux postes par un algorithme sur les graphes. Un sujet que je connais de l'intérieur grâce à la Croix-Rouge.", en: "JavaFX desktop app in MVC with a remote MySQL database: roles, scheduling and assignment of first aiders to posts with a graph algorithm. A topic I know from the inside thanks to the Red Cross." },
    points: [
      { fr: "Architecture MVC et base de données distante", en: "MVC architecture and remote database" },
      { fr: "Affectation automatique selon les compétences (PSE1, PSE2...)", en: "Automatic assignment based on certifications (PSE1, PSE2...)" },
      { fr: "Près de 200 commits à quatre", en: "Nearly 200 commits as a team of four" },
    ],
  },
];

export const origins = ["Perso", "IUT", "Alternance"];
export const domains = ["cyber", "dev"];

export default projets;
