import emailjs from "@emailjs/browser";
import { EmailForm, FormSelector } from "./interface";

emailjs.init(process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || "");
export class Email {
  static async send(form: EmailForm): Promise<any> {
    return await emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "",
      form
    );
  }

  static async sendForm(formSelector: FormSelector): Promise<any> {
    return await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "",
      formSelector
    );
  }

  static pattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  static phone: RegExp = /^\+?\d{1,3}?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
}
