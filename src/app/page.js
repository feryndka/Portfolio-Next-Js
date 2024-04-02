import About from "./about/page";
import Contact from "./contact/page";
import Hero from "./hero/page";
import Project from "./project/page";
import Skill from "./skill/page";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Project />
      {/* <Contact /> */}
    </>
  );
}