// Après le build : prépare dist/ pour GitHub Pages.
// - CNAME pour le domaine
// - 404.html pour les routes inconnues
// - une page HTML par route (servie en 200, avec son titre, sa description
//   et son URL canonique) pour que Google indexe correctement chaque page
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const SITE = "https://arthurlg.fr";

const routes = [
  {
    path: "/about",
    title: "À propos — Arthur Le Gall",
    description:
      "Parcours d'Arthur Le Gall : alternance chez Alcatel-Lucent Enterprise, BUT Informatique à l'IUT de Vannes, résultats en CTF et sur Root-Me. Recherche d'une alternance en cybersécurité de 2027 à 2030.",
  },
  {
    path: "/projects",
    title: "Projets — Arthur Le Gall",
    description:
      "Projets d'Arthur Le Gall : audits de sécurité, infrastructure sécurisée, rétro-ingénierie, challenges CTF, applications web et mobiles. Projets personnels, IUT et alternance.",
  },
];

const escape = (text) => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

const html = readFileSync(join(DIST, "index.html"), "utf8");

writeFileSync(join(DIST, "CNAME"), "arthurlg.fr\n");
writeFileSync(join(DIST, "404.html"), html);

for (const route of routes) {
  const url = `${SITE}${route.path}`;
  const description = escape(route.description);
  const page = html
    .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${route.title}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${route.title}$2`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`);

  // GitHub Pages sert /about depuis about.html, sans redirection vers /about/
  const file = join(DIST, `${route.path.slice(1)}.html`);
  writeFileSync(file, page);
  console.log(`postbuild: ${file}`);
}
