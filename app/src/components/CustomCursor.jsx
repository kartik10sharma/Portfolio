import React, { useEffect } from 'react'

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const follower = document.querySelector('.cursor-follower')

    if (!cursor || !follower) return

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      setTimeout(() => {
        follower.style.left = e.clientX + 'px'
        follower.style.top = e.clientY + 'px'
      }, 80)
    }

    const isInteractive = (target) => {
      // Guard: must be a real Element (not document, window, or text node)
      if (!target || typeof target.closest !== 'function') return false
      return (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('clickable') ||
        target.classList.contains('cta-button') ||
        target.classList.contains('project-link') ||
        target.classList.contains('theme-toggle') ||
        !!target.closest('a') ||
        !!target.closest('button')
      )
    }

    const handleMouseEnter = (e) => {
      if (isInteractive(e.target)) {
        cursor.classList.add('cursor-hover')
        follower.classList.add('cursor-follower-hover')
      }
    }

    const handleMouseLeave = (e) => {
      if (isInteractive(e.target)) {
        cursor.classList.remove('cursor-hover')
        follower.classList.remove('cursor-follower-hover')
      }
    }

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