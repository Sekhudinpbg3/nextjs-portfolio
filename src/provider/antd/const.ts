"use client";
import { ThemeConfig, theme } from "antd";
import { Font } from "@provider/asset";

const { inter } = Font;
export const THEME_KEY = "theme";
export const { defaultAlgorithm: LIGHT_ALG, darkAlgorithm: DARK_ALG } = theme;
export const CONFIG: ThemeConfig = {
  token: {
    fontFamily: inter.style.fontFamily
  },
  components: {},
};
