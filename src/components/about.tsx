"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <div className="container mx-auto px-4">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <SectionHeading>About Me</SectionHeading>
        </Fade>

        <div className="grid gap-8 xl:grid-cols-2 lg:text-start">
          <div className="flex-1">
            {/* Content */}
            <div className="text-lg mt-12 xl:mt-3">
              <div className="flex justify-start flex-col">
                <Fade
                  direction="up"
                  delay={1200}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold mt-6">E X P E R I E N C E</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={1400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    I have 2 years of experience in video editing with a focus
                    on delivering structured and visually consistent content I
                    have worked on a variety of projects including Instagram
                    reels YouTube videos advertisements and healthcare-related
                    content ensuring each output aligns with client objectives
                    and brand guidelines
                  </p>
                </Fade>
                <Fade
                  direction="up"
                  delay={1600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    <strong>
                      I am currently working in collaboration with{" "}
                      <a
                        href="https://www.dnb.com/business-directory/company-profiles.amilo_ai_private_limited.27c9dbab5e6bd81297ca2429ee8ebcab.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        Amilo AI Pvt Ltd{" "}
                      </a>
                      !!
                    </strong>
                  </p>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    <strong>Key responsibilities :</strong>
                  </p>

                  <div className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                      <li>Edited Reels, Shorts & Long-Form Videos</li>
                      <li>Created Motion Graphics & Transitions</li>
                      <li>Script Writing & Team Supervision</li>
                      <li>Handled Daily Content Creation & Scheduling</li>
                      <li>Ideated Content Aligned with Client Goals</li>
                      <li>Delivered Edits On-Time with Quality</li>
                      <li>Collaborated Closely with Clients</li>
                      <li>Ensured Consistent Output with Time Management</li>
                    </ul>
                  </div>
                </Fade>
                <Fade
                  direction="up"
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold mt-6">A C H I E V E M E N T S</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <ul
                    className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70"
                    style={{ listStyleType: "disc", paddingLeft: "20px" }}
                  >
                    <li>
                      Scaled a client’s Instagram from 0 to 25K+ followers in 6
                      months — a 100% organic growth strategy
                    </li>
                    <li>
                      Boosted viewer engagement by 40% through strategic
                      scripting and content structure
                    </li>
                    <li>
                      Enhanced brand storytelling and audience retention,
                      leading to a 60% increase in content saves
                    </li>
                    <li>
                      Improved content performance by 50% by aligning edits with
                      platform trends and analytics
                    </li>
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Fade
              direction="right"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <Image
                src="/profile.png"
                width="600"
                height="600"
                alt="portrait"
                quality="100"
                priority={true}
                className="rounded-full mt-8 object-cover"
              />
            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
