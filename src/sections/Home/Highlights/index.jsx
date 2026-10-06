import Reveal from "../../../components/Reveal";

const highlights = [
  { value: "2e", detail: "sur 25 équipes", label: "CTF InterIUT 2025" },
  { value: "3e", detail: "sur 270 équipes", label: "Pass Ton Hack 2024" },
  { value: "39e", detail: "sur 2 847 joueurs", label: "404CTF 2023" },
  { value: "2 065", detail: "points, 117 challenges", label: "Root-Me" },
];

function Highlights() {
  return (
    <section aria-label="Quelques résultats" className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {highlights.map((item, index) => (
          <Reveal as="li" key={item.label} delay={index * 80}>
            <div className="h-full rounded-2xl border border-line bg-surface p-5 shadow-soft md:p-6">
              <p className="text-3xl font-bold text-accent md:text-4xl">{item.value}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
              <p className="mt-3 font-semibold text-ink">{item.label}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export default Highlights;
