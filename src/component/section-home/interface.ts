import { IconType } from "react-icons";
import { BaseTXT } from "@provider/types/interface";

type SocialMediaType = "Github" | "Instagram" | "X" | "Facebook" | "LinkedIn";
export type SocialMedia = {
  type: SocialMediaType;
  username: string;
  url: string;
  icon: IconType;
};

export interface HomeText extends BaseTXT {
  greet: string;
  name: string;
  as: string;
}
