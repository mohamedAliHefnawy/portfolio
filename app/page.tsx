import NavBar from "@/components/navBar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import AnimationBg from "@/ui/animationBg";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Portfolio() {
  return (
    <AnimationBg>
      <NavBar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </AnimationBg>
  );
}
