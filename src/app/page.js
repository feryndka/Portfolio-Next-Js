import About from "./about/page";
import Contact from "./contact/page";
import Hero from "./hero/page";
import Skill from "./skill/page";
import Project from "./project/page";
import Deepseek from "./deepseek/page";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Project />
      {/* <Deepseek /> */}
      {/* <Contact /> */}
    </>
  );
}
