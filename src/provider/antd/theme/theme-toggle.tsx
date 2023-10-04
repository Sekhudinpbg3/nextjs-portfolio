"use client";
import { TagProps } from "antd";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { Gsap, gsapFromTo } from "@provider/animation";
import { useThemeContext } from './context';

export function ThemeToggle(props: Omit<TagProps, 'onChange'>) {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === 'dark';

  const clickHandler = () => {
    toggleTheme()
    const themeTweens = gsapFromTo({ currentTarget: "#App" }, [
      {
        selector: "#overlay_home, #overlay_about, #overlay_skills",
        from: {
          opacity: 0,
          width: 5,
          height: 5,
          borderRadius: "0 0 0 99999",
          top: 0,
          right: 0
        },
        to: {
          opacity: 1,
          width: "100%",
          height: "100%",
          borderRadius: "0 0 0 0",
          ease: Gsap.ease("sine")
        }
      },
      {
        selector: "#home h2",
        from: {
          opacity: 0,
          translateX: -200
        },
        to: {
          opacity: 1,
          translateX: 0,
        }
      },
      {
        selector: "#home h3",
        from: {
          opacity: 0,
          translateX: 200
        },
        to: {
          opacity: 1,
          translateX: 0,
        }
      },
      {
        selector: "#home p",
        from: {
          opacity: 0,
          translateX: 200
        },
        to: {
          opacity: 1,
          translateX: 0,
        }
      },
      {
        selector: "#home button",
        from: {
          translateX: 200,
          translateY: 200,
          opacity: 0,
        },
        to: {
          translateX: 0,
          translateY: 0,
          opacity: 1,
          ease: Gsap.ease("sine.inOut")
        }
      },
      {
        selector: "#profile_img",
        from: {
          scale: 0.5,
        },
        to: {
          scale: 1,
        }
      },
    ], 1);
  }

  return (
    <button className={`hover_blur hover:rotate-180 duration-500
      h-7 w-7 p-1 rounded-full`}
      name="theme-toggle"
      aria-label="theme-toggle"
      onClick={clickHandler}>
      {isDark ? <MdDarkMode /> : <MdOutlineLightMode />}
    </button>
  )
}