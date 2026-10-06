import PropTypes from "prop-types";
import Reveal from "../Reveal";

function SectionTitle({ eyebrow, title, children, center = false }) {
  return (
    <Reveal className={`mb-10 ${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-ink">{title}</h2>
      {children && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
          {children}
        </p>
      )}
    </Reveal>
  );
}

SectionTitle.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  center: PropTypes.bool,
};

export default SectionTitle;
