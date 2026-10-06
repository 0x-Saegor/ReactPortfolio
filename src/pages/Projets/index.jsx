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
          fr: "Projets d'Arthur Le Gall : audits de sécurité, infrastructure sécurisée, rétro-ingénierie, challenges CTF, applications web et mobiles. Projets personnels, IUT et alternance.",
          en: "Projects by Arthur Le Gall: security audits, secure infrastructure, reverse engineering, CTF challenges, web and mobile apps. Personal, university and work-study projects.",
        }}
        path="/projects"
      />
      <All_Top page_name={t({ fr: "Mes projets", en: "My projects" })}>
        {t({
          fr: "Cybersécurité et développement logiciel. Clique sur un projet pour voir le détail.",
          en: "Cybersecurity and software development. Click a project to see the details.",
        })}
      </All_Top>

      <Presentation projectId="infra-segmentee" />

      <Presentation projectId="gamehacking" reverse={true} />

      <Projects />
    </>
  );
}

export default Projets;
