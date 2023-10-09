import {
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiRedux,
  SiFirebase,
  SiNextdotjs,
  SiTensorflow,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { Img } from "@provider/asset";
import { Project } from "./interface";

const { ExProject } = Img;
export const PROJECTS: Project[] = [
  {
    name: "Laravel To Do List",
    type: "Web Fullstack",
    images: ExProject,
    stacks: [SiLaravel, SiReact, SiTailwindcss, SiMysql],
  },
  {
    name: "Jersey Store",
    type: "Mobile",
    images: ExProject,
    stacks: [SiReact, SiRedux, SiFirebase],
  },
  {
    name: "Stock Forecasting",
    type: "Web Fullstack",
    images: ExProject,
    stacks: [SiNextdotjs, SiTailwindcss, SiTensorflow],
  },
  {
    name: "Attendance Application",
    type: "Dekstop",
    images: ExProject,
    stacks: [SiDotnet, SiMicrosoftsqlserver],
  },
  {
    name: "Cashier Application",
    type: "Dekstop",
    images: ExProject,
    stacks: [SiDotnet, SiMicrosoftsqlserver],
  },
  {
    name: "MERN Stack CRUD",
    type: "Web Fullstack",
    images: ExProject,
    stacks: [SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb],
  },
];
