// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";


// import { motion } from "framer-motion";
// import { useSectionInView } from "@/hooks/hooks";
// import { skillsData } from "@/data";
// import { Badge } from "../ui/badge";
// import { useGetAllSkillsQuery } from "@/redux/features/skill/skillApi";

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//     },
//   }),
// };

// export default function Skills() {

//     const {data,isLoading}=useGetAllSkillsQuery({})
//   const { ref } = useSectionInView("Skills");

//   return (
//     <section
//       id="skills"
//       ref={ref}
//       className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
//     >
//       <SectionHeading>My skills</SectionHeading>
//       <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
//         {skillsData.map((skill, index) => (
//           <Badge>
//               <motion.li
//                 key={index}
//                 variants={fadeInAnimationVariants}
//                 initial="initial"
//                 whileInView="animate"
//                 viewport={{
//                   once: true,
//                 }}
//                 custom={index}
//               >
//                 {skill}
//               </motion.li>
//           </Badge>
//         ))}
//       </ul>
//     </section>
//   );
// }

// Ensure to import necessary dependencies and components
"use client"
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import { useGetAllSkillsQuery } from "@/redux/features/skill/skillApi";
import { Badge } from "../ui/badge";
import CustomLoader from "../shared/customLoader/CustomLoader";

const Skills = () => {
  const { data, isLoading } = useGetAllSkillsQuery({});
  const { ref } = useSectionInView("Skills");

  // Variants for animation
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-8 container mx-auto scroll-mt-28 text-center"
    >
      <SectionHeading>My Skills</SectionHeading>

      {isLoading ? (
        <CustomLoader />
      ) : data && data?.data?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {/* Frontend Skills */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Frontend Skills</h2>
            <div className="flex flex-wrap gap-4">
              {data?.data?.map((skill:any) => (
                <motion.div
                  key={skill._id}
                  variants={itemVariants}
                  initial="initial"
                  animate="animate"
                  className="mb-2"
                >
                  {skill.frontendSkills.map((frontendSkill:any, index:number) => (
                    <Badge key={index} variant="outline">
                      {frontendSkill}
                    </Badge>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Backend Skills</h2>
            <div className="flex flex-wrap gap-4">
              {data?.data?.map((skill:any) => (
                <motion.div
                  key={skill._id}
                  variants={itemVariants}
                  initial="initial"
                  animate="animate"
                  className="mb-2"
                >
                  {skill.backendSkills.map((backendSkill:any, index:number) => (
                    <Badge key={index} variant="outline">
                      {backendSkill}
                    </Badge>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools Skills */}
          <div>
            <h2 className="text-lg font-semibold mb-2 text-start md:text-center">Tools Skills</h2>
            <ul className="flex flex-wrap gap-4">
              {data?.data?.map((skill:any) => (
                <motion.div
                  key={skill._id}
                  variants={itemVariants}
                  initial="initial"
                  animate="animate"
                  className="mb-2"
                >
                  {skill.toolsSkills.map((toolSkill:any, index:number) => (
                    <Badge key={index} variant='default'>
                      {toolSkill}
                    </Badge>
                  ))}
                </motion.div>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>No skills data available.</p>
      )}
    </section>
  );
};

export default Skills;
