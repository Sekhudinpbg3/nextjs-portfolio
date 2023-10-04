import { IconType } from "react-icons";

export type ColorName =
  | "green"
  | "pink"
  | "red"
  | "purple"
  | "yellow"
  | "blue"
  | "emerald"
  | "teal"
  | "sky"
  | "violet";

export interface Color {
  from: string;
  darkFrom: string;
}

export interface RelatedCourses {
  name: string;
  icon: IconType;
}
