import Projects from "../../sections/Projects";
import All_Top from "../../sections/All_Top";
import Presentation from "../../sections/Projets/Presentation";
import SEO from "../../components/SEO";

function Projets() {
  return (
    <>
      <SEO
        title="Projets"
        description="Découvrez les projets de développement réalisés par Arthur Le Gall : applications web, IA, cybersécurité et plus."
        path="/projects"
      />
      <All_Top page_name="Mes projets" />

      <Presentation projectId={0} />

      <Presentation projectId={5} reverse={true} />

      <Projects max={0} />
    </>
  );
}

export default Projets;
