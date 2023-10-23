import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import { SocialMedia, HomeText } from "./interface";

export const TXT: HomeText = {
  greet: "Hello,",
  name: "I Am Sekhudin",
  as: "Software Engineer",
  summary: `I am a graduate with a Bachelor's degree in Informatics who is passionate about software engineering and strongly committed to
  pursuing a career in this field. I am enthusiastic about continuous learning and dedicated to contributing to innovative projects that
  both challenge and inspire the growth of the technology industry.`,
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
