
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useGetAllFrontendSkillsQuery } from "@/redux/features/frontendSkill/frontendSkillApi";
import { useGetAllBackendSkillsQuery } from "@/redux/features/backendSkill/backendSkillApi";
import { useGetAllToolsSkillsQuery } from "@/redux/features/toolsSkill/tollsSkillApi";
import { useSectionInView } from "@/hooks/hooks";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import CustomLoader from "../shared/customLoader/CustomLoader";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { data: frontendSkill, isLoading: frontendLoading } = useGetAllFrontendSkillsQuery({});
  const { data: backendSkill, isLoading: backendLoading } = useGetAllBackendSkillsQuery({});
  const { data: toolsSkill, isLoading: toolsLoading } = useGetAllToolsSkillsQuery({});

  const { ref } = useSectionInView("Skills");

  const renderSkills = (skills:any, title:any) => (
    <Card className="shadow-md rounded-lg p-6 flex-1 m-4">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {skills?.data.map((skill:any, index:number) => (
          <Badge key={skill._id} variant='secondary'>
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill.name}
            </motion.li>
          </Badge>
        ))}
      </ul>
    </Card>
  );

  if (frontendLoading || backendLoading || toolsLoading) {
    return <div><CustomLoader /></div>; 
  }

  return (
    <section id="skills" ref={ref} className="mb-20 max-w-[60rem] mx-auto scroll-mt-20 text-center sm:mb-40">
      <SectionHeading>My Skills</SectionHeading>
      <div className="flex flex-col items-center">
        {renderSkills(frontendSkill, "Frontend Skills")}
        {renderSkills(backendSkill, "Backend Skills")}
        {renderSkills(toolsSkill, "Tools Skills")}
      </div>
    </section>
  );
}
