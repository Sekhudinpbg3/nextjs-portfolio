import { IconType } from "react-icons";

type SocialMediaType = "Github" | "Instagram" | "X" | "Facebook" | "LinkedIn";
export type SocialMedia = {
  type: SocialMediaType;
  username: string;
  url: string;
  icon: IconType;
};
