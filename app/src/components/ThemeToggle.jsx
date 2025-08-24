import React, { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
      document.body.className = savedTheme === 'dark' ? '' : 'light-theme'
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    document.body.className = newTheme === 'dark' ? '' : 'light-theme'
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className={`theme-option dark ${isDark ? 'active' : ''}`}></div>
      <div className={`theme-option light ${!isDark ? 'active' : ''}`}></div>
    </div>
  )
}

export default ThemeToggle
