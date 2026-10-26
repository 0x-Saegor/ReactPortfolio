import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import projets, { domains } from "../../assets/projets.jsx";
import CardProject from "../../components/CardProjects";
import ProjectDialog from "../../components/ProjectDialog";
import SectionTitle from "../../components/SectionTitle";
import Reveal from "../../components/Reveal";
import { useLang } from "../../utils/i18n";

const filterLabels = {
  All: { fr: "Tous", en: "All" },
  cyber: { fr: "Cybersécurité", en: "Cybersecurity" },
  dev: { fr: "Développement", en: "Software development" },
};

// featured : n'affiche que les projets mis en avant, sans filtres (accueil)
function Projects({ featured = false }) {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const { t } = useLang();

  // Les projets cyber d'abord, l'ordre du fichier est gardé dans chaque groupe
  const sorted = [...projets].sort((a, b) => (a.domain === "cyber" ? 0 : 1) - (b.domain === "cyber" ? 0 : 1));
  const list = featured
    ? sorted.filter((p) => p.featured)
    : sorted.filter((p) => active === "All" || p.domain === active);

  const count = (domain) =>
    domain === "All" ? projets.length : projets.filter((p) => p.domain === domain).length;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      {featured ? (
        <SectionTitle
          title={t({ fr: "Projets en cybersécurité", en: "Cybersecurity projects" })}
        >
          {t({
            fr: "Test d'intrusion, infrastructure sécurisée, rétro-ingénierie. Les projets réalisés pendant le BUT sont marqués IUT avec l'année concernée.",
            en: "Penetration testing, secure infrastructure, reverse engineering. Projects done during my degree are tagged IUT with the year.",
          })}
        </SectionTitle>
      ) : (
        <Reveal className="mb-10 flex flex-wrap gap-2" role="group" aria-label={t({ fr: "Filtrer les projets", en: "Filter projects" })}>
          {["All", ...domains].map((origin) => (
            <button
              key={origin}
              type="button"
              onClick={() => setActive(origin)}
              aria-pressed={active === origin}
              className={`cursor-pointer rounded-md border px-4 py-1.5 text-sm font-medium transition-colors ${
                active === origin
                  ? "border-accent bg-accent text-on-accent"
                  : "border-line bg-surface text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {t(filterLabels[origin])}
              <span className="ml-1.5 opacity-70">{count(origin)}</span>
            </button>
          ))}
        </Reveal>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((projet) => (
          <Reveal key={projet.id}>
            <CardProject projet={projet} onOpen={setSelected} />
          </Reveal>
        ))}
      </div>

      {featured && (
        <Reveal className="mt-10">
          <Link
            to="/projects"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {t({ fr: "Voir tous les projets", en: "See all projects" })}
          </Link>
        </Reveal>
      )}

      <ProjectDialog projet={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

Projects.propTypes = {
  featured: PropTypes.bool,
};

export default Projects;
