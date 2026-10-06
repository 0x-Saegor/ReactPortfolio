import Top from "../../sections/Home/Top";
import Highlights from "../../sections/Home/Highlights";
import About from "../../sections/Home/About";
import Projects from "../../sections/Projects";
import SEO from "../../components/SEO";

function Home() {
  return (
    <>
      <SEO
        description="Portfolio d'Arthur Le Gall, étudiant en BUT Informatique à l'IUT de Vannes et développeur en alternance chez Alcatel-Lucent Enterprise. Réseau, pentest, CTF : recherche d'une alternance en cybersécurité de 2027 à 2030."
        path="/"
      />
      <Top />

      <Highlights />

      <About />

      <Projects featured />
    </>
  );
}

export default Home;
