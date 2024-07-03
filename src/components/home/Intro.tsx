"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { useSectionInView } from "@/hooks/hooks";
import { Button } from "../ui/button";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className=" container mx-auto flex  md:flex-row flex-col gap-4 items-center justify-evenly mb-10 md:mb-0  mt-20"
    >
    
      <div className="flex-1">
        <div className="md:text-left text-center max-w-lg w-full">
          <h1 className="md:text-5xl text-2xl text-primary font-serif font-bold">
           
              Hi,I am Saiful Islam
             
          </h1>
       
           <div className="max-w-md w-full my-4">
              <h4 className="md:text-[24px] text-lg  font-bold">
              A Full-Stack Developer Approach boosts performance and user Experience
              </h4>
           </div>
 I am a 
<span className="font-bold"> Full-Stack Developer</span> with 
<span className="font-bold">1.5 years</span> of experience. I specialize in creating dynamic 
<span className="italic font-medium"> websites and applications</span>, with a strong focus on 
<span className="underline font-bold"> React (Next.js),MongoDB and PostgreSQL</span>.
          <motion.div
            className="flex flex-col sm:flex-row  gap-2 text-lg font-medium mt-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Button className="group" asChild>
              <Link
                href="#projects"
                onClick={() => {
                  setActiveSection("Projects");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Projects
                <ArrowRight className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" className="group" asChild>
              <Link
                href="#contact"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact me here
                <ArrowRight className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="group">
              <a
                href="https://www.linkedin.com/in/reactjs-developer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" asChild className="group">
              <a
                href="https://github.com/saifulaija"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center h-full">
        {/* <img src="https://i.ibb.co/3fRjZHC/bc14eecf-5a1f-4276-bd56-f3c176891ce2.jpg" alt="" className="md:w-11/12 h-full object-cover rounded-lg" /> */}
        <Image
              src="https://i.ibb.co/3fRjZHC/bc14eecf-5a1f-4276-bd56-f3c176891ce2.jpg"
           alt="Ricardo portrait"
              width="192"
              height="192"
           quality="95"
              priority={true}
              className="h-[400px] w-[400px] rounded-full object-cover border-[0.35rem] border-neutral-300 shadow-xl"
            />
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";


// import { useActiveSectionContext } from "@/context/active-section-context";
// import { ArrowRight, Github, HardDriveDownload, Linkedin } from "lucide-react";
// import { useSectionInView } from "@/hooks/hooks";
// import { Button } from "../ui/button";

// export default function Intro() {
//   const { ref } = useSectionInView("Home", 0.5);
//   const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

//   return (
//     <section
//       ref={ref}
//       id="home"
//       className="mb-20 mt-10 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem]"
//     >
//       <div className="flex items-center justify-center">
//         <div className="relative">
//           <motion.div
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{
//               type: "tween",
//               duration: 0.2,
//             }}
//           >
//             <Image
//               src="https://i.ibb.co/rMDXpzB/portfolio-removebg-preview.png"
//               alt="Ricardo portrait"
//               width="192"
//               height="192"
//               quality="95"
//               priority={true}
//               className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
//             />
//           </motion.div>

//           <motion.span
//             className="absolute bottom-0 right-0 text-4xl"
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{
//               type: "spring",
//               stiffness: 125,
//               delay: 0.1,
//               duration: 0.7,
//             }}
//           >
//             👋
//           </motion.span>
//         </div>
//       </div>

//       <motion.h1
//         className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <span className="font-bold text-primary">Hello, I'm Saiful.</span> I'm a{" "}
//         <span className="font-bold">full-stack developer</span> with{" "}
//         <span className="font-bold">1.5 years</span> of experience. I enjoy
//         building <span className="italic">websites & apps</span>. My focus is{" "}
//         <span className="underline">React (Next.js)</span>.
//       </motion.h1>

//       <motion.div
//         className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.1,
//         }}
//       >
//        <Button className="group" asChild>
//           <Link
//             href="#projects"
           
//             onClick={() => {
//               setActiveSection("Projects");
//               setTimeOfLastClick(Date.now());
//             }}
//           >
//             Projects{" "}
//             <ArrowRight  className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1"/>
//           </Link>
  
//        </Button>
//        <Button variant='outline' className="group" asChild>
//           <Link
//             href="#contact"
           
//             onClick={() => {
//               setActiveSection("Contact");
//               setTimeOfLastClick(Date.now());
//             }}
//           >
//             Contact me here{" "}
//             <ArrowRight  className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1"/>
//           </Link>
  
//        </Button>
       

//     <Button variant='outline' asChild className="group">
//           <a
            
//             href="https://www.linkedin.com/in/reactjs-developer/"
//             target="_blank"
//           >
//             <Linkedin className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
//           </a>
//     </Button>

//      <Button variant='outline' asChild className="group">
//           <a
            
//             href="https://github.com/saifulaija"
//             target="_blank"
//           >
//             <Github className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
//           </a>
//      </Button>
//       </motion.div>
//     </section>
//   );
// }
