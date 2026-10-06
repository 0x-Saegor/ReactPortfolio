// Icônes fournies par skillicons.dev, regroupées par domaine
const groups = [
  { title: "Système & réseau", skills: ["linux", "kali", "bash", "nginx"] },
  { title: "Infra & DevOps", skills: ["docker", "kubernetes", "ansible", "prometheus", "grafana", "git"] },
  { title: "Développement", skills: ["golang", "python", "cpp", "java", "react", "vuejs", "mysql"] },
];

const names = {
  linux: "Linux",
  kali: "Kali Linux",
  bash: "Bash",
  nginx: "Nginx",
  docker: "Docker",
  kubernetes: "Kubernetes",
  ansible: "Ansible",
  prometheus: "Prometheus",
  grafana: "Grafana",
  git: "Git",
  golang: "Go",
  python: "Python",
  cpp: "C++",
  java: "Java",
  react: "React",
  vuejs: "Vue",
  mysql: "MySQL",
};

const SkillIcons = () => {
  return (
    <div className="flex flex-col gap-6">
      {groups.map((group) => (
        <div key={group.title}>
          <p className="mb-3 text-sm font-semibold text-ink">{group.title}</p>
          <ul className="flex flex-wrap gap-3">
            {group.skills.map((skill) => (
              <li key={skill} className="group relative">
                <img
                  src={`https://skillicons.dev/icons?i=${skill}`}
                  alt={names[skill]}
                  title={names[skill]}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-12 w-12 transition-transform duration-200 group-hover:-translate-y-0.5"
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
