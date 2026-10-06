import Top from "../../sections/Home/Top";
import Highlights from "../../sections/Home/Highlights";
import About from "../../sections/Home/About";
import Projects from "../../sections/Projects";
import SEO from "../../components/SEO";

function Home() {
  return (
    <>
      <SEO
        description={{
          fr: "Portfolio d'Arthur Le Gall, étudiant en BUT Informatique à l'IUT de Vannes et développeur en alternance chez Alcatel-Lucent Enterprise. Cybersécurité, développement, CTF : recherche d'une alternance en cybersécurité de 2027 à 2030.",
          en: "Portfolio of Arthur Le Gall, Computer Science student at IUT de Vannes (France) and work-study software developer at Alcatel-Lucent Enterprise. Cybersecurity, software development, CTFs: looking for a cybersecurity work-study position from 2027 to 2030.",
        }}
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
