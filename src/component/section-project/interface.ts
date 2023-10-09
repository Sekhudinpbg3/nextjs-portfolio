import { IconType } from "react-icons";
import type { ImageSource } from "@provider/asset";

type ProjectType =
  | "Web Frontend"
  | "Web Backend"
  | "Web Fullstack"
  | "Mobile Frontend"
  | "Mobile"
  | "Dekstop";
export type Project = {
  name: string;
  type: ProjectType;
  stacks: IconType[];
  images: ImageSource[];
  link?: string;
};
