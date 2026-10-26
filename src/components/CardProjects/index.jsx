import PropTypes from "prop-types";
import { useLang } from "../../utils/i18n";

const originLabels = {
  Perso: { fr: "Perso", en: "Personal" },
  IUT: { fr: "IUT", en: "University" },
  Alternance: { fr: "Alternance", en: "Work-study" },
};

export function OriginBadge({ projet }) {
  const { t } = useLang();
  const label =
    projet.origin === "IUT" && projet.module
      ? `IUT · ${t(projet.module)}`
      : t(originLabels[projet.origin]);
  const style =
    projet.origin === "IUT"
      ? "bg-accent text-on-accent"
      : "bg-accent-soft text-accent";

  return (
    <span className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold ${style}`}>
      {label}
    </span>
  );
}

OriginBadge.propTypes = {
  projet: PropTypes.object.isRequired,
};

function CardProject({ projet, onOpen }) {
  const { t } = useLang();
  // Vraie capture du projet ; l'ancienne image sert de repli s'il n'y en a pas
  const shots = projet.screenshots ?? [];
  const phones = shots.length > 0 && shots.every((s) => s.phone);
  return (
    <button
      type="button"
      onClick={() => onOpen(projet)}
      className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-line bg-surface text-left transition-colors duration-200 hover:border-accent"
    >
      <div className="aspect-[360/215] overflow-hidden border-b border-line bg-bg-alt">
        {phones ? (
          <div className="flex h-full items-start justify-center gap-3 px-4 pt-4">
            {shots.slice(0, 3).map((shot) => (
              <img
                key={shot.src}
                src={shot.src}
                alt=""
                loading="lazy"
                className="h-[115%] w-auto rounded-md border border-line"
              />
            ))}
          </div>
        ) : (
          <img
            src={shots[0]?.src ?? projet.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-left-top"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <OriginBadge projet={projet} />
          <span className="text-xs text-muted">{projet.year}</span>
        </div>
        <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-accent">
          {t(projet.title)}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{t(projet.label)}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-2">
          <ul className="flex flex-wrap gap-1.5">
            {projet.tags.slice(0, 3).map((tag) => (
              <li key={t(tag)} className="rounded-md bg-bg-alt px-2 py-0.5 text-xs text-muted">
                {t(tag)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </button>
  );
}

CardProject.propTypes = {
  projet: PropTypes.object.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default CardProject;
