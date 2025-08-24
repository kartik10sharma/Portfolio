import React from 'react'

const ResumeButton = () => {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a')
    link.href = 'https://docs.google.com/document/d/1q1TmQDVV1YsvvoFcdoMayOweHzck2cfLjfH4T7R0ys8/edit?usp=sharing'
    link.download = 'Kartik_Sharma_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <a href="https://docs.google.com/document/d/1q1TmQDVV1YsvvoFcdoMayOweHzck2cfLjfH4T7R0ys8/edit?usp=sharing" className="resume-btn" onClick={handleDownload}>
      📄
    </a>
  )
}

export default ResumeButton
