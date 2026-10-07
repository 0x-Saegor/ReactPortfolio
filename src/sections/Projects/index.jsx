import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import projets, { origins } from "../../assets/projets.jsx";
import CardProject from "../../components/CardProjects";
import ProjectDialog from "../../components/ProjectDialog";
import SectionTitle from "../../components/SectionTitle";
import Reveal from "../../components/Reveal";
import { useLang } from "../../utils/i18n";

const filterLabels = {
  All: { fr: "Tous", en: "All" },
  Perso: { fr: "Personnels", en: "Personal" },
  IUT: { fr: "IUT", en: "University" },
  Alternance: { fr: "Alternance", en: "Work-study" },
};

// featured : n'affiche que les projets mis en avant, sans filtres (accueil)
function Projects({ featured = false }) {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const { t } = useLang();

  const list = featured
    ? projets.filter((p) => p.featured)
    : projets.filter((p) => active === "All" || p.origin === active);

  const count = (origin) =>
    origin === "All" ? projets.length : projets.filter((p) => p.origin === origin).length;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      {featured ? (
        <SectionTitle
          eyebrow={t({ fr: "Projets", en: "Projects" })}
          title={t({ fr: "Quelques projets à la une", en: "Featured projects" })}
        >
          {t({
            fr: "Cybersécurité et développement logiciel. Les projets réalisés pendant le BUT sont marqués IUT avec l'année concernée.",
            en: "Cybersecurity and software development. Projects done during my degree are tagged IUT with the year.",
          })}
        </SectionTitle>
      ) : (
        <Reveal className="mb-10 flex flex-wrap gap-2" role="group" aria-label={t({ fr: "Filtrer les projets", en: "Filter projects" })}>
          {["All", ...origins].map((origin) => (
            <button
              key={origin}
              type="button"
              onClick={() => setActive(origin)}
              aria-pressed={active === origin}
              className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
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
        {list.map((projet, index) => (
          <Reveal key={projet.id} delay={(index % 3) * 80}>
            <CardProject projet={projet} onOpen={setSelected} />
          </Reveal>
        ))}
      </div>

      {featured && (
        <Reveal className="mt-10 text-center">
          <Link
            to="/projects"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-hover"
          >
            {t({ fr: "Voir tous les projets", en: "See all projects" })}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
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
