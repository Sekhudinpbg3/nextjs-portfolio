import First from "./01.jpg";
import Second from "./02.jpg";
import Third from "./03.jpg";
import Fourth from "./04.jpg";
import { ImgSource, imgSource } from "../util";

export const JerseyStore: ImgSource[] = [
  imgSource(First, "first-capture"),
  imgSource(Second, "second-capture"),
  imgSource(Third, "third-capture"),
  imgSource(Fourth, "fourth-capture"),
];
