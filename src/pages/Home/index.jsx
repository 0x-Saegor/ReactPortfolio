import Top from "../../sections/Home/Top";
import About from "../../sections/Home/About";
import CTF from "../../sections/Home/CTF";
import Projects from "../../sections/Projects";
import SEO from "../../components/SEO";

function Home() {
  return (
    <>
      <SEO
        description={{
          fr: "Arthur Le Gall, étudiant en BUT Informatique et développeur chez Alcatel-Lucent Enterprise, cherche une alternance en cybersécurité de 2027 à 2030.",
          en: "Arthur Le Gall, Computer Science student and developer at Alcatel-Lucent Enterprise, is looking for a cybersecurity work-study from 2027 to 2030.",
        }}
        path="/"
      />
      <Top />

      <Projects featured />

      <CTF />

      <About />
    </>
  );
}

export default Home;
