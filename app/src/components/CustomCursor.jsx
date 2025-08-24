import React, { useEffect } from 'react'

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const follower = document.querySelector('.cursor-follower')

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      
      setTimeout(() => {
        follower.style.left = e.clientX + 'px'
        follower.style.top = e.clientY + 'px'
      }, 50)
    }

    document.addEventListener('mousemove', moveCursor)
    
    return () => document.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </>
  )
}

export default CustomCursor
