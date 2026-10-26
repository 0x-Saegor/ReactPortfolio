import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { useLang } from "../../../utils/i18n";
import { ctfData, rootme } from "../../../assets/ctf";

// Les compétitions de moins d'un an et demi, les plus anciennes restent sur /about
const recent = ctfData.filter((ctf) => /2025|2026/.test(ctf.date.en)).slice(0, 4);

function CTF() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
      <SectionTitle title={t({ fr: "CTF et Root-Me", en: "CTFs and Root-Me" })} />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
        <ul className="divide-y divide-line border-y border-line">
          {recent.map((ctf) => (
            <li
              key={`${ctf.name}-${ctf.date.fr}`}
              className="grid gap-1 py-4 md:grid-cols-[8rem_minmax(0,1fr)_auto] md:gap-6"
            >
              <span className="text-sm text-muted md:pt-0.5">{t(ctf.date)}</span>
              <div>
                <h3 className="font-semibold text-ink">{ctf.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{t(ctf.description)}</p>
              </div>
              <span className="font-semibold tabular-nums text-ink md:text-right">{t(ctf.rank)}</span>
            </li>
          ))}
        </ul>

        <div className="border-t-2 border-ink pt-5">
          <p className="text-sm font-semibold text-accent">Root-Me</p>
          <p className="mt-1 text-4xl font-bold tabular-nums text-ink">
            {t(rootme.score)} <span className="text-base font-medium text-muted">points</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            {rootme.solved} {t({ fr: "challenges validés", en: "challenges solved" })}
          </p>
          <div className="mt-6 flex flex-col items-start gap-3">
            <a
              href="https://www.root-me.org/0xSaegor"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {t({ fr: "Voir le profil Root-Me", en: "View Root-Me profile" })}
            </a>
            <Link
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {t({ fr: "Toutes mes compétitions", en: "All my competitions" })}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTF;
