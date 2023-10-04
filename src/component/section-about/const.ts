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
import { Color, ColorName, RelatedCourses } from "./interface";

const COLOR: ColorName[] = [
  "green",
  "pink",
  "red",
  "purple",
  "yellow",
  "blue",
  "emerald",
  "teal",
  "sky",
  "violet",
];

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
