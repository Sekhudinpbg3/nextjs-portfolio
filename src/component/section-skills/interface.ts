import { IconType } from "react-icons";

type SkillType = "Programming Language" | "Frontend Developer" | "Backend Developer" | "Other";

interface Skill {
  name: string;
  level: "Basic" | "Intermediate" | "Expert";
  icon: IconType;
}

export interface Skills {
  skillType: SkillType;
  skills: Skill[];
}
