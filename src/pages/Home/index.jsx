import Top from "../../sections/Home/Top";
import About from "../../sections/Home/About";
import Projects from "../../sections/Projects";
import SEO from "../../components/SEO";

function Home() {
  return (
    <>
      <SEO
        description="Portfolio de Arthur Le Gall, développeur logiciel en alternance chez Alcatel-Lucent Enterprise et étudiant en BUT Informatique à l'IUT de Vannes."
        path="/"
      />
      <Top />

      <About />

      <Projects max={3} />

    </>
  );
}

export default Home;
