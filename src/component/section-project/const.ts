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
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiSwagger,
  SiVite,
} from "react-icons/si";
import { Img } from "@provider/asset";
import { ProjectsText, Project } from "./interface";

export const TXT: ProjectsText = {
  summary: `I am a hands-on learner, making practical use of the knowledge I gain to apply to the projects I undertake,
  whether they are professional collaborations with clients or personal creative endeavors just for fun.`,
};

// prettier-ignore
const { 
  AttendanceApp,
  ChasierApp,
  JerseyStore,
  NestApp,
  Stock4Casting,
  StockApi,
  NoImages
 } = Img.project;

export const PROJECTS: Project[] = [
  {
    name: "Jersey Store",
    type: "Mobile",
    images: JerseyStore,
    stacks: [SiReact, SiRedux, SiFirebase],
  },
  {
    name: "Stock Forecasting",
    type: "Web Fullstack",
    images: Stock4Casting,
    stacks: [SiNextdotjs, SiTailwindcss, SiTensorflow],
  },
  {
    name: "Cashier Application",
    type: "Dekstop",
    images: ChasierApp,
    stacks: [SiDotnet, SiMicrosoftsqlserver],
  },
  {
    name: "Nest App API",
    type: "Web Backend",
    images: NestApp,
    stacks: [SiNestjs, SiNodedotjs, SiPostgresql, SiSwagger],
  },
  {
    name: "Stock API",
    type: "Web Backend",
    images: StockApi,
    stacks: [SiNodedotjs, SiExpress],
  },
  {
    name: "Laravel To Do List",
    type: "Web Fullstack",
    images: NoImages,
    stacks: [SiLaravel, SiVite, SiReact, SiTailwindcss, SiMysql],
    objectType: "object-cover",
  },
];
