import First from "./04.jpeg";
import Second from "./05.jpeg";
import Third from "./03.jpeg";
import Fourth from "./01.jpeg";
import Fiveth from "./02.jpeg";
import Sixth from "./06.jpeg";
import { ImgSource, imgSource } from "../util";

export const ChasierApp: ImgSource[] = [
  imgSource(First, "first-capture"),
  imgSource(Second, "second-capture"),
  imgSource(Third, "third-capture"),
  imgSource(Fourth, "fourth-capture"),
  imgSource(Fiveth, "fiveth-capture"),
  imgSource(Sixth, "sixth-capture"),
];
