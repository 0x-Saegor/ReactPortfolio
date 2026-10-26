import { Link } from "react-router-dom";
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
            title={t({ fr: "Cybersécurité et développement logiciel", en: "Cybersecurity and software development" })}
          >
            {lang === "fr"
              ? "Je fais de la cybersécurité depuis le lycée avec les CTF, et je l'ai prolongée en BUT avec le parcours déploiement d'applications communicantes et sécurisées. Côté code, j'ai commencé par des applications web et des outils en Python, puis du Go et du Vue en alternance."
              : "I've been doing cybersecurity since high school through CTFs, and I carried it on at university with a track focused on secure networked applications. On the code side, I started with web apps and Python tools, then Go and Vue during my work-study."}
          </SectionTitle>
          <Reveal>
            <p className="mb-3 text-sm font-semibold text-ink">{t({ fr: "Côté cyber", en: "Cybersecurity" })}</p>
            <ul className="flex flex-wrap gap-2">
              {cyber.map((item) => (
                <li
                  key={t(item)}
                  className="rounded-md border border-line bg-surface px-3 py-1 text-sm text-ink"
                >
                  {t(item)}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-8 inline-block font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {t({ fr: "Mon parcours", en: "My background" })}
            </Link>
          </Reveal>
        </div>
        <Reveal className="border-t-2 border-ink pt-5">
          <h3 className="mb-6 text-lg font-bold text-ink">{t({ fr: "Les outils que j'utilise", en: "Tools I use" })}</h3>
          <SkillIcons />
        </Reveal>
      </div>
    </section>
  );
}

export default About;
