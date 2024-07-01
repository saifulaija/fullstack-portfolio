"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/hooks/hooks";
import { useGetAllProjectsQuery } from "@/redux/features/project/projectApi";
import CustomLoader from "../shared/customLoader/CustomLoader";
import { TProject } from "@/types/project.type";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { data, isLoading } = useGetAllProjectsQuery({});
  console.log(data);
  const projects = data?.data || [];
  if(isLoading){
    return <CustomLoader/>
  }

  return (
    <section ref={ref} id="projects" className="scroll-mt-20 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3">
          {projects.map((project:TProject) => (
            <Project key={project._id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
