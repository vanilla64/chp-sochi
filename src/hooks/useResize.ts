'use client'

import { useState, useEffect } from "react";

export const useResize = () => {
  const [width, setWidth] = useState<number>(window.screen.width)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const resizeHandler = (evt: UIEvent) => {
    const target = evt.target as Window
    setWidth(target.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return width
}
