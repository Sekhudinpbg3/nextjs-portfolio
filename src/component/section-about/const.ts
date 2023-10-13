import * as _ from "lodash";
import {
  SiAndroidstudio,
  SiApachenetbeanside,
  SiDotnet,
  SiGooglecolab,
  SiJupyter,
  SiLaravel,
  SiMicrosoftsqlserver,
  SiPython,
  SiRedhat,
  SiUnity,
} from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";
import { AboutText, RelatedCourses } from "./interface";

export const TXT: AboutText = {
  paragraph: [
    `I have a bachelor's degree in Informatics from the Amikom University of Purwokerto,
    which ignited my passion for technology and programming.`,
    `I stand out with my commitment to self-improvement and a focus on quality results.
    I'm dedicated to improving my programming skills, even during weekends and holidays.`,
    `I'm open to opportunities to join a multinational company or a healthy startup.`,
  ],
};

export const COURSES: RelatedCourses[] = [
  {
    name: "Database System",
    icon: SiMicrosoftsqlserver,
  },
  {
    name: "Object Oriented Programming",
    icon: SiApachenetbeanside,
  },
  {
    name: "Algorithm and Data Structure",
    icon: TbBinaryTree,
  },
  {
    name: "Web Programming",
    icon: SiLaravel,
  },
  {
    name: "Mobile Programming",
    icon: SiAndroidstudio,
  },
  {
    name: "Mobile Games Programming",
    icon: SiUnity,
  },
  {
    name: "Python Programming",
    icon: SiPython,
  },
  {
    name: "Machine Learning",
    icon: SiJupyter,
  },
  {
    name: "Computer Vision",
    icon: SiGooglecolab,
  },
  {
    name: "Programming Framework(.NET)",
    icon: SiDotnet,
  },
  {
    name: "Operating System",
    icon: SiRedhat,
  },
];
