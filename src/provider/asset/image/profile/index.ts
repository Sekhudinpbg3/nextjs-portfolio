import bw from "./bw.png";
import color from "./color.jpeg";
import main from "./main.jpeg";
import { ImgSource, imgSource } from "../util";

type ProfileName = "bw" | "color" | "main";

export const Profile: Record<ProfileName, ImgSource> = {
  bw: imgSource(bw, "profile-black-white"),
  color: imgSource(color, "profile-colorfull"),
  main: imgSource(main, "main-profile"),
};
