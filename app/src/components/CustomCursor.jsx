import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const follower = document.querySelector('.cursor-follower')

    if (!cursor || !follower) return

    const moveCursor = (e) => {
      const x = e.clientX
      const y = e.clientY
      
      // Move main cursor immediately
      cursor.style.left = x + 'px'
      cursor.style.top = y + 'px'
      
      // Move follower with slight delay
      setTimeout(() => {
        follower.style.left = x + 'px'
        follower.style.top = y + 'px'
      }, 80)
    }

    const handleMouseEnter = (e) => {
      const target = e.target
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.classList.contains('clickable') ||
          target.closest('a') ||
          target.closest('button') ||
          target.classList.contains('cta-button') ||
          target.classList.contains('project-link') ||
          target.classList.contains('theme-toggle')) {
        
        setIsHovering(true)
        cursor.classList.add('cursor-hover')
        follower.classList.add('cursor-follower-hover')
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.classList.contains('clickable') ||
          target.closest('a') ||
          target.closest('button') ||
          target.classList.contains('cta-button') ||
          target.classList.contains('project-link') ||
          target.classList.contains('theme-toggle')) {
        
        setIsHovering(false)
        cursor.classList.remove('cursor-hover')
        follower.classList.remove('cursor-follower-hover')
      }
    }

    // Add event listeners
    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)
    
    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </>
  )
}

export default CustomCursor
