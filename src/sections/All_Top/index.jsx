import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function All_Top({ page_name, children }) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-bg-alt">
      {/* halo décoratif discret */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent opacity-10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center md:py-28">
        <nav aria-label="Fil d'Ariane" className="mb-4 flex items-center gap-1 text-sm text-muted">
          <Link to="/" className="transition-colors hover:text-accent">
            Accueil
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-ink">{page_name}</span>
        </nav>
        <h1 className="text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">{page_name}</h1>
        {children && <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">{children}</p>}
      </div>
    </header>
  );
}

All_Top.propTypes = {
  page_name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default All_Top;
