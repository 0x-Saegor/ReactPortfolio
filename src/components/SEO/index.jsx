import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SITE_URL = "https://arthurlg.fr";

function SEO({ title, description, path = "/" }) {
  const fullTitle = title
    ? `${title} — Arthur Le Gall`
    : "Arthur Le Gall — Développeur Logiciel | Portfolio";
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  path: PropTypes.string,
};

export default SEO;
