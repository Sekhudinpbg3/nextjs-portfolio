import { StaticImageData } from "next/image";
import Profile from "./sekhudin_profile.png";
import Ex1 from "./example1.jpg";
import Ex2 from "./example2.jpg";
import Ex3 from "./example3.jpg";

export interface ImageSource {
  src: StaticImageData;
  alt: string;
  url: StaticImageData["src"];
}

function source(img: StaticImageData, alt?: string): ImageSource {
  return {
    src: img,
    alt: alt || "alternative",
    url: img.src,
  };
}

export class Img {
  public static profile = source(Profile, "Sekhudin-profile");

  // for example project
  public static ExProject: ImageSource[] = [source(Ex1), source(Ex2), source(Ex3)];
}
