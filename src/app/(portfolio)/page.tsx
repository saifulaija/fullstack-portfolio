import SectionDivider from "@/components/SectionDivider/SectionDivider";
import Intro from "@/components/home/Intro";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Education from "@/components/home/education";


import Projects from "@/components/home/projects";
import Service from "@/components/home/service";
import Skills from "@/components/home/skills";



export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    <Intro />
    <SectionDivider/>
    <About/>
    <Projects/>
    <Skills/>
 <Education/>
    <Service/>
    <Contact/>

  
  </main>
  );
}
