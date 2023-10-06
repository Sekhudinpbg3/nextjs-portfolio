import { ReactNode } from "react";
import { IconType } from "react-icons";

export type EmailForm = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

type ContactType = "Address" | "Office Address" | "Official Mail" | "Official Phone";
type Anchor = {
  text: string;
  href: string;
};
export type ContactAddress = {
  address: string;
  type: ContactType;
  icon: IconType;
  anchor?: Anchor;
  extra?: ReactNode;
};
