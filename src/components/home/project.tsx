"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { truncateTitle } from "@/utils/truncateTitle";
type TProps={
    _id:string;
    name:string;
    description:string;
    technologies:string[],
    imageUrl:string

}
export default function Project({
  _id,
  name,
  description,
  technologies,
  imageUrl
}:TProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const truncatedTitleDescription = truncateTitle(description, 80)

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {truncatedTitleDescription}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {Array.isArray(technologies) &&
              technologies.map((tech, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tech}
                </li>
              ))}
          </ul>
          <div className="flex justify-center items-center my-4">
            <a
              href="#"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              View Details
            </a>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={300}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
