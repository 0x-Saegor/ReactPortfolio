import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SkillIcons from "../../../components/SkillIcon";
import SectionTitle from "../../../components/SectionTitle";
import Reveal from "../../../components/Reveal";
import { useLang } from "../../../utils/i18n";

const cyber = [
  { fr: "Audit et test d'intrusion", en: "Security audits and pentesting" },
  { fr: "Sécurité web", en: "Web security" },
  { fr: "Sécurité applicative", en: "Application security" },
  { fr: "Rétro-ingénierie", en: "Reverse engineering" },
  "OSINT",
  { fr: "Durcissement Linux", en: "Linux hardening" },
];

function About() {
  const { lang, t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionTitle
            eyebrow={t({ fr: "À propos", en: "About" })}
            title={t({ fr: "Cybersécurité et développement logiciel", en: "Cybersecurity and software development" })}
          >
            {lang === "fr"
              ? "J'ai commencé par le code : applications web, outils en Python, puis du Go et du Vue en alternance. La cybersécurité, j'en fais depuis le lycée avec les CTF, et je l'ai prolongée en BUT avec le parcours déploiement d'applications communicantes et sécurisées."
              : "I started with code: web apps, Python tools, then Go and Vue during my work-study. I've been doing cybersecurity since high school through CTFs, and I carried it on at university with a track focused on secure networked applications."}
          </SectionTitle>
          <Reveal>
            <p className="mb-3 text-sm font-semibold text-ink">{t({ fr: "Côté cyber", en: "Cybersecurity" })}</p>
            <ul className="flex flex-wrap gap-2">
              {cyber.map((item) => (
                <li
                  key={t(item)}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink"
                >
                  {t(item)}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-hover"
            >
              {t({ fr: "Mon parcours et mes CTF", en: "My background and CTFs" })}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={120} className="rounded-2xl border border-line bg-surface p-6 shadow-soft md:p-8">
          <h3 className="mb-6 text-lg font-bold text-ink">{t({ fr: "Les outils que j'utilise", en: "Tools I use" })}</h3>
          <SkillIcons />
        </Reveal>
      </div>
    </section>
  );
}

export default About;
