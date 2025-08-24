import React from 'react'

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header>
      <nav className="container">
        <div className="logo">AI & ML Engineer</div>
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
