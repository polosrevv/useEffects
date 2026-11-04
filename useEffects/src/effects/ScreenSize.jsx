import { useState, useEffect } from 'react'
 
function ScreenSize() {
  const [width, setWidth] = useState(window.innerWidth)
 
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
 
  return <p>Window width: {width}px</p>
}
 
export default ScreenSize
