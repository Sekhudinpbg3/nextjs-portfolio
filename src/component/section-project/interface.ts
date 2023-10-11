import { IconType } from "react-icons";
import type { ImgSource } from "@provider/asset/image/util";

type ProjectType =
  | "Web Frontend"
  | "Web Backend"
  | "Web Fullstack"
  | "Mobile Frontend"
  | "Mobile"
  | "Dekstop";

type ObjectType =
  | "object-fit"
  | "object-fill"
  | "object-cover"
  | "object-scale-down"
  | "object-none";

export type Project = {
  name: string;
  type: ProjectType;
  stacks: IconType[];
  images: ImgSource[];
  link?: string;
  objectType?: ObjectType;
};
