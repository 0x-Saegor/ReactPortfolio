import Projects from "../../sections/Projects";
import All_Top from "../../sections/All_Top";
import Presentation from "../../sections/Projets/Presentation";
import SEO from "../../components/SEO";

function Projets() {
  return (
    <>
      <SEO
        title="Projets"
        description="Projets d'Arthur Le Gall : audits de sécurité, infrastructure sécurisée, rétro-ingénierie, challenges CTF, applications web et mobiles. Projets personnels, IUT et alternance."
        path="/projects"
      />
      <All_Top page_name="Mes projets">
        Cybersécurité et développement logiciel. Clique sur un projet pour voir le détail.
      </All_Top>

      <Presentation projectId="infra-segmentee" />

      <Presentation projectId="gamehacking" reverse={true} />

      <Projects />
    </>
  );
}

export default Projets;
