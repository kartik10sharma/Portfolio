import React from 'react'

const TechnicalMastery = () => {
  const skills = {
    'Machine Learning': [
      'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost',
      'Neural Networks', 'Deep Learning', 'Computer Vision', 'NLP',
      'Reinforcement Learning', 'MLOps'
    ],
    'Frameworks': [
      'Pandas', 'PyTorch', 'Numpy', 'Tensorflow', 'Flask',
      'Next.js',
      'Matplotlib', 'Seaborn', 'JavaScript'
    ],
    'MLOps & Cloud': [
      'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes',
      'MLflow', 'Kubeflow', 'Apache Airflow', 'Jenkins',
      'Terraform', 'Git', 'CI/CD'
    ],
    'Data Engineering': [
      'Hadoop', 'Kafka', 'MongoDB', 'PostgreSQL',
      'Redis', 'MySQL'
      
    ]
  }

  const proficiencyData = [
    { name: 'Python', level: 95 },
    { name: 'Machine Learning', level: 92 },
    { name: 'React/JS', level: 88 },
    { name: 'Cloud Computing', level: 85 },
    { name: 'Data Engineering', level: 82 },
    { name: 'DevOps', level: 78 }
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Technical Mastery</h2>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="skill-category">
              <h3>
                <span className="skill-icon">
                  {category === 'Machine Learning' && '🧠'}
                  {category === 'Frameworks' && '⚡'}
                  {category === 'MLOps & Cloud' && '🚀'}
                  {category === 'Data Engineering' && '📊'}
                </span>
                {category}
              </h3>
              <div className="skills-list">
                {skillList.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-chart">
          <h3>Proficiency Levels</h3>
          <div className="skill-bars">
            {proficiencyData.map((skill, index) => (
              <div key={index} className="skill-bar">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-progress">
                  <div 
                    className="skill-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalMastery
