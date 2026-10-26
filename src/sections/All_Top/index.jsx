import PropTypes from "prop-types";

function All_Top({ page_name, children }) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:pb-14 md:pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-ink md:text-6xl">{page_name}</h1>
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
