import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TechnicalMastery from './components/TechnicalMastery'
import FeaturedProjects from './components/FeaturedProjects'
import ProfessionalJourney from './components/ProfessionalJourney'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import BackgroundAnimation from './components/BackgroundAnimation'
import ThemeToggle from './components/ThemeToggle'
import SocialLinks from './components/SocialLinks'
import ResumeButton from './components/ResumeButton'
import ScrollProgress from './components/ScrollProgress'

import './App.css'

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          
          if (entry.target.classList.contains('skills-chart')) {
            const skillFills = entry.target.querySelectorAll('.skill-fill')
            skillFills.forEach((fill, index) => {
              setTimeout(() => {
                const percentage = fill.parentElement.nextElementSibling.textContent
                fill.style.width = percentage
              }, index * 200)
            })
          }
        }
      })
    }, observerOptions)

    setTimeout(() => {
      const sections = document.querySelectorAll('.section')
      const skillCategories = document.querySelectorAll('.skill-category')
      const projectCards = document.querySelectorAll('.project-card')
      const timelineItems = document.querySelectorAll('.timeline-item')
      const skillsChart = document.querySelectorAll('.skills-chart')
      const formGroups = document.querySelectorAll('.form-group')

      ;[...sections, ...skillCategories, ...projectCards, ...timelineItems, ...skillsChart, ...formGroups]
        .forEach(el => {
          if (el) observer.observe(el)
        })
    }, 100)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <BackgroundAnimation />
      <div className="App">
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <div className="adjustment-margins">
        <main>
          <Hero />
          <TechnicalMastery />
          <FeaturedProjects />
          <ProfessionalJourney />
          <ContactForm />
        </main>
        </div >
        
        <ThemeToggle />
        <SocialLinks />
        <ResumeButton />
      </div>
      <Footer />
    </>
  )
}

export default App
