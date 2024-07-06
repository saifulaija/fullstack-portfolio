"use client";

import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { useSectionInView } from "@/hooks/hooks";
import { Button } from "../ui/button";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      <motion.section
        ref={ref}
        id="home"
        className="px-1 md:px-0 max-w-[1200px] w-full mx-auto gap-4 md:gap-0 flex  md:flex-row flex-col  items-center justify-center mb-12 md:mb-0 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
      
        <motion.div className="flex-1" initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}>
          <motion.div className="md:text-left text-center max-w-lg w-full"  initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}>
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
            <div
              className="flex flex-col sm:flex-row  gap-2 text-lg font-medium mt-6"
              
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
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="flex-1 flex items-center justify-center h-full" variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ ease: "easeInOut", duration: 0.8, delay: 0.5 }}>
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
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
