export interface PropsChildNode {
  children: React.ReactNode;
}

export type MenuKey = "home" | "about" | "skills" | "projects" | "contact" | "resume" | "connect-me";
export type SectionLink = {
  title: string;
  id: MenuKey;
  overlay_id: string;
  href: string;
};
