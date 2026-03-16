import first from '../assets/projects/first.png'
import second from '../assets/projects/second.png'
import React, { useRef } from 'react'

const projects = [
  {
    title: 'Image Processing System',
    description: 'Built a serverless image processing pipeline using models like YOLO for object detection and SRGAN for super-resolution, enabling high-quality, automated analysis of over 1000 images with 98% accuracy.',
    image: first,
    techStack: ['Yolo', 'S3', 'JavaScript', 'Redis', 'AWS'],
    github: 'https://github.com/Image-processing-cdef',
    demo: 'https://cdef-project.vercel.app/'
  },
  {
    title: 'Electricity Load Prediction Model',
    description: 'A web-based power demand prediction system using LSTM model to forecast daily, weekly and monthly electricity load. Used Python and ML libraries to process 10,000+ rows of time-series electricity grid data.',
    image: second,
    techStack: ['Python', 'JS', 'FastAPI', 'Tensorflow', 'Vite'],
    github: 'https://github.com/kartik10sharma/SIH2024',
    demo: 'https://github.com/kartik10sharma/SIH2024/blob/main/README.md'
  },
  {
    title: 'DevPath - AI-Powered Workflow Generator',
    description: 'DevPath is an intelligent workflow generation system that leverages Google Gemini AI to create comprehensive, step-by-step development roadmaps for web and mobile applications. Whether youre building a custom app or cloning popular platforms like Facebook, Uber, or Netflix, DevPath guides you through every phase of development.',
    image: second,
    techStack: [ 'JS', 'FastAPI', 'Vite',' Gemini'],
    github: 'https://github.com/kartik10sharma/minor_prj',
    demo: 'https://minor-prj.vercel.app/'
  }
]

// Repeat 4x so the seamless loop works at any screen width with only 2 projects
const repeated = [...projects, ...projects, ...projects, ...projects]

const FeaturedProjects = () => {
  const trackRef = useRef(null)

  const handleMouseEnter = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'
  }
  const handleMouseLeave = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running'
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>
      </div>

      <div
        className="marquee-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="marquee-track" ref={trackRef}>
          {repeated.map((project, index) => (
            <div key={index} className="project-card marquee-card visible">
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