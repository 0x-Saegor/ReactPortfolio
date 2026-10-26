import Projects from "../../sections/Projects";
import All_Top from "../../sections/All_Top";
import Presentation from "../../sections/Projets/Presentation";
import SEO from "../../components/SEO";
import { useLang } from "../../utils/i18n";

function Projets() {
  const { t } = useLang();

  return (
    <>
      <SEO
        title={{ fr: "Projets", en: "Projects" }}
        description={{
          fr: "Projets d'Arthur Le Gall : audits et pentest, infrastructure réseau sécurisée, rétro-ingénierie, challenges CTF, applications web et mobiles.",
          en: "Projects by Arthur Le Gall: security audits and pentesting, secure network infrastructure, reverse engineering, CTF challenges, web and mobile apps.",
        }}
        path="/projects"
      />
      <All_Top page_name={t({ fr: "Mes projets", en: "My projects" })}>
        {t({
          fr: "Cybersécurité et développement logiciel. Cliquez sur un projet pour voir le détail.",
          en: "Cybersecurity and software development. Click a project to see the details.",
        })}
      </All_Top>

      <Presentation projectId="audits" />

      <Presentation projectId="infra-segmentee" reverse />

      <Presentation projectId="gamehacking" />

      <Projects />
    </>
  );
}

export default Projets;
