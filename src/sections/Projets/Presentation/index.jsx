import PropTypes from "prop-types";
import { Github, BookOpen } from "lucide-react";
import projets from "../../../assets/projets";
import { OriginBadge } from "../../../components/CardProjects";
import Reveal from "../../../components/Reveal";
import { useLang } from "../../../utils/i18n";

function Presentation({ projectId, reverse = false }) {
  const { t } = useLang();
  const projet = projets.find((p) => p.id === projectId);
  if (!projet) return null;
  const shot = projet.screenshots?.[0];

  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-16">
      <div className={`flex flex-col items-center gap-10 md:gap-16 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <Reveal className="w-full md:w-1/2">
          <div className="flex items-center gap-3">
            <OriginBadge projet={projet} />
            <span className="text-sm text-muted">{projet.year}</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">{t(projet.title)}</h2>
          <p className="mt-4 leading-relaxed text-muted">{t(projet.description)}</p>
          <ul className="mt-5 space-y-2">
            {projet.points.map((point) => (
              <li key={t(point)} className="flex gap-3 text-sm leading-relaxed md:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{t(point)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            {projet.url && (
              <a
                href={projet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover"
              >
                <Github size={16} />
                {t({ fr: "Code sur GitHub", en: "Code on GitHub" })}
              </a>
            )}
            {projet.blog && (
              <a
                href={projet.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <BookOpen size={16} />
                {t({ fr: "Article de blog", en: "Blog post" })}
              </a>
            )}
          </div>
        </Reveal>
        {shot && (
          <Reveal className="w-full md:w-1/2" delay={120}>
            <img
              src={shot.src}
              alt={t(shot.alt)}
              loading="lazy"
              className="w-full rounded-2xl border border-line shadow-soft"
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}

Presentation.propTypes = {
  projectId: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default Presentation;
