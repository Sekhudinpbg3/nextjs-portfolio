import { SiLaravel, SiReact, SiTailwindcss, SiMysql, SiRedux } from "react-icons/si";
import { Img, ImageSource } from "@provider/asset";
import { Project } from "./interface";

const { profile, ExProject } = Img;
export const PROJECTS: Project[] = [
  {
    name: "Laravel To Do List",
    type: "Web Fullstack",
    images: ExProject,
    stacks: [SiLaravel, SiReact, SiTailwindcss, SiMysql],
  },
  {
    name: "Jersi Store",
    type: "Mobile",
    images: ExProject,
    stacks: [SiReact, SiRedux],
  },
  {
    name: "Jersi Store",
    type: "Mobile",
    images: ExProject,
    stacks: [SiReact, SiRedux],
  },
  {
    name: "Jersi Store",
    type: "Mobile",
    images: ExProject,
    stacks: [SiReact, SiRedux],
  },
];
