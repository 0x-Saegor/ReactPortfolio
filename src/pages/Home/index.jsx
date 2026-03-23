import Top from "../../sections/Home/Top";
import About from "../../sections/Home/About";
import Projects from "../../sections/Projects";

function Home() {
  return (
    <>
      <Top />

      <About />

      <Projects max={3} />

    </>
  );
}

export default Home;
