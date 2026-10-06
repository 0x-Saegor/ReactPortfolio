import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SkillIcons from "../../../components/SkillIcon";
import SectionTitle from "../../../components/SectionTitle";
import Reveal from "../../../components/Reveal";

const cyber = [
  "Audit et test d'intrusion",
  "Sécurité web",
  "Sécurité applicative",
  "Rétro-ingénierie",
  "OSINT",
  "Durcissement Linux",
];

function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionTitle eyebrow="À propos" title="Cybersécurité et développement logiciel">
            J'ai commencé par le code : applications web, outils en
            Python, puis du Go et du Vue en alternance. La cybersécurité, j'en fais
            depuis le lycée avec les CTF, et je l'ai prolongée en BUT avec le parcours
            déploiement d'applications communicantes et sécurisées.
          </SectionTitle>
          <Reveal>
            <p className="mb-3 text-sm font-semibold text-ink">Côté cyber</p>
            <ul className="flex flex-wrap gap-2">
              {cyber.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-hover"
            >
              Mon parcours et mes CTF
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={120} className="rounded-2xl border border-line bg-surface p-6 shadow-soft md:p-8">
          <h3 className="mb-6 text-lg font-bold text-ink">Les outils que j'utilise</h3>
          <SkillIcons />
        </Reveal>
      </div>
    </section>
  );
}

export default About;
