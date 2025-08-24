import first from '../assets/projects/first.png'
import second from '../assets/projects/second.png'
import React, { useEffect } from 'react'


const projects = [
  {
    title: 'Image Processing System',
    description: 'Built a serverless image processing pipeline using models like YOLO for object detection and SRGAN for super-resolution, enabling high-quality, automated analysis of over 1000 images with 98% accuracy. Leveraged Appwrite (backend as service) to support automatic, real-time scaling and process peak workloads with 0 downtime.',
    image: first,
    techStack: ['Yolo', 'S3', 'JavaScript', 'Redis', 'AWS '],
    github: 'https://github.com/Image-processing-cdef',
    demo: 'https://cdef-project.vercel.app/'
  },
  {
    title: 'Electricity Load Prediction Model',
    description:  'A web-based power demand prediction system using LSTM model to forecast daily, weekly and monthly electricity load. Used Python and ML libraries to process 10,000+ rows of time-series electricity grid data Implemented FastAPI and ReactJS for real-time prediction platform; achieved 85% forecasting accuracy on Delhi grid data intuitive chart visualizations, and MAPE-based accuracy metrics are included',
    image: second,
    techStack: ['Python', 'JS', 'FastAPI', 'Tensorflow', 'Vite'],
    github: 'https://github.com/kartik10sharma/SIH2024',
    demo: 'https://github.com/kartik10sharma/SIH2024/blob/main/README.md'
  }
]

const FeaturedProjects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card')

    const onScroll = () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.9) {
          card.classList.add('visible')
        }
      })
    }

    window.addEventListener('scroll', onScroll)
    onScroll() // initial check on mount

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-full-bg"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
