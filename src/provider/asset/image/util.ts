import { StaticImageData } from "next/image";

export interface ImgSource {
  src: StaticImageData;
  alt: string;
  url: StaticImageData["src"];
}

export function imgSource(img: StaticImageData, alt?: string): ImgSource {
  return {
    src: img,
    alt: alt || "alternative",
    url: img.src,
  };
}
