import React from 'react'

const BackgroundAnimation = () => {
  return (
    <div 
      className="bg-animation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: `
          radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(255, 45, 146, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(0, 122, 255, 0.2) 0%, transparent 50%)
        `,
        animation: 'bgMove 10s ease-in-out infinite'
      }}
    ></div>
  )
}

export default BackgroundAnimation
