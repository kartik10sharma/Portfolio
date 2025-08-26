import React, { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
      applyTheme(savedTheme)
    } else {
      // Default to dark theme
      applyTheme('dark')
    }
  }, [])

  const applyTheme = (theme) => {
    // Remove existing theme classes
    document.body.classList.remove('light-theme', 'dark-theme')
    document.documentElement.classList.remove('light-theme', 'dark-theme')
    
    if (theme === 'light') {
      document.body.classList.add('light-theme')
      document.documentElement.classList.add('light-theme')
    } else {
      document.body.classList.add('dark-theme')
      document.documentElement.classList.add('dark-theme')
    }
  }

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    applyTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
      <div className={`theme-option dark ${isDark ? 'active' : ''}`}>
        <span className="theme-icon">🌙</span>
      </div>
      <div className={`theme-option light ${!isDark ? 'active' : ''}`}>
        <span className="theme-icon">☀️</span>
      </div>
    </div>
  )
}

export default ThemeToggle
