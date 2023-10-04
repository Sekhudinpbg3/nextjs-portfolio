import { Inter, Lato } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: "400",
  fallback: ["sans"],
});

export const lato = Lato({
  subsets: ["latin"],
  preload: true,
  weight: "700",
  fallback: ["sans"],
});
