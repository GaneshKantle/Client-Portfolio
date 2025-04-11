"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectInfo } from "@/lib/types";

type ProjectProps = ProjectInfo & {
  thumbnailUrl: string;
  videoUrl: string; 
};

export default function Project({
  title,
  videoUrl,
  thumbnailUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-12 flex flex-col items-center justify-center w-[480px]"
    >
      {/* Video container */}
      <div className="relative w-[460px] h-[259px] rounded-lg shadow-lg transition group-hover:scale-[1.04] group-hover:translate-y-3 mb-6">
        {isPlaying ? (
          <iframe
            src={videoUrl}
            width="460"
            height="259"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allow="autoplay"
            allowFullScreen
            title={title}
          />
        ) : (
          <>
            {/* Thumbnail image */}
            <img
              src={thumbnailUrl}
              alt={`${title} thumbnail`}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlay}
                title="Play video"
                className="bg-black bg-opacity-50 text-white rounded-full p-4 hover:bg-opacity-75 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
      {/* Title */}
      <h3 className="text-2xl font-semibold text-center mb-2">{title}</h3>
      {/* Video title */}
      <p className="text-sm text-gray-600 text-center">
        {isPlaying ? "Now playing" : "Click to play video"}
      </p>
    </motion.div>
  );
}