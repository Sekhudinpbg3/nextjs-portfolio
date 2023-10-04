import * as _ from "lodash";
import { Metadata } from "next";

export class Meta {
  public static default: Metadata = {
    title: _.upperFirst(_.trim(`Sekhudin's Portfolio`)),
    description: "This is Sekhudin's portfolio that shows general information and skills mastered",
    themeColor: "#FFFFFF",
  };
}
