import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import { SocialMedia, HomeText } from "./interface";

export const TXT: HomeText = {
  greet: "Hello,",
  name: "I Am Sekhudin",
  as: "Software Engineer",
  summary: `Passionate and versatile software engineer with a strong interest in pursuing a career, I am enthusiastic about continuing to learn and
  committed to contributing to innovative projects that challenge and inspire the growth of the technology industry`,
};

export const SOSMEDS: SocialMedia[] = [
  {
    type: "Instagram",
    username: "@Sekhudin_y",
    url: "https://www.instagram.com/sekhudin_y",
    icon: SiInstagram,
  },
  {
    type: "Github",
    username: "Sekhudinpbg3",
    url: "https://github.com/Sekhudinpbg3",
    icon: SiGithub,
  },
  {
    type: "LinkedIn",
    username: "Sekhudin pbg3",
    url: "https://www.linkedin.com/in/sekhudin-pbg3-714705219",
    icon: SiLinkedin,
  },
];
