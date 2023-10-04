import * as _ from "lodash";
import { Metadata } from "next";

export class Meta {
  public static default: Metadata = {
    title: {
      template: "%s | Djorna",
      default: _.upperFirst(_.trim(`Djorna | Apps`)),
    },
  };
}
