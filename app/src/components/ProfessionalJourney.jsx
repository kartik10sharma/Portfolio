import React from 'react'

const ProfessionalJourney = () => {
  const experiences = [
    {
      title: 'SNE Intern',
      company: 'Springer Capital',
      duration: 'Aug 2025 - Present',
      description: 'Developed next-generation recommendation systems using transformer architectures. Improved model performance by 35% through novel attention mechanisms and reduced inference latency by 60% using advanced optimization techniques.'
    },
    {
      title: 'SDE Intern',
      company: 'Bluestocks',
      duration: 'Mar 2025 - Apr 2025',
      description: 'Engineered backend for a stock IPO dashboard using Django REST Framework,reducing data processing time by 30% and increasing workflow efficiency by 15%.'
    },
    {
      title: 'AI Intern',
      company: 'EddyTools Tech Solutions',
      duration: 'Jun 2024 - Aug 2024',
      description: 'Developed a Micro SaaS application utilizing AI tools to automate workflows and enhance operational efficiency and reducing manual processing by 80%.'
    }
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Professional Journey</h2>
        
        <div className="experience-timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <div className="company">{exp.company}</div>
                <div className="duration">{exp.duration}</div>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfessionalJourney
