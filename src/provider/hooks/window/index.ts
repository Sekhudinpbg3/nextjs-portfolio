import { useEffect, useCallback } from 'react';
import { Grid, Breakpoint } from 'antd';
import { UseWindowLoad, UseWindowMedia, UseWindowEvent } from "./interface";

export const useWindowLoad: UseWindowLoad = (listener) => {
  const handler = useCallback(listener, [])
  useEffect(handler, [])
}

export const useWindowMedia: UseWindowMedia<Breakpoint> = (screen, listener) => {
  const media = Grid.useBreakpoint()
  useEffect(() => {
    if (media[screen]) {
      listener()
    }
  }, [])
}

export const useWindowEvent: UseWindowEvent = (event, listener) => {
  useEffect(() => {
    window.addEventListener(event, listener)
    return () => { window.removeEventListener(event, listener) }
  }, [])
}