import { ReactNode } from "react";
import { IconType } from "react-icons";
import { BaseTXT } from "@provider/types/interface";

export type EmailForm = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

type ContactType =
  | "Address"
  | "Office Address"
  | "Official Mail"
  | "Official Phone"
  | "Email"
  | "Whatsapp";
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

export interface ContactText extends BaseTXT {}
