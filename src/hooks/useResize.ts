import { useState, useEffect } from "react";

const useResize = () => {
  const [width, setWidth] = useState<number>(0)

  const resizeHandler = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    resizeHandler()
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return width
}

export default useResize
