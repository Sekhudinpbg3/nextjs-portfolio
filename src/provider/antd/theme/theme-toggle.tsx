"use client";
import { TagProps } from "antd";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { Icon } from "@provider/asset";
import { useThemeContext } from './context';

export function ThemeToggle(props: Omit<TagProps, 'onChange'>) {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === 'dark';

  const clickHandler = () => {
    toggleTheme()
  }

  return (
    <button className={`flex_centerxy hover_blur h-9 w-9 p-1 rounded-full`}
      name="theme-toggle"
      aria-label="theme-toggle"
      onClick={clickHandler}>
      <Icon src={isDark ? MdDarkMode : MdOutlineLightMode} />
    </button>
  )
}