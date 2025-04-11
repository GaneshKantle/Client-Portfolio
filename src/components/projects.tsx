// Projects.tsx
"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";
import AnimatedButton from "./AnimatedButton";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);
  // Filter projects by category
  const reels = projectsData.filter((project) => project.category === "Reel");
  const longVideos = projectsData.filter(
    (project) => project.category === "Long Video"
  );
  const marketingVideos = projectsData.filter(
    (project) => project.category === "Marketing"
  );
  const trendingVideos = projectsData.filter(
    (project) => project.category === "Trending"
  );
  const motionGraphicsVideos = projectsData.filter(
    (project) => project.category === "Motion Graphics"
  );
  const weddingVideos = projectsData.filter(
    (project) => project.category === "Wedding"
  );

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      {/* Trendy Edits */}
      <SectionHeading>Trending Videos</SectionHeading>
      <div className="flex flex-row flex-wrap justify-center gap-8 mb-28">
        {trendingVideos.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            videoUrl={project.videoUrl}
            thumbnailUrl={project.thumbnailUrl}
            category={project.category}
          />
        ))}
      </div>

      {/* Ad Campaign Edits */}
      <SectionHeading>Marketing Videos</SectionHeading>
      <div className="flex flex-row flex-wrap justify-center gap-8 mb-28">
        {marketingVideos.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            videoUrl={project.videoUrl}
            thumbnailUrl={project.thumbnailUrl}
            category={project.category}
          />
        ))}
      </div>

      {/* Motion Graphics */}
      <SectionHeading>Motion Graphics</SectionHeading>
      <div className="flex flex-row flex-wrap justify-center gap-8 mb-28">
        {motionGraphicsVideos.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            videoUrl={project.videoUrl}
            thumbnailUrl={project.thumbnailUrl}
            category={project.category}
          />
        ))}
      </div>

      {/* Wedding Invitation Edits */}
      <SectionHeading>Wedding Invitations</SectionHeading>
      <div className="flex flex-row flex-wrap justify-center gap-8 mb-16">
        {weddingVideos.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            videoUrl={project.videoUrl}
            thumbnailUrl={project.thumbnailUrl}
            category={project.category}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <AnimatedButton link="https://drive.google.com/drive/folders/1mX0iDQYX6LDT-3sy4Uft5qNiExk-kzYI?usp=drive_link" />
      </div>
    </section>
  );
}
