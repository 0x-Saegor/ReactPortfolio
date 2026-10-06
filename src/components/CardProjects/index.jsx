import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";

export function OriginBadge({ projet }) {
  const label = projet.origin === "IUT" && projet.module ? `IUT · ${projet.module}` : projet.origin;
  const style =
    projet.origin === "IUT"
      ? "bg-accent text-on-accent"
      : "bg-accent-soft text-accent";

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${style}`}>
      {label}
    </span>
  );
}

OriginBadge.propTypes = {
  projet: PropTypes.object.isRequired,
};

function CardProject({ projet, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(projet)}
      className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent"
    >
      <div className="aspect-[360/215] overflow-hidden">
        <img
          src={projet.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <OriginBadge projet={projet} />
          <span className="text-xs text-muted">{projet.year}</span>
        </div>
        <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-accent">
          {projet.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{projet.label}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-2">
          <ul className="flex flex-wrap gap-1.5">
            {projet.tags.slice(0, 3).map((tag) => (
              <li key={tag} className="rounded-md bg-bg-alt px-2 py-0.5 text-xs text-muted">
                {tag}
              </li>
            ))}
          </ul>
          <ArrowUpRight
            size={18}
            className="shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
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
