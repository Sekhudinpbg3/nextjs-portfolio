"use client";
import { ThemeConfig, theme } from "antd";
import { Font } from "@provider/asset";

const { inter } = Font;
export const THEME_KEY = "theme";
export const { defaultAlgorithm: LIGHT_ALG, darkAlgorithm: DARK_ALG } = theme;
export const CONFIG: ThemeConfig = {
  token: {
    fontFamily: inter.style.fontFamily,
    screenSM: 640,
    screenSMMin: 640,
    screenSMMax: 767,
    screenMD: 768,
    screenMDMin: 768,
    screenMDMax: 1023,
    screenLG: 1024,
    screenLGMin: 1024,
    screenLGMax: 1279,
    screenXL: 1280,
    screenXLMin: 1280,
    screenXLMax: 1535,
    screenXXLMin: 1536,
  },
  components: {
    Input: {
      colorBgBase: "transparent",
      colorBgContainer: "transparent",
    },
  },
};
