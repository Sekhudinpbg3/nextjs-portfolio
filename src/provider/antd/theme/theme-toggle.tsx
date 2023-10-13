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
    gsapFromTo({ currentTarget: "div" }, {
      selector: `
          #overlay_home,
          #overlay_about,
          #overlay_skills,
          #overlay_portfolio,
          #overlay_contact,
          div.section,
          div.card_regular,
          h2, h3, h4, h5,
          p, a
          `,
      from: { opacity: 0 },
      to: { opacity: 1, ease: Gsap.ease("sine") }
    }, 1)
  }

  return (
    <button className={`hover_blur h-7 w-7 p-1 rounded-full`}
      name="theme-toggle"
      aria-label="theme-toggle"
      onClick={clickHandler}>
      {isDark ? <MdDarkMode /> : <MdOutlineLightMode />}
    </button>
  )
}