"use client";
import { useMemo, ReactNode } from "react";
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { IconContext } from "react-icons";
import { PropsChildNode } from "@provider/types"
import { ThemeProvider } from './theme/context';
import { AntdProvider } from './provider';
import { Antd } from "./util";

export function AntdStyleRegistry({ children }: PropsChildNode) {
  const cache = useMemo<Entity>(() => createCache(), [createCache]);
  useServerInsertedHTML(() => (
    <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
  ));

  return (
    <ThemeProvider>
      <StyleProvider
        cache={cache}
        hashPriority="high">
        <AntdProvider theme={Antd.theme}>
          <IconContext.Provider value={{
            className: `
            w-5 h-5 fill-gray-700 dark:fill-gray-100
            stroke-0 stroke-gray-700 dark:stroke-gray-100
            `,
          }}>
            {children}
          </IconContext.Provider>
        </AntdProvider>
      </StyleProvider>
    </ThemeProvider>
  );
}