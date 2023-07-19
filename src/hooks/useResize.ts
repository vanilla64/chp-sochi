import { useState, useEffect } from "react";

const useResize = () => {
  const [width, setWidth] = useState<number>(global?.window && window.innerWidth)

  const resizeHandler = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return width
}

export default useResize
