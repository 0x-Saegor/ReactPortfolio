import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, Github, Linkedin, Flag } from "lucide-react";
import profile from "../../../assets/NoBG.webp";
import TypeWriter from "../../../components/TypeWriter";

const socials = [
  { href: "https://www.linkedin.com/in/arthur-le-gall-00116b266/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/0x-Saegor", label: "GitHub", icon: Github },
  { href: "https://www.root-me.org/0xSaegor", label: "Root-Me", icon: Flag },
];

function Top() {
  const [title, setTitle] = useState("");

  return (
    <section className="relative overflow-hidden border-b border-line bg-bg-alt">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-accent opacity-10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-12 md:min-h-[85vh] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 md:py-20">
        <div className="hero-in mx-auto w-52 sm:w-64 md:w-full md:max-w-sm">
          <div className="relative aspect-square overflow-hidden rounded-full bg-accent-soft ring-1 ring-line">
            <img
              src={profile}
              alt="Photo d'Arthur Le Gall"
              width={720}
              height={1080}
              fetchpriority="high"
              className="absolute inset-x-0 bottom-0 mx-auto w-[66%]"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="hero-in inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm font-medium text-ink shadow-soft" style={{ "--hero-delay": "80ms" }}>
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Recherche une alternance en cybersécurité · 2027-2030
          </p>

          <h1 className="hero-in mt-6 text-4xl font-bold tracking-tight text-ink md:text-6xl" style={{ "--hero-delay": "140ms" }}>
            Arthur Le Gall
          </h1>
          <p className="hero-in mt-3 h-9 text-xl font-semibold text-muted md:text-2xl" style={{ "--hero-delay": "200ms" }} aria-hidden="true">
            Je suis <span className="text-accent">{title}</span>
            <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-accent align-middle motion-reduce:animate-none" style={{ height: "1.1em" }} />
            <TypeWriter setTitle={setTitle} />
          </p>

          <p className="hero-in mx-auto mt-6 max-w-xl leading-relaxed text-muted md:mx-0 md:text-lg" style={{ "--hero-delay": "260ms" }}>
            Étudiant en 3<sup>e</sup> année de BUT Informatique à l'IUT de Vannes et
            développeur en alternance chez Alcatel-Lucent Enterprise. Après plusieurs
            années de programmation, je me spécialise en <strong className="text-ink">cybersécurité et développement logiciel</strong>.
            Je cherche une alternance en cybersécurité pour mon cycle d'ingénieur, de 2027 à 2030.
          </p>

          <div className="hero-in mt-8 flex flex-wrap justify-center gap-3 md:justify-start" style={{ "--hero-delay": "320ms" }}>
            <a
              href="mailto:arthurleg29@gmail.com?subject=Alternance%20cybers%C3%A9curit%C3%A9"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-on-accent shadow-soft transition-colors hover:bg-accent-hover"
            >
              <Mail size={18} />
              Me contacter
            </a>
            <Link
              to="/projects"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Voir mes projets
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <ul className="hero-in mt-6 flex justify-center gap-2 md:justify-start" style={{ "--hero-delay": "380ms" }}>
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
                  className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-accent"
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
