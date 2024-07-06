import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


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
      "I completed a two-year HSC program in the Science Group, specializing in physics, chemistry, biology, and mathematics. The curriculum emphasized analytical skills through rigorous coursework and practical experiments, preparing me for higher education in engineering, medicine, and technology. This program focused on developing a strong foundation in scientific principles, critical thinking, and problem-solving abilities, enabling me to excel in competitive entrance exams and pursue a successful career in scientific research and innovation.",
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


export const servicesData = {
  services: [
    {
      title: "Web Development",
      details: [
        {
          type: "Frontend Development",
          description: "Creating responsive and interactive user interfaces using HTML, CSS, JavaScript, and modern frameworks like React, Angular, or Vue.js."
        },
        {
          type: "Backend Development",
          description: "Building robust server-side applications with Node.js, Express.js, Django, Ruby on Rails, or other backend technologies."
        }
      ]
    },
    {
      title: "Database Management",
      details: [
        {
          type: "Database Design",
          description: "Designing efficient database schemas for relational (e.g., PostgreSQL, MySQL) and non-relational databases (e.g., MongoDB)."
        },
        {
          type: "Database Optimization",
          description: "Ensuring database performance, indexing, and query optimization."
        }
      ]
    },
    {
      title: "API Development",
      details: [
        {
          type: "RESTful APIs",
          description: "Creating scalable and secure RESTful APIs for client-server communication."
        },
        {
          type: "GraphQL",
          description: "Developing flexible and efficient GraphQL APIs for modern applications."
        }
      ]
    },
    {
      title: "Employment Opportunities",
      details: [
        {
          type: "Part-time Job",
          description: "Available for part-time positions to contribute to your projects with flexible hours."
        },
        {
          type: "Full-time Job",
          description: "Open to full-time roles, providing dedicated and consistent support for your development needs."
        }
      ]
    }
  ]
};
