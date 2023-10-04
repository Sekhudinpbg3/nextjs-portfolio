import * as _ from "lodash";
import { ThemeConfig } from "antd";
import {
  ItemType,
  MenuItemType,
  SubMenuType,
  MenuItemGroupType,
  MenuDividerType,
} from "antd/lib/menu/hooks/useItems";
import { CONFIG } from "./const";

type Label = MenuItemType["label"];
type Key<T = string> = T;
type Icon = MenuItemType["icon"];
type Children = ItemType[];

type ItemOpt = Omit<MenuItemType, "label" | "key" | "icon">;
type SubOpt = Omit<SubMenuType, "label" | "key" | "icon" | "children">;
type GroupOpt = Omit<MenuItemGroupType, "label" | "key" | "children">;
type DividerOpt = Omit<MenuDividerType, "type" | "dashed">;

export type MenuItems = ItemType[];

export class Menu {
  static item<T extends string = string>(
    label: Label,
    key: Key<T>,
    icon?: Icon,
    opt?: ItemOpt
  ): MenuItemType {
    return { key, label, icon, ...opt };
  }

  static sub<T extends string = string>(
    label: Label,
    key: Key<T>,
    children: Children,
    icon?: Icon,
    opt?: SubOpt
  ): SubMenuType {
    return { children, label, key, icon, ...opt };
  }

  static group<T extends string = string>(
    label: Label,
    key: Key<T>,
    children: Children,
    opt?: GroupOpt
  ): MenuItemGroupType {
    return { type: "group", label, key, children, ...opt };
  }

  static divider<T extends string = string>(
    key?: Key<T>,
    dashed?: boolean,
    opt?: DividerOpt
  ): MenuDividerType {
    return { type: "divider", key, dashed, ...opt };
  }
}

export class Antd {
  public static default = CONFIG;
  public static theme = CONFIG;
}
