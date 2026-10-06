import Reveal from "../../../components/Reveal";
import { useLang } from "../../../utils/i18n";

const highlights = [
  { value: { fr: "2e", en: "2nd" }, detail: { fr: "sur 25 équipes", en: "out of 25 teams" }, label: "CTF InterIUT 2025" },
  { value: { fr: "3e", en: "3rd" }, detail: { fr: "sur 270 équipes", en: "out of 270 teams" }, label: "Pass Ton Hack 2024" },
  { value: { fr: "39e", en: "39th" }, detail: { fr: "sur 2 847 joueurs", en: "out of 2,847 players" }, label: "404CTF 2023" },
  { value: { fr: "2 065", en: "2,065" }, detail: { fr: "points, 117 challenges", en: "points, 117 challenges" }, label: "Root-Me" },
];

function Highlights() {
  const { t } = useLang();
  return (
    <section aria-label={t({ fr: "Quelques résultats", en: "Some results" })} className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {highlights.map((item, index) => (
          <Reveal as="li" key={item.label} delay={index * 80}>
            <div className="h-full rounded-2xl border border-line bg-surface p-5 shadow-soft md:p-6">
              <p className="text-3xl font-bold text-accent md:text-4xl">{t(item.value)}</p>
              <p className="mt-1 text-sm text-muted">{t(item.detail)}</p>
              <p className="mt-3 font-semibold text-ink">{item.label}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export default Highlights;
