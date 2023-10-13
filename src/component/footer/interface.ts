import { SectionLink } from "@provider/types/interface";

export interface Link extends Pick<SectionLink, "title" | "href"> {}
export type FooterNavigation = {
  title: string;
  links: Link[];
};
