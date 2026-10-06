import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { X, Github, ExternalLink, FileText, BookOpen } from "lucide-react";
import { OriginBadge } from "../CardProjects";
import { useLang } from "../../utils/i18n";

function LinkButton({ href, icon, children, primary = false }) {
  const Icon = icon;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
        primary
          ? "bg-accent text-on-accent hover:bg-accent-hover"
          : "border border-line text-ink hover:border-accent hover:text-accent"
      }`}
    >
      <Icon size={16} />
      {children}
    </a>
  );
}

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  children: PropTypes.node,
  primary: PropTypes.bool,
};

// Détail d'un projet dans une fenêtre <dialog> native (Échap pour fermer)
function ProjectDialog({ projet, onClose }) {
  const ref = useRef(null);
  const { t } = useLang();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (projet && !dialog.open) dialog.showModal();
    if (!projet && dialog.open) dialog.close();
  }, [projet]);

  const shots = projet?.screenshots ?? [];
  const phones = shots.length > 0 && shots.every((s) => s.phone);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby="project-dialog-title"
      className="project-dialog m-auto max-h-[90vh] w-[min(56rem,calc(100%-2rem))] overflow-y-auto rounded-2xl border border-line bg-surface p-0 text-ink shadow-soft"
    >
      {projet && (
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <OriginBadge projet={projet} />
                <span className="text-sm text-muted">{projet.year}</span>
              </div>
              <h2 id="project-dialog-title" className="mt-3 text-2xl font-bold md:text-3xl">
                {t(projet.title)}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={t({ fr: "Fermer", en: "Close" })}
              className="cursor-pointer rounded-full p-2 text-muted transition-colors hover:bg-accent-soft hover:text-accent"
            >
              <X size={22} />
            </button>
          </div>

          {shots.length > 0 && (
            <div className={`mt-6 ${phones ? "mx-auto grid max-w-xl grid-cols-3 gap-3 sm:gap-5" : "grid gap-4"}`}>
              {shots.map((shot) => (
                <img
                  key={shot.src}
                  src={shot.src}
                  alt={t(shot.alt)}
                  loading="lazy"
                  className="w-full rounded-xl border border-line"
                />
              ))}
            </div>
          )}

          <p className="mt-6 leading-relaxed text-muted">{t(projet.description)}</p>

          {projet.points?.length > 0 && (
            <ul className="mt-5 space-y-2">
              {projet.points.map((point) => (
                <li key={t(point)} className="flex gap-3 text-sm leading-relaxed md:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{t(point)}</span>
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-6 flex flex-wrap gap-2">
            {projet.tags.map((tag) => (
              <li key={t(tag)} className="rounded-md bg-bg-alt px-2.5 py-1 text-xs text-muted">
                {t(tag)}
              </li>
            ))}
          </ul>

          {(projet.url || projet.site || projet.blog || projet.report) && (
            <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
              {projet.site && (
                <LinkButton href={projet.site} icon={ExternalLink} primary>
                  {t({ fr: "Voir le site", en: "Visit the site" })}
                </LinkButton>
              )}
              {projet.url && (
                <LinkButton href={projet.url} icon={Github} primary={!projet.site}>
                  {t({ fr: "Code sur GitHub", en: "Code on GitHub" })}
                </LinkButton>
              )}
              {projet.blog && (
                <LinkButton href={projet.blog} icon={BookOpen}>
                  {t({ fr: "Article de blog", en: "Blog post" })}
                </LinkButton>
              )}
              {projet.report && (
                <LinkButton href={projet.report} icon={FileText}>
                  {t({ fr: "Rapport", en: "Report" })}
                </LinkButton>
              )}
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}

ProjectDialog.propTypes = {
  projet: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ProjectDialog;
