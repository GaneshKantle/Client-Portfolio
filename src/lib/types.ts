import { links } from "./data";

export type SectionName = (typeof links)[number]["hash"];

// lib/types.ts
export type ProjectInfo = {
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  category: string;
};


export type Link = {
  nameEng: string;
  hash: string;
};



type About = {
  title: string;
  im: string;
  job: string;
  description: string;
  stacks: string;
  otherStacks: string;
  otherPassion: string;
  conclusion: string;
};
export type Texts = {
  about: About;
};
