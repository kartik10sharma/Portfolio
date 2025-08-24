import React from 'react'

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="floating-elements">
        <div className="floating-element">⚡</div>
        <div className="floating-element">🧠</div>
        <div className="floating-element">🚀</div>
      </div>
      <div className="hero-content">
        <h1>Hi, This is Kartik Sharma</h1>
        <p>Final Year student of artificial intelligence and machine learning interested in creating innovative solutions and cutting-edge technology</p>
        <div className="cta-container">
          <a href="#projects" className="cta-button cta-primary">Explore My Work</a>
          <a href="#contact" className="cta-button">Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
