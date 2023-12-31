import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCsharp,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiSvelte,
  SiNestjs,
  SiLaravel,
  SiFlask,
  SiDocker,
  SiSwagger,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiDotnet,
  SiGit,
  SiRedux,
  SiReactivex,
} from "react-icons/si";
import { SkillsText, Skills } from "./interface";

export const TXT: SkillsText = {
  summary: `As a software engineer, I grew up with a passion for continuing
  to learn and master various programming technologies,
  never being tied to just one job role.`,
};

export const SKILLS: Skills[] = [
  {
    skillType: "Programming Language",
    skills: [
      {
        name: "Javascript",
        level: "Intermediate",
        icon: SiJavascript,
      },
      {
        name: "Typescript",
        level: "Intermediate",
        icon: SiTypescript,
      },
      {
        name: "Python",
        level: "Intermediate",
        icon: SiPython,
      },
      {
        name: "C#",
        level: "Basic",
        icon: SiCsharp,
      },
      {
        name: "PHP",
        level: "Basic",
        icon: SiPhp,
      },
    ],
  },
  {
    skillType: "Frontend Developer",
    skills: [
      {
        name: "HTML",
        level: "Intermediate",
        icon: SiHtml5,
      },
      {
        name: "CSS",
        level: "Intermediate",
        icon: SiCss3,
      },
      {
        name: "Tailwindcss",
        level: "Intermediate",
        icon: SiTailwindcss,
      },
      {
        name: "Bootstrap",
        level: "Basic",
        icon: SiBootstrap,
      },
      {
        name: "React JS",
        level: "Intermediate",
        icon: SiReact,
      },
      {
        name: "React Native",
        level: "Basic",
        icon: SiReact,
      },
      {
        name: "Next JS",
        level: "Intermediate",
        icon: SiNextdotjs,
      },
      {
        name: "Vue JS",
        level: "Basic",
        icon: SiVuedotjs,
      },
      {
        name: "Svelte",
        level: "Basic",
        icon: SiSvelte,
      },
    ],
  },
  {
    skillType: "Backend Developer",
    skills: [
      {
        name: "Nest JS",
        level: "Intermediate",
        icon: SiNestjs,
      },
      {
        name: "Laravel",
        level: "Basic",
        icon: SiLaravel,
      },
      {
        name: "Flask",
        level: "Basic",
        icon: SiFlask,
      },
      {
        name: "Docker",
        level: "Basic",
        icon: SiDocker,
      },
      {
        name: "Swagger",
        level: "Basic",
        icon: SiSwagger,
      },
      {
        name: "MySQL",
        level: "Intermediate",
        icon: SiMysql,
      },
      {
        name: "PostgreSQL",
        level: "Basic",
        icon: SiPostgresql,
      },
      {
        name: "MongoDB",
        level: "Basic",
        icon: SiMongodb,
      },
      {
        name: "Postman",
        level: "Basic",
        icon: SiPostman,
      },
    ],
  },
  {
    skillType: "Other",
    skills: [
      {
        name: ".NET",
        level: "Basic",
        icon: SiDotnet,
      },
      {
        name: "Git",
        level: "Basic",
        icon: SiGit,
      },
      {
        name: "Redux",
        level: "Basic",
        icon: SiRedux,
      },
      {
        name: "RxJS",
        level: "Basic",
        icon: SiReactivex,
      },
    ],
  },
];
