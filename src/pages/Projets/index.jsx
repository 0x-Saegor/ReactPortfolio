import Projects from "../../sections/Projects";
import All_Top from "../../sections/All_Top";
import Presentation from "../../sections/Projets/Presentation";

function Projets() {
  return (
    <>
      <All_Top page_name="Mes projets" />

      <Presentation projectId={0} />

      <Projects max={0} />
    </>
  );
}

export default Projets;
