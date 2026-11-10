// Steven Gonell
// 11/3/2026
// This component displays the current screen size category (Phone, Tablet, or Desktop) based on the window width.
// It uses the window resize event to update the screen size category dynamically.
import { useState, useEffect } from 'react'
import '../styles/styles.css'
function ScreenSize() {
  // State to store the current window width
  const [width, setWidth] = useState(window.innerWidth)
  const [device, setDevice] = useState('')
  const [deviceStyle, setDeviceStyle] = useState('')
  
  function getDevice() {
    if (width < 600) {
      setDevice('📱 Phone')
      setDeviceStyle('device-phone')
    }
    else if (width <= 1023) {
      setDevice('📟 Tablet')
      setDeviceStyle('device-tablet')
    }
    else{ 
      setDevice('💻 Desktop')
      setDeviceStyle('device-desktop')
    }
  }

  useEffect(() => {
    // Effect to update the window width state when the window is resized
    // This ensures that the screen size category is always up-to-date with the actual window width.
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    getDevice()
  }, [width])

 // This is what will be displayed on the page based on the current window width
  return (
    <div className={`device ${deviceStyle}`}>
      <p>{device}</p>
    </div>
  )
}
 
export default ScreenSize
