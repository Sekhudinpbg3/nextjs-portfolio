import { AttendanceApp } from "./attendance-app";
import { ChasierApp } from "./chasier-dotnet";
import { JerseyStore } from "./jersey-store";
import { NestApp } from "./nest-app";
import { StockApi } from "./stock-api";
import { Stock4Casting } from "./stock-forecasting";
import Profile from "./profile-01.png";
import NoImage from "./no-image.png";
import { ImgSource, imgSource } from "./util";

type ProjectName =
  | "AttendanceApp"
  | "ChasierApp"
  | "JerseyStore"
  | "NestApp"
  | "StockApi"
  | "Stock4Casting"
  | "NoImages";

export class Img {
  public static profile = imgSource(Profile, "Sekhudin-profile");
  public static noImage = imgSource(NoImage, "no-image");

  public static project: Record<ProjectName, ImgSource[]> = {
    AttendanceApp,
    ChasierApp,
    JerseyStore,
    NestApp,
    StockApi,
    Stock4Casting,
    NoImages: [imgSource(NoImage, "no-image")],
  };
}
