import { useEffect, useState } from "react";
import { useLang } from "../../utils/i18n";

// Icônes fournies par skillicons.dev, regroupées par domaine
const groups = [
  { title: { fr: "Système & sécurité", en: "Systems & security" }, skills: ["linux", "kali", "windows", "bash", "raspberrypi", "nginx", "cloudflare"] },
  { title: "Infra & DevOps", skills: ["docker", "kubernetes", "ansible", "githubactions", "gitlab", "azure", "git"] },
  { title: { fr: "Langages", en: "Languages" }, skills: ["golang", "python", "java", "js", "ts", "php"] },
  { title: "Web", skills: ["react", "vuejs", "nodejs", "express", "fastapi", "tailwind"] },
  { title: { fr: "Bases de données", en: "Databases" }, skills: ["mysql", "sqlite", "mongodb"] },
];

const names = {
  linux: "Linux",
  kali: "Kali Linux",
  windows: "Windows",
  bash: "Bash",
  raspberrypi: "Raspberry Pi",
  nginx: "Nginx",
  cloudflare: "Cloudflare",
  docker: "Docker",
  kubernetes: "Kubernetes",
  ansible: "Ansible",
  githubactions: "GitHub Actions",
  gitlab: "GitLab CI",
  azure: "Azure",
  git: "Git",
  golang: "Go",
  python: "Python",
  java: "Java",
  js: "JavaScript",
  ts: "TypeScript",
  php: "PHP",
  react: "React",
  vuejs: "Vue",
  nodejs: "Node.js",
  express: "Express",
  fastapi: "FastAPI",
  tailwind: "Tailwind CSS",
  mysql: "MySQL",
  sqlite: "SQLite",
  mongodb: "MongoDB",
};

const SkillIcons = () => {
  const { t } = useLang();
  // Outil dont le nom est affiché après un tap (pas de survol sur mobile)
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const close = (e) => {
      if (!e.target.closest("[data-skill]")) setActive(null);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [active]);

  return (
    <div className="flex flex-col gap-6">
      {groups.map((group) => (
        <div key={t(group.title)}>
          <p className="mb-3 text-sm font-semibold text-ink">{t(group.title)}</p>
          <ul className="flex flex-wrap gap-2.5">
            {group.skills.map((skill) => (
              <li key={skill} className="relative">
                <button
                  type="button"
                  data-skill
                  onClick={() => setActive((current) => (current === skill ? null : skill))}
                  aria-label={names[skill]}
                  aria-expanded={active === skill}
                  className="group block cursor-pointer rounded-xl"
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${skill}`}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    className="h-10 w-10 transition-transform duration-200 group-hover:-translate-y-0.5"
                  />
                  <span
                    role="tooltip"
                    className={`pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs font-medium text-bg shadow-soft transition-opacity duration-150 ${
                      active === skill ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {names[skill]}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillIcons;
