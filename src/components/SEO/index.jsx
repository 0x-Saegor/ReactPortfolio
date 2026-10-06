import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { useLang } from "../../utils/i18n";

const SITE_URL = "https://arthurlg.fr";

const defaultTitle = {
  fr: "Arthur Le Gall — Cybersécurité et développement | Portfolio",
  en: "Arthur Le Gall — Cybersecurity and software development | Portfolio",
};

// title et description acceptent une chaîne ou un objet { fr, en }
function SEO({ title, description, path = "/" }) {
  const { lang, t } = useLang();
  const fullTitle = title ? `${t(title)} — Arthur Le Gall` : defaultTitle[lang];
  const text = t(description);
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={text} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={text} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={lang === "fr" ? "fr_FR" : "en_US"} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={text} />
    </Helmet>
  );
}

const textProp = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({ fr: PropTypes.string, en: PropTypes.string }),
]);

SEO.propTypes = {
  title: textProp,
  description: textProp.isRequired,
  path: PropTypes.string,
};

export default SEO;
