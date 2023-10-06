import { MdAttachEmail, MdWhatsapp } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { ContactAddress } from "./interface";

function mailTo(email: string): string {
  return `mailto:${email}`;
}

function waTo(wa: string | number): string {
  return `https://api.whatsapp.com/send?phone=${wa}`;
}

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
    type: "Official Mail",
    icon: MdAttachEmail,
    anchor: {
      text: "Contact Now",
      href: mailTo(EMAIL),
    },
  },
  {
    address: WA,
    type: "Official Phone",
    icon: MdWhatsapp,
    anchor: {
      text: "Contact Now",
      href: waTo(WA),
    },
  },
];
