"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";

// Define animation variants
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("#skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>
        {"My Skills"}
      </SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => {
          const Icon = skill.icon; // Render the component
          return (
            <motion.li
              className="flex items-center gap-2 bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              key={skill.name}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Icon /> {skill.name}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
