"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/useInView";
import { useActiveSectionContext } from "@/containers/active-section";
import { Mail } from "lucide-react";

export default function Intro() {
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
<section
  ref={ref}
  id="home"
  className="mb-28 max-w-[75rem] w-full mx-auto px-4 text-center sm:mb-0 scroll-mt-[100rem]"
>
  <div className="flex items-center justify-center">
    <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px]">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          damping: 10,
          duration: 0.2,
        }}
      >
        <Image
          src="/boy.png"
          width="480"
          height="480"
          alt="portrait"
          quality="100"
          priority={true}
          className="rounded-[20px] object-cover shadow-xl w-full h-auto"
        />
      </motion.div>

      <motion.span
        className="text-6xl absolute bottom-4 right-4 sm:bottom-8 sm:right-12"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          damping: 10,
          duration: 0.2,
        }}
      >
        👋
      </motion.span>
      
    </div>
  </div>

  <Fade
    direction="up"
    delay={400}
    cascade
    damping={1e-1}
    triggerOnce={true}
  >
    <h1 className="mb-10 mt-6 sm:mt-8 text-2xl sm:text-4xl">
    <span className="font-bold !leading-[1.5] font-small">
        THIS IS VIJAY!!
      </span>
      <br />
      <span className="font-bold !leading-[1.5] font-small">
        "LIVING IN EVERY FRAME"
      </span>
      <p className="text-[14px] mt-2">
        Where Creative Editing Transforms Ideas into Visual Masterpieces.
      </p>
    </h1>
  </Fade>

  <motion.div
    className="flex flex-wrap justify-center items-center gap-4 px-2 sm:px-4 text-lg font-medium"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
  >
    {/* Buttons remain unchanged, just wrapped better */}
    <Link
      href="mailto:vk349123@gmail.com"
      className="group bg-gray-900 text-white px-6 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
      onClick={() => {
        setActiveSection("#contact");
        setTimeOfLastClick(Date.now());
      }}
    >
      Connect <Mail color={"#9ca3af"} />
    </Link>

    <a
      className="group bg-gray-900 text-white px-6 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
      href="/Resume.pdf"
      download
    >
      Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
    </a>

    <a
      href="https://wa.me/918050730949"
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-gray-900 text-white px-6 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
      title="Chat with us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-5 h-5 text-white dark:text-white"
        fill="currentColor"
      >
        <path d="M380.9 97.1C339 55.2 283.2 32 224.3 32 100.2 32 0 132.3 0 256c0 45.2 11.9 89.2 34.6 127.7L0 480l100.4-33.1c36.6 19.9 77.9 30.4 120.6 30.4h.1c123.9 0 224.9-100.3 224.9-224 0-59-23.1-114.8-65.1-156.9zM224.3 438c-37.5 0-74.1-10.1-106.1-29.1l-7.6-4.5-59.4 19.5 19.7-57.8-5-8c-21.1-33.5-32.2-72.4-32.2-112.1 0-114.7 93.5-208 208.3-208 55.6 0 107.8 21.6 147 60.8 39.2 39.1 60.8 91.3 60.8 147.1 0 114.7-93.5 208.1-208.3 208.1zm121.2-138.2c-6.6-3.3-39-19.2-45-21.4-6-2.2-10.4-3.3-14.8 3.3s-17 21.4-20.8 25.8c-3.8 4.4-7.7 5-14.3 1.6-39.2-19.6-64.8-35-90.7-79.1-6.8-11.7 6.8-10.8 19.6-35.8 2.2-4.4 1.1-8.3-.5-11.6s-14.8-35.7-20.3-48.9c-5.3-12.8-10.7-11-14.8-11.2-3.8-.2-8.3-.2-12.8-.2s-11.6 1.6-17.6 8.3c-6 6.6-23 22.4-23 54.5s23.5 63.2 26.7 67.6c3.3 4.4 46.2 70.6 112.1 99 15.7 6.8 27.9 10.8 37.4 13.8 15.7 5 30 4.3 41.3 2.6 12.6-1.9 39-15.9 44.5-31.3 5.5-15.3 5.5-28.3 3.8-31z" />
      </svg>
      Chat
    </a>

    <a
      className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      href="https://www.linkedin.com/in/vijay-kumar-b88a16294/"
      target="_blank"
      rel="noopener noreferrer"
      title="Visit my LinkedIn profile"
    >
      <BsLinkedin />
    </a>

    <a
      className="bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      href="https://www.instagram.com/viiijai_?igsh=MzRlODBiNWFlZA%3D%3D/"
      target="_blank"
      rel="noopener noreferrer"
      title="Visit my Instagram profile"
    >
      <BiLogoInstagramAlt />
    </a>
  </motion.div>
</section>

  );
}
