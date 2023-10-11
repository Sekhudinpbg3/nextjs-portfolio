import First from "./01.jpg";
import Second from "./02.jpg";
import { ImgSource, imgSource } from "../util";

export const StockApi: ImgSource[] = [
  imgSource(First, "first-capture"),
  imgSource(Second, "second-capture"),
];
