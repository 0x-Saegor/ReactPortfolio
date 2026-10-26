import PropTypes from "prop-types";
import Reveal from "../Reveal";

function SectionTitle({ title, children, center = false }) {
  return (
    <Reveal className={`mb-10 ${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <h2 className="text-3xl md:text-4xl font-bold text-ink">{title}</h2>
      {children && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
          {children}
        </p>
      )}
    </Reveal>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  center: PropTypes.bool,
};

export default SectionTitle;
