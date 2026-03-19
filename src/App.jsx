import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Philosophy from './components/Philosophy'
import FitQuest from './components/FitQuest'
import AcademicProjects from './components/AcademicProjects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="App">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Philosophy />
      <FitQuest />
      <AcademicProjects />
      <Contact />
    </div>
  )
}

export default App
