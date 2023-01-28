import React, { useEffect } from 'react'

import Header from '@/components/Header'
import Home from '@/components/Home'
import About from '@/components/About'
import Tech from '@/components/Tech'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

const App = () => {
  useEffect(() => {
    scrollTo(0, 0)

    document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px')
    window.addEventListener('resize', () => {
      document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px')
    })

  }, [])
  return (
    <>
      <Header />
      <Home />
      <About />
      <Tech />
      <Services />
      <Work />
      <Contact />
    </>
  )
}

export default App
