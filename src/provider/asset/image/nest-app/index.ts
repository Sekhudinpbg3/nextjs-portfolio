import First from "./01.jpeg";
import Second from "./02.jpeg";
import Third from "./03.jpeg";
import Fourth from "./04.jpeg";
import { ImgSource, imgSource } from "../util";

export const NestApp: ImgSource[] = [
  imgSource(First, "first-capture"),
  imgSource(Second, "second-capture"),
  imgSource(Third, "third-capture"),
  imgSource(Fourth, "fourth-capture"),
];
