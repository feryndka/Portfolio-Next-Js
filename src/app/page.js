import About from "./about/page";
import Hero from "./hero/page";
import Skill from "./skill/page";
import Project from "./project/page";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Project />
    </>
  );
}
