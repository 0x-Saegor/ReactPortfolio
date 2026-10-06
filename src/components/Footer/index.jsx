import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFlag } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../../utils/i18n";

const links = [
  { href: "mailto:arthurleg29@gmail.com", label: "arthurleg29@gmail.com", icon: faEnvelope },
  { href: "https://www.linkedin.com/in/arthur-le-gall-00116b266/", label: "LinkedIn", icon: faLinkedin },
  { href: "https://github.com/0x-Saegor", label: "GitHub", icon: faGithub },
  { href: "https://www.root-me.org/0xSaegor", label: "Root-Me", icon: faFlag },
];

function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-24 border-t border-line bg-bg-alt">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2 md:gap-20">
        <div>
          <h2 className="mb-4 text-lg font-bold text-ink">{t({ fr: "Pourquoi ce site ?", en: "Why this site?" })}</h2>
          <div className="flex flex-col gap-y-3 text-sm leading-relaxed text-muted md:text-base">
            <p>
              {t({
                fr: "Ce portfolio rassemble mes projets, mon parcours et mes résultats en CTF. C'est aussi l'endroit où je montre ce qui m'anime : comprendre comment les systèmes fonctionnent, et comment on les protège.",
                en: "This portfolio brings together my projects, my background and my CTF results. It's also where I show what drives me: understanding how systems work, and how to protect them.",
              })}
            </p>
            <p>
              {t({
                fr: "Il est développé en React avec Vite et Tailwind, et déployé automatiquement sur GitHub Pages à chaque mise à jour.",
                en: "Built with React, Vite and Tailwind, and deployed automatically to GitHub Pages on every update.",
              })}
            </p>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-bold text-ink">{t({ fr: "Me contacter", en: "Contact" })}</h2>
          <ul className="flex flex-col gap-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-x-3 text-sm text-muted transition-colors hover:text-accent md:text-base"
                >
                  <FontAwesomeIcon icon={link.icon} className="w-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-line px-6 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} Arthur Le Gall
      </p>
    </footer>
  );
}

export default Footer;
