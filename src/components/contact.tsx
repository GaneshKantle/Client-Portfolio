"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("#contact");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderEmail: email,
          message,
        }),
      });

      if (response.ok) {
        setResponseMessage("Email sent successfully!");
      } else {
        setResponseMessage("Failed to send email.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{"Contact Me"}</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {"Contact me directly through this form / Just text me through chat"}
      </p>

      <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={"Your email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="message"
          placeholder={"Your message"}
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn text={isSubmitting ? "Submitting..." : "Submit"} />
        {responseMessage && <p className="mt-4 text-sm">{responseMessage}</p>}
      </form>
    </motion.section>
  );
}
