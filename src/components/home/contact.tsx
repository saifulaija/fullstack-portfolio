
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
export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const{toast}=useToast()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current!);
    const { data, error } = await sendEmail(formData);

    setLoading(false);
    if (error) {
        toast({
            title:'Failed',
            description:error,
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          })
      return;
    }

    toast({
        title:'Success',
        description:"Email sent successfully",
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      })
    if (formRef.current) {
      formRef.current.reset(); // Reset the form after successful submission
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          saifulislamweb87@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black space-y-4"
        onSubmit={handleSubmit}
      >
        <Input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
 
        <Textarea
          name="message"
          placeholder="Your message"
          required
          rows={8}
          maxLength={5000}
        />
   
        <SubmitBtn loading={loading} />
      </form>
    </motion.section>
  );
}
