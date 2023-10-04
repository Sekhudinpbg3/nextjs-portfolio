"use client"
import { createContext, useContext, useState } from "react";
import * as _ from 'lodash'
import { PropsChildNode } from "@provider/types";
import { AntdProvider } from "../provider";
import { LIGHT_ALG, DARK_ALG, THEME_KEY } from "../const";

export type CurrentTheme = "light" | "dark";
export type ToggleTheme = () => void;
export interface ThemeContext {
  theme: CurrentTheme;
  toggleTheme: ToggleTheme;
}

export const ThemeContext = createContext<ThemeContext>({
  theme: 'light',
  toggleTheme: () => { }
});

export function useThemeContext(): ThemeContext {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: PropsChildNode) {
  const [theme, setTheme] = useState<CurrentTheme>('light');

  const toggleTheme: ToggleTheme = () => {
    const body = document.getElementById("App")
    const newTheme: CurrentTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, newTheme);
    setTheme(newTheme);
    if (body) {
      body.classList.toggle('dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AntdProvider theme={{ algorithm: theme === 'dark' ? DARK_ALG : LIGHT_ALG }}>
        {children}
      </AntdProvider>
    </ThemeContext.Provider>
  )
}