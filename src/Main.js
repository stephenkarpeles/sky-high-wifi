import React from 'react'
import Hero from './components/Hero.js'
import Values from './components/Values.js'
import Problem from './components/Problem.js'
import ContactSection from './components/ContactSection.js'
import AboutSection from './components/AboutSection.js'

function Main() {
  return (
    <main>
      <Hero />
      <Values />
      <Problem />
      <ContactSection />
      <AboutSection />
    </main>
  )
}

export default Main