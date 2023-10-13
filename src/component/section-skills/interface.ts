import { IconType } from "react-icons";
import { BaseTXT } from "@provider/types/interface";

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

export interface SkillsText extends BaseTXT {}
