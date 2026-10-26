// Compétitions, de la plus récente à la plus ancienne
export const ctfData = [
  {
    name: "Bl'Hack CTF, IUT de Vannes",
    date: { fr: "Décembre 2025", en: "December 2025" },
    rank: "Challmaker",
    description: {
      fr: "Création de challenges d'OSINT (suite de 4 challenges de Easy à Very Hard) et d'un challenge de reverse engineering en Go.",
      en: "Created OSINT challenges (a series of 4, from Easy to Very Hard) and a reverse engineering challenge in Go.",
    },
    team: false,
  },
  {
    name: "HelloWorld",
    date: { fr: "Septembre 2025", en: "September 2025" },
    rank: { fr: "4e / 19 équipes", en: "4th / 19 teams" },
    description: {
      fr: "Premier CTF au format box, organisé par GCC-ENSIBS et HACK2G2.",
      en: "First box-format CTF, organized by GCC-ENSIBS and HACK2G2.",
    },
    team: true,
  },
  {
    name: "404CTF",
    date: { fr: "Mai 2025", en: "May 2025" },
    rank: { fr: "159e / 2 893 participants", en: "159th / 2,893 players" },
    description: {
      fr: "Deuxième participation au CTF organisé par la DGSE et HackademINT.",
      en: "Second time at the CTF run by the DGSE (French intelligence) and HackademINT.",
    },
    team: false,
  },
  {
    name: "CTF InterIUT",
    date: { fr: "Mai 2025", en: "May 2025" },
    rank: { fr: "2e / 25 équipes", en: "2nd / 25 teams" },
    description: {
      fr: "Équipe Alt+kids de l'IUT de Vannes, 8 heures d'épreuves.",
      en: "Team Alt+kids from IUT de Vannes, 8 hours of challenges.",
    },
    team: true,
  },
  {
    name: "CTF IUT de Vannes",
    date: { fr: "Décembre 2024", en: "December 2024" },
    rank: { fr: "6e / 17 équipes", en: "6th / 17 teams" },
    description: { fr: "3e équipe parmi les premières années.", en: "3rd team among first-year students." },
    team: true,
  },
  {
    name: "Pass Ton Hack",
    date: { fr: "Février 2024", en: "February 2024" },
    rank: { fr: "3e / 270 équipes", en: "3rd / 270 teams" },
    description: { fr: "Compétition nationale de cybersécurité.", en: "National cybersecurity competition." },
    team: true,
  },
  {
    name: "NoBrackets CTF",
    date: { fr: "Novembre 2023", en: "November 2023" },
    rank: { fr: "4e / 70 équipes", en: "4th / 70 teams" },
    description: {
      fr: "Qualifiés pour la finale à l'European Cyber Week, encore au lycée.",
      en: "Qualified for the final at the European Cyber Week, while still in high school.",
    },
    team: true,
  },
  {
    name: "404CTF",
    date: { fr: "Mai 2023", en: "May 2023" },
    rank: { fr: "39e / 2 847 participants", en: "39th / 2,847 players" },
    description: {
      fr: "Mon premier CTF, organisé par la DGSE et Télécom SudParis.",
      en: "My first CTF, run by the DGSE and Télécom SudParis.",
    },
    team: false,
  },
];

// Points Root-Me par catégorie (relevé d'octobre 2026)
export const rootme = {
  score: { fr: "2 065", en: "2,065" },
  solved: 117,
  categories: [
    { name: { fr: "Web serveur", en: "Web server" }, points: 1025 },
    { name: { fr: "Réseau", en: "Network" }, points: 275 },
    { name: { fr: "Web client", en: "Web client" }, points: 170 },
    { name: "Forensic", points: 160 },
    { name: "Cracking", points: 150 },
    { name: { fr: "Stéganographie", en: "Steganography" }, points: 125 },
    { name: { fr: "Programmation", en: "Programming" }, points: 105 },
  ],
};
