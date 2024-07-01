import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/shareNest-01.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

// export const links = [
//   {
//     name: "Home",
//     hash: "#home",
//   },
//   {
//     name: "About",
//     hash: "#about",
//   },
//   {
//     name: "Projects",
//     hash: "#projects",
//   },
//   {
//     name: "Skills",
//     hash: "#skills",
//   },
//   {
//     name: "Education",
//     hash: "#education",
//   },
//   {
//     name: "Blogs",
//     hash: "/blogs"
//   },
//   {
//     name: "Contact",
//     hash: "#contact",
//   },

// ] as const;

export const educationData = [
  {
    title: "Master of Business Administration (MBA)",
    location: "Rajshahi University,Rajshahi",
    description:
      "I completed a two-year MBA in Marketing, specializing in strategic management, consumer behavior analysis, and digital marketing strategies. The program focused on practical skills through case studies and industry projects, preparing me for leadership roles in brand management, marketing strategy, and market research, enabling effective consumer engagement and organizational growth.",
    icon: React.createElement(LuGraduationCap),
    date: "2010-2012",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    location: "Cant-Public School & College,Parbatipur",
    description:
      "I worked as a front-end developer for several months and subsequently upskilled to a full-stack developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2005 - 2006",
  },
  {
    title: "Full-Stack Developer",
    location: "Dinajpur, Bangladesh",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, PostgeSql, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;




// export const projectsData = [
//   {
//     title: "ShareNest",
//     description:
//       "ShareNest is a platform for listing and booking flat rentals, allowing users to share feedback on their rental experiences.",
//     tags: ["React", "Next.js", "Tailwind", "Shadcn/ui", "PostgreSQL", "Prisma"],
//     imageUrl: corpcommentImg,
//     liveLink: "https://room-share.vercel.app/",
//     clientGitHubLink: "https://github.com/saifulaija/flat-share-client",
//     serverGitHubLink: "https://github.com/saifulaija/flatshare-backend"
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//     liveLink: "https://rmtdev.com/",
//     clientGitHubLink: "https://github.com/saifulaija/rmtdev-client",
//     serverGitHubLink: "https://github.com/saifulaija/rmtdev-server"
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//     liveLink: "https://wordanalytics.com/",
//     clientGitHubLink: "https://github.com/saifulaija/word-analytics-client",
//     serverGitHubLink: "https://github.com/saifulaija/word-analytics-server"
//   },
// ] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "ShadcnUi",
  "MaterialUi",
  "Node.js",
  "Express.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
