import { IconType } from "react-icons";
import { BaseTXT } from "@provider/types/interface";

export type RelatedCourses = {
  name: string;
  icon: IconType;
};

export interface AboutText extends Partial<BaseTXT> {
  paragraph: string[];
}
