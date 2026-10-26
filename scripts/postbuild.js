// Après le build : prépare dist/ pour GitHub Pages.
// - CNAME pour le domaine
// - 404.html pour les routes inconnues (rendu côté navigateur)
// - une page HTML pré-rendue par route : le contenu est dans le HTML servi
//   (en 200), avec le titre, la description et l'URL canonique de la page,
//   pour que tous les moteurs et les aperçus de liens voient la vraie page
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const DIST = "dist";
const SERVER = "dist-server";
const routes = ["/", "/about", "/projects"];

const { render } = await import(pathToFileURL(resolve(SERVER, "entry-server.js")).href);

const template = readFileSync(join(DIST, "index.html"), "utf8");

writeFileSync(join(DIST, "CNAME"), "arthurlg.fr\n");
writeFileSync(join(DIST, "404.html"), template);

// Balises propres à chaque page : celles du composant SEO remplacent celles du modèle
const managed = [
  /\s*<title>[^<]*<\/title>/,
  /\s*<meta name="description"[^>]*>/,
  /\s*<link rel="canonical"[^>]*>/,
  /\s*<meta property="og:(title|description|url|locale)"[^>]*>/g,
  /\s*<meta name="twitter:(title|description)"[^>]*>/g,
];
const base = managed.reduce((html, pattern) => html.replace(pattern, ""), template);

// React 19 place les <title>, <meta> et <link> de la page en tête du rendu :
// on les déplace dans le <head>, où l'hydratation les retrouve
const hoisted = /^(?:<title>[^<]*<\/title>|<(?:meta|link)\b[^>]*\/?>)*/;

for (const route of routes) {
  const rendered = render(route);
  const head = rendered.match(hoisted)[0];
  const body = rendered.slice(head.length);
  const page = base
    .replace("</head>", `    ${head.replace(/></g, ">\n    <")}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  // GitHub Pages sert /about depuis about.html, sans redirection vers /about/
  const file = join(DIST, route === "/" ? "index.html" : `${route.slice(1)}.html`);
  writeFileSync(file, page);
  console.log(`postbuild: ${file}`);
}

rmSync(SERVER, { recursive: true, force: true });
