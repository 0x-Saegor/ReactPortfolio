// Icônes fournies par skillicons.dev, regroupées par domaine
const groups = [
  { title: "Système & sécurité", skills: ["linux", "kali", "windows", "bash", "raspberrypi", "nginx", "cloudflare"] },
  { title: "Infra & DevOps", skills: ["docker", "kubernetes", "ansible", "githubactions", "gitlab", "azure", "git"] },
  { title: "Langages", skills: ["golang", "python", "java", "js", "ts", "php"] },
  { title: "Web", skills: ["react", "vuejs", "nodejs", "express", "fastapi", "tailwind"] },
  { title: "Bases de données", skills: ["mysql", "sqlite", "mongodb"] },
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
  return (
    <div className="flex flex-col gap-6">
      {groups.map((group) => (
        <div key={group.title}>
          <p className="mb-3 text-sm font-semibold text-ink">{group.title}</p>
          <ul className="flex flex-wrap gap-2.5">
            {group.skills.map((skill) => (
              <li key={skill} className="group relative">
                <img
                  src={`https://skillicons.dev/icons?i=${skill}`}
                  alt={names[skill]}
                  title={names[skill]}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="h-10 w-10 transition-transform duration-200 group-hover:-translate-y-0.5"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillIcons;
