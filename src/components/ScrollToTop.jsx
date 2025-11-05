import { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsPressed(false)
            setIsHovered(false)
          }}
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: isPressed || isHovered ? '#8064A2' : '#FFFFFF',
            border: '2px solid #E0E0E0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: isPressed || isHovered ? '#FFFFFF' : '#8064A2',
            zIndex: 1000,
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <i className="bi bi-chevron-up"></i>
        </button>
      )}
    </>
  )
}

export default ScrollToTop
