import { MdAttachEmail, MdWhatsapp } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { ContactText, ContactAddress } from "./interface";

function mailTo(email: string): string {
  return `mailto:${email}`;
}

function waTo(wa: string | number): string {
  return `https://api.whatsapp.com/send?phone=${wa}`;
}

export const TXT: ContactText = {
  summary: `You can easily get in touch with me through various communication channels,
  and I'm open to making new connections and engaging in meaningful discussions.
  I'm looking forward to connecting with you and having insightful discussions`,
};

const EMAIL = "Sekhudinpbg3@gmail.com";
const WA = "+6281802203863";

export const CONTACTS: ContactAddress[] = [
  {
    address: "Purbalingga, Central Java, Indonesia",
    type: "Address",
    icon: FaMapLocationDot,
  },
  {
    address: EMAIL,
    type: "Email",
    icon: MdAttachEmail,
    anchor: {
      text: "Contact Now",
      href: mailTo(EMAIL),
    },
  },
  {
    address: WA,
    type: "Whatsapp",
    icon: MdWhatsapp,
    anchor: {
      text: "Contact Now",
      href: waTo(WA),
    },
  },
];
