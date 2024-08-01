import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { location } = useLocation()
  useEffect(() => {
    window.scrollTo(-10, -10)
  }, [location])  
  
}

export default ScrollToTop