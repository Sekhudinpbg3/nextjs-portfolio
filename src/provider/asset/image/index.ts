import { StaticImageData } from "next/image";
import ProfileImg from "./sekhudin_profile.png";

interface ImageSource {
  src: StaticImageData;
  alt: string;
  url: StaticImageData["src"];
}

export class Img {
  public static profile: ImageSource = {
    src: ProfileImg,
    alt: "Sekhudin-profile",
    url: ProfileImg.src,
  };
}
