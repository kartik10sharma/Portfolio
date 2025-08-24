import React, { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (scrollTop / scrollHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className="scroll-progress" 
      style={{ width: `${scrollProgress}%` }}
    ></div>
  )
}

export default ScrollProgress
