import Intro from "@/components/home/Intro";
import About from "@/components/home/about";

import Projects from "@/components/home/projects";



export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    <Intro />
    <About/>
    <Projects/>
  
  </main>
  );
}
