
'use client'


import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/hooks/hooks";
import { educationData } from "@/data";

const TimelineElement = ({ item }:{item:any}) => (
  <div className="flex flex-col md:flex-row items-center mb-8 md:mb-12 px-1 md:px-0 md:container mx-auto">
    {/* Left Column */}
    <div className="md:w-1/5 flex justify-center md:justify-start mb-4 md:mb-0">
      <div className="bg-primary text-white rounded-full p-3">
        {/* Icon or Date */}
        {item.icon /* or item.date */}
      </div>
    </div>
    {/* Right Column */}
    <div className="md:w-4/5 md:pl-6">
      {/* Date */}
      <p className="text-sm text-gray-500 mb-1">{item.date}</p>
      {/* Title */}
      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
      {/* Location */}
      <p className="text-gray-700 dark:text-white/75 mb-2">{item.location}</p>
      {/* Description */}
      <p className="text-gray-700 dark:text-white/75">{item.description}</p>
    </div>
  </div>
);

const Education = () => {
  const { ref } = useSectionInView("Education");

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Education</SectionHeading>
      <div className="flex flex-col space-y-8 md:space-y-2">
        {educationData.map((item, index) => (
          <TimelineElement key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Education;
