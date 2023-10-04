import * as _ from "lodash";
import { ElementBy } from "./interface";

export function findElement<T extends string = string>(
  by: ElementBy,
  selector: T
): HTMLElement | null {
  switch (by) {
    case "id":
      return document.getElementById(selector);
    default:
      return null;
  }
}

export function activeSection<T extends string = string>(trust: number = 0.5): T {
  const sections = document.querySelectorAll("section");
  for (const section of sections) {
    const treshold = window.innerHeight * trust;
    const { top, bottom } = section.getBoundingClientRect();

    if (top <= treshold && bottom >= treshold) {
      return _.trim(section.id) as T;
    }
  }
  return "" as T;
}

export function isSection<T extends string = string>(id: T, trust: number = 0.5): boolean {
  return activeSection(trust) === _.trim(id);
}
