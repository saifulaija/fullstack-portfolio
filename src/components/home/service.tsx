
"use client";
import React, { useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useSectionInView } from "@/hooks/hooks";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Facebook, FacebookIcon, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { servicesData } from "@/data";
import ServiceCard from "./servicesCard";
export default function Service() {
  const { ref } = useSectionInView("Service");




  return (
    <motion.section
      id="service"
      ref={ref}
      className="mb-20 sm:mb-28  w-full px-1 md:px-0 md:container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Service</SectionHeading>

      <div className="grid md:grid-cols-2 gap-3">
      {servicesData.services.map((service, index) => (
      <ServiceCard key={index} title={service.title} details={service.details} />
    ))}
      </div>
      
    </motion.section>
  );
}
