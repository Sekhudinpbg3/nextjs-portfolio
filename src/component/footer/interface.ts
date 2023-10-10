import { SectionLink } from "@provider/types";

export interface Link extends Pick<SectionLink, "title" | "href"> {}
export type FooterNavigation = {
  title: string;
  links: Link[];
};
