
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
import { FaWhatsapp } from "react-icons/fa";
import { Card } from "../ui/card";
export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current!);
    const { data, error } = await sendEmail(formData);

    setLoading(false);
    if (error) {
      toast({
        title: 'Failed',
        description: error,
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      })
      return;
    }

    toast({
      title: 'Success',
      description: "Email sent successfully",
      action: (
        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
      ),
    })
    if (formRef.current) {
      formRef.current.reset(); // Reset the form after successful submission
    }
  };

  const phoneNumber = "+8801874767969";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 text-center w-full px-1 md:px-0 md:container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 mt-2 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:saifulislamweb87@gmail.com">
          saifulislamweb87@gmail.com
        </a>{' '}
        or through the form below.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-6 md:space-y-0 md:space-x-12">
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form
            ref={formRef}
            className="flex flex-col dark:text-black space-y-4"
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
        </div>

        {/* Contact Information */}
        <Card className="w-full md:w-1/2 flex flex-col gap-1">
          <div className="border-b-2 border-gray-300 pb-1">
            <h2 className="text-xl font-semibold md:text-2xl">Address</h2>
            <p>Monmathapur, Parbotipur, Dinajpur,Bangladesh</p>
          </div>


          <div className="border-b-2 border-gray-300 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl mb-2">Contact me directly</h2>
            <div className="flex flex-col items-center space-y-2">
              <p className="flex items-center text-lg hover:text-primary cursor-pointer" onClick={handlePhoneClick}>
                <Phone className="mr-2" /> {phoneNumber}
              </p>
              <p className="flex items-center text-lg">
                <Mail className="mr-2" />
                <a className="underline hover:text-primary" href="mailto:saifulislamweb87@gmail.com">
                  saifulislamweb87@gmail.com
                </a>
              </p>
              <a
                href={whatsappLink}
                className="flex items-center text-lg hover:text-green-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="mr-2" /> Message on WhatsApp
              </a>
            </div>
          </div>
          <div className="mb-2">
            <h2 className="text-xl font-semibold md:text-2xl">
              Check my profiles
            </h2>
            <div className="flex justify-center items-center gap-4 mt-2">
              <Button variant='outline' asChild className="group">
                <a

                  href="https://www.linkedin.com/in/reactjs-developer/"
                  target="_blank"
                >
                  <Linkedin className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button variant='outline' asChild className="group">
                <a

                  href="https://github.com/saifulaija"
                  target="_blank"
                >
                  <Github className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant='outline' asChild className="group">
                <a

                  href="https://www.facebook.com/sobuj.sorker.3"
                  target="_blank"
                >
                  <FacebookIcon className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
                </a>
              </Button>

            </div>
          </div>
        </Card>
      </div>
    </motion.section>
  );
}
