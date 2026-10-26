import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Flag } from "lucide-react";
import profile from "../../../assets/NoBG.webp";
import TypeWriter from "../../../components/TypeWriter";
import { useLang } from "../../../utils/i18n";

const socials = [
  { href: "https://www.linkedin.com/in/arthur-le-gall-00116b266/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/0x-Saegor", label: "GitHub", icon: Github },
  { href: "https://www.root-me.org/0xSaegor", label: "Root-Me", icon: Flag },
];

function Top() {
  const [title, setTitle] = useState("");
  const { lang, t } = useLang();

  return (
    <section className="border-b border-line bg-bg-alt">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-12 md:min-h-[80vh] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 md:py-20">
        <div className="hero-in mx-auto w-52 sm:w-64 md:w-full md:max-w-sm">
          <div className="relative aspect-square overflow-hidden rounded-full bg-accent-soft">
            <img
              src={profile}
              alt={t({ fr: "Photo d'Arthur Le Gall", en: "Photo of Arthur Le Gall" })}
              width={720}
              height={1080}
              fetchpriority="high"
              className="absolute inset-x-0 bottom-0 mx-auto w-[66%]"
            />
          </div>
        </div>

        <div className="hero-in text-left">
          <h1 className="text-5xl font-bold tracking-tight text-ink md:text-7xl">
            Arthur Le Gall
          </h1>
          <p className="mt-4 h-9 text-xl font-semibold text-muted md:text-2xl" aria-hidden="true">
            {t({ fr: "Je suis", en: "I'm" })} <span className="text-accent">{title}</span>
            <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-accent align-middle motion-reduce:animate-none" style={{ height: "1.1em" }} />
            <TypeWriter key={lang} setTitle={setTitle} />
          </p>

          <p className="mt-6 max-w-xl text-xl font-semibold leading-snug text-ink md:text-2xl">
            {t({
              fr: "Je cherche une alternance en cybersécurité pour mon cycle d'ingénieur, de 2027 à 2030.",
              en: "I'm looking for a cybersecurity work-study position for my engineering degree, from 2027 to 2030.",
            })}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted md:text-lg">
            {lang === "fr" ? (
              <>
                Je fais de la cybersécurité depuis le lycée : tests d'intrusion, rétro-ingénierie,
                OSINT et conception de challenges CTF. Étudiant en 3<sup>e</sup> année de BUT
                Informatique (parcours déploiement d'applications communicantes et sécurisées)
                à l'IUT de Vannes, je suis aussi développeur en alternance chez Alcatel-Lucent Enterprise.
              </>
            ) : (
              <>
                I've been doing cybersecurity since high school: penetration testing, reverse
                engineering, OSINT and CTF challenge design. Third-year Computer Science student
                (BUT Informatique, secure networked applications track) at IUT de Vannes, France,
                I'm also a work-study software developer at Alcatel-Lucent Enterprise.
              </>
            )}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={t({ fr: "mailto:arthurleg29@gmail.com?subject=Alternance%20cybers%C3%A9curit%C3%A9", en: "mailto:arthurleg29@gmail.com?subject=Cybersecurity%20work-study" })}
              className="rounded-md bg-accent px-5 py-3 font-medium text-on-accent transition-colors hover:bg-accent-hover"
            >
              {t({ fr: "Me contacter", en: "Contact me" })}
            </a>
            <a
              href="/CV_Arthur_LE-GALL.pdf"
              target="_blank"
              rel="noopener"
              className="rounded-md border border-ink/20 bg-surface px-5 py-3 font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {t({ fr: "Mon CV", en: "Resume (FR)" })}
            </a>
            <Link
              to="/projects"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-2 py-3 font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {t({ fr: "Mes projets cyber", en: "My security projects" })}
            </Link>
          </div>

          <ul className="mt-6 flex gap-1">
            {socials.map(({ href, label, icon }) => {
              const Icon = icon;
              return (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-md text-muted transition-colors hover:bg-accent-soft hover:text-accent"
                >
                  <Icon size={20} />
                </a>
              </li>
              );
            })}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Top;
