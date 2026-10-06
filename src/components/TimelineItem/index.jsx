import PropTypes from "prop-types";
import Reveal from "../Reveal";

function Logo({ logo, company }) {
  if (logo) {
    return <img src={logo} alt="" className="h-9 w-9 object-contain" />;
  }
  // Pas de logo : initiales de l'organisme
  const initials = company
    .split(/\s+/)
    .filter((word) => word.length > 2)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
  return <span className="text-sm font-bold text-accent">{initials}</span>;
}

Logo.propTypes = {
  logo: PropTypes.string,
  company: PropTypes.string.isRequired,
};

// Élément de frise : logo sur la ligne, carte à gauche ou à droite (desktop)
const TimelineItem = ({ title, company, date, logo, points, side }) => {
  const isLeft = side === "left";

  return (
    <li className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-4 pb-8 md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:gap-0">
      <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white shadow-soft md:col-start-2 md:mx-auto">
        <Logo logo={logo} company={company} />
      </div>

      <Reveal
        className={`md:row-start-1 ${isLeft ? "md:col-start-1 md:pr-6 md:text-right" : "md:col-start-3 md:pl-6"}`}
      >
        <div className="rounded-2xl border border-line bg-surface p-5 shadow-soft transition duration-300 hover:border-accent">
          <p className="text-sm font-medium text-accent">{date}</p>
          <h3 className="mt-1 text-lg font-bold text-ink">{title}</h3>
          <p className="text-sm italic text-muted">{company}</p>
          <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </li>
  );
};

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  logo: PropTypes.string,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  side: PropTypes.oneOf(["left", "right"]),
};

export default TimelineItem;
